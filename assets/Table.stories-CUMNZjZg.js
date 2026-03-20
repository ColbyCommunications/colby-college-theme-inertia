import{a as r}from"./index-42ANG6Sg.js";import{_ as S}from"./Table-DUxPb8wl.js";import{e as T,f as x}from"./mock-data-iuhpH0Ld.js";import"./iframe-BtxlOaJS.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-DSIMHxms.js";const{expect:a,spyOn:w,waitFor:s}=__STORYBOOK_MODULE_TEST__,y="https://www.colby.edu/endpoints/v1/courses/",f="https://www.colby.edu/endpoints/v1/majorsminors/",g=()=>{window.history.pushState({},"","/")},I=T(40),h=[...I,...Array.from({length:12},(e,t)=>({dept:"BIOL",longTitle:`Biology Field Study ${t+1}`,secTitle:t%2===0?`Biology Field Study ${t+1}`:"",sessOffered:t%3===0?"FA":t%3===1?"SP":"JP",crsno:`BI3${String(t+1).padStart(2,"0")}`,abstr:`<p>Hands-on biology practicum ${t+1}.</p>`,prereq:t%2===0?"BI101":"",area:t%2===0?"S":"",labsci:t%4===0?"L":"",writing:t%5===0?"W2":"",diversity:t%3===0?"US":"",minhrs:1,maxhrs:t%6===0?2:1,sections:[{faculty:[{faculty_name:`Faculty${t+1}, Biology`}]}]}))],v=x(),o=async(e,t)=>{const n=Array.from(e.options).find(({label:i,textContent:c,value:B})=>i===t||c?.trim()===t||B===t);a(n).toBeDefined(),e.value=n.value,e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0}))},P={title:"Core Components/Table",component:S,tags:["autodocs"]},l={name:"Static (Department Courses API)",args:{renderApi:!0,api:"Department Courses",departmentCode:"BIOL",itemsPerPage:5},beforeEach:()=>{g();const e=w(r,"get").mockResolvedValue({data:{courses:h}});return()=>{e.mockRestore(),g()}},play:async({canvas:e,userEvent:t})=>{await s(()=>{a(e.getByText("Department Courses")).toBeInTheDocument()}),await a(r.get).toHaveBeenCalledWith(y),await a(e.getByText("Cell Biology")).toBeInTheDocument();const n=e.getByPlaceholderText("Search");await t.type(n,"Field Study"),await a(e.getByText("Biology Field Study 1")).toBeInTheDocument(),await t.click(e.getByRole("button",{name:"Spring"})),await s(()=>{a(window.location.search).toContain("term=Spring")}),await t.click(e.getByRole("button",{name:"All"}));const i=e.getByRole("button",{name:"2"});await t.click(i),await s(()=>{a(window.location.search).toContain("pag=2")})}},p={name:"People Directory",args:{renderApi:!1,api:"People",externalItems:[{post_title:"Jane Smith",post_name:"jane-smith",thumbnail:"https://placehold.co/100x100",business_title:"Professor of Biology",department:"Biology"},{post_title:"John Doe",post_name:"john-doe",thumbnail:"https://placehold.co/100x100",business_title:"Associate Professor",department:"Chemistry"},{post_title:"Alice Johnson",post_name:"alice-johnson",thumbnail:"",business_title:"Lecturer",department:""}]},play:async({canvas:e,userEvent:t})=>{await a(e.getByText("Jane Smith")).toBeInTheDocument(),await a(e.getByText("Professor of Biology")).toBeInTheDocument();const n=e.getByPlaceholderText("Search");await t.type(n,"Alice"),await a(e.getByText("Alice Johnson")).toBeInTheDocument(),await t.clear(n),await a(e.getByText("Jane Smith")).toBeInTheDocument();const i=e.getByAltText("Alice Johnson");await a(i.getAttribute("src")).toContain("profile_placeholder")}},u={name:"Offices Directory",args:{renderApi:!1,api:"Offices",externalItems:[{post_title:"Office of Admissions",post_name:"admissions"},{post_title:"Financial Aid Office",post_name:"financial-aid"},{post_title:"Registrar's Office",post_name:"registrar"},{post_title:"Dean of Students",post_name:"dean-of-students"}]},play:async({canvas:e,userEvent:t})=>{await a(e.getByText("Office of Admissions")).toBeInTheDocument(),await a(e.getByText("Financial Aid Office")).toBeInTheDocument();const n=e.getByPlaceholderText("Search");await t.type(n,"Registrar"),await a(e.getByText("Registrar's Office")).toBeInTheDocument()}},m={name:"With Pagination (Course Catalogue API)",args:{renderApi:!0,api:"Course Catalogue",itemsPerPage:6},beforeEach:()=>{window.history.pushState({},"","/?department=BIOL&division=Natural%20Sciences&term=Spring&pag=2");const e=w(r,"get").mockResolvedValue({data:{courses:h}});return()=>{e.mockRestore(),g()}},play:async({canvas:e,userEvent:t})=>{await s(()=>{a(e.getByText("Course Catalogue")).toBeInTheDocument()}),await a(r.get).toHaveBeenCalledWith(y),await s(()=>{a(window.location.search).toContain("term=Spring")});const n=e.getByLabelText("Select a department"),i=e.getByLabelText("Select a division");await o(n,"CHEM"),await s(()=>{a(window.location.search).toContain("department=CHEM")}),await o(n,"All Departments"),await o(i,"Humanities"),await o(i,"Interdisciplinary Studies"),await o(i,"Natural Sciences"),await o(i,"Social Sciences"),await o(i,"All Divisions"),await t.click(e.getByRole("button",{name:"Fall"})),await t.click(e.getByRole("button",{name:"January"})),await t.click(e.getByRole("button",{name:"All"}));const c=e.getByPlaceholderText("Search");await t.type(c,"Marine"),await a(e.getAllByText("Marine Ecology Seminar").length).toBeGreaterThan(0),await t.clear(c),await t.click(e.getAllByText("Marine Ecology Seminar")[0]),await s(()=>{a(e.getAllByText("Prerequisite:").length).toBeGreaterThan(0)}),await t.click(e.getByRole("button",{name:"3"})),await s(()=>{a(window.location.search).toContain("pag=3")})}},d={name:"With Search (Majors and Minors API)",args:{renderApi:!0,api:"Majors and Minors",itemsPerPage:12},beforeEach:()=>{window.history.pushState({},"","/?division=Interdisciplinary%20Studies&term=Majors&pag=2");const e=w(r,"get").mockResolvedValue({data:v});return()=>{e.mockRestore(),g()}},play:async({canvas:e,userEvent:t})=>{await s(()=>{a(e.getByText("Majors and Minors")).toBeInTheDocument()}),await a(r.get).toHaveBeenCalledWith(f);const n=e.getByLabelText("Select a division");await o(n,"Humanities"),await o(n,"Interdisciplinary Studies"),await o(n,"Natural Sciences"),await o(n,"Social Sciences"),await o(n,"All Divisions"),await t.click(e.getByRole("button",{name:"Minors"})),await t.click(e.getByRole("button",{name:"Majors"})),await t.click(e.getByRole("button",{name:"All"}));const i=e.getByPlaceholderText("Search");await t.type(i,"Jewish"),await a(e.getByText("Jewish Studies")).toBeInTheDocument(),await t.clear(i),await t.type(i,"Cinema"),await a(e.getByText("Cinema Studies")).toBeInTheDocument(),await t.clear(i),await a(e.getByText("African American Studies")).toBeInTheDocument(),await t.click(e.getByRole("button",{name:"2"})),await s(()=>{a(window.location.search).toContain("pag=2")}),await a(e.getByText(/Showing 12 of/)).toBeInTheDocument()}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Static (Department Courses API)",
  args: {
    renderApi: true,
    api: "Department Courses",
    departmentCode: "BIOL",
    itemsPerPage: 5
  },
  beforeEach: () => {
    resetStoryUrl();
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: {
        courses: tableCourses
      }
    });
    return () => {
      spy.mockRestore();
      resetStoryUrl();
    };
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await waitFor(() => {
      expect(canvas.getByText("Department Courses")).toBeInTheDocument();
    });
    await expect(axios.get).toHaveBeenCalledWith(COURSES_ENDPOINT);
    await expect(canvas.getByText("Cell Biology")).toBeInTheDocument();
    const searchInput = canvas.getByPlaceholderText("Search");
    await userEvent.type(searchInput, "Field Study");
    await expect(canvas.getByText("Biology Field Study 1")).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "Spring"
    }));
    await waitFor(() => {
      expect(window.location.search).toContain("term=Spring");
    });
    await userEvent.click(canvas.getByRole("button", {
      name: "All"
    }));
    const page2 = canvas.getByRole("button", {
      name: "2"
    });
    await userEvent.click(page2);
    await waitFor(() => {
      expect(window.location.search).toContain("pag=2");
    });
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
      thumbnail: "",
      business_title: "Lecturer",
      department: ""
    }]
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await expect(canvas.getByText("Jane Smith")).toBeInTheDocument();
    await expect(canvas.getByText("Professor of Biology")).toBeInTheDocument();
    const searchInput = canvas.getByPlaceholderText("Search");
    await userEvent.type(searchInput, "Alice");
    await expect(canvas.getByText("Alice Johnson")).toBeInTheDocument();
    await userEvent.clear(searchInput);
    await expect(canvas.getByText("Jane Smith")).toBeInTheDocument();
    const fallbackImage = canvas.getByAltText("Alice Johnson");
    await expect(fallbackImage.getAttribute("src")).toContain("profile_placeholder");
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    canvas,
    userEvent
  }) => {
    await expect(canvas.getByText("Office of Admissions")).toBeInTheDocument();
    await expect(canvas.getByText("Financial Aid Office")).toBeInTheDocument();
    const searchInput = canvas.getByPlaceholderText("Search");
    await userEvent.type(searchInput, "Registrar");
    await expect(canvas.getByText("Registrar's Office")).toBeInTheDocument();
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "With Pagination (Course Catalogue API)",
  args: {
    renderApi: true,
    api: "Course Catalogue",
    itemsPerPage: 6
  },
  beforeEach: () => {
    window.history.pushState({}, "", "/?department=BIOL&division=Natural%20Sciences&term=Spring&pag=2");
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: {
        courses: tableCourses
      }
    });
    return () => {
      spy.mockRestore();
      resetStoryUrl();
    };
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await waitFor(() => {
      expect(canvas.getByText("Course Catalogue")).toBeInTheDocument();
    });
    await expect(axios.get).toHaveBeenCalledWith(COURSES_ENDPOINT);
    await waitFor(() => {
      expect(window.location.search).toContain("term=Spring");
    });
    const departmentSelect = canvas.getByLabelText("Select a department");
    const divisionSelect = canvas.getByLabelText("Select a division");
    await setNativeSelectOption(departmentSelect, "CHEM");
    await waitFor(() => {
      expect(window.location.search).toContain("department=CHEM");
    });
    await setNativeSelectOption(departmentSelect, "All Departments");
    await setNativeSelectOption(divisionSelect, "Humanities");
    await setNativeSelectOption(divisionSelect, "Interdisciplinary Studies");
    await setNativeSelectOption(divisionSelect, "Natural Sciences");
    await setNativeSelectOption(divisionSelect, "Social Sciences");
    await setNativeSelectOption(divisionSelect, "All Divisions");
    await userEvent.click(canvas.getByRole("button", {
      name: "Fall"
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: "January"
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: "All"
    }));
    const searchInput = canvas.getByPlaceholderText("Search");
    await userEvent.type(searchInput, "Marine");
    await expect(canvas.getAllByText("Marine Ecology Seminar").length).toBeGreaterThan(0);
    await userEvent.clear(searchInput);
    await userEvent.click(canvas.getAllByText("Marine Ecology Seminar")[0]);
    await waitFor(() => {
      expect(canvas.getAllByText("Prerequisite:").length).toBeGreaterThan(0);
    });
    await userEvent.click(canvas.getByRole("button", {
      name: "3"
    }));
    await waitFor(() => {
      expect(window.location.search).toContain("pag=3");
    });
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "With Search (Majors and Minors API)",
  args: {
    renderApi: true,
    api: "Majors and Minors",
    itemsPerPage: 12
  },
  beforeEach: () => {
    window.history.pushState({}, "", "/?division=Interdisciplinary%20Studies&term=Majors&pag=2");
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: majorsAndMinors
    });
    return () => {
      spy.mockRestore();
      resetStoryUrl();
    };
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await waitFor(() => {
      expect(canvas.getByText("Majors and Minors")).toBeInTheDocument();
    });
    await expect(axios.get).toHaveBeenCalledWith(MAJORS_MINORS_ENDPOINT);
    const divisionSelect = canvas.getByLabelText("Select a division");
    await setNativeSelectOption(divisionSelect, "Humanities");
    await setNativeSelectOption(divisionSelect, "Interdisciplinary Studies");
    await setNativeSelectOption(divisionSelect, "Natural Sciences");
    await setNativeSelectOption(divisionSelect, "Social Sciences");
    await setNativeSelectOption(divisionSelect, "All Divisions");
    await userEvent.click(canvas.getByRole("button", {
      name: "Minors"
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: "Majors"
    }));
    await userEvent.click(canvas.getByRole("button", {
      name: "All"
    }));
    const searchInput = canvas.getByPlaceholderText("Search");
    await userEvent.type(searchInput, "Jewish");
    await expect(canvas.getByText("Jewish Studies")).toBeInTheDocument();
    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, "Cinema");
    await expect(canvas.getByText("Cinema Studies")).toBeInTheDocument();
    await userEvent.clear(searchInput);
    await expect(canvas.getByText("African American Studies")).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("button", {
      name: "2"
    }));
    await waitFor(() => {
      expect(window.location.search).toContain("pag=2");
    });
    await expect(canvas.getByText(/Showing 12 of/)).toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source}}};const R=["Static","People","Offices","WithPagination","WithSearch"];export{u as Offices,p as People,l as Static,m as WithPagination,d as WithSearch,R as __namedExportsOrder,P as default};
