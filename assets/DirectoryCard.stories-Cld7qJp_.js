import{c as o,a as t,e as c,m as l,t as s,F as v,g as d,l as u,d as i}from"./iframe-BfBFAde5.js";import{_ as P}from"./Picture-CxKtrm5G.js";import{_ as m}from"./Icon-BG0snce_.js";import"./preload-helper-PPVm8Dsz.js";const w={class:"directory-card grid w-full max-w-screen-2xl grid-cols-8 gap-10"},L={key:0,class:"directory-card__image col-span-8 md:col-span-4"},S={class:"relative pb-[119.44444444444444%]"},D={class:"directory-card__main col-span-8 grid items-center md:col-span-4"},H={class:"directory-card__content"},j={class:"font-body text-24 leading-115 font-semibold text-indigo"},O={key:0,class:"mt-2 font-body text-12 leading-140 font-semibold text-indigo-800"},R={class:"mt-10 grid w-full grid-cols-4 gap-10"},C={class:"col-span-2"},T={class:"font-body text-16 leading-130 font-normal text-indigo-800"},E={key:0,class:"col-span-2"},N={class:"font-body text-16 leading-130 font-normal text-indigo-800"},I={class:"col-span-4"},$={class:"directiory_information grid grid-cols-4 gap-x-10 font-body text-12 leading-140 font-normal"},J={key:0,class:"col-span-2 mb-3"},M=["href"],F={key:1,class:"col-span-2 mb-3"},q=["href"],W={key:2,class:"col-span-2 mb-3"},_=["href"],z={key:3,class:"col-span-2 mb-3"},K=["href"],U={key:4,class:"col-span-2 mb-3"},Y={class:"flex items-center text-indigo-800"},G={key:1,class:"col-span-4"},Q={class:"font-body text-12 leading-130 font-normal text-indigo-800"},X={key:2,class:"col-span-4"},Z={class:"font-body text-12 leading-130 font-normal text-indigo-800"},ee={class:"col-span-4"},te={class:"font-body text-16 leading-130 font-normal text-indigo-800"},ne={class:"col-span-4"},ae={class:"grid grid-cols-4 gap-x-10 font-body text-12 leading-140 font-normal"},oe={key:0,class:"col-span-2 mb-3"},ie=["href"],le={key:1,class:"col-span-2 mb-3"},se=["href"],re={key:2,class:"col-span-2 mb-3"},ce=["href"],de={key:3,class:"col-span-2 mb-3"},me=["href"],fe={key:4,class:"col-span-2 mb-3"},ue={class:"flex items-center text-indigo-800"},x={__name:"DirectoryCard",props:{post:{type:Object,default:()=>({})},image:{type:Object,default:()=>({})},type:{type:String,default:"people"},name:{type:String,default:""},pronouns:{type:String,default:""},title:{type:String,default:""},department:{type:String,default:""},phone:{type:String,default:""},curriculumVitae:{type:String,default:""},email:{type:String,default:""},fax:{type:String,default:""},location:{type:String,default:""},address:{type:String,default:""},officeHours:{type:String,default:""},hidePhoto:{type:Boolean,default:!1},hidePronouns:{type:Boolean,default:!1},hideDepartment:{type:Boolean,default:!1},hidePhoneNumber:{type:Boolean,default:!1},hideCv:{type:Boolean,default:!1},hideEmail:{type:Boolean,default:!1},hideFax:{type:Boolean,default:!1},hideLocation:{type:Boolean,default:!1},hideOfficeHours:{type:Boolean,default:!1}},setup(e){const n=e,f=u(()=>(n.post.thumbnail||n.image.src)&&!n.hidePhoto),B=u(()=>n.image.alt?n.image.alt:n.post.first_name&&n.post.last_name?`Image of ${n.post.first_name} ${n.post.last_name}`:"Directory Image"),V=u(()=>n.post?.thumbnail?.src?n.post.thumbnail.src("Square"):n.image.src),A=u(()=>n.post?.thumbnail?.src?n.post.thumbnail.src("Square_mobile"):n.image.src);return(he,a)=>(i(),o("div",w,[f.value?(i(),o("div",L,[t("div",S,[c(P,{class:"absolute h-full w-full object-cover",srcset:e.image.srcset,src:e.image.src,sizeDesktop:V.value,sizeMobile:A.value,alt:B.value},null,8,["srcset","src","sizeDesktop","sizeMobile","alt"])])])):l("",!0),t("div",D,[t("div",H,[t("h1",j,s(e.name),1),e.pronouns&&!e.hidePronouns?(i(),o("div",O,s(e.pronouns),1)):l("",!0),t("div",R,[e.type==="people"?(i(),o(v,{key:0},[t("div",C,[a[0]||(a[0]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Title ",-1)),t("p",T,s(e.title),1)]),e.department&&!e.hideDepartment?(i(),o("div",E,[a[1]||(a[1]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Department ",-1)),t("p",N,s(e.department),1)])):l("",!0),t("div",I,[a[3]||(a[3]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Information ",-1)),t("ul",$,[e.phone&&!e.hidePhoneNumber?(i(),o("li",J,[t("a",{class:"flex items-center text-indigo-800 hover:text-indigo hover:underline",href:`tel:${e.phone}`},[c(m,{name:"phone",class:"mr-1.5 h-3 fill-indigo-800"}),d(" "+s(e.phone),1)],8,M)])):l("",!0),e.curriculumVitae&&!e.hideCv?(i(),o("li",F,[t("a",{class:"flex items-center text-indigo-800 hover:text-indigo hover:underline",href:e.curriculumVitae,target:"_blank"},[c(m,{name:"clipboard",class:"mr-1.5 h-3 fill-indigo-800"}),a[2]||(a[2]=d(" Curriculum Vitae/Personal Webpage ",-1))],8,q)])):l("",!0),e.email&&!e.hideEmail?(i(),o("li",W,[t("a",{class:"flex items-center text-indigo-800 hover:text-indigo hover:underline",href:`mailto:${e.email}`},[c(m,{name:"email",class:"mr-1.5 h-3 fill-indigo-800"}),d(" "+s(e.email),1)],8,_)])):l("",!0),e.fax&&!e.hideFax?(i(),o("li",z,[t("a",{class:"flex items-center text-indigo-800 hover:text-indigo hover:underline",href:`tel:${e.fax}`},[c(m,{name:"fax",class:"mr-1.5 h-4 fill-indigo-800"}),d(" "+s(e.fax),1)],8,K)])):l("",!0),e.location&&!e.hideLocation?(i(),o("li",U,[t("div",Y,[c(m,{name:"location",class:"mr-1.5 h-3 fill-indigo-800"}),d(" "+s(e.location),1)])])):l("",!0)])]),e.address?(i(),o("div",G,[a[4]||(a[4]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Address ",-1)),t("p",Q,s(e.address),1)])):l("",!0),e.officeHours&&!e.hideOfficeHours?(i(),o("div",X,[a[5]||(a[5]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Office Hours ",-1)),t("p",Z,s(e.officeHours),1)])):l("",!0)],64)):e.type==="offices"?(i(),o(v,{key:1},[t("div",ee,[a[6]||(a[6]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Address ",-1)),t("p",te,s(e.address),1)]),t("div",ne,[a[8]||(a[8]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Links ",-1)),t("ul",ae,[e.phone?(i(),o("li",oe,[t("a",{class:"flex items-center text-indigo-800 hover:text-indigo hover:underline",href:`tel:${e.phone}`},[c(m,{name:"phone",class:"mr-1.5 h-3 fill-indigo-800"}),d(" "+s(e.phone),1)],8,ie)])):l("",!0),e.curriculumVitae?(i(),o("li",le,[t("a",{class:"flex items-center text-indigo-800 hover:text-indigo hover:underline",href:e.curriculumVitae,target:"_blank"},[c(m,{name:"clipboard",class:"mr-1.5 h-3 fill-indigo-800"}),a[7]||(a[7]=d(" Curriculum Vitae/Personal Webpage ",-1))],8,se)])):l("",!0),e.email?(i(),o("li",re,[t("a",{class:"flex items-center text-indigo-800 hover:text-indigo hover:underline",href:`mailto:${e.email}`},[c(m,{name:"email",class:"mr-1.5 h-3 fill-indigo-800"}),d(" "+s(e.email),1)],8,ce)])):l("",!0),e.fax?(i(),o("li",de,[t("a",{class:"flex items-center text-indigo-800 hover:text-indigo hover:underline",href:`tel:${e.fax}`},[c(m,{name:"fax",class:"mr-1.5 h-4 fill-indigo-800"}),d(" "+s(e.fax),1)],8,me)])):l("",!0),e.location?(i(),o("li",fe,[t("div",ue,[c(m,{name:"location",class:"mr-1.5 h-3 fill-indigo-800"}),d(" "+s(e.location),1)])])):l("",!0)])])],64)):l("",!0)])])])]))}};x.__docgenInfo={exportName:"default",displayName:"DirectoryCard",description:"",tags:{},props:[{name:"post",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"image",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"people"'}},{name:"name",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"pronouns",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"department",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"phone",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"curriculumVitae",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"email",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"fax",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"location",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"address",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"officeHours",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"hidePhoto",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hidePronouns",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideDepartment",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hidePhoneNumber",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideCv",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideEmail",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideFax",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideLocation",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideOfficeHours",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/DirectoryCard/DirectoryCard.vue"]};const{expect:r}=__STORYBOOK_MODULE_TEST__,k={src:"https://placehold.co/400x400/012169/ffffff?text=Prof.+Doe",srcset:"https://placehold.co/400x400/012169/ffffff?text=Prof.+Doe 1x",alt:"Professor John Doe"},xe={title:"Core Components/Directory Card",component:x,argTypes:{type:{control:"radio",options:["people","offices"],description:"Switches between Person layout and Office layout"},name:{control:"text"},pronouns:{control:"text"},title:{control:"text"},department:{control:"text"},address:{control:"text"},location:{control:"text"},phone:{control:"text"},email:{control:"text"},fax:{control:"text"},curriculumVitae:{control:"text"},officeHours:{control:"text"},hidePhoto:{control:"boolean"},hidePronouns:{control:"boolean"},hideDepartment:{control:"boolean"},hidePhoneNumber:{control:"boolean"},hideCv:{control:"boolean"},hideEmail:{control:"boolean"},hideFax:{control:"boolean"},hideLocation:{control:"boolean"},hideOfficeHours:{control:"boolean"},image:{control:"object"},post:{control:"object"}},args:{inComponentLibrary:!0}},b=e=>({components:{DirectoryCard:x},setup(){return{args:e}},template:'<DirectoryCard v-bind="args" />'}),h={args:{type:"people",name:"Dr. Jane Smith",pronouns:"she/her/hers",title:"Associate Professor of Biology",department:"Department of Biological Sciences",phone:"555-0123",email:"jane.smith@colby.edu",location:"Arey Life Sciences 204",officeHours:"Mon/Wed 2:00pm - 4:00pm",curriculumVitae:"https://example.com/cv",image:k},render:b,play:async({canvas:e})=>{await r(e.getByText("Dr. Jane Smith")).toBeVisible();const n=e.getByRole("link",{name:/555-0123/});await r(n).toHaveAttribute("href","tel:555-0123");const f=e.getByRole("link",{name:/jane\.smith@colby\.edu/});await r(f).toHaveAttribute("href","mailto:jane.smith@colby.edu")}},g={args:{type:"offices",name:"Office of the Registrar",address:"4000 Mayflower Hill, Waterville, ME 04901",phone:"207-859-4000",email:"registrar@colby.edu",fax:"207-859-4002",location:"Eustis 102",image:{src:"https://placehold.co/400x400/666666/ffffff?text=Office",alt:"Registrar Office"}},render:b,play:async({canvas:e})=>{await r(e.getByText("Office of the Registrar")).toBeVisible();const n=e.getByRole("link",{name:/207-859-4000/});await r(n).toHaveAttribute("href","tel:207-859-4000");const f=e.getByRole("link",{name:/registrar@colby\.edu/});await r(f).toHaveAttribute("href","mailto:registrar@colby.edu"),await r(e.getByText("Eustis 102")).toBeVisible()}},y={args:{type:"people",name:"John Doe",title:"Visiting Assistant Professor",department:"English",email:"jdoe@colby.edu",image:{src:"",alt:""}},render:b,play:async({canvas:e})=>{await r(e.getByText("John Doe")).toBeVisible(),await r(e.getByText("Visiting Assistant Professor")).toBeVisible();const n=e.getByRole("link",{name:/jdoe@colby\.edu/});await r(n).toHaveAttribute("href","mailto:jdoe@colby.edu")}},p={args:{type:"people",name:"Private Contact",title:"Adjunct Instructor",department:"Physics",email:"hidden@colby.edu",phone:"555-9999",image:k,hidePhoneNumber:!0,hideEmail:!0,hidePhoto:!0},render:b,play:async({canvas:e})=>{await r(e.getByText("Private Contact")).toBeVisible(),await r(e.getByText("Adjunct Instructor")).toBeVisible();const n=e.queryAllByRole("link",{name:/555-9999/});r(n).toHaveLength(0);const f=e.queryAllByRole("link",{name:/hidden@colby\.edu/});r(f).toHaveLength(0)}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const ve=["Person","Office","NoImage","RestrictedView"];export{y as NoImage,g as Office,h as Person,p as RestrictedView,ve as __namedExportsOrder,xe as default};
