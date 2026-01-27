import{v as Lt,x as Vt,y as _t,z as Ye,f as me,A as Ge,o as T,e as z,d as G,m as ye,T as Ze,B as Qe,C as Be,F as _e,j as Le,D as kt,E as Xe,r as m,g as Dt,c as R,p as A,h as It,i as Pt,l as ue,s as Je,G as $e,H as jt,w as lt,a as Nt,b as Y,n as Oe,I as Rt}from"./iframe-D_FtpVq-.js";import"./preload-helper-PPVm8Dsz.js";function X(a){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?X=function(e){return typeof e}:X=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X(a)}function et(a,e,t,n,o,i,l){try{var f=a[i](l),d=f.value}catch(h){t(h);return}f.done?e(d):Promise.resolve(d).then(n,o)}function Ft(a){return function(){var e=this,t=arguments;return new Promise(function(n,o){var i=a.apply(e,t);function l(d){et(i,n,o,l,f,"next",d)}function f(d){et(i,n,o,l,f,"throw",d)}l(void 0)})}}function Ht(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function Ut(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function Kt(a,e,t){return e&&Ut(a.prototype,e),a}function H(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function tt(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable})),t.push.apply(t,n)}return t}function g(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?tt(Object(t),!0).forEach(function(n){H(a,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):tt(Object(t)).forEach(function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(t,n))})}return a}function N(a){return qt(a)||Wt(a)||Yt(a)||Gt()}function qt(a){if(Array.isArray(a))return Ve(a)}function Wt(a){if(typeof Symbol<"u"&&Symbol.iterator in Object(a))return Array.from(a)}function Yt(a,e){if(a){if(typeof a=="string")return Ve(a,e);var t=Object.prototype.toString.call(a).slice(8,-1);if(t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set")return Array.from(a);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ve(a,e)}}function Ve(a,e){(e==null||e>a.length)&&(e=a.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=a[t];return n}function Gt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Zt='button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])',Qt=function(e){return e.key==="Tab"||e.keyCode===9},Xt=function(e,t){return N(e.querySelectorAll(t)||[])},Jt=function(e){return Xt(e,Zt)},nt=function(e){return e==document.activeElement},$t=function(){return!document.activeElement},en=(function(){function a(){Ht(this,a),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this),this.enable=this.enable.bind(this),this.disable=this.disable.bind(this),this.firstElement=this.firstElement.bind(this),this.lastElement=this.lastElement.bind(this)}return Kt(a,[{key:"lastElement",value:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",value:function(){return this.elements[0]||null}},{key:"onKeyDown",value:function(t){if(Qt(t)){if(t.shiftKey){nt(this.firstElement())&&(this.lastElement().focus(),t.preventDefault());return}if($t()||nt(this.lastElement())){this.firstElement().focus(),t.preventDefault();return}}}},{key:"enabled",value:function(){return!!this.root}},{key:"enable",value:function(t){t&&(this.root=t,this.elements=Jt(this.root),this.root.addEventListener("keydown",this.onKeyDown))}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}]),a})(),tn=function(e,t,n){var o=e.style[t];return e.style[t]=n,function(){e.style[t]=o}},at=function(e){var t=e.targetTouches?e.targetTouches[0]:e,n=t.clientX,o=t.clientY;return{x:n,y:o}},nn=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},fe=function(e,t,n){return typeof e!="number"&&(e=Math.min(t,n)||t),typeof n!="number"&&(n=Math.max(t,e)),Math.min(Math.max(t,e),n)},ot=function(e){return e&&Number(e.replace(/px$/,""))||0},an=function(e,t,n){if(n==="")return!0;var o=N(t.querySelectorAll(n));return o.includes(e.target)},ge={down:{pc:"mousedown",m:"touchstart"},move:{pc:"mousemove",m:"touchmove"},up:{pc:"mouseup",m:"touchend"}},de=function(e,t,n){t&&t.addEventListener(ge[e].pc,n),t&&t.addEventListener(ge[e].m,n,{passive:!1})},ce=function(e,t,n){t&&t.removeEventListener(ge[e].pc,n),t&&t.removeEventListener(ge[e].m,n)},ke=!1;if(typeof window<"u"){var rt={get passive(){ke=!0}};window.addEventListener("testPassive",null,rt),window.removeEventListener("testPassive",null,rt)}var it=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),D=[],he=!1,pe=0,st=-1,J,$,on=function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var t=window.getComputedStyle(e);return["auto","scroll"].includes(t.overflowY)&&e.scrollHeight>e.clientHeight},rn=function(e,t){return!(e.scrollTop===0&&t<0||e.scrollTop+e.clientHeight+t>=e.scrollHeight&&t>0)},ln=function(e){for(var t=[];e;){if(t.push(e),e.classList.contains("vfm"))return t;e=e.parentElement}return t},sn=function(e,t){var n=!1,o=ln(e);return o.forEach(function(i){on(i)&&rn(i,t)&&(n=!0)}),n},ut=function(e){return D.some(function(){return sn(e,-pe)})},be=function(e){var t=e||window.event;return ut(t.target)||t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)},un=function(e){if($===void 0){var t=!!e&&e.reserveScrollBarGap===!0,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var o=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);$=document.body.style.paddingRight,document.body.style.paddingRight="".concat(o+n,"px")}}J===void 0&&(J=document.body.style.overflow,document.body.style.overflow="hidden")},fn=function(){$!==void 0&&(document.body.style.paddingRight=$,$=void 0),J!==void 0&&(document.body.style.overflow=J,J=void 0)},dn=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},cn=function(e,t){return pe=e.targetTouches[0].clientY-st,ut(e.target)?!1:t&&t.scrollTop===0&&pe>0||dn(t)&&pe<0?be(e):(e.stopPropagation(),!0)},vn=function(e,t){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!D.some(function(o){return o.targetElement===e})){var n={targetElement:e,options:t||{}};D=[].concat(N(D),[n]),it?(e.ontouchstart=function(o){o.targetTouches.length===1&&(st=o.targetTouches[0].clientY)},e.ontouchmove=function(o){o.targetTouches.length===1&&cn(o,e)},he||(document.addEventListener("touchmove",be,ke?{passive:!1}:void 0),he=!0)):un(t)}},Ae=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}D=D.filter(function(t){return t.targetElement!==e}),it?(e.ontouchstart=null,e.ontouchmove=null,he&&D.length===0&&(document.removeEventListener("touchmove",be,ke?{passive:!1}:void 0),he=!1)):D.length||fn()},ve=function(){},O={Enter:"enter",Entering:"entering",Leave:"leave",Leaving:"leavng"},mn={t:"ns-resize",tr:"nesw-resize",r:"ew-resize",br:"nwse-resize",b:"ns-resize",bl:"nesw-resize",l:"ew-resize",tl:"nwse-resize"},we={props:{name:{type:String,default:null},modelValue:{type:Boolean,default:!1},ssr:{type:Boolean,default:!0},classes:{type:[String,Object,Array],default:""},overlayClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},styles:{type:[Object,Array],default:function(){return{}}},overlayStyle:{type:[Object,Array],default:function(){return{}}},contentStyle:{type:[Object,Array],default:function(){return{}}},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},preventClick:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(e){var t=X(e);return t==="boolean"||t==="string"?!0:e.nodeType===Node.ELEMENT_NODE}},transition:{type:[String,Object],default:"vfm"},overlayTransition:{type:[String,Object],default:"vfm"},keepOverlay:{type:Boolean,default:!1},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1},fitParent:{type:Boolean,default:!0},drag:{type:Boolean,default:!1},dragSelector:{type:String,default:""},keepChangedStyle:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},resizeDirections:{type:Array,default:function(){return["t","tr","r","br","b","bl","l","tl"]},validator:function(e){return["t","tr","r","br","b","bl","l","tl"].filter(function(t){return e.indexOf(t)!==-1}).length===e.length}},minWidth:{type:Number,default:0},minHeight:{type:Number,default:0},maxWidth:{type:Number,default:1/0},maxHeight:{type:Number,default:1/0}},emits:["update:modelValue","click-outside","before-open","opened","before-close","closed","_before-open","_opened","_closed","drag:start","drag:move","drag:end","resize:start","resize:move","resize:end"],setup:function(e,t){var n=t.emit,o=Symbol("vfm"),i=m(null),l=m(null),f=m(null),d=m(null),h=m(null),xe=m(null),ee=m(null),te=new en,I=m(!1),B=Dt({modal:!1,overlay:!1,resize:!1}),U=m(null),K=m(null),Se=m(!1),ne=m({}),V=m({}),ae=m(null),Ne=m(null),oe=ve,re=ve,dt=R(function(){return typeof e.overlayTransition=="string"?{name:e.overlayTransition}:g({},e.overlayTransition)}),ct=R(function(){return typeof e.transition=="string"?{name:e.transition}:g({},e.transition)}),vt=R(function(){return(e.hideOverlay||U.value===O.Leave)&&K.value===O.Leave}),Ee=R(function(){return e.zIndex===!1?e.zIndexAuto?+e.zIndexBase+2*(ee.value||0):!1:e.zIndex}),mt=R(function(){return g({},Ee.value!==!1&&{zIndex:Ee.value})}),pt=R(function(){var r=[V.value];return Array.isArray(e.contentStyle)?r.push.apply(r,N(e.contentStyle)):r.push(e.contentStyle),r});A(function(){return e.modelValue},function(r){if(Se.value){Se.value=!1;return}if(le(),!r){if(He("before-close",!0)){re("hide");return}Re()}}),A(function(){return e.lockScroll},Me),A(function(){return e.hideOverlay},function(r){e.modelValue&&!r&&(B.overlay=!0)}),A(function(){return e.attach},le),A(vt,function(r){r&&(I.value=!1,l.value.style.display="none")},{flush:"post"}),A(function(){return e.drag},function(r){I.value&&(r?Ue():Ke())}),A(function(){return e.resize},function(r){I.value&&(r?qe():We())}),A(function(){return e.keepChangedStyle},function(r){r||(V.value={})}),It(function(){e.api.modals.push(Te()),le()}),Pt(function(){var r;Re(),e.lockScroll&&l.value&&Ae(l.value),i==null||(r=i.value)===null||r===void 0||r.remove();var s=e.api.modals.findIndex(function(u){return u.uid===o});e.api.modals.splice(s,1)});function Te(){return{uid:o,props:e,emit:n,vfmContainer:l,vfmContent:f,vfmResize:d,vfmOverlayTransition:h,vfmTransition:xe,getAttachElement:Fe,modalStackIndex:ee,visibility:B,handleLockScroll:Me,$focusTrap:te,toggle:zt,params:ne}}function le(){if(e.modelValue){if(n("_before-open",q({type:"_before-open"})),He("before-open",!1)){re("show");return}var r=Fe();if(r||e.attach===!1){if(e.attach!==!1)if(i.value)r.appendChild(i.value);else{I.value=!0,ue(function(){le()});return}var s=e.api.openedModals.findIndex(function(u){return u.uid===o});s!==-1&&e.api.openedModals.splice(s,1),e.api.openedModals.push(Te()),ee.value=e.api.openedModals.length-1,Me(),e.api.openedModals.filter(function(u){return u.uid!==o}).forEach(function(u,p){u.getAttachElement()===r&&(u.modalStackIndex.value=p,!u.props.keepOverlay&&(u.visibility.overlay=!1))}),I.value=!0,yt()}else r!==!1&&console.warn("Unable to locate target ".concat(e.attach))}}function Re(){var r=e.api.openedModals.findIndex(function(u){return u.uid===o});if(r!==-1&&e.api.openedModals.splice(r,1),e.api.openedModals.length>0){var s=e.api.openedModals[e.api.openedModals.length-1];s.props.focusTrap&&s.$focusTrap.firstElement().focus(),(s.props.focusRetain||s.props.focusTrap)&&s.vfmContainer.value.focus(),!s.props.hideOverlay&&(s.visibility.overlay=!0)}e.drag&&Ke(),e.resize&&We(),ae.value=null,gt()}function Me(){e.modelValue&&ue(function(){e.lockScroll?vn(l.value,{reserveScrollBarGap:!0}):Ae(l.value)})}function Fe(){var r;return e.attach===!1?r=!1:typeof e.attach=="string"?window?r=window.document.querySelector(e.attach):r=!1:r=e.attach,r}function yt(){B.overlay=!0,B.modal=!0}function gt(){B.overlay=!1,B.modal=!1}function ht(){U.value=O.Entering}function bt(){U.value=O.Enter}function wt(){U.value=O.Leaving}function xt(){U.value=O.Leave}function St(){K.value=O.Entering}function Et(){K.value=O.Enter,(e.focusRetain||e.focusTrap)&&l.value.focus(),e.focusTrap&&te.enable(l.value),e.drag&&Ue(),e.resize&&qe(),n("_opened"),n("opened",q({type:"opened"})),oe("show")}function Tt(){K.value=O.Leaving,te.enabled()&&te.disable()}function Mt(){K.value=O.Leave,ee.value=null,e.lockScroll&&Ae(l.value),e.keepChangedStyle||(V.value={});var r=!1,s=q({type:"closed",stop:function(){r=!0}});n("_closed"),n("closed",s),oe("hide"),!r&&(ne.value={})}function Ct(r){Ne.value=r?.target}function Ot(){Ne.value===l.value&&ae.value!=="resize:move"&&(n("click-outside",q({type:"click-outside"})),e.clickToClose&&n("update:modelValue",!1))}function At(){I.value&&e.escToClose&&n("update:modelValue",!1)}function q(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return g({ref:Te()},r)}function He(r,s){var u=!1,p=q({type:r,stop:function(){u=!0}});return n(r,p),u?(Se.value=!0,ue(function(){n("update:modelValue",s)}),!0):!1}function Ce(r,s,u){ae.value="".concat(s,":").concat(u),n(ae.value,r)}function zt(r,s){var u=arguments;return new Promise(function(p,y){oe=function(v){p(v),oe=ve},re=function(v){y(v),re=ve};var P=typeof r=="boolean"?r:!e.modelValue;P&&u.length===2&&(ne.value=s),n("update:modelValue",P)})}function ie(r){r.stopPropagation();var s="resize",u="drag",p=r.target.getAttribute("direction"),y;if(p)y=s;else if(an(r,f.value,e.dragSelector))y=u;else return;Ce(r,y,"start");var P=at(r),b=l.value.getBoundingClientRect(),v=f.value.getBoundingClientRect(),_=window.getComputedStyle(f.value).position==="absolute",M={top:ot(V.value.top),left:ot(V.value.left)},c=(function(){if(e.fitParent){var k={absolute:function(){return{minTop:0,minLeft:0,maxTop:b.height-v.height,maxLeft:b.width-v.width}},relative:function(){return{minTop:M.top+b.top-v.top,minLeft:M.left+b.left-v.left,maxTop:M.top+b.bottom-v.bottom,maxLeft:M.left+b.right-v.right}}};return _?k.absolute():k.relative()}else return{}})(),w=y===s&&tn(document.body,"cursor",mn[p]),S=function(E){E.stopPropagation(),Ce(E,y,"move");var W=at(E),x={x:W.x-P.x,y:W.y-P.y};y===s&&(x=Bt(p,x,b,v,_));var L,j;_?(L=v.top-b.top+x.y,j=v.left-b.left+x.x):(L=M.top+x.y,j=M.left+x.x),y===u&&e.fitParent&&(L=fe(c.minTop,L,c.maxTop),j=fe(c.minLeft,j,c.maxLeft));var se=g(g(g({position:"relative",top:L+"px",left:j+"px",margin:"unset",touchAction:"none"},_&&{position:"absolute",transform:"unset",width:v.width+"px",height:v.height+"px"}),x.width&&{width:x.width+"px"}),x.height&&{height:x.height+"px"});V.value=g(g({},V.value),se)},C=function k(E){E.stopPropagation(),y===s&&w&&w(),setTimeout(function(){Ce(E,y,"end")}),ce("move",document,S),ce("up",document,k)};de("move",document,S),de("up",document,C)}function Ue(){de("down",f.value,ie),V.value.touchAction="none"}function Ke(){ce("down",f.value,ie)}function qe(){B.resize=!0,ue(function(){de("down",d.value,ie)})}function We(){ce("down",d.value,ie),B.resize=!1}function Bt(r,s,u,p,y){var P=function(c){var w,S=s[c.axis];S=e.fitParent?fe(c.min,S,c.max):S;var C=fe(c.minEdge,c.getEdge(S),c.maxEdge);return S=c.getOffsetAxis(C,y),w={},H(w,c.edgeName,C),H(w,c.axis,S),w},b=function(c,w,S,C){var k=p[w],E=u[c]-p[c],W=nn(w);return{axis:S,edgeName:w,min:C?E:-k,max:C?k:E,minEdge:e["min".concat(W)],maxEdge:e["max".concat(W)],getEdge:function(L){return p[w]-L*(C?1:-1)},getOffsetAxis:function(L,j){var se=p[w]-L;return j?C?se:0:(C?1:-1)*se/2}}},v={t:["top","height","y",!0],b:["bottom","height","y",!1],l:["left","width","x",!0],r:["right","width","x",!1]},_={x:0,y:0};return r.split("").forEach(function(M){var c=b.apply(void 0,N(v[M]));_=g(g({},_),P(c))}),_}return{root:i,vfmContainer:l,vfmContent:f,vfmResize:d,vfmOverlayTransition:h,vfmTransition:xe,computedOverlayTransition:dt,computedTransition:ct,visible:I,visibility:B,params:ne,calculateZIndex:Ee,bindStyle:mt,bindContentStyle:pt,beforeOverlayEnter:ht,afterOverlayEnter:bt,beforeOverlayLeave:wt,afterOverlayLeave:xt,beforeModalEnter:St,afterModalEnter:Et,beforeModalLeave:Tt,afterModalLeave:Mt,onMousedown:Ct,onMouseupContainer:Ot,onEsc:At}}},ze=_t();Lt("data-v-2836fdb5");var pn={key:0,ref:"vfmResize",class:"vfm__resize vfm--absolute vfm--inset vfm--prevent-none vfm--select-none vfm--touch-none"};Vt();var yn=ze(function(a,e,t,n,o,i){return t.ssr||n.visible?Ye((T(),z("div",{key:0,ref:"root",style:n.bindStyle,class:["vfm vfm--inset",[t.attach===!1?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":t.preventClick}]],onKeydown:e[4]||(e[4]=kt(function(){return n.onEsc&&n.onEsc.apply(n,arguments)},["esc"]))},[G(Ze,ye(n.computedOverlayTransition,{onBeforeEnter:n.beforeOverlayEnter,onAfterEnter:n.afterOverlayEnter,onBeforeLeave:n.beforeOverlayLeave,onAfterLeave:n.afterOverlayLeave}),{default:ze(function(){return[!t.hideOverlay&&n.visibility.overlay?(T(),z("div",{key:0,class:["vfm__overlay vfm--overlay vfm--absolute vfm--inset",t.overlayClass],style:t.overlayStyle},null,6)):me("v-if",!0)]}),_:1},16,["onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"]),G(Ze,ye(n.computedTransition,{onBeforeEnter:n.beforeModalEnter,onAfterEnter:n.afterModalEnter,onBeforeLeave:n.beforeModalLeave,onAfterLeave:n.afterModalLeave}),{default:ze(function(){return[Ye(G("div",{ref:"vfmContainer",class:["vfm__container vfm--absolute vfm--inset vfm--outline-none",t.classes],style:t.styles,"aria-expanded":n.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1",onMouseup:e[2]||(e[2]=Qe(function(){return n.onMouseupContainer&&n.onMouseupContainer.apply(n,arguments)},["self"])),onMousedown:e[3]||(e[3]=Qe(function(){return n.onMousedown&&n.onMousedown.apply(n,arguments)},["self"]))},[G("div",{ref:"vfmContent",class:["vfm__content",[t.contentClass,{"vfm--prevent-auto":t.preventClick}]],style:n.bindContentStyle,onMousedown:e[1]||(e[1]=function(l){return n.onMousedown(null)})},[Be(a.$slots,"default",{params:n.params,close:function(){return a.$emit("update:modelValue",!1)}}),n.visibility.resize&&n.visibility.modal?(T(),z("div",pn,[(T(!0),z(_e,null,Le(t.resizeDirections,function(l){return T(),z("div",{key:l,direction:l,class:["vfm--resize-".concat(l),"vfm--absolute vfm--prevent-auto"]},null,10,["direction"])}),128))],512)):me("v-if",!0)],38)],46,["aria-expanded"]),[[Ge,n.visibility.modal]])]}),_:3},16,["onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"])],38)),[[Ge,!t.ssr||n.visible]]):me("v-if",!0)});function gn(a,e){e===void 0&&(e={});var t=e.insertAt;if(!(typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",t==="top"&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=a:o.appendChild(document.createTextNode(a))}}var hn=`
.vfm--fixed[data-v-2836fdb5] {
  position: fixed;
}
.vfm--absolute[data-v-2836fdb5] {
  position: absolute;
}
.vfm--inset[data-v-2836fdb5] {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.vfm--overlay[data-v-2836fdb5] {
  background-color: rgba(0, 0, 0, 0.5);
}
.vfm--prevent-none[data-v-2836fdb5] {
  pointer-events: none;
}
.vfm--prevent-auto[data-v-2836fdb5] {
  pointer-events: auto;
}
.vfm--outline-none[data-v-2836fdb5]:focus {
  outline: none;
}
.vfm-enter-active[data-v-2836fdb5],
.vfm-leave-active[data-v-2836fdb5] {
  transition: opacity 0.2s;
}
.vfm-enter-from[data-v-2836fdb5],
.vfm-leave-to[data-v-2836fdb5] {
  opacity: 0;
}
.vfm--touch-none[data-v-2836fdb5] {
  touch-action: none;
}
.vfm--select-none[data-v-2836fdb5] {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.vfm--resize-tr[data-v-2836fdb5],
.vfm--resize-br[data-v-2836fdb5],
.vfm--resize-bl[data-v-2836fdb5],
.vfm--resize-tl[data-v-2836fdb5] {
  width: 12px;
  height: 12px;
  z-index: 10;
}
.vfm--resize-t[data-v-2836fdb5] {
  top: -6px;
  left: 0;
  width: 100%;
  height: 12px;
  cursor: ns-resize;
}
.vfm--resize-tr[data-v-2836fdb5] {
  top: -6px;
  right: -6px;
  cursor: nesw-resize;
}
.vfm--resize-r[data-v-2836fdb5] {
  top: 0;
  right: -6px;
  width: 12px;
  height: 100%;
  cursor: ew-resize;
}
.vfm--resize-br[data-v-2836fdb5] {
  bottom: -6px;
  right: -6px;
  cursor: nwse-resize;
}
.vfm--resize-b[data-v-2836fdb5] {
  bottom: -6px;
  left: 0;
  width: 100%;
  height: 12px;
  cursor: ns-resize;
}
.vfm--resize-bl[data-v-2836fdb5] {
  bottom: -6px;
  left: -6px;
  cursor: nesw-resize;
}
.vfm--resize-l[data-v-2836fdb5] {
  top: 0;
  left: -6px;
  width: 12px;
  height: 100%;
  cursor: ew-resize;
}
.vfm--resize-tl[data-v-2836fdb5] {
  top: -6px;
  left: -6px;
  cursor: nwse-resize;
}
`;gn(hn);we.render=yn;we.__scopeId="data-v-2836fdb5";we.__file="lib/VueFinalModal.vue";var De={props:{},methods:{slice:function(e){this.api.dynamicModals.splice(e,1)},beforeOpen:function(e,t,n){var o=this;return Ft(function*(){e.ref.params.value=t.params,yield o.$nextTick(),yield o.$nextTick(),t.value||(o.slice(n),t.reject("show"))})()},isString:function(e){return typeof e=="string"}}},bn={class:"modals-container"};function wn(a,e,t,n,o,i){return T(),z("div",bn,[(T(!0),z(_e,null,Le(a.api.dynamicModals,function(l,f){return T(),z(Je(l.component),ye({key:l.id},l.bind,{modelValue:l.value,"onUpdate:modelValue":function(h){return l.value=h}},$e(l.on),{on_closed:function(h){return i.slice(f)},on_beforeOpen:function(h){return i.beforeOpen(h,l)},on_opened:l.opened}),jt({_:2},[Le(l.slots,function(d,h){return{name:h,fn:lt(function(){return[me(" eslint-disable vue/no-v-html "),i.isString(d)?(T(),z("div",{key:0,innerHTML:d},null,8,["innerHTML"])):(T(),z(Je(d.component),ye({key:1},d.bind,$e(d.on||{})),null,16))]})}})]),1040,["modelValue","onUpdate:modelValue","on_closed","on_beforeOpen","on_opened"])}),128))])}De.render=wn;De.__file="lib/ModalsContainer.vue";function xn(){var a=null;return{show:function(t){for(var n=this,o=arguments.length,i=new Array(o>1?o-1:0),l=1;l<o;l++)i[l-1]=arguments[l];switch(X(t)){case"string":return this.toggle.apply(this,[t,!0].concat(i));case"object":return Promise.allSettled([new Promise(function(f,d){var h={value:!0,id:Symbol("dynamicModal"),component:a,bind:{},slots:{},on:{},params:i[0],reject:d,opened:function(){f("show")}};n.dynamicModals.push(Xe(Object.assign(h,t)))})])}},hide:function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return this.toggle(n,!1)},hideAll:function(){return this.hide.apply(this,N(this.openedModals.map(function(t){return t.props.name})))},toggle:function(t){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];var l=Array.isArray(t)?this.get.apply(this,N(t)):this.get(t);return Promise.allSettled(l.map(function(f){return f.toggle.apply(f,o)}))},get:function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return this.modals.filter(function(i){return n.includes(i.props.name)})},dynamicModals:Xe([]),openedModals:[],modals:[],_setDefaultModal:function(t){a=t}}}function ft(a,e){var t=g(g({},a),{},{props:g({},a.props)});return Object.assign(t.props,{api:{type:Object,default:function(){return e}}}),t}function Sn(a){var e=ft(we,a);return a._setDefaultModal(e),e}function En(a){return ft(De,a)}var Tn="$vfm",Mn="VueFinalModal",Cn="ModalsContainer",On=function(){var e,t=xn();return e={},H(e,Tn,t),H(e,Mn,Sn(t)),H(e,Cn,En(t)),e},Ie=On();Ie.$vfm;var An=Ie.VueFinalModal;Ie.ModalsContainer;const Pe={__name:"Modal",props:{full:{type:Boolean,default:!1},classes:{type:String,default:""},modelValue:{type:Boolean,required:!0}},emits:["update:modelValue"],setup(a,{emit:e}){const t=a,n=e,o=m(t.modelValue);return A(()=>t.modelValue,i=>{o.value=i}),A(o,i=>{n("update:modelValue",i)}),(i,l)=>(T(),Nt(_e,null,[G(Rt(An),{modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=f=>o.value=f),class:Oe(a.classes),classes:{"!px-0":a.full,"modal__container flex justify-center items-center px-5":!0},"content-class":{"w-full max-w-none h-full max-h-none":a.full,"max-w-xl max-h-96 rounded":!a.full,"modal__content relative w-full overflow-hidden bg-white overflow-y-auto":!0}},{default:lt(()=>[Y("button",{class:Oe(["absolute cursor-pointer py-2.5",{"top-7 right-5":a.full,"top-3 right-3":!a.full}]),onClick:l[0]||(l[0]=f=>o.value=!1)},[...l[3]||(l[3]=[Y("span",{class:"relative block h-0.5 w-6 bg-transparent"},[Y("span",{class:"absolute left-0 h-full w-full origin-center rotate-45 bg-indigo transition-all duration-200 ease-in-out"}),Y("span",{class:"absolute left-0 h-full w-full origin-center -rotate-45 bg-indigo transition-all duration-200 ease-in-out"})],-1)])],2),Be(i.$slots,"content")]),_:3},8,["modelValue","class","classes","content-class"]),Y("button",{class:Oe(["group active text-left",{"[&>span]:text-indigo-1000 [&>span>svg]:fill-indigo-1000":o.value}]),onClick:l[2]||(l[2]=f=>o.value=!0)},[Be(i.$slots,"button")],2)],64))}};Pe.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},props:[{name:"full",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"classes",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"modelValue",type:{name:"boolean"},required:!0}],events:[{name:"update:modelValue"}],slots:[{name:"content"},{name:"button"}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Modal/Modal.vue"]};const Ln={title:"Core Components/Modal",component:Pe,argTypes:{full:{control:"boolean",description:"Toggle full-screen mode"},modelValue:{control:"boolean",description:"Controls visibility (v-model)"},classes:{control:"text",description:"Custom classes for the wrapper"},slotContent:{control:"text",name:"Content Slot",description:"Text inside the modal"},slotButton:{control:"text",name:"Button Slot",description:"Text for the trigger button"}}},je=a=>({components:{Modal:Pe},setup(){return{args:a}},template:`
    <div class="p-10 flex justify-center">
      <Modal 
        v-bind="args" 
        v-model="args.modelValue"
      >
        <template #button>
          <span class="px-6 py-3 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700 transition">
            {{ args.slotButton }}
          </span>
        </template>

        <template #content>
          <div class="p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Modal Title</h2>
            <p class="text-gray-600 leading-relaxed">
              {{ args.slotContent }}
            </p>
            <div class="mt-6 flex justify-end">
              <button 
                class="text-indigo-600 hover:text-indigo-800 font-semibold"
                @click="args.modelValue = false"
              >
                Close (Custom Action)
              </button>
            </div>
          </div>
        </template>
      </Modal>
    </div>
  `}),F=je.bind({});F.args={modelValue:!1,full:!1,slotButton:"Open Modal",slotContent:"This is a standard modal dialog. It has a fixed max-width and rounded corners."};const Z=je.bind({});Z.args={modelValue:!1,full:!0,slotButton:"Open Full Screen",slotContent:"This modal covers the entire viewport because the 'full' prop is set to true."};const Q=je.bind({});Q.args={...F.args,modelValue:!0,slotButton:"I am already open"};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`args => ({
  components: {
    Modal
  },
  setup() {
    return {
      args
    };
  },
  // We use v-model="args.modelValue" to sync the open state with the Controls panel
  template: \`
    <div class="p-10 flex justify-center">
      <Modal 
        v-bind="args" 
        v-model="args.modelValue"
      >
        <template #button>
          <span class="px-6 py-3 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700 transition">
            {{ args.slotButton }}
          </span>
        </template>

        <template #content>
          <div class="p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Modal Title</h2>
            <p class="text-gray-600 leading-relaxed">
              {{ args.slotContent }}
            </p>
            <div class="mt-6 flex justify-end">
              <button 
                class="text-indigo-600 hover:text-indigo-800 font-semibold"
                @click="args.modelValue = false"
              >
                Close (Custom Action)
              </button>
            </div>
          </div>
        </template>
      </Modal>
    </div>
  \`
})`,...F.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`args => ({
  components: {
    Modal
  },
  setup() {
    return {
      args
    };
  },
  // We use v-model="args.modelValue" to sync the open state with the Controls panel
  template: \`
    <div class="p-10 flex justify-center">
      <Modal 
        v-bind="args" 
        v-model="args.modelValue"
      >
        <template #button>
          <span class="px-6 py-3 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700 transition">
            {{ args.slotButton }}
          </span>
        </template>

        <template #content>
          <div class="p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Modal Title</h2>
            <p class="text-gray-600 leading-relaxed">
              {{ args.slotContent }}
            </p>
            <div class="mt-6 flex justify-end">
              <button 
                class="text-indigo-600 hover:text-indigo-800 font-semibold"
                @click="args.modelValue = false"
              >
                Close (Custom Action)
              </button>
            </div>
          </div>
        </template>
      </Modal>
    </div>
  \`
})`,...Z.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`args => ({
  components: {
    Modal
  },
  setup() {
    return {
      args
    };
  },
  // We use v-model="args.modelValue" to sync the open state with the Controls panel
  template: \`
    <div class="p-10 flex justify-center">
      <Modal 
        v-bind="args" 
        v-model="args.modelValue"
      >
        <template #button>
          <span class="px-6 py-3 bg-indigo-600 text-white font-bold rounded hover:bg-indigo-700 transition">
            {{ args.slotButton }}
          </span>
        </template>

        <template #content>
          <div class="p-8">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Modal Title</h2>
            <p class="text-gray-600 leading-relaxed">
              {{ args.slotContent }}
            </p>
            <div class="mt-6 flex justify-end">
              <button 
                class="text-indigo-600 hover:text-indigo-800 font-semibold"
                @click="args.modelValue = false"
              >
                Close (Custom Action)
              </button>
            </div>
          </div>
        </template>
      </Modal>
    </div>
  \`
})`,...Q.parameters?.docs?.source}}};const Vn=["Default","FullScreen","OpenByDefault"];export{F as Default,Z as FullScreen,Q as OpenByDefault,Vn as __namedExportsOrder,Ln as default};
