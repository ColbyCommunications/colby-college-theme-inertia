import d from"./DarkInterstitial-DLV_seXd.js";import"./iframe-CXCUApFV.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-Z2uqZJp8.js";import"./TextGroup-C6Nlx1Og.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CXFncZMH.js";import"./Button-vnDSfKD0.js";import"./Picture-BVaTxbic.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,T={title:"Core Components/Dark Interstitial",component:d},n={name:"Primary",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",icon:!0,paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{const a=e.getAllByText("Lorem ipsum");await t(a.length).toBeGreaterThanOrEqual(2),await t(e.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument()}},o={name:"With Facts",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",facts:[{figure:"100%",paragraph:"consectetur adipiscing elit"},{figure:"100%",paragraph:"consectetur adipiscing elit"}],paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{const a=e.getAllByText("Lorem ipsum");await t(a.length).toBeGreaterThanOrEqual(2),await t(e.getAllByText("100%").length).toBeGreaterThan(0)}},s={name:"With Images",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",images:[{image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x400",Square_mobile:"https://placehold.co/300x300"}}},{image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x400",Square_mobile:"https://placehold.co/300x300"}}},{image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x400",Square_mobile:"https://placehold.co/300x300"}}}],paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{const a=e.getAllByText("Lorem ipsum");await t(a.length).toBeGreaterThanOrEqual(2)}},i={name:"Without Icon",args:{subheading:"Campus Update",heading:"New Facilities",icon:!1,paragraph:"Colby is investing in state-of-the-art facilities for students."},play:async({canvas:e})=>{await t(e.getByText("Campus Update")).toBeInTheDocument(),await t(e.getByText("New Facilities")).toBeInTheDocument()}},r={name:"Without Facts or Images",args:{subheading:"Quick Info",heading:"Important Dates",icon:!0,paragraph:"Check the academic calendar for important deadlines."},play:async({canvas:e})=>{await t(e.getByText("Quick Info")).toBeInTheDocument(),await t(e.getByText("Important Dates")).toBeInTheDocument()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
  }
}`,...r.parameters?.docs?.source}}};const w=["Primary","Facts","Images","WithoutIcon","WithoutFacts"];export{o as Facts,s as Images,n as Primary,r as WithoutFacts,i as WithoutIcon,w as __namedExportsOrder,T as default};
