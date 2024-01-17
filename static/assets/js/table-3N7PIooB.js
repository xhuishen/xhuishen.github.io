import{_ as y,z as r,Q as E,v as L,o as p,c as w,a as e,b as a,w as d,R as D,S as k,E as x,e as B,x as C,T,u as z,q as i,t as u,p as I,g as S,h as N,s as V}from"./index-uDwWmcy_.js";/* empty css                     *//* empty css                 *//* empty css            */const m=l=>(I("data-v-6f8ea449"),l=l(),S(),l),M={class:"tablePage"},j={class:"body"},P={class:"card"},$={class:"cardHead"},q={class:"title"},A=m(()=>e("span",null,"基础表格",-1)),H={class:"cardBody"},Q=m(()=>e("div",{class:"readme"},[e("p",null,"表格相关注意事项"),e("p",null,"reset已经设置table宽度100%，无需重复设置"),e("p",null," 表格无特殊需求，默认使用小号带边框的，内容居中, 请求数据时需loading状态 "),e("p",null," 内容超出屏幕宽度左右需要设置fixed给予滚动，不能存在1行字挤成5行的情况 "),e("p",null," 虚拟化表格（Virtualized Table）不推荐使用，数据较多时请配合分页组件使用 "),e("p",null,[i(" API详见 "),e("a",{href:"https://element-plus.org/zh-CN/component/table.html"}," 表格 ")])],-1)),R=`
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
`,F={__name:"table",setup(l){const _=[],b=[{date:"2016-05-03",name:"老王",address:"北京市朝阳区XXXXX",phone:"13023121234"},{date:"2016-05-02",name:"老王",address:"北京市朝阳区XXXXX",phone:"13023121234"},{date:"2016-05-04",name:"老王",address:"北京市朝阳区XXXXX",phone:"13023121234"},{date:"2016-05-01",name:"老王",address:"北京市朝阳区XXXXX",phone:"13023121234"}],t=r(!1),o=r(!1);return E(()=>{t.value=!0,setTimeout(()=>{t.value=!1},500)}),(G,s)=>{const X=x,n=N,h=B,c=C,v=L("highlightjs"),g=T;return p(),w("div",M,[e("div",j,[e("div",P,[e("div",$,[e("div",q,[a(X,{color:"#3D4B6C",size:"20"},{default:d(()=>[a(z(V))]),_:1}),A])]),e("div",H,[D((p(),k(h,{data:o.value?_:b,border:"",size:"small"},{default:d(()=>[a(n,{prop:"date",label:"日期",width:"180",align:"center"}),a(n,{prop:"name",label:"姓名",width:"180",align:"center"}),a(n,{prop:"phone",label:"联系方式",align:"center"}),a(n,{prop:"address",label:"地址",align:"center"})]),_:1},8,["data"])),[[g,t.value]]),e("div",null,[a(c,{type:"primary",onClick:s[0]||(s[0]=f=>t.value=!t.value)},{default:d(()=>[i(u(t.value?"关闭":"加载")+" Loading ",1)]),_:1}),a(c,{type:"primary",onClick:s[1]||(s[1]=f=>o.value=!o.value)},{default:d(()=>[i(" 查看"+u(o.value?"有":"无")+"数据 ",1)]),_:1})]),Q,a(v,{code:R})])])])])}}},W=y(F,[["__scopeId","data-v-6f8ea449"]]);export{W as default};
