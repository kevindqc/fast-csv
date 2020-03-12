(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{126:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return l}));var n=a(1),i=a(6),r=(a(0),a(137)),c={title:"Options"},b={id:"parsing/options",title:"Options",description:"All of the following options can be passed to any of the [parse methods](./methods).",source:"@site/docs/parsing/options.md",permalink:"/fast-csv/docs/parsing/options",editUrl:"https://github.com/C2FO/fast-csv/edit/master/documentation/docs/parsing/options.md",sidebar:"docs",previous:{title:"Getting Started",permalink:"/fast-csv/docs/parsing/getting-started"},next:{title:"Events",permalink:"/fast-csv/docs/parsing/events"}},o=[{value:"objectMode",id:"objectmode",children:[]},{value:"delimiter",id:"delimiter",children:[]},{value:"quote",id:"quote",children:[]},{value:"escape",id:"escape",children:[]},{value:"headers",id:"headers",children:[]},{value:"renameHeaders",id:"renameheaders",children:[]},{value:"ignoreEmpty",id:"ignoreempty",children:[]},{value:"comment",id:"comment",children:[]},{value:"discardUnmappedColumns",id:"discardunmappedcolumns",children:[]},{value:"strictColumnHandling",id:"strictcolumnhandling",children:[]},{value:"trim",id:"trim",children:[]},{value:"rtrim",id:"rtrim",children:[]},{value:"ltrim",id:"ltrim",children:[]},{value:"encoding",id:"encoding",children:[]},{value:"maxRows",id:"maxrows",children:[]},{value:"skipRows",id:"skiprows",children:[]},{value:"skipLines",id:"skiplines",children:[]}],p={rightToc:o};function l(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"All of the following options can be passed to any of the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"./methods"}),"parse methods"),"."),Object(r.b)("h2",{id:"objectmode"},"objectMode"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"true")),Object(r.b)("p",null,"Ensure that all rows are emitted as objects. "),Object(r.b)("p",null,"If set to ",Object(r.b)("inlineCode",{parentName:"p"},"false")," all data will be a JSON version of the row."),Object(r.b)("h2",{id:"delimiter"},"delimiter"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"string")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"','")),Object(r.b)("p",null,"The delimiter that will separate columns. "),Object(r.b)("p",null,"Set this option if your file uess an alternate delimiter such as ",Object(r.b)("inlineCode",{parentName:"p"},";")," or ",Object(r.b)("inlineCode",{parentName:"p"},"\\t"),". ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"examples#alternate-delimiter"}),"Example")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"When specifying an alternate delimiter you may only pass in a single character! "))),Object(r.b)("h2",{id:"quote"},"quote"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"string|null")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"'\"'")),Object(r.b)("p",null,"The character to use to quote fields that contain a delimiter. "),Object(r.b)("p",null,"(e.g. ",Object(r.b)("inlineCode",{parentName:"p"},'"first,name",last name')," => ",Object(r.b)("inlineCode",{parentName:"p"},"['first,name', 'last name']"),")"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you set to ",Object(r.b)("inlineCode",{parentName:"p"},"null")," then all quoting will be ignored."))),Object(r.b)("h2",{id:"escape"},"escape"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"string")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"'\"'")),Object(r.b)("p",null,"The character to used tp escape quotes inside of a quoted field."),Object(r.b)("p",null,"i.e: ",Object(r.b)("inlineCode",{parentName:"p"},'First,"Name"\' => \'"First,""Name"""')),Object(r.b)("h2",{id:"headers"},"headers"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"boolean|string[]|(string[]) => string[])")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"If set to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," the first row will be treated as the headers. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"examples#first-row-as-headers"}),"Example")),Object(r.b)("p",null,"If you want to manually specify the headers set to a ",Object(r.b)("inlineCode",{parentName:"p"},"string[]"),". ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"examples#custom-headers"}),"Example")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you wish to discard the first row and use your own headers you need to set the ",Object(r.b)("strong",{parentName:"p"},"renameHeaders")," option to ",Object(r.b)("strong",{parentName:"p"},"true")))),Object(r.b)("p",null,"If you wish to transform the headers you can provide a transform function. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"examples#transforming-headers"}),"Example")),Object(r.b)("p",null,"If your rows are arrays, and you wan to skip certain columns you can provide a sparse array. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"examples#skipping-columns"}),"Example")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"When setting the headers option to a function it will always rename the headers "))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you specify headers and there are more columns than headers an error ",Object(r.b)("strong",{parentName:"p"},"WILL NOT")," be emitted unless ",Object(r.b)("inlineCode",{parentName:"p"},"strictColumnHandling")," is set to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," "))),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If headers either parsed, provided or transformed are NOT unique, then an error will be emitted and the stream will stop parsing."))),Object(r.b)("h2",{id:"renameheaders"},"renameHeaders"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"If you want the first line of the file to be removed and replaced by the one provided in the ",Object(r.b)("inlineCode",{parentName:"p"},"headers")," option. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"examples#renaming-headers"}),"Example")," "),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This option should only be used if the ",Object(r.b)("inlineCode",{parentName:"p"},"headers")," option is a ",Object(r.b)("inlineCode",{parentName:"p"},"string[]")))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If the ",Object(r.b)("inlineCode",{parentName:"p"},"headers")," option is a function then this option is always set to true."))),Object(r.b)("h2",{id:"ignoreempty"},"ignoreEmpty"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Set to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," to ignore empty rows. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"examples#ignoring-empty-rows"}),"Example")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"this will discard columns that are all white space or delimiters."))),Object(r.b)("h2",{id:"comment"},"comment"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"string|null")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"null")),Object(r.b)("p",null,"If your CSV contains comments you can use this option to ignore lines that begin with the specified character (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"#"),")."),Object(r.b)("h2",{id:"discardunmappedcolumns"},"discardUnmappedColumns"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"If you want to discard columns that do not map to a header."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This is only valid in the case when the number of parsed columns is greater than the number of headers."))),Object(r.b)("h2",{id:"strictcolumnhandling"},"strictColumnHandling"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"If you want to consider empty lines/lines with too few fields as invalid and emit a ",Object(r.b)("inlineCode",{parentName:"p"},"data-invalid")," event "),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This option is only considered when ",Object(r.b)("inlineCode",{parentName:"p"},"headers")," are present."))),Object(r.b)("h2",{id:"trim"},"trim"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Set to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," to trim all white space from columns."),Object(r.b)("h2",{id:"rtrim"},"rtrim"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Set to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," to right trim all columns."),Object(r.b)("h2",{id:"ltrim"},"ltrim"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"boolean")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("p",null,"Set to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," to left trim all columns."),Object(r.b)("h2",{id:"encoding"},"encoding"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"string")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"'utf8'")),Object(r.b)("p",null,"Passed to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://nodejs.org/api/string_decoder.html#string_decoder_new_stringdecoder_encoding"}),"StringDecoder")," when decoding incoming buffers. Change if incoming content is not 'utf8' encoded."),Object(r.b)("h2",{id:"maxrows"},"maxRows"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"number")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"0")),Object(r.b)("p",null,"If number is ",Object(r.b)("inlineCode",{parentName:"p"},"> 0")," then only the specified number of rows will be parsed.(e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"100")," would return the first 100 rows of data). ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"examples#max-rows"}),"Example")),Object(r.b)("h2",{id:"skiprows"},"skipRows"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"number")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"0")),Object(r.b)("p",null,"If number is ",Object(r.b)("inlineCode",{parentName:"p"},"> 0")," then the specified number of ",Object(r.b)("strong",{parentName:"p"},"parsed")," rows will be skipped. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"examples#skip-rows"}),"Example")),Object(r.b)("h2",{id:"skiplines"},"skipLines"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type"),": ",Object(r.b)("inlineCode",{parentName:"p"},"number")," ",Object(r.b)("strong",{parentName:"p"},"Default"),": ",Object(r.b)("inlineCode",{parentName:"p"},"0")),Object(r.b)("p",null,"If number is ",Object(r.b)("inlineCode",{parentName:"p"},"> 0")," the specified number of lines will be skipped. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"examples#skip-lines"}),"Example")))}l.isMDXComponent=!0},137:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},s=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=l(a),m=n,O=s["".concat(c,".").concat(m)]||s[m]||d[m]||r;return a?i.a.createElement(O,b({ref:t},p,{components:a})):i.a.createElement(O,b({ref:t},p))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var p=2;p<r;p++)c[p]=a[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);