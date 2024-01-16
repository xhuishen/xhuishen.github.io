import{_ as g,z as d,Q as f,v as y,o as i,c as E,a as e,b as a,w as c,R as L,S as w,t as r,E as D,e as k,T as C,u as T,p as x,g as z,q as B,h as I,s as S}from"./index-W-7JKmBS.js";/* empty css                     *//* empty css                 *//* empty css            */const p=l=>(x("data-v-b29ecef2"),l=l(),z(),l),N={class:"tablePage"},V={class:"body"},M={class:"card"},j={class:"cardHead"},P={class:"title"},$=p(()=>e("span",null,"基础表格",-1)),q={class:"cardBody"},A=p(()=>e("div",{class:"readme"},[e("p",null,"表格相关注意事项"),e("p",null,"reset已经设置table宽度100%，无需重复设置"),e("p",null," 表格无特殊需求，默认使用小号带边框的，内容居中, 请求数据时需loading状态 "),e("p",null," 内容超出屏幕宽度左右需要设置fixed给予滚动，不能存在1行字挤成5行的情况 "),e("p",null," 虚拟化表格（Virtualized Table）不推荐使用，数据较多时请配合分页组件使用 "),e("p",null,[B(" API详见 "),e("a",{href:"https://element-plus.org/zh-CN/component/table.html"}," 表格 ")])],-1)),H=`
<el-table :data="tableData" border size="small">
    <el-table-column prop="date" label="日期" width="180" align="center"/>
    <el-table-column prop="name" label="姓名" width="180" align="center" />
    <el-table-column prop="address" label="地址" align="center" />
</el-table>
<div>
    <el-button type="primary" @click="tableLoading = !tableLoading">{{tableLoading?'加载':'关闭'}} Loading </el-button>
    <el-button type="primary" @click="isEmpty = !isEmpty">查看{{isEmpty?'有':'无'}}数据</el-button>
</div>

// script
const emptyData = []
const tableData = [
  {
    date: '2016-05-03',
    name: '老王',
    address: '北京市朝阳区XXXXX',
    phone: '13023121234'
  },
  {
    date: '2016-05-02',
    name: '老王',
    address: '北京市朝阳区XXXXX',
    phone: '13023121234'
  },
  {
    date: '2016-05-04',
    name: '老王',
    address: '北京市朝阳区XXXXX',
    phone: '13023121234'
  },
  {
    date: '2016-05-01',
    name: '老王',
    address: '北京市朝阳区XXXXX',
    phone: '13023121234'
  },
]

import { onMounted, ref } from "vue"
const tableLoading = ref(false)
const isEmpty = ref(false)
onMounted(() => {
  tableLoading.value = true
  setTimeout(() => {
    tableLoading.value = false
  }, 2000)
})
`,Q={__name:"table",setup(l){const u=[],m=[{date:"2016-05-03",name:"老王",address:"北京市朝阳区XXXXX",phone:"13023121234"},{date:"2016-05-02",name:"老王",address:"北京市朝阳区XXXXX",phone:"13023121234"},{date:"2016-05-04",name:"老王",address:"北京市朝阳区XXXXX",phone:"13023121234"},{date:"2016-05-01",name:"老王",address:"北京市朝阳区XXXXX",phone:"13023121234"}],t=d(!1),o=d(!1);return f(()=>{t.value=!0,setTimeout(()=>{t.value=!1},500)}),(R,s)=>{const b=D,n=I,_=k,X=y("highlightjs"),h=C;return i(),E("div",N,[e("div",V,[e("div",M,[e("div",j,[e("div",P,[a(b,{color:"#3D4B6C",size:"20"},{default:c(()=>[a(T(S))]),_:1}),$])]),e("div",q,[L((i(),w(_,{data:o.value?u:m,border:"",size:"small"},{default:c(()=>[a(n,{prop:"date",label:"日期",width:"180",align:"center"}),a(n,{prop:"name",label:"姓名",width:"180",align:"center"}),a(n,{prop:"phone",label:"联系方式",align:"center"}),a(n,{prop:"address",label:"地址",align:"center"})]),_:1},8,["data"])),[[h,t.value]]),e("div",null,[e("button",{type:"primary",onClick:s[0]||(s[0]=v=>t.value=!t.value)},r(t.value?"关闭":"加载")+" Loading ",1),e("button",{type:"primary",onClick:s[1]||(s[1]=v=>o.value=!o.value)}," 查看"+r(o.value?"有":"无")+"数据 ",1)]),A,a(X,{code:H})])])])])}}},O=g(Q,[["__scopeId","data-v-b29ecef2"]]);export{O as default};
