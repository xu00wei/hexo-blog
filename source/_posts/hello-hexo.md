---
title: ubuntu 安装hexo
date: 2018-01-13 03:40:05
tags:
- ubuntu 
- hexo
categories:
---

**安装nodejs**
```
sudo apt-get install nodejs
sudo ln -s /usr/bin/nodejs /usr/bin/node
sudo apt-get install npm
```

**安装hexo**
```
sudo npm install -g hexo-cli
```

**新建博客项目**
```
# hexo -v ==> 3.4.4
hexo init blog
```

**配置项目**
```
# _config.yml 文件
# 博客标题等
title: test 
author: test 
language: cn

# 配置git
deploy:
  type: git
  repo: git@github.com:test/blog.git
  branch: master
```

**部署**
```
hexo generate
hexo deploy
```

**配置nginx**
```
server {
    server_name www.test.com;
    index index.html;
    root /path/to/blog/public;
    rewrite_log on;
    charset utf8;

    access_log  /path/to/log/nginx/blog.access.log;
    error_log  /path/to/log/nginx/blog.error.log notice;
}

```
