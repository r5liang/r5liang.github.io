(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"linkedin":"LinkedIn","twitter":"Twitter","facebook":"Facebook","intro":"This is Richard\'s website.","numberofwishes":"Number of wishes you have:","instagram":"Instagram"}')},12:function(e){e.exports=JSON.parse('{"linkedin":"\u9886\u82f1","twitter":"\u63a8\u7279","facebook":"\u975e\u6b7b\u4e0d\u53ef","intro":"\u8fd9\u662fRichard\u7684\u7f51\u7ad9\u3002","numberofwishes":"\u80fd\u62bd\u51e0\u6b21:"}')},13:function(e){e.exports=JSON.parse('{"twitter":"\u30c4\u30a4\u30c3\u30bf\u30fc","facebook":"\u30d5\u30a7\u30a4\u30b9\u30d6\u30c3\u30af","intro":"\u30ea\u30c1\u30e3\u30fc\u30c9\u306e\u30b5\u30a4\u30c8\u3067\u3059\u3002","numberofwishes":"\u4f55\u56de\u5f15\u3051\u308b\uff1a","instagram":"\u30a4\u30f3\u30b9\u30bf"}')},22:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),s=a(11),i=a.n(s),l=(a(22),a(4)),u=a.p+"static/media/angery_react.b2944b49.jpg",o=(a(9),a(10)),j=a(12),b=a(13),h=function(e){switch(e){case"en":return"English";case"zh":return"\u4e2d\u6587";case"jp":return"\u65e5\u672c\u8a9e";default:throw new Error("wtf must be tripping")}};var d=function(e){var t=e.currLanguage,a=e.newLanguage,c=e.setLanguage;return t===a?h(a):Object(n.jsx)("a",{className:"Profile-link",href:"javascript:void(0)",onClick:function(){return c(a)},children:h(a)})},p=a(16),f=a(2),O=a(7);var m=function(e){var t=Object(c.useState)(0),a=Object(l.a)(t,2),r=a[0],s=a[1],i=Object(c.useState)(0),u=Object(l.a)(i,2),o=u[0],j=u[1],b=Object(c.useState)(0),h=Object(l.a)(b,2),d=(h[0],h[1],Object(c.useState)(0)),p=Object(l.a)(d,2),f=(p[0],p[1],Object(c.useState)(-1)),m=Object(l.a)(f,2),g=m[0],x=m[1],v=Object(c.useState)("\xa0"),w=Object(l.a)(v,2),N=w[0],y=w[1],k=Object(c.useState)(!1),z=Object(l.a)(k,2),S=z[0],A=z[1],L=e.localize,C=Object(c.useState)([]),M=Object(l.a)(C,2),T=(M[0],M[1]),F=Object(c.useState)([]),P=Object(l.a)(F,2),E=(P[0],P[1]),_=Object(c.useState)([]),J=Object(l.a)(_,2),I=J[0],R=J[1];Object(c.useEffect)((function(){for(var e=[],t=1,a=.006,n=1;n<=90;n++)n>=74&&(a+=.06,a=Math.min(a,1)),e.push(t*a),t*=1-a;R(e)}),[]);var B=function(e){return I[e-1]},G=g>.9999&&g<1,D=Math.round(1/g*10)/10;return Object(c.useEffect)((function(){if(g>=0){var e=Object(n.jsxs)("div",{children:["You have a"," ",Object(n.jsxs)("b",{children:[G?">99.99":parseFloat((100*g).toPrecision(4)),"%",g<.5&&g>0?" (1 in "+D+")":""]})," ","chance of getting"," ",Object(n.jsxs)("b",{children:[o," copies in ",r," wishes"]}),"."]});y(e)}}),[g]),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("header",{className:"Calc-page",children:[Object(n.jsx)(O.a,{children:Object(n.jsx)("title",{children:"Genshin character event wish confidence intervals"})}),Object(n.jsxs)("div",{className:"Calc-horiz-layout-left",children:[Object(n.jsx)("div",{children:"Genshin character event wish confidence intervals"}),Object(n.jsxs)("div",{className:"App-horiz-layout-unspaced",children:[L("numberofwishes")," ",Object(n.jsx)("input",{type:"number",className:"Text-input",value:r,onChange:function(e){return s(Math.max(0,Math.min(5e4,Math.trunc(e.target.value))))}})]}),Object(n.jsxs)("div",{className:"App-horiz-layout-unspaced",children:["Number of copies you want: "," ",Object(n.jsx)("input",{type:"number",className:"Text-input",value:o,onChange:function(e){return j(Math.max(1,Math.min(100,Math.trunc(e.target.value))))}})]}),Object(n.jsxs)("div",{className:"App-horiz-layout-disabled",children:[Object(n.jsx)("label",{children:"Wish base success rate: "}),Object(n.jsx)("input",{type:"number",className:"Text-input-disabled",value:.006,disabled:!0})]}),Object(n.jsxs)("div",{className:"App-horiz-layout-disabled",children:[Object(n.jsx)("label",{children:"Soft pity: "}),Object(n.jsx)("input",{type:"number",className:"Text-input-disabled",value:74,disabled:!0})]}),Object(n.jsxs)("div",{className:"App-horiz-layout-disabled",children:[Object(n.jsx)("label",{children:"Success rate increase per wish beginning at soft pity:"}),Object(n.jsx)("input",{type:"number",className:"Text-input-disabled",value:.06,disabled:!0})]}),Object(n.jsx)("div",{className:"App-horiz-layout-unspaced",children:Object(n.jsx)("button",{class:"Submit-button",onClick:function(){A(!0);for(var e=Array(o).fill().map((function(){return Array(r).fill(-1)})),t=Array(o).fill().map((function(){return Array(r).fill(-1)})),a=function(t,a,n){e[t][a-1]=n},n=function(t,a){return t<0?1:a<=0?0:e[t][a-1]},c=function(e,a,n){t[e][a-1]=n},s=function(e,a){return e<0?1:a<=0?0:t[e][a-1]},i=0;i<o;i++){for(var l=1;l<=r;l++)if(l>90&&n(i-1,l-90)>=1)c(i,l,1);else{for(var u=0,j=1;j<=Math.min(90,l);j++)u+=B(j)*n(i-1,l-j);c(i,l,u)}for(var b=1;b<=r;b++)if(b>90&&n(i-1,b-90)>=1&&s(i,b-90)>=1)a(i,b,1);else{for(var h=0,d=1;d<=Math.min(90,b);d++)h+=.5*B(d)*n(i-1,b-d),h+=.5*B(d)*s(i,b-d);a(i,b,h)}}T(e),E(t),x(n(o-1,r)),A(!1)},disabled:S,children:S?"Calculating...":"Calculate"})}),Object(n.jsx)("div",{className:"App-horiz-layout-unspaced",children:N})]}),Object(n.jsx)("div",{className:"Calc-horiz-layout-right"})]})})};function g(e){var t=e.localize;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"Homepage",children:[Object(n.jsx)(O.a,{children:Object(n.jsx)("title",{children:"Richard's site"})}),Object(n.jsx)("div",{className:"App-horiz-layout",children:Object(n.jsx)("img",{src:u,className:"App-logo",alt:"angery react"})}),Object(n.jsx)("div",{className:"App-horiz-layout",children:t("intro")}),Object(n.jsxs)("div",{className:"App-horiz-layout",children:[Object(n.jsx)("a",{className:"Profile-link",href:"https://www.linkedin.com/in/richardrliang/",target:"_blank",rel:"noreferrer",children:t("linkedin")}),Object(n.jsx)("a",{className:"Profile-link",href:"https://www.facebook.com/richard.liang.583/",target:"_blank",rel:"noreferrer",children:t("facebook")}),Object(n.jsx)("a",{className:"Profile-link",href:"https://twitter.com/angery_rliang",target:"_blank",rel:"noreferrer",children:t("twitter")}),Object(n.jsx)("a",{className:"Profile-link",href:"https://www.instagram.com/richestliang/",target:"_blank",rel:"noreferrer",children:t("instagram")})]})]})})}var x=function(){var e=Object(c.useState)("en"),t=Object(l.a)(e,2),a=t[0],r=t[1],s=function(e){return function(e){switch(a){case"en":return o[e];case"zh":return j[e];case"jp":return b[e];default:throw new Error("wtf must be tripping")}}(e)||o[e]};return Object(n.jsxs)("header",{className:"App-header",children:[Object(n.jsx)("div",{className:"Main-container",children:Object(n.jsx)(p.a,{children:Object(n.jsxs)(f.c,{children:[Object(n.jsx)(f.a,{exact:!0,path:"/",element:Object(n.jsx)(g,{localize:s})}),Object(n.jsx)(f.a,{path:"/calc",element:Object(n.jsx)(m,{localize:s})})]})})}),Object(n.jsxs)("div",{className:"App-language-layout",children:[Object(n.jsx)(d,{currLanguage:a,newLanguage:"en",setLanguage:r}),Object(n.jsx)(d,{currLanguage:a,newLanguage:"zh",setLanguage:r}),Object(n.jsx)(d,{currLanguage:a,newLanguage:"jp",setLanguage:r})]})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),v()},9:function(e,t,a){}},[[26,1,2]]]);
//# sourceMappingURL=main.39d68f0a.chunk.js.map