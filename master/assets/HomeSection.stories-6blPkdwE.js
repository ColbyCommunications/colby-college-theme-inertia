import t from"./HomeSection-C4xpnn_d.js";import"./iframe-QQMV8ndi.js";import"./preload-helper-CNn__nYE.js";import"./ContextArticleGrid-Bj1YxwRW.js";import"./Context-BOSUU9zt.js";import"./TextGroup-Tl4fjshH.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-8CDiUq0S.js";import"./Button-BNMjWS64.js";import"./ArticleGrid-Da0yu1Q8.js";import"./glide.esm-YJcNIzYu.js";import"./Article-Cgfnj81s.js";import"./Picture-DBOx81Dq.js";import"./ArrowControls-CkhA1B7z.js";import"./ArrowButton-BVJkGkGt.js";import"./ContextSection-DOmWd3Rp.js";import"./OverlayWideImage-D1-fB28X.js";const{expect:k}=__STORYBOOK_MODULE_TEST__,v={title:"Core Components/Home Section",component:t,tags:["autodocs"]},e={name:"Default",args:{news:{renderApi:!1,subheading:"News",heading:"Latest from Colby",paragraph:"Stay up to date with the latest news from Colby College.",items:[{heading:"Colby Announces New Initiative",subheading:"Campus News",paragraph:"A new program aims to expand access and opportunity.",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"News item"}},{heading:"Research Breakthrough",subheading:"Academics",paragraph:"Faculty and students collaborate on cutting-edge research.",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Research"}},{heading:"Alumni Achievement",subheading:"Community",paragraph:"Colby alumni continue to make an impact worldwide.",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Alumni"}}]},events:{subheading:"Events",heading:"Upcoming Events",paragraph:"Join us for these exciting upcoming events on campus.",buttons:[{button:{url:"#",title:"View All Events",target:""}}],items:[{heading:"Fall Open House",subheading:"Oct 15, 2025",paragraph:"Explore campus and meet current students and faculty.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Open House"}},{heading:"Homecoming Weekend",subheading:"Oct 22, 2025",paragraph:"Welcome back alumni for a weekend of celebration.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Homecoming"}},{heading:"Winter Concert Series",subheading:"Dec 5, 2025",paragraph:"Enjoy performances by student ensembles and guest artists.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Concert"}}]},cta:{subheading:"Visit",heading:"Plan Your Visit",paragraph:"Come see for yourself what makes Colby special.",buttons:[{url:"#",title:"Schedule a Visit"}],image:{src:"https://placehold.co/1200x600",srcset:"",alt:"Colby campus",sizes:{Landscape:"1200w"}}}},play:async({canvas:a})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Latest from Colby")).toBeInTheDocument();
    await expect(canvas.getByText("Upcoming Events")).toBeInTheDocument();
    await expect(canvas.getByText("Plan Your Visit")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const A=["Default"];export{e as Default,A as __namedExportsOrder,v as default};
