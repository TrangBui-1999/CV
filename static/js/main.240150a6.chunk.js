(this["webpackJsonpreact-website"]=this["webpackJsonpreact-website"]||[]).push([[0],{25:function(e,t,s){},27:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s(19),a=s.n(i),n=(s(9),s(16)),r=s(2),l=(s(25),s(0)),o=["btn--primary","btn--outline"],j=["btn--medium","btn--large","btn--mobile","btn--wide"],b=["primary","blue","red","green"],d=function(e){var t=e.children,s=e.type,c=e.onClick,i=e.buttonStyle,a=e.buttonSize,n=e.buttonColor,r=o.includes(i)?i:o[0],d=j.includes(a)?a:j[0],h=b.includes(n)?n:null;return Object(l.jsx)("button",{className:"btn ".concat(r," ").concat(d," ").concat(h),onClick:c,type:s,children:t})},h=s(11);s(27);var m=function(){var e=Object(c.useState)(!1),t=Object(n.a)(e,2),s=t[0],i=t[1],a=Object(c.useState)(!0),o=Object(n.a)(a,2),j=o[0],b=o[1],m=function(){return i(!1)},x=function(){window.innerWidth<=960?b(!1):b(!0)};return Object(c.useEffect)((function(){x()}),[]),window.addEventListener("resize",x),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("nav",{className:"navbar",children:Object(l.jsxs)("div",{className:"navbar-container",children:[Object(l.jsxs)(r.b,{to:"/Portfolio",className:"navbar-logo",onClick:m,children:["HI, THIS IS A PORTFOLIO ",Object(l.jsx)(h.a,{className:"fab fa-typo3"})]}),Object(l.jsx)("div",{className:"menu-icon",onClick:function(){return i(!s)},children:Object(l.jsx)("i",{className:s?"fas fa-times":"fas fa-bars"})}),Object(l.jsxs)("ul",{className:s?"nav-menu active":"nav-menu",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/Home",className:"nav-links",onClick:m,children:"Travel Page"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/services",className:"nav-links",onClick:m,children:"DashBoard"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/products",className:"nav-links",onClick:m,children:"Sales"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/sign-up",className:"nav-links-mobile",onClick:m,children:"Sign Up"})})]}),j&&Object(l.jsx)(d,{buttonStyle:"btn--outline",children:"SIGN UP"})]})})})},x=s(3),O=(s(33),s.p+"static/media/video-1.59e75226.MP4");var u=function(){return Object(l.jsxs)("div",{className:"hero-container",children:[Object(l.jsx)("video",{src:O,autoPlay:!0,loop:!0,muted:!0}),Object(l.jsx)("h1",{children:"ADVENTURE AWAITS"}),Object(l.jsx)("p",{children:"What are you waiting for ?"}),Object(l.jsxs)("div",{className:"hero-btns",children:[Object(l.jsx)(d,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"GET STARTED    "}),Object(l.jsxs)(d,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",children:["WATCH TRAILER   ",Object(l.jsx)("i",{className:"far fa-play-circle"}),"  "]})]})]})};s(34);var p=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("li",{className:"cards__item",children:Object(l.jsxs)(r.b,{className:"cards__item__link",to:e.path,children:[Object(l.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(l.jsx)("img",{className:"cards__item__img",alt:"Travel",src:e.src})}),Object(l.jsx)("div",{className:"cards__item__info",children:Object(l.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})},f=s.p+"static/media/img-9.f97f588f.JPG",g=s.p+"static/media/img-6.047226b0.JPG",v=s.p+"static/media/img-7.dfeef525.JPG",N=s.p+"static/media/img-8.fabdf94d.JPG",k=s.p+"static/media/img-5.7fadbe1b.JPG";var _=function(){return Object(l.jsxs)("div",{className:"cards",children:[Object(l.jsx)("h1",{children:"Check out these EPIC Destinations!"}),Object(l.jsx)("div",{className:"cards__container",children:Object(l.jsxs)("div",{className:"cards__wrapper",children:[Object(l.jsxs)("ul",{className:"cards__items",children:[Object(l.jsx)(p,{src:f,text:"Explore the hidden waterfall deep inside the Amazon Jungle",label:"Adventure",path:"/services"}),Object(l.jsx)(p,{src:g,text:"Travel through the Islands of Bali in a Private Cruise",label:"Luxury",path:"/services"})]}),Object(l.jsxs)("ul",{className:"cards__items",children:[Object(l.jsx)(p,{src:v,text:"Set Sail in the Atlantic Ocean visiting Uncharted Waters",label:"Mystery",path:"/services"}),Object(l.jsx)(p,{src:N,text:"Experience Football on Top of the Himilayan Mountains",label:"Adventure",path:"/products"}),Object(l.jsx)(p,{src:k,text:"Ride through the Sahara Desert on a guided camel tour",label:"Adrenaline",path:"/sign-up"})]})]})})]})};var S=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(u,{}),Object(l.jsx)(_,{})]})};var w=function(){return Object(l.jsx)("h1",{className:"services",children:"SERVICES"})};var y=function(){return Object(l.jsx)("h1",{className:"products",children:"PRODUCTS"})};var T=function(){return Object(l.jsx)("h1",{className:"sign-up",children:"SIGN UP"})},I=s(17);s(35);var C=function(e){var t=e.lightBg,s=e.topLine,c=e.lightText,i=e.lightTextDesc,a=e.headline,n=e.description,o=e.buttonLabel,j=e.img,b=e.alt,h=e.imgStart;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:t?"home__hero-section":"home__hero-section darkBg",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row home__hero-row",style:{display:"flex",flexDirection:"start"===h?"row-reverse":"row"},children:[Object(l.jsx)("div",{className:"col",children:Object(l.jsxs)("div",{className:"home__hero-text-wrapper",children:[Object(l.jsx)("div",{className:c?"topline":"topline dark",children:s}),Object(l.jsx)("h1",{className:c?"heading":"heading dark",children:a}),Object(l.jsx)("p",{className:i?"home__hero-subtitle":"home__hero-subtitle dark",children:n}),Object(l.jsx)(r.b,{to:"/sign-up",children:Object(l.jsx)(d,{buttonSize:"btn--wide",buttonColor:"blue",children:o})})]})}),Object(l.jsx)("div",{className:"col",children:Object(l.jsx)("div",{className:"home__hero-img-wrapper",children:Object(l.jsx)("img",{src:j,alt:b,className:"home__hero-img"})})})]})})})})},P=s.p+"static/media/img-1.53f48437.JPG",A=s.p+"static/media/img-2.bb238fc1.JPG",E={lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Simple introduction",headline:"Hi there, my name is Trang",description:"Nice to meet you all. This is something I have learn thanks to all information as well as cousre on YouTube, you can check: Mr.Brian Design. My goal is to become a full stack website development.",buttonLabel:"Check my work",imgStart:"",img:P,alt:"Picture GG"},G={lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"Mission",headline:"Self-study is good when it comes to code",description:"There are lots of things and new technical when starting learning code, so the best way to get starting is taking a step in learning about Javascript. So that, I can learn one of the most basic coding.",buttonLabel:"Learn More",imgStart:"start",img:A,alt:"Picture GG"};var L=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(C,Object(I.a)({},E)),Object(l.jsx)(C,Object(I.a)({},G))]})};s(36);var D=function(){return Object(l.jsxs)("div",{className:"footer-container",children:[Object(l.jsxs)("section",{className:"footer-subscription",children:[Object(l.jsx)("p",{className:"footer-subscription-heading",children:"For further information, Please send your email in this box"}),Object(l.jsx)("div",{className:"input-areas",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),Object(l.jsx)(d,{buttonStyle:"btn--outline",children:"Send me"})]})}),Object(l.jsx)("p",{className:"footer-subscription-text",children:"Check if you have received my e-mail or not"})]}),Object(l.jsxs)("div",{class:"footer-links",children:[Object(l.jsxs)("div",{className:"footer-link-wrapper",children:[Object(l.jsxs)("div",{class:"footer-link-items",children:[Object(l.jsx)("h2",{children:"About Us"}),Object(l.jsx)(r.b,{to:"/sign-up",children:"How it works"}),Object(l.jsx)(r.b,{to:"/",children:"Testimonials"}),Object(l.jsx)(r.b,{to:"/",children:"Careers"}),Object(l.jsx)(r.b,{to:"/",children:"Investors"}),Object(l.jsx)(r.b,{to:"/",children:"Terms of Service"})]}),Object(l.jsxs)("div",{class:"footer-link-items",children:[Object(l.jsx)("h2",{children:"Contact Us"}),Object(l.jsx)(r.b,{to:"/",children:"Contact"}),Object(l.jsx)(r.b,{to:"/",children:"Support"}),Object(l.jsx)(r.b,{to:"/",children:"Destinations"}),Object(l.jsx)(r.b,{to:"/",children:"Sponsorships"})]})]}),Object(l.jsxs)("div",{className:"footer-link-wrapper",children:[Object(l.jsxs)("div",{class:"footer-link-items",children:[Object(l.jsx)("h2",{children:"Videos"}),Object(l.jsx)(r.b,{to:"/",children:"Submit Video"}),Object(l.jsx)(r.b,{to:"/",children:"Ambassadors"}),Object(l.jsx)(r.b,{to:"/",children:"Agency"}),Object(l.jsx)(r.b,{to:"/",children:"Influencer"})]}),Object(l.jsxs)("div",{class:"footer-link-items",children:[Object(l.jsx)("h2",{children:"Social Media"}),Object(l.jsx)(r.b,{to:"/",children:"Instagram"}),Object(l.jsx)(r.b,{to:"/",children:"Facebook"}),Object(l.jsx)(r.b,{to:"/",children:"Youtube"}),Object(l.jsx)(r.b,{to:"/",children:"Twitter"})]})]})]}),Object(l.jsx)("section",{class:"social-media",children:Object(l.jsxs)("div",{class:"social-media-wrap",children:[Object(l.jsx)("div",{class:"footer-logo",children:Object(l.jsxs)(r.b,{to:"/",className:"social-logo",children:["HI, THIS IS A PORTFOLIO",Object(l.jsx)(h.a,{className:"fab fa-typo3"})]})}),Object(l.jsx)("small",{class:"website-rights",children:"Create in \xa9 2021"}),Object(l.jsxs)("div",{class:"social-icons",children:[Object(l.jsx)(r.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook",children:Object(l.jsx)("i",{class:"fab fa-facebook-f"})}),Object(l.jsx)(r.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram",children:Object(l.jsx)("i",{class:"fab fa-instagram"})}),Object(l.jsx)(r.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube",children:Object(l.jsx)("i",{class:"fab fa-youtube"})}),Object(l.jsx)(r.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter",children:Object(l.jsx)("i",{class:"fab fa-twitter"})}),Object(l.jsx)(r.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn",children:Object(l.jsx)("i",{class:"fab fa-linkedin"})})]})]})})]})};var F=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(m,{}),Object(l.jsxs)(x.c,{children:[Object(l.jsx)(x.a,{path:"/",exact:!0,component:L}),Object(l.jsx)(x.a,{path:"/Portfolio",exact:!0,component:L}),Object(l.jsx)(x.a,{path:"/home",exact:!0,component:S}),Object(l.jsx)(x.a,{path:"/services",exact:!0,component:w}),Object(l.jsx)(x.a,{path:"/products",exact:!0,component:y}),Object(l.jsx)(x.a,{path:"/sign-up",exact:!0,component:T})]}),Object(l.jsx)(D,{})]})})};a.a.render(Object(l.jsx)(F,{}),document.getElementById("root"))},9:function(e,t,s){}},[[37,1,2]]]);
//# sourceMappingURL=main.240150a6.chunk.js.map