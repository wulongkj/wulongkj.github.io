# 更新日志

## 2026-06-07

### 功能优化
- 简化前后端代码，index.html 直接读取 config/navigation.json 静态文件
- admin.html 数据操作简化为保存到 config/navigation.json
- server.js 大幅精简，移除冗余 API，只保留登录认证和数据保存接口

### Bug 修复
- 修复 admin.html 页面数据列表中 URL 和标签超出显示范围的问题
- 修复 index.html 导航链接内容溢出显示问题
- 修复登录密码错误问题，重置 config/config.json 中密码哈希值为正确的 admin123
- 修复 admin.html 表单输入框超长内容溢出问题
- 修复 admin.html JavaScript 语法错误（deleteItem 函数后有残留代码）
- 修复登录验证功能，改用 localStorage 存储登录状态
- 修复 IP 白名单功能并移除相关代码
- 修复 CryptoJS 未定义错误，移除多余的 CryptoJS 引用

### 代码上传
- 已将所有代码推送至 GitHub 仓库
