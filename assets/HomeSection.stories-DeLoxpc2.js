import{c as i,a,e as n,d as l}from"./iframe-BI_3ezP0.js";import{_ as c}from"./ContextArticleGrid-CIVJ0o9j.js";import{_ as r}from"./ContextSection-BHKPDAeu.js";import{_ as p}from"./ArticleGrid-2TzIuYo2.js";import{_ as d}from"./OverlayWideImage-CmUWAOlV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9ygI19o.js";import"./Context-rCALFtqQ.js";import"./TextGroup-8rV2ZAMN.js";import"./ButtonGroup-DeTJD12j.js";import"./Button-e0IECFmJ.js";import"./Article-CX5YCELc.js";import"./Picture-DioVXFI5.js";const m={class:"background-section relative py-24 bg-marble__pattern bg-cover full-bleed"},h={class:"background-section___inner relative z-10 space-y-24"},u={class:"max-w-screen-2xl w-full px-5 mx-auto"},g={class:"max-w-screen-2xl w-full px-5 mx-auto"},o={__name:"HomeSection",props:{news:{type:Object,default:()=>({})},events:{type:Object,default:()=>({})},cta:{type:Object,default:()=>({})}},setup(e){return(b,s)=>(l(),i("div",m,[s[0]||(s[0]=a("div",{class:"background-section___decor absolute top-[200px] left-0 bg-white w-1/2 lg:w-[700px] h-[700px]"},null,-1)),a("div",h,[n(c,{"render-api":e.news.renderApi!==void 0?e.news.renderApi:!0,api:e.news.api||"Alumni","per-page":e.news.perPage||3,subheading:e.news.subheading,heading:e.news.heading,paragraph:e.news.paragraph,items:e.news.items},null,8,["render-api","api","per-page","subheading","heading","paragraph","items"]),n(r,{size:"medium",align:"center",subheading:e.events.subheading,heading:e.events.heading,paragraph:e.events.paragraph,buttons:e.events.buttons},null,8,["subheading","heading","paragraph","buttons"]),a("div",u,[n(p,{display_posts_method:"manual",columns:3,image_orientation:"rectangle",items:e.events.items},null,8,["items"])]),a("div",g,[n(d,{subheading:e.cta.subheading,heading:e.cta.heading,paragraph:e.cta.paragraph,buttons:e.cta.buttons,image:e.cta.image},null,8,["subheading","heading","paragraph","buttons","image"])])])]))}};o.__docgenInfo={exportName:"default",displayName:"HomeSection",description:"",tags:{},props:[{name:"news",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"events",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"cta",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/HomeSection/HomeSection.vue"]};const N={title:"Core Components/Home Section",component:o,tags:["autodocs"]},t={name:"Default",args:{news:{renderApi:!1,subheading:"News",heading:"Latest from Colby",paragraph:"Stay up to date with the latest news from Colby College.",items:[{heading:"Colby Announces New Initiative",subheading:"Campus News",paragraph:"A new program aims to expand access and opportunity.",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"News item"}},{heading:"Research Breakthrough",subheading:"Academics",paragraph:"Faculty and students collaborate on cutting-edge research.",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Research"}},{heading:"Alumni Achievement",subheading:"Community",paragraph:"Colby alumni continue to make an impact worldwide.",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Alumni"}}]},events:{subheading:"Events",heading:"Upcoming Events",paragraph:"Join us for these exciting upcoming events on campus.",buttons:[{button:{url:"#",title:"View All Events",target:""}}],items:[{heading:"Fall Open House",subheading:"Oct 15, 2025",paragraph:"Explore campus and meet current students and faculty.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Open House"}},{heading:"Homecoming Weekend",subheading:"Oct 22, 2025",paragraph:"Welcome back alumni for a weekend of celebration.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Homecoming"}},{heading:"Winter Concert Series",subheading:"Dec 5, 2025",paragraph:"Enjoy performances by student ensembles and guest artists.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Concert"}}]},cta:{subheading:"Visit",heading:"Plan Your Visit",paragraph:"Come see for yourself what makes Colby special.",buttons:[{url:"#",title:"Schedule a Visit"}],image:{src:"https://placehold.co/1200x600",srcset:"",alt:"Colby campus",sizes:{Landscape:"1200w"}}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    news: {
      renderApi: false,
      subheading: "News",
      heading: "Latest from Colby",
      paragraph: "Stay up to date with the latest news from Colby College.",
      items: [{
        heading: "Colby Announces New Initiative",
        subheading: "Campus News",
        paragraph: "A new program aims to expand access and opportunity.",
        image: {
          sizes: {
            desktop: "https://placehold.co/400x300",
            mobile: "https://placehold.co/400x300"
          },
          alt: "News item"
        }
      }, {
        heading: "Research Breakthrough",
        subheading: "Academics",
        paragraph: "Faculty and students collaborate on cutting-edge research.",
        image: {
          sizes: {
            desktop: "https://placehold.co/400x300",
            mobile: "https://placehold.co/400x300"
          },
          alt: "Research"
        }
      }, {
        heading: "Alumni Achievement",
        subheading: "Community",
        paragraph: "Colby alumni continue to make an impact worldwide.",
        image: {
          sizes: {
            desktop: "https://placehold.co/400x300",
            mobile: "https://placehold.co/400x300"
          },
          alt: "Alumni"
        }
      }]
    },
    events: {
      subheading: "Events",
      heading: "Upcoming Events",
      paragraph: "Join us for these exciting upcoming events on campus.",
      buttons: [{
        button: {
          url: "#",
          title: "View All Events",
          target: ""
        }
      }],
      items: [{
        heading: "Fall Open House",
        subheading: "Oct 15, 2025",
        paragraph: "Explore campus and meet current students and faculty.",
        url: "#",
        image: {
          sizes: {
            desktop: "https://placehold.co/400x300",
            mobile: "https://placehold.co/400x300"
          },
          alt: "Open House"
        }
      }, {
        heading: "Homecoming Weekend",
        subheading: "Oct 22, 2025",
        paragraph: "Welcome back alumni for a weekend of celebration.",
        url: "#",
        image: {
          sizes: {
            desktop: "https://placehold.co/400x300",
            mobile: "https://placehold.co/400x300"
          },
          alt: "Homecoming"
        }
      }, {
        heading: "Winter Concert Series",
        subheading: "Dec 5, 2025",
        paragraph: "Enjoy performances by student ensembles and guest artists.",
        url: "#",
        image: {
          sizes: {
            desktop: "https://placehold.co/400x300",
            mobile: "https://placehold.co/400x300"
          },
          alt: "Concert"
        }
      }]
    },
    cta: {
      subheading: "Visit",
      heading: "Plan Your Visit",
      paragraph: "Come see for yourself what makes Colby special.",
      buttons: [{
        url: "#",
        title: "Schedule a Visit"
      }],
      image: {
        src: "https://placehold.co/1200x600",
        srcset: "",
        alt: "Colby campus",
        sizes: {
          Landscape: "1200w"
        }
      }
    }
  }
}`,...t.parameters?.docs?.source}}};const O=["Default"];export{t as Default,O as __namedExportsOrder,N as default};
