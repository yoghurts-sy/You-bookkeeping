## 优记账 ——微信小程序

## 1. 项目描述：

* 该小程序是一款记账并显示收支饼状图的微信小程序，通过绑定微信用户的来实现用户的记账记录的功能。
* 技术要点：
  * 项目前端使用Vue的小程序版本框架mpVue
  * 并使用Spring Boot作为后端实现一些简单的业务
  * 再通过Mybatis来操作数据库实现增删改查
  * 最后使用echarts渲染饼图。 
* 项目负责：开发全程。
* 项目地址：https://github.com/yoghurts-sy/You-bookkeeping

## 2. 待完善的需求

1. 用户界面的美化 ✔
2. 查询记录的时候应该是查询单一个对应的appid ✔
3. 能不能使用echarts进行统计的显示 ✔
4. 实现上线!

   

## 3. 页面展示

#### （1）收入与支出

![](https://markdowngraph-1305163160.cos.ap-shenzhen-fsi.myqcloud.com/img/20210320121840.png)

#### （2）添加记录

![](https://markdowngraph-1305163160.cos.ap-shenzhen-fsi.myqcloud.com/img/20210320122206.png)

#### （3）用户页面

![](https://markdowngraph-1305163160.cos.ap-shenzhen-fsi.myqcloud.com/img/20210320122256.png)



## 4. 启动项目

1. 打开打开微信开发者工具导入前端front文件夹
2. 在idea里启动后端项目back，并启动项目启动类BackApplication
3. 在另一个idea里打开前端项目文件夹front，利用npm启动前端项目
4. 在微信开发者工具即可看到项目已启动。