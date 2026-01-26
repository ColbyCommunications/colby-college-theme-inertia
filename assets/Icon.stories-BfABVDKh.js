const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./chevron-D6cK5PFw.js","./iframe-BhW3MJ0c.js","./preload-helper-PPVm8Dsz.js","./iframe-3AuWeRoO.css","./clipboard-CpJN08wU.js","./contact-colby-DOz6BPH9.js","./email-DSbeQd8p.js","./facebook-C9xb2kny.js","./fax-XU8MyX2V.js","./home-BnbC_aC7.js","./instagram-DNOTP6a_.js","./linkedin-BM7Vje0J.js","./location-wJhU6wXn.js","./mycolby-B9uDycJ3.js","./phone-BCtn1nte.js","./play-BwiivlaD.js","./search-DDRIfJ4T.js","./small-arrow-AZ4vq0ZA.js","./support-colby-Bntf21DQ.js","./tiktok-EsfAgO7q.js","./x-BhTrfNBz.js","./youtube-krxkZdCV.js"])))=>i.map(i=>d[i]);
import{u as _,p as g,e as v,f as u,s as l,o as d}from"./iframe-BhW3MJ0c.js";import{_ as e}from"./preload-helper-PPVm8Dsz.js";const c=Object.assign({"/resources/images/svg/icons/chevron.svg":()=>e(()=>import("./chevron-D6cK5PFw.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"/resources/images/svg/icons/clipboard.svg":()=>e(()=>import("./clipboard-CpJN08wU.js"),__vite__mapDeps([4,1,2,3]),import.meta.url),"/resources/images/svg/icons/contact-colby.svg":()=>e(()=>import("./contact-colby-DOz6BPH9.js"),__vite__mapDeps([5,1,2,3]),import.meta.url),"/resources/images/svg/icons/email.svg":()=>e(()=>import("./email-DSbeQd8p.js"),__vite__mapDeps([6,1,2,3]),import.meta.url),"/resources/images/svg/icons/facebook.svg":()=>e(()=>import("./facebook-C9xb2kny.js"),__vite__mapDeps([7,1,2,3]),import.meta.url),"/resources/images/svg/icons/fax.svg":()=>e(()=>import("./fax-XU8MyX2V.js"),__vite__mapDeps([8,1,2,3]),import.meta.url),"/resources/images/svg/icons/home.svg":()=>e(()=>import("./home-BnbC_aC7.js"),__vite__mapDeps([9,1,2,3]),import.meta.url),"/resources/images/svg/icons/instagram.svg":()=>e(()=>import("./instagram-DNOTP6a_.js"),__vite__mapDeps([10,1,2,3]),import.meta.url),"/resources/images/svg/icons/linkedin.svg":()=>e(()=>import("./linkedin-BM7Vje0J.js"),__vite__mapDeps([11,1,2,3]),import.meta.url),"/resources/images/svg/icons/location.svg":()=>e(()=>import("./location-wJhU6wXn.js"),__vite__mapDeps([12,1,2,3]),import.meta.url),"/resources/images/svg/icons/mycolby.svg":()=>e(()=>import("./mycolby-B9uDycJ3.js"),__vite__mapDeps([13,1,2,3]),import.meta.url),"/resources/images/svg/icons/phone.svg":()=>e(()=>import("./phone-BCtn1nte.js"),__vite__mapDeps([14,1,2,3]),import.meta.url),"/resources/images/svg/icons/play.svg":()=>e(()=>import("./play-BwiivlaD.js"),__vite__mapDeps([15,1,2,3]),import.meta.url),"/resources/images/svg/icons/search.svg":()=>e(()=>import("./search-DDRIfJ4T.js"),__vite__mapDeps([16,1,2,3]),import.meta.url),"/resources/images/svg/icons/small-arrow.svg":()=>e(()=>import("./small-arrow-AZ4vq0ZA.js"),__vite__mapDeps([17,1,2,3]),import.meta.url),"/resources/images/svg/icons/support-colby.svg":()=>e(()=>import("./support-colby-Bntf21DQ.js"),__vite__mapDeps([18,1,2,3]),import.meta.url),"/resources/images/svg/icons/tiktok.svg":()=>e(()=>import("./tiktok-EsfAgO7q.js"),__vite__mapDeps([19,1,2,3]),import.meta.url),"/resources/images/svg/icons/x.svg":()=>e(()=>import("./x-BhTrfNBz.js"),__vite__mapDeps([20,1,2,3]),import.meta.url),"/resources/images/svg/icons/youtube.svg":()=>e(()=>import("./youtube-krxkZdCV.js"),__vite__mapDeps([21,1,2,3]),import.meta.url)}),n={__name:"Icon",props:{name:String},setup(o){const p=o,r=_(null);return g(()=>p.name,async s=>{if(!s){r.value=null;return}const a=s.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),m=Object.keys(c).find(t=>t.split("/").pop().replace(".svg","")===a);if(m){const t=await c[m]();r.value=t.default}else r.value=null},{immediate:!0}),(s,a)=>r.value?(d(),v(l(r.value),{key:0})):u("",!0)}};n.__docgenInfo={exportName:"default",displayName:"Icon",description:"",tags:{},props:[{name:"name",type:{name:"string"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Icon/Icon.vue"]};const I={title:"Core Components/Icons",component:n},i=o=>({components:{Icon:n},setup(){return{args:o}},template:`
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
