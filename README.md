# 乌龙导航 - 个人导航网站

一个简洁、美观的个人导航网站，支持分类管理、搜索和响应式设计。

---

## 项目说明

本项目由 **长亭百智云** 提供代码优化及更新支持。

官网：https://www.chaitin.cn/

---

## 功能特性

- ✨ 简洁美观的 UI 设计
- 📱 完全响应式，适配桌面/平板/手机
- 🔍 实时搜索功能
- 🎨 毛玻璃效果 + 悬停动画
- 🗂️ 管理后台支持增删改查
- 🔐 密码保护 + IP 白名单双重安全
- 💾 数据持久化存储
- 🚀 前后端一体化部署
- 🅰️ 使用抖音无版权字体（DouyinSansBold）

---

## 项目结构

```
/workspace
├── index.html              # 前台首页
├── admin.html              # 管理后台（带密码保护）
├── server.js               # Node.js 后端 API + 静态文件服务
├── package.json            # 项目依赖配置
├── config/                 # 配置文件目录
│   ├── navigation.json     # 导航数据
│   └── config.json         # 配置（密码、白名单）
├── js/                     # JavaScript 文件目录
│   ├── index.js            # 前台逻辑
│   ├── background.js       # 随机壁纸控制（Bing 壁纸，10 秒循环）
│   └── Notice/             # 公告模块
│       ├── index.js        # 公告逻辑
│       └── sweetalert.min.js # SweetAlert 库
└── font/                   # 字体文件目录
    ├── DouyinSansBold.otf  # 抖音字体（主要使用）
    └── HouZunSongTi.woff2  # 后尊宋体
```

---

## 快速开始

### 安装依赖

```bash
cd /workspace
npm install
```

### 启动服务

```bash
node server.js
```

### 访问网站

- 前台首页：http://localhost:3001
- 管理后台：http://localhost:3001/admin.html

---

## 默认配置

### 默认密码

首次运行时，默认密码为：`admin123`

**建议首次登录后立即修改**

### 默认字体

所有页面均使用 `font/DouyinSansBold.otf` 字体文件（抖音无版权字体）

### 默认 IP 白名单

- `127.0.0.1` - 本地 IPv4
- `::1` - 本地 IPv6

---

## 功能使用说明

### 前台使用

1. 打开首页查看所有导航链接
2. 在搜索框输入关键词实时过滤
3. 点击卡片跳转目标网站

### 后台管理

#### 登录

1. 访问 `/admin.html`
2. 输入密码（默认 `admin123`）
3. 点击登录

#### 导航管理

- **新增**：点击"+ 新增导航"
- **编辑**：点击行的"编辑"按钮
- **删除**：点击行的"删除"按钮
- 修改实时生效

#### 安全设置

**修改密码**

1. 进入"安全设置"标签页
2. 输入当前密码和新密码（至少 6 位）
3. 保存后需重新登录

**IP 白名单**

1. 查看当前访问 IP
2. 添加允许访问的 IP 地址
3. 移除不需要的 IP（不能移除自己的 IP）

---

## API 接口

### 公开接口

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | /api/navigation | 获取导航列表 |

### 需认证接口

| 方法 | 路径 | 说明 | 参数 |
|------|------|------|------|
| POST | /api/navigation | 添加导航 | `{name, url, tags}` |
| PUT | /api/navigation/:index | 更新导航 | `{name, url, tags}` |
| DELETE | /api/navigation/:index | 删除导航 | - |

### 认证接口

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | /api/auth/check | 检查登录状态 |
| POST | /api/auth/login | 登录 |
| POST | /api/auth/logout | 退出 |
| GET | /api/auth/ip | 获取当前 IP |
| GET | /api/auth/whitelist | 获取 IP 白名单 |
| POST | /api/auth/whitelist | 添加 IP |
| DELETE | /api/auth/whitelist | 移除 IP |
| PUT | /api/auth/password | 修改密码 |

---

## 响应式设计

| 设备 | 尺寸 | 布局 |
|------|------|------|
| 桌面端 | >768px | 自适应多列 |
| 平板端 | 480px-768px | 优化间距 |
| 手机端 | <480px | 单列/小卡片 |
| 小屏 | <360px | 极简布局 |

---

## 依赖资源库

### 后端依赖

| 名称 | 版本 | 用途 |
|------|------|------|
| express | ^4.18.2 | Web 框架 |
| cors | ^2.8.5 | 跨域支持 |
| express-session | ^1.19.0 | 会话管理 |

### 前端资源

| 名称 | 来源 | 用途 |
|------|------|------|
| DouyinSansBold.otf | font/目录 | 站内外字体 |
| SweetAlert | js/Notice/ | 弹窗提示 |

### 外部资源

| 资源 | URL | 用途 |
|------|-----|------|
| Bing 壁纸 | https://www.bing.com/th?id=OHR.* | 随机背景壁纸 |
| 统计代码 | https://api.tongjiniao.com/c?_=575288469485506560 | 访问统计 |
| 网站图标 | https://github.com/fluidicon.png | Favicon |

---

## 技术栈

- **前端**：原生 HTML + CSS + JavaScript
- **后端**：Node.js 18+ + Express
- **会话**：express-session
- **存储**：JSON 文件（config/目录）
- **字体**：DouyinSansBold（抖音无版权字体）

---

## 安全建议

1. ✅ 首次登录后立即修改默认密码
2. ✅ 定期更新密码（至少 8 位，含字母数字）
3. ✅ 配置 IP 白名单，只允许信任 IP 访问
4. ✅ 不要在生产环境使用默认配置
5. ✅ 定期备份 config/目录下的配置文件

---

## 代码优化说明

以下代码优化由 **长亭百智云** 完成：

### 优化内容

1. **代码精简**
   - 删除冗余 CSS 样式
   - 简化 JavaScript 逻辑
   - 移除无用代码块

2. **文件结构优化**
   - 配置文件统一至 `config/` 目录
   - JS 文件归类至 `js/` 目录
   - 字体文件存放于 `font/` 目录
   - 壁纸控制独立为 `js/background.js`

3. **字体统一**
   - 所有页面统一使用 DouyinSansBold 字体
   - 使用本地字体文件，提升加载速度

4. **性能优化**
   - CSS 内联减少 HTTP 请求
   - 字体使用 `font-display: swap` 优化加载
   - 精简代码体积

5. **用户体验优化**
   - 首页支持滚动查看所有导航
   - 管理后台 URL/标签超长自动隐藏
   - Bing 高质量壁纸随机切换
   - 登录错误提示更友好

---

## 许可证

MIT License

---

## 技术支持

- 代码优化：长亭百智云
- 项目维护：乌龙导航团队

---

最后更新：2026-06-07
