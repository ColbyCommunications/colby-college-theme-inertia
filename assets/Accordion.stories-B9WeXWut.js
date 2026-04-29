import i from"./Accordion-D9RDcAng.js";import"./iframe-YkMtoKZp.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-c0bLvYw7.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{expect:f,waitFor:v}=__STORYBOOK_MODULE_TEST__,x={title:"Core Components/Accordion",component:i,argTypes:{single:{control:"boolean",description:"If true, opening one panel automatically closes others."},openByDefault:{control:"boolean",description:"If true, the first panel will be open when the component mounts."},panels:{control:"object",description:"Array of content objects. Content accepts HTML strings."}},parameters:{backgrounds:{default:"light"}}},r=t=>({components:{Accordion:i},setup(){return{args:t}},template:`
    <div class="p-10">
      <Accordion v-bind="args" />
    </div>
  `}),s=[{heading:"Admissions & Aid",content:"<p>Learn about our application process, financial aid options, and deadlines for the upcoming academic year..</p>"},{heading:"Academics",content:"<p>Explore our diverse range of majors, minors, and research opportunities available to undergraduate students.</p>"},{heading:"Campus Life",content:"<p>Discover student organizations, housing options, and the vibrant community events happening on campus.</p>"}],e={args:{panels:s,single:!1,openByDefault:!1},render:r,play:async({canvas:t,userEvent:o})=>{}},a={args:{panels:s,single:!0,openByDefault:!1},render:r,play:async({canvas:t,userEvent:o})=>{}},n={args:{panels:s,single:!0,openByDefault:!0},render:r,play:async({canvas:t,userEvent:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    panels: basicPanels,
    single: false,
    openByDefault: false
  },
  render,
  play: async ({
    canvas,
    userEvent
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const buttons = canvas.getAllByRole("button");
    const firstButton = buttons[0];
    const secondButton = buttons[1];
    const thirdButton = buttons[2];

    // Click first panel, assert it expanded
    await userEvent.click(firstButton);
    await expect(firstButton).toHaveAttribute("aria-expanded", "true");

    // Click second panel, assert both are expanded (multi-expand mode)
    await userEvent.click(secondButton);
    await expect(firstButton).toHaveAttribute("aria-expanded", "true");
    await expect(secondButton).toHaveAttribute("aria-expanded", "true");

    // Click third panel, assert all three are expanded
    await userEvent.click(thirdButton);
    await expect(firstButton).toHaveAttribute("aria-expanded", "true");
    await expect(secondButton).toHaveAttribute("aria-expanded", "true");
    await expect(thirdButton).toHaveAttribute("aria-expanded", "true");

    // Click first again, assert it collapsed while others stay open
    await userEvent.click(firstButton);
    await expect(firstButton).toHaveAttribute("aria-expanded", "false");
    await expect(secondButton).toHaveAttribute("aria-expanded", "true");
    await expect(thirdButton).toHaveAttribute("aria-expanded", "true");

    // Collapse third, assert it collapsed
    await userEvent.click(thirdButton);
    await expect(thirdButton).toHaveAttribute("aria-expanded", "false");
    await expect(secondButton).toHaveAttribute("aria-expanded", "true");
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    panels: basicPanels,
    single: true,
    openByDefault: false
  },
  render,
  play: async ({
    canvas,
    userEvent
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const buttons = canvas.getAllByRole("button");
    const firstButton = buttons[0];
    const secondButton = buttons[1];
    const thirdButton = buttons[2];

    // Click first panel, assert it expanded
    await userEvent.click(firstButton);
    await expect(firstButton).toHaveAttribute("aria-expanded", "true");

    // Click second panel, assert first auto-closes
    await userEvent.click(secondButton);
    await expect(secondButton).toHaveAttribute("aria-expanded", "true");
    await expect(firstButton).toHaveAttribute("aria-expanded", "false");

    // Click third panel, assert second auto-closes
    await userEvent.click(thirdButton);
    await expect(thirdButton).toHaveAttribute("aria-expanded", "true");
    await expect(secondButton).toHaveAttribute("aria-expanded", "false");
    await expect(firstButton).toHaveAttribute("aria-expanded", "false");

    // Click third again to collapse it, assert all are now closed
    await userEvent.click(thirdButton);
    await expect(thirdButton).toHaveAttribute("aria-expanded", "false");
    await expect(secondButton).toHaveAttribute("aria-expanded", "false");
    await expect(firstButton).toHaveAttribute("aria-expanded", "false");
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    panels: basicPanels,
    single: true,
    // Usually pairs well with single mode
    openByDefault: true
  },
  render,
  play: async ({
    canvas,
    userEvent
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const buttons = canvas.getAllByRole("button");
    const firstButton = buttons[0];
    const thirdButton = buttons[2];

    // Assert first panel starts expanded
    await waitFor(() => {
      expect(firstButton).toHaveAttribute("aria-expanded", "true");
    });

    // Click third panel, assert first auto-closes (single mode)
    await userEvent.click(thirdButton);
    await expect(thirdButton).toHaveAttribute("aria-expanded", "true");
    await expect(firstButton).toHaveAttribute("aria-expanded", "false");
  }
}`,...n.parameters?.docs?.source}}};const b=["Default","SingleMode","PreOpened"];export{e as Default,n as PreOpened,a as SingleMode,b as __namedExportsOrder,x as default};
