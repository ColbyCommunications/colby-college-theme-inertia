import{c as i,a as t,F as u,r as m,d as l,t as p}from"./iframe-DMklC8cl.js";import"./preload-helper-PPVm8Dsz.js";const g={class:"list-section"},h={class:"list-section__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-9 md:px-5 my-0 mx-auto"},x={class:"list-section__main md:col-span-12"},k={class:"list-section__lists md:flex flex-wrap justify-center md:space-x-5 lg:space-x-10 space-y-10 md:space-y-0"},_={class:"list-section__heading font-extended text-20 font-normal leading-110 -tracking-3 text-indigo"},B={class:"space-y-2.5 ml-[14px]"},T=["href"],c={__name:"ListSection",props:{lists:{type:Array,default:()=>[]}},setup(e){return(S,D)=>(l(),i("div",g,[t("div",h,[t("div",x,[t("div",k,[(l(!0),i(u,null,m(e.lists,(r,y)=>(l(),i("div",{key:y,class:"list-section__list md:w-[calc(20%-16px)] lg:w-[calc(20%-32px)] space-y-6"},[t("h2",_,p(r.heading),1),t("ul",B,[(l(!0),i(u,null,m(r.items,(s,d)=>(l(),i("li",{key:d,class:"font-body text-14 font-normal leading-130 text-indigo-800"},[t("a",{class:"text-indigo-800 hover:text-indigo hover:underline transition-all duration-200 ease-in-out",href:s.link?.url||s.url},p(s.link?.title||s.title),9,T)]))),128))])]))),128))])])])]))}};c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{exportName:"default",displayName:"ListSection",description:"",tags:{},props:[{name:"lists",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/ListSection/ListSection.vue"]});const{expect:n}=__STORYBOOK_MODULE_TEST__,I={title:"Core Components/List Section",component:c,tags:["autodocs"]},a={name:"Default",args:{lists:[{heading:"Sciences",items:[{link:{title:"Biology",url:"#"}},{link:{title:"Chemistry",url:"#"}},{link:{title:"Computer Science",url:"#"}},{link:{title:"Physics",url:"#"}}]},{heading:"Humanities",items:[{link:{title:"English",url:"#"}},{link:{title:"History",url:"#"}},{link:{title:"Philosophy",url:"#"}},{link:{title:"Art",url:"#"}}]},{heading:"Social Sciences",items:[{link:{title:"Economics",url:"#"}},{link:{title:"Government",url:"#"}},{link:{title:"Psychology",url:"#"}},{link:{title:"Sociology",url:"#"}}]}]},play:async({canvas:e})=>{await n(e.getByText("Sciences")).toBeInTheDocument(),await n(e.getByText("Humanities")).toBeInTheDocument(),await n(e.getByText("Social Sciences")).toBeInTheDocument(),await n(e.getByText("Biology")).toBeInTheDocument(),await n(e.getByText("Economics")).toBeInTheDocument()}},o={name:"With URL Fallback",args:{lists:[{heading:"Resources",items:[{link:{title:"Library",url:"#"}},{url:"#",link:{title:"IT Help Desk"}},{link:{title:"Campus Map",url:"#"}}]}]},play:async({canvas:e})=>{await n(e.getByText("Resources")).toBeInTheDocument(),await n(e.getByText("Library")).toBeInTheDocument(),await n(e.getByText("IT Help Desk")).toBeInTheDocument()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Sciences")).toBeInTheDocument();
    await expect(canvas.getByText("Humanities")).toBeInTheDocument();
    await expect(canvas.getByText("Social Sciences")).toBeInTheDocument();
    await expect(canvas.getByText("Biology")).toBeInTheDocument();
    await expect(canvas.getByText("Economics")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "With URL Fallback",
  args: {
    lists: [{
      heading: "Resources",
      items: [{
        link: {
          title: "Library",
          url: "#"
        }
      }, {
        url: "#",
        link: {
          title: "IT Help Desk"
        }
      }, {
        link: {
          title: "Campus Map",
          url: "#"
        }
      }]
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Resources")).toBeInTheDocument();
    await expect(canvas.getByText("Library")).toBeInTheDocument();
    await expect(canvas.getByText("IT Help Desk")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};const v=["Default","WithUrlFallback"];export{a as Default,o as WithUrlFallback,v as __namedExportsOrder,I as default};
