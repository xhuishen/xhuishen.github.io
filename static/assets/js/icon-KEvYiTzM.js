import{_ as a,r as l,o as d,c as r,b as e,w as t,E as p,p as _,e as h,a as n}from"./index-RuUpFq4j.js";/* empty css             */const i=o=>(_("data-v-b5198083"),o=o(),h(),o),u=i(()=>n("h4",null,"如果是单色且Element Plus支持，可以直接使用",-1)),f=i(()=>n("h4",null,"如果是多色或Element Plus不支持，使用iconfont的方式",-1)),m=`<template>
  <div>
    <el-icon :size="size" :color="color">
      <List />
    </el-icon>
    <!-- 或者独立使用它，不从父级获取属性 -->
    <List />
  </div>
</template>
// script
import { List } from '@element-plus/icons-vue'`,v=`
// 1.登录iconfont官网 https://www.iconfont.cn/  选择资源管理>我的项目降图标下载到本地且导入项目
// 2.在项目中引入iconfont.css 需要兼容旧版本浏览器的使用unicode方式
// 3.定义iconfont公共样式
.iconfont {
    ...
}
// 4.使用
<i class="iconfont icon-shouye"></i>    //font class
<i class="iconfont">&#xe602;</i>        //Unicode
<svg class="icon" aria-hidden="true">   //symbol
    <use xlink:href="#icon-xxx"></use>
</svg>
`,x={__name:"icon",setup(o){return(w,g)=>{const s=l("highlightjs"),c=p;return d(),r("div",null,[e(c,{shadow:"hover"},{header:t(()=>[u]),default:t(()=>[e(s,{autodetect:"",code:m})]),_:1}),e(c,{shadow:"hover"},{header:t(()=>[f]),default:t(()=>[e(s,{autodetect:"",code:v})]),_:1})])}}},I=a(x,[["__scopeId","data-v-b5198083"]]);export{I as default};
