# 免费发布到 GitHub Pages

GitHub Pages 对公开仓库免费，不需要服务器，也不需要域名；会得到一个 `github.io` 网址。
本项目安装包约 62.9MB，低于 GitHub 单文件 100MB 上限，可以直接放进去。

## 一、准备

1. 注册 GitHub 账号：<https://github.com/>
2. 安装 GitHub Desktop（比网页上传更适合大文件）：<https://desktop.github.com/>
3. 解压 `桌面组件官网-GitHub.zip`，得到 `桌面组件官网` 文件夹。

> 不要用 GitHub 网页的“Upload files”上传安装包：网页上传单文件通常限制 25MB，会失败。用 GitHub Desktop 或 Git 命令行。

## 二、创建仓库并上传

1. 打开 GitHub Desktop，登录账号。
2. 菜单 `File` → `Add local repository`。
3. 选择解压后的 `桌面组件官网` 文件夹。
4. 如果提示不是 Git 仓库，选择 `create a repository`。
5. 仓库名建议：`desktop-widgets`。
6. 选择 **Public**（公开），点击 `Publish repository`。
7. 等待上传完成（安装包 62.9MB，可能需要一两分钟）。
8. 点击右上角 `Push origin`，确保文件都在 GitHub 上。

## 三、开启 GitHub Pages

1. 打开仓库页面：`https://github.com/你的用户名/desktop-widgets`
2. `Settings` → 左侧 `Pages`
3. `Build and deployment` → `Source` 选择 `Deploy from a branch`
4. Branch 选择 `main`，目录选择 `/ (root)`
5. 点击 `Save`
6. 等待 1–3 分钟，页面顶部会出现：

```text
https://你的用户名.github.io/desktop-widgets/
```

这就是公网网址，任何设备都能访问。

## 四、验证下载

打开：

```text
https://你的用户名.github.io/desktop-widgets/
```

点击“下载安装版”，应下载：

```text
downloads/desktop-widgets-setup-v1.0.exe
```

如果下载 404，确认 `downloads/desktop-widgets-setup-v1.0.exe` 已经上传到仓库根目录下。

## 五、常见问题

- **提示文件过大**：GitHub 对超过 50MB 的文件会警告，但仍允许；不要用网页上传，使用 GitHub Desktop。
- **不要用 Git LFS**：GitHub Pages 不会把 LFS 指针还原成真实安装包。
- **仓库必须是 Public**：免费 GitHub Pages 只对公开仓库开放。
- **自定义域名**：可选；不买域名就用 `github.io` 子域名，免费。
- **更新版本**：替换 `downloads/` 下的安装包，提交并 push，Pages 会自动更新。
- **流量**：GitHub Pages 免费额度对个人项目足够；安装包较大，下载量特别大时再考虑对象存储。

## 六、命令行方式（可选）

如果已经安装 Git：

```bash
cd 桌面组件官网
git init
git add .
git commit -m "desktop widgets site"
git branch -M main
git remote add origin https://github.com/你的用户名/desktop-widgets.git
git push -u origin main
```

然后在 GitHub 仓库 Settings → Pages 里选择 `main` / root。
