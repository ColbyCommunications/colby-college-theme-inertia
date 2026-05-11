import{_ as a}from"./IntroContext-DlFjrmS_.js";import"./iframe-DBe6kLE_.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-7WVCg6j8.js";import"./TextGroup-CIP-n5XM.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-DWi1K0bA.js";import"./Button-CZwP07jv.js";const{expect:r}=__STORYBOOK_MODULE_TEST__,g={title:"Blocks/Intro Context",component:a,tags:["!autodocs"],argTypes:{subheading:{name:"Subheading",control:"text",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},text:{name:"Text",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}},size:{table:{disable:!0}},inset:{table:{disable:!0}}}},e={name:"Intro Context",args:{subheading:"Dare Northward Overview",heading:"We are taking an integrated, values-led approach to this campaign to reflect the realities of the world we're trying to better.",text:"<p>In 1818, Colby's early faculty and students sailed up the Kennebec on the sloop Hero to start a college, far north of the established centers of higher learning. Many daring moves followed as Colby grew, struggled, and prospered.</p><p>Dare Northward leverages our existing strengths to enhance our student's experiences, improve their outcomes, and produce generations of leaders to tackle the world's greatest challenges.</p>",size:"medium",buttons:[{url:"#",title:"Colby Impact"}]},play:async({canvas:t})=>{await r(t.getByText("Dare Northward Overview")).toBeInTheDocument(),await r(t.getByText("Colby Impact")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Intro Context",
  args: {
    subheading: "Dare Northward Overview",
    heading: "We are taking an integrated, values-led approach to this campaign to reflect the realities of the world we're trying to better.",
    text: "<p>In 1818, Colby's early faculty and students sailed up the Kennebec on the sloop Hero to start a college, far north of the established centers of higher learning. Many daring moves followed as Colby grew, struggled, and prospered.</p><p>Dare Northward leverages our existing strengths to enhance our student's experiences, improve their outcomes, and produce generations of leaders to tackle the world's greatest challenges.</p>",
    size: "medium",
    buttons: [{
      url: "#",
      title: "Colby Impact"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Dare Northward Overview")).toBeInTheDocument();
    await expect(canvas.getByText("Colby Impact")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const h=["Default"];export{e as Default,h as __namedExportsOrder,g as default};
