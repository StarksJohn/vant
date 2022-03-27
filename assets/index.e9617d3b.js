import{c as M,o as P,n as V,K as q,S as C,H as D,i as z,a as H}from"./use-translate.d627ebf3.js";import{c as _,w as L}from"./with-install.9724bc72.js";import{z as g,D as y,H as U,x as $,j,v as K,e as t,r as O,o as X,a as G,w as r,B as e,h,t as b,F as J}from"./vue-libs.bf80eadf.js";import{u as Q}from"./use-expose.36b4c9ee.js";import{o as Y}from"./on-popup-reopen.e08ee506.js";import{I as v}from"./index.72703c04.js";import{S as Z,a as x}from"./index.1e01fa70.js";import"./use-touch.b6ff7b52.js";const[ee,m]=M("notice-bar"),te={text:String,mode:String,color:String,delay:_(1),speed:_(60),leftIcon:String,wrapable:Boolean,background:String,scrollable:{type:Boolean,default:null}};var ue=g({name:ee,props:te,emits:["close","replay"],setup(o,{emit:u,slots:i}){let c=0,l=0,B;const F=y(),E=y(),a=U({show:!0,offset:0,duration:0}),S=()=>{if(i["left-icon"])return i["left-icon"]();if(o.leftIcon)return t(v,{class:m("left-icon"),name:o.leftIcon},null)},k=()=>{if(o.mode==="closeable")return"cross";if(o.mode==="link")return"arrow"},I=n=>{o.mode==="closeable"&&(a.show=!1,u("close",n))},R=()=>{if(i["right-icon"])return i["right-icon"]();const n=k();if(n)return t(v,{name:n,class:m("right-icon"),onClick:I},null)},T=()=>{a.offset=c,a.duration=0,q(()=>{C(()=>{a.offset=-l,a.duration=(l+c)/+o.speed,u("replay")})})},N=()=>{const n=o.scrollable===!1&&!o.wrapable,d={transform:a.offset?`translateX(${a.offset}px)`:"",transitionDuration:`${a.duration}s`};return t("div",{ref:F,role:"marquee",class:m("wrap")},[t("div",{ref:E,style:d,class:[m("content"),{"van-ellipsis":n}],onTransitionend:T},[i.default?i.default():o.text])])},f=()=>{const{delay:n,speed:d,scrollable:p}=o,W=z(n)?+n*1e3:0;c=0,l=0,a.offset=0,a.duration=0,clearTimeout(B),B=setTimeout(()=>{if(!F.value||!E.value||p===!1)return;const w=D(F).width,A=D(E).width;(p||A>w)&&C(()=>{c=w,l=A,a.offset=-l,a.duration=l/+d})},W)};return Y(f),P(f),V("pageshow",f),Q({reset:f}),$(()=>[o.text,o.scrollable],f),()=>{const{color:n,wrapable:d,background:p}=o;return j(t("div",{role:"alert",class:m({wrapable:d}),style:{color:n,background:p}},[S(),N(),R()]),[[K,a.show]])}}});const s=L(ue);const fe=g({setup(o){const u=H({"zh-CN":{mode:"\u901A\u77E5\u680F\u6A21\u5F0F",text1:"\u65E0\u8BBA\u6211\u4EEC\u80FD\u6D3B\u591A\u4E45\uFF0C\u6211\u4EEC\u80FD\u591F\u4EAB\u53D7\u7684\u53EA\u6709\u65E0\u6CD5\u5206\u5272\u7684\u6B64\u523B\uFF0C\u6B64\u5916\u522B\u65E0\u5176\u4ED6\u3002",text2:"\u4E0D\u4F1A\u56DE\u5934\u7684\u4E1C\u897F\u6709\u56DB\u4EF6\uFF1A\u8BF4\u51FA\u53E3\u7684\u8BDD\u3001\u79BB\u5F26\u7684\u7BAD\u3001\u901D\u53BB\u7684\u751F\u6D3B\u548C\u5931\u53BB\u7684\u673A\u4F1A\u3002",haiku:"\u7C73\u888B\u867D\u7A7A\u2014\u2014\u6A31\u82B1\u5F00\u54C9\uFF01",poetry1:"\u660E\u6708\u76F4\u5165\uFF0C\u65E0\u5FC3\u53EF\u731C\u3002",poetry2:"\u4ED9\u4EBA\u629A\u6211\u9876\uFF0C\u7ED3\u53D1\u53D7\u957F\u751F\u3002",poetry3:"\u4ECA\u4EBA\u4E0D\u89C1\u53E4\u65F6\u6708\uFF0C\u4ECA\u6708\u66FE\u7ECF\u7167\u53E4\u4EBA\u3002",wrapable:"\u591A\u884C\u5C55\u793A",scrollable:"\u6EDA\u52A8\u64AD\u653E",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",verticalScroll:"\u5782\u76F4\u6EDA\u52A8"},"en-US":{mode:"Mode",text1:"Technology is the common soul of the people who developed it.",text2:"Technology is the common soul of the people who developed it.",haiku:"Short Content",poetry1:"Content 1",poetry2:"Content 2",poetry3:"Content 3",wrapable:"Wrapable",customStyle:"Custom Style",scrollable:"Scrollable",verticalScroll:"Vertical Scroll"}});return(i,c)=>{const l=O("demo-block");return X(),G(J,null,[t(l,{title:e(u)("basicUsage")},{default:r(()=>[t(e(s),{text:e(u)("text1"),scrollable:"","left-icon":"volume-o"},null,8,["text"])]),_:1},8,["title"]),t(l,{title:e(u)("scrollable")},{default:r(()=>[t(e(s),{scrollable:"",text:e(u)("haiku")},null,8,["text"]),t(e(s),{scrollable:!1,text:e(u)("text2")},null,8,["text"])]),_:1},8,["title"]),t(l,{title:e(u)("wrapable")},{default:r(()=>[t(e(s),{wrapable:"",scrollable:!1,text:e(u)("text2")},null,8,["text"])]),_:1},8,["title"]),t(l,{title:e(u)("mode")},{default:r(()=>[t(e(s),{mode:"closeable",text:e(u)("haiku")},null,8,["text"]),t(e(s),{mode:"link",text:e(u)("haiku")},null,8,["text"])]),_:1},8,["title"]),t(l,{title:e(u)("customStyle")},{default:r(()=>[t(e(s),{text:e(u)("haiku"),color:"#1989fa",background:"#ecf9ff","left-icon":"info-o"},null,8,["text"])]),_:1},8,["title"]),t(l,{title:e(u)("verticalScroll")},{default:r(()=>[t(e(s),{"left-icon":"volume-o",scrollable:!1},{default:r(()=>[t(e(Z),{vertical:"",class:"notice-swipe",autoplay:3e3,"show-indicators":!1},{default:r(()=>[t(e(x),null,{default:r(()=>[h(b(e(u)("poetry1")),1)]),_:1}),t(e(x),null,{default:r(()=>[h(b(e(u)("poetry2")),1)]),_:1}),t(e(x),null,{default:r(()=>[h(b(e(u)("poetry3")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["title"])],64)}}});export{fe as default};