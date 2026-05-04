import{c as o,a as t,e as r,j as i,t as s,F as b,q as c,k,o as n}from"./iframe-lCgBM3L3.js";import{_ as V}from"./Picture-C4P_JM5O.js";import{_ as d}from"./Icon-ZS6riMzK.js";import"./preload-helper-PPVm8Dsz.js";const _={class:"directory-card grid w-full max-w-screen-2xl grid-cols-8 gap-10"},B={key:0,class:"directory-card__image col-span-8 md:col-span-4"},A={class:"relative pb-[119.44444444444444%]"},P={class:"directory-card__main col-span-8 grid items-center md:col-span-4"},D={class:"directory-card__content"},S={class:"font-body text-24 leading-115 font-semibold text-indigo"},w={key:0,class:"mt-2 font-body text-12 leading-140 font-semibold text-indigo-800"},O={class:"mt-10 grid w-full grid-cols-4 gap-10"},L={class:"col-span-2"},j={class:"font-body text-16 leading-130 font-normal text-indigo-800"},C={key:0,class:"col-span-2"},E={class:"font-body text-16 leading-130 font-normal text-indigo-800"},H={class:"col-span-4"},R={class:"directiory_information grid grid-cols-4 gap-x-10 font-body text-12 leading-140 font-normal"},N={key:0,class:"col-span-2 mb-3"},T=["href"],I={key:1,class:"col-span-2 mb-3"},M=["href"],$={key:2,class:"col-span-2 mb-3"},J=["href"],W={key:3,class:"col-span-2 mb-3"},F=["href"],q={key:4,class:"col-span-2 mb-3"},K={class:"flex items-center text-indigo-800"},U={key:1,class:"col-span-4"},Y={class:"font-body text-12 leading-130 font-normal text-indigo-800"},z={key:2,class:"col-span-4"},G={class:"font-body text-12 leading-130 font-normal text-indigo-800"},Q={class:"col-span-4"},X={class:"font-body text-16 leading-130 font-normal text-indigo-800"},Z={class:"col-span-4"},ee={class:"grid grid-cols-4 gap-x-10 font-body text-12 leading-140 font-normal"},te={key:0,class:"col-span-2 mb-3"},ae=["href"],oe={key:1,class:"col-span-2 mb-3"},ne=["href"],ie={key:2,class:"col-span-2 mb-3"},se=["href"],le={key:3,class:"col-span-2 mb-3"},re=["href"],ce={key:4,class:"col-span-2 mb-3"},de={class:"flex items-center text-indigo-800"},f={__name:"DirectoryCard",props:{post:{type:Object,default:()=>({})},image:{type:String,default:""},type:{type:String,default:"people"},name:{type:String,default:""},pronouns:{type:String,default:""},title:{type:String,default:""},department:{type:String,default:""},phone:{type:String,default:""},curriculum_itae:{type:String,default:""},email:{type:String,default:""},fax:{type:String,default:""},location:{type:String,default:""},address:{type:String,default:""},office_hours:{type:String,default:""},hide_photo:{type:Boolean,default:!1},hide_pronouns:{type:Boolean,default:!1},hide_department:{type:Boolean,default:!1},hide_phone_number:{type:Boolean,default:!1},hide_cv:{type:Boolean,default:!1},hide_email:{type:Boolean,default:!1},hide_fax:{type:Boolean,default:!1},hide_location:{type:Boolean,default:!1},hide_office_hours:{type:Boolean,default:!1}},setup(e){const y=e,x=k(()=>y.image&&!y.hidePhoto);return(l,a)=>(n(),o("div",_,[x.value?(n(),o("div",B,[t("div",A,[r(V,{class:"absolute h-full w-full object-cover",src:e.image,alt:`Image of ${y.name}`},null,8,["src","alt"])])])):i("",!0),t("div",P,[t("div",D,[t("h1",S,s(e.name),1),e.pronouns&&!l.hidePronouns?(n(),o("div",w,s(e.pronouns),1)):i("",!0),t("div",O,[e.type==="people"?(n(),o(b,{key:0},[t("div",L,[a[0]||(a[0]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Title ",-1)),t("p",j,s(e.title),1)]),e.department&&!l.hideDepartment?(n(),o("div",C,[a[1]||(a[1]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Department ",-1)),t("p",E,s(e.department),1)])):i("",!0),t("div",H,[a[3]||(a[3]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Information ",-1)),t("ul",R,[e.phone&&!l.hidePhoneNumber?(n(),o("li",N,[t("a",{class:"flex items-center text-indigo-800 hover:text-indigo hover:underline",href:`tel:${e.phone}`},[r(d,{name:"phone",class:"mr-1.5 h-3 fill-indigo-800"}),c(" "+s(e.phone),1)],8,T)])):i("",!0),l.curriculumVitae&&!l.hideCv?(n(),o("li",I,[t("a",{class:"flex items-center text-indigo-800 hover:text-indigo hover:underline",href:l.curriculumVitae,target:"_blank"},[r(d,{name:"clipboard",class:"mr-1.5 h-3 fill-indigo-800"}),a[2]||(a[2]=c(" Curriculum Vitae/Personal Webpage ",-1))],8,M)])):i("",!0),e.email&&!l.hideEmail?(n(),o("li",$,[t("a",{class:"flex items-center text-indigo-800 hover:text-indigo hover:underline",href:`mailto:${e.email}`},[r(d,{name:"email",class:"mr-1.5 h-3 fill-indigo-800"}),c(" "+s(e.email),1)],8,J)])):i("",!0),e.fax&&!l.hideFax?(n(),o("li",W,[t("a",{class:"flex items-center text-indigo-800 hover:text-indigo hover:underline",href:`tel:${e.fax}`},[r(d,{name:"fax",class:"mr-1.5 h-4 fill-indigo-800"}),c(" "+s(e.fax),1)],8,F)])):i("",!0),e.location&&!l.hideLocation?(n(),o("li",q,[t("div",K,[r(d,{name:"location",class:"mr-1.5 h-3 fill-indigo-800"}),c(" "+s(e.location),1)])])):i("",!0)])]),e.address?(n(),o("div",U,[a[4]||(a[4]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Address ",-1)),t("p",Y,s(e.address),1)])):i("",!0),l.officeHours&&!l.hideOfficeHours?(n(),o("div",z,[a[5]||(a[5]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Office Hours ",-1)),t("p",G,s(l.officeHours),1)])):i("",!0)],64)):e.type==="offices"?(n(),o(b,{key:1},[t("div",Q,[a[6]||(a[6]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Address ",-1)),t("p",X,s(e.address),1)]),t("div",Z,[a[8]||(a[8]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Links ",-1)),t("ul",ee,[e.phone?(n(),o("li",te,[t("a",{class:"flex items-center text-indigo-800 hover:text-indigo hover:underline",href:`tel:${e.phone}`},[r(d,{name:"phone",class:"mr-1.5 h-3 fill-indigo-800"}),c(" "+s(e.phone),1)],8,ae)])):i("",!0),l.curriculumVitae?(n(),o("li",oe,[t("a",{class:"flex items-center text-indigo-800 hover:text-indigo hover:underline",href:l.curriculumVitae,target:"_blank"},[r(d,{name:"clipboard",class:"mr-1.5 h-3 fill-indigo-800"}),a[7]||(a[7]=c(" Curriculum Vitae/Personal Webpage ",-1))],8,ne)])):i("",!0),e.email?(n(),o("li",ie,[t("a",{class:"flex items-center text-indigo-800 hover:text-indigo hover:underline",href:`mailto:${e.email}`},[r(d,{name:"email",class:"mr-1.5 h-3 fill-indigo-800"}),c(" "+s(e.email),1)],8,se)])):i("",!0),e.fax?(n(),o("li",le,[t("a",{class:"flex items-center text-indigo-800 hover:text-indigo hover:underline",href:`tel:${e.fax}`},[r(d,{name:"fax",class:"mr-1.5 h-4 fill-indigo-800"}),c(" "+s(e.fax),1)],8,re)])):i("",!0),e.location?(n(),o("li",ce,[t("div",de,[r(d,{name:"location",class:"mr-1.5 h-3 fill-indigo-800"}),c(" "+s(e.location),1)])])):i("",!0)])])],64)):i("",!0)])])])]))}};f.__docgenInfo=Object.assign({displayName:f.name??f.__name},{exportName:"default",displayName:"DirectoryCard",description:"",tags:{},props:[{name:"post",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"image",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"people"'}},{name:"name",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"pronouns",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"department",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"phone",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"curriculum_itae",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"email",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"fax",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"location",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"address",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"office_hours",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"hide_photo",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hide_pronouns",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hide_department",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hide_phone_number",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hide_cv",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hide_email",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hide_fax",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hide_location",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hide_office_hours",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/DirectoryCard/DirectoryCard.vue"]});const{expect:pe}=__STORYBOOK_MODULE_TEST__,v={src:"https://placehold.co/400x400/012169/ffffff?text=Prof.+Doe",srcset:"https://placehold.co/400x400/012169/ffffff?text=Prof.+Doe 1x",alt:"Professor John Doe"},ge={title:"Core Components/Directory Card",component:f,argTypes:{type:{control:"radio",options:["people","offices"],description:"Switches between Person layout and Office layout"},name:{control:"text"},pronouns:{control:"text"},title:{control:"text"},department:{control:"text"},address:{control:"text"},location:{control:"text"},phone:{control:"text"},email:{control:"text"},fax:{control:"text"},curriculumVitae:{control:"text"},officeHours:{control:"text"},hidePhoto:{control:"boolean"},hidePronouns:{control:"boolean"},hideDepartment:{control:"boolean"},hidePhoneNumber:{control:"boolean"},hideCv:{control:"boolean"},hideEmail:{control:"boolean"},hideFax:{control:"boolean"},hideLocation:{control:"boolean"},hideOfficeHours:{control:"boolean"},image:{control:"object"},post:{control:"object"}},args:{inComponentLibrary:!0}},g=e=>({components:{DirectoryCard:f},setup(){return{args:e}},template:'<DirectoryCard v-bind="args" />'}),m={args:{type:"people",name:"Dr. Jane Smith",pronouns:"she/her/hers",title:"Associate Professor of Biology",department:"Department of Biological Sciences",phone:"555-0123",email:"jane.smith@colby.edu",location:"Arey Life Sciences 204",officeHours:"Mon/Wed 2:00pm - 4:00pm",curriculumVitae:"https://example.com/cv",image:v},render:g,play:async({canvas:e})=>{}},u={args:{type:"offices",name:"Office of the Registrar",address:"4000 Mayflower Hill, Waterville, ME 04901",phone:"207-859-4000",email:"registrar@colby.edu",fax:"207-859-4002",location:"Eustis 102",image:{src:"https://placehold.co/400x400/666666/ffffff?text=Office",alt:"Registrar Office"}},render:g,play:async({canvas:e})=>{}},h={args:{type:"people",name:"John Doe",title:"Visiting Assistant Professor",department:"English",email:"jdoe@colby.edu",image:{src:"",alt:""}},render:g,play:async({canvas:e})=>{}},p={args:{type:"people",name:"Private Contact",title:"Adjunct Instructor",department:"Physics",email:"hidden@colby.edu",phone:"555-9999",image:v,hidePhoneNumber:!0,hideEmail:!0,hidePhoto:!0},render:g,play:async({canvas:e})=>{}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: "people",
    name: "Dr. Jane Smith",
    pronouns: "she/her/hers",
    title: "Associate Professor of Biology",
    department: "Department of Biological Sciences",
    phone: "555-0123",
    email: "jane.smith@colby.edu",
    location: "Arey Life Sciences 204",
    officeHours: "Mon/Wed 2:00pm - 4:00pm",
    curriculumVitae: "https://example.com/cv",
    image: mockImage
  },
  render,
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    // Assert name is visible
    await expect(canvas.getByText("Dr. Jane Smith")).toBeVisible();

    // Assert phone link has tel: href
    const phoneLink = canvas.getByRole("link", {
      name: /555-0123/
    });
    await expect(phoneLink).toHaveAttribute("href", "tel:555-0123");

    // Assert email link has mailto: href
    const emailLink = canvas.getByRole("link", {
      name: /jane\\.smith@colby\\.edu/
    });
    await expect(emailLink).toHaveAttribute("href", "mailto:jane.smith@colby.edu");
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    type: "offices",
    name: "Office of the Registrar",
    address: "4000 Mayflower Hill, Waterville, ME 04901",
    phone: "207-859-4000",
    email: "registrar@colby.edu",
    fax: "207-859-4002",
    location: "Eustis 102",
    image: {
      src: "https://placehold.co/400x400/666666/ffffff?text=Office",
      alt: "Registrar Office"
    }
  },
  render,
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    // Assert office name is visible
    await expect(canvas.getByText("Office of the Registrar")).toBeVisible();

    // Assert phone link has tel: href
    const phoneLink = canvas.getByRole("link", {
      name: /207-859-4000/
    });
    await expect(phoneLink).toHaveAttribute("href", "tel:207-859-4000");

    // Assert email link has mailto: href
    const emailLink = canvas.getByRole("link", {
      name: /registrar@colby\\.edu/
    });
    await expect(emailLink).toHaveAttribute("href", "mailto:registrar@colby.edu");

    // Assert location is visible
    await expect(canvas.getByText("Eustis 102")).toBeVisible();
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    type: "people",
    name: "John Doe",
    title: "Visiting Assistant Professor",
    department: "English",
    email: "jdoe@colby.edu",
    // No image object provided
    image: {
      src: "",
      alt: ""
    }
  },
  render,
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    // Assert name is visible
    await expect(canvas.getByText("John Doe")).toBeVisible();

    // Assert title is visible
    await expect(canvas.getByText("Visiting Assistant Professor")).toBeVisible();

    // Assert email link has mailto: href
    const emailLink = canvas.getByRole("link", {
      name: /jdoe@colby\\.edu/
    });
    await expect(emailLink).toHaveAttribute("href", "mailto:jdoe@colby.edu");
  }
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: "people",
    name: "Private Contact",
    title: "Adjunct Instructor",
    department: "Physics",
    email: "hidden@colby.edu",
    phone: "555-9999",
    image: mockImage,
    // Hiding specific fields via props
    hidePhoneNumber: true,
    hideEmail: true,
    hidePhoto: true
  },
  render,
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    // Assert name is visible even in restricted view
    await expect(canvas.getByText("Private Contact")).toBeVisible();

    // Assert title is visible
    await expect(canvas.getByText("Adjunct Instructor")).toBeVisible();

    // Phone and email should not be visible due to hide flags
    const phoneLinks = canvas.queryAllByRole("link", {
      name: /555-9999/
    });
    expect(phoneLinks).toHaveLength(0);
    const emailLinks = canvas.queryAllByRole("link", {
      name: /hidden@colby\\.edu/
    });
    expect(emailLinks).toHaveLength(0);
  }
}`,...p.parameters?.docs?.source}}};const ye=["Person","Office","NoImage","RestrictedView"];export{h as NoImage,u as Office,m as Person,p as RestrictedView,ye as __namedExportsOrder,ge as default};
