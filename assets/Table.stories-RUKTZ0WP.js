import{_ as p}from"./Table-B9JuArba.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0Zqfgkc.js";import"./Modal-DGXlUgKX.js";const{expect:t,waitFor:u}=__STORYBOOK_MODULE_TEST__,f={title:"Core Components/Table",component:p,tags:["autodocs"]},a={name:"Static (External Items)",args:{renderApi:!1,api:"Departments",externalItems:[{post_title:"Biology",post_name:"biology"},{post_title:"Chemistry",post_name:"chemistry"},{post_title:"Computer Science",post_name:"computer-science"},{post_title:"Economics",post_name:"economics"},{post_title:"English",post_name:"english"}]},play:async({canvas:e})=>{await t(e.getByText("Biology")).toBeInTheDocument(),await t(e.getByText("Chemistry")).toBeInTheDocument(),await t(e.getByText("Computer Science")).toBeInTheDocument()}},o={name:"People Directory",args:{renderApi:!1,api:"People",externalItems:[{post_title:"Jane Smith",post_name:"jane-smith",thumbnail:"https://placehold.co/100x100",business_title:"Professor of Biology",department:"Biology"},{post_title:"John Doe",post_name:"john-doe",thumbnail:"https://placehold.co/100x100",business_title:"Associate Professor",department:"Chemistry"},{post_title:"Alice Johnson",post_name:"alice-johnson",thumbnail:"https://placehold.co/100x100",business_title:"Lecturer",department:""}]},play:async({canvas:e})=>{await t(e.getByText("Jane Smith")).toBeInTheDocument(),await t(e.getByText("Professor of Biology")).toBeInTheDocument(),await t(e.getByText("John Doe")).toBeInTheDocument()}},s={name:"Offices Directory",args:{renderApi:!1,api:"Offices",externalItems:[{post_title:"Office of Admissions",post_name:"admissions"},{post_title:"Financial Aid Office",post_name:"financial-aid"},{post_title:"Registrar's Office",post_name:"registrar"},{post_title:"Dean of Students",post_name:"dean-of-students"}]},play:async({canvas:e})=>{await t(e.getByText("Office of Admissions")).toBeInTheDocument(),await t(e.getByText("Financial Aid Office")).toBeInTheDocument()}},m=Array.from({length:25},(e,n)=>({post_title:`Department ${n+1}`,post_name:`department-${n+1}`})),i={name:"With Pagination",args:{renderApi:!1,api:"Departments",itemsPerPage:10,externalItems:m},play:async({canvas:e,userEvent:n})=>{await t(e.getByText("Department 1")).toBeInTheDocument(),await t(e.getByText("Showing 10 of 25")).toBeInTheDocument();const c=e.getByText("2");await n.click(c),await t(e.getByText("Department 11")).toBeInTheDocument()}},r={name:"With Search",args:{renderApi:!1,api:"Departments",externalItems:[{post_title:"Biology",post_name:"biology"},{post_title:"Chemistry",post_name:"chemistry"},{post_title:"Computer Science",post_name:"computer-science"},{post_title:"Economics",post_name:"economics"},{post_title:"English",post_name:"english"}]},play:async({canvas:e,userEvent:n})=>{await t(e.getByText("Departments and Programs")).toBeInTheDocument();const c=e.getByPlaceholderText("Search");await n.type(c,"Bio")}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Static (External Items)",
  args: {
    renderApi: false,
    api: "Departments",
    externalItems: [{
      post_title: "Biology",
      post_name: "biology"
    }, {
      post_title: "Chemistry",
      post_name: "chemistry"
    }, {
      post_title: "Computer Science",
      post_name: "computer-science"
    }, {
      post_title: "Economics",
      post_name: "economics"
    }, {
      post_title: "English",
      post_name: "english"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Biology")).toBeInTheDocument();
    await expect(canvas.getByText("Chemistry")).toBeInTheDocument();
    await expect(canvas.getByText("Computer Science")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "People Directory",
  args: {
    renderApi: false,
    api: "People",
    externalItems: [{
      post_title: "Jane Smith",
      post_name: "jane-smith",
      thumbnail: "https://placehold.co/100x100",
      business_title: "Professor of Biology",
      department: "Biology"
    }, {
      post_title: "John Doe",
      post_name: "john-doe",
      thumbnail: "https://placehold.co/100x100",
      business_title: "Associate Professor",
      department: "Chemistry"
    }, {
      post_title: "Alice Johnson",
      post_name: "alice-johnson",
      thumbnail: "https://placehold.co/100x100",
      business_title: "Lecturer",
      department: ""
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Jane Smith")).toBeInTheDocument();
    await expect(canvas.getByText("Professor of Biology")).toBeInTheDocument();
    await expect(canvas.getByText("John Doe")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Offices Directory",
  args: {
    renderApi: false,
    api: "Offices",
    externalItems: [{
      post_title: "Office of Admissions",
      post_name: "admissions"
    }, {
      post_title: "Financial Aid Office",
      post_name: "financial-aid"
    }, {
      post_title: "Registrar's Office",
      post_name: "registrar"
    }, {
      post_title: "Dean of Students",
      post_name: "dean-of-students"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Office of Admissions")).toBeInTheDocument();
    await expect(canvas.getByText("Financial Aid Office")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "With Pagination",
  args: {
    renderApi: false,
    api: "Departments",
    itemsPerPage: 10,
    externalItems: manyItems
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await expect(canvas.getByText("Department 1")).toBeInTheDocument();
    await expect(canvas.getByText("Showing 10 of 25")).toBeInTheDocument();
    // Click page 2
    const page2 = canvas.getByText("2");
    await userEvent.click(page2);
    await expect(canvas.getByText("Department 11")).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "With Search",
  args: {
    renderApi: false,
    api: "Departments",
    externalItems: [{
      post_title: "Biology",
      post_name: "biology"
    }, {
      post_title: "Chemistry",
      post_name: "chemistry"
    }, {
      post_title: "Computer Science",
      post_name: "computer-science"
    }, {
      post_title: "Economics",
      post_name: "economics"
    }, {
      post_title: "English",
      post_name: "english"
    }]
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await expect(canvas.getByText("Departments and Programs")).toBeInTheDocument();
    const searchInput = canvas.getByPlaceholderText("Search");
    await userEvent.type(searchInput, "Bio");
  }
}`,...r.parameters?.docs?.source}}};const B=["Static","People","Offices","WithPagination","WithSearch"];export{s as Offices,o as People,a as Static,i as WithPagination,r as WithSearch,B as __namedExportsOrder,f as default};
