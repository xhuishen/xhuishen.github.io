import{_,j as m,o as p,f as i,h as e,a,w as o,l as h,q as b,u as v,p as u,g,t as N,z as S,C as T}from"./index-RCsPaKY5.js";/* empty css                     *//* empty css                  *//* empty css            */const d=t=>(u("data-v-7dd58fee"),t=t(),g(),t),f={class:"tablePage"},A=d(()=>e("div",{class:"head"},[e("div",{class:"title"},[N(" 表格 "),e("span",null,"TABLE")])],-1)),w={class:"body"},L={class:"card"},G={class:"cardHead"},B={class:"title"},D=d(()=>e("span",null,"基础表格",-1)),x={class:"cardBody"},C=`<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

// script
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]`,E={__name:"table",setup(t){const l=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}];return(I,y)=>{const n=h,s=S,c=b,r=m("highlightjs");return p(),i("div",f,[A,e("div",w,[e("div",L,[e("div",G,[e("div",B,[a(n,{color:"#3D4B6C",size:"20"},{default:o(()=>[a(v(T))]),_:1}),D])]),e("div",x,[a(c,{data:l,style:{width:"100%"}},{default:o(()=>[a(s,{prop:"date",label:"Date",width:"180"}),a(s,{prop:"name",label:"Name",width:"180"}),a(s,{prop:"address",label:"Address"})]),_:1}),a(r,{language:"JavaScript",code:C})])])])])}}},q=_(E,[["__scopeId","data-v-7dd58fee"]]);export{q as default};
