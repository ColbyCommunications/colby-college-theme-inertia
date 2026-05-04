import t from"./ContextArticleGrid-C7ws_jgc.js";import"./iframe-Dk8X5kg9.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-LNWjQ5kA.js";import"./TextGroup-zhl_ARTF.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-BM8qokrS.js";import"./Button-B99iu2cV.js";import"./Article-Blu6zVXg.js";import"./Picture-Y-vsZVhD.js";const b={title:"Blocks/Context Article Grid",component:t,argTypes:{renderApi:{control:"boolean",name:"Render API",table:{category:"Wordpress Fields"}},api:{control:"radio",name:"API",options:["Manual","People","Alumni"],if:{arg:"renderApi",eq:!0},table:{category:"Wordpress Fields"}},heading:{control:"text",name:"Heading",table:{category:"Wordpress Fields"}},subheading:{control:"text",name:"Subheading",table:{category:"Wordpress Fields"}},paragraph:{control:"text",name:"Paragraph",table:{category:"Wordpress Fields"}},buttons:{control:"object",name:"Buttons",table:{category:"Wordpress Fields"}},display_posts_method:{name:"Display Posts Method",control:{type:"select",labels:{internal:"Internal Posts",api:"External API",manual:"Add Posts Manually"}},options:["internal","api","manual"],table:{category:"Wordpress Fields"}},render_posts:{control:"boolean",name:"Render Posts",if:{arg:"display_posts_method",eq:"internal"},table:{category:"Wordpress Fields"}},size:{name:"Size",control:{type:"inline-radio"},options:["small","xsmall"],table:{category:"Wordpress Fields"}},columns:{name:"Columns",control:{type:"inline-radio"},options:[2,3,4],table:{category:"Wordpress Fields"}},image_orientation:{name:"Image Orientation",control:{type:"inline-radio"},options:["rectangle","square","portrait"],table:{category:"Wordpress Fields"}},border:{name:"Border",control:{type:"boolean"},table:{category:"Wordpress Fields"}},options:["internal","api","manual"],table:{category:"Wordpress Fields"}},cta:{render_api:{table:{disable:!0}},items:{table:{disable:!0}},cta:{table:{disable:!0}},perPage:{table:{disable:!0}}},parameters:{layout:"padded"},tags:["!autodocs"]},o=a=>({components:{ContextArticleGrid:t},setup(){return window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!0,{args:a}},template:'<ContextArticleGrid v-bind="args" />'}),r=[{image:{sizes:{desktop:"https://placehold.co/600x400/012169/ffffff?text=Desktop+Image+1",mobile:"https://placehold.co/300x300/012169/ffffff?text=Mobile+Image+1"},alt:"Abstract academic concept"},subheading:"Academics",heading:"Innovative Research in Biology",paragraph:"Students and faculty collaborate on groundbreaking research that reshapes our understanding of local ecosystems.",buttons:[{button:{url:"#",title:"Read Article"}}]},{image:{sizes:{desktop:"https://placehold.co/600x400/366bcf/ffffff?text=Desktop+Image+2"},alt:"Art gallery display"},subheading:"The Arts",heading:"New Gallery Exhibition Opens",paragraph:"The museum presents a collection of modern works that challenge perspective and form.",buttons:[{button:{url:"#",title:"View Gallery"}}]},{image:{sizes:{desktop:"https://placehold.co/600x400/gray/white?text=Desktop+Image+3"},alt:"Alumni event"},subheading:"Community",heading:"Alumni Weekend 2024",paragraph:"Join us for a weekend of celebration, networking, and reconnecting with old friends.",buttons:[]}],e={name:"Context Article Grid",render:o,args:{renderApi:!1,api:"Manual",subheading:"Latest Updates",heading:"News & Stories",paragraph:"Explore the latest happenings from around the campus and beyond.",buttons:[{button:{url:"#",title:"Test Button"}}],display_posts_method:"internal",render_posts:!0,size:"small",columns:2,image_orientation:"rectangle",border:!1,cta:"Read Story",items:r}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Context Article Grid",
  render,
  args: {
    renderApi: false,
    api: "Manual",
    subheading: "Latest Updates",
    heading: "News & Stories",
    paragraph: "Explore the latest happenings from around the campus and beyond.",
    buttons: [{
      button: {
        url: "#",
        title: "Test Button"
      }
    }],
    display_posts_method: "internal",
    render_posts: true,
    size: "small",
    columns: 2,
    image_orientation: "rectangle",
    border: false,
    cta: "Read Story",
    items: mockItems
  }
}`,...e.parameters?.docs?.source}}};const h=["ManualData"];export{e as ManualData,h as __namedExportsOrder,b as default};
