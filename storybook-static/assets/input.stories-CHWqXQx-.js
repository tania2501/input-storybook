import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as _}from"./index-DmM0KDA7.js";import{T as v}from"./typography-Bd5qJ53J.js";function U(e){var n,a,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(n=0;n<o;n++)e[n]&&(a=U(e[n]))&&(r&&(r+=" "),r+=a)}else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function p(){for(var e,n,a=0,r="",o=arguments.length;a<o;a++)(e=arguments[a])&&(n=U(e))&&(r&&(r+=" "),r+=n);return r}const O=()=>s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none",children:s.jsx("path",{fill:"#8C8C9A",d:"m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095ZM5 11a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z"})});O.__docgenInfo={description:"",methods:[],displayName:"SvgSearch"};const z=e=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",...e,children:[s.jsx("path",{fill:"#8C8C9A",d:"M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 0 0 0-1ZM12.22 17c-4.31.1-7.12-3.59-8-5 1-1.61 3.61-4.9 7.61-5 4.29-.11 7.11 3.59 8 5-1.03 1.61-3.61 4.9-7.61 5Z"}),s.jsx("path",{fill:"#8C8C9A",d:"M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"})]});z.__docgenInfo={description:"",methods:[],displayName:"SvgUnvisible"};const B=e=>s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",...e,children:[s.jsx("path",{fill:"#8C8C9A",d:"M4.71 3.29a1.004 1.004 0 1 0-1.42 1.42l5.63 5.63a3.5 3.5 0 0 0 4.74 4.74l5.63 5.63a1.002 1.002 0 0 0 1.639-.325 1 1 0 0 0-.219-1.095l-16-16ZM12 13.5a1.5 1.5 0 0 1-1.5-1.5v-.07l1.56 1.56-.06.01Z"}),s.jsx("path",{fill:"#8C8C9A",d:"M12.22 17c-4.3.1-7.12-3.59-8-5 .626-1 1.38-1.914 2.24-2.72L5 7.87a15.89 15.89 0 0 0-2.87 3.63 1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25a9.48 9.48 0 0 0 3.23-.67l-1.58-1.58a7.739 7.739 0 0 1-1.7.25ZM21.87 11.5c-.64-1.11-4.17-6.68-10.14-6.5a9.48 9.48 0 0 0-3.23.67l1.58 1.58a7.74 7.74 0 0 1 1.7-.25c4.29-.11 7.11 3.59 8 5a13.699 13.699 0 0 1-2.29 2.72L19 16.13a15.89 15.89 0 0 0 2.91-3.63 1 1 0 0 0-.04-1Z"})]});B.__docgenInfo={description:"",methods:[],displayName:"SvgVisible"};const $="_input_1tmjo_21",ee="_error_1tmjo_34",se="_warning_1tmjo_37",re="_label_1tmjo_41",ae="_main_1tmjo_47",ne="_inputIcon_1tmjo_52",te="_search_1tmjo_56",oe="_svgSearch_1tmjo_62",ie="_visible_1tmjo_66",t={input:$,error:ee,warning:se,label:re,main:ae,inputIcon:ne,search:te,svgSearch:oe,visible:ie},G=_.forwardRef(({className:e,errorMessage:n,warningMessage:a,placeholder:r,type:o,containerProps:le,labelProps:pe,label:w,onChange:b,onValueChange:f,...H},J)=>{const[x,y]=_.useState(!1),K=o==="password",Q=o==="search",V=((i,Y)=>i==="password"&&Y?"text":i)(o,x),l={input:p(e,t.input,!!Q&&t.svgSearch,!!n&&t.error,!!a&&t.warning),label:p(t.label),container:p(t.main),visible:p(t.visible)},X=i=>{b==null||b(i),f==null||f(i.currentTarget.value)};return s.jsxs("div",{className:l.container,children:[w&&s.jsx(v,{as:"label",variant:"body2",className:l.label,children:w}),s.jsxs("div",{className:t.inputIcon,children:[s.jsx("div",{className:t.search,children:o==="search"&&s.jsx(O,{})}),s.jsx("input",{className:l.input,type:V,placeholder:r,onChange:X,ref:J,...H}),K&&s.jsx("div",{className:l.visible,children:x?s.jsx(B,{onClick:()=>y(!1)}):s.jsx(z,{onClick:()=>y(!0)})})]}),n&&s.jsx(v,{variant:"error",className:t.error,children:n}),a&&s.jsx(v,{variant:"warning",children:a})]})});G.__docgenInfo={description:"",methods:[],displayName:"Input",props:{onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},containerProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"literal",value:"'div'"}],raw:"ComponentProps<'div'>"},description:""},labelProps:{required:!1,tsType:{name:"ComponentProps",elements:[{name:"literal",value:"'label'"}],raw:"ComponentProps<'label'>"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},warningMessage:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""}}};const ge={title:"Components/Input",component:G,tags:["autodocs"],argTypes:{type:{options:["text","search","password"],control:{type:"radio"}}}},c={args:{type:"text",label:"Input",placeholder:"input",disabled:!1}},d={args:{type:"search",label:"Input",placeholder:"input",disabled:!1}},u={args:{type:"text",label:"Disabled",placeholder:"input",disabled:!0}},m={args:{type:"text",errorMessage:"Error",label:"Danger Input",placeholder:"input",disabled:!1}},g={args:{type:"text",warningMessage:"Warning",label:"Warning Input",placeholder:"warning",disabled:!1}},h={args:{type:"password",label:"Password Input",placeholder:"password",disabled:!1}};var I,j,S;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: 'text',
    label: 'Input',
    placeholder: 'input',
    disabled: false
  }
}`,...(S=(j=c.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var P,T,C;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    type: 'search',
    label: 'Input',
    placeholder: 'input',
    disabled: false
  }
}`,...(C=(T=d.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var N,M,Z;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    type: 'text',
    label: 'Disabled',
    placeholder: 'input',
    disabled: true
  }
}`,...(Z=(M=u.parameters)==null?void 0:M.docs)==null?void 0:Z.source}}};var A,E,q;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: 'text',
    errorMessage: 'Error',
    label: 'Danger Input',
    placeholder: 'input',
    disabled: false
  }
}`,...(q=(E=m.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var D,W,k;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: 'text',
    warningMessage: 'Warning',
    label: 'Warning Input',
    placeholder: 'warning',
    disabled: false
  }
}`,...(k=(W=g.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var F,L,R;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    type: 'password',
    label: 'Password Input',
    placeholder: 'password',
    disabled: false
  }
}`,...(R=(L=h.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const he=["PrimaryInput","SearchInput","DisabledInput","ErrorInput","WarningInput","PasswordInput"];export{u as DisabledInput,m as ErrorInput,h as PasswordInput,c as PrimaryInput,d as SearchInput,g as WarningInput,he as __namedExportsOrder,ge as default};
