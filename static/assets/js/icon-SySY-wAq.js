import{_ as l,v as _,o as h,c as p,a as s,b as t,w as i,q as r,E as u,u as d,p as f,g as v,s as a}from"./index-HU3D_31k.js";const o=e=>(f("data-v-bf8fc3bd"),e=e(),v(),e),m={class:"iconPage"},x={class:"body"},b={class:"card"},g={class:"cardHead"},B={class:"title"},w=o(()=>s("span",null,"单色 且 Element Plus支持",-1)),y={class:"cardBody"},E={class:"readme"},I={class:"card"},z={class:"cardHead"},C={class:"title"},k=o(()=>s("span",null,"多色 或 Element Plus不支持",-1)),N={class:"cardBody"},P={class:"readme"},S=o(()=>s("p",null,"1.登录iconfont官网 https://www.iconfont.cn/ 选择资源管理>我的项目降图标下载到本地且导入项目",-1)),V=o(()=>s("p",null,"2.在项目中引入iconfont.css 需要兼容旧版本浏览器的使用unicode方式",-1)),j=o(()=>s("p",null,"3.定义iconfont公共样式",-1)),D=o(()=>s("p",null,".iconfont { ... }",-1)),H=o(()=>s("p",null,"4.使用（多色图标请使用symbol方式）",-1)),q=`//vite开启了自动导入
<template>
    <el-icon :size="size" :color="color">
        <i-ep-plus />
    </el-icon>
</template>
`,T=`//iconfont 自定义图标
<i class="iconfont icon-shouye"></i> //font class
<i class="iconfont">&#xe602;</i> //Unicode
<svg class="icon" aria-hidden="true"> //symbol
    <use xlink:href="#icon-xxx"></use>
</svg>`,U={__name:"icon",setup(e){return(A,F)=>{const c=u,n=_("highlightjs");return h(),p("div",m,[s("div",x,[s("div",b,[s("div",g,[s("div",B,[t(c,{color:"#3D4B6C",size:"20"},{default:i(()=>[t(d(a))]),_:1}),w])]),s("div",y,[s("div",E,[r(" 如果是Element的单色图标 直接复制即可 "),t(n,{autodetect:"",code:q})])])]),s("div",I,[s("div",z,[s("div",C,[t(c,{color:"#3D4B6C",size:"20"},{default:i(()=>[t(d(a))]),_:1}),k])]),s("div",N,[s("div",P,[S,V,j,D,H,t(n,{autodetect:"",code:T})])])])])])}}},J=l(U,[["__scopeId","data-v-bf8fc3bd"]]);export{J as default};
