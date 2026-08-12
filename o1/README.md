# 极简导航 · 高并发骨架屏导航搜索站

一个简洁美观的网站导航搜索页面：输入框为空时只显示输入框与装饰，输入关键词后显示骨架屏加载，并在返回时展示全站搜索结果；点击结果进入带广告位的跳转中转页。

## 演示地址

服务启动后：

- 搜索主页：`http://localhost:3003/`
- 跳转页示例：`http://localhost:3003/jump.html?name=百度&url=https%3A%2F%2Fwww.baidu.com`

## 快速开始

```bash
cd o1
npm install
npm start
```

访问 `http://localhost:3003`。

## 功能特性

- 空态极简：仅输入框 + 简单布局装饰
- 高并发骨架屏：搜索请求未返回时立即渲染 shimmer 骨架卡片，配合防抖与竞态控制避免白屏/错乱
- 全量 JSON 搜索：`data/` 下全部 `.json` 文件（除 `ads.json`）遍历检索，服务端内存索引 + LRU 结果缓存
- 跳转中转页：倒计时自动跳转 / 立即跳转，URL 协议白名单校验
- 预留广告位：跳转页含图片广告位（顶部横幅）与文字广告位，数据来自 `data/ads.json`，无配置自动隐藏
- 纯原创代码，无第三方图标库与字体，规避版权风险

## 目录结构

```
o1/
├── index.html      骨架屏搜索主页
├── jump.html       跳转中转页（广告位）
├── server.js       静态服务 + /api/search + /api/ads
├── DESIGN.md       设计文档
└── data/           数据目录（全部 JSON 参与搜索）
    ├── search.json / tools.json / ai.json / dev.json
    ├── cloud.json / video.json / other.json
    └── ads.json    广告位配置
```

## API

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/search?q=关键词&limit=50` | 全量 JSON 搜索，返回 `{ total, list }` |
| GET | `/api/ads` | 返回广告配置 `{ image: [], text: [] }` |

## 数据与广告配置

网站数据为数组，可自由扩展：

```json
[{ "name": "百度", "url": "https://www.baidu.com", "desc": "中文搜索引擎", "tags": ["搜索"] }]
```

广告配置：

```json
{
  "image": [{ "title": "横幅", "url": "目标链接", "img": "/assets/ad-banner.svg" }],
  "text":  [{ "title": "文字", "url": "目标链接", "text": "推广文案" }]
}
```

## 版权说明

代码为本次原创编写，交互范式借鉴开源导航站（webstack 类）常见设计，未复制受版权保护的代码；示例站点数据复用本仓库既有 MIT 许可导航项目清单。

## 技术栈

原生 HTML + CSS + JavaScript + Node.js(Express)
