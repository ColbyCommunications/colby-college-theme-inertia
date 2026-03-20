import{a1 as w,a2 as x,o as r,c as i,D as l,g as k,Q as o,a as L,n as B,h as C,A as m}from"./iframe-BtxlOaJS.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const b={__name:"GlobalLoader",props:{loading:{type:Boolean,default:!1},removeChildren:{type:Boolean,default:!1}},setup(e){return w(x(e,"loading"),{delayStart:300,minDuration:1e3,className:"loader",hiddenClassName:"hidden"}),(n,a)=>(r(),i("span",null,[e.loading&&e.removeChildren?k("",!0):l(n.$slots,"default",{key:0})]))}};b.__docgenInfo=Object.assign({displayName:b.name??b.__name},{exportName:"default",displayName:"GlobalLoader",description:"",tags:{},props:[{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"removeChildren",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Loader/GlobalLoader.vue"]});const N={key:0},I={key:1,class:"wrapper","aria-busy":!0},$={key:0,class:"content"},T={key:1,class:"overlay","aria-hidden":"true"},v={__name:"InlineLoader",props:{loading:{type:Boolean,required:!0},removeChildren:{type:Boolean,required:!0}},setup(e){const s=e,{loading:n,removeChildren:a}=s;return(d,t)=>o(n)?(r(),i("div",I,[o(a)?k("",!0):(r(),i("div",$,[l(d.$slots,"default",{},void 0,!0)])),o(a)?k("",!0):(r(),i("div",T)),t[0]||(t[0]=L("div",{class:"spinnerCenter","aria-hidden":"true"},[L("div",{class:"inlineSpinner"})],-1))])):(r(),i("span",N,[l(d.$slots,"default",{},void 0,!0)]))}},G=S(v,[["__scopeId","data-v-030e28cd"]]);v.__docgenInfo=Object.assign({displayName:v.name??v.__name},{exportName:"default",displayName:"InlineLoader",description:"",tags:{},props:[{name:"loading",type:{name:"boolean"},required:!0},{name:"removeChildren",type:{name:"boolean"},required:!0}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Loader/InlineLoader.vue"]});const _={__name:"SkeletonLoader",props:{loading:{type:Boolean,required:!0}},setup(e){const s=e,{loading:n}=s;return(a,d)=>(r(),i("div",{class:B([o(n)?"skeletonLoading":""])},[o(n)?l(a.$slots,"skeleton",{key:1}):l(a.$slots,"default",{key:0})],2))}};_.__docgenInfo=Object.assign({displayName:_.name??_.__name},{exportName:"default",displayName:"SkeletonLoader",description:"",tags:{},props:[{name:"loading",type:{name:"boolean"},required:!0}],slots:[{name:"default"},{name:"skeleton"}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Loader/SkeletonLoader.vue"]});const p={__name:"Loader",props:{loading:{type:Boolean,default:!1},type:{type:String,default:"global"},removeChildren:{type:Boolean,default:!1}},setup(e){const s=e,{loading:n,type:a,removeChildren:d}=s;return(t,V)=>o(a)==="global"?(r(),C(b,{key:0,loading:o(n),"remove-children":o(d)},{default:m(()=>[l(t.$slots,"default")]),_:3},8,["loading","remove-children"])):o(a)==="inline"?(r(),C(G,{key:1,loading:o(n),"remove-children":o(d)},{default:m(()=>[l(t.$slots,"default")]),_:3},8,["loading","remove-children"])):o(a)==="skeleton"?(r(),C(_,{key:2,loading:o(n)},{skeleton:m(()=>[l(t.$slots,"skeleton")]),default:m(()=>[l(t.$slots,"default")]),_:3},8,["loading"])):k("",!0)}};p.__docgenInfo=Object.assign({displayName:p.name??p.__name},{exportName:"default",displayName:"Loader",description:"",tags:{},props:[{name:"loading",description:"Show loading spinner or not?",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"type",description:"Type of the loader. Options: 'global', 'inline', 'skeleton'",type:{name:"string"},defaultValue:{func:!1,value:"'global'"}},{name:"removeChildren",description:"Remove children from the background or not?",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"},{name:"skeleton"}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Loader/Loader.vue"]});const j=()=>{if(typeof window>"u")return;window.colby=window.colby||{},window.colby.components=window.colby.components||{},window.colby.components["colby-loader"]=window.colby.components["colby-loader"]||{};const e=window.colby.components["colby-loader"];e.ids=[],e.spinnerStarted=0},F={title:"Core Components/Loader (wrapper)",component:p,decorators:[()=>(j(),{template:"<story />"})],argTypes:{type:{control:{type:"inline-radio"},options:["global","inline","skeleton"]},loading:{control:"boolean"},removeChildren:{control:"boolean"}}},c=e=>({components:{Loader:p},setup(){return{args:e}},template:`
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
  `}),u={render:c,args:{type:"global",loading:!0,removeChildren:!1}},g={render:c,args:{type:"global",loading:!0,removeChildren:!0}},y={render:c,args:{type:"inline",loading:!0,removeChildren:!1}},f={render:c,args:{type:"inline",loading:!0,removeChildren:!0}},h={render:c,args:{type:"skeleton",loading:!0,removeChildren:!1}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: BaseTemplate,
  args: {
    type: 'global',
    loading: true,
    removeChildren: false
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: BaseTemplate,
  args: {
    type: 'global',
    loading: true,
    removeChildren: true
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: BaseTemplate,
  args: {
    type: 'inline',
    loading: true,
    removeChildren: false
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: BaseTemplate,
  args: {
    type: 'inline',
    loading: true,
    removeChildren: true
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: BaseTemplate,
  args: {
    type: 'skeleton',
    loading: true,
    removeChildren: false
  }
}`,...h.parameters?.docs?.source}}};const D=["GlobalLoading","GlobalLoadingRemoveChildren","Inline","InlineRemoveChildren","Skeleton"];export{u as GlobalLoading,g as GlobalLoadingRemoveChildren,y as Inline,f as InlineRemoveChildren,h as Skeleton,D as __namedExportsOrder,F as default};
