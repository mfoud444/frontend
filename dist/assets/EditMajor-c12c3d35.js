import{d as U,aJ as $,b as D,r as n,t as i,A as F,ar as S,k as z,ah as A,C as u,m as d,q as b,p as e,y as l,aA as I,L as V,M as E,O as G,aB as K,H as L,P,aC as H,ag as J}from"./index-5537ce55.js";import{a as O}from"./FormItem-bdaeca39.js";import{N as T,b as v}from"./Grid-5e83dd37.js";const Q={class:"myglass flex flex-col gap-2 rounded-lg"},W={class:"post-heading mb-1"},X={class:"gtext text-2xl font-bold underlined"},Y={style:{display:"flex","justify-content":"flex-end"}},oe=U({__name:"EditMajor",props:{visible:{type:Boolean},row:{}},emits:["update:visible"],setup(h,{emit:j}){const y=$(),t=h,x=j,m=D(),M=n(null),p=n(!1),f=n({name:t.row.name,state:!!t.row.state,image:t.row.image_url,updated_at:t.row.updated_at}),a=n({name:t.row.name,state:!!t.row.state,image:t.row.image_url,updated_at:t.row.updated_at}),N={name:[{required:!0,message:i("major.nameRequired"),trigger:["input","blur"]}],image:[{required:!0,message:i("major.imageRequired"),trigger:["input","blur"]}]};async function B(){try{p.value=!0;const o=await y.updateMajorAction({id:t.row.id||"",updates:a.value});p.value=!1,g.value=!1,m.success("Done updated"),console.log("updated Major:",o)}catch(o){p.value=!1,console.error("Error updating major:",o.message),m.error("Failed to update major")}}const k=async({file:o,onFinish:s,onError:r,onProgress:ee})=>{try{const c="Major",C="research",{data:w,error:_}=await J.storage.from(C).upload(`${c}/${o.name}`,o.file,{cacheControl:"3600",upsert:!1});if(_)throw _;w&&(a.value.image_url=w.path,m.success("Done"),s())}catch(c){console.error(c),m.error(c.message),r()}},g=F({get(){return t.visible},set(o){x("update:visible",o)}}),R=n([{id:"react",name:a.value.image_url||"",status:"finished",url:`${S}/${bucket}/${a.value.image_url}`}]);function q(){return!a.value.name||!a.value.image_url||a.value.name===f.value.name&&a.value.state===f.value.state&&a.value.image_url===f.value.image_url}return(o,s)=>(z(),A(e(H),{show:g.value,"onUpdate:show":s[3]||(s[3]=r=>g.value=r),"mask-closable":!1,"auto-focus":!1,preset:"card",style:{width:"95%","max-width":"640px"}},{default:u(()=>[d("div",Q,[d("div",W,[d("div",X,b(e(i)("major.editMajor")),1)]),l(e(O),{ref_key:"formRef",ref:M,model:e(a),rules:N,size:"large"},{default:u(()=>[d("div",null,[l(e(T),{cols:4,span:24,"x-gap":24},{default:u(()=>[l(e(v),{span:12,path:"image",label:e(i)("major.image")},{default:u(()=>[l(e(I),{accept:"image/*","list-type":"image-card",min:1,max:1,path:"image","default-file-list":R.value,"custom-request":k},null,8,["default-file-list"])]),_:1},8,["label"]),l(e(v),{span:12,path:"name",label:e(i)("major.majorName")},{default:u(()=>[l(e(V),{value:e(a).name,"onUpdate:value":s[0]||(s[0]=r=>e(a).name=r),placeholder:"Major Name",clearable:"",onKeydown:s[1]||(s[1]=E(G(()=>{},["prevent"]),["enter"]))},null,8,["value"])]),_:1},8,["label"]),l(e(v),{span:12,path:"state",label:e(i)("major.state")},{default:u(()=>[l(e(K),{value:e(a).state,"onUpdate:value":s[2]||(s[2]=r=>e(a).state=r),size:"large"},null,8,["value"])]),_:1},8,["label"])]),_:1})]),d("div",Y,[l(e(L),{type:"primary",style:{width:"100%"},size:"large",loading:p.value,disabled:q(),onClick:B},{default:u(()=>[P(b(e(i)("major.editMajor")),1)]),_:1},8,["loading","disabled"])])]),_:1},8,["model"])])]),_:1},8,["show"]))}});export{oe as default};
