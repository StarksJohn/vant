import{b as c,V as _}from"./index.6ad72fe4.js";import{V as f}from"./index.b70299fd.js";import{c as n}from"./index.e41a59ee.js";import{s as v}from"./index.650d8a76.js";import{a as T}from"./use-translate.c56bc05e.js";import{A as x,x as V,D as B,N as y,o as R,c as C,w as o,e as a,C as e,d as r,t as g,g as w}from"./vue-libs.a3cd7f61.js";import"./with-install.2d06a5b3.js";import"./use-id.5b8801cd.js";import"./use-expose.2dad0d8e.js";import"./use-route.7a9317f3.js";import"./index.3ccbda83.js";import"./use-touch.196fce0c.js";import"./on-popup-reopen.a53db14c.js";import"./constant.80c6de18.js";import"./interceptor.7caa5e9a.js";import"./use-refs.a0fe18f0.js";import"./index.0d3f38fa.js";import"./index.e7e14384.js";import"./index.1fe53b6c.js";import"./index.fd46e6ae.js";import"./use-lazy-render.4c81c593.js";import"./index.a0b9e7c8.js";import"./mount-component.2ea251e1.js";const D=["src"],U=["src"],$=["src"],ee=x({__name:"index",setup(h){const u=T({"zh-CN":{try:"\u4E0B\u62C9\u8BD5\u8BD5",text:"\u5237\u65B0\u6B21\u6570",success:"\u5237\u65B0\u6210\u529F",successTip:"\u6210\u529F\u63D0\u793A",customTips:"\u81EA\u5B9A\u4E49\u63D0\u793A"},"en-US":{try:"Try it down",text:"Refresh Count",success:"Refresh success",successTip:"Success Tip",customTips:"Custom Tips"}}),m=V(0),l=V(!1),p=B(()=>m.value?`${u("text")}: ${m.value}`:u("try")),d=i=>{setTimeout(()=>{i&&v(u("success")),l.value=!1,m.value++},1e3)};return y(()=>{const i=new Image,s=new Image;i.src=n("doge.png"),s.src=n("doge-fire.jpeg")}),(i,s)=>(R(),C(e(_),null,{default:o(()=>[a(e(c),{title:e(u)("basicUsage")},{default:o(()=>[a(e(f),{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=t=>l.value=t),onRefresh:s[1]||(s[1]=t=>d(!0))},{default:o(()=>[r("p",null,g(e(p)),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),a(e(c),{title:e(u)("successTip")},{default:o(()=>[a(e(f),{modelValue:l.value,"onUpdate:modelValue":s[2]||(s[2]=t=>l.value=t),"success-text":e(u)("success"),onRefresh:s[3]||(s[3]=t=>d(!1))},{default:o(()=>[r("p",null,g(e(p)),1)]),_:1},8,["modelValue","success-text"])]),_:1},8,["title"]),a(e(c),{title:e(u)("customTips")},{default:o(()=>[a(e(f),{modelValue:l.value,"onUpdate:modelValue":s[4]||(s[4]=t=>l.value=t),"head-height":"80",onRefresh:s[5]||(s[5]=t=>d(!0))},{pulling:o(({distance:t})=>[r("img",{class:"doge",src:e(n)("doge.png"),style:w({transform:`scale(${t/80})`})},null,12,D)]),loosing:o(()=>[r("img",{src:e(n)("doge.png"),class:"doge"},null,8,U)]),loading:o(()=>[r("img",{src:e(n)("doge-fire.jpeg"),class:"doge"},null,8,$)]),default:o(()=>[r("p",null,g(e(p)),1)]),_:1},8,["modelValue"])]),_:1},8,["title"])]),_:1}))}});export{ee as default};
