import{l as m,c as l,a as t,e as o,F as g,b as p,d as r,t as f}from"./iframe-BI_3ezP0.js";import{_ as h}from"./Context-rCALFtqQ.js";import{_ as b}from"./Picture-DioVXFI5.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-8rV2ZAMN.js";import"./ButtonGroup-DeTJD12j.js";import"./Button-e0IECFmJ.js";const _={class:"related-section"},y={class:"related-section__inner grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},v={class:"related-section__context col-span-12 md:col-span-4 mb-8 md:mb-0"},x=["href"],S={class:"z-10 absolute flex items-end top-0 left-0 w-full h-full p-6",style:{background:"linear-gradient(180deg, rgba(9, 21, 46, 0) 0%, rgba(9, 21, 46, 0.3) 25%)"}},k={class:"font-body font-bold text-18 leading-120 text-white"},R={class:"media-aside___image pb-[100%] md:pb-[54.54545454545455%]"},i={__name:"RelatedSection",props:{subheading:{type:String,default:""},heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},items:{type:Array,default:()=>[]}},setup(a){const c=a,d=m(()=>c.buttons.map(n=>({button:{url:n.url,title:n.title,target:n.target||""}})));return(n,w)=>(r(),l("div",_,[t("div",y,[t("div",v,[o(h,{size:"medium",subheading:a.subheading,heading:a.heading,paragraph:a.paragraph,buttons:{items:d.value}},null,8,["subheading","heading","paragraph","buttons"])]),(r(!0),l(g,null,p(a.items,(e,u)=>(r(),l("div",{key:u,class:"related-section__secondary col-span-6 md:col-span-4"},[t("a",{class:"related-section__thumbnail group relative block overflow-hidden",href:e.link.url},[t("div",S,[t("h3",k,f(e.link.title),1)]),t("div",R,[o(b,{class:"absolute w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out",src:e.image.src,srcset:e.image.srcset,"size-desktop":e.image.sizes?.Rectangle,"size-mobile":e.image.sizes?.Rectangle,alt:e.image.alt},null,8,["src","srcset","size-desktop","size-mobile","alt"])])],8,x)]))),128))])]))}};i.__docgenInfo={exportName:"default",displayName:"RelatedSection",description:"",tags:{},props:[{name:"subheading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/RelatedSection/RelatedSection.vue"]};const P={title:"Core Components/Related Section",component:i,tags:["autodocs"]},s={name:"Default",args:{subheading:"Explore",heading:"Related Programs",paragraph:"Discover more about our academic offerings and campus life.",buttons:[{url:"#",title:"View All Programs"}],items:[{link:{url:"#",title:"Environmental Studies"},image:{src:"https://placehold.co/600x400",srcset:"",alt:"Environmental Studies",sizes:{Rectangle:"600w"}}},{link:{url:"#",title:"Biology Department"},image:{src:"https://placehold.co/600x400",srcset:"",alt:"Biology Department",sizes:{Rectangle:"600w"}}}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    subheading: "Explore",
    heading: "Related Programs",
    paragraph: "Discover more about our academic offerings and campus life.",
    buttons: [{
      url: "#",
      title: "View All Programs"
    }],
    items: [{
      link: {
        url: "#",
        title: "Environmental Studies"
      },
      image: {
        src: "https://placehold.co/600x400",
        srcset: "",
        alt: "Environmental Studies",
        sizes: {
          Rectangle: "600w"
        }
      }
    }, {
      link: {
        url: "#",
        title: "Biology Department"
      },
      image: {
        src: "https://placehold.co/600x400",
        srcset: "",
        alt: "Biology Department",
        sizes: {
          Rectangle: "600w"
        }
      }
    }]
  }
}`,...s.parameters?.docs?.source}}};const F=["Default"];export{s as Default,F as __namedExportsOrder,P as default};
