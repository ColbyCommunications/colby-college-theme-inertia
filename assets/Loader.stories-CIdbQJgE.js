import{P as L,Q as x,d as a,c as i,C as l,q as h,O as o,a as k,n as B,h as b,w as c}from"./iframe-BfrXP-2i.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const _={__name:"GlobalLoader",props:{loading:{type:Boolean,default:!1},removeChildren:{type:Boolean,default:!1}},setup(e){return L(x(e,"loading"),{delayStart:300,minDuration:1e3,className:"loader",hiddenClassName:"hidden"}),(n,r)=>(a(),i("span",null,[e.loading&&e.removeChildren?h("",!0):l(n.$slots,"default",{key:0})]))}};_.__docgenInfo={exportName:"default",displayName:"GlobalLoader",description:"",tags:{},props:[{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"removeChildren",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Loader/GlobalLoader.vue"]};const I={key:0},N={key:1,class:"wrapper","aria-busy":!0},$={key:0,class:"content"},T={key:1,class:"overlay","aria-hidden":"true"},C={__name:"InlineLoader",props:{loading:{type:Boolean,required:!0},removeChildren:{type:Boolean,required:!0}},setup(e){const s=e,{loading:n,removeChildren:r}=s;return(d,t)=>o(n)?(a(),i("div",N,[o(r)?h("",!0):(a(),i("div",$,[l(d.$slots,"default",{},void 0,!0)])),o(r)?h("",!0):(a(),i("div",T)),t[0]||(t[0]=k("div",{class:"spinnerCenter","aria-hidden":"true"},[k("div",{class:"inlineSpinner"})],-1))])):(a(),i("span",I,[l(d.$slots,"default",{},void 0,!0)]))}},G=S(C,[["__scopeId","data-v-030e28cd"]]);C.__docgenInfo={exportName:"default",displayName:"InlineLoader",description:"",tags:{},props:[{name:"loading",type:{name:"boolean"},required:!0},{name:"removeChildren",type:{name:"boolean"},required:!0}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Loader/InlineLoader.vue"]};const w={__name:"SkeletonLoader",props:{loading:{type:Boolean,required:!0}},setup(e){const s=e,{loading:n}=s;return(r,d)=>(a(),i("div",{class:B([o(n)?"skeletonLoading":""])},[o(n)?l(r.$slots,"skeleton",{key:1}):l(r.$slots,"default",{key:0})],2))}};w.__docgenInfo={exportName:"default",displayName:"SkeletonLoader",description:"",tags:{},props:[{name:"loading",type:{name:"boolean"},required:!0}],slots:[{name:"default"},{name:"skeleton"}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Loader/SkeletonLoader.vue"]};const v={__name:"Loader",props:{loading:{type:Boolean,default:!1},type:{type:String,default:"global"},removeChildren:{type:Boolean,default:!1}},setup(e){const s=e,{loading:n,type:r,removeChildren:d}=s;return(t,V)=>o(r)==="global"?(a(),b(_,{key:0,loading:o(n),"remove-children":o(d)},{default:c(()=>[l(t.$slots,"default")]),_:3},8,["loading","remove-children"])):o(r)==="inline"?(a(),b(G,{key:1,loading:o(n),"remove-children":o(d)},{default:c(()=>[l(t.$slots,"default")]),_:3},8,["loading","remove-children"])):o(r)==="skeleton"?(a(),b(w,{key:2,loading:o(n)},{skeleton:c(()=>[l(t.$slots,"skeleton")]),default:c(()=>[l(t.$slots,"default")]),_:3},8,["loading"])):h("",!0)}};v.__docgenInfo={exportName:"default",displayName:"Loader",description:"",tags:{},props:[{name:"loading",description:"Show loading spinner or not?",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"type",description:"Type of the loader. Options: 'global', 'inline', 'skeleton'",type:{name:"string"},defaultValue:{func:!1,value:"'global'"}},{name:"removeChildren",description:"Remove children from the background or not?",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"},{name:"skeleton"}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Loader/Loader.vue"]};const q=()=>{if(typeof window>"u")return;window.colby=window.colby||{},window.colby.components=window.colby.components||{},window.colby.components["colby-loader"]=window.colby.components["colby-loader"]||{};const e=window.colby.components["colby-loader"];e.ids=[],e.spinnerStarted=0},O={title:"Core Components/Loader (wrapper)",component:v,decorators:[()=>(q(),{template:"<story />"})],argTypes:{type:{control:{type:"inline-radio"},options:["global","inline","skeleton"]},loading:{control:"boolean"},removeChildren:{control:"boolean"}}},p=e=>({components:{Loader:v},setup(){return{args:e}},template:`
    <div style="padding: 24px; max-width: 720px;">
      <Loader v-bind="args">
        <template v-if="args.type === 'skeleton'" #skeleton>
          <div style="display:grid; gap: 12px;">
            <div style="height: 14px; width: 60%; background: #e5e7eb; border-radius: 2px;"></div>
            <div style="height: 14px; width: 90%; background: #e5e7eb; border-radius: 2px;"></div>
            <div style="height: 120px; width: 100%; background: #e5e7eb; border-radius: 2px;"></div>
          </div>
        </template>

        <div style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px;">
          <div style="font-weight: 600; margin-bottom: 8px;">Content</div>
          <p style="margin:0; line-height: 1.5;">
            This is the slot content rendered by the Loader component.
            Toggle <code>loading</code> to see each mode.
          </p>
        </div>
      </Loader>
    </div>
  `}),u={render:p,args:{type:"global",loading:!0,removeChildren:!1}},m={render:p,args:{type:"global",loading:!0,removeChildren:!0}},g={render:p,args:{type:"inline",loading:!0,removeChildren:!1}},y={render:p,args:{type:"inline",loading:!0,removeChildren:!0}},f={render:p,args:{type:"skeleton",loading:!0,removeChildren:!1}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: BaseTemplate,
  args: {
    type: 'global',
    loading: true,
    removeChildren: false
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: BaseTemplate,
  args: {
    type: 'global',
    loading: true,
    removeChildren: true
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: BaseTemplate,
  args: {
    type: 'inline',
    loading: true,
    removeChildren: false
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: BaseTemplate,
  args: {
    type: 'inline',
    loading: true,
    removeChildren: true
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: BaseTemplate,
  args: {
    type: 'skeleton',
    loading: true,
    removeChildren: false
  }
}`,...f.parameters?.docs?.source}}};const E=["GlobalLoading","GlobalLoadingRemoveChildren","Inline","InlineRemoveChildren","Skeleton"];export{u as GlobalLoading,m as GlobalLoadingRemoveChildren,g as Inline,y as InlineRemoveChildren,f as Skeleton,E as __namedExportsOrder,O as default};
