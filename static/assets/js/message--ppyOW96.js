import{_ as w,v as M,o as T,c as N,a as e,b as t,w as o,C as l,a1 as i,a2 as x,E as I,x as z,u,q as s,p as P,g as S,s as d}from"./index-vJ6HT9sI.js";const n=a=>(P("data-v-fea0ad6f"),a=a(),S(),a),W={class:"otherPage"},A={class:"body"},D={class:"card"},H={class:"cardHead"},V={class:"title"},$=n(()=>e("span",null,"主动消息提示",-1)),j={class:"cardBody"},q={class:"readme"},F=n(()=>e("p",null,"此类型提示用于用户操作主动操作后的反馈提示",-1)),G=n(()=>e("p",null,"接口报错统一用错误提示",-1)),J=n(()=>e("p",null,[s("API详见"),e("a",{href:"https://element-plus.org/zh-CN/component/message.html"},"消息提示")],-1)),K={class:"card"},L={class:"cardHead"},O={class:"title"},Q=n(()=>e("span",null,"被动消息提示",-1)),R={class:"cardBody"},U={class:"readme"},X=n(()=>e("p",null,"此类型提示用于系统级通知的被动提醒",-1)),Y=n(()=>e("p",null,[s("API详见"),e("a",{href:"https://element-plus.org/zh-CN/component/notification.html"},"通知")],-1)),Z={class:"card"},ee={class:"cardHead"},te={class:"title"},oe=n(()=>e("span",null,"弹窗",-1)),se={class:"cardBody"},ne={class:"readme"},ce=n(()=>e("p",null,"alert弹窗一般用于强提醒，用户必须知悉的情况",-1)),le=n(()=>e("p",null,"confirm弹窗一般用于提醒用户是否继续等场景",-1)),ae=n(()=>e("p",null,"prompt弹窗一般用于输入一些少量的信息时使用，字段多时建议用modal嵌套form",-1)),ie=n(()=>e("p",null,[s("API详见"),e("a",{href:"https://element-plus.org/zh-CN/component/message-box.html"},"消息弹窗框")],-1)),pe=`
<el-button :plain="true" @click="open1">消息提示</el-button>
<el-button :plain="true" @click="open2">成功提示</el-button>
<el-button :plain="true" @click="open3">警告提示</el-button>
<el-button :plain="true" @click="open4">错误提示</el-button>
// script
import { ElMessage } from 'element-plus'
const open1 = () => {
  ElMessage('这是一条普通提示！')
}
const open2 = () => {
  ElMessage({
    message: '这是一条成功提示!',
    type: 'success',
  })
}
const open3 = () => {
  ElMessage({
    message: '这是一条警告提示！',
    type: 'warning',
  })
}
const open4 = () => {
  ElMessage.error('这是一条错误提示！')
}
`,re=`
<el-button plain @click="open5"> 成功通知 </el-button>
<el-button plain @click="open6"> 警告通知 </el-button>
<el-button plain @click="open7"> 一般通知 </el-button>
<el-button plain @click="open8"> 错误通知 </el-button>
//script
import { ElNotification } from 'element-plus'
const open5 = () => {
  ElNotification({
    title: 'Success',
    message: '成功通知：xxxxxxxxxx',
    type: 'success',
  })
}

const open6 = () => {
  ElNotification({
    title: 'Warning',
    message: '警告通知：xxxxxxxxx',
    type: 'warning',
  })
}

const open7 = () => {
  ElNotification({
    title: 'Info',
    message: '一般通知：xxxxxxxxx',
    type: 'info',
  })
}

const open8 = () => {
  ElNotification({
    title: 'Error',
    message: '错误通知：xxxxxxxxx',
    type: 'error',
  })
}

`,xe=`
<el-button plain @click="open9"> alert弹窗 </el-button>
<el-button plain @click="open10"> confirm弹窗 </el-button>
<el-button plain @click="open11"> 提交内容（prompt弹窗） </el-button>
//script
import { ElMessage, ElMessageBox } from 'element-plus'
const open9 = () => {
  ElMessageBox.alert('alert弹窗', 'Title', {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: '我知道了'
  })
}
const open10 = () => {
  ElMessageBox.confirm(
    'confirm弹窗，是否继续?',
    'Warning',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      ElMessage({
        type: 'success',
        message: '提交成功~',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消~',
      })
    })
}
const open11 = () => {
  ElMessageBox.prompt('请输入邮箱~', '提示', {
    confirmButtonText: '提交',
    cancelButtonText: '取消',
    inputPattern: xxxxx
    inputErrorMessage: '验证错误',
  })
    .then(({ value }) => {
  ElMessage({
    type: 'success',
    message: '你的邮箱是:xxxx',
  })
})
  .catch(() => {
    ElMessage({
      type: 'info',
      message: '取消输入',
    })
  })
} `,ue={__name:"message",setup(a){const m=()=>{l("这是一条普通提示！")},f=()=>{l({message:"这是一条成功提示!",type:"success"})},g=()=>{l({message:"这是一条警告提示！",type:"warning"})},h=()=>{l.error("这是一条错误提示！")},E=()=>{i({title:"Success",message:"成功通知：xxxxxxxxxx",type:"success"})},b=()=>{i({title:"Warning",message:"警告通知：xxxxxxxxx",type:"warning"})},y=()=>{i({title:"Info",message:"一般通知：xxxxxxxxx",type:"info"})},B=()=>{i({title:"Error",message:"错误通知：xxxxxxxxx",type:"error"})},k=()=>{x.alert("alert弹窗","Title",{confirmButtonText:"我知道了"})},v=()=>{x.confirm("confirm弹窗，是否继续?","Warning",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{l({type:"success",message:"提交成功~"})}).catch(()=>{l({type:"info",message:"取消~"})})},C=()=>{x.prompt("请输入邮箱~","提示",{confirmButtonText:"提交",cancelButtonText:"取消",inputPattern:/[\w!#$%&'*+/=?^_`{|}~-] + (?: \.[\w!#$ %& '*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,inputErrorMessage:"验证错误"}).then(({value:_})=>{l({type:"success",message:`你的邮箱是:${_}`})}).catch(()=>{l({type:"info",message:"取消输入"})})};return(_,de)=>{const p=I,c=z,r=M("highlightjs");return T(),N("div",W,[e("div",A,[e("div",D,[e("div",H,[e("div",V,[t(p,{color:"#3D4B6C",size:"20"},{default:o(()=>[t(u(d))]),_:1}),$])]),e("div",j,[t(c,{plain:!0,onClick:m},{default:o(()=>[s("消息提示")]),_:1}),t(c,{plain:!0,onClick:f},{default:o(()=>[s("成功提示")]),_:1}),t(c,{plain:!0,onClick:g},{default:o(()=>[s("警告提示")]),_:1}),t(c,{plain:!0,onClick:h},{default:o(()=>[s("错误提示")]),_:1}),e("div",q,[F,G,J,t(r,{code:pe})])])]),e("div",K,[e("div",L,[e("div",O,[t(p,{color:"#3D4B6C",size:"20"},{default:o(()=>[t(u(d))]),_:1}),Q])]),e("div",R,[t(c,{plain:"",onClick:E},{default:o(()=>[s(" 成功通知 ")]),_:1}),t(c,{plain:"",onClick:b},{default:o(()=>[s(" 警告通知 ")]),_:1}),t(c,{plain:"",onClick:y},{default:o(()=>[s(" 一般通知 ")]),_:1}),t(c,{plain:"",onClick:B},{default:o(()=>[s(" 错误通知 ")]),_:1}),e("div",U,[X,Y,t(r,{code:re})])])]),e("div",Z,[e("div",ee,[e("div",te,[t(p,{color:"#3D4B6C",size:"20"},{default:o(()=>[t(u(d))]),_:1}),oe])]),e("div",se,[t(c,{plain:"",onClick:k},{default:o(()=>[s(" alert弹窗 ")]),_:1}),t(c,{plain:"",onClick:v},{default:o(()=>[s(" confirm弹窗 ")]),_:1}),t(c,{plain:"",onClick:C},{default:o(()=>[s(" 提交内容（prompt弹窗） ")]),_:1}),e("div",ne,[ce,le,ae,ie,t(r,{code:xe})])])])])])}}},me=w(ue,[["__scopeId","data-v-fea0ad6f"]]);export{me as default};
