import c from"./DarkInterstitial-Dfw42btR.js";import"./iframe-u12Z2ejW.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-C2u5KeLN.js";import"./TextGroup-fPNNtcqH.js";import"./ButtonGroup-CnEZ3a-f.js";import"./Button-Dd4eRc0N.js";import"./Picture-CY3Hc20w.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,I={title:"Core Components/Dark Interstitial",component:c},o={name:"Primary",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",icon:!0,paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{const a=e.getAllByText("Lorem ipsum");await t(a.length).toBeGreaterThanOrEqual(2),await t(e.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument()},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!1},template:"<story />"})]},n={name:"With Facts",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",facts:[{figure:"100%",paragraph:"consectetur adipiscing elit"},{figure:"100%",paragraph:"consectetur adipiscing elit"}],paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{const a=e.getAllByText("Lorem ipsum");await t(a.length).toBeGreaterThanOrEqual(2),await t(e.getAllByText("100%").length).toBeGreaterThan(0)},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!1},template:"<story />"})]},s={name:"With Images",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",images:[{image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x400",Square_mobile:"https://placehold.co/300x300"}}},{image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x400",Square_mobile:"https://placehold.co/300x300"}}},{image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x400",Square_mobile:"https://placehold.co/300x300"}}}],paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{const a=e.getAllByText("Lorem ipsum");await t(a.length).toBeGreaterThanOrEqual(2)},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!1},template:"<story />"})]},r={name:"Without Icon",args:{subheading:"Campus Update",heading:"New Facilities",icon:!1,paragraph:"Colby is investing in state-of-the-art facilities for students."},play:async({canvas:e})=>{await t(e.getByText("Campus Update")).toBeInTheDocument(),await t(e.getByText("New Facilities")).toBeInTheDocument()},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!1},template:"<story />"})]},i={name:"Without Facts or Images",args:{subheading:"Quick Info",heading:"Important Dates",icon:!0,paragraph:"Check the academic calendar for important deadlines."},play:async({canvas:e})=>{await t(e.getByText("Quick Info")).toBeInTheDocument(),await t(e.getByText("Important Dates")).toBeInTheDocument()},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!1},template:"<story />"})]},d={name:"With Facts (No Animation)",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",facts:[{figure:"100%",paragraph:"consectetur adipiscing elit"},{figure:"100%",paragraph:"consectetur adipiscing elit"}],paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{const a=e.getAllByText("Lorem ipsum");await t(a.length).toBeGreaterThanOrEqual(2),await t(e.getAllByText("100%").length).toBeGreaterThan(0)},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!0},template:"<story />"})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    icon: true,
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  play: async ({
    canvas
  }) => {
    // Both subheading and heading are "Lorem ipsum", so use getAllByText
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
    await expect(canvas.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument();
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = false;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "With Facts",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    facts: [{
      figure: "100%",
      paragraph: "consectetur adipiscing elit"
    }, {
      figure: "100%",
      paragraph: "consectetur adipiscing elit"
    }],
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  play: async ({
    canvas
  }) => {
    // Both subheading and heading are "Lorem ipsum", so use getAllByText
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
    await expect(canvas.getAllByText("100%").length).toBeGreaterThan(0);
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = false;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "With Images",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    images: [{
      image: {
        src: "https://placeholdit.com/400x600/dddddd/999999",
        srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
        alt: "this is an alt tag",
        sizes: {
          Square: "https://placehold.co/400x400",
          Square_mobile: "https://placehold.co/300x300"
        }
      }
    }, {
      image: {
        src: "https://placeholdit.com/400x600/dddddd/999999",
        srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
        alt: "this is an alt tag",
        sizes: {
          Square: "https://placehold.co/400x400",
          Square_mobile: "https://placehold.co/300x300"
        }
      }
    }, {
      image: {
        src: "https://placeholdit.com/400x600/dddddd/999999",
        srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
        alt: "this is an alt tag",
        sizes: {
          Square: "https://placehold.co/400x400",
          Square_mobile: "https://placehold.co/300x300"
        }
      }
    }],
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  play: async ({
    canvas
  }) => {
    // Both subheading and heading are "Lorem ipsum", so use getAllByText
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = false;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Without Icon",
  args: {
    subheading: "Campus Update",
    heading: "New Facilities",
    icon: false,
    paragraph: "Colby is investing in state-of-the-art facilities for students."
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Campus Update")).toBeInTheDocument();
    await expect(canvas.getByText("New Facilities")).toBeInTheDocument();
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = false;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Without Facts or Images",
  args: {
    subheading: "Quick Info",
    heading: "Important Dates",
    icon: true,
    paragraph: "Check the academic calendar for important deadlines."
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Quick Info")).toBeInTheDocument();
    await expect(canvas.getByText("Important Dates")).toBeInTheDocument();
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = false;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "With Facts (No Animation)",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    facts: [{
      figure: "100%",
      paragraph: "consectetur adipiscing elit"
    }, {
      figure: "100%",
      paragraph: "consectetur adipiscing elit"
    }],
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  play: async ({
    canvas
  }) => {
    // Both subheading and heading are "Lorem ipsum", so use getAllByText
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
    await expect(canvas.getAllByText("100%").length).toBeGreaterThan(0);
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = true;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...d.parameters?.docs?.source}}};const B=["Primary","Facts","Images","WithoutIcon","WithoutFacts","FactsNA"];export{n as Facts,d as FactsNA,s as Images,o as Primary,i as WithoutFacts,r as WithoutIcon,B as __namedExportsOrder,I as default};
