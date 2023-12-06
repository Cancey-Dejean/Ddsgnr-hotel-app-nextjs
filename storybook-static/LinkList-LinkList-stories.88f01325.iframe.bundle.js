"use strict";(self.webpackChunkddsgnr_app=self.webpackChunkddsgnr_app||[]).push([[249],{"./components/LinkList/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.3_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),_Paragraph__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/Paragraph.tsx"),_TextLink__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/TextLink/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,LinkList=function LinkList(_ref){var _ref$links=_ref.links,links=void 0===_ref$links?[]:_ref$links,_ref$title=_ref.title,title=void 0===_ref$title?"Menu":_ref$title;return __jsx("div",{className:"flex flex-col gap-4"},__jsx(_Paragraph__WEBPACK_IMPORTED_MODULE_1__.Z,{className:"font-semibold"},title),__jsx("ul",{className:"flex flex-col"},links.map((function(link,index){return __jsx("li",{key:index},__jsx(_TextLink__WEBPACK_IMPORTED_MODULE_2__.Z,{label:link.label,url:link.url,icon:link.icon,className:"py-2"}))}))))};LinkList.displayName="LinkList",LinkList.__docgenInfo={description:"",methods:[],displayName:"LinkList",props:{links:{defaultValue:{value:"[]",computed:!1},required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; url: string; icon?: ReactNode }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!0}},{key:"icon",value:{name:"ReactNode",required:!1}}]}}],raw:"{ label: string; url: string; icon?: ReactNode }[]"},description:"Description goes here"},title:{defaultValue:{value:'"Menu"',computed:!1},required:!1,tsType:{name:"string"},description:"Description goes here"}}};const __WEBPACK_DEFAULT_EXPORT__=LinkList;try{LinkList.displayName="LinkList",LinkList.__docgenInfo={description:"",displayName:"LinkList",props:{title:{defaultValue:{value:"Menu"},description:"Description goes here",name:"title",required:!1,type:{name:"string"}},links:{defaultValue:{value:"[]"},description:"Description goes here",name:"links",required:!1,type:{name:"{ label: string; url: string; icon?: ReactNode; }[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/LinkList/index.tsx#LinkList"]={docgenInfo:LinkList.__docgenInfo,name:"LinkList",path:"components/LinkList/index.tsx#LinkList"})}catch(__react_docgen_typescript_loader_error){}},"./components/Paragraph.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.3_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@1.14.0/node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Paragraph=function Paragraph(_ref){var _ref$children=_ref.children,children=void 0===_ref$children?__jsx("span",null,"Paragraph goes here"):_ref$children,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className;return __jsx("p",{className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.m)(" text-base",className),tabIndex:0},children)};Paragraph.displayName="Paragraph",Paragraph.__docgenInfo={description:"",methods:[],displayName:"Paragraph",props:{children:{defaultValue:{value:"<span>Paragraph goes here</span>",computed:!1},required:!1,tsType:{name:"ReactNode"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1,tsType:{name:"string"},description:""}}};const __WEBPACK_DEFAULT_EXPORT__=Paragraph;try{Paragraph.displayName="Paragraph",Paragraph.__docgenInfo={description:"",displayName:"Paragraph",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Paragraph.tsx#Paragraph"]={docgenInfo:Paragraph.__docgenInfo,name:"Paragraph",path:"components/Paragraph.tsx#Paragraph"})}catch(__react_docgen_typescript_loader_error){}},"./components/TextLink/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.3_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@14.0.3_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0/node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),tailwind_merge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@1.14.0/node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,TextLink=function TextLink(_ref){var _ref$url=_ref.url,url=void 0===_ref$url?"#":_ref$url,_ref$label=_ref.label,label=void 0===_ref$label?"Link":_ref$label,icon=_ref.icon,_ref$className=_ref.className,className=void 0===_ref$className?"":_ref$className;return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href:url,className:(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_2__.m)("flex items-center gap-3",className)},icon?__jsx("span",null,icon):null,label)};TextLink.displayName="TextLink",TextLink.__docgenInfo={description:"",methods:[],displayName:"TextLink",props:{url:{defaultValue:{value:'"#"',computed:!1},required:!1,tsType:{name:"string"},description:"Description goes here"},label:{defaultValue:{value:'"Link"',computed:!1},required:!1,tsType:{name:"string"},description:"Description goes here"},className:{defaultValue:{value:'""',computed:!1},required:!1,tsType:{name:"string"},description:"Description goes here"},icon:{required:!1,tsType:{name:"ReactNode"},description:"Description goes here"}}};const __WEBPACK_DEFAULT_EXPORT__=TextLink;try{TextLink.displayName="TextLink",TextLink.__docgenInfo={description:"",displayName:"TextLink",props:{url:{defaultValue:{value:"#"},description:"Description goes here",name:"url",required:!1,type:{name:"string"}},className:{defaultValue:{value:""},description:"Description goes here",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:{value:"Link"},description:"Description goes here",name:"label",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Description goes here",name:"icon",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/TextLink/index.tsx#TextLink"]={docgenInfo:TextLink.__docgenInfo,name:"TextLink",path:"components/TextLink/index.tsx#TextLink"})}catch(__react_docgen_typescript_loader_error){}},"./constants/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ok:()=>socialList,bV:()=>headerButtons,dq:()=>perksButtons,fn:()=>featuresData,jU:()=>roomsData,lH:()=>heroButtons,oc:()=>reviewsData,sy:()=>legalLinks,u2:()=>menuListData,uq:()=>vacationButtons,zY:()=>roomOptions});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.3_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),react_icons_cg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/.pnpm/react-icons@4.12.0_react@18.2.0/node_modules/react-icons/cg/index.esm.js"),react_icons_fa__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/react-icons@4.12.0_react@18.2.0/node_modules/react-icons/fa/index.esm.js"),react_icons_lia__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/.pnpm/react-icons@4.12.0_react@18.2.0/node_modules/react-icons/lia/index.esm.js"),react_icons_md__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/.pnpm/react-icons@4.12.0_react@18.2.0/node_modules/react-icons/md/index.esm.js"),react_icons_tb__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/.pnpm/react-icons@4.12.0_react@18.2.0/node_modules/react-icons/tb/index.esm.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,menuListData=[{label:"Home",url:"/"},{label:"About",url:"/about"},{label:"Services",url:"/services"},{label:"Gallery",url:"/gallery"}],socialList=[{label:"Facebook",url:"/#facebook",icon:__jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.tBk,{size:20})},{label:"Instagram",url:"/#instagram",icon:__jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Zf_,{size:20})},{label:"Twitter",url:"/#twitter",icon:__jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.fWC,{size:20})},{label:"LinkedIn",url:"/#linkedIn",icon:__jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.ltd,{size:20})}],legalLinks=[{url:"#",label:"Privacy Policy"},{url:"#",label:"Terms of Service"},{url:"#",label:"Cookies Settings"}],roomsData=["Standard","Deluxe","Executive","Suite"],reviewsData=[{imgSrc:"/images/lobby.jpg",imgAlt:"Lobby",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",reviewer:"Gordan Kelly",stars:5},{imgSrc:"/images/lobby.jpg",imgAlt:"Lobby",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",reviewer:"Kelly Gordan",stars:4},{imgSrc:"/images/lobby.jpg",imgAlt:"Lobby",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",reviewer:"Sr. Gordan Kelly",stars:3}],heroButtons=[{url:"/",variant:"btn-inverted",label:"Book Now"},{url:"/",variant:"btn-border-light",label:"Learn more"}],roomOptions=[{imgSrc:"/images/card-image.jpg",title:"Double exclusive 2 queen beds",desc:"Relish the comfort of two queen beds in our exclusive room, designed for unparalleled relaxation and elegance.",smallCard:!1},{imgSrc:"/images/card-image-2.jpg",title:"Double deluxe",desc:"Our double deluxe room offers cozy luxury, perfect for a restful stay.",smallCard:!0},{imgSrc:"/images/card-image-3.jpg",title:"Superior king bed",desc:"Superior comfort with spaciousness and modern luxury.",smallCard:!0},{imgSrc:"/images/card-image-4.jpg",title:"Double deluxe king bed",desc:"Refined comfort featuring a lavish king bed.",smallCard:!0},{imgSrc:"/images/card-image-5.jpg",title:"Double queen beds",desc:"Spacious elegance, ideal for comfort and convenience.",smallCard:!0}],headerButtons=[{url:"#",variant:"btn-border-dark",label:"Sign In",size:"btn-size-small",icon:null},{url:"#",variant:"btn-primary",label:"Get Started",size:"btn-size-small",icon:null}],perksButtons=[{url:"#",variant:"btn-border-dark",label:"Book Now"},{url:"#",variant:"btn-border-none",label:"Learn More",icon:!0}],vacationButtons=[{url:"/",variant:"btn-primary",label:"Book Now"},{url:"/",variant:"btn-border-dark",label:"Learn More"}],featuresData=[{title:"Private pool",desc:"Dive into serenity in our private pool, an oasis of calm designed for your ultimate relaxation and enjoyment",icon:__jsx(react_icons_lia__WEBPACK_IMPORTED_MODULE_2__.Xzo,null)},{title:"Spa & Massage",desc:"Indulge in our spa and massage services, a sanctuary of rejuvenation for your body and mind",icon:__jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_3__.Ppm,null)},{title:"Gym",desc:"Energize your stay with our state-of-the-art gym, equipped for all your fitness and wellness needs",icon:__jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_4__.qGB,null)},{title:"Restaurant",desc:"Savor exquisite dining experiences in our restaurant, where culinary art meets atmospheric elegance",icon:__jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.uGX,null)}]},"./components/LinkList/LinkList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Users_canceydejean_Dropbox_Code_React_Component_Projects_ddsgnr_hotel_app_node_modules_pnpm_babel_runtime_7_23_4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.23.4/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@14.0.3_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/LinkList/index.tsx"),_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./constants/index.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_Users_canceydejean_Dropbox_Code_React_Component_Projects_ddsgnr_hotel_app_node_modules_pnpm_babel_runtime_7_23_4_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/LinkList",component:___WEBPACK_IMPORTED_MODULE_2__.Z,args:{links:_constants__WEBPACK_IMPORTED_MODULE_3__.Ok,title:"Menu"},parameters:{layout:"centered"},tags:["autodocs"],argTypes:{links:{control:!1}}};var Default={render:function render(args){return __jsx(___WEBPACK_IMPORTED_MODULE_2__.Z,args)}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  render: args => {\n    return <LinkList {...args} />;\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./node_modules/.pnpm/react-icons@4.12.0_react@18.2.0/node_modules/react-icons/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w_:()=>GenIcon});var react=__webpack_require__("./node_modules/.pnpm/next@14.0.3_@babel+core@7.23.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Tree2Element(tree){return tree&&tree.map((function(node,i){return react.createElement(node.tag,__assign({key:i},node.attr),Tree2Element(node.child))}))}function GenIcon(data){return function(props){return react.createElement(IconBase,__assign({attr:__assign({},data.attr)},props),Tree2Element(data.child))}}function IconBase(props){var elem=function(conf){var className,attr=props.attr,size=props.size,title=props.title,svgProps=__rest(props,["attr","size","title"]),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:__assign(__assign({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(function(conf){return elem(conf)})):elem(DefaultContext)}},"./node_modules/.pnpm/@swc+helpers@0.5.2/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs":(__unused_webpack_module,exports)=>{function _getRequireWildcardCache(nodeInterop){if("function"!=typeof WeakMap)return null;var cacheBabelInterop=new WeakMap,cacheNodeInterop=new WeakMap;return(_getRequireWildcardCache=function(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop})(nodeInterop)}exports._=exports._interop_require_wildcard=function _interop_require_wildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule)return obj;if(null===obj||"object"!=typeof obj&&"function"!=typeof obj)return{default:obj};var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj))return cache.get(obj);var newObj={},hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj)if("default"!==key&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;desc&&(desc.get||desc.set)?Object.defineProperty(newObj,key,desc):newObj[key]=obj[key]}newObj.default=obj,cache&&cache.set(obj,newObj);return newObj}}}]);