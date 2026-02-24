import{c as i,h as c,a as d,e as u,m as y,p as b,d as a}from"./iframe-BfBFAde5.js";import{_ as w}from"./Carousel-48i8j71U.js";import{_ as x}from"./Context-Dp7yX81d.js";import{_ as S}from"./ArrowControls-CjN_dRVd.js";import{_ as A}from"./ArticleGrid-KXy-Onmo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0Zqfgkc.js";import"./glide.esm-YJcNIzYu.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";import"./Picture-CxKtrm5G.js";import"./ArrowButton-C6TXGDEx.js";import"./Article-D1DehH2s.js";const v={key:1,class:"article-section__inner mx-auto my-0 w-full max-w-screen-2xl space-y-16 gap-x-10 px-5 md:grid md:grid-cols-12 md:space-y-0"},C={class:"article-section__intro space-y-10 md:col-span-4 lg:col-span-3"},p={__name:"ArticleSection",props:{perView:{type:Number,default:2},gap:{type:Number,default:20},renderApi:{type:[Boolean,Number,String],default:!1},api:{type:String,default:""},heading:{type:String,default:""},paragraph:{type:String,default:""},subheading:{type:String,default:""},buttons:{type:Array,default:()=>[]},showCarouselControls:{type:Boolean,default:!1},gridProps:{type:Object,default:()=>({})}},setup(e){const g=()=>{},h=()=>{};return(l,t)=>(a(),i("div",null,[e.renderApi?(a(),c(w,{key:0,class:"article-section",perView:e.perView,gap:e.gap,render_api:e.renderApi,api:e.api},null,8,["perView","gap","render_api","api"])):(a(),i("div",v,[d("div",C,[u(x,{size:"small",subheading:e.subheading,heading:e.heading,paragraph:e.paragraph,buttons:{items:e.buttons}},null,8,["subheading","heading","paragraph","buttons"]),e.showCarouselControls?(a(),c(S,{key:0,size:"large",type:"light",onPrev:g,onNext:h})):y("",!0)]),d("div",{class:"article-section__grid md:col-span-8 md:col-start-5",onMouseenter:t[0]||(t[0]=f=>l.pauseCarousel?.()),onMouseleave:t[1]||(t[1]=f=>l.playCarousel?.())},[u(A,b(e.gridProps,{display_posts_method:"manual"}),null,16)],32)]))]))}};p.__docgenInfo={exportName:"default",displayName:"ArticleSection",description:"",tags:{},props:[{name:"perView",type:{name:"number"},defaultValue:{func:!1,value:"2"}},{name:"gap",type:{name:"number"},defaultValue:{func:!1,value:"20"}},{name:"renderApi",type:{name:"boolean|number|string"},defaultValue:{func:!1,value:"false"}},{name:"api",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"subheading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"showCarouselControls",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"gridProps",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/ArticleSection/ArticleSection.vue"]};const{expect:o}=__STORYBOOK_MODULE_TEST__,m=[{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Future of Artificial Intelligence",subheading:"Technology",paragraph:"AI is reshaping industries at an unprecedented pace.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"},buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Sustainable Energy Solutions",subheading:"Environment",paragraph:"Solar and wind energy are becoming more accessible than ever.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"},buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Modern Architecture Trends",subheading:"Design",paragraph:"Exploring the intersection of function and aesthetics in 2024.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"},buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]}],$={title:"Core Components/Article Section",component:p},n={name:"Carousel",args:{renderApi:!0,api:"Latest News",perView:1},play:async({canvasElement:e})=>{await o(e.querySelector(".article-section")).not.toBeNull()}},r={name:"Manual",args:{renderApi:!1,heading:"Article Section Title",subheading:"Article Section subheading",paragraph:"Discover recent updates from Colby College.",buttons:[{button:{url:"#",title:"View All"}}],gridProps:{items:m}},play:async({canvas:e})=>{await o(e.getByText("Article Section Title")).toBeInTheDocument(),await o(e.getByText("Article Section subheading")).toBeInTheDocument()}},s={name:"Manual With Arrow Controls",args:{renderApi:!1,heading:"Featured Stories",showCarouselControls:!0,gridProps:{items:m}},play:async({canvas:e})=>{await o(e.getByText("Featured Stories")).toBeInTheDocument()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Carousel",
  args: {
    renderApi: true,
    api: "Latest News",
    perView: 1
  },
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector(".article-section")).not.toBeNull();
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Manual",
  args: {
    renderApi: false,
    heading: "Article Section Title",
    subheading: "Article Section subheading",
    paragraph: "Discover recent updates from Colby College.",
    buttons: [{
      button: {
        url: "#",
        title: "View All"
      }
    }],
    gridProps: {
      items: mockItems
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Article Section Title")).toBeInTheDocument();
    await expect(canvas.getByText("Article Section subheading")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Manual With Arrow Controls",
  args: {
    renderApi: false,
    heading: "Featured Stories",
    showCarouselControls: true,
    gridProps: {
      items: mockItems
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Featured Stories")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};const W=["Primary","Manual","ManualWithControls"];export{r as Manual,s as ManualWithControls,n as Primary,W as __namedExportsOrder,$ as default};
