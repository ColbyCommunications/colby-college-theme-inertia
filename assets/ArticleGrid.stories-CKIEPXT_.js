import{a as He}from"./index-DZ_Kha3d.js";import{U as le,l as P,m as N,V as b,W as Fe,g as Ee,h as Ce,S as xe,e as c,F as De,k as f,X as V,d as q,Y as Ie,Z as te,$ as $e}from"./iframe-JoPPn0qi.js";import Te from"./ArticleGrid-BV0hOEN4.js";import{e as D}from"./mock-data-Db_ZkuBv.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-DU2HigOJ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./Article-SuDGZx_b.js";import"./ButtonGroup-BQDJ09HQ.js";import"./Button-DCjJTd33.js";import"./Picture-CngznvIr.js";const U={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},R={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},g={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Ge={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom",NONE:"none"},Ue={dangerouslyHTMLString:!1,multiple:!0,position:U.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},We={rtl:!1,newestOnTop:!1,toastClassName:""},Ne={...Ue,...We};g.DEFAULT;var i=(e=>(e[e.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",e[e.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",e.CSS_NAMESPACE="Toastify",e))(i||{}),he=(e=>(e.ENTRANCE_ANIMATION_END="d",e))(he||{});const Ve={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},je={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},ze={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},Je={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"},we="Toastify--animate Toastify__none-enter";function Me(e,t=!1){var a;let n=Ve;if(!e||typeof e=="string")switch(e){case"flip":n=Je;break;case"zoom":n=ze;break;case"slide":n=je;break}else n=e;if(t)n.enter=we;else if(n.enter===we){const o=(a=n.exit.split("__")[1])==null?void 0:a.split("-")[0];n.enter=`Toastify--animate Toastify__${o}-enter`}return n}function Ke(e){return e.containerId||String(e.position)}const de="will-unmount";function Xe(e=U.TOP_RIGHT){return!!document.querySelector(`.${i.CSS_NAMESPACE}__toast-container--${e}`)}function Qe(e=U.TOP_RIGHT){return`${i.CSS_NAMESPACE}__toast-container--${e}`}function Ye(e,t,a=!1){const n=[`${i.CSS_NAMESPACE}__toast-container`,`${i.CSS_NAMESPACE}__toast-container--${e}`,a?`${i.CSS_NAMESPACE}__toast-container--rtl`:null].filter(Boolean).join(" ");return O(t)?t({position:e,rtl:a,defaultClassName:n}):`${n} ${t||""}`}function Ze(e){var t;const{position:a,containerClassName:n,rtl:o=!1,style:s={}}=e,d=i.CSS_NAMESPACE,h=Qe(a),u=document.querySelector(`.${d}`),S=document.querySelector(`.${h}`),w=!!S&&!((t=S.className)!=null&&t.includes(de)),l=u||document.createElement("div"),p=document.createElement("div");p.className=Ye(a,n,o),p.dataset.testid=`${i.CSS_NAMESPACE}__toast-container--${a}`,p.id=Ke(e);for(const E in s)if(Object.prototype.hasOwnProperty.call(s,E)){const A=s[E];p.style[E]=A}return u||(l.className=i.CSS_NAMESPACE,document.body.appendChild(l)),w||l.appendChild(p),p}function ye(e){var t,a,n;const o=typeof e=="string"?e:((t=e.currentTarget)==null?void 0:t.id)||((a=e.target)==null?void 0:a.id),s=document.getElementById(o);s&&s.removeEventListener("animationend",ye,!1);try{G[o].unmount(),(n=document.getElementById(o))==null||n.remove(),delete G[o],delete m[o]}catch{}}const G=P({});function et(e,t){const a=document.getElementById(String(t));a&&(G[a.id]=e)}function ve(e,t=!0){const a=String(e);if(!G[a])return;const n=document.getElementById(a);n&&n.classList.add(de),t?(at(e),n&&n.addEventListener("animationend",ye,!1)):ye(a),_.items=_.items.filter(o=>o.containerId!==e)}function tt(e){for(const t in G)ve(t,e);_.items=[]}function Be(e,t){const a=document.getElementById(e.toastId);if(a){let n=e;n={...n,...Me(n.transition)};const o=n.appendPosition?`${n.exit}--${n.position}`:n.exit;a.className+=` ${o}`,t&&t(a)}}function at(e){for(const t in m)if(t===e)for(const a of m[t]||[])Be(a)}function nt(e){const t=L().find(a=>a.toastId===e);return t?.containerId}function be(e){return document.getElementById(e)}function ot(e){const t=be(e.containerId);return t&&t.classList.contains(de)}function Ae(e){var t;const a=Ie(e.content)?b(e.content.props):null;return a??b((t=e.data)!=null?t:{})}function st(e){return e?_.items.filter(t=>t.containerId===e).length>0:_.items.length>0}function it(){if(_.items.length>0){const e=_.items.shift();ae(e?.toastContent,e?.toastProps)}}const m=P({}),_=P({items:[]});function L(){const e=b(m);return Object.values(e).reduce((t,a)=>[...t,...a],[])}function rt(e){return L().find(t=>t.toastId===e)}function ae(e,t={}){if(ot(t)){const a=be(t.containerId);a&&a.addEventListener("animationend",_e.bind(null,e,t),!1)}else _e(e,t)}function _e(e,t={}){const a=be(t.containerId);a&&a.removeEventListener("animationend",_e.bind(null,e,t),!1);const n=m[t.containerId]||[],o=n.length>0;if(!o&&!Xe(t.position)){const s=Ze(t),d=Fe(Bt,t);t.useHandler&&t.useHandler(d),d.mount(s),et(d,s.id)}o&&!t.updateId&&(t.position=n[0].position),Ee(()=>{t.updateId?y.update(t):y.add(e,t)})}const y={add(e,t){const{containerId:a=""}=t;a&&(m[a]=m[a]||[],m[a].find(n=>n.toastId===t.toastId)||setTimeout(()=>{var n,o;t.newestOnTop?(n=m[a])==null||n.unshift(t):(o=m[a])==null||o.push(t),t.onOpen&&t.onOpen(Ae(t))},t.delay||0))},remove(e){if(e){const t=nt(e);if(t){const a=m[t];let n=a.find(o=>o.toastId===e);m[t]=a.filter(o=>o.toastId!==e),!m[t].length&&!st(t)&&ve(t,!1),it(),Ee(()=>{n!=null&&n.onClose&&(n.onClose(Ae(n)),n=void 0)})}}},update(e={}){const{containerId:t=""}=e;if(t&&e.updateId){m[t]=m[t]||[];const a=m[t].find(s=>s.toastId===e.toastId),n=a?.position!==e.position||a?.transition!==e.transition,o={...e,disabledEnterTransition:!n,updateId:void 0};y.dismissForce(e?.toastId),setTimeout(()=>{r(o.content,o)},e.delay||0)}},clear(e,t=!0){e?ve(e,t):tt(t)},dismissCallback(e){var t;const a=(t=e.currentTarget)==null?void 0:t.id,n=document.getElementById(a);n&&(n.removeEventListener("animationend",y.dismissCallback,!1),setTimeout(()=>{y.remove(a)}))},dismiss(e){if(e){const t=L();for(const a of t)if(a.toastId===e){Be(a,n=>{n.addEventListener("animationend",y.dismissCallback,!1)});break}}},dismissForce(e){if(e){const t=L();for(const a of t)if(a.toastId===e){const n=document.getElementById(e);n&&(n.remove(),n.removeEventListener("animationend",y.dismissCallback,!1),y.remove(e));break}}}},lt=P({useHandler:void 0}),Pe=P({}),ie=P({});function ke(){return Math.random().toString(36).substring(2,9)}function dt(e){return typeof e=="number"&&!isNaN(e)}function Se(e){return typeof e=="string"}function O(e){return typeof e=="function"}function ce(...e){return N(...e)}function ne(e){return typeof e=="object"&&(!!(e!=null&&e.render)||!!(e!=null&&e.setup)||typeof e?.type=="object")}function ct(e={}){Pe[`${i.CSS_NAMESPACE}-default-options`]=e}function qe(){return Pe[`${i.CSS_NAMESPACE}-default-options`]||Ne}function ut(){const e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;return document.documentElement.classList.contains("dark")||e?"dark":"light"}var oe=(e=>(e[e.Enter=0]="Enter",e[e.Exit=1]="Exit",e))(oe||{});const Oe={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},disabledEnterTransition:{type:Boolean,required:!1,default:!1},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:U.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:R.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:g.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""},contentProps:{type:Object,required:!1,default:null},expandCustomProps:{type:Boolean,required:!1,default:!1}},pt={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:g.DEFAULT},theme:{type:String,required:!1,default:R.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},mt=le({name:"ProgressBar",props:pt,setup(e,{attrs:t}){const a=q(),n=f(()=>e.hide?"true":"false"),o=f(()=>({...t.style||{},animationDuration:`${e.autoClose===!0?5e3:e.autoClose}ms`,animationPlayState:e.isRunning?"running":"paused",opacity:e.hide||e.autoClose===!1?0:1,transform:e.controlledProgress?`scaleX(${e.progress})`:"none"})),s=f(()=>[`${i.CSS_NAMESPACE}__progress-bar`,e.controlledProgress?`${i.CSS_NAMESPACE}__progress-bar--controlled`:`${i.CSS_NAMESPACE}__progress-bar--animated`,`${i.CSS_NAMESPACE}__progress-bar-theme--${e.theme}`,`${i.CSS_NAMESPACE}__progress-bar--${e.type}`,e.rtl?`${i.CSS_NAMESPACE}__progress-bar--rtl`:null].filter(Boolean).join(" ")),d=f(()=>`${s.value} ${t?.class||""}`),h=()=>{a.value&&(a.value.onanimationend=null,a.value.ontransitionend=null)},u=()=>{e.isIn&&e.closeToast&&e.autoClose!==!1&&(e.closeToast(),h())},S=f(()=>e.controlledProgress?null:u),w=f(()=>e.controlledProgress?u:null);return te(()=>{a.value&&(h(),a.value.onanimationend=S.value,a.value.ontransitionend=w.value)}),()=>c("div",{ref:a,role:"progressbar","aria-hidden":n.value,"aria-label":"notification timer",class:d.value,style:o.value},null)}}),ft=le({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:R.AUTO},type:{type:String,required:!1,default:R.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(e){return()=>c("button",{class:`${i.CSS_NAMESPACE}__close-button ${i.CSS_NAMESPACE}__close-button--${e.theme}`,type:"button",onClick:t=>{t.stopPropagation(),e.closeToast&&e.closeToast(t)},"aria-label":e.ariaLabel},[c("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[c("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),ue=({theme:e,type:t,path:a,...n})=>c("svg",N({viewBox:"0 0 24 24",width:"100%",height:"100%",style:{fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${t})`}},n),[c("path",{d:a},null)]);function gt(e){return c(ue,N(e,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function ht(e){return c(ue,N(e,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function yt(e){return c(ue,N(e,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function vt(e){return c(ue,N(e,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function _t(){return c("div",{class:`${i.CSS_NAMESPACE}__spinner`},null)}const se={info:ht,warning:gt,success:yt,error:vt,spinner:_t},St=e=>e in se;function Et({theme:e,type:t,isLoading:a,icon:n}){let o;const s=!!a||t==="loading",d={theme:e,type:t};if(s&&(n===void 0||typeof n=="boolean"))return se.spinner();if(n!==!1){if(ne(n))o=b(n);else if(O(n)){const h=n;d.type=s?"loading":t,o=h(d),o=!o&&s?se.spinner():o}else Ie(n)?o=$e(n,d):Se(n)||dt(n)?o=n:St(t)&&(o=se[t](d));return o}}const bt=()=>{};function wt(e,t,a=i.COLLAPSE_DURATION){const{scrollHeight:n,style:o}=e,s=a;requestAnimationFrame(()=>{o.minHeight="initial",o.height=n+"px",o.transition=`all ${s}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,s)})})}function At(e){const t=q(!1),a=q(!1),n=q(!1),o=q(oe.Enter),s=P({...e,appendPosition:e.appendPosition||!1,collapse:typeof e.collapse>"u"?!0:e.collapse,collapseDuration:e.collapseDuration||i.COLLAPSE_DURATION}),d=s.done||bt,h=f(()=>s.appendPosition?`${s.enter}--${s.position}`:s.enter),u=f(()=>s.appendPosition?`${s.exit}--${s.position}`:s.exit),S=f(()=>e.pauseOnHover?{onMouseenter:x,onMouseleave:C}:{});function w(){const v=h.value.split(" ");p().addEventListener(he.ENTRANCE_ANIMATION_END,C,{once:!0});const I=k=>{const F=p();k.target===F&&(F.dispatchEvent(new Event(he.ENTRANCE_ANIMATION_END)),F.removeEventListener("animationend",I),F.removeEventListener("animationcancel",I),o.value===oe.Enter&&k.type!=="animationcancel"&&F.classList.remove(...v))},T=()=>{const k=p();k.classList.add(...v),k.addEventListener("animationend",I),k.addEventListener("animationcancel",I)};e.pauseOnFocusLoss&&E(),T()}function l(){if(!p())return;const v=()=>{const T=p();T.removeEventListener("animationend",v),s.collapse?wt(T,d,s.collapseDuration):d()},I=()=>{const T=p();o.value=oe.Exit,T&&(T.className+=` ${u.value}`,T.addEventListener("animationend",v))};a.value||(n.value?v():setTimeout(I))}function p(){return e.toastRef.value}function E(){document.hasFocus()||x(),window.addEventListener("focus",C),window.addEventListener("blur",x)}function A(){window.removeEventListener("focus",C),window.removeEventListener("blur",x)}function C(){(!e.loading.value||e.isLoading===void 0)&&(t.value=!0)}function x(){t.value=!1}function H(v){v&&(v.stopPropagation(),v.preventDefault()),a.value=!1}return te(l),te(()=>{const v=L();a.value=v.findIndex(I=>I.toastId===s.toastId)>-1}),te(()=>{e.isLoading!==void 0&&(e.loading.value?x():C())}),Ce(w),xe(()=>{e.pauseOnFocusLoss&&A()}),{isIn:a,isRunning:t,hideToast:H,eventHandlers:S}}function Ct(e){if(!e||typeof e!="object"||Array.isArray(e)||e.__v_isVNode)return!1;const t=e;return["title","content"].some(a=>a in t)}const xt=le({name:"ToastItem",inheritAttrs:!1,props:Oe,setup(e){const t=q(),a=f(()=>!!e.isLoading),n=f(()=>e.progress!==void 0&&e.progress!==null),o=f(()=>Et(e)),s=f(()=>[`${i.CSS_NAMESPACE}__toast`,`${i.CSS_NAMESPACE}__toast-theme--${e.theme}`,`${i.CSS_NAMESPACE}__toast--${e.type}`,e.rtl?`${i.CSS_NAMESPACE}__toast--rtl`:void 0,e.toastClassName||""].filter(Boolean).join(" ")),{isRunning:d,isIn:h,hideToast:u,eventHandlers:S}=At({toastRef:t,loading:a,done:()=>{y.remove(e.toastId)},...Me(e.transition,e.disabledEnterTransition),...e});function w(){const l=e.content;if(Ct(l)){const p=[];return l.title!==void 0&&p.push(c("div",{"data-testid":"toast-text-title",class:`${i.CSS_NAMESPACE}__toast-text-title`},[l.title])),l.content!==void 0&&p.push(c("div",{"data-testid":"toast-text-content",class:`${i.CSS_NAMESPACE}__toast-text-content`},[l.content])),c("div",{"data-testid":"toast-text-content-wrapper",class:`${i.CSS_NAMESPACE}__toast-text`},[p])}return ne(l)?V(b(l),{toastProps:b(e),closeToast:u,data:e.data,...e.expandCustomProps?e.contentProps:{contentProps:e.contentProps||{}}}):O(l)?l({toastProps:b(e),closeToast:u,data:e.data}):e.dangerouslyHTMLString?V("div",{innerHTML:l}):l}return()=>c("div",N({id:e.toastId,class:s.value,style:e.toastStyle||{},ref:t,"data-testid":`toast-item-${e.toastId}`,onClick:l=>{e.closeOnClick&&u(),e.onClick&&e.onClick(l)}},S.value),[c("div",{role:e.role,"data-testid":"toast-body",class:`${i.CSS_NAMESPACE}__toast-body ${e.bodyClassName||""}`},[o.value!=null&&c("div",{"data-testid":`toast-icon-${e.type}`,class:[`${i.CSS_NAMESPACE}__toast-icon`,e.isLoading?"":`${i.CSS_NAMESPACE}--animate-icon ${i.CSS_NAMESPACE}__zoom-enter`].join(" ")},[ne(o.value)?V(b(o.value),{theme:e.theme,type:e.type}):O(o.value)?o.value({theme:e.theme,type:e.type}):o.value]),c("div",{"data-testid":"toast-content"},[w()])]),(e.closeButton===void 0||e.closeButton===!0)&&c(ft,{theme:e.theme,closeToast:l=>{l.stopPropagation(),l.preventDefault(),u()}},null),ne(e.closeButton)?V(b(e.closeButton),{closeToast:u,type:e.type,theme:e.theme}):O(e.closeButton)?e.closeButton({closeToast:u,type:e.type,theme:e.theme}):null,c(mt,{className:e.progressClassName,style:e.progressStyle,rtl:e.rtl,theme:e.theme,isIn:h.value,type:e.type,hide:e.hideProgressBar,isRunning:d.value,autoClose:e.autoClose,controlledProgress:n.value,progress:e.progress,closeToast:e.isLoading?void 0:u},null)])}}),re="vue3-toastify:url-change";let j=0,$;function It(){if(!(typeof window>"u")&&ie.lastUrl!==window.location.href){ie.lastUrl=window.location.href;const e=a=>typeof a.clearOnUrlChange=="boolean"?a.clearOnUrlChange:qe().clearOnUrlChange!==!1,t=Object.values(m).reduce((a,n)=>(Array.isArray(n)&&a.push(...n),a),[]);for(const a of t)a.toastId&&e(a)&&y.dismiss(a.toastId);_.items=_.items.filter(a=>!e(a.toastProps))}}function Tt(){const{history:e}=window,t=e.pushState,a=e.replaceState;return e.pushState=function(...n){const o=t.apply(this,n);return window.dispatchEvent(new Event(re)),o},e.replaceState=function(...n){const o=a.apply(this,n);return window.dispatchEvent(new Event(re)),o},()=>{e.pushState=t,e.replaceState=a}}function Nt(){if(typeof window>"u"||$)return;const e=Tt(),t=()=>It();window.addEventListener(re,t),window.addEventListener("popstate",t),window.addEventListener("hashchange",t),$=()=>{e(),window.removeEventListener(re,t),window.removeEventListener("popstate",t),window.removeEventListener("hashchange",t),$=void 0}}function Mt(){$&&($(),ie.lastUrl="")}const Bt=le({name:"ToastifyContainer",inheritAttrs:!1,props:Oe,setup(e){const t=f(()=>e.containerId),a=f(()=>m[t.value]||[]),n=f(()=>a.value.filter(o=>o.position===e.position));return Ce(()=>{typeof window<"u"&&(j+=1,Nt())}),xe(()=>{typeof window<"u"&&j>0&&(j-=1,j===0&&Mt())}),()=>c(De,null,[n.value.map(o=>{const{toastId:s=""}=o;return c(xt,N({key:s},o),null)})])}});let ge=!1;const Re={isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1};function Le(){const e=[];return L().forEach(t=>{const a=document.getElementById(t.containerId);a&&!a.classList.contains(de)&&e.push(t)}),e}function Pt(e){const t=Le().length,a=e??0;return a>0&&t+_.items.length>=a}function kt(e){Pt(e.limit)&&!e.updateId&&_.items.push({toastId:e.toastId,containerId:e.containerId,toastContent:e.content,toastProps:e})}function M(e,t,a={}){if(ge)return;a=ce(qe(),{type:t},b(a)),(!a.toastId||typeof a.toastId!="string"&&typeof a.toastId!="number")&&(a.toastId=ke()),a={...a,...a.type==="loading"?Re:{},content:e,containerId:a.containerId||String(a.position)};const n=Number(a?.progress);return!isNaN(n)&&n<0&&(a.progress=0),n>1&&(a.progress=1),a.theme==="auto"&&(a.theme=ut()),kt(a),ie.lastUrl=window.location.href,a.multiple?_.items.length?a.updateId&&ae(e,a):ae(e,a):(ge=!0,r.clearAll(void 0,!1),setTimeout(()=>{ae(e,a)},0),setTimeout(()=>{ge=!1},390)),a.toastId}const r=(e,t)=>M(e,g.DEFAULT,t);r.info=(e,t)=>M(e,g.DEFAULT,{...t,type:g.INFO});r.error=(e,t)=>M(e,g.DEFAULT,{...t,type:g.ERROR});r.warning=(e,t)=>M(e,g.DEFAULT,{...t,type:g.WARNING});r.warn=r.warning;r.success=(e,t)=>M(e,g.DEFAULT,{...t,type:g.SUCCESS});r.loading=(e,t)=>M(e,g.DEFAULT,ce(t,Re));r.dark=(e,t)=>M(e,g.DEFAULT,ce(t,{theme:R.DARK}));r.remove=e=>{e?y.dismiss(e):y.clear()};r.clearAll=(e,t)=>{Ee(()=>{y.clear(e,t)})};r.isActive=e=>{let t=!1;return t=Le().findIndex(a=>a.toastId===e)>-1,t};r.update=(e,t={})=>{setTimeout(()=>{const a=rt(e);if(a){const n=b(a),{content:o}=n,s={...n,...t,toastId:t.toastId||e,updateId:ke()},d=s.render||o;delete s.render,M(d,s.type,s)}},0)};r.done=e=>{r.update(e,{isLoading:!1,progress:1})};r.promise=qt;function qt(e,{pending:t,error:a,success:n},o){var s,d,h;let u;const S={...o||{},autoClose:!1};t&&(u=Se(t)?r.loading(t,S):r.loading(t.render,{...S,...t}));const w={autoClose:(s=o?.autoClose)!=null?s:!0,closeOnClick:(d=o?.closeOnClick)!=null?d:!0,closeButton:(h=o?.autoClose)!=null?h:null,isLoading:void 0,draggable:null,delay:100},l=(E,A,C)=>{if(A==null){r.remove(u);return}const x={type:E,...w,...o,data:C},H=Se(A)?{render:A}:A;return u?r.update(u,{...x,...H,isLoading:!1}):r(H.render,{...x,...H,isLoading:!1}),C},p=O(e)?e():e;return p.then(E=>{l("success",n,E)}).catch(E=>{l("error",a,E)}),p}r.POSITION=U;r.THEME=R;r.TYPE=g;r.TRANSITIONS=Ge;const Ot={install(e,t={}){lt.useHandler=t.useHandler||(()=>{}),Rt(t)}};typeof window<"u"&&(window.Vue3Toastify=Ot);function Rt(e={}){const t=ce(Ne,e);ct(t)}const W=He.create();W.interceptors.response.use(e=>(e.data?.error&&r.error(e.data.message||"An internal error occurred."),e),e=>{console.log(e.response),e.response&&e.response.status;const t=e.response?.data?.message||e.message||"Server Error";return r.error(`Error: ${t}`,{position:"top-right",autoClose:!1}),Promise.reject(e)});const{expect:Kt,spyOn:pe,waitFor:Xt,within:Qt}=__STORYBOOK_MODULE_TEST__,Lt=[{image:{src:"https://placeholdit.com/600x600/dddddd/999999",alt:"this is an alt tag"},heading:"Future of Artificial Intelligence",subheading:"Technology",paragraph:"AI is reshaping industries at an unprecedented pace.",url:"#",buttons:[{button:{title:"Read Story",url:"https://www.colby.edu"}}]},{image:{src:"https://placeholdit.com/600x600/dddddd/999999",alt:"this is an alt tag"},heading:"Sustainable Energy Solutions",subheading:"Environment",paragraph:"Solar and wind energy are becoming more accessible than ever.",url:"#",buttons:[{button:{title:"Learn More",url:"https://www.colby.edu/academics"}}]},{image:{src:"https://placeholdit.com/600x600/dddddd/999999",alt:"this is an alt tag"},heading:"Modern Architecture Trends",subheading:"Design",paragraph:"Exploring the intersection of function and aesthetics in 2024.",url:"#",buttons:[{button:{title:"Read Story",url:"https://www.colby.edu/news"}}]},{image:{src:"https://placeholdit.com/600x600/dddddd/999999",alt:"this is an alt tag"},heading:"The Theory of Everything",subheading:"Knowledge Base",paragraph:"Exploring the intersection of function and aesthetics in 2024.",url:"#",buttons:[{button:{title:"Read Story",url:"https://www.colby.edu/news"}}]}],me=[{image:{src:"https://placeholdit.com/600x400/dddddd/999999",alt:"this is an alt tag"},heading:"Future of Artificial Intelligence",subheading:"Technology",paragraph:"AI is reshaping industries at an unprecedented pace.",url:"#",buttons:[{button:{title:"Read Story",url:"https://www.colby.edu"}}]},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",alt:"this is an alt tag"},heading:"Sustainable Energy Solutions",subheading:"Environment",paragraph:"Solar and wind energy are becoming more accessible than ever.",url:"#",buttons:[{button:{title:"Learn More",url:"https://www.colby.edu/academics"}}]},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",alt:"this is an alt tag"},heading:"Modern Architecture Trends",subheading:"Design",paragraph:"Exploring the intersection of function and aesthetics in 2024.",url:"#",buttons:[{button:{title:"Read Story",url:"https://www.colby.edu/news"}}]},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",alt:"this is an alt tag"},heading:"The Theory of Everything",subheading:"Knowledge Base",paragraph:"Exploring the intersection of function and aesthetics in 2024.",url:"#",buttons:[{button:{title:"Read Story",url:"https://www.colby.edu/news"}}]}],fe=[{...D(1)[0],title:{rendered:"President Interview in National Press"},tags:[{name:"president"}]},{...D(1)[0],title:{rendered:"Editor Pick: Colby Climate Story"},tags:[{name:"editors-pick"}]},{...D(1)[0],title:{rendered:"General Media Mention"},tags:[{name:"campus"}]},{...D(1)[0],title:{rendered:"Ignored Non-Media Story"},story_type:[{slug:"campus-story"}]},{...D(1)[0],title:{rendered:"Ignored Missing Content"},content:{rendered:""}}],Yt={title:"Core Components/Article Grid",component:Te},B=e=>({components:{ArticleGrid:Te},setup(){return{args:e}},template:'<ArticleGrid v-bind="args" />'}),z={render:B,args:{display_posts_method:"manual",columns:3,cta:"Read Story",items:me,border:!1},play:async({canvasElement:e})=>{}},J={render:B,args:{display_posts_method:"manual",style:"accordion",columns:3,render_api:!1,items:me},play:async({canvas:e,canvasElement:t,userEvent:a})=>{}},K={render:B,args:{display_posts_method:"internal",columns:3,post_limit:-1,cta:"Read Story",image_orientation:"rectangle",hydrated_from_server:!0,should_client_refresh:!1,initial_items:[{ID:68994,post_title:"S26 Colloquium",post_type:"post",heading:"S26 Colloquium",subheading:"Feb 17, 2026",paragraph:"When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."},{ID:67018,post_title:"Transforming the Smithsonian's Archives of American Art Journal",post_type:"post",heading:"Transforming the Smithsonian's Archives of American Art Journal",subheading:"Nov 04, 2025",paragraph:"As executive editor, art scholar Tanya Sheehan oversaw a dramatic increase in the venerable journal’s readership and quality"},{ID:66817,post_title:"Student-Scholars Shine at International Art Conference",post_type:"post",heading:"Student-Scholars Shine at International Art Conference",subheading:"Oct 23, 2025",paragraph:"Art history course and Colby Museum prepare students to dialogue with experts on Edvard Munch"},{ID:65511,post_title:"Harkett's Animal Modernities Published, Discussed in Blog Interview",post_type:"post",heading:"Harkett's Animal Modernities Published, Discussed in Blog Interview",subheading:"Sep 04, 2025",paragraph:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."}]},play:async({canvas:e,canvasElement:t,userEvent:a})=>{}},X={render:B,args:{display_posts_method:"api",api_source:"media_coverage",external_media_api:"all_media",columns:3,range:3,cta:"Read Story",hydrated_from_server:!0,should_client_refresh:!1,initial_items:[{title:{rendered:"$150 Million Gift for the Sciences"},summary:"The <em>Boston Globe</em> published a feature story on Colby's science initiative and the major gift that the College re...",url:"https://urldefense.com/v3/__https:/colby.us17.list-manage.com/track/click?u=535f666e042ba48f12906d776&id=cbf3c8f4cd&e=f080de3004__;!!P_zEGVH0kSMiWA!AtxqWuwhBPvg6htSW7Rpdk0M15OVX_R06OdL0Ifr87QnIsJuFamlWO2D24eFRJxJW9Np--r7TxhKcun9$",image:{src:"https://news.colby.edu/wp-content/uploads/2021/09/boston-globe-200x200-1-100x100.png",alt:"Boston Globe"}},{title:{rendered:"Groundbreaking Financial Aid Initiative Gets National Attention"},summary:"Colby's Fair Shot Fund program was featured in a story by NPR about making a college education more affordable for middl...",url:"https://www.npr.org/2024/10/22/nx-s1-5155173/colleges-financial-aid-middle-class-families",image:{src:"https://news.colby.edu/wp-content/uploads/2021/09/NPR_logo_200x200-100x100.png",alt:"NPR"}},{title:{rendered:"Colby's AI Leadership"},summary:"<em>Marketplace Tech</em> on NPR featured Michael Donihue, Colby's interim director of the Davis Institute for Artificia...",url:"https://www.marketplace.org/shows/marketplace-tech/how-one-college-is-leveraging-ai-for-educators-and-students/",image:{src:"https://news.colby.edu/wp-content/uploads/2021/09/MarketplaceTech_logo_200x200-100x100.png",alt:"Marketplace Tech"}}]},beforeEach:()=>{const e=pe(W,"get").mockResolvedValue({data:fe});return()=>e.mockRestore()},play:async({canvas:e,canvasElement:t})=>{}},Q={render:B,args:{display_posts_method:"manual",columns:2,cta:"Read Story",items:me},beforeEach:()=>{const e=pe(W,"get").mockResolvedValue({data:fe});return()=>e.mockRestore()},play:async({canvas:e,canvasElement:t})=>{}},Y={render:B,args:{display_posts_method:"manual",columns:4,items:me,cta:"Read Story"},beforeEach:()=>{const e=pe(W,"get").mockResolvedValue({data:fe});return()=>e.mockRestore()},play:async({canvas:e,canvasElement:t})=>{}},Z={render:B,args:{display_posts_method:"api",api_source:"media_coverage",border:!0,columns:3,range:3,cta:"Read Story",hydrated_from_server:!0,should_client_refresh:!1,initial_items:[{title:{rendered:"$150 Million Gift for the Sciences"},summary:"The <em>Boston Globe</em> published a feature story on Colby's science initiative and the major gift that the College re...",url:"https://urldefense.com/v3/__https:/colby.us17.list-manage.com/track/click?u=535f666e042ba48f12906d776&id=cbf3c8f4cd&e=f080de3004__;!!P_zEGVH0kSMiWA!AtxqWuwhBPvg6htSW7Rpdk0M15OVX_R06OdL0Ifr87QnIsJuFamlWO2D24eFRJxJW9Np--r7TxhKcun9$",image:{src:"https://news.colby.edu/wp-content/uploads/2021/09/boston-globe-200x200-1-100x100.png",alt:"Boston Globe"}},{title:{rendered:"Groundbreaking Financial Aid Initiative Gets National Attention"},summary:"Colby's Fair Shot Fund program was featured in a story by NPR about making a college education more affordable for middl...",url:"https://www.npr.org/2024/10/22/nx-s1-5155173/colleges-financial-aid-middle-class-families",image:{src:"https://news.colby.edu/wp-content/uploads/2021/09/NPR_logo_200x200-100x100.png",alt:"NPR"}},{title:{rendered:"Colby's AI Leadership"},summary:"<em>Marketplace Tech</em> on NPR featured Michael Donihue, Colby's interim director of the Davis Institute for Artificia...",url:"https://www.marketplace.org/shows/marketplace-tech/how-one-college-is-leveraging-ai-for-educators-and-students/",image:{src:"https://news.colby.edu/wp-content/uploads/2021/09/MarketplaceTech_logo_200x200-100x100.png",alt:"Marketplace Tech"}}]},beforeEach:()=>{const e=pe(W,"get").mockResolvedValue({data:fe});return()=>e.mockRestore()},play:async({canvasElement:e})=>{}},ee={render:B,args:{display_posts_method:"manual",columns:3,cta:"Read Story",items:Lt,border:!1},play:async({canvasElement:e})=>{}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    display_posts_method: "manual",
    columns: 3,
    cta: "Read Story",
    items: mockItems,
    border: false
  },
  play: async ({
    canvasElement
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const first = canvasElement.querySelectorAll(".grid .article-grid__item:first-child")[0];
    const firstHeading = first.querySelectorAll(".text-group__heading")[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe("Future of Artificial Intelligence");
    await expect(firstHeading).toBeVisible();
    const second = canvasElement.querySelectorAll(".grid .article-grid__item:nth-child(2)")[0];
    const secondHeading = second.querySelectorAll(".text-group__heading")[0];
    await expect(secondHeading.textContent.slice(0, -1)).toBe("Sustainable Energy Solutions");
    await expect(secondHeading).toBeVisible();
    const third = canvasElement.querySelectorAll(".grid .article-grid__item:nth-child(3)")[0];
    const thirdHeading = third.querySelectorAll(".text-group__heading")[0];
    await expect(thirdHeading.textContent.slice(0, -1)).toBe("Modern Architecture Trends");
    await expect(thirdHeading).toBeVisible();
  }
}`,...z.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    display_posts_method: "manual",
    style: "accordion",
    columns: 3,
    render_api: false,
    items: mockItems
  },
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const first = canvasElement.querySelectorAll(".grid .article-grid__item:first-child")[0];
    const firstHeading = first.querySelectorAll(".text-group__heading")[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe("Future of Artificial Intelligence");
    await expect(firstHeading).toBeVisible();
    const grid = canvasElement.querySelector(".article-grid");
    const gridItems = canvasElement.querySelectorAll(".article-grid__item");
    setElementSize(grid, "clientWidth", 1200);
    gridItems.forEach(item => {
      setElementSize(item, "offsetWidth", 300);
      setElementSize(item, "offsetHeight", 420);
    });
    window.dispatchEvent(new Event("resize"));
    const readMoreButtons = await canvas.findAllByText("Read More");
    await userEvent.click(readMoreButtons[0]);
    const aiSummary = await canvas.findAllByText("AI is reshaping industries at an unprecedented pace.");
    await expect(aiSummary.length).toBeGreaterThan(0);
    await expect(canvas.getAllByText("Read Story").length).toBeGreaterThan(0);
    await userEvent.click(readMoreButtons[1]);
    const solarSummary = await canvas.findAllByText("Solar and wind energy are becoming more accessible than ever.");
    await expect(solarSummary.length).toBeGreaterThan(0);
    setElementSize(grid, "clientWidth", 300);
    gridItems.forEach(item => {
      setElementSize(item, "offsetWidth", 300);
      setElementSize(item, "offsetHeight", 380);
    });
    window.dispatchEvent(new Event("resize"));
    await userEvent.click(readMoreButtons[0]);
    const closeIcons = canvasElement.querySelectorAll(".material-symbols-sharp");
    if (closeIcons.length > 0) {
      await userEvent.click(closeIcons[0].closest("button"));
    }
  }
}`,...J.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    display_posts_method: "internal",
    columns: 3,
    post_limit: -1,
    cta: "Read Story",
    image_orientation: "rectangle",
    hydrated_from_server: true,
    should_client_refresh: false,
    initial_items: [{
      "ID": 68994,
      "post_title": "S26 Colloquium",
      "post_type": "post",
      "heading": "S26 Colloquium",
      "subheading": "Feb 17, 2026",
      "paragraph": "When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    }, {
      "ID": 67018,
      "post_title": "Transforming the Smithsonian's Archives of American Art Journal",
      "post_type": "post",
      "heading": "Transforming the Smithsonian's Archives of American Art Journal",
      "subheading": "Nov 04, 2025",
      "paragraph": "As executive editor, art scholar Tanya Sheehan oversaw a dramatic increase in the venerable journal’s readership and quality"
    }, {
      "ID": 66817,
      "post_title": "Student-Scholars Shine at International Art Conference",
      "post_type": "post",
      "heading": "Student-Scholars Shine at International Art Conference",
      "subheading": "Oct 23, 2025",
      "paragraph": "Art history course and Colby Museum prepare students to dialogue with experts on Edvard Munch"
    }, {
      "ID": 65511,
      "post_title": "Harkett's Animal Modernities Published, Discussed in Blog Interview",
      "post_type": "post",
      "heading": "Harkett's Animal Modernities Published, Discussed in Blog Interview",
      "subheading": "Sep 04, 2025",
      "paragraph": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    }]
  },
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const first = canvasElement.querySelectorAll(".grid .article-grid__item:first-child")[0];
    const firstHeading = first.querySelectorAll(".text-group__heading")[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe("Internal Story With ACF Summary");
    await expect(firstHeading).toBeVisible();
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
    });
    const seeMore = await canvas.findByRole("button", {
      name: "See More"
    });
    await userEvent.click(seeMore);
    await waitFor(() => {
      const forth = canvasElement.querySelectorAll(".grid .article-grid__item:nth-child(4)")[0];
      const forthHeading = forth.querySelectorAll(".text-group__heading")[0];
      expect(forthHeading).toBeInTheDocument();
    });
    // await waitFor(() => {
    //   expect(axios.get).toHaveBeenCalledTimes(2);
    // });
    // await expect(axios.get.mock.calls[1][0]).toContain("page=2");

    // const ctaButtons = canvas.getAllByText("Read Story");
    // await expect(ctaButtons.length).toBeGreaterThan(5);
  }
}`,...K.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    display_posts_method: "api",
    api_source: "media_coverage",
    external_media_api: "all_media",
    columns: 3,
    range: 3,
    cta: "Read Story",
    hydrated_from_server: true,
    should_client_refresh: false,
    initial_items: [{
      "title": {
        "rendered": "$150 Million Gift for the Sciences"
      },
      "summary": "The <em>Boston Globe</em> published a feature story on Colby's science initiative and the major gift that the College re...",
      "url": "https://urldefense.com/v3/__https:/colby.us17.list-manage.com/track/click?u=535f666e042ba48f12906d776&id=cbf3c8f4cd&e=f080de3004__;!!P_zEGVH0kSMiWA!AtxqWuwhBPvg6htSW7Rpdk0M15OVX_R06OdL0Ifr87QnIsJuFamlWO2D24eFRJxJW9Np--r7TxhKcun9$",
      "image": {
        "src": "https://news.colby.edu/wp-content/uploads/2021/09/boston-globe-200x200-1-100x100.png",
        "alt": "Boston Globe"
      }
    }, {
      "title": {
        "rendered": "Groundbreaking Financial Aid Initiative Gets National Attention"
      },
      "summary": "Colby's Fair Shot Fund program was featured in a story by NPR about making a college education more affordable for middl...",
      "url": "https://www.npr.org/2024/10/22/nx-s1-5155173/colleges-financial-aid-middle-class-families",
      "image": {
        "src": "https://news.colby.edu/wp-content/uploads/2021/09/NPR_logo_200x200-100x100.png",
        "alt": "NPR"
      }
    }, {
      "title": {
        "rendered": "Colby's AI Leadership"
      },
      "summary": "<em>Marketplace Tech</em> on NPR featured Michael Donihue, Colby's interim director of the Davis Institute for Artificia...",
      "url": "https://www.marketplace.org/shows/marketplace-tech/how-one-college-is-leveraging-ai-for-educators-and-students/",
      "image": {
        "src": "https://news.colby.edu/wp-content/uploads/2021/09/MarketplaceTech_logo_200x200-100x100.png",
        "alt": "Marketplace Tech"
      }
    }]
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: externalMediaPosts
    });
    return () => spy.mockRestore();
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith("https://news.colby.edu/wp-json/custom/v1/external-posts");
    });
    const first = canvasElement.querySelectorAll(".grid .article-grid__item:first-child")[0];
    const firstHeading = first.querySelectorAll(".text-group__heading")[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe("President Interview in National Press");
    await expect(firstHeading).toBeVisible();
    const second = canvasElement.querySelectorAll(".grid .article-grid__item:nth-child(2)")[0];
    const secondHeading = second.querySelectorAll(".text-group__heading")[0];
    await expect(secondHeading.textContent.slice(0, -1)).toBe("Editor Pick: Colby Climate Story");
    await expect(secondHeading).toBeVisible();
    const third = canvasElement.querySelectorAll(".grid .article-grid__item:nth-child(3)")[0];
    const thirdHeading = third.querySelectorAll(".text-group__heading")[0];
    await expect(thirdHeading.textContent.slice(0, -1)).toBe("General Media Mention");
    await expect(thirdHeading).toBeVisible();
  }
}`,...X.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    display_posts_method: "manual",
    columns: 2,
    cta: "Read Story",
    items: mockItems
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: externalMediaPosts
    });
    return () => spy.mockRestore();
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith("https://news.colby.edu/wp-json/custom/v1/external-posts");
    });
    const first = canvasElement.querySelectorAll(".grid .article-grid__item:first-child")[0];
    const firstHeading = first.querySelectorAll(".text-group__heading")[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe("President Interview in National Press");
    await expect(firstHeading).toBeVisible();
    await expect(canvas.queryByText("Editor Pick: Colby Climate Story")).not.toBeInTheDocument();
  }
}`,...Q.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    display_posts_method: "manual",
    columns: 4,
    items: mockItems,
    cta: "Read Story"
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: externalMediaPosts
    });
    return () => spy.mockRestore();
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith("https://news.colby.edu/wp-json/custom/v1/external-posts");
    });
    const first = canvasElement.querySelectorAll(".grid .article-grid__item:first-child")[0];
    const firstHeading = first.querySelectorAll(".text-group__heading")[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe("Editor Pick: Colby Climate Story");
    await expect(firstHeading).toBeVisible();
    await expect(canvas.queryByText("President Interview in National Press")).not.toBeInTheDocument();
  }
}`,...Y.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    display_posts_method: "api",
    api_source: "media_coverage",
    border: true,
    columns: 3,
    range: 3,
    cta: "Read Story",
    hydrated_from_server: true,
    should_client_refresh: false,
    initial_items: [{
      "title": {
        "rendered": "$150 Million Gift for the Sciences"
      },
      "summary": "The <em>Boston Globe</em> published a feature story on Colby's science initiative and the major gift that the College re...",
      "url": "https://urldefense.com/v3/__https:/colby.us17.list-manage.com/track/click?u=535f666e042ba48f12906d776&id=cbf3c8f4cd&e=f080de3004__;!!P_zEGVH0kSMiWA!AtxqWuwhBPvg6htSW7Rpdk0M15OVX_R06OdL0Ifr87QnIsJuFamlWO2D24eFRJxJW9Np--r7TxhKcun9$",
      "image": {
        "src": "https://news.colby.edu/wp-content/uploads/2021/09/boston-globe-200x200-1-100x100.png",
        "alt": "Boston Globe"
      }
    }, {
      "title": {
        "rendered": "Groundbreaking Financial Aid Initiative Gets National Attention"
      },
      "summary": "Colby's Fair Shot Fund program was featured in a story by NPR about making a college education more affordable for middl...",
      "url": "https://www.npr.org/2024/10/22/nx-s1-5155173/colleges-financial-aid-middle-class-families",
      "image": {
        "src": "https://news.colby.edu/wp-content/uploads/2021/09/NPR_logo_200x200-100x100.png",
        "alt": "NPR"
      }
    }, {
      "title": {
        "rendered": "Colby's AI Leadership"
      },
      "summary": "<em>Marketplace Tech</em> on NPR featured Michael Donihue, Colby's interim director of the Davis Institute for Artificia...",
      "url": "https://www.marketplace.org/shows/marketplace-tech/how-one-college-is-leveraging-ai-for-educators-and-students/",
      "image": {
        "src": "https://news.colby.edu/wp-content/uploads/2021/09/MarketplaceTech_logo_200x200-100x100.png",
        "alt": "Marketplace Tech"
      }
    }]
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: externalMediaPosts
    });
    return () => spy.mockRestore();
  },
  play: async ({
    canvasElement
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith("https://news.colby.edu/wp-json/custom/v1/external-posts");
    });
    const articles = canvasElement.querySelectorAll(".article-grid__item");
    await expect(articles.length).toBe(0);
  }
}`,...Z.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    display_posts_method: "manual",
    columns: 3,
    cta: "Read Story",
    items: mockItemsSquare,
    border: false
  },
  play: async ({
    canvasElement
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const first = canvasElement.querySelectorAll(".grid .article-grid__item:first-child")[0];
    const firstHeading = first.querySelectorAll(".text-group__heading")[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe("Future of Artificial Intelligence");
    await expect(firstHeading).toBeVisible();
    const second = canvasElement.querySelectorAll(".grid .article-grid__item:nth-child(2)")[0];
    const secondHeading = second.querySelectorAll(".text-group__heading")[0];
    await expect(secondHeading.textContent.slice(0, -1)).toBe("Sustainable Energy Solutions");
    await expect(secondHeading).toBeVisible();
    const third = canvasElement.querySelectorAll(".grid .article-grid__item:nth-child(3)")[0];
    const thirdHeading = third.querySelectorAll(".text-group__heading")[0];
    await expect(thirdHeading.textContent.slice(0, -1)).toBe("Modern Architecture Trends");
    await expect(thirdHeading).toBeVisible();
  }
}`,...ee.parameters?.docs?.source}}};const Zt=["ManualGrid","Accordion","InternalCategoryFetch","MediaCoverage","TwoColumnGrid","FourColumnGrid","WithBorder","SquareImages"];export{J as Accordion,Y as FourColumnGrid,K as InternalCategoryFetch,z as ManualGrid,X as MediaCoverage,ee as SquareImages,Q as TwoColumnGrid,Z as WithBorder,Zt as __namedExportsOrder,Yt as default};
