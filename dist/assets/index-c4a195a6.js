import{d as p,e as _,h as m,r as g,k as h,l as x,m as t,y as r,p as e,q as n,I as b,t as o}from"./index-5537ce55.js";import{_ as v}from"./PolicyCollection.vue_vue_type_script_setup_true_lang-7c9b556f.js";const y={class:"grid grid-cols-1 md:grid-cols-2 h-full dark:text-white"},w={class:"bg-red-200 hidden md:flex md:flex-col md:gap-4 md:justify-center md:items-center"},k={class:"font-bold gtext text-5xl"},B={class:"bg-blue-100 dark:bg-violet-950 flex items-center justify-center"},j={class:"grid grid-rows-3 h-full place-content-between"},C={class:"row-span-2 flex flex-col gap-12 h-full justify-end pb-8"},S={class:"font-bold gtext text-5xl text-center py-4"},N={class:"flex flex-wrap gap-4 justify-center"},R={class:"place-self-center"},z=p({__name:"index",setup(V){const c=_();async function a(d){f(),await c.push(d),u()}const i=m(),l=g(!0);function f(){i.start(),l.value=!1}function u(){i.finish(),l.value=!0}return(d,s)=>(h(),x("div",y,[t("div",w,[r(e(b),{size:90}),t("div",k,n(e(o)("common.nameApp")),1)]),t("div",B,[t("div",j,[t("div",C,[t("div",S,n(e(o)("app.getStart")),1),t("div",N,[t("button",{class:"btn btn-primary w-48",onClick:s[0]||(s[0]=()=>a("/auth/login"))},n(e(o)("auth.login")),1),t("button",{class:"btn btn-primary w-48",onClick:s[1]||(s[1]=()=>a("/auth/signup"))},n(e(o)("auth.signUp")),1)])]),t("div",R,[r(v)])])])]))}});export{z as default};