import{a as c}from"./index-DZ_Kha3d.js";import u from"./Table-By4Cd2_q.js";import{b as m,d}from"./mock-data-Db_ZkuBv.js";import"./iframe-0N6o4Hv8.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-essYXaTE.js";const{expect:x,spyOn:l,waitFor:I}=__STORYBOOK_MODULE_TEST__,r=()=>{window.history.pushState({},"","/")},v=m(40),p=[...v,...Array.from({length:12},(t,e)=>({dept:"BIOL",longTitle:`Biology Field Study ${e+1}`,secTitle:e%2===0?`Biology Field Study ${e+1}`:"",sessOffered:e%3===0?"FA":e%3===1?"SP":"JP",crsno:`BI3${String(e+1).padStart(2,"0")}`,abstr:`<p>Hands-on biology practicum ${e+1}.</p>`,prereq:e%2===0?"BI101":"",area:e%2===0?"S":"",labsci:e%4===0?"L":"",writing:e%5===0?"W2":"",diversity:e%3===0?"US":"",minhrs:1,maxhrs:e%6===0?2:1,sections:[{faculty:[{faculty_name:`Faculty${e+1}, Biology`}]}]}))],g=d(),T={title:"Core Components/Table",component:u,tags:["autodocs"]},a={name:"Static (Department Courses API)",args:{renderApi:!0,api:"Department Courses",departmentCode:"BIOL",itemsPerPage:5},beforeEach:()=>{r();const t=l(c,"get").mockResolvedValue({data:{courses:p}});return()=>{t.mockRestore(),r()}},play:async({canvas:t,userEvent:e})=>{}},s={name:"People Directory",args:{renderApi:!1,api:"People",externalItems:[{post_title:"Jane Smith",post_name:"jane-smith",thumbnail:"https://placehold.co/100x100",business_title:"Professor of Biology",department:"Biology"},{post_title:"John Doe",post_name:"john-doe",thumbnail:"https://placehold.co/100x100",business_title:"Associate Professor",department:"Chemistry"},{post_title:"Alice Johnson",post_name:"alice-johnson",thumbnail:"",business_title:"Lecturer",department:""}]},play:async({canvas:t,userEvent:e})=>{}},n={name:"Offices Directory",args:{renderApi:!1,api:"Offices",externalItems:[{post_title:"Office of Admissions",post_name:"admissions"},{post_title:"Financial Aid Office",post_name:"financial-aid"},{post_title:"Registrar's Office",post_name:"registrar"},{post_title:"Dean of Students",post_name:"dean-of-students"}]},play:async({canvas:t,userEvent:e})=>{}},o={name:"With Pagination (Course Catalogue API)",args:{renderApi:!0,api:"Course Catalogue",itemsPerPage:6},beforeEach:()=>{window.history.pushState({},"","/?department=BIOL&division=Natural%20Sciences&term=Spring&pag=2");const t=l(c,"get").mockResolvedValue({data:{courses:p}});return()=>{t.mockRestore(),r()}},play:async({canvas:t,userEvent:e})=>{}},i={name:"With Search (Majors and Minors API)",args:{renderApi:!0,api:"Majors and Minors",itemsPerPage:12},beforeEach:()=>{window.history.pushState({},"","/?division=Interdisciplinary%20Studies&term=Majors&pag=2");const t=l(c,"get").mockResolvedValue({data:g});return()=>{t.mockRestore(),r()}},play:async({canvas:t,userEvent:e})=>{}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Office of Admissions")).toBeInTheDocument();
    await expect(canvas.getByText("Financial Aid Office")).toBeInTheDocument();
    const searchInput = canvas.getByPlaceholderText("Search");
    await userEvent.type(searchInput, "Registrar");
    await expect(canvas.getByText("Registrar's Office")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
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
}`,...i.parameters?.docs?.source}}};const E=["Static","People","Offices","WithPagination","WithSearch"];export{n as Offices,s as People,a as Static,o as WithPagination,i as WithSearch,E as __namedExportsOrder,T as default};
