import{_ as M,j as w,o as T,f as N,h as e,a as t,w as s,Z as l,$ as i,a0 as d,l as I,A as S,u,t as o,p as z,g as P,C as x}from"./index-5EcmmaJg.js";/* empty css               */const n=a=>(z("data-v-d1acc4a7"),a=a(),P(),a),A={class:"otherPage"},W=n(()=>e("div",{class:"head"},[e("div",{class:"title"},[o(" 消息提示及弹窗 "),e("span",null,"MESSAGE")])],-1)),$={class:"body"},j={class:"card"},D={class:"cardHead"},H={class:"title"},V=n(()=>e("span",null,"主动消息提示",-1)),G={class:"cardBody"},Z={class:"readme"},q=n(()=>e("p",null,"此类型提示用于用户操作主动操作后的反馈提示",-1)),F=n(()=>e("p",null,"接口报错统一用错误提示",-1)),J=n(()=>e("p",null,[o("API详见"),e("a",{href:"https://element-plus.org/zh-CN/component/message.html"},"消息提示")],-1)),K={class:"card"},L={class:"cardHead"},O={class:"title"},Q=n(()=>e("span",null,"被动消息提示",-1)),R={class:"cardBody"},U={class:"readme"},X=n(()=>e("p",null,"此类型提示用于系统级通知的被动提醒",-1)),Y=n(()=>e("p",null,[o("API详见"),e("a",{href:"https://element-plus.org/zh-CN/component/notification.html"},"通知")],-1)),ee={class:"card"},te={class:"cardHead"},oe={class:"title"},se=n(()=>e("span",null,"弹窗",-1)),ne={class:"cardBody"},ce={class:"readme"},le=n(()=>e("p",null,"alert弹窗一般用于强提醒，用户必须知悉的情况",-1)),ae=n(()=>e("p",null,"confirm弹窗一般用于提醒用户是否继续等场景",-1)),ie=n(()=>e("p",null,"prompt弹窗一般用于输入一些少量的信息时使用，字段多时建议用modal嵌套form",-1)),pe=n(()=>e("p",null,[o("API详见"),e("a",{href:"https://element-plus.org/zh-CN/component/message-box.html"},"消息弹窗框")],-1)),re=`
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
`,de=`
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

`,ue=`
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
} `,xe={__name:"message",setup(a){const m=()=>{l("这是一条普通提示！")},h=()=>{l({message:"这是一条成功提示!",type:"success"})},g=()=>{l({message:"这是一条警告提示！",type:"warning"})},f=()=>{l.error("这是一条错误提示！")},E=()=>{i({title:"Success",message:"成功通知：xxxxxxxxxx",type:"success"})},y=()=>{i({title:"Warning",message:"警告通知：xxxxxxxxx",type:"warning"})},b=()=>{i({title:"Info",message:"一般通知：xxxxxxxxx",type:"info"})},B=()=>{i({title:"Error",message:"错误通知：xxxxxxxxx",type:"error"})},k=()=>{d.alert("alert弹窗","Title",{confirmButtonText:"我知道了"})},v=()=>{d.confirm("confirm弹窗，是否继续?","Warning",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{l({type:"success",message:"提交成功~"})}).catch(()=>{l({type:"info",message:"取消~"})})},C=()=>{d.prompt("请输入邮箱~","提示",{confirmButtonText:"提交",cancelButtonText:"取消",inputPattern:/[\w!#$%&'*+/=?^_`{|}~-] + (?: \.[\w!#$ %& '*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,inputErrorMessage:"验证错误"}).then(({value:_})=>{l({type:"success",message:`你的邮箱是:${_}`})}).catch(()=>{l({type:"info",message:"取消输入"})})};return(_,_e)=>{const p=I,c=S,r=w("highlightjs");return T(),N("div",A,[W,e("div",$,[e("div",j,[e("div",D,[e("div",H,[t(p,{color:"#3D4B6C",size:"20"},{default:s(()=>[t(u(x))]),_:1}),V])]),e("div",G,[t(c,{plain:!0,onClick:m},{default:s(()=>[o("消息提示")]),_:1}),t(c,{plain:!0,onClick:h},{default:s(()=>[o("成功提示")]),_:1}),t(c,{plain:!0,onClick:g},{default:s(()=>[o("警告提示")]),_:1}),t(c,{plain:!0,onClick:f},{default:s(()=>[o("错误提示")]),_:1}),e("div",Z,[q,F,J,t(r,{code:re})])])]),e("div",K,[e("div",L,[e("div",O,[t(p,{color:"#3D4B6C",size:"20"},{default:s(()=>[t(u(x))]),_:1}),Q])]),e("div",R,[t(c,{plain:"",onClick:E},{default:s(()=>[o(" 成功通知 ")]),_:1}),t(c,{plain:"",onClick:y},{default:s(()=>[o(" 警告通知 ")]),_:1}),t(c,{plain:"",onClick:b},{default:s(()=>[o(" 一般通知 ")]),_:1}),t(c,{plain:"",onClick:B},{default:s(()=>[o(" 错误通知 ")]),_:1}),e("div",U,[X,Y,t(r,{code:de})])])]),e("div",ee,[e("div",te,[e("div",oe,[t(p,{color:"#3D4B6C",size:"20"},{default:s(()=>[t(u(x))]),_:1}),se])]),e("div",ne,[t(c,{plain:"",onClick:k},{default:s(()=>[o(" alert弹窗 ")]),_:1}),t(c,{plain:"",onClick:v},{default:s(()=>[o(" confirm弹窗 ")]),_:1}),t(c,{plain:"",onClick:C},{default:s(()=>[o(" 提交内容（prompt弹窗） ")]),_:1}),e("div",ce,[le,ae,ie,pe,t(r,{code:ue})])])])])])}}},ge=M(xe,[["__scopeId","data-v-d1acc4a7"]]);export{ge as default};
