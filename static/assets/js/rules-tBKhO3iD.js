import{_ as c,j as n,o as d,f as r,h as t,a as s,w as l,l as u,u as p,p as h,g as _,t as v,C as m}from"./index-RCsPaKY5.js";const o=e=>(h("data-v-fe84fbda"),e=e(),_(),e),g={class:"rulesPage"},f=o(()=>t("div",{class:"head"},[t("div",{class:"title"},[v(" 开发规范 "),t("span",null,"RULES")])],-1)),b={class:"body"},S={class:"card"},I={class:"cardHead"},x={class:"title"},y=o(()=>t("span",null,"开发规范",-1)),j={class:"cardBody"},w=`   ##ALL
    1. 好的命名，就是最好的注释！
    2. 使用4个（或2个）软空格进行缩进！
    3. UTF-8文件请不要附带BOM！


    ##HTML
    1. 某些重要节点，代码片段尾部添“<!-- end of xxx -->”的HTML注释，以示闭合
    2. 尽可能按照HTML语义化，合理使用标签，不要使用HTML5废弃的标签


    ##STYLE (包括class选择器)
    1. 命名中仅允许使用中杠(-)
    2. 如果一个单词表述不全，请使用小驼峰命名法
    3. 使用合理的、可读的、没有歧义的缩写
    4. 选择器末尾 添加一个空格
    5. 分组选择器 逗号结尾并换行
    6. 当一个class类名用于JS调用时,请使用js-开始
    7. 非必须情况，禁止使用行内样式



    ##JAVASCRIPT (包括id选择器)
    1. 使用ES6语法
    2. 命名中仅允许使用底杠(_)
    3. 如果一个单词表述不全，请使用小驼峰命名法
    4. 使用合理的、可读的、没有歧义的缩写

    5. 常量，小驼峰（模块、对象等引用值）/纯大写（string、number等原始值）（这里的常量指的是一个比较重要的或者经常重复使用的变量，ES5语法中并不是真正意义的定义常量）
    6. 变量、函数、函数的参数，使用小驼峰  (也可以使用下划线，函数名和参数一致即可！)
    7. 对象的属性、方法，使用小驼峰命名法
    8. 类名，使用大驼峰命名法
    注意: 假如一个单词可以表述清楚，以上大部分命名都是一个纯小写的单词，类名和常量名除外！

    8. 冒号（:）右边加空格
    9. 括号（()）两边加空格（function参数括号右边加空格）
    10. 赋值运算符/比较运算符/逻辑运算符等（=、==、&gt;=、&lt;=、||、&&等）两边加空格
    11.慎用console.log  线上发布请清除console
    <!-- 11. 浏览器代码行尾请带上分号 node端戴拿结尾不带分号 -->


    ##URL、目录、文件
    1. 不要包含大写，使用低杠分隔，复数时要使用复数结构



    ##Vue
    1.vue3使用组合式API
    2.公用组件首字母大写，页面组件要以页面名开头例如 list 页面组件要用list为前缀(ListItem),所有组件遵循大驼峰命名法且为多单词
    3.文件引用路径使用绝对路径(@)，文件名使用小驼峰命名法，文件路径和路由要对应
    4.每个页面或者组件的顶层父级需要添加一个唯一的类名，为组件样式设置作用域）



    更多参考：
    编码规范                             http://codeguide.bootcss.com/
    语义化版本                           https://semver.org/lang/zh-CN/
    Airbnb JavaScript Style Guide(ES5)   https://github.com/sivan/javascript-style-guide/blob/master/es5/README.md
    Airbnb JavaScript Style Guide        https://github.com/lin-123/javascript

    JavaScript Standard Style            https://github.com/standard/standard/blob/master/docs/README-zhcn.md
    Idiomatic JavaScript                 https://github.com/rwaldron/idiomatic.js/tree/master/translations/zh_CN
    Google JavaScript Style Guide        https://google.github.io/styleguide/jsguide.html
    jQuery JavaScript Style Guide        https://contribute.jquery.org/style-guide/js/

    百度FEX团队代码规范                  https://github.com/fex-team/styleguide
    JavaScript 开发规范                  https://www.cnblogs.com/polk6/p/4660195.html


    技术栈：
    ES6 基础知识                          http://es6.ruanyifeng.com/
    vue 框架                              https://cn.vuejs.org/
    Element 组件库                        https://element-plus.org/zh-CN/
    vite 构建                             https://cn.vitejs.dev/
    UniApp 多端应用                       https://uniapp.dcloud.net.cn/

    栗子:
        <style>
            .top {
                border: 1px solid blue;
            }

            .top-info {
                color: red;
            }

            .xhui-copInfo {}

            .xhui-copIntro {}

            .xhui-copInfo,
            .xhui-copIntro {}
        </style>
        <div class="top">
            <span class="top-info">企业信息</span>
        </div>
        <!-- end of top -->

        <div class="xhui-copInfo">
            <dl>
            <dt>公司名: </dt>
            <dd>面向未来</dd>
            <dt>公司性质: </dt>
            <dd>私营企业</dd>
            </dl>
        </div>
        <!-- end of xhui-copInfo -->

        <div class="xhui-copIntro">
            <textarea rows="10" cols="30">我是公司的简介，这里是一大段话。我是公司的简介，这里是一大段话。我是公司的简介，这里是一大段话。</textarea>
        </div>
        <!-- end of xhui-copIntro -->

        // JavaScript


        //常量（伪常量）    纯大写
        var APIDOMIAN = 'http://www.baidu.com'
        const APIDOMIAN = 'http://www.baidu.com'

        //变量             下划线 （假如一个单词可以表述 可纯小写）
        var user_name = 'CC'
        var user = 'CC'

        //函数             下划线 （假如一个单词可以表述 可纯小写）
        //函数的参数       下划线 （假如一个单词可以表述 可纯小写）
        function get_user_name(user_id，user_type) {
            //...
            if (user_type == 1) {
                //...
            } else {
                //...
            }
        }
        function get(word) {
            //...
            var obj = {
                a: 1,
                b: 2
            }
            return obj
        }

        //对象的属性  小驼峰法 （假如一个单词可以表述 可纯小写）
        //对象的方法  小驼峰法 （假如一个单词可以表述 可纯小写）
        var user_info = {
            givenName: '',
            middleName: '',
            familyName: '',
            doSomething: function (todo) {
                //...
            },
            setGivenName: function (given_name) {
                //...
            },
            set: function (name) {
                //...
            }
        }

        //类名（ES6）   大驼峰法
        //类中的属性和方法 同对象中的写法
        class QueueList {
            constructor(contents = []) {
                this._queue = [...contents]
            }
            pop() {
                const value = this._queue[0]
                this._queue.splice(0，1)
                return value
            }
        }`,E={__name:"rules",setup(e){return(A,C)=>{const a=u,i=n("highlightjs");return d(),r("div",g,[f,t("div",b,[t("div",S,[t("div",I,[t("div",x,[s(a,{color:"#3D4B6C",size:"20"},{default:l(()=>[s(p(m))]),_:1}),y])]),t("div",j,[s(i,{language:"JavaScript",code:w})])])])])}}},J=c(E,[["__scopeId","data-v-fe84fbda"]]);export{J as default};
