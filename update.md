# 更新日志

## 2026-06-07

### Bug 修复
- 修复 admin.html 页面数据列表中 URL 和标签超出显示范围的问题
  - 在 `.item-list`、`.item-row` 添加 `overflow: hidden`
  - 在 `.item-url`、`.item-tags` 添加 `display: block`
- 修复 index.html 导航链接内容溢出显示问题，添加 `overflow: hidden`
- 修复登录密码错误问题，重置 config.json 中密码哈希值为正确的 admin123 SHA256 值
- 修复 admin.html 表单输入框超长内容溢出问题，添加 `overflow: hidden`
