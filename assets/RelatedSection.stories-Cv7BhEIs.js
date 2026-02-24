import{c as l,a,e as i,F as g,r as p,l as h,d as o,t as f}from"./iframe-BfBFAde5.js";import{_}from"./Context-Dp7yX81d.js";import{_ as y}from"./Picture-CxKtrm5G.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";const b={class:"related-section"},x={class:"related-section__inner grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},v={class:"related-section__context col-span-12 md:col-span-4 mb-8 md:mb-0"},w=["href"],B={class:"z-10 absolute flex items-end top-0 left-0 w-full h-full p-6",style:{background:"linear-gradient(180deg, rgba(9, 21, 46, 0) 0%, rgba(9, 21, 46, 0.3) 25%)"}},S={class:"font-body font-bold text-18 leading-120 text-white"},D={class:"media-aside___image pb-[100%] md:pb-[54.54545454545455%]"},c={__name:"RelatedSection",props:{subheading:{type:String,default:""},heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},items:{type:Array,default:()=>[]}},setup(e){const u=e,d=h(()=>u.buttons.map(n=>({button:{url:n.url,title:n.title,target:n.target||""}})));return(n,R)=>(o(),l("div",b,[a("div",x,[a("div",v,[i(_,{size:"medium",subheading:e.subheading,heading:e.heading,paragraph:e.paragraph,buttons:{items:d.value}},null,8,["subheading","heading","paragraph","buttons"])]),(o(!0),l(g,null,p(e.items,(t,m)=>(o(),l("div",{key:m,class:"related-section__secondary col-span-6 md:col-span-4"},[a("a",{class:"related-section__thumbnail group relative block overflow-hidden",href:t.link.url},[a("div",B,[a("h3",S,f(t.link.title),1)]),a("div",D,[i(y,{class:"absolute w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out",src:t.image.src,srcset:t.image.srcset,"size-desktop":t.image.sizes?.Rectangle,"size-mobile":t.image.sizes?.Rectangle,alt:t.image.alt},null,8,["src","srcset","size-desktop","size-mobile","alt"])])],8,w)]))),128))])]))}};c.__docgenInfo={exportName:"default",displayName:"RelatedSection",description:"",tags:{},props:[{name:"subheading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/RelatedSection/RelatedSection.vue"]};const{expect:r}=__STORYBOOK_MODULE_TEST__,A={title:"Core Components/Related Section",component:c,tags:["autodocs"]},s={name:"Default",args:{subheading:"Explore",heading:"Related Programs",paragraph:"Discover more about our academic offerings and campus life.",buttons:[{url:"#",title:"View All Programs"}],items:[{link:{url:"#",title:"Environmental Studies"},image:{src:"https://placehold.co/600x400",srcset:"",alt:"Environmental Studies",sizes:{Rectangle:"600w"}}},{link:{url:"#",title:"Biology Department"},image:{src:"https://placehold.co/600x400",srcset:"",alt:"Biology Department",sizes:{Rectangle:"600w"}}}]},play:async({canvas:e})=>{await r(e.getByText("Related Programs")).toBeInTheDocument(),await r(e.getByText("View All Programs")).toBeInTheDocument(),await r(e.getByText("Environmental Studies")).toBeInTheDocument()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Related Programs")).toBeInTheDocument();
    await expect(canvas.getByText("View All Programs")).toBeInTheDocument();
    await expect(canvas.getByText("Environmental Studies")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};const O=["Default"];export{s as Default,O as __namedExportsOrder,A as default};
