import{V as p,c as F,W as j,a as v}from"./use-translate.7145ee20.js";import{c as y,m as k,t as w,w as B}from"./with-install.756837d9.js";import{u as H}from"./use-expose.897feea8.js";import{z as x,C as E,x as A,e as a,D as b,r as g,o as N,a as P,w as r,B as t,d as _,t as S,F as W}from"./vue-libs.84e059bd.js";import{G as z,a as D}from"./index.628818b4.js";import{T as G}from"./function-call.3d6aa441.js";import"./constant.80c6de18.js";import"./use-route.841a0e09.js";import"./index.bea91046.js";import"./mount-component.f2698375.js";import"./index.bba74b3b.js";import"./interceptor.fa55923e.js";import"./use-touch.a752672a.js";import"./use-lazy-render.0b8d6da1.js";import"./on-popup-reopen.b9a88023.js";import"./index.bd0de4f7.js";import"./index.8397aee6.js";function V(e,s){const{days:l}=s;let{hours:n,minutes:i,seconds:u,milliseconds:c}=s;if(e.includes("DD")?e=e.replace("DD",p(l)):n+=l*24,e.includes("HH")?e=e.replace("HH",p(n)):i+=n*60,e.includes("mm")?e=e.replace("mm",p(i)):u+=i*60,e.includes("ss")?e=e.replace("ss",p(u)):c+=u*1e3,e.includes("S")){const m=p(c,3);e.includes("SSS")?e=e.replace("SSS",m):e.includes("SS")?e=e.replace("SS",m.slice(0,2)):e=e.replace("S",m.charAt(0))}return e}const[I,M]=F("count-down"),T={time:y(0),format:k("HH:mm:ss"),autoStart:w,millisecond:Boolean};var U=x({name:I,props:T,emits:["change","finish"],setup(e,{emit:s,slots:l}){const{start:n,pause:i,reset:u,current:c}=j({time:+e.time,millisecond:e.millisecond,onChange:C=>s("change",C),onFinish:()=>s("finish")}),m=E(()=>V(e.format,c.value)),o=()=>{u(+e.time),e.autoStart&&n()};return A(()=>e.time,o,{immediate:!0}),H({start:n,pause:i,reset:o}),()=>a("div",{role:"timer",class:M()},[l.default?l.default(c.value):m.value])}});const f=B(U);const R={class:"block"},Z=_("span",{class:"colon"},":",-1),q={class:"block"},J=_("span",{class:"colon"},":",-1),K={class:"block"},re=x({setup(e){const s=v({"zh-CN":{reset:"\u91CD\u7F6E",pause:"\u6682\u505C",start:"\u5F00\u59CB",finished:"\u5012\u8BA1\u65F6\u7ED3\u675F",millisecond:"\u6BEB\u79D2\u7EA7\u6E32\u67D3",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",customFormat:"\u81EA\u5B9A\u4E49\u683C\u5F0F",manualControl:"\u624B\u52A8\u63A7\u5236",formatWithDay:"DD \u5929 HH \u65F6 mm \u5206 ss \u79D2"},"en-US":{reset:"Reset",pause:"Pause",start:"Start",finished:"Finished",millisecond:"Millisecond",customStyle:"Custom Style",customFormat:"Custom Format",manualControl:"Manual Control",formatWithDay:"DD Day, HH:mm:ss"}}),l=b(30*60*60*1e3),n=b(),i=()=>{var o;(o=n.value)==null||o.start()},u=()=>{var o;(o=n.value)==null||o.pause()},c=()=>{var o;(o=n.value)==null||o.reset()},m=()=>G(s("finished"));return(o,C)=>{const d=g("demo-block");return N(),P(W,null,[a(d,{title:t(s)("basicUsage")},{default:r(()=>[a(t(f),{time:l.value},null,8,["time"])]),_:1},8,["title"]),a(d,{title:t(s)("customFormat")},{default:r(()=>[a(t(f),{time:l.value,format:t(s)("formatWithDay")},null,8,["time","format"])]),_:1},8,["title"]),a(d,{title:t(s)("millisecond")},{default:r(()=>[a(t(f),{millisecond:"",time:l.value,format:"HH:mm:ss:SS"},null,8,["time"])]),_:1},8,["title"]),a(d,{title:t(s)("customStyle")},{default:r(()=>[a(t(f),{time:l.value},{default:r(h=>[_("span",R,S(h.hours),1),Z,_("span",q,S(h.minutes),1),J,_("span",K,S(h.seconds),1)]),_:1},8,["time"])]),_:1},8,["title"]),a(d,{title:t(s)("manualControl")},{default:r(()=>[a(t(f),{ref_key:"countDown",ref:n,millisecond:"",time:3e3,"auto-start":!1,format:"ss:SSS",onFinish:m},null,512),a(t(z),{clickable:"","column-num":3},{default:r(()=>[a(t(D),{icon:"play-circle-o",text:t(s)("start"),onClick:i},null,8,["text"]),a(t(D),{icon:"pause-circle-o",text:t(s)("pause"),onClick:u},null,8,["text"]),a(t(D),{icon:"replay",text:t(s)("reset"),onClick:c},null,8,["text"])]),_:1})]),_:1},8,["title"])],64)}}});export{re as default};