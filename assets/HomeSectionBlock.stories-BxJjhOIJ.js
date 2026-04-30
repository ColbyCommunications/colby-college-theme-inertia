import{_ as a}from"./HomeSection-uyCk7nxP.js";import"./iframe-UIbP18SM.js";import"./preload-helper-PPVm8Dsz.js";import"./ContextArticleGrid-BSlnNeKd.js";import"./Context-BXocAWt7.js";import"./TextGroup-Dp3a0PpY.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-Bi6fM2Qp.js";import"./Button-uB1sN1l-.js";import"./Article-B32aJEg4.js";import"./Picture-DwnzuAws.js";import"./ContextSection-O-6Y2xDg.js";import"./ArticleGrid-zaHnlc73.js";import"./OverlayWideImage-C5AVZnHq.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,y={title:"Blocks/Home Section",component:a,tags:["!autodocs"]},e={name:"Home Section",args:{news:{renderApi:!1,subheading:"News",heading:"Latest from Colby",paragraph:"Stay up to date with the latest news from Colby College.",items:[{heading:"Colby Announces New Initiative",subheading:"Campus News",paragraph:"A new program aims to expand access and opportunity.",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"News item"}},{heading:"Research Breakthrough",subheading:"Academics",paragraph:"Faculty and students collaborate on cutting-edge research.",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Research"}},{heading:"Alumni Achievement",subheading:"Community",paragraph:"Colby alumni continue to make an impact worldwide.",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Alumni"}}]},events:{subheading:"Events",heading:"Upcoming Events",paragraph:"Join us for these exciting upcoming events on campus.",buttons:[{button:{url:"#",title:"View All Events",target:""}}],items:[{heading:"Fall Open House",subheading:"Oct 15, 2025",paragraph:"Explore campus and meet current students and faculty.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Open House"}},{heading:"Homecoming Weekend",subheading:"Oct 22, 2025",paragraph:"Welcome back alumni for a weekend of celebration.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Homecoming"}},{heading:"Winter Concert Series",subheading:"Dec 5, 2025",paragraph:"Enjoy performances by student ensembles and guest artists.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Concert"}}]},cta:{subheading:"Visit",heading:"Plan Your Visit",paragraph:"Come see for yourself what makes Colby special.",buttons:[{url:"#",title:"Schedule a Visit"}],image:{src:"https://placehold.co/1200x600",srcset:"",alt:"Colby campus",sizes:{Landscape:"1200w"}}}},play:async({canvas:n})=>{await t(n.getByText("Latest from Colby")).toBeInTheDocument(),await t(n.getByText("Upcoming Events")).toBeInTheDocument(),await t(n.getByText("Plan Your Visit")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Home Section",
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
    await expect(canvas.getByText("Latest from Colby")).toBeInTheDocument();
    await expect(canvas.getByText("Upcoming Events")).toBeInTheDocument();
    await expect(canvas.getByText("Plan Your Visit")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const w=["Default"];export{e as Default,w as __namedExportsOrder,y as default};
