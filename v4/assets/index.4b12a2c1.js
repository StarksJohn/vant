var F=Object.defineProperty;var d=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var f=(u,l,e)=>l in u?F(u,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[l]=e,g=(u,l)=>{for(var e in l||(l={}))P.call(l,e)&&f(u,e,l[e]);if(d)for(var e of d(l))D.call(l,e)&&f(u,e,l[e]);return u};import{C as a}from"./index.172b9149.js";import{I as w}from"./function-call.2ce20ae8.js";import{a as I}from"./use-translate.94d81043.js";import{T as B}from"./function-call.0fe04b1d.js";import{A as $,x as E,r as S,o as T,a as y,e as n,w as m,C as o,h as z,t as j,F as A}from"./vue-libs.84c45047.js";import"./with-install.dd5596ee.js";import"./use-route.7c55373a.js";import"./index.9326a531.js";import"./mount-component.725b707e.js";import"./use-expose.771ababc.js";import"./constant.80c6de18.js";import"./interceptor.e76ee8d4.js";import"./index.d1d9d18e.js";import"./use-touch.109c1035.js";import"./on-popup-reopen.e7b96e14.js";import"./index.a8744559.js";import"./use-lazy-render.20e241a7.js";import"./index.9c372815.js";import"./index.8bf0cd8a.js";import"./index.a750e74d.js";const le=$({setup(u){const l=w.Component,e=I({"zh-CN":{closed:"\u5173\u95ED",showClose:"\u5C55\u793A\u5173\u95ED\u6309\u94AE",showImages:"\u9884\u89C8\u56FE\u7247",beforeClose:"\u5F02\u6B65\u5173\u95ED",closeEvent:"\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6",customConfig:"\u4F20\u5165\u914D\u7F6E\u9879",startPosition:"\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E",componentCall:"\u7EC4\u4EF6\u8C03\u7528",index:s=>`\u7B2C${s+1}\u9875`},"en-US":{closed:"closed",showClose:"Show Close Icon",showImages:"Show Images",beforeClose:"Before Close",closeEvent:"Close Event",customConfig:"Custom Config",startPosition:"Set Start Position",componentCall:"Component Call",index:s=>`Page: ${s}`}}),c=["https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-2.jpg","https://img.yzcdn.cn/vant/apple-3.jpg","https://img.yzcdn.cn/vant/apple-4.jpg"],C=E(!1),v=E(0),k=()=>B(e("closed")),h=()=>new Promise(s=>{setTimeout(()=>{s(!0)},1e3)}),b=()=>{C.value=!0},x=s=>{v.value=s},r=(s={})=>{const t=w(g({images:c},s));s.beforeClose&&setTimeout(()=>{t==null||t.close()},2e3)};return(s,t)=>{const p=S("demo-block");return T(),y(A,null,[n(p,{card:"",title:o(e)("basicUsage")},{default:m(()=>[n(o(a),{"is-link":"",value:o(e)("showImages"),onClick:t[0]||(t[0]=i=>r())},null,8,["value"])]),_:1},8,["title"]),n(p,{card:"",title:o(e)("customConfig")},{default:m(()=>[n(o(a),{"is-link":"",value:o(e)("startPosition"),onClick:t[1]||(t[1]=i=>r({startPosition:1}))},null,8,["value"]),n(o(a),{"is-link":"",value:o(e)("showClose"),onClick:t[2]||(t[2]=i=>r({closeable:!0}))},null,8,["value"]),n(o(a),{"is-link":"",value:o(e)("closeEvent"),onClick:t[3]||(t[3]=i=>r({onClose:k}))},null,8,["value"])]),_:1},8,["title"]),n(p,{card:"",title:o(e)("beforeClose")},{default:m(()=>[n(o(a),{"is-link":"",value:o(e)("beforeClose"),onClick:t[4]||(t[4]=i=>r({beforeClose:h}))},null,8,["value"])]),_:1},8,["title"]),n(p,{card:"",title:o(e)("componentCall")},{default:m(()=>[n(o(a),{"is-link":"",value:o(e)("componentCall"),onClick:b},null,8,["value"]),n(o(l),{show:C.value,"onUpdate:show":t[5]||(t[5]=i=>C.value=i),images:c,onChange:x},{index:m(()=>[z(j(o(e)("index",v.value)),1)]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{le as default};