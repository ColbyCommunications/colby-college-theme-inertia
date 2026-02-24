import{c as o,a as i,n as r,e as g,t as y,m as l,F as I,r as q,l as b,d as s}from"./iframe-BfBFAde5.js";import{_ as C}from"./Context-Dp7yX81d.js";import{_ as T}from"./Picture-CxKtrm5G.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";const L={class:"hero full-bleed relative space-y-16 py-20"},v={class:"hero__inner mx-auto my-0 grid w-full max-w-screen-2xl space-y-16 gap-x-10 px-5 md:grid-cols-12 md:items-center md:space-y-0"},O={key:0,class:"hero__secondary md:col-span-4"},z={key:0,class:"hero__caption mt-2 font-body text-12 leading-140 font-normal text-indigo-800"},_={key:0,class:"hero__inner mx-auto my-0 grid w-full max-w-screen-2xl gap-x-10 px-5 md:grid-cols-12 md:items-center"},E={key:0,class:"hero__caption mt-2 font-body text-12 leading-140 font-normal text-indigo-800"},B={__name:"Hero",props:{align:{type:String,default:"left"},date:String,subheading:String,heading:String,paragraph:String,buttons:{type:Array,default:()=>[]},image:Object,imageOrientation:{type:String,default:"landscape"},images:{type:Array,default:()=>[]},columns:{type:Number,default:3}},setup(e){const a=e,f=b(()=>a.imageOrientation==="portrait"?"md:pb-[119.44444444444444%]":"md:pb-[80.55555555555556%]"),w=b(()=>a.columns===4?"pb-[165.3846153846154%]":"md:pb-[80.55555555555556%]");return(D,x)=>(s(),o("div",L,[i("div",v,[i("div",{class:r(["hero__main",{"md:col-start-3":e.align==="center"},"md:col-span-8"])},[g(C,{size:"medium",hero:!0,date:e.date,subheading:e.subheading,heading:e.heading,paragraph:e.paragraph,buttons:{items:e.buttons},align:e.align},null,8,["date","subheading","heading","paragraph","buttons","align"])],2),e.image?(s(),o("div",O,[i("div",{class:r(["hero__image relative",f.value,"pb-[70.73170731707317%]"])},[g(T,{class:"absolute top-0 left-0 h-full w-full object-cover",srcset:e.image.srcset,src:e.image.src,"size-desktop":e.image.sizes.Square,"size-mobile":e.image.sizes.Square,alt:e.image.alt},null,8,["srcset","src","size-desktop","size-mobile","alt"])],2),e.image.caption?(s(),o("p",z,y(e.image.caption),1)):l("",!0)])):l("",!0)]),e.images&&e.align==="center"?(s(),o("div",_,[(s(!0),o(I,null,q(e.images,(n,S)=>(s(),o("div",{key:S,class:r(["mb-10",{"md:col-span-3":e.columns===4},{"md:col-span-4":e.columns!==4}])},[i("div",{class:r(["hero__image relative pb-[70.73170731707317%]",w.value])},[g(T,{class:"absolute top-0 left-0 h-full w-full object-cover",srcset:n.srcset,src:n.src,"size-desktop":n.image?.sizes?.Square,"size-mobile":n.image?.sizes?.Square,alt:n.alt},null,8,["srcset","src","size-desktop","size-mobile","alt"])],2),n.caption?(s(),o("p",E,y(n.caption),1)):l("",!0)],2))),128))])):l("",!0),x[0]||(x[0]=i("div",{class:"hero__pattern bg-hero__pattern absolute top-0 left-0 z-[-1] !mt-0 h-full w-full opacity-50"},null,-1))]))}};B.__docgenInfo={exportName:"default",displayName:"Hero",description:"",tags:{},props:[{name:"align",type:{name:"string"},defaultValue:{func:!1,value:'"left"'}},{name:"date",type:{name:"string"}},{name:"subheading",type:{name:"string"}},{name:"heading",type:{name:"string"}},{name:"paragraph",type:{name:"string"}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"image",type:{name:"object"}},{name:"imageOrientation",type:{name:"string"},defaultValue:{func:!1,value:'"landscape"'}},{name:"images",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"columns",type:{name:"number"},defaultValue:{func:!1,value:"3"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Hero/Hero.vue"]};const{expect:t}=__STORYBOOK_MODULE_TEST__,G={title:"Core Components/Hero",component:B},c={name:"Primary",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/600x400",Square_mobile:"https://placehold.co/400x300"}},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{const a=e.getAllByText("Lorem ipsum");await t(a.length).toBeGreaterThanOrEqual(2),await t(e.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument()}},d={name:"Portrait Orientation",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",imageOrientation:"portrait",image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x600",Square_mobile:"https://placehold.co/300x400"}},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{const a=e.getAllByText("Lorem ipsum");await t(a.length).toBeGreaterThanOrEqual(2),await t(e.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument()}},m={name:"Center Align",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",imageOrientation:"portrait",image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x600",Square_mobile:"https://placehold.co/300x400"}},align:"center",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{const a=e.getAllByText("Lorem ipsum");await t(a.length).toBeGreaterThanOrEqual(2)}},p={name:"No Image",args:{subheading:"Welcome",heading:"Text Only Hero",paragraph:"Content only, no side image."},play:async({canvas:e})=>{await t(e.getByText("Text Only Hero")).toBeInTheDocument()}},u={name:"Center With Secondary Images",args:{subheading:"Gallery",heading:"Four Column Layout",align:"center",columns:4,images:[{src:"https://placehold.co/300x450",srcset:"https://placehold.co/300x450",alt:"Image 1",caption:"Image one caption"},{src:"https://placehold.co/300x450",srcset:"https://placehold.co/300x450",alt:"Image 2"},{src:"https://placehold.co/300x450",srcset:"https://placehold.co/300x450",alt:"Image 3"},{src:"https://placehold.co/300x450",srcset:"https://placehold.co/300x450",alt:"Image 4"}]},play:async({canvas:e})=>{await t(e.getByText("Four Column Layout")).toBeInTheDocument(),await t(e.getByAltText("Image 1")).toBeInTheDocument(),await t(e.getByText("Image one caption")).toBeInTheDocument()}},h={name:"Image With Caption",args:{subheading:"Featured",heading:"Captioned Image",image:{src:"https://placehold.co/400x600",srcset:"https://placehold.co/400x600",alt:"Captioned photo",caption:"Photo by Colby College",sizes:{Square:"https://placehold.co/400x600",Square_mobile:"https://placehold.co/300x400"}}},play:async({canvas:e})=>{await t(e.getByText("Photo by Colby College")).toBeInTheDocument()}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    image: {
      src: "https://placeholdit.com/400x600/dddddd/999999",
      srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://placehold.co/600x400",
        Square_mobile: "https://placehold.co/400x300"
      }
    },
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  play: async ({
    canvas
  }) => {
    // Both subheading (h1) and heading (h2) are "Lorem ipsum", so use getAllByText
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
    await expect(canvas.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument();
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Portrait Orientation",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    imageOrientation: "portrait",
    image: {
      src: "https://placeholdit.com/400x600/dddddd/999999",
      srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://placehold.co/400x600",
        Square_mobile: "https://placehold.co/300x400"
      }
    },
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  play: async ({
    canvas
  }) => {
    // Both subheading (h1) and heading (h2) are "Lorem ipsum", so use getAllByText
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
    await expect(canvas.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Center Align",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    imageOrientation: "portrait",
    image: {
      src: "https://placeholdit.com/400x600/dddddd/999999",
      srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://placehold.co/400x600",
        Square_mobile: "https://placehold.co/300x400"
      }
    },
    align: "center",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  play: async ({
    canvas
  }) => {
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "No Image",
  args: {
    subheading: "Welcome",
    heading: "Text Only Hero",
    paragraph: "Content only, no side image."
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Text Only Hero")).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Center With Secondary Images",
  args: {
    subheading: "Gallery",
    heading: "Four Column Layout",
    align: "center",
    columns: 4,
    images: [{
      src: "https://placehold.co/300x450",
      srcset: "https://placehold.co/300x450",
      alt: "Image 1",
      caption: "Image one caption"
    }, {
      src: "https://placehold.co/300x450",
      srcset: "https://placehold.co/300x450",
      alt: "Image 2"
    }, {
      src: "https://placehold.co/300x450",
      srcset: "https://placehold.co/300x450",
      alt: "Image 3"
    }, {
      src: "https://placehold.co/300x450",
      srcset: "https://placehold.co/300x450",
      alt: "Image 4"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Four Column Layout")).toBeInTheDocument();
    await expect(canvas.getByAltText("Image 1")).toBeInTheDocument();
    await expect(canvas.getByText("Image one caption")).toBeInTheDocument();
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Image With Caption",
  args: {
    subheading: "Featured",
    heading: "Captioned Image",
    image: {
      src: "https://placehold.co/400x600",
      srcset: "https://placehold.co/400x600",
      alt: "Captioned photo",
      caption: "Photo by Colby College",
      sizes: {
        Square: "https://placehold.co/400x600",
        Square_mobile: "https://placehold.co/300x400"
      }
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Photo by Colby College")).toBeInTheDocument();
  }
}`,...h.parameters?.docs?.source}}};const V=["Primary","Portrait","Center","NoImage","CenterWithSecondaryImages","ImageWithCaption"];export{m as Center,u as CenterWithSecondaryImages,h as ImageWithCaption,p as NoImage,d as Portrait,c as Primary,V as __namedExportsOrder,G as default};
