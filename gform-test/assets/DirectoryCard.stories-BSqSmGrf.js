import{c as o,a as t,e as s,h as i,l as r,t as l,F as y,i as v,o as n}from"./iframe-3prkjBEt.js";import{_ as k}from"./Picture-CZXuFJvM.js";import{_ as c}from"./Icon-CZmxeKm0.js";import"./preload-helper-DboIHg2a.js";const _={class:"directory-card mb-20 grid w-full max-w-screen-2xl grid-cols-8 gap-10"},V={key:0,class:"directory-card__image col-span-8 md:col-span-4"},B={class:"relative pb-[119.44444444444444%]"},w={class:"directory-card__main col-span-8 grid items-center md:col-span-4"},A={class:"directory-card__content"},D={class:"font-body text-24 leading-115 font-semibold text-indigo"},S={key:0,class:"mt-2 font-body text-12 leading-140 font-semibold text-indigo"},P={class:"mt-10 grid w-full grid-cols-4 gap-10"},O={class:"col-span-2"},L={class:"font-body text-16 leading-[1.5] font-normal text-indigo"},j={key:0,class:"col-span-2"},C={class:"font-body text-16 leading-[1.5] font-normal text-indigo"},E={class:"col-span-4"},H={class:"directiory_information grid grid-cols-4 gap-x-10 font-body text-12 leading-140 font-normal"},R={key:0,class:"col-span-2 mb-3"},N=["href"],T={key:1,class:"col-span-2 mb-3"},I=["href"],M={key:2,class:"col-span-2 mb-3"},$=["href"],J={key:3,class:"col-span-2 mb-3"},W=["href"],F={key:4,class:"col-span-2 mb-3"},q={class:"flex items-center text-indigo"},K={key:1,class:"col-span-4"},U={class:"font-body text-12 leading-130 font-normal text-indigo"},Y={key:2,class:"col-span-4"},z={class:"font-body text-12 leading-130 font-normal text-indigo"},G={class:"col-span-4"},Q={class:"font-body text-16 leading-[1.5] font-normal text-indigo"},X={class:"col-span-4"},Z={class:"grid grid-cols-4 gap-x-10 font-body text-12 leading-140 font-normal"},ee={key:0,class:"col-span-2 mb-3"},te=["href"],ae={key:1,class:"col-span-2 mb-3"},oe=["href"],ne={key:2,class:"col-span-2 mb-3"},ie=["href"],le={key:3,class:"col-span-2 mb-3"},se=["href"],re={key:4,class:"col-span-2 mb-3"},ce={class:"flex items-center text-indigo"},d={__name:"DirectoryCard",props:{post:{type:Object,default:()=>({})},image:{type:String,default:""},type:{type:String,default:"people"},name:{type:String,default:""},pronouns:{type:String,default:""},title:{type:String,default:""},department:{type:String,default:""},phone:{type:String,default:""},curriculum_vitae:{type:String,default:""},email:{type:String,default:""},fax:{type:String,default:""},location:{type:String,default:""},address:{type:String,default:""},office_hours:{type:String,default:""},hide_photo:{type:Boolean,default:!1},hide_pronouns:{type:Boolean,default:!1},hide_department:{type:Boolean,default:!1},hide_phone_number:{type:Boolean,default:!1},hide_cv:{type:Boolean,default:!1},hide_email:{type:Boolean,default:!1},hide_fax:{type:Boolean,default:!1},hide_location:{type:Boolean,default:!1},hide_office_hours:{type:Boolean,default:!1}},setup(e){const g=e,b=v(()=>g.image&&!g.hide_photo);return(de,a)=>(n(),o("div",_,[b.value?(n(),o("div",V,[t("div",B,[s(k,{class:"absolute h-full w-full object-cover",src:e.image,alt:`Image of ${g.name}`},null,8,["src","alt"])])])):i("",!0),t("div",w,[t("div",A,[t("h1",D,[a[0]||(a[0]=t("span",{class:"sr-only"},"Directory profile for ",-1)),r(" "+l(e.name),1)]),e.pronouns&&!e.hide_pronouns?(n(),o("div",S,l(e.pronouns),1)):i("",!0),t("div",P,[e.type==="people"?(n(),o(y,{key:0},[t("div",O,[a[1]||(a[1]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Title ",-1)),t("p",L,l(e.title),1)]),e.department&&!e.hide_department?(n(),o("div",j,[a[2]||(a[2]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Department ",-1)),t("p",C,l(e.department),1)])):i("",!0),t("div",E,[a[4]||(a[4]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Information ",-1)),t("ul",H,[e.phone&&!e.hide_phone_number?(n(),o("li",R,[t("a",{class:"flex min-h-[44px] min-w-[44px] items-center leading-[44px] text-indigo hover:text-coal hover:underline",href:`tel:${e.phone}`},[s(c,{name:"phone",class:"mr-1.5 h-3 fill-indigo"}),r(" "+l(e.phone),1)],8,N)])):i("",!0),e.curriculum_vitae&&!e.hide_cv?(n(),o("li",T,[t("a",{class:"flex min-h-[44px] min-w-[44px] items-center leading-[44px] text-indigo hover:text-coal hover:underline",href:e.curriculum_vitae,target:"_blank"},[s(c,{name:"clipboard",class:"mr-1.5 h-3 fill-indigo"}),a[3]||(a[3]=r(" Curriculum Vitae/Personal Webpage ",-1))],8,I)])):i("",!0),e.email&&!e.hide_email?(n(),o("li",M,[t("a",{class:"flex min-h-[44px] min-w-[44px] items-center leading-[44px] text-indigo hover:text-coal hover:underline",href:`mailto:${e.email}`},[s(c,{name:"email",class:"mr-1.5 h-3 fill-indigo"}),r(" "+l(e.email),1)],8,$)])):i("",!0),e.fax&&!e.hide_fax?(n(),o("li",J,[t("a",{class:"flex min-h-[44px] min-w-[44px] items-center leading-[44px] text-indigo hover:text-coal hover:underline",href:`tel:${e.fax}`},[s(c,{name:"fax",class:"mr-1.5 h-4 fill-indigo"}),r(" "+l(e.fax),1)],8,W)])):i("",!0),e.location&&!e.hide_location?(n(),o("li",F,[t("div",q,[s(c,{name:"location",class:"mr-1.5 h-3 fill-indigo"}),r(" "+l(e.location),1)])])):i("",!0)])]),e.address?(n(),o("div",K,[a[5]||(a[5]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Address ",-1)),t("p",U,l(e.address),1)])):i("",!0),e.office_hours&&!e.hide_office_hours?(n(),o("div",Y,[a[6]||(a[6]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Office Hours ",-1)),t("p",z,l(e.office_hours),1)])):i("",!0)],64)):e.type==="offices"?(n(),o(y,{key:1},[t("div",G,[a[7]||(a[7]=t("h2",{class:"mb-3 font-body text-10 leading-[1.5] font-bold tracking-8 text-indigo uppercase"}," Address ",-1)),t("p",Q,l(e.address),1)]),t("div",X,[a[9]||(a[9]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Links ",-1)),t("ul",Z,[e.phone?(n(),o("li",ee,[t("a",{class:"flex min-h-[44px] min-w-[44px] items-center leading-[44px] text-indigo hover:text-indigo hover:underline",href:`tel:${e.phone}`},[s(c,{name:"phone",class:"mr-1.5 h-3 fill-indigo"}),r(" "+l(e.phone),1)],8,te)])):i("",!0),e.curriculum_vitae?(n(),o("li",ae,[t("a",{class:"flex min-h-[44px] min-w-[44px] items-center leading-[44px] text-indigo hover:text-coal hover:underline",href:e.curriculum_vitae,target:"_blank"},[s(c,{name:"clipboard",class:"mr-1.5 h-3 fill-indigo"}),a[8]||(a[8]=r(" Curriculum Vitae/Personal Webpage ",-1))],8,oe)])):i("",!0),e.email?(n(),o("li",ne,[t("a",{class:"flex min-h-[44px] min-w-[44px] items-center leading-[44px] text-indigo hover:text-coal hover:underline",href:`mailto:${e.email}`},[s(c,{name:"email",class:"mr-1.5 h-3 fill-indigo"}),r(" "+l(e.email),1)],8,ie)])):i("",!0),e.fax?(n(),o("li",le,[t("a",{class:"flex min-h-[44px] min-w-[44px] items-center leading-[44px] text-indigo hover:text-coal hover:underline",href:`tel:${e.fax}`},[s(c,{name:"fax",class:"mr-1.5 h-4 fill-indigo"}),r(" "+l(e.fax),1)],8,se)])):i("",!0),e.location?(n(),o("li",re,[t("div",ce,[s(c,{name:"location",class:"mr-1.5 h-3 fill-indigo"}),r(" "+l(e.location),1)])])):i("",!0)])])],64)):i("",!0)])])])]))}};d.__docgenInfo=Object.assign({displayName:d.name??d.__name},{exportName:"default",displayName:"DirectoryCard",description:"",tags:{},props:[{name:"post",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"image",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"people"'}},{name:"name",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"pronouns",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"department",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"phone",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"curriculum_vitae",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"email",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"fax",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"location",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"address",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"office_hours",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"hide_photo",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hide_pronouns",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hide_department",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hide_phone_number",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hide_cv",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hide_email",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hide_fax",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hide_location",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hide_office_hours",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/DirectoryCard/DirectoryCard.vue"]});const{expect:pe}=__STORYBOOK_MODULE_TEST__,x={src:"https://placehold.co/400x400/012169/ffffff?text=Prof.+Doe",srcset:"https://placehold.co/400x400/012169/ffffff?text=Prof.+Doe 1x",alt:"Professor John Doe"},ge={title:"Core Components/Directory Card",component:d,argTypes:{type:{control:"radio",options:["people","offices"],description:"Switches between Person layout and Office layout"},name:{control:"text"},pronouns:{control:"text"},title:{control:"text"},department:{control:"text"},address:{control:"text"},location:{control:"text"},phone:{control:"text"},email:{control:"text"},fax:{control:"text"},curriculumVitae:{control:"text"},officeHours:{control:"text"},hidePhoto:{control:"boolean"},hidePronouns:{control:"boolean"},hideDepartment:{control:"boolean"},hidePhoneNumber:{control:"boolean"},hideCv:{control:"boolean"},hideEmail:{control:"boolean"},hideFax:{control:"boolean"},hideLocation:{control:"boolean"},hideOfficeHours:{control:"boolean"},image:{control:"object"},post:{control:"object"}},args:{inComponentLibrary:!0}},p=e=>({components:{DirectoryCard:d},setup(){return{args:e}},template:'<DirectoryCard v-bind="args" />'}),m={args:{type:"people",name:"Dr. Jane Smith",pronouns:"she/her/hers",title:"Associate Professor of Biology",department:"Department of Biological Sciences",phone:"555-0123",email:"jane.smith@colby.edu",location:"Arey Life Sciences 204",officeHours:"Mon/Wed 2:00pm - 4:00pm",curriculumVitae:"https://example.com/cv",image:x},render:p,play:async({canvas:e})=>{}},f={args:{type:"offices",name:"Office of the Registrar",address:"4000 Mayflower Hill, Waterville, ME 04901",phone:"207-859-4000",email:"registrar@colby.edu",fax:"207-859-4002",location:"Eustis 102",image:{src:"https://placehold.co/400x400/666666/ffffff?text=Office",alt:"Registrar Office"}},render:p,play:async({canvas:e})=>{}},u={args:{type:"people",name:"John Doe",title:"Visiting Assistant Professor",department:"English",email:"jdoe@colby.edu",image:{src:"",alt:""}},render:p,play:async({canvas:e})=>{}},h={args:{type:"people",name:"Private Contact",title:"Adjunct Instructor",department:"Physics",email:"hidden@colby.edu",phone:"555-9999",image:x,hidePhoneNumber:!0,hideEmail:!0,hidePhoto:!0},render:p,play:async({canvas:e})=>{}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const ye=["Person","Office","NoImage","RestrictedView"];export{u as NoImage,f as Office,m as Person,h as RestrictedView,ye as __namedExportsOrder,ge as default};
