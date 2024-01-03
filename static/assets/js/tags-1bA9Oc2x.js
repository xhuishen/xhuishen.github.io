import{_ as u,r as b,j as h,o as a,f as l,h as t,a as m,w as s,F as o,v as n,l as v,u as x,c as r,t as c,x as g,p as k,g as T,U as w,C as B}from"./index-RCsPaKY5.js";/* empty css            */const _=d=>(k("data-v-4f0eeb1d"),d=d(),T(),d),S={class:"tagsPage"},I=_(()=>t("div",{class:"head"},[t("div",{class:"title"},[c(" 标签 "),t("span",null,"TAGS")])],-1)),C={class:"body"},D={class:"card"},j={class:"cardHead"},E={class:"title"},L=_(()=>t("span",null,"基础用法",-1)),N={class:"cardBody"},P={class:"tag-group my-2 flex flex-wrap gap-1 items-center"},V=_(()=>t("span",{class:"tag-group__title m-1 line-height-2"},"Dark",-1)),F={class:"tag-group my-2 flex flex-wrap gap-1 items-center"},z=_(()=>t("span",{class:"tag-group__title m-1"},"Light",-1)),A={class:"tag-group my-2 flex flex-wrap gap-1 items-center"},G=_(()=>t("span",{class:"tag-group__title m-1"},"Plain",-1)),H=`<template>
  <div class="tag-group my-2 flex flex-wrap gap-1 items-center">
    <span class="tag-group__title m-1 line-height-2">Dark</span>
    <el-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      class="mx-1"
      effect="dark"
    >
      {{ item.label }}
    </el-tag>
    <el-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      class="mx-1"
      effect="dark"
      closable
    >
      {{ item.label }}
    </el-tag>
  </div>
  <div class="tag-group my-2 flex flex-wrap gap-1 items-center">
    <span class="tag-group__title m-1">Light</span>
    <el-tag
      v-for="item in items"
      :key="item.label"
      class="mx-1"
      :type="item.type"
      effect="light"
    >
      {{ item.label }}
    </el-tag>
    <el-tag
      v-for="item in items"
      :key="item.label"
      class="mx-1"
      :type="item.type"
      effect="light"
      closable
    >
      {{ item.label }}
    </el-tag>
  </div>
  <div class="tag-group my-2 flex flex-wrap gap-1 items-center">
    <span class="tag-group__title m-1">Plain</span>
    <el-tag
      v-for="item in items"
      :key="item.label"
      class="mx-1"
      :type="item.type"
      effect="plain"
    >
      {{ item.label }}
    </el-tag>
    <el-tag
      v-for="item in items"
      :key="item.label"
      class="mx-1"
      :type="item.type"
      effect="plain"
      closable
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

//script
import { ref } from 'vue'

const items = ref([
  { type: '', label: 'Tag 1' },
  { type: 'success', label: 'Tag 2' },
  { type: 'info', label: 'Tag 3' },
  { type: 'danger', label: 'Tag 4' },
  { type: 'warning', label: 'Tag 5' },
])

`,J={__name:"tags",setup(d){const i=b([{type:"",label:"Tag 1"},{type:"success",label:"Tag 2"},{type:"info",label:"Tag 3"},{type:"danger",label:"Tag 4"},{type:"warning",label:"Tag 5"}]);return(U,q)=>{const f=v,p=w,y=h("highlightjs");return a(),l("div",S,[I,t("div",C,[t("div",D,[t("div",j,[t("div",E,[m(f,{color:"#3D4B6C",size:"20"},{default:s(()=>[m(x(B))]),_:1}),L])]),t("div",N,[t("div",P,[V,(a(!0),l(o,null,n(i.value,e=>(a(),r(p,{key:e.label,type:e.type,class:"mx-1",effect:"dark"},{default:s(()=>[c(g(e.label),1)]),_:2},1032,["type"]))),128)),(a(!0),l(o,null,n(i.value,e=>(a(),r(p,{key:e.label,type:e.type,class:"mx-1",effect:"dark",closable:""},{default:s(()=>[c(g(e.label),1)]),_:2},1032,["type"]))),128))]),t("div",F,[z,(a(!0),l(o,null,n(i.value,e=>(a(),r(p,{key:e.label,class:"mx-1",type:e.type,effect:"light"},{default:s(()=>[c(g(e.label),1)]),_:2},1032,["type"]))),128)),(a(!0),l(o,null,n(i.value,e=>(a(),r(p,{key:e.label,class:"mx-1",type:e.type,effect:"light",closable:""},{default:s(()=>[c(g(e.label),1)]),_:2},1032,["type"]))),128))]),t("div",A,[G,(a(!0),l(o,null,n(i.value,e=>(a(),r(p,{key:e.label,class:"mx-1",type:e.type,effect:"plain"},{default:s(()=>[c(g(e.label),1)]),_:2},1032,["type"]))),128)),(a(!0),l(o,null,n(i.value,e=>(a(),r(p,{key:e.label,class:"mx-1",type:e.type,effect:"plain",closable:""},{default:s(()=>[c(g(e.label),1)]),_:2},1032,["type"]))),128))]),m(y,{language:"JavaScript",code:H})])])])])}}},O=u(J,[["__scopeId","data-v-4f0eeb1d"]]);export{O as default};
