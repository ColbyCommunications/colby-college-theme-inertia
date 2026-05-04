import r from"./DarkInterstitial-B22kFLSS.js";import"./iframe-BgQXPfKC.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-tEoFrYWo.js";import"./TextGroup-CHD4iHm7.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CCu1xz8V.js";import"./Button-C-lFUJoe.js";import"./Picture-AlhnKd30.js";import"./index-D4-8ALNT.js";const{expect:y}=__STORYBOOK_MODULE_TEST__,b={title:"Core Components/Dark Interstitial",component:r},a={name:"Primary",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",icon:!0,paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{}},t={name:"With Facts",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",facts:[{figure:"100%",paragraph:"consectetur adipiscing elit"},{figure:"100%",paragraph:"consectetur adipiscing elit"}],paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{}},s={name:"With Images",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",images:[{image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x400",Square_mobile:"https://placehold.co/300x300"}}},{image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x400",Square_mobile:"https://placehold.co/300x300"}}},{image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x400",Square_mobile:"https://placehold.co/300x300"}}}],paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{}},i={name:"Without Icon",args:{subheading:"Campus Update",heading:"New Facilities",icon:!1,paragraph:"Colby is investing in state-of-the-art facilities for students."},play:async({canvas:e})=>{}},o={name:"Without Facts or Images",args:{subheading:"Quick Info",heading:"Important Dates",icon:!0,paragraph:"Check the academic calendar for important deadlines."},play:async({canvas:e})=>{}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    // Both subheading and heading are "Lorem ipsum", so use getAllByText
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
    await expect(canvas.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    // Both subheading and heading are "Lorem ipsum", so use getAllByText
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
    await expect(canvas.getAllByText("100%").length).toBeGreaterThan(0);
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Campus Update")).toBeInTheDocument();
    await expect(canvas.getByText("New Facilities")).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Quick Info")).toBeInTheDocument();
    await expect(canvas.getByText("Important Dates")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};const f=["Primary","Facts","Images","WithoutIcon","WithoutFacts"];export{t as Facts,s as Images,a as Primary,o as WithoutFacts,i as WithoutIcon,f as __namedExportsOrder,b as default};
