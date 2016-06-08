# eGulp (easyGulp)
>使用eGulp构造前端脚手架，轻松实现前端自动化、工程化；

### 主要特点：
- 压缩CSS/JS/HTML文件；
- 支持指定目录内 **requireJS模块化的JS文件进行优化、合并、压缩；**
- **支持增量压缩**，只对有变化的文件进行处理，提高效率、节省压缩时间；

### 文件压缩
- 压缩css/page目录下.css文件，自动添加私有前缀
- 压缩html目录下.html文件
- 压缩js/page目录下.js文件，[优化requireJS模块加载器]，支持增量压缩
- 支持sftp将指定文件目录上传到服务器指定目录

### 如何使用
- 安装nodeJs环境和npm包管理器
- 安装gulp环境，npm install gulp -g （全局安装）
- 克隆本项目到本地，命令行进入本项目目录；
- 运行 npm install 安装package.json文件中配置的插件；
- 运行 gulp 执行gulpfile.js中配置任务，压缩项目目录中 html｜js｜css