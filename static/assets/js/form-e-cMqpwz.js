import{_ as I,r as U,I as B,j as S,o as j,f as N,h as o,a as e,w as l,l as P,J as O,u as M,t as i,p as T,g as z,E as A,K as D,L as G,M as H,N as J,b as K,O as L,P as Q,Q as W,R as X,S as Y,T as Z,A as $,C as ee}from"./index-AInkLcLR.js";/* empty css               *//* empty css                 *//* empty css                  *//* empty css            *//* empty css               */const s=n=>(T("data-v-6f2d3281"),n=n(),z(),n),le={class:"formPage"},oe=s(()=>o("div",{class:"head"},[o("div",{class:"title"},[i(" 表单 "),o("span",null,"FORM")])],-1)),te={class:"body"},re={class:"card"},ae={class:"cardHead"},se={class:"title"},de=s(()=>o("span",null,"基础表单",-1)),ne={class:"cardBody"},me=s(()=>o("span",{class:"text-gray-500"},"-",-1)),ie={class:"readme"},ce=s(()=>o("p",null,"注意 请使用自带表单验证及重置功能(为了保持样式统一)",-1)),ue=s(()=>o("p",{class:"code"},"ruleFormRef.value.validate((valid) => { })",-1)),pe=s(()=>o("p",{class:"code"},"ruleFormRef.value.resetFields()",-1)),_e=s(()=>o("p",null,"除非个别字段需要重新处理 否者不要使用直接赋值来重置",-1)),fe=s(()=>o("p",{class:"code"},"bad: form.value = { aa:'', bb:'' }",-1)),be=s(()=>o("p",null,[i("API详见"),o("a",{href:"https://element-plus.org/zh-CN/component/form.html"},"FORM表单")],-1)),ge=`
<el-form ref="ruleFormRef" :model="form" :rules="rules" label-width="120px">
    <el-form-item label="活动名称" prop="name">
    <el-input v-model="form.name" placeholder="请输入活动名称" />
    </el-form-item>
    <el-form-item label="活动地点" prop="region">
    <el-select v-model="form.region" placeholder="请选择活动地点">
        <el-option label="上海" value="shanghai" />
        <el-option label="北京" value="beijing" />
    </el-select>
    </el-form-item>
    <el-form-item label="活动时间" prop="date1">
    <el-col :span="11">
        <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%" />
    </el-col>
    <el-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
    </el-col>
    <el-col :span="11">
        <el-time-picker v-model="form.date2" placeholder="选择时间" style="width: 100%" />
    </el-col>
    </el-form-item>
    <el-form-item label="即时配送" prop="delivery">
    <el-switch v-model="form.delivery" />
    </el-form-item>
    <el-form-item label="活动性质" prop="type">
    <el-checkbox-group v-model="form.type">
        <el-checkbox label="线上活动" name="type" />
        <el-checkbox label="促销活动" name="type" />
        <el-checkbox label="线下活动" name="type" />
        <el-checkbox label="品牌曝光" name="type" />
    </el-checkbox-group>
    </el-form-item>
    <el-form-item label="来源" prop="resource">
    <el-radio-group v-model="form.resource">
        <el-radio label="赞助商" />
        <el-radio label="场地方" />
    </el-radio-group>
    </el-form-item>
    <el-form-item label="备注" prop="desc">
    <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="submitForm">提交</el-button>
    <el-button @click="resetForm">重置</el-button>
    </el-form-item>
</el-form>

// script
import { reactive, ref } from 'vue'

const ruleFormRef = ref(null)
// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})


const rules = {
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' }
  ],
  region: [
    { required: true, message: '请输入地区', trigger: 'blur' }
  ],
  date2: [
    { required: true, message: '请选择日期2', trigger: 'change' }
  ],
  resource: [
    { required: true, message: '请选择来源', trigger: 'change' }
  ],

  desc: [
    { required: true, message: '请输入描述', trigger: 'blur' }
  ]
}

const submitForm = () => {
  // 验证表单
  ruleFormRef.value.validate((valid) => {
    if (valid) {
      // 表单验证通过，提交表单
      // 在这里编写代码
    } else {
      // 表单验证不通过，显示错误消息
      return false
    }
  })
}

const resetForm = () => {
  ruleFormRef.value.resetFields()
}
`,he={__name:"form",setup(n){const c=U(null),t=B({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),h={name:[{required:!0,message:"请输入姓名",trigger:"blur"}],region:[{required:!0,message:"请输入地区",trigger:"blur"}],date2:[{required:!0,message:"请选择日期2",trigger:"change"}],resource:[{required:!0,message:"请选择来源",trigger:"change"}],desc:[{required:!0,message:"请输入描述",trigger:"blur"}]},v=()=>{c.value.validate(p=>{if(!p)return!1})},y=()=>{c.value.resetFields()};return(p,r)=>{const V=P,_=A,d=D,f=G,k=H,x=J,u=K,F=L,E=Q,m=W,w=X,b=Y,R=Z,g=$,q=O,C=S("highlightjs");return j(),N("div",le,[oe,o("div",te,[o("div",re,[o("div",ae,[o("div",se,[e(V,{color:"#3D4B6C",size:"20"},{default:l(()=>[e(M(ee))]),_:1}),de])]),o("div",ne,[e(q,{ref_key:"ruleFormRef",ref:c,model:t,rules:h,"label-width":"120px"},{default:l(()=>[e(d,{label:"活动名称",prop:"name"},{default:l(()=>[e(_,{modelValue:t.name,"onUpdate:modelValue":r[0]||(r[0]=a=>t.name=a),placeholder:"请输入活动名称"},null,8,["modelValue"])]),_:1}),e(d,{label:"活动地点",prop:"region"},{default:l(()=>[e(k,{modelValue:t.region,"onUpdate:modelValue":r[1]||(r[1]=a=>t.region=a),placeholder:"请选择活动地点"},{default:l(()=>[e(f,{label:"上海",value:"shanghai"}),e(f,{label:"北京",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"活动时间",prop:"date1"},{default:l(()=>[e(u,{span:11},{default:l(()=>[e(x,{modelValue:t.date1,"onUpdate:modelValue":r[2]||(r[2]=a=>t.date1=a),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(u,{span:2,class:"text-center"},{default:l(()=>[me]),_:1}),e(u,{span:11},{default:l(()=>[e(F,{modelValue:t.date2,"onUpdate:modelValue":r[3]||(r[3]=a=>t.date2=a),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{label:"即时配送",prop:"delivery"},{default:l(()=>[e(E,{modelValue:t.delivery,"onUpdate:modelValue":r[4]||(r[4]=a=>t.delivery=a)},null,8,["modelValue"])]),_:1}),e(d,{label:"活动性质",prop:"type"},{default:l(()=>[e(w,{modelValue:t.type,"onUpdate:modelValue":r[5]||(r[5]=a=>t.type=a)},{default:l(()=>[e(m,{label:"线上活动",name:"type"}),e(m,{label:"促销活动",name:"type"}),e(m,{label:"线下活动",name:"type"}),e(m,{label:"品牌曝光",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"来源",prop:"resource"},{default:l(()=>[e(R,{modelValue:t.resource,"onUpdate:modelValue":r[6]||(r[6]=a=>t.resource=a)},{default:l(()=>[e(b,{label:"赞助商"}),e(b,{label:"场地方"})]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"备注",prop:"desc"},{default:l(()=>[e(_,{modelValue:t.desc,"onUpdate:modelValue":r[7]||(r[7]=a=>t.desc=a),type:"textarea"},null,8,["modelValue"])]),_:1}),e(d,null,{default:l(()=>[e(g,{type:"primary",onClick:v},{default:l(()=>[i("提交")]),_:1}),e(g,{onClick:y},{default:l(()=>[i("重置")]),_:1})]),_:1})]),_:1},8,["model"]),o("div",ie,[ce,ue,pe,_e,fe,be,e(C,{code:ge})])])])])])}}},Ee=I(he,[["__scopeId","data-v-6f2d3281"]]);export{Ee as default};
