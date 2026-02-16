import{c as e,a as n,F as o,b as r,d as t,t as a}from"./iframe-BI_3ezP0.js";import"./preload-helper-PPVm8Dsz.js";const p={class:"list-section"},g={class:"list-section__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-9 md:px-5 my-0 mx-auto"},h={class:"list-section__main md:col-span-12"},_={class:"list-section__lists md:flex flex-wrap justify-center md:space-x-5 lg:space-x-10 space-y-10 md:space-y-0"},y={class:"list-section__heading font-extended text-20 font-normal leading-110 -tracking-3 text-indigo"},k={class:"space-y-2.5 ml-[14px]"},x=["href"],c={__name:"ListSection",props:{lists:{type:Array,default:()=>[]}},setup(u){return(f,S)=>(t(),e("div",p,[n("div",g,[n("div",h,[n("div",_,[(t(!0),e(o,null,r(u.lists,(s,d)=>(t(),e("div",{key:d,class:"list-section__list md:w-[calc(20%-16px)] lg:w-[calc(20%-32px)] space-y-6"},[n("h2",y,a(s.heading),1),n("ul",k,[(t(!0),e(o,null,r(s.items,(i,m)=>(t(),e("li",{key:m,class:"font-body text-14 font-normal leading-130 text-indigo-800"},[n("a",{class:"text-indigo-800 hover:text-indigo hover:underline transition-all duration-200 ease-in-out",href:i.link?.url||i.url},a(i.link?.title||i.title),9,x)]))),128))])]))),128))])])])]))}};c.__docgenInfo={exportName:"default",displayName:"ListSection",description:"",tags:{},props:[{name:"lists",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/ListSection/ListSection.vue"]};const w={title:"Core Components/List Section",component:c,tags:["autodocs"]},l={name:"Default",args:{lists:[{heading:"Sciences",items:[{link:{title:"Biology",url:"#"}},{link:{title:"Chemistry",url:"#"}},{link:{title:"Computer Science",url:"#"}},{link:{title:"Physics",url:"#"}}]},{heading:"Humanities",items:[{link:{title:"English",url:"#"}},{link:{title:"History",url:"#"}},{link:{title:"Philosophy",url:"#"}},{link:{title:"Art",url:"#"}}]},{heading:"Social Sciences",items:[{link:{title:"Economics",url:"#"}},{link:{title:"Government",url:"#"}},{link:{title:"Psychology",url:"#"}},{link:{title:"Sociology",url:"#"}}]}]}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    lists: [{
      heading: "Sciences",
      items: [{
        link: {
          title: "Biology",
          url: "#"
        }
      }, {
        link: {
          title: "Chemistry",
          url: "#"
        }
      }, {
        link: {
          title: "Computer Science",
          url: "#"
        }
      }, {
        link: {
          title: "Physics",
          url: "#"
        }
      }]
    }, {
      heading: "Humanities",
      items: [{
        link: {
          title: "English",
          url: "#"
        }
      }, {
        link: {
          title: "History",
          url: "#"
        }
      }, {
        link: {
          title: "Philosophy",
          url: "#"
        }
      }, {
        link: {
          title: "Art",
          url: "#"
        }
      }]
    }, {
      heading: "Social Sciences",
      items: [{
        link: {
          title: "Economics",
          url: "#"
        }
      }, {
        link: {
          title: "Government",
          url: "#"
        }
      }, {
        link: {
          title: "Psychology",
          url: "#"
        }
      }, {
        link: {
          title: "Sociology",
          url: "#"
        }
      }]
    }]
  }
}`,...l.parameters?.docs?.source}}};const C=["Default"];export{l as Default,C as __namedExportsOrder,w as default};
