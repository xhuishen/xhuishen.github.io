import{_ as y,z as p,Q as E,s as L,o as r,c as w,a as e,b as a,w as d,R as D,S as k,E as B,e as C,y as T,T as x,u as I,v as i,t as u,p as S,g as z,h as N,q as V}from"./index-4lTfaIF5.js";/* empty css                     *//* empty css                 *//* empty css            */const m=l=>(S("data-v-b6a5a0e4"),l=l(),z(),l),M={class:"tablePage"},j={class:"body"},P={class:"card"},$={class:"cardHead"},q={class:"title"},A=m(()=>e("span",null,"基础表格",-1)),H={class:"cardBody"},Q=m(()=>e("div",{class:"readme"},[e("p",null,"表格相关注意事项"),e("p",null,"reset已经设置table宽度100%，无需重复设置"),e("p",null,"表格无特殊需求，默认使用带边框的，内容居中, 请求数据时需loading状态"),e("p",null,"内容超出屏幕宽度左右需要设置fixed给予滚动，不能存在1行字挤成5行的情况"),e("p",null,"虚拟化表格（Virtualized Table）不推荐使用，数据较多时请配合分页组件使用"),e("p",null,[i("API详见"),e("a",{href:"https://element-plus.org/zh-CN/component/table.html"},"表格")])],-1)),R=`
<el-table :data="tableData" >
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
`,F={__name:"table",setup(l){const _=[],b=[{date:"2016-05-03",name:"老王",address:"北京市朝阳区XXXXX",phone:"13023121234"},{date:"2016-05-02",name:"老王",address:"北京市朝阳区XXXXX",phone:"13023121234"},{date:"2016-05-04",name:"老王",address:"北京市朝阳区XXXXX",phone:"13023121234"},{date:"2016-05-01",name:"老王",address:"北京市朝阳区XXXXX",phone:"13023121234"}],t=p(!1),o=p(!1);return E(()=>{t.value=!0,setTimeout(()=>{t.value=!1},2e3)}),(G,n)=>{const X=B,s=N,h=C,c=T,v=L("highlightjs"),g=x;return r(),w("div",M,[e("div",j,[e("div",P,[e("div",$,[e("div",q,[a(X,{color:"#3D4B6C",size:"20"},{default:d(()=>[a(I(V))]),_:1}),A])]),e("div",H,[D((r(),k(h,{data:o.value?_:b,border:""},{default:d(()=>[a(s,{prop:"date",label:"日期",width:"180",align:"center"}),a(s,{prop:"name",label:"姓名",width:"180",align:"center"}),a(s,{prop:"phone",label:"联系方式",align:"center"}),a(s,{prop:"address",label:"地址",align:"center"})]),_:1},8,["data"])),[[g,t.value]]),e("div",null,[a(c,{type:"primary",onClick:n[0]||(n[0]=f=>t.value=!t.value)},{default:d(()=>[i(u(t.value?"关闭":"加载")+" Loading ",1)]),_:1}),a(c,{type:"primary",onClick:n[1]||(n[1]=f=>o.value=!o.value)},{default:d(()=>[i("查看"+u(o.value?"有":"无")+"数据",1)]),_:1})]),Q,a(v,{code:R})])])])])}}},W=y(F,[["__scopeId","data-v-b6a5a0e4"]]);export{W as default};
