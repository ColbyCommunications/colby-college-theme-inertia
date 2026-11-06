import t from"./HomeSection-CKT8NWYa.js";import"./iframe-C2K9mByw.js";import"./preload-helper-Nb-6AGzV.js";import"./ContextArticleGrid-DPdx7ERS.js";import"./Context-NdaW34K_.js";import"./TextGroup-C1-IdgH9.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-r9XjzMuy.js";import"./Button-Do7YY13m.js";import"./ArticleGrid-ClDFbM73.js";import"./glide.esm-YJcNIzYu.js";import"./Article-Nn2j5KW7.js";import"./Picture-DYgh7Ce0.js";import"./ArrowControls-DS8wbT48.js";import"./ArrowButton-BgUoc4Nq.js";import"./ContextSection-D3zhhA-8.js";import"./OverlayWideImage-BwM8_V6p.js";const{expect:k}=__STORYBOOK_MODULE_TEST__,v={title:"Core Components/Home Section",component:t,tags:["autodocs"]},e={name:"Default",args:{news:{renderApi:!1,subheading:"News",heading:"Latest from Colby",paragraph:"Stay up to date with the latest news from Colby College.",items:[{heading:"Colby Announces New Initiative",subheading:"Campus News",paragraph:"A new program aims to expand access and opportunity.",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"News item"}},{heading:"Research Breakthrough",subheading:"Academics",paragraph:"Faculty and students collaborate on cutting-edge research.",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Research"}},{heading:"Alumni Achievement",subheading:"Community",paragraph:"Colby alumni continue to make an impact worldwide.",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Alumni"}}]},events:{subheading:"Events",heading:"Upcoming Events",paragraph:"Join us for these exciting upcoming events on campus.",buttons:[{button:{url:"#",title:"View All Events",target:""}}],items:[{heading:"Fall Open House",subheading:"Oct 15, 2025",paragraph:"Explore campus and meet current students and faculty.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Open House"}},{heading:"Homecoming Weekend",subheading:"Oct 22, 2025",paragraph:"Welcome back alumni for a weekend of celebration.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Homecoming"}},{heading:"Winter Concert Series",subheading:"Dec 5, 2025",paragraph:"Enjoy performances by student ensembles and guest artists.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Concert"}}]},cta:{subheading:"Visit",heading:"Plan Your Visit",paragraph:"Come see for yourself what makes Colby special.",buttons:[{url:"#",title:"Schedule a Visit"}],image:{src:"https://placehold.co/1200x600",srcset:"",alt:"Colby campus",sizes:{Landscape:"1200w"}}}},play:async({canvas:a})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
