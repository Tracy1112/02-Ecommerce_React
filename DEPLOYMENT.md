# 🚀 部署指南 - Deployment Guide

## 📋 目录

- [Vercel部署](#vercel部署)
- [Netlify部署](#netlify部署)
- [环境变量配置](#环境变量配置)
- [构建配置](#构建配置)
- [域名配置](#域名配置)
- [故障排除](#故障排除)

---

## Vercel部署

### 步骤1：准备GitHub仓库

1. 确保代码已推送到GitHub
2. 确保 `.env` 文件已添加到 `.gitignore`

### 步骤2：连接Vercel

1. 访问 [Vercel](https://vercel.com)
2. 使用GitHub账号登录
3. 点击 "New Project"
4. 选择你的GitHub仓库

### 步骤3：配置项目

**项目设置：**
- **Framework Preset:** Vite
- **Root Directory:** `./` (默认)
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### 步骤4：配置环境变量

在Vercel项目设置中添加以下环境变量：

```env
VITE_API_URL=https://strapi-store-server.onrender.com/api
VITE_TAX_RATE=0.1
VITE_FREE_SHIPPING_THRESHOLD=50000
VITE_SHIPPING_COST=1000
```

**操作步骤：**
1. 进入项目设置 (Settings)
2. 选择 "Environment Variables"
3. 添加每个变量（选择所有环境：Production, Preview, Development）

### 步骤5：部署

1. 点击 "Deploy"
2. 等待构建完成
3. 获取部署链接

### 步骤6：验证部署

- [ ] 访问部署链接
- [ ] 测试首页加载
- [ ] 测试产品列表
- [ ] 测试购物车功能
- [ ] 测试用户登录
- [ ] 检查移动端响应式

---

## Netlify部署

### 步骤1：准备GitHub仓库

同Vercel步骤1

### 步骤2：连接Netlify

1. 访问 [Netlify](https://www.netlify.com)
2. 使用GitHub账号登录
3. 点击 "Add new site" > "Import an existing project"
4. 选择你的GitHub仓库

### 步骤3：配置构建设置

**构建设置：**
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Base directory:** `./` (默认)

### 步骤4：配置环境变量

在Netlify项目设置中添加环境变量：

1. 进入 "Site settings"
2. 选择 "Environment variables"
3. 添加所有环境变量（同Vercel）

### 步骤5：部署

1. 点击 "Deploy site"
2. 等待构建完成
3. 获取部署链接

---

## 环境变量配置

### 生产环境变量

```env
# API Configuration
VITE_API_URL=https://strapi-store-server.onrender.com/api

# Business Configuration
VITE_TAX_RATE=0.1
VITE_FREE_SHIPPING_THRESHOLD=50000
VITE_SHIPPING_COST=1000
```

### 开发环境变量

```env
# API Configuration
VITE_API_URL=http://localhost:1337/api

# Business Configuration
VITE_TAX_RATE=0.1
VITE_FREE_SHIPPING_THRESHOLD=50000
VITE_SHIPPING_COST=1000
```

### 重要提示

⚠️ **不要将 `.env` 文件提交到Git仓库！**

确保 `.gitignore` 包含：
```
.env
.env.local
.env.development.local
.env.production.local
```

---

## 构建配置

### Vite构建配置

项目使用Vite作为构建工具，配置文件：`vite.config.js`

**构建命令：**
```bash
npm run build
```

**预览构建：**
```bash
npm run preview
```

### 构建优化

- ✅ 自动代码分割
- ✅ Tree shaking
- ✅ 资源优化
- ✅ 生产环境压缩

### 构建输出

构建完成后，`dist` 目录包含：
- `index.html` - 入口文件
- `assets/` - 静态资源（JS, CSS, 图片）

---

## 域名配置

### Vercel自定义域名

1. 进入项目设置
2. 选择 "Domains"
3. 添加自定义域名
4. 按照提示配置DNS记录

### Netlify自定义域名

1. 进入 "Site settings"
2. 选择 "Domain management"
3. 添加自定义域名
4. 配置DNS记录

### DNS配置示例

**CNAME记录：**
```
Type: CNAME
Name: www
Value: your-site.vercel.app (或 your-site.netlify.app)
```

**A记录（根域名）：**
```
Type: A
Name: @
Value: [Vercel/Netlify提供的IP地址]
```

---

## 故障排除

### 问题1：构建失败

**可能原因：**
- 依赖未安装
- 环境变量未配置
- 代码语法错误

**解决方案：**
1. 检查构建日志
2. 本地运行 `npm run build` 测试
3. 确保所有依赖在 `package.json` 中

### 问题2：API请求失败

**可能原因：**
- 环境变量未正确配置
- CORS问题
- API服务器不可用

**解决方案：**
1. 检查环境变量是否正确设置
2. 检查浏览器控制台错误
3. 验证API服务器状态

### 问题3：页面空白

**可能原因：**
- 路由配置错误
- 资源路径错误
- JavaScript错误

**解决方案：**
1. 检查浏览器控制台
2. 检查网络请求
3. 验证 `index.html` 中的资源路径

### 问题4：样式不加载

**可能原因：**
- CSS文件路径错误
- Tailwind配置问题

**解决方案：**
1. 检查 `vite.config.js` 配置
2. 验证 `tailwind.config.js`
3. 检查构建输出中的CSS文件

---

## 持续部署 (CI/CD)

### Vercel自动部署

Vercel自动检测GitHub推送并触发部署：
- **主分支推送** → 生产环境部署
- **其他分支推送** → 预览环境部署

### Netlify自动部署

Netlify同样支持自动部署：
- 配置在 "Site settings" > "Build & deploy"
- 可以设置部署钩子（Deploy hooks）

### 部署钩子

**Vercel:**
```bash
curl -X POST https://api.vercel.com/v1/integrations/deploy/your-hook-url
```

**Netlify:**
```bash
curl -X POST -d {} https://api.netlify.com/build_hooks/your-hook-id
```

---

## 性能监控

### Vercel Analytics

1. 在项目设置中启用Analytics
2. 查看性能指标
3. 监控Core Web Vitals

### Lighthouse测试

部署后运行Lighthouse测试：
```bash
npx lighthouse https://your-site.vercel.app --view
```

**目标分数：**
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

---

## 回滚部署

### Vercel回滚

1. 进入 "Deployments"
2. 选择之前的部署
3. 点击 "..." > "Promote to Production"

### Netlify回滚

1. 进入 "Deploys"
2. 选择之前的部署
3. 点击 "Publish deploy"

---

## 安全检查清单

部署前检查：

- [ ] 环境变量已配置
- [ ] 敏感信息不在代码中
- [ ] `.env` 文件已添加到 `.gitignore`
- [ ] API密钥安全存储
- [ ] HTTPS已启用
- [ ] CORS配置正确
- [ ] 错误处理完善
- [ ] 日志不包含敏感信息

---

## 支持

如有问题，请查看：
- [Vercel文档](https://vercel.com/docs)
- [Netlify文档](https://docs.netlify.com)
- [Vite文档](https://vitejs.dev)

---

**最后更新：** 2024-12-11
**维护者：** Nordic Nest Team

