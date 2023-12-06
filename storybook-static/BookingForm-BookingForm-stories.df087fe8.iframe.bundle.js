"use strict";(self.webpackChunkddsgnr_app=self.webpackChunkddsgnr_app||[]).push([[30],{"./node_modules/.pnpm/@heroicons+react@2.0.18_react@18.2.0/node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.3_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function ChevronRightIcon({title,titleId,...props},svgRef){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:svgRef,"aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"}))}))},"./components/BookingForm/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.3_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),react_aria_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.0.0-rc.0_react-dom@18.2.0_react@18.2.0/node_modules/react-aria-components/dist/import.mjs"),_Wrapper__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/Wrapper.tsx"),_ButtonLink__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/ButtonLink/index.tsx"),_Input_SelectDropdown__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/Input/SelectDropdown/index.tsx"),_constants__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./constants/index.tsx"),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./utils/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,BookingForm=function BookingForm(){var onSubmit=(0,_utils__WEBPACK_IMPORTED_MODULE_5__.y)();return __jsx("section",{className:"flex justify-between gap-[26] py-6 sm:py-[55px]"},__jsx(_Wrapper__WEBPACK_IMPORTED_MODULE_1__.Z,{className:" max-w-[1209px]"},__jsx(react_aria_components__WEBPACK_IMPORTED_MODULE_6__.l0,{onSubmit,className:"flex flex-wrap items-start gap-[26px] lg:flex-nowrap"},__jsx("div",{className:"flex w-full  justify-between flex-col md:w-[48%] lg:flex-1"},__jsx(react_aria_components__WEBPACK_IMPORTED_MODULE_6__.nv,{name:"checkIn",isRequired:!0},__jsx(react_aria_components__WEBPACK_IMPORTED_MODULE_6__.__,{className:"input-label"},"Check in"),__jsx(react_aria_components__WEBPACK_IMPORTED_MODULE_6__.II,{id:"checkIn",type:"date",className:"input-base",placeholder:"MM/DD/YYYY",required:!0}))),__jsx("div",{className:"flex w-full  justify-between flex-col md:w-[48%] lg:flex-1"},__jsx(react_aria_components__WEBPACK_IMPORTED_MODULE_6__.nv,{name:"checkOut",isRequired:!0},__jsx(react_aria_components__WEBPACK_IMPORTED_MODULE_6__.__,{className:"input-label"},"Check out"),__jsx(react_aria_components__WEBPACK_IMPORTED_MODULE_6__.II,{id:"checkOut",type:"date",className:"input-base",placeholder:"MM/DD/YYYY"}))),__jsx("div",{className:"flex w-full flex-col  justify-between md:w-[48%] lg:flex-1"},__jsx(_Input_SelectDropdown__WEBPACK_IMPORTED_MODULE_3__.Z,{id:"select",name:"select",label:"Room",selectOptions:_constants__WEBPACK_IMPORTED_MODULE_4__.jU,placeholder:"Select Room",required:!0})),__jsx("div",{className:"flex w-full flex-col md:w-[48%] lg:flex-1"},__jsx(react_aria_components__WEBPACK_IMPORTED_MODULE_6__.Ki,{name:"guests",isRequired:!0,minValue:1,defaultValue:1},__jsx(react_aria_components__WEBPACK_IMPORTED_MODULE_6__.__,{className:"input-label"},"Guests"),__jsx(react_aria_components__WEBPACK_IMPORTED_MODULE_6__.ZA,null,__jsx(react_aria_components__WEBPACK_IMPORTED_MODULE_6__.II,{type:"number",className:"input-base",min:1,id:"guests"}),__jsx(react_aria_components__WEBPACK_IMPORTED_MODULE_6__.zx,{slot:"increment"}),__jsx(react_aria_components__WEBPACK_IMPORTED_MODULE_6__.zx,{slot:"decrement"})))),__jsx(_ButtonLink__WEBPACK_IMPORTED_MODULE_2__.Z,{className:"self-end px-[11px] py-[12px] h-[47px]",label:"Check Availability",type:"submit"}))))};BookingForm.displayName="BookingForm",BookingForm.__docgenInfo={description:"",methods:[],displayName:"BookingForm"};const __WEBPACK_DEFAULT_EXPORT__=BookingForm},"./components/ButtonLink/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.3_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@1.14.0/node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@heroicons+react@2.0.18_react@18.2.0/node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js"),react_aria_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.0.0-rc.0_react-dom@18.2.0_react@18.2.0/node_modules/react-aria-components/dist/import.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,ButtonLink=function ButtonLink(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"btn-primary":_ref$variant,_ref$size=_ref.size,size=void 0===_ref$size?"btn-size-base":_ref$size,label=_ref.label,_ref$url=_ref.url,url=void 0===_ref$url?"":_ref$url,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className,_ref$type=_ref.type,type=void 0===_ref$type?"button":_ref$type,onClick=_ref.onClick,_ref$icon=_ref.icon,iconContent=void 0!==_ref$icon&&_ref$icon&&__jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__.Z,{className:"h-5 w-5"});return""!==url?__jsx(react_aria_components__WEBPACK_IMPORTED_MODULE_2__.rU,{href:url,className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_3__.m)("btn",variant,size,className)},label||"Link",iconContent):__jsx(react_aria_components__WEBPACK_IMPORTED_MODULE_2__.zx,{onPress:onClick,className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_3__.m)("btn",variant,size,className),type},label||"Button",iconContent)};ButtonLink.__docgenInfo={description:"",methods:[],displayName:"ButtonLink",props:{variant:{defaultValue:{value:'"btn-primary"',computed:!1},required:!1,tsType:{name:"union",raw:'| "btn-primary"\n| "btn-inverted"\n| "btn-border-dark"\n| "btn-border-none"\n| "btn-border-light"\n| string',elements:[{name:"literal",value:'"btn-primary"'},{name:"literal",value:'"btn-inverted"'},{name:"literal",value:'"btn-border-dark"'},{name:"literal",value:'"btn-border-none"'},{name:"literal",value:'"btn-border-light"'},{name:"string"}]},description:"Description goes here"},size:{defaultValue:{value:'"btn-size-base"',computed:!1},required:!1,tsType:{name:"union",raw:'"btn-size-base" | "btn-size-small"',elements:[{name:"literal",value:'"btn-size-base"'},{name:"literal",value:'"btn-size-small"'}]},description:"Description goes here"},url:{defaultValue:{value:'""',computed:!1},required:!1,tsType:{name:"string"},description:"Description goes here"},className:{defaultValue:{value:'""',computed:!1},required:!1,tsType:{name:"string"},description:"Description goes here"},type:{defaultValue:{value:'"button"',computed:!1},required:!1,tsType:{name:"union",raw:'"button" | "reset" | "submit" | undefined',elements:[{name:"literal",value:'"button"'},{name:"literal",value:'"reset"'},{name:"literal",value:'"submit"'},{name:"undefined"}]},description:"Description goes here"},icon:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:"Description goes here"},label:{required:!1,tsType:{name:"string"},description:"Description goes here"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Description goes here"}}};const __WEBPACK_DEFAULT_EXPORT__=ButtonLink;try{ButtonLink.displayName="ButtonLink",ButtonLink.__docgenInfo={description:"",displayName:"ButtonLink",props:{variant:{defaultValue:{value:"btn-primary"},description:"Description goes here",name:"variant",required:!1,type:{name:"string"}},size:{defaultValue:{value:"btn-size-base"},description:"Description goes here",name:"size",required:!1,type:{name:"enum",value:[{value:'"btn-size-base"'},{value:'"btn-size-small"'}]}},label:{defaultValue:null,description:"Description goes here",name:"label",required:!1,type:{name:"string"}},url:{defaultValue:{value:""},description:"Description goes here",name:"url",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Description goes here",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:{value:"button"},description:"Description goes here",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},onClick:{defaultValue:null,description:"Description goes here",name:"onClick",required:!1,type:{name:"(() => void)"}},icon:{defaultValue:{value:"false"},description:"Description goes here",name:"icon",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ButtonLink/index.tsx#ButtonLink"]={docgenInfo:ButtonLink.__docgenInfo,name:"ButtonLink",path:"components/ButtonLink/index.tsx#ButtonLink"})}catch(__react_docgen_typescript_loader_error){}},"./components/Input/SelectDropdown/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.3_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),react_aria_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react-aria-components@1.0.0-rc.0_react-dom@18.2.0_react@18.2.0/node_modules/react-aria-components/dist/import.mjs"),react_icons_tfi__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react-icons@4.12.0_react@18.2.0/node_modules/react-icons/tfi/index.esm.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,SelectDropdown=function SelectDropdown(_ref){var _ref$label=_ref.label,label=void 0===_ref$label?"Label":_ref$label,_ref$name=_ref.name,name=void 0===_ref$name?"select":_ref$name,_ref$id=_ref.id,id=void 0===_ref$id?"select":_ref$id,_ref$placeholder=_ref.placeholder,placeholder=void 0===_ref$placeholder?"Choose one...":_ref$placeholder,_ref$selectOptions=_ref.selectOptions,selectOptions=void 0===_ref$selectOptions?["Option 1","Option 2","Option 3","Option 4"]:_ref$selectOptions,_ref$required=_ref.required,required=void 0!==_ref$required&&_ref$required;return __jsx(react_aria_components__WEBPACK_IMPORTED_MODULE_1__.Ph,{className:"w-full",name,id,placeholder,isRequired:required},__jsx(react_aria_components__WEBPACK_IMPORTED_MODULE_1__.__,{className:"block mb-2"},label),__jsx(react_aria_components__WEBPACK_IMPORTED_MODULE_1__.zx,{className:"min-w-[200px] h-[47px] px-[14px] w-full flex items-center gap-4 justify-between border rounded-[4px] border-black/20 aria-[invalid]:border-red-500"},__jsx(react_aria_components__WEBPACK_IMPORTED_MODULE_1__.ki,null),__jsx("span",{"aria-hidden":"true"},__jsx(react_icons_tfi__WEBPACK_IMPORTED_MODULE_2__.TQw,null))),__jsx(react_aria_components__WEBPACK_IMPORTED_MODULE_1__.J2,{className:"max-w-[var(--trigger-width)] w-full rounded-[4px]"},__jsx(react_aria_components__WEBPACK_IMPORTED_MODULE_1__.wb,{className:"bg-white shadow-select p-[6px] focus-visible:outline-0"},selectOptions.map((function(option){return __jsx(react_aria_components__WEBPACK_IMPORTED_MODULE_1__.m9,{key:option,className:"p-2 data-[hovered]:bg-black/5"},option)})))))};SelectDropdown.displayName="SelectDropdown",SelectDropdown.__docgenInfo={description:"",methods:[],displayName:"SelectDropdown",props:{label:{defaultValue:{value:'"Label"',computed:!1},required:!1,tsType:{name:"string"},description:""},name:{defaultValue:{value:'"select"',computed:!1},required:!1,tsType:{name:"string"},description:""},id:{defaultValue:{value:'"select"',computed:!1},required:!1,tsType:{name:"string"},description:""},placeholder:{defaultValue:{value:'"Choose one..."',computed:!1},required:!1,tsType:{name:"string"},description:""},selectOptions:{defaultValue:{value:'["Option 1", "Option 2", "Option 3", "Option 4"]',computed:!1},required:!1,tsType:{name:"selectOptions"},description:""},required:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:""}}};const __WEBPACK_DEFAULT_EXPORT__=SelectDropdown;try{SelectDropdown.displayName="SelectDropdown",SelectDropdown.__docgenInfo={description:"",displayName:"SelectDropdown",props:{label:{defaultValue:{value:"Label"},description:"",name:"label",required:!1,type:{name:"string"}},name:{defaultValue:{value:"select"},description:"",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:{value:"select"},description:"",name:"id",required:!1,type:{name:"string"}},required:{defaultValue:{value:"false"},description:"",name:"required",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"Choose one..."},description:"",name:"placeholder",required:!1,type:{name:"string"}},selectOptions:{defaultValue:{value:'["Option 1", "Option 2", "Option 3", "Option 4"]'},description:"",name:"selectOptions",required:!1,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Input/SelectDropdown/index.tsx#SelectDropdown"]={docgenInfo:SelectDropdown.__docgenInfo,name:"SelectDropdown",path:"components/Input/SelectDropdown/index.tsx#SelectDropdown"})}catch(__react_docgen_typescript_loader_error){}},"./components/Wrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.3_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@1.14.0/node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Wrapper=function Wrapper(_ref){var className=_ref.className,children=_ref.children;return __jsx("div",{className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.m)("mx-auto w-full max-w-wrapper px-4",className)},children)};Wrapper.displayName="Wrapper",Wrapper.__docgenInfo={description:"",methods:[],displayName:"Wrapper",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const __WEBPACK_DEFAULT_EXPORT__=Wrapper;try{Wrapper.displayName="Wrapper",Wrapper.__docgenInfo={description:"",displayName:"Wrapper",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Wrapper.tsx#Wrapper"]={docgenInfo:Wrapper.__docgenInfo,name:"Wrapper",path:"components/Wrapper.tsx#Wrapper"})}catch(__react_docgen_typescript_loader_error){}},"./constants/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ok:()=>socialList,bV:()=>headerButtons,dq:()=>perksButtons,fn:()=>featuresData,jU:()=>roomsData,lH:()=>heroButtons,oc:()=>reviewsData,sy:()=>legalLinks,u2:()=>menuListData,uq:()=>vacationButtons,zY:()=>roomOptions});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.3_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),react_icons_cg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/react-icons@4.12.0_react@18.2.0/node_modules/react-icons/cg/index.esm.js"),react_icons_fa__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react-icons@4.12.0_react@18.2.0/node_modules/react-icons/fa/index.esm.js"),react_icons_lia__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react-icons@4.12.0_react@18.2.0/node_modules/react-icons/lia/index.esm.js"),react_icons_md__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/react-icons@4.12.0_react@18.2.0/node_modules/react-icons/md/index.esm.js"),react_icons_tb__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/react-icons@4.12.0_react@18.2.0/node_modules/react-icons/tb/index.esm.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,menuListData=[{label:"Home",url:"/"},{label:"About",url:"/about"},{label:"Services",url:"/services"},{label:"Gallery",url:"/gallery"}],socialList=[{label:"Facebook",url:"/#facebook",icon:__jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.tBk,{size:20})},{label:"Instagram",url:"/#instagram",icon:__jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Zf_,{size:20})},{label:"Twitter",url:"/#twitter",icon:__jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.fWC,{size:20})},{label:"LinkedIn",url:"/#linkedIn",icon:__jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.ltd,{size:20})}],legalLinks=[{url:"#",label:"Privacy Policy"},{url:"#",label:"Terms of Service"},{url:"#",label:"Cookies Settings"}],roomsData=["Standard","Deluxe","Executive","Suite"],reviewsData=[{imgSrc:"/images/lobby.jpg",imgAlt:"Lobby",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",reviewer:"Gordan Kelly",stars:5},{imgSrc:"/images/lobby.jpg",imgAlt:"Lobby",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",reviewer:"Kelly Gordan",stars:4},{imgSrc:"/images/lobby.jpg",imgAlt:"Lobby",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",reviewer:"Sr. Gordan Kelly",stars:3}],heroButtons=[{url:"/",variant:"btn-inverted",label:"Book Now"},{url:"/",variant:"btn-border-light",label:"Learn more"}],roomOptions=[{imgSrc:"/images/card-image.jpg",title:"Double exclusive 2 queen beds",desc:"Relish the comfort of two queen beds in our exclusive room, designed for unparalleled relaxation and elegance.",smallCard:!1},{imgSrc:"/images/card-image-2.jpg",title:"Double deluxe",desc:"Our double deluxe room offers cozy luxury, perfect for a restful stay.",smallCard:!0},{imgSrc:"/images/card-image-3.jpg",title:"Superior king bed",desc:"Superior comfort with spaciousness and modern luxury.",smallCard:!0},{imgSrc:"/images/card-image-4.jpg",title:"Double deluxe king bed",desc:"Refined comfort featuring a lavish king bed.",smallCard:!0},{imgSrc:"/images/card-image-5.jpg",title:"Double queen beds",desc:"Spacious elegance, ideal for comfort and convenience.",smallCard:!0}],headerButtons=[{url:"#",variant:"btn-border-dark",label:"Sign In",size:"btn-size-small",icon:null},{url:"#",variant:"btn-primary",label:"Get Started",size:"btn-size-small",icon:null}],perksButtons=[{url:"#",variant:"btn-border-dark",label:"Book Now"},{url:"#",variant:"btn-border-none",label:"Learn More",icon:!0}],vacationButtons=[{url:"/",variant:"btn-primary",label:"Book Now"},{url:"/",variant:"btn-border-dark",label:"Learn More"}],featuresData=[{title:"Private pool",desc:"Dive into serenity in our private pool, an oasis of calm designed for your ultimate relaxation and enjoyment",icon:__jsx(react_icons_lia__WEBPACK_IMPORTED_MODULE_2__.Xzo,null)},{title:"Spa & Massage",desc:"Indulge in our spa and massage services, a sanctuary of rejuvenation for your body and mind",icon:__jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_3__.Ppm,null)},{title:"Gym",desc:"Energize your stay with our state-of-the-art gym, equipped for all your fitness and wellness needs",icon:__jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_4__.qGB,null)},{title:"Restaurant",desc:"Savor exquisite dining experiences in our restaurant, where culinary art meets atmospheric elegance",icon:__jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.uGX,null)}]},"./components/BookingForm/BookingForm.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Users_canceydejean_Dropbox_Code_React_Component_Projects_ddsgnr_hotel_app_node_modules_pnpm_babel_runtime_7_23_4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.23.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.3_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/BookingForm/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_Users_canceydejean_Dropbox_Code_React_Component_Projects_ddsgnr_hotel_app_node_modules_pnpm_babel_runtime_7_23_4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Sections/BookingForm",component:___WEBPACK_IMPORTED_MODULE_2__.Z,args:{},parameters:{layout:"fullscreen"},argTypes:{}};var Default={render:function render(args){return __jsx(___WEBPACK_IMPORTED_MODULE_2__.Z,args)}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  render: args => {\n    return <BookingForm {...args} />;\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./utils/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>useFormReset});var console=__webpack_require__("./node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js"),useFormReset=function useFormReset(){return function onSubmit(e){console.log("form submitted"),e.preventDefault(),e.currentTarget.reset()}}},"./node_modules/.pnpm/react-icons@4.12.0_react@18.2.0/node_modules/react-icons/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w_:()=>GenIcon});var react=__webpack_require__("./node_modules/.pnpm/next@14.0.3_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Tree2Element(tree){return tree&&tree.map((function(node,i){return react.createElement(node.tag,__assign({key:i},node.attr),Tree2Element(node.child))}))}function GenIcon(data){return function(props){return react.createElement(IconBase,__assign({attr:__assign({},data.attr)},props),Tree2Element(data.child))}}function IconBase(props){var elem=function(conf){var className,attr=props.attr,size=props.size,title=props.title,svgProps=__rest(props,["attr","size","title"]),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:__assign(__assign({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(function(conf){return elem(conf)})):elem(DefaultContext)}}}]);