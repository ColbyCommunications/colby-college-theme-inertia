import{c as o,a as t,e as r,j as i,t as l,F as b,p as c,k as f,o as n}from"./iframe-UIbP18SM.js";import{_ as P}from"./Picture-DwnzuAws.js";import{_ as d}from"./Icon-DwG5iPf-.js";import"./preload-helper-PPVm8Dsz.js";const D={class:"directory-card grid w-full max-w-screen-2xl grid-cols-8 gap-10"},A={key:0,class:"directory-card__image col-span-8 md:col-span-4"},S={class:"relative pb-[119.44444444444444%]"},O={class:"directory-card__main col-span-8 grid items-center md:col-span-4"},L={class:"directory-card__content"},w={class:"font-body text-24 leading-115 font-semibold text-indigo"},j={key:0,class:"mt-2 font-body text-12 leading-140 font-semibold text-indigo-800"},H={class:"mt-10 grid w-full grid-cols-4 gap-10"},C={class:"col-span-2"},E={class:"font-body text-16 leading-130 font-normal text-indigo-800"},N={key:0,class:"col-span-2"},R={class:"font-body text-16 leading-130 font-normal text-indigo-800"},I={class:"col-span-4"},M={class:"directiory_information grid grid-cols-4 gap-x-10 font-body text-12 leading-140 font-normal"},T={key:0,class:"col-span-2 mb-3"},$=["href"],F={key:1,class:"col-span-2 mb-3"},J=["href"],_={key:2,class:"col-span-2 mb-3"},W=["href"],q={key:3,class:"col-span-2 mb-3"},z=["href"],K={key:4,class:"col-span-2 mb-3"},U={class:"flex items-center text-indigo-800"},Y={key:1,class:"col-span-4"},G={class:"font-body text-12 leading-130 font-normal text-indigo-800"},Q={key:2,class:"col-span-4"},X={class:"font-body text-12 leading-130 font-normal text-indigo-800"},Z={class:"col-span-4"},ee={class:"font-body text-16 leading-130 font-normal text-indigo-800"},te={class:"col-span-4"},ae={class:"grid grid-cols-4 gap-x-10 font-body text-12 leading-140 font-normal"},oe={key:0,class:"col-span-2 mb-3"},ne=["href"],ie={key:1,class:"col-span-2 mb-3"},se=["href"],le={key:2,class:"col-span-2 mb-3"},re=["href"],ce={key:3,class:"col-span-2 mb-3"},de=["href"],me={key:4,class:"col-span-2 mb-3"},fe={class:"flex items-center text-indigo-800"},m={__name:"DirectoryCard",props:{post:{type:Object,default:()=>({})},image:{type:Object,default:()=>({})},type:{type:String,default:"people"},name:{type:String,default:""},pronouns:{type:String,default:""},title:{type:String,default:""},department:{type:String,default:""},phone:{type:String,default:""},curriculumVitae:{type:String,default:""},email:{type:String,default:""},fax:{type:String,default:""},location:{type:String,default:""},address:{type:String,default:""},officeHours:{type:String,default:""},hidePhoto:{type:Boolean,default:!1},hidePronouns:{type:Boolean,default:!1},hideDepartment:{type:Boolean,default:!1},hidePhoneNumber:{type:Boolean,default:!1},hideCv:{type:Boolean,default:!1},hideEmail:{type:Boolean,default:!1},hideFax:{type:Boolean,default:!1},hideLocation:{type:Boolean,default:!1},hideOfficeHours:{type:Boolean,default:!1}},setup(e){const s=e,v=f(()=>(s.post.thumbnail||s.image.src)&&!s.hidePhoto),k=f(()=>s.image.alt?s.image.alt:s.post.first_name&&s.post.last_name?`Image of ${s.post.first_name} ${s.post.last_name}`:"Directory Image"),V=f(()=>s.post?.thumbnail?.src?s.post.thumbnail.src("Square"):s.image.src),B=f(()=>s.post?.thumbnail?.src?s.post.thumbnail.src("Square_mobile"):s.image.src);return(ue,a)=>(n(),o("div",D,[v.value?(n(),o("div",A,[t("div",S,[r(P,{class:"absolute h-full w-full object-cover",srcset:e.image.srcset,src:e.image.src,sizeDesktop:V.value,sizeMobile:B.value,alt:k.value},null,8,["srcset","src","sizeDesktop","sizeMobile","alt"])])])):i("",!0),t("div",O,[t("div",L,[t("h1",w,l(e.name),1),e.pronouns&&!e.hidePronouns?(n(),o("div",j,l(e.pronouns),1)):i("",!0),t("div",H,[e.type==="people"?(n(),o(b,{key:0},[t("div",C,[a[0]||(a[0]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Title ",-1)),t("p",E,l(e.title),1)]),e.department&&!e.hideDepartment?(n(),o("div",N,[a[1]||(a[1]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Department ",-1)),t("p",R,l(e.department),1)])):i("",!0),t("div",I,[a[3]||(a[3]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Information ",-1)),t("ul",M,[e.phone&&!e.hidePhoneNumber?(n(),o("li",T,[t("a",{class:"flex items-center text-indigo-800 hover:text-indigo hover:underline",href:`tel:${e.phone}`},[r(d,{name:"phone",class:"mr-1.5 h-3 fill-indigo-800"}),c(" "+l(e.phone),1)],8,$)])):i("",!0),e.curriculumVitae&&!e.hideCv?(n(),o("li",F,[t("a",{class:"flex items-center text-indigo-800 hover:text-indigo hover:underline",href:e.curriculumVitae,target:"_blank"},[r(d,{name:"clipboard",class:"mr-1.5 h-3 fill-indigo-800"}),a[2]||(a[2]=c(" Curriculum Vitae/Personal Webpage ",-1))],8,J)])):i("",!0),e.email&&!e.hideEmail?(n(),o("li",_,[t("a",{class:"flex items-center text-indigo-800 hover:text-indigo hover:underline",href:`mailto:${e.email}`},[r(d,{name:"email",class:"mr-1.5 h-3 fill-indigo-800"}),c(" "+l(e.email),1)],8,W)])):i("",!0),e.fax&&!e.hideFax?(n(),o("li",q,[t("a",{class:"flex items-center text-indigo-800 hover:text-indigo hover:underline",href:`tel:${e.fax}`},[r(d,{name:"fax",class:"mr-1.5 h-4 fill-indigo-800"}),c(" "+l(e.fax),1)],8,z)])):i("",!0),e.location&&!e.hideLocation?(n(),o("li",K,[t("div",U,[r(d,{name:"location",class:"mr-1.5 h-3 fill-indigo-800"}),c(" "+l(e.location),1)])])):i("",!0)])]),e.address?(n(),o("div",Y,[a[4]||(a[4]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Address ",-1)),t("p",G,l(e.address),1)])):i("",!0),e.officeHours&&!e.hideOfficeHours?(n(),o("div",Q,[a[5]||(a[5]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Office Hours ",-1)),t("p",X,l(e.officeHours),1)])):i("",!0)],64)):e.type==="offices"?(n(),o(b,{key:1},[t("div",Z,[a[6]||(a[6]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Address ",-1)),t("p",ee,l(e.address),1)]),t("div",te,[a[8]||(a[8]=t("h2",{class:"mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"}," Links ",-1)),t("ul",ae,[e.phone?(n(),o("li",oe,[t("a",{class:"flex items-center text-indigo-800 hover:text-indigo hover:underline",href:`tel:${e.phone}`},[r(d,{name:"phone",class:"mr-1.5 h-3 fill-indigo-800"}),c(" "+l(e.phone),1)],8,ne)])):i("",!0),e.curriculumVitae?(n(),o("li",ie,[t("a",{class:"flex items-center text-indigo-800 hover:text-indigo hover:underline",href:e.curriculumVitae,target:"_blank"},[r(d,{name:"clipboard",class:"mr-1.5 h-3 fill-indigo-800"}),a[7]||(a[7]=c(" Curriculum Vitae/Personal Webpage ",-1))],8,se)])):i("",!0),e.email?(n(),o("li",le,[t("a",{class:"flex items-center text-indigo-800 hover:text-indigo hover:underline",href:`mailto:${e.email}`},[r(d,{name:"email",class:"mr-1.5 h-3 fill-indigo-800"}),c(" "+l(e.email),1)],8,re)])):i("",!0),e.fax?(n(),o("li",ce,[t("a",{class:"flex items-center text-indigo-800 hover:text-indigo hover:underline",href:`tel:${e.fax}`},[r(d,{name:"fax",class:"mr-1.5 h-4 fill-indigo-800"}),c(" "+l(e.fax),1)],8,de)])):i("",!0),e.location?(n(),o("li",me,[t("div",fe,[r(d,{name:"location",class:"mr-1.5 h-3 fill-indigo-800"}),c(" "+l(e.location),1)])])):i("",!0)])])],64)):i("",!0)])])])]))}};m.__docgenInfo=Object.assign({displayName:m.name??m.__name},{exportName:"default",displayName:"DirectoryCard",description:"",tags:{},props:[{name:"post",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"image",type:{name:"object"},defaultValue:{func:!1,value:"{}"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"people"'}},{name:"name",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"pronouns",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"department",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"phone",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"curriculumVitae",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"email",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"fax",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"location",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"address",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"officeHours",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"hidePhoto",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hidePronouns",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideDepartment",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hidePhoneNumber",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideCv",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideEmail",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideFax",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideLocation",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideOfficeHours",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/DirectoryCard/DirectoryCard.vue"]});const{expect:be}=__STORYBOOK_MODULE_TEST__,x={src:"https://placehold.co/400x400/012169/ffffff?text=Prof.+Doe",srcset:"https://placehold.co/400x400/012169/ffffff?text=Prof.+Doe 1x",alt:"Professor John Doe"},xe={title:"Core Components/Directory Card",component:m,argTypes:{type:{control:"radio",options:["people","offices"],description:"Switches between Person layout and Office layout"},name:{control:"text"},pronouns:{control:"text"},title:{control:"text"},department:{control:"text"},address:{control:"text"},location:{control:"text"},phone:{control:"text"},email:{control:"text"},fax:{control:"text"},curriculumVitae:{control:"text"},officeHours:{control:"text"},hidePhoto:{control:"boolean"},hidePronouns:{control:"boolean"},hideDepartment:{control:"boolean"},hidePhoneNumber:{control:"boolean"},hideCv:{control:"boolean"},hideEmail:{control:"boolean"},hideFax:{control:"boolean"},hideLocation:{control:"boolean"},hideOfficeHours:{control:"boolean"},image:{control:"object"},post:{control:"object"}},args:{inComponentLibrary:!0}},y=e=>({components:{DirectoryCard:m},setup(){return{args:e}},template:'<DirectoryCard v-bind="args" />'}),u={args:{type:"people",name:"Dr. Jane Smith",pronouns:"she/her/hers",title:"Associate Professor of Biology",department:"Department of Biological Sciences",phone:"555-0123",email:"jane.smith@colby.edu",location:"Arey Life Sciences 204",officeHours:"Mon/Wed 2:00pm - 4:00pm",curriculumVitae:"https://example.com/cv",image:x},render:y,play:async({canvas:e})=>{}},h={args:{type:"offices",name:"Office of the Registrar",address:"4000 Mayflower Hill, Waterville, ME 04901",phone:"207-859-4000",email:"registrar@colby.edu",fax:"207-859-4002",location:"Eustis 102",image:{src:"https://placehold.co/400x400/666666/ffffff?text=Office",alt:"Registrar Office"}},render:y,play:async({canvas:e})=>{}},g={args:{type:"people",name:"John Doe",title:"Visiting Assistant Professor",department:"English",email:"jdoe@colby.edu",image:{src:"",alt:""}},render:y,play:async({canvas:e})=>{}},p={args:{type:"people",name:"Private Contact",title:"Adjunct Instructor",department:"Physics",email:"hidden@colby.edu",phone:"555-9999",image:x,hidePhoneNumber:!0,hideEmail:!0,hidePhoto:!0},render:y,play:async({canvas:e})=>{}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const ve=["Person","Office","NoImage","RestrictedView"];export{g as NoImage,h as Office,u as Person,p as RestrictedView,ve as __namedExportsOrder,xe as default};
