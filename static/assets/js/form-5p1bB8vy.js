import{_ as S,I as C,j as A,o as I,f as P,h as n,a as e,w as l,l as U,J as O,u as B,t as c,p as R,g as j,E as z,K as N,L as Z,M as F,N as T,b as D,O as G,P as J,Q as M,R as H,S as K,T as L,A as Q,C as q}from"./index-RCsPaKY5.js";/* empty css               *//* empty css                  *//* empty css            */const r=s=>(R("data-v-ef61cb5b"),s=s(),j(),s),W={class:"formPage"},X=r(()=>n("div",{class:"head"},[n("div",{class:"title"},[c(" 表单 "),n("span",null,"FORM")])],-1)),Y={class:"body"},$={class:"card"},ee={class:"cardHead"},le={class:"title"},oe=r(()=>n("span",null,"基础表单",-1)),te={class:"cardBody"},ae=r(()=>n("span",{class:"text-gray-500"},"-",-1)),ne=`<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="Activity name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-select v-model="form.region" placeholder="please select your zone">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="Activity time">
      <el-col :span="11">
        <el-date-picker
          v-model="form.date1"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-col>
      <el-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-time-picker
          v-model="form.date2"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item label="Instant delivery">
      <el-switch v-model="form.delivery" />
    </el-form-item>
    <el-form-item label="Activity type">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="Online activities" name="type" />
        <el-checkbox label="Promotion activities" name="type" />
        <el-checkbox label="Offline activities" name="type" />
        <el-checkbox label="Simple brand exposure" name="type" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="Resources">
      <el-radio-group v-model="form.resource">
        <el-radio label="Sponsor" />
        <el-radio label="Venue" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Activity form">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

// script
import { reactive } from 'vue'

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

const onSubmit = () => {
  console.log('submit!')
}

`,ie={__name:"form",setup(s){const o=C({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),b=()=>{console.log("submit!")};return(se,t)=>{const v=U,p=z,i=N,u=Z,y=F,h=T,d=D,V=G,g=J,m=M,x=H,_=K,k=L,f=Q,E=O,w=A("highlightjs");return I(),P("div",W,[X,n("div",Y,[n("div",$,[n("div",ee,[n("div",le,[e(v,{color:"#3D4B6C",size:"20"},{default:l(()=>[e(B(q))]),_:1}),oe])]),n("div",te,[e(E,{model:o,"label-width":"120px"},{default:l(()=>[e(i,{label:"Activity name"},{default:l(()=>[e(p,{modelValue:o.name,"onUpdate:modelValue":t[0]||(t[0]=a=>o.name=a)},null,8,["modelValue"])]),_:1}),e(i,{label:"Activity zone"},{default:l(()=>[e(y,{modelValue:o.region,"onUpdate:modelValue":t[1]||(t[1]=a=>o.region=a),placeholder:"please select your zone"},{default:l(()=>[e(u,{label:"Zone one",value:"shanghai"}),e(u,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"Activity time"},{default:l(()=>[e(d,{span:11},{default:l(()=>[e(h,{modelValue:o.date1,"onUpdate:modelValue":t[2]||(t[2]=a=>o.date1=a),type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(d,{span:2,class:"text-center"},{default:l(()=>[ae]),_:1}),e(d,{span:11},{default:l(()=>[e(V,{modelValue:o.date2,"onUpdate:modelValue":t[3]||(t[3]=a=>o.date2=a),placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(i,{label:"Instant delivery"},{default:l(()=>[e(g,{modelValue:o.delivery,"onUpdate:modelValue":t[4]||(t[4]=a=>o.delivery=a)},null,8,["modelValue"])]),_:1}),e(i,{label:"Activity type"},{default:l(()=>[e(x,{modelValue:o.type,"onUpdate:modelValue":t[5]||(t[5]=a=>o.type=a)},{default:l(()=>[e(m,{label:"Online activities",name:"type"}),e(m,{label:"Promotion activities",name:"type"}),e(m,{label:"Offline activities",name:"type"}),e(m,{label:"Simple brand exposure",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"Resources"},{default:l(()=>[e(k,{modelValue:o.resource,"onUpdate:modelValue":t[6]||(t[6]=a=>o.resource=a)},{default:l(()=>[e(_,{label:"Sponsor"}),e(_,{label:"Venue"})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"Activity form"},{default:l(()=>[e(p,{modelValue:o.desc,"onUpdate:modelValue":t[7]||(t[7]=a=>o.desc=a),type:"textarea"},null,8,["modelValue"])]),_:1}),e(i,null,{default:l(()=>[e(f,{type:"primary",onClick:b},{default:l(()=>[c("Create")]),_:1}),e(f,null,{default:l(()=>[c("Cancel")]),_:1})]),_:1})]),_:1},8,["model"]),e(w,{language:"JavaScript",code:ne})])])])])}}},pe=S(ie,[["__scopeId","data-v-ef61cb5b"]]);export{pe as default};
