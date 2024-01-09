import{_ as a,v as h,o as d,c as r,a as t,b as e,w as n,E as _,u as s,p,g as u,s as m,W as g}from"./index-1vFYksHe.js";const i=o=>(p("data-v-ab7803ce"),o=o(),u(),o),b={class:"otherPage"},f={class:"body"},v={class:"card"},T={class:"cardHead"},y={class:"title"},x=i(()=>t("span",null,"菜单",-1)),B={class:"cardBody"},I={class:"readme"},k=i(()=>t("span",null,"样式展示请参考页面左边slider",-1)),j=i(()=>t("p",null,"源码在components/Aside.vue文件下",-1)),w=i(()=>t("p",null,"需要数据格式如下",-1)),C=i(()=>t("ul",{class:"code"},[t("li",null,"1. 根据children字段判断是否有3级菜单"),t("li",null,"2. icon必须为iconfont图标库已上传的图标"),t("li",null,"3. path为路由"),t("li",null,"3. shortTitle为菜单折叠后的文字"),t("li",null,"4. 2级菜单只做标题占位使用")],-1)),E=`
const menu = [
  {
    path: '/',
    title: '首页',
    shortTitle: '首页',
    icon: 'icon-shouye',
    children: []
  },
  {
    path: '/basic',
    title: '基础元素',
    shortTitle: '基础',
    icon: 'icon-chanpin',
    children: [
      {
        title: '二级标题1',
        children: [
          {
            path: '/basic/color',
            title: '标准配色'
          },
          {
            path: '/basic/icon',
            title: '图标'
          }
        ]
      },
      {
        title: '二级标题2',
        children: [
          {
            path: '/basic/title',
            title: '标题'
          },
          {
            path: '/basic/button',
            title: '按钮'
          }
        ]
      }
    ]
  },
  {
    path: '/form',
    title: '表单样式',
    shortTitle: '表单',
    icon: 'icon-dingdan',
    children: []
  },
  {
    path: '/table',
    title: '表格样式',
    shortTitle: '表格',
    icon: 'icon-shuju',
    children: []
  },
  {
    path: '/pagination',
    title: '分页样式',
    shortTitle: '分页',
    icon: 'icon-fenye',
    children: []
  },
  {
    path: '/menu',
    title: '菜单样式',
    shortTitle: '菜单',
    icon: 'icon-gongyingshang',
    children: []
  },
  {
    path: '/tabs',
    title: '标签样式',
    shortTitle: '标签',
    icon: 'icon-icon_biaoqian_m',
    children: []
  },
  {
    path: '/message',
    title: '弹窗消息',
    shortTitle: '弹窗',
    icon: 'icon-kefu',
    children: []
  },
  {
    path: '/rules',
    title: '开发规范',
    shortTitle: '规范',
    icon: 'icon-yingxiaoguanli',
    children: []
  },
  {
    path: '/other',
    title: '其他样式',
    shortTitle: '其他',
    icon: 'icon-qita',
    children: []
  },
]

`,S={__name:"menu",setup(o){return(q,z)=>{const c=_,l=h("highlightjs");return d(),r("div",b,[t("div",f,[t("div",v,[t("div",T,[t("div",y,[e(c,{color:"#3D4B6C",size:"20"},{default:n(()=>[e(s(m))]),_:1}),x])]),t("div",B,[t("div",I,[t("p",null,[e(c,{size:"36",color:"red"},{default:n(()=>[e(s(g))]),_:1}),k]),j,w,C,e(l,{code:E})])])])])])}}},V=a(S,[["__scopeId","data-v-ab7803ce"]]);export{V as default};
