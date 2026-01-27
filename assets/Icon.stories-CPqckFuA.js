const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./chevron-BF0LXi-E.js","./iframe-D_FtpVq-.js","./preload-helper-PPVm8Dsz.js","./iframe-CRWbVwOY.css","./clipboard-Duia-Llb.js","./contact-colby-BDNukVjN.js","./email-Bd7GuSDe.js","./facebook-DlguTyZO.js","./fax-CY6vem7K.js","./home-Bp8ZwCNJ.js","./instagram-DjhGuR19.js","./linkedin-CYyhExge.js","./location-DdDP7YIP.js","./mycolby-DGsS9rXY.js","./phone-BugsPwWf.js","./play-B-Y2Denv.js","./search-DT3MpZV-.js","./small-arrow-T5nmz0ro.js","./support-colby-CAxODO6J.js","./tiktok-JYnN6lSd.js","./x-Dqvu8oI5.js","./youtube-AGVfZ4NR.js"])))=>i.map(i=>d[i]);
import{u as _,p as g,e as v,f as u,s as l,o as d}from"./iframe-D_FtpVq-.js";import{_ as e}from"./preload-helper-PPVm8Dsz.js";const c=Object.assign({"/resources/images/svg/icons/chevron.svg":()=>e(()=>import("./chevron-BF0LXi-E.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"/resources/images/svg/icons/clipboard.svg":()=>e(()=>import("./clipboard-Duia-Llb.js"),__vite__mapDeps([4,1,2,3]),import.meta.url),"/resources/images/svg/icons/contact-colby.svg":()=>e(()=>import("./contact-colby-BDNukVjN.js"),__vite__mapDeps([5,1,2,3]),import.meta.url),"/resources/images/svg/icons/email.svg":()=>e(()=>import("./email-Bd7GuSDe.js"),__vite__mapDeps([6,1,2,3]),import.meta.url),"/resources/images/svg/icons/facebook.svg":()=>e(()=>import("./facebook-DlguTyZO.js"),__vite__mapDeps([7,1,2,3]),import.meta.url),"/resources/images/svg/icons/fax.svg":()=>e(()=>import("./fax-CY6vem7K.js"),__vite__mapDeps([8,1,2,3]),import.meta.url),"/resources/images/svg/icons/home.svg":()=>e(()=>import("./home-Bp8ZwCNJ.js"),__vite__mapDeps([9,1,2,3]),import.meta.url),"/resources/images/svg/icons/instagram.svg":()=>e(()=>import("./instagram-DjhGuR19.js"),__vite__mapDeps([10,1,2,3]),import.meta.url),"/resources/images/svg/icons/linkedin.svg":()=>e(()=>import("./linkedin-CYyhExge.js"),__vite__mapDeps([11,1,2,3]),import.meta.url),"/resources/images/svg/icons/location.svg":()=>e(()=>import("./location-DdDP7YIP.js"),__vite__mapDeps([12,1,2,3]),import.meta.url),"/resources/images/svg/icons/mycolby.svg":()=>e(()=>import("./mycolby-DGsS9rXY.js"),__vite__mapDeps([13,1,2,3]),import.meta.url),"/resources/images/svg/icons/phone.svg":()=>e(()=>import("./phone-BugsPwWf.js"),__vite__mapDeps([14,1,2,3]),import.meta.url),"/resources/images/svg/icons/play.svg":()=>e(()=>import("./play-B-Y2Denv.js"),__vite__mapDeps([15,1,2,3]),import.meta.url),"/resources/images/svg/icons/search.svg":()=>e(()=>import("./search-DT3MpZV-.js"),__vite__mapDeps([16,1,2,3]),import.meta.url),"/resources/images/svg/icons/small-arrow.svg":()=>e(()=>import("./small-arrow-T5nmz0ro.js"),__vite__mapDeps([17,1,2,3]),import.meta.url),"/resources/images/svg/icons/support-colby.svg":()=>e(()=>import("./support-colby-CAxODO6J.js"),__vite__mapDeps([18,1,2,3]),import.meta.url),"/resources/images/svg/icons/tiktok.svg":()=>e(()=>import("./tiktok-JYnN6lSd.js"),__vite__mapDeps([19,1,2,3]),import.meta.url),"/resources/images/svg/icons/x.svg":()=>e(()=>import("./x-Dqvu8oI5.js"),__vite__mapDeps([20,1,2,3]),import.meta.url),"/resources/images/svg/icons/youtube.svg":()=>e(()=>import("./youtube-AGVfZ4NR.js"),__vite__mapDeps([21,1,2,3]),import.meta.url)}),n={__name:"Icon",props:{name:String},setup(o){const p=o,r=_(null);return g(()=>p.name,async s=>{if(!s){r.value=null;return}const a=s.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),m=Object.keys(c).find(t=>t.split("/").pop().replace(".svg","")===a);if(m){const t=await c[m]();r.value=t.default}else r.value=null},{immediate:!0}),(s,a)=>r.value?(d(),v(l(r.value),{key:0})):u("",!0)}};n.__docgenInfo={exportName:"default",displayName:"Icon",description:"",tags:{},props:[{name:"name",type:{name:"string"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Icon/Icon.vue"]};const I={title:"Core Components/Icons",component:n},i=o=>({components:{Icon:n},setup(){return{args:o}},template:`
      <div style="display: flex;">
          <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'fax'" /></div>
          <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'phone'" /></div>
          <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'instagram'" /></div>
          <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'email'" /></div>
          <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'chevron'" /></div>
      </div>
    `});i.args={name:"fax"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => ({
  components: {
    Icon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <div style="display: flex;">
          <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'fax'" /></div>
          <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'phone'" /></div>
          <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'instagram'" /></div>
          <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'email'" /></div>
          <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'chevron'" /></div>
      </div>
    \`
})`,...i.parameters?.docs?.source}}};const y=["Primary"];export{i as Primary,y as __namedExportsOrder,I as default};
