import{_ as S,z as y,A as N,v as P,o as j,c as D,a as r,b as e,w as a,E as z,B as G,u as O,q as p,t as A,p as H,g as M,C as T,D as J,G as K,H as L,I as Q,J as W,K as X,L as Y,M as Z,N as $,O as ee,P as le,y as ae,s as oe}from"./index-W-7JKmBS.js";/* empty css                 *//* empty css            *//* empty css               */const i=n=>(H("data-v-ad80352a"),n=n(),M(),n),te={class:"formPage"},re={class:"body"},de={class:"card"},se={class:"cardHead"},ie={class:"title"},ne=i(()=>r("span",null,"基础表单",-1)),me={class:"cardBody"},ue=i(()=>r("span",{class:"text-gray-500"},"-",-1)),ce={class:"readme"},pe=i(()=>r("p",null," 注意 请使用自带表单验证及重置功能(为了保持样式统一) ",-1)),be=i(()=>r("p",{class:"code"}," ruleFormRef.value.validate((valid) => { }) ",-1)),_e=i(()=>r("p",{class:"code"},"ruleFormRef.value.resetFields()",-1)),fe=i(()=>r("p",null," 除非个别字段需要重新处理 否者不要使用直接赋值来重置 ",-1)),ge=i(()=>r("p",{class:"code"},"bad: form.value = { aa:'', bb:'' }",-1)),ve=i(()=>r("p",null,[p(" API详见 "),r("a",{href:"https://element-plus.org/zh-CN/component/form.html"}," FORM表单 ")],-1)),he=`
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
    <el-form-item label="开始结束日期" prop="daterange">
        <el-date-picker :disabled="disable" v-model="form.daterange" type="daterange" range-separator="-" start-placeholder="开始时间" end-placeholder="结束时间" />
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
  daterange: []
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
`,ye={__name:"form",setup(n){const u=y(null),d=y(!1),l=N({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:"",daterange:[]}),V={name:[{required:!0,message:"请输入姓名",trigger:"blur"}],region:[{required:!0,message:"请输入地区",trigger:"blur"}],date2:[{required:!0,message:"请选择日期2",trigger:"change"}],resource:[{required:!0,message:"请选择来源",trigger:"change"}],desc:[{required:!0,message:"请输入描述",trigger:"blur"}]},k=()=>{u.value.validate(b=>{if(!b)return!1})},x=()=>{u.value.resetFields()},F=()=>{d.value=!d.value};return(b,o)=>{const E=z,_=T,s=J,f=K,w=L,g=Q,c=W,q=X,C=Y,m=Z,R=$,v=ee,I=le,h=ae,U=G,B=P("highlightjs");return j(),D("div",te,[r("div",re,[r("div",de,[r("div",se,[r("div",ie,[e(E,{color:"#3D4B6C",size:"20"},{default:a(()=>[e(O(oe))]),_:1}),ne])]),r("div",me,[e(U,{ref_key:"ruleFormRef",ref:u,model:l,rules:V,"label-width":"120px"},{default:a(()=>[e(s,{label:"活动名称",prop:"name"},{default:a(()=>[e(_,{modelValue:l.name,"onUpdate:modelValue":o[0]||(o[0]=t=>l.name=t),disabled:d.value,placeholder:"请输入活动名称"},null,8,["modelValue","disabled"])]),_:1}),e(s,{label:"活动地点",prop:"region"},{default:a(()=>[e(w,{modelValue:l.region,"onUpdate:modelValue":o[1]||(o[1]=t=>l.region=t),disabled:d.value,placeholder:"请选择活动地点"},{default:a(()=>[e(f,{label:"上海",value:"shanghai"}),e(f,{label:"北京",value:"beijing"})]),_:1},8,["modelValue","disabled"])]),_:1}),e(s,{label:"活动时间",prop:"date1"},{default:a(()=>[e(c,{span:11},{default:a(()=>[e(g,{disabled:d.value,modelValue:l.date1,"onUpdate:modelValue":o[2]||(o[2]=t=>l.date1=t),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["disabled","modelValue"])]),_:1}),e(c,{span:2,class:"text-center"},{default:a(()=>[ue]),_:1}),e(c,{span:11},{default:a(()=>[e(q,{disabled:d.value,modelValue:l.date2,"onUpdate:modelValue":o[3]||(o[3]=t=>l.date2=t),placeholder:"选择时间",style:{width:"100%"}},null,8,["disabled","modelValue"])]),_:1})]),_:1}),e(s,{label:"开始结束日期",prop:"daterange"},{default:a(()=>[e(g,{disabled:d.value,modelValue:l.daterange,"onUpdate:modelValue":o[4]||(o[4]=t=>l.daterange=t),type:"daterange","range-separator":"-","start-placeholder":"开始时间","end-placeholder":"结束时间"},null,8,["disabled","modelValue"])]),_:1}),e(s,{label:"即时配送",prop:"delivery"},{default:a(()=>[e(C,{modelValue:l.delivery,"onUpdate:modelValue":o[5]||(o[5]=t=>l.delivery=t),disabled:d.value},null,8,["modelValue","disabled"])]),_:1}),e(s,{label:"活动性质",prop:"type"},{default:a(()=>[e(R,{modelValue:l.type,"onUpdate:modelValue":o[6]||(o[6]=t=>l.type=t),disabled:d.value},{default:a(()=>[e(m,{label:"线上活动",name:"type"}),e(m,{label:"促销活动",name:"type"}),e(m,{label:"线下活动",name:"type"}),e(m,{label:"品牌曝光",name:"type"})]),_:1},8,["modelValue","disabled"])]),_:1}),e(s,{label:"来源",prop:"resource"},{default:a(()=>[e(I,{modelValue:l.resource,"onUpdate:modelValue":o[7]||(o[7]=t=>l.resource=t),disabled:d.value},{default:a(()=>[e(v,{label:"赞助商"}),e(v,{label:"场地方"})]),_:1},8,["modelValue","disabled"])]),_:1}),e(s,{label:"备注",prop:"desc"},{default:a(()=>[e(_,{modelValue:l.desc,"onUpdate:modelValue":o[8]||(o[8]=t=>l.desc=t),type:"textarea",disabled:d.value},null,8,["modelValue","disabled"])]),_:1}),e(s,null,{default:a(()=>[r("button",{type:"primary",onClick:k}," 提交 "),e(h,{onClick:x},{default:a(()=>[p("重置")]),_:1}),e(h,{onClick:F},{default:a(()=>[p(A(d.value?"启用":" 禁用"),1)]),_:1})]),_:1})]),_:1},8,["model"]),r("div",ce,[pe,be,_e,fe,ge,ve,e(B,{code:he})])])])])])}}},Ee=S(ye,[["__scopeId","data-v-ad80352a"]]);export{Ee as default};
