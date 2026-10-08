# 极简导航 · 高并发骨架屏导航搜索站

输入框为空时只显示极简的空态（品牌 + 搜索框 + 热门关键词），输入关键词后展示 shimmer 骨架屏，随后呈现全站搜索结果；点击结果进入带广告位的跳转中转页。

服务端提供 `/api/search`（内存索引 + LRU 缓存）与 `/api/ads`（广告配置）；纯静态托管（如 GitHub Pages）下前端会自动降级为直接遍历 `data/*.json`，无需后端也能使用。

## 快速开始

```bash
cd o1
npm install
npm start
```

默认监听 `0.0.0.0:3003`，可用环境变量覆盖端口：

```bash
PORT=8080 npm start
```

访问：

- 搜索主页：`http://localhost:3003/`
- 跳转页示例：`http://localhost:3003/jump.html?name=百度&url=https%3A%2F%2Fwww.baidu.com`

## 功能特性

- 空态极简：品牌 Logo、搜索框与热门关键词按钮
- 骨架屏即时反馈：请求未返回时先渲染 shimmer 骨架卡片，避免白屏
- 防抖与竞态控制：输入 180ms 防抖；请求带递增序号，只渲染最新一次结果
- 全量 JSON 搜索：服务端遍历 `data/` 下除 `ads.json` 外的全部 JSON，内存索引过滤
- 结果缓存：LRU 结果缓存（上限 200 条）
- 数据热更新：记录文件 `mtime`，数据文件改动后自动重新加载，无需重启
- 静态托管降级：后端不可用时前端直接拉取 `data/*.json` 检索（`index.html` 的 `DATA_FILES` 固定列出 7 个数据文件）
- 跳转中转页：5 秒倒计时自动跳转或点击立即前往，仅信任 `http`/`https` 协议，非法地址回退到百度搜索
- 预留广告位：跳转页顶部图片横幅 + 文字广告链，数据来自 `data/ads.json`，无配置自动隐藏
- 无第三方图标库与字体：图标由系统字体 + 内联 SVG + 名称首字母生成，规避版权风险

## 目录结构

```
o1/
├── index.html                   # 骨架屏搜索主页（含静态托管降级逻辑）
├── jump.html                     # 跳转中转页（图片广告位 + 文字广告位）
├── server.js                     # Express 静态服务 + /api/search + /api/ads
├── package.json                  # express / cors 依赖，start 脚本
├── package-lock.json
├── DESIGN.md                     # 设计文档
├── README.md                     # 本文档
├── o1-nav-full-20260812.7z       # 打包归档
├── assets/
│   └── ad-banner.svg             # 示例广告横幅图
└── data/                         # 数据目录（除 ads.json 外全部参与搜索）
    ├── search.json               # 搜索引擎 / 导航
    ├── tools.json                # 在线工具
    ├── ai.json                   # AI 服务
    ├── dev.json                  # 开发 / 编程学习
    ├── cloud.json                # 网盘 / 云服务
    ├── video.json                # 视频解析下载
    ├── other.json                # 其他（翻译、地图、邮箱、域名等）
    └── ads.json                  # 广告位配置（不参与搜索）
```

当前数据共 51 条：`search` 6、`tools` 17、`ai` 3、`dev` 4、`cloud` 3、`video` 2、`other` 16。

## API

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/search?q=关键词&limit=50` | 全量 JSON 搜索，返回 `{ total, list }`；`q` 为空返回空列表，`limit` 最大 100 |
| GET | `/api/ads` | 返回广告配置 `{ image: [], text: [] }` |

其余路径由 `express.static` 提供，默认首页为 `index.html`。

## 数据与广告配置

网站数据为数组，字段为 `name`、`url`、`desc`、`tags`：

```json
[{ "name": "百度", "url": "https://www.baidu.com", "desc": "中文搜索引擎", "tags": ["搜索"] }]
```

广告配置 `data/ads.json`（示例内容）：

```json
{
  "image": [
    { "title": "图片广告位（示例）", "url": "https://www.chaitin.cn/", "img": "/assets/ad-banner.svg", "alt": "示例广告：网络安全防护" }
  ],
  "text": [
    { "title": "文字广告位 1（示例）", "url": "https://www.chaitin.cn/", "text": "长亭科技 - 智能安全防护专家" },
    { "title": "文字广告位 2（示例）", "url": "https://fsoufsou.com", "text": "F搜 - 简洁好用的搜索引擎" }
  ]
}
```

## 高并发实现

1. 内存索引：启动时把 `data/` 下全部 JSON（排除 `ads.json`）读入内存，将 `name + url + desc + tags` 拼成小写检索串，搜索为纯内存过滤。
2. mtime 感知：请求时检测数据文件修改时间，变更后自动重建索引。
3. 前端防抖：输入停止 180ms 后才发起请求。
4. 竞态控制：请求携带递增序号，丢弃过期响应。
5. 结果缓存：服务端 LRU 缓存最近 200 次查询结果。

详细设计见 `/workspace/o1/DESIGN.md`。

## 技术栈

- 前端：原生 HTML + CSS + JavaScript
- 后端：Node.js + Express `^5.2.1`、cors `^2.8.6`
- 存储：本地 JSON 文件（`data/`）
- 端口：默认 3003（可通过 `PORT` 覆盖）

## 版权说明

代码为原创编写，交互范式借鉴开源导航站（webstack 类）常见设计，未复制受版权保护的代码；示例站点数据复用本仓库既有 MIT 许可导航项目清单，并按分类拆分。

MIT License
