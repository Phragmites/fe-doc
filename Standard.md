# **前端开发规范** #
-------------------
#一、html规范#
1. * 文件开始推荐使用“<!DOCTYPE html>”
2. * meta注明**utf-8**编码
3. * meta的**keywords、description**都是需要声明的，为了SEO
4. 常用移动端meta及常用meta解释      

        <meta name="viewport" content="initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="email=no" />
        <meta name="format-detection" content="address=no;">
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />


1. 原则上只引入一个css文件，且在head里面
2. dns预解析：对于多次访问的域名可以使用，初次会增加dns的解析时间 
  
        `<link href="//j1.58cdn.com.cn" rel="dns-prefetch">`

3. ***遵循HTML标准和语义化**，确保代码可读性：
  - 可读性要求在没有css的情况下，页面可读（按照从上至下、从左到右的视觉顺序书写HTML结构）
  - 非表格不建议使用table布局
  - ***闭合标签必须闭合，单元素标签必须以加“/”，标签嵌套规则**
  - id具有唯一标识（慎用） class高度可复用
  - img 的alt、title原则上需要加
  - 尽量避免多余的父节点，减少迭代（并不是说不可以迭代，请区分，避免迭代的原因是保持html的健壮性，减少html文件的大小，**dom节点的增加与性能成负相关关系**）

            `<span><img src="" /></span>  推荐使用：<img src="" />`

  - 前端存储、获取、操作dom节点时使用数据**统一使用data-attribute**且**小写**，禁制为dom节点添加非data-xxx以为的其他属性

2. **HTML属性应该按照特定的顺序出现以保证易读性。**
    
    - id
    - class
    - name
    - data-xxx
    - src, for, type, href
    - title, alt
    - aria-xxx, role
1. HTML模板注释 （允许只有开始注释） 

        `开始注释：<!-- 注释文案 -->   
         结束注释：<!-- /注释文案 -->`
1. 某些情况下需要写HTML字符实体：
  
        `以空格为例 建议使用&nbsp;`  原因是某些情况下字符可能会有问题
1. 标签建议使用小写


#二、css规范 #
**非首页不建议样式内联，行内**

**原则：命名简短且有含义**

解释：使用‘-’方便SEO，‘_’SEO不抓取，Webkit CSS解析器（Webkit CSS parser）从右到左解析，**无 BOM 的 utf-8 编码作为文件格式**。
## 命名 ##
1. css的命名建议使用name-name的形式（一律采用小写加中划线的方式，不允许使用大写字母或 _）
2. class与id要避免重名
3. id和class命名越简短越好，只要足够表达涵义
4. 禁制多级标签选择器使用
5. 禁制使用单个字母表示选择器
6. 前缀命名：（推荐使用，但是不强制使用）

   布局（grid）（.g-）；模块（module）（.m-）；元件（unit）（.u-）；功能（function）（.f-）；皮肤（skin）（.s-）；状态（.z-）。

    /* 这里的.itm和.cnt只在.m-list中有效 */
    .m-list{margin:0;padding:0;}
    .m-list .itm{margin:1px;padding:1px;}
    .m-list .cnt{margin-left:100px;}
    /* 这里的.cnt和.num只在.m-page中有效 */
    .m-page{height:20px;}
    .m-page .cnt{text-align:center;}
    .m-page .num{border:1px solid #ddd;}


   使用方式

    /* 不推荐: 无意义 */ #yee-1901 {}
    /* 不推荐: 与样式相关 */ .button-green {}.clear {}
    /* 推荐: 特殊性 */ #gallery {}#login {}.video {}
    /* 推荐: 通用性 */ .aux {}.alt {}
    /*禁用*/ div#id{}   .class div p{}  .n{}
    /*允许*/  .m-list li{}
    /* 反对：表现化的或没有语义的命名 */
    .m-abc .green2{}
    .g-left2{}
    /* 推荐：使用有语义的简短的命名 */
    .m-list .wrap2{}
    .g-side2{}


## 书写 ##
Style Computation计算顺序

1. css解析属性有一定顺序，如下：
    - 显示定位属性：display/list-style/position/float/clear …
    - 自身属性（盒模型）：width/height/margin/padding/border
    - 背景：background
    - 行高：line-height
    - 文本属性：color/font/text-decoration/text-align/text-indent/vertical-align/white-space/content…
    - 其他：cursor/z-index/zoom/overflow
    - CSS3属性：transform/transition/animation/box-shadow/border-radius
    - 链接的样式请严格按照如下顺序添加： a:link -> a:visited -> a:hover -> a:active
    - 前缀顺序  -webkit-border,border标准写后面（如果使用 Autoprefixer自动添加浏览器厂商前缀，请忽略此条）
1. 鼓励使用缩写，但是不强求
2. 向下兼容的写法谨慎书写及慎用 如！important，filter。禁用通配符*，expression（ie6除外，但慎用），小图片慎用repeat
3. 

# **LESS、SASS规范（模块化规范）** #
1. 禁制多级嵌套，建议使用2级嵌套
2. import引入less/sass文件时，文件格式（.less）不能省略

# **CSS优化** #
1. 谨慎使用高性能消耗的属性（浏览器绘制前会进行大量的计算）box-shadows，border-radius，transparency，transforms，CSS filters，**浮动**
2. 对于会引起浏览器重新计算的属性，谨慎使用


## 常用命名 ##

推荐，但是不强制使用

(1)结构

- 容器: container
- 页头：header
- 内容：content/container
- 页面主体：main
- 页尾：footer
- 导航：nav
- 侧栏：sidebar
- 栏目：column
- 页面外围控制整体布局宽度：wrapper
- 左右中：left right center

(2)导航


- 导航：nav
- 主导航：mainbav
- 子导航：subnav
- 顶导航：topnav
- 边导航：sidebar
- 左导航：leftsidebar
- 右导航：rightsidebar
- 菜单：menu
- 子菜单：submenu
- 标题: title
- 摘要: summary

(3)功能


- 标志：logo
- 广告：banner
- 登陆：login
- 登录条：loginbar
- 注册：regsiter
- 搜索：search
- 功能区：shop
- 标题：title
- 加入：joinus
- 状态：status
- 按钮：btn
- 滚动：scroll
- 标签页：tab
- 文章列表：list
- 提示信息：msg
- 当前的: current
- 小技巧：tips
- 图标: icon
- 注释：note
- 指南：guild
- 服务：service
- 热点：hot
- 新闻：news
- 下载：download
- 投票：vote
- 合作伙伴：partner
- 友情链接：link
- 版权：copyright

#三、js规范 #

**说明**：本规范仅适用使用现有开发方式，不适用以VUE，react开发。

**命名**：采用驼峰命名法（原则简短明了），构造函数以大写字母开头，不强行推荐私有变量“_name”命名

**无 BOM 的 utf-8 编码作为文件格式**

常用动词列表：

    get 获取/set 设置, add 增加/remove 删除
    create 创建/destory 移除	start 启动/stop 停止
    open 打开/close 关闭,	read 读取/write 写入
    load 载入/save 保存,	create 创建/destroy 销毁
    begin 开始/end 结束,	backup 备份/restore 恢复
    import 导入/export 导出,	split 分割/merge 合并
    inject 注入/extract 提取,	attach 附着/detach 脱离
    bind 绑定/separate 分离,	view 查看/browse 浏览
    edit 编辑/modify 修改,	select 选取/mark 标记
    copy 复制/paste 粘贴,	undo 撤销/redo 重做
    insert 插入/delete 移除,	add 加入/append 添加
    clean 清理/clear 清除,	index 索引/sort 排序
    find 查找/search 搜索,	increase 增加/decrease 减少
    play 播放/pause 暂停,	launch 启动/run 运行
    compile 编译/execute 执行,	debug 调试/trace 跟踪
    observe 观察/listen 监听,	build 构建/publish 发布
    input 输入/output 输出,	encode 编码/decode 解码
    encrypt 加密/decrypt 解密,	compress 压缩/decompress 解压缩
    pack 打包/unpack 解包,	parse 解析/emit 生成
    connect 连接/disconnect 断开,	send 发送/receive 接收
    download 下载/upload 上传,	refresh 刷新/synchronize 同步
    update 更新/revert 复原,	lock 锁定/unlock 解锁
    check out 签出/check in 签入,	submit 提交/commit 交付
    push 推/pull 拉,	expand 展开/collapse 折叠
    begin 起始/end 结束,	start 开始/finish 完成
    enter 进入/exit 退出,	abort 放弃/quit 离开
    obsolete 废弃/depreciate 废旧,	collect 收集/aggregate 聚集

**开发规范：**

- 现在使用AMD标准，AMD规范见附录（AMD推荐的风格通过返回一个对象做为模块对象，CommonJS的风格通过对module.exports或exports的属性赋值来达到暴露模块对象的目的。）
- 跟RD交互的模板数据可采用____json4fe赋值的方式（以json形式），____json4fe为前后端约定数据传递变量

json4fe使用说明：

    //json4fe约定形式如下
    var ____json4fe = {
    	//页面的分享内容，依次为标题、分享地址、图片地址、描述
    	"shareInfo":{
    		"title":'分享标题',
    		"url":'分享地址',
    		"imgUrl":'分享图片地址',
    		"desc":'分享描述'
    	},
    	//前后端交互需要的一些数据
    	"pageConfig": {
    		"userid": "$!{userId}",
    		"infoid": "$!{infoId}",
    		"proline": "1004",//产品线
    		"pageType":'',//页面类型目前流量宝使用到了
    		"isWeixinBack": "$!isWeixinBack",//
    		"weiId": "$!{weiId}",//点赞
    		"browser": "$!{browser}"//后端判断的浏览器类型 weixn之类
    		/*** 页面新加字段可以在下面加格式如上，或为类似pageConfig形式 **/
    		/** "new":"新加字段"  **/
    	}
    };


模板代码引入（务必让RD引入版本号自动更新方法）

    库文件：此为去掉loader方法的库文件    
    <script type="text/javascript" src="http://j1.58cdn.com.cn/weixin/js/lib/esl_zepto.js"></script>
    打包js文件：去掉原来的boot文件，主要原因是库文件内的loader方法加入了业务线标识，我们的项目不需要
    <script type="text/javascript" src="http://j1.58cdn.com.cn/weixin/js/pkg/wfc/homepage.js"></script>
    require引入文件
    <script type="text/javascript">
     require(['pkg/wfc/homepage'],function(){});
    </script>

    此为含有loader方法使用说明：
    //____loadCfg业务线标识
    var ____loadCfg = ['weixin', 'wfc', 'common'];
    库文件：（如果使用此文件，请尽量将require.config写入库文件，防止baseUrl丢失）
    <script type="text/javascript" src="http://j1.58cdn.com.cn/weixin/js/lib/esl_zepto_load.min_v20151118205421.js"></script>
    配置文件：
    <script type="text/javascript" src="http://j1.58cdn.com.cn/weixin/js/conf/boot_wfc_v20160621180519.js"></script>
    <script type="text/javascript">
     //代码引入地址：
     require(['pkg/wfc/homepage'],function(){});
    </script>

    
Module模式

    基本用法：
    var math = (function(module) {
      module.subtract = function(a, b) {
        return a - b;
      }
    })(math);

    //松耦合扩展：
    var blogModule = (function (my) {    
    // 添加一些功能   
    return my;
    } (blogModule || {}));  


    紧耦合扩展：（紧耦合扩展限制了加载顺序，但是提供了我们重载的机会）
    var blogModule = (function (my) {
      var oldAddPhotoMethod = my.AddPhoto;
      my.AddPhoto = function () {
      // 重载方法，依然可通过oldAddPhotoMethod调用旧的方法
      };
      return my;
    } (blogModule));

# 四、线下构建规范 #

线下构建环境可自行搭建，使用es6请注明
url请省略协议头http:/https:(公司https适应)

## **打包** ：
打包生成文件禁制使用美化、压缩，如需使用请在模块内自行使用
## **文件命名** ##
说明：包括css、js、less、sass、jsx

模块文件（非入口文件）：使用m_name的形式

**!!!**入口文件：类型_name(类型一般为detail/list)

## **五、容错** ##
对于有兼容问题的属性及方法请使用容错

常见容错

    try{
    //我是代码
    }catch(e){}

    //变量
    if(window.a){}
    

# 六、注释规范 #
（读前说明：文件注释、方法信息注释、复制注释、代码注释在本文统称普通注释）

文件顶部需要有对文件内容的说明，修改日期、作者等信息的注释

     /**
     * @description 简介
     * @author gj
     * @time 
     * @version 0.0.1
     */

复制代码建议使用单行注释 

    如：/* module: module2 by module1 */

多行注释建议注释中的每一行长度不超过40个汉字，或者80个英文（主要是读方面考虑）

**特殊注释**：

     /* TODO: xxxx by name 2013-04-13 18:32 *//* BUGFIX: xxxx by name
     2012-04-13 18:32 */用于标注修改、待办、方法扩展等非普通注释信息
**代码注释**：

    html注释统一为：  <!--  -->
    css、js注释为(单行和多行)，（不建议使用//多行注释）：
      /* 
        我是注释
      */
    js代码注释内容，方法注释请写清楚参数个数、是否必选、参数数据类型、是否有返回、返回类型
     

# **附录** #
**附录为相关信息的详细说明**

1. 中文W3C[http://www.w3school.com.cn/](http://www.w3school.com.cn/ "w3c中文地址")
2. html嵌套规则[http://www.smallni.com/element-nesting/](http://www.smallni.com/element-nesting/ "html嵌套规则")
3. meta详解[https://segmentfault.com/a/1190000004987068](https://segmentfault.com/a/1190000004987068 "meta")
4. 字符实体对照表[http://tool.oschina.net/commons?type=2](http://tool.oschina.net/commons?type=2 "字符实体对照表")
5. AMD [https://github.com/amdjs/amdjs-api/wiki/AMD-(%E4%B8%AD%E6%96%87%E7%89%88)](https://github.com/amdjs/amdjs-api/wiki/AMD-(%E4%B8%AD%E6%96%87%E7%89%88) "AMD")
6. LESS [http://lesscss.cn/](http://lesscss.cn/ "less")
7. SASS [http://www.w3cplus.com/sassguide/](http://www.w3cplus.com/sassguide/ "sass")
8.如何提升 CSS 选择器性能 [http://www.jianshu.com/p/268c7f3dd7a6](http://www.jianshu.com/p/268c7f3dd7a6 "如何提升 CSS 选择器性能")
1. 浏览器渲染简版（侧重点在重绘重排）[http://www.jianshu.com/p/e305ace24ddf](http://www.jianshu.com/p/e305ace24ddf "浏览器渲染")
2. 参考规范[https://github.com/ecomfe/spec/blob/master/javascript-style-guide.md](https://github.com/ecomfe/spec/blob/master/javascript-style-guide.md "规范")
3. [http://codeguide.bootcss.com/](http://codeguide.bootcss.com/)
4. 支付宝规范 [http://am-team.github.io/amg/dev-exp-doc.html](http://am-team.github.io/amg/dev-exp-doc.html)

