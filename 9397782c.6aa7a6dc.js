(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),c=(n(0),n(200)),i={id:"schema-stitching",title:"Schema Stitching",sidebar_label:"Schema Stitching"},o={unversionedId:"schema-stitching",id:"schema-stitching",isDocsHomePage:!1,title:"Schema Stitching",description:"Schema stitching is the process of creating a single GraphQL gateway schema from multiple underlying GraphQL APIs.",source:"@site/docs/schema-stitching.md",slug:"/schema-stitching",permalink:"/docs/schema-stitching",editUrl:"https://github.com/ardatan/graphql-tools/edit/master/website/docs/schema-stitching.md",version:"current",sidebar_label:"Schema Stitching"},s=[],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Schema stitching is the process of creating a single GraphQL gateway schema from multiple underlying GraphQL APIs."),Object(c.b)("p",null,"One of the main benefits of GraphQL is that we can query for all of our data in a single request from one schema. As that schema grows though, it may become cumbersome to manage it all in one codebase. It may become preferable to split the schema into seperate modules or microservices that can be developed and deployed independently. We may also want to integrate our own schema with third-party schemas."),Object(c.b)("p",null,"In these cases, ",Object(c.b)("inlineCode",{parentName:"p"},"stitchSchemas")," is used to combine multiple GraphQL schemas into one unified gateway schema that knows how to delegate parts of a query to the relevant underlying subschemas. These subschemas may be local GraphQL instances or APIs running on a remote server. They can even be third-party services, allowing us to create mashups with external data."),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/stitch-combining-schemas"}),"You can start learning about it in this section")))}u.isMDXComponent=!0},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,b=p["".concat(i,".").concat(h)]||p[h]||m[h]||c;return n?a.a.createElement(b,o({ref:t},l,{components:n})):a.a.createElement(b,o({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);