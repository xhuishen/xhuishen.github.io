import{_,j as i,o as X,f as m,h as e,a,w as o,l as h,q as b,u,p as f,g as v,t as d,z as g,C as w}from"./index-FrRuw_su.js";/* empty css                     *//* empty css                 *//* empty css                  *//* empty css            */const l=t=>(f("data-v-f7be7c2d"),t=t(),v(),t),x={class:"tablePage"},B=l(()=>e("div",{class:"head"},[e("div",{class:"title"},[d(" 表格 "),e("span",null,"TABLE")])],-1)),C={class:"body"},I={class:"card"},E={class:"cardHead"},T={class:"title"},z=l(()=>e("span",null,"基础表格",-1)),D={class:"cardBody"},N=l(()=>e("div",{class:"readme"},[e("p",null,"表格相关注意事项"),e("p",null,"reset已经设置table宽度100%，无需重复设置"),e("p",null,"表格无特殊需求，默认使用带边框的"),e("p",null,"内容超出屏幕宽度左右需要设置fixed给予滚动，不能存在1行字挤成5行的情况"),e("p",null,"虚拟化表格（Virtualized Table）"),e("p",null,[d("API详见"),e("a",{href:"https://element-plus.org/zh-CN/component/table.html"},"表格")])],-1)),S=`
<el-table :data="tableData" >
    <el-table-column prop="date" label="日期" width="180" />
    <el-table-column prop="name" label="姓名" width="180" />
    <el-table-column prop="address" label="地址" />
</el-table>

// script
const tableData = [
  {
    date: '2016-05-03',
    name: '老王',
    address: '北京市朝阳区XXXXX',
  },
  {
    date: '2016-05-02',
    name: '老王',
    address: '北京市朝阳区XXXXX',
  },
  {
    date: '2016-05-04',
    name: '老王',
    address: '北京市朝阳区XXXXX',
  },
  {
    date: '2016-05-01',
    name: '老王',
    address: '北京市朝阳区XXXXX',
  },
]`,V={__name:"table",setup(t){const n=[{date:"2016-05-03",name:"老王",address:"北京市朝阳区XXXXX"},{date:"2016-05-02",name:"老王",address:"北京市朝阳区XXXXX"},{date:"2016-05-04",name:"老王",address:"北京市朝阳区XXXXX"},{date:"2016-05-01",name:"老王",address:"北京市朝阳区XXXXX"}];return(j,k)=>{const c=h,s=g,p=b,r=i("highlightjs");return X(),m("div",x,[B,e("div",C,[e("div",I,[e("div",E,[e("div",T,[a(c,{color:"#3D4B6C",size:"20"},{default:o(()=>[a(u(w))]),_:1}),z])]),e("div",D,[a(p,{data:n,border:""},{default:o(()=>[a(s,{prop:"date",label:"日期",width:"180"}),a(s,{prop:"name",label:"姓名",width:"180"}),a(s,{prop:"address",label:"地址"})]),_:1}),N,a(r,{language:"JavaScript",code:S})])])])])}}},J=_(V,[["__scopeId","data-v-f7be7c2d"]]);export{J as default};
