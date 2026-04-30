import{a as r}from"./index-DZ_Kha3d.js";import l from"./Table-wLmg4dXA.js";import{b as p,d}from"./mock-data-Db_ZkuBv.js";import"./iframe-Bmd2UPGG.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-Bb0f54f8.js";const{expect:a,spyOn:m,waitFor:n}=__STORYBOOK_MODULE_TEST__,g="https://www.colby.edu/endpoints/v1/courses/",s=()=>{window.history.pushState({},"","/")},u=p(40),y=[...u,...Array.from({length:12},(t,e)=>({dept:"BIOL",longTitle:`Biology Field Study ${e+1}`,secTitle:e%2===0?`Biology Field Study ${e+1}`:"",sessOffered:e%3===0?"FA":e%3===1?"SP":"JP",crsno:`BI3${String(e+1).padStart(2,"0")}`,abstr:`<p>Hands-on biology practicum ${e+1}.</p>`,prereq:e%2===0?"BI101":"",area:e%2===0?"S":"",labsci:e%4===0?"L":"",writing:e%5===0?"W2":"",diversity:e%3===0?"US":"",minhrs:1,maxhrs:e%6===0?2:1,sections:[{faculty:[{faculty_name:`Faculty${e+1}, Biology`}]}]}))];d();const x={title:"Blocks/Table",component:l,tags:["!autodocs"],argTypes:{render_api:{name:"Render API",control:{type:"boolean"},table:{category:"Wordpress Fields"}},api:{name:"API",control:{type:"inline-radio"},options:["Majors and Minors","Department Courses","Course Catalogue","Departments","Offices"],table:{category:"Wordpress Fields"},if:{arg:"render_api",eq:!0}},headings:{name:"Headings",control:"object",if:{arg:"render_api",eq:!1},table:{category:"Wordpress Fields"}},items:{name:"Items",control:"object",if:{arg:"render_api",eq:!1},table:{category:"Wordpress Fields"}},itemsPerPage:{name:"Items Per Page",control:{type:"number",min:1,step:1},if:{arg:"render_api",eq:!0},table:{category:"Wordpress Fields"}},departmentCode:{table:{disable:!0}},externalItems:{table:{disable:!0}},default:{table:{disable:!0}}}},o={name:"Table",args:{render_api:!0,api:"Majors and Minors",departmentCode:"BIOL",itemsPerPage:5},beforeEach:()=>{s();const t=m(r,"get").mockResolvedValue({data:{courses:y}});return()=>{t.mockRestore(),s()}},play:async({canvas:t,userEvent:e})=>{await n(()=>{a(t.getByText("Department Courses")).toBeInTheDocument()}),await a(r.get).toHaveBeenCalledWith(g),await a(t.getByText("Cell Biology")).toBeInTheDocument();const i=t.getByPlaceholderText("Search");await e.type(i,"Field Study"),await a(t.getByText("Biology Field Study 1")).toBeInTheDocument(),await e.click(t.getByRole("button",{name:"Spring"})),await n(()=>{a(window.location.search).toContain("term=Spring")}),await e.click(t.getByRole("button",{name:"All"}));const c=t.getByRole("button",{name:"2"});await e.click(c),await n(()=>{a(window.location.search).toContain("pag=2")})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Table",
  args: {
    render_api: true,
    api: "Majors and Minors",
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
}`,...o.parameters?.docs?.source}}};const C=["Static"];export{o as Static,C as __namedExportsOrder,x as default};
