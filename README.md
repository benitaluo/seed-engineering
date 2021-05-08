# violet-seed  
violet为vue种子工程开发代号，基于Vue + Typescript + ElementUI技术整合的、符合公司项目特性的种子工程（可供产品内、其他产品或项目使用）    

## 1、主要技术栈      
### 1.1 使用的三方组件
* [√] Vue 2.5                         -  前端编程框架
* [√] Vue CLI 3.1                     -  Vue构建脚手架 
* [√] Typescript 3.0                  -  Javascript超集
* [√] ElementUI 2.4                   -  前端UI库  
* [√] vue-class-component：6.0        -  支持基于class的api组件声明方式
* [√] vue-i18n：8.3                   -  前端vue国际化组件    
* [√] vue-property-decorator：7.0     -  在vue-class-component基础上提供了更多的装饰器
* [√] vue-router：3.0      - 路由组件
* [√] vuex: 3.0,           - 状态管理器组件 
* [√] vuex-class: 0.3      - 状态管理器-装饰器使用组件 
* [√] axios：0.18          - http访问组件 
* [√] lodash：4.17         - 前端帮助库     
* [√] date-fns: 2.0        - 前端日期处理帮助库        
* [√] mocha: 5.2.4         - 单元测试框架     
* [√] chai: 4.1.2          - 单元测试断言库  

<!-- ### 1.2 内部提供组件：  
  产品提供的基础组件库（可供产品内、其他产品或项目使用）  
  源码地址： `http://bitbucket.gjsy.gsafety.com/projects/COMMON`    
  仓库地址：`http://172.18.24.36:7002`  
* [√] @gsafety/cad-gutil：2            - 基于项目特性封装的基础库：utilhelper、stringformat、sessionstorage、localstorage      
`http://172.18.24.36:7002/package/@gsafety/cad-gutil`
* [√] @gsafety/rx-eventbus：2          - 基于rx.js subject特性封装的事件发布订阅组件    
`http://172.18.24.36:7002/package/@gsafety/rx-eventbus`  
* [√] @gsafety/vue-httpclient：2       - 基于axios封装的http请求组件     
`http://172.18.24.36:7002/package/@gsafety/vue-httpclient` 
* [√] @gsafety/cad-glog：2             - 基于jsnlog封装的日志组件，支持console/send electron-main/remote url   
`http://172.18.24.36:7002/package/@gsafety/cad-glog`     -->


## 2、使用规范文档  
* [目录结构说明](./doc/01-工程结构.md)    
* [日志记录方式](./doc/02-日志记录方式.md)    
* [国际化使用方式](./doc/04-国际化.md)    
* [静态代码质量检查](./doc/05-静态代码质量检查.md)  
* [样式编程规范](http://confluence.gjsy.gsafety.com/pages/viewpage.action?pageId=8094479)    
* [工程规范建议](./doc/03-工程规范建议.md)  
* [技术栈结构图](./doc/90-技术栈结构图.md)   

### 2.1 TODO  
* 单元测试  
* 异常处理  
* 数据服务  
* 本地存储

## 3、安装
```
npm install
```

### 3.1 开发环境运行
```
npm start
```

### 3.2 生产环境build
```
npm run build
```  

### 运行dist目录-for生产环境测试
`install http server`:
```
npm install -g serve  
```  
run:  
```
serve  -s
```  

### 运行测试
```
npm run test
```

### 静态代码质量检查
```npm run lint
```

### 运行单元测试
```
npm run test:unit
```  

### quick-start    
[快速新增功能页面](doc/quickstart/quickstart.md)
