import{_ as S,z as h,A as N,s as P,o as j,c as D,a as s,b as e,w as l,E as z,B as G,u as O,v as u,t as A,p as H,h as M,C as T,D as J,G as K,H as L,I as Q,J as W,K as X,L as Y,M as Z,N as $,O as ee,P as le,y as oe,q as ae}from"./index-9cLlaLg5.js";/* empty css                 *//* empty css            *//* empty css               */const i=n=>(H("data-v-97a07f85"),n=n(),M(),n),te={class:"formPage"},se={class:"body"},re={class:"card"},de={class:"cardHead"},ie={class:"title"},ne=i(()=>s("span",null,"基础表单",-1)),me={class:"cardBody"},ue=i(()=>s("span",{class:"text-gray-500"},"-",-1)),ce={class:"readme"},pe=i(()=>s("p",null,"注意 请使用自带表单验证及重置功能(为了保持样式统一)",-1)),be=i(()=>s("p",{class:"code"},"ruleFormRef.value.validate((valid) => { })",-1)),_e=i(()=>s("p",{class:"code"},"ruleFormRef.value.resetFields()",-1)),fe=i(()=>s("p",null,"除非个别字段需要重新处理 否者不要使用直接赋值来重置",-1)),ge=i(()=>s("p",{class:"code"},"bad: form.value = { aa:'', bb:'' }",-1)),ve=i(()=>s("p",null,[u("API详见"),s("a",{href:"https://element-plus.org/zh-CN/component/form.html"},"FORM表单")],-1)),he=`
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
`,ye={__name:"form",setup(n){const c=h(null),r=h(!1),o=N({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),y={name:[{required:!0,message:"请输入姓名",trigger:"blur"}],region:[{required:!0,message:"请输入地区",trigger:"blur"}],date2:[{required:!0,message:"请选择日期2",trigger:"change"}],resource:[{required:!0,message:"请选择来源",trigger:"change"}],desc:[{required:!0,message:"请输入描述",trigger:"blur"}]},V=()=>{c.value.validate(_=>{if(!_)return!1})},k=()=>{c.value.resetFields()},x=()=>{r.value=!r.value};return(_,a)=>{const F=z,f=T,d=J,g=K,E=L,w=Q,p=W,q=X,C=Y,m=Z,R=$,v=ee,I=le,b=oe,U=G,B=P("highlightjs");return j(),D("div",te,[s("div",se,[s("div",re,[s("div",de,[s("div",ie,[e(F,{color:"#3D4B6C",size:"20"},{default:l(()=>[e(O(ae))]),_:1}),ne])]),s("div",me,[e(U,{ref_key:"ruleFormRef",ref:c,model:o,rules:y,"label-width":"120px"},{default:l(()=>[e(d,{label:"活动名称",prop:"name"},{default:l(()=>[e(f,{modelValue:o.name,"onUpdate:modelValue":a[0]||(a[0]=t=>o.name=t),disabled:r.value,placeholder:"请输入活动名称"},null,8,["modelValue","disabled"])]),_:1}),e(d,{label:"活动地点",prop:"region"},{default:l(()=>[e(E,{modelValue:o.region,"onUpdate:modelValue":a[1]||(a[1]=t=>o.region=t),disabled:r.value,placeholder:"请选择活动地点"},{default:l(()=>[e(g,{label:"上海",value:"shanghai"}),e(g,{label:"北京",value:"beijing"})]),_:1},8,["modelValue","disabled"])]),_:1}),e(d,{label:"活动时间",prop:"date1"},{default:l(()=>[e(p,{span:11},{default:l(()=>[e(w,{disabled:r.value,modelValue:o.date1,"onUpdate:modelValue":a[2]||(a[2]=t=>o.date1=t),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["disabled","modelValue"])]),_:1}),e(p,{span:2,class:"text-center"},{default:l(()=>[ue]),_:1}),e(p,{span:11},{default:l(()=>[e(q,{disabled:r.value,modelValue:o.date2,"onUpdate:modelValue":a[3]||(a[3]=t=>o.date2=t),placeholder:"选择时间",style:{width:"100%"}},null,8,["disabled","modelValue"])]),_:1})]),_:1}),e(d,{label:"即时配送",prop:"delivery"},{default:l(()=>[e(C,{modelValue:o.delivery,"onUpdate:modelValue":a[4]||(a[4]=t=>o.delivery=t),disabled:r.value},null,8,["modelValue","disabled"])]),_:1}),e(d,{label:"活动性质",prop:"type"},{default:l(()=>[e(R,{modelValue:o.type,"onUpdate:modelValue":a[5]||(a[5]=t=>o.type=t),disabled:r.value},{default:l(()=>[e(m,{label:"线上活动",name:"type"}),e(m,{label:"促销活动",name:"type"}),e(m,{label:"线下活动",name:"type"}),e(m,{label:"品牌曝光",name:"type"})]),_:1},8,["modelValue","disabled"])]),_:1}),e(d,{label:"来源",prop:"resource"},{default:l(()=>[e(I,{modelValue:o.resource,"onUpdate:modelValue":a[6]||(a[6]=t=>o.resource=t),disabled:r.value},{default:l(()=>[e(v,{label:"赞助商"}),e(v,{label:"场地方"})]),_:1},8,["modelValue","disabled"])]),_:1}),e(d,{label:"备注",prop:"desc"},{default:l(()=>[e(f,{modelValue:o.desc,"onUpdate:modelValue":a[7]||(a[7]=t=>o.desc=t),type:"textarea",disabled:r.value},null,8,["modelValue","disabled"])]),_:1}),e(d,null,{default:l(()=>[e(b,{type:"primary",onClick:V},{default:l(()=>[u("提交")]),_:1}),e(b,{onClick:k},{default:l(()=>[u("重置")]),_:1}),e(b,{onClick:x},{default:l(()=>[u(A(r.value?"启用":" 禁用"),1)]),_:1})]),_:1})]),_:1},8,["model"]),s("div",ce,[pe,be,_e,fe,ge,ve,e(B,{code:he})])])])])])}}},Ee=S(ye,[["__scopeId","data-v-97a07f85"]]);export{Ee as default};
