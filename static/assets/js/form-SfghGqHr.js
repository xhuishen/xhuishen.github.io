import{_ as B,r as h,I as j,j as N,o as P,f as O,h as o,a as e,w as l,l as D,J as M,u as T,t as n,x as z,p as A,g as G,E as H,K as J,L as K,M as L,N as Q,b as W,O as X,P as Y,Q as Z,R as $,S as ee,T as le,A as oe,C as ae}from"./index-whlCmOrC.js";/* empty css               *//* empty css                 *//* empty css                  *//* empty css            *//* empty css               */const d=m=>(A("data-v-a1784db6"),m=m(),G(),m),te={class:"formPage"},se=d(()=>o("div",{class:"head"},[o("div",{class:"title"},[n(" 表单 "),o("span",null,"FORM")])],-1)),re={class:"body"},de={class:"card"},ie={class:"cardHead"},ne={class:"title"},me=d(()=>o("span",null,"基础表单",-1)),ue={class:"cardBody"},ce=d(()=>o("span",{class:"text-gray-500"},"-",-1)),pe={class:"readme"},be=d(()=>o("p",null,"注意 请使用自带表单验证及重置功能(为了保持样式统一)",-1)),_e=d(()=>o("p",{class:"code"},"ruleFormRef.value.validate((valid) => { })",-1)),fe=d(()=>o("p",{class:"code"},"ruleFormRef.value.resetFields()",-1)),ge=d(()=>o("p",null,"除非个别字段需要重新处理 否者不要使用直接赋值来重置",-1)),ve=d(()=>o("p",{class:"code"},"bad: form.value = { aa:'', bb:'' }",-1)),he=d(()=>o("p",null,[n("API详见"),o("a",{href:"https://element-plus.org/zh-CN/component/form.html"},"FORM表单")],-1)),ye=`
<el-form ref="ruleFormRef" :model="form" :rules="rules" label-width="120px">
    <el-form-item label="活动名称" prop="name">
        <el-input v-model="form.name" :disabled="disable" placeholder="请输入活动名称" />
    </el-form-item>
    <el-form-item label="活动地点" prop="region">
        <el-select v-model="form.region" :disabled="disable" placeholder="请选择活动地点">
            <el-option label="上海" value="shanghai" />
            <el-option label="北京" value="beijing" />
        </el-select>
    </el-form-item>
    <el-form-item label="活动时间" prop="date1">
        <el-col :span="11">
            <el-date-picker :disabled="disable" v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%" />
        </el-col>
        <el-col :span="2" class="text-center">
            <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="11">
            <el-time-picker :disabled="disable" v-model="form.date2" placeholder="选择时间" style="width: 100%" />
        </el-col>
    </el-form-item>
    <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="form.delivery" :disabled="disable" />
    </el-form-item>
    <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="form.type" :disabled="disable">
            <el-checkbox label="线上活动" name="type" />
            <el-checkbox label="促销活动" name="type" />
            <el-checkbox label="线下活动" name="type" />
            <el-checkbox label="品牌曝光" name="type" />
        </el-checkbox-group>
    </el-form-item>
    <el-form-item label="来源" prop="resource">
        <el-radio-group v-model="form.resource" :disabled="disable">
            <el-radio label="赞助商" />
            <el-radio label="场地方" />
        </el-radio-group>
    </el-form-item>
    <el-form-item label="备注" prop="desc">
        <el-input v-model="form.desc" type="textarea" :disabled="disable" />
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
        <el-button @click="disableForm">{{ disable ? '启用' : ' 禁用'}}</el-button>
    </el-form-item>
</el-form>

// script
import { reactive, ref } from 'vue'
const disable = ref(false)
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

const disableForm = () => {
  disable.value = !disable.value
}
`,Ve={__name:"form",setup(m){const c=h(null),r=h(!1),a=j({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),y={name:[{required:!0,message:"请输入姓名",trigger:"blur"}],region:[{required:!0,message:"请输入地区",trigger:"blur"}],date2:[{required:!0,message:"请选择日期2",trigger:"change"}],resource:[{required:!0,message:"请选择来源",trigger:"change"}],desc:[{required:!0,message:"请输入描述",trigger:"blur"}]},V=()=>{c.value.validate(_=>{if(!_)return!1})},k=()=>{c.value.resetFields()},x=()=>{r.value=!r.value};return(_,t)=>{const F=D,f=H,i=J,g=K,E=L,w=Q,p=W,R=X,C=Y,u=Z,q=$,v=ee,I=le,b=oe,U=M,S=N("highlightjs");return P(),O("div",te,[se,o("div",re,[o("div",de,[o("div",ie,[o("div",ne,[e(F,{color:"#3D4B6C",size:"20"},{default:l(()=>[e(T(ae))]),_:1}),me])]),o("div",ue,[e(U,{ref_key:"ruleFormRef",ref:c,model:a,rules:y,"label-width":"120px"},{default:l(()=>[e(i,{label:"活动名称",prop:"name"},{default:l(()=>[e(f,{modelValue:a.name,"onUpdate:modelValue":t[0]||(t[0]=s=>a.name=s),disabled:r.value,placeholder:"请输入活动名称"},null,8,["modelValue","disabled"])]),_:1}),e(i,{label:"活动地点",prop:"region"},{default:l(()=>[e(E,{modelValue:a.region,"onUpdate:modelValue":t[1]||(t[1]=s=>a.region=s),disabled:r.value,placeholder:"请选择活动地点"},{default:l(()=>[e(g,{label:"上海",value:"shanghai"}),e(g,{label:"北京",value:"beijing"})]),_:1},8,["modelValue","disabled"])]),_:1}),e(i,{label:"活动时间",prop:"date1"},{default:l(()=>[e(p,{span:11},{default:l(()=>[e(w,{disabled:r.value,modelValue:a.date1,"onUpdate:modelValue":t[2]||(t[2]=s=>a.date1=s),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["disabled","modelValue"])]),_:1}),e(p,{span:2,class:"text-center"},{default:l(()=>[ce]),_:1}),e(p,{span:11},{default:l(()=>[e(R,{disabled:r.value,modelValue:a.date2,"onUpdate:modelValue":t[3]||(t[3]=s=>a.date2=s),placeholder:"选择时间",style:{width:"100%"}},null,8,["disabled","modelValue"])]),_:1})]),_:1}),e(i,{label:"即时配送",prop:"delivery"},{default:l(()=>[e(C,{modelValue:a.delivery,"onUpdate:modelValue":t[4]||(t[4]=s=>a.delivery=s),disabled:r.value},null,8,["modelValue","disabled"])]),_:1}),e(i,{label:"活动性质",prop:"type"},{default:l(()=>[e(q,{modelValue:a.type,"onUpdate:modelValue":t[5]||(t[5]=s=>a.type=s),disabled:r.value},{default:l(()=>[e(u,{label:"线上活动",name:"type"}),e(u,{label:"促销活动",name:"type"}),e(u,{label:"线下活动",name:"type"}),e(u,{label:"品牌曝光",name:"type"})]),_:1},8,["modelValue","disabled"])]),_:1}),e(i,{label:"来源",prop:"resource"},{default:l(()=>[e(I,{modelValue:a.resource,"onUpdate:modelValue":t[6]||(t[6]=s=>a.resource=s),disabled:r.value},{default:l(()=>[e(v,{label:"赞助商"}),e(v,{label:"场地方"})]),_:1},8,["modelValue","disabled"])]),_:1}),e(i,{label:"备注",prop:"desc"},{default:l(()=>[e(f,{modelValue:a.desc,"onUpdate:modelValue":t[7]||(t[7]=s=>a.desc=s),type:"textarea",disabled:r.value},null,8,["modelValue","disabled"])]),_:1}),e(i,null,{default:l(()=>[e(b,{type:"primary",onClick:V},{default:l(()=>[n("提交")]),_:1}),e(b,{onClick:k},{default:l(()=>[n("重置")]),_:1}),e(b,{onClick:x},{default:l(()=>[n(z(r.value?"启用":" 禁用"),1)]),_:1})]),_:1})]),_:1},8,["model"]),o("div",pe,[be,_e,fe,ge,ve,he,e(S,{code:ye})])])])])])}}},Ce=B(Ve,[["__scopeId","data-v-a1784db6"]]);export{Ce as default};
