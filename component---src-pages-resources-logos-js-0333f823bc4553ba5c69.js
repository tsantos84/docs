(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"/Uhd":function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return s}));var n=a("q1tI"),r=a.n(n),o=a("TSYQ"),l=a.n(o),c=function(e){var t=e.left,a=e.children,n=e.className;return r.a.createElement("div",{className:l()(n,"grid__container",{left:t})},a)};c.defaultProps={left:!1,className:""};var s=function(e){var t,a=e.className,n=e.padding,o=e.limitWidth,c=e.full,s=e.children,m=e.autosize;return r.a.createElement("div",{className:l()(a,"grid__item",(t={},t["p-"+n]=!!n||0===n,t["no-min"]=!o,t.auto=m,t.full=c,t))},s)};s.defaultProps={full:!1,limitWidth:!0,padding:null,className:"",autosize:!1}},xZD7:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),l=a("TJpk"),c=a.n(l),s=a("7oih"),m=a("/Uhd"),i=a("TSYQ"),u=a.n(i),d=a("Nr1y"),f=function(e){var t=e.logo,a=Object(n.useState)(t.types.length&&t.types[0]),o=a[0],l=a[1],c=Object(n.useState)(o.formats[0]),s=c[0],m=c[1],i=Object(n.useMemo)((function(){return s.src}),[s]);return r.a.createElement("div",{className:"logo__card card nopadding clickable"},r.a.createElement("div",{className:"logo__checkerboard"},r.a.createElement("img",{src:t.thumbnail,alt:t.name})),r.a.createElement("div",{className:"card__bottom"},r.a.createElement("div",{className:u()("logo__options",{withFormat:1<o.formats.length})},r.a.createElement("div",{className:"logo__types"},t.types.map((function(e){return r.a.createElement("button",{key:e.type,onClick:function(){return function(e){l(e),m(e.formats[0])}(e)},className:u()("logo__type",{active:o&&o.type===e.type}),type:"button"},e.type)}))),r.a.createElement("div",{className:"logo__formats"},1<o.formats.length&&o.formats.map((function(e){return r.a.createElement("button",{key:e.name,onClick:function(){return function(e){return m(e)}(e)},className:u()("logo__format",{active:s&&s.name===e.name}),type:"button"},e.name)})))),r.a.createElement(d.a,{icon:"download",className:"logo__button small",link:i,download:!0})))};t.default=function(e){var t=e.location,a=e.data,n=a.svg.nodes.map((function(e){return{name:e.name,thumbnail:e.publicURL,types:[{type:"svg",formats:[{name:"default",src:e.publicURL}]}]}})),l=function(e){return{type:"png",src:e.formats.medium.src,formats:Object.keys(e.formats).filter((function(t){return e.formats[t].src})).map((function(t){return{name:t,src:e.formats[t].src}}))}};return a.png.nodes.map((function(e){var t=n.find((function(t){return t.name===e.name}));return t?t.types.push(l(e)):n.push({name:e.name,thumbnail:e.formats.small.src,types:[l(e)]})})),r.a.createElement(s.a,{location:t},r.a.createElement("div",{className:"logos"},r.a.createElement(c.a,{title:"Logos"}),r.a.createElement("header",{className:"page__header-overlaid bg-blue"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"page__title color-white"},"Identity and ",r.a.createElement("strong",null,"logos")),r.a.createElement("p",{className:"h4-like color-white"},"Before using the API Platform logos, read our"," ",r.a.createElement(o.Link,{className:"color-white",to:"/trademark-policy"},"Trademark and Logo Policy"),"."))),r.a.createElement("section",{className:"container"},r.a.createElement(m.a,{className:"logo__grid"},n.map((function(e){return r.a.createElement(m.b,{key:e.name,padding:10},r.a.createElement(f,{logo:e}))}))))))}}}]);
//# sourceMappingURL=component---src-pages-resources-logos-js-0333f823bc4553ba5c69.js.map