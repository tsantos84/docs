(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"/TIa":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("/Uhd"),l=a("ldzH"),o=a("DZGb"),c=a("3nhQ");t.a=function(e){var t=e.data,a=Object(n.useContext)(c.a).edition,s=t.filter((function(e){return 6>e.rank})),m=t.filter((function(e){return 6<=e.rank}));return r.a.createElement(l.b,{className:"conf__partners",section:"partners"},r.a.createElement("div",{className:"container"},r.a.createElement(o.a,null,"Our ",r.a.createElement("strong",null,"partners")),r.a.createElement("div",{className:"partners__section partners__bronze"},r.a.createElement(i.a,null,s.map((function(e){var t=e.name,n=e.logo,l=e.link;return r.a.createElement(i.b,{key:t,autosize:!0,padding:20,className:"partners__item"},r.a.createElement("a",{href:l,title:""+t,key:t,target:"_blank",rel:"nofollow noreferrer noopener"},r.a.createElement("img",{width:"200",height:"200",loading:"lazy",src:"/con/"+a+"/partners/"+n+".png",alt:t})))})))),r.a.createElement("div",{className:"partners__section partners__partners"},r.a.createElement(i.a,null,m.map((function(e){var t=e.name,n=e.logo,l=e.link;return r.a.createElement(i.b,{key:t,autosize:!0,padding:20,className:"partners__item"},r.a.createElement("a",{href:l,title:""+t,key:t,target:"_blank",rel:"nofollow noreferrer noopener"},r.a.createElement("img",{width:"200",height:"200",loading:"lazy",src:"/con/"+a+"/partners/"+n+".png",alt:t})))})))),r.a.createElement("div",{className:"partners__section"},r.a.createElement("a",{className:"conf__button square empty",href:"mailto:events@les-tilleuls.coop",target:"_blank",rel:"noopener noreferrer"},"Become sponsor"))))}},UYRS:function(e,t,a){"use strict";var n=a("q1tI"),r=a("3nhQ");t.a=function(e){var t=Object(n.useContext)(r.a).isEventBriteLoaded,a=Object(n.useState)(!1),i=a[0],l=a[1];Object(n.useLayoutEffect)((function(){var a;t&&!i&&(null===(a=window.EBWidgets)||void 0===a||a.createWidget({widgetType:"checkout",eventId:"483719928327",modal:!0,modalTriggerElementId:e}),l(!0))}),[t,e,i,l])}},Yttj:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("TJpk"),l=a("I8rh"),o=a("SXI4"),c=a("d3OS"),s=a("3XM5"),m=(a("2FHB"),a("cFx2")),d=a("ldzH"),p=a("DZGb"),u=a("Wbzz"),f=function(){return r.a.createElement(d.b,{className:"py-20 relative overflow-hidden",section:"missing"},r.a.createElement("div",{className:"container"},r.a.createElement(p.a,{dark:!0},r.a.createElement("strong",null,"What happened last year?")),r.a.createElement("p",{className:"conf__section-subtitle dark mb-0"},"Watch the conference recordings on Youtube and find more information on"," ",r.a.createElement(u.Link,{className:"text-white",to:"/con/2022/review"},"our review"),"!"),r.a.createElement("a",{className:"mt-30 mx-auto conf__button",href:"https://www.youtube.com/playlist?list=PL3hoUDjLa7eSo7-CAyiirYfhJe4h_Wxs4",target:"_blank",rel:"noopener noreferrer"},"Watch the conferences")))},h=[{name:"SensioLabs",logo:"sensiolabs",link:"https://sensiolabs.com/fr/",rank:2},{name:"Platform.sh",logo:"platform-sh",link:"https://platform.sh/",rank:2},{name:"Akawaka",logo:"akawaka",link:"https://www.akawaka.fr/",rank:4},{name:"Orbitale.io",logo:"orbitale",link:"https://www.orbitale.io/en/",rank:4},{name:"Alximy",logo:"alximy",link:"https://alximy.io/",rank:5},{name:"JL recrutement",logo:"jl-recrutement",link:"https://www.jlrecrutement.com/",rank:5},{name:"WeLoveDevs",logo:"we-love-dev",link:"https://welovedevs.com/",rank:5},{name:"Accor Group",logo:"accor",link:"https://all.accor.com/",rank:6},{name:"Euratechnologies",logo:"euratechnologies",link:"https://www.euratechnologies.com/",rank:6},{name:"Sticker mule",logo:"sticker-mule",link:"https://mule.to/p437",rank:6}],g=a("c63E"),E=a("/Uhd"),k=[{id:1,title:"Conference",languages:"French and english-speaking talks",offers:[{title:"2 days on-site event <br>(Early bird)</br>",price:119,limitDate:"2023-04-24"},{title:"2 days on-site event <br>(Regular)</br>",price:159,startDate:"2023-04-25",limitDate:"2023-07-31"},{title:"2 days on-site event <br>(Late bird)</br>",price:209,startDate:"2023-08-01"},{title:"Online ticket",price:89}]},{id:2,title:"Workshops",languages:"Learn the best of API Platform",offers:[{title:"1 workshop",price:499},{title:"Combo 3 workshops",price:1199},{title:"Combo 3 workshops and 2 days conference",price:1299}]}],v=a("Wgwc"),b=a.n(v),w=a("0sn9"),_=a("UYRS"),y=function(e){var t=e.price;Object(_.a)("price"+t.id);var a=t.offers.filter((function(e){return function(e){return(!e.limitDate||!b()(e.limitDate).isBefore(b()(),"day"))&&(!e.startDate||!b()(e.startDate).isAfter(b()(),"day"))}(e)}));return r.a.createElement(E.b,{padding:5,className:"conf__pricing-item"},r.a.createElement("div",{className:"conf__pricing-card",id:"price"+t.id},r.a.createElement("div",{className:"pricing__header"},r.a.createElement("h3",{className:"h5 lined lined-white"},t.title),r.a.createElement("span",{className:"overline"},t.languages)),r.a.createElement("div",{className:"pricing__content dotted-corner corner-bottom"},a.map((function(e,t){return r.a.createElement("div",{key:e.title+"-"+t,className:"pricing__offer active"},r.a.createElement("div",{className:"overline offer__title",dangerouslySetInnerHTML:{__html:e.title}}),r.a.createElement("span",{className:"h4 pricing__amount"},e.price,"€"))}))),r.a.createElement(w.a,{className:"square",size:"small"},"Buy tickets")))},N=function(){return r.a.createElement(d.b,{className:"conf__pricing",section:"pricing"},r.a.createElement("div",{className:"container"},r.a.createElement(p.a,{dark:!0},r.a.createElement("strong",null,"Pricing")),r.a.createElement(E.a,null,k.map((function(e){return r.a.createElement(y,{key:e.id,price:e})})),r.a.createElement(E.b,{className:"pricing__discount"},r.a.createElement("div",{className:"discount__content dotted-corner"},r.a.createElement("p",{className:"discount__title h6 lined lined-white"},"Student or unemployed developer?"),r.a.createElement("p",null,"Your ticket is ",r.a.createElement("strong",null,"free*")),r.a.createElement("a",{className:"conf__button small square white",href:"mailto:events@les-tilleuls.coop"},"Contact us!"),r.a.createElement("small",null,"*certificate will be needed"))))))},P=a("psCg"),I=a("/TIa");t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(i.Helmet,{titleTemplate:""},r.a.createElement("title",null,m.a+": meet the best API experts!"),r.a.createElement("meta",{property:"og:title",content:m.a+": meet the best API experts!"}),r.a.createElement("meta",{name:"twitter:title",content:m.a+": meet the best API experts!"})),r.a.createElement(l.a,{date:"September 21 - 22, 2023 | Lille & online",baseline:"Meet the best API experts at the only event dedicated to the API Platform framework and its ecosystem.",button:r.a.createElement("div",{className:"conf__cover-buttons"},r.a.createElement(g.a,{className:"pink",id:"cover",size:"large"},"Buy tickets"))}),r.a.createElement(o.a,null,r.a.createElement("p",{className:"conf__section-subtitle"},"Take a look at our first amazing speaker reveal! From security and testing to best practices, our lineup of speakers will cover a wide range of topics that you won't want to miss this September!")),r.a.createElement(N,null),r.a.createElement("div",{className:"pt-50"},r.a.createElement(P.a,{subtitle:"The API Platform Conference will take place in Lille, meeting point of big European cities. Rooms have been pre-booked and negotiated for you. Take a look at our <a href='/con/2023/faq/'>FAQ section</a> for more information."})),r.a.createElement(f,null),r.a.createElement("div",{className:"pt-50 pb-50"},r.a.createElement(I.a,{data:h})),r.a.createElement(s.a,null))}},c63E:function(e,t,a){"use strict";var n=a("zLVn"),r=a("q1tI"),i=a.n(r),l=a("dVog"),o=a("UYRS"),c=a("0sn9"),s=a("3nhQ"),m=["children","id"],d=function(e){var t=e.children,a=e.id,r=Object(n.a)(e,m);return Object(o.a)(a),i.a.createElement(c.a,Object.assign({id:a},r),t)};t.a=function(e){return Object(r.useContext)(s.a).edition!==l.a?i.a.createElement(i.a.Fragment,null):i.a.createElement(d,e)}},d3OS:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("TJpk"),l=a.n(i),o={logoLink:"/",links:[{to:"/con/editions/",text:"Previous editions"},{to:"/con/2023/speakers",text:"Speakers"},{to:"/con/2023/#pricing",text:"Pricing"},{to:"/con/2023/#venue",text:"Venue"},{to:"/con/2023/#sponsorship",text:"Sponsorship"}]},c=[{title:"Previous edition",links:[{title:"2022 review",link:"/con/2022/review"},{title:"2022 archive",link:"/con/2022/"},{title:"All previous editions",link:"/con/editions/"}]},{title:"The event",links:[{title:"Speakers",link:"/con/2023/speakers"},{title:"Venue",link:"/con/2023/#venue"},{title:"Pricing",link:"/con/2023/#pricing"}]},{title:"Legal",links:[{title:"Code of conduct",link:"/con/2023/code-of-conduct"},{title:"FAQ",link:"/con/2023/faq"},{title:"Transparency",link:"/con/2023/transparency"}]}],s=a("3nhQ"),m=a("SU53"),d=a("YwZP"),p={TITLE:"API Platform Conference 2023",DESCRIPTION:"The international conference dedicated to API Platform and its ecosystem",OG_IMAGE:"https://api-platform.com/conf-facebook-2023.png",URL:"https://api-platform.com/con/2023/"},u=a("RHlq"),f=a("c63E");t.a=function(e){var t=e.logoAlwaysVisible,a=e.children,i={"@context":"https://schema.org","@type":"Event",name:"API Platform Conference 2023",description:"The international conference dedicated to API Platform and its ecosystem",url:"https://api-platform.com/con/2023/",eventStatus:"http://schema.org/EventScheduled",eventAttendanceMode:"https://schema.org/MixedEventAttendanceMode",startDate:"2023-09-21",endDate:"2023-09-22",organizer:{"@type":"Organization",name:"Les-Tilleuls.coop",url:"https://les-tilleuls.coop/en"},location:[{"@type":"Place",name:"Euratechnologies",address:{"@type":"PostalAddress",addressLocality:"Lille",addressRegion:"Hauts de France",postalCode:"59000",streetAddress:"Place de Saintignon, 165 avenue de Bretagne"}},{"@type":"VirtualLocation",url:"https://api-platform.com/con/2023/"}],image:p.OG_IMAGE},h=Object(d.useLocation)().pathname,g=Object(n.useState)([]),E=g[0],k=g[1],v=Object(n.useMemo)((function(){var e=null==E?void 0:E[E.length-1];return e&&"home"!==e&&E.length?h+"#"+E[E.length-1]:h}),[E,h]);Object(n.useEffect)((function(){window.history.replaceState({},"",v)}),[v]);var b=Object(n.useState)(!1),w=b[0],_=b[1];return Object(n.useEffect)((function(){var e=document.createElement("script");e.src="https://www.eventbrite.com/static/widgets/eb_widgets.js",e.onload=function(){_(!0)},document.body.appendChild(e)}),[_]),r.a.createElement(s.a.Provider,{value:{nav:o,activeLink:v,edition:"2023",isEventBriteLoaded:w}},r.a.createElement(m.a.Provider,{value:{sectionsVisibles:E,setSectionsVisibles:k}},r.a.createElement(l.a,null,r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(i)),r.a.createElement("script",{defer:!0,src:"https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js"})),r.a.createElement(u.a,{edition:"2023",meta:p,logoAlwaysVisible:t,footer:c,navButton:r.a.createElement(f.a,{className:"pink",size:"small",id:"nav"},"Buy tickets")},a)))}}}]);
//# sourceMappingURL=component---src-pages-con-2023-index-tsx-c2d981a8776a1ca2a81a.js.map