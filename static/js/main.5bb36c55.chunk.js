(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"linkedin":"LinkedIn","twitter":"Twitter","facebook":"Facebook","intro":"This is Richard\'s website.","numberofwishes":"Number of wishes you have:"}')},12:function(e){e.exports=JSON.parse('{"linkedin":"\u9886\u82f1","twitter":"\u63a8\u7279","facebook":"\u975e\u6b7b\u4e0d\u53ef","intro":"\u8fd9\u662fRichard\u7684\u7f51\u7ad9\u3002","numberofwishes":"\u80fd\u62bd\u51e0\u6b21:"}')},13:function(e){e.exports=JSON.parse('{"twitter":"\u30c4\u30a4\u30c3\u30bf\u30fc","facebook":"\u30d5\u30a7\u30a4\u30b9\u30d6\u30c3\u30af","intro":"\u30ea\u30c1\u30e3\u30fc\u30c9\u306e\u30b5\u30a4\u30c8\u3067\u3059\u3002","numberofwishes":"\u4f55\u56de\u5f15\u3051\u308b\uff1a"}')},22:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),i=a(11),s=a.n(i),l=(a(22),a(4)),u=a.p+"static/media/angery_react.b2944b49.jpg",o=(a(9),a(10)),j=a(12),b=a(13),h=function(e){switch(e){case"en":return"English";case"zh":return"\u4e2d\u6587";case"jp":return"\u65e5\u672c\u8a9e";default:throw new Error("wtf must be tripping")}};var d=function(e){var t=e.currLanguage,a=e.newLanguage,c=e.setLanguage;return t===a?h(a):Object(n.jsx)("a",{className:"Profile-link",href:"javascript:void(0)",onClick:function(){return c(a)},children:h(a)})},p=a(16),f=a(2),O=a(7);var m=function(e){var t=Object(c.useState)(0),a=Object(l.a)(t,2),r=a[0],i=a[1],s=Object(c.useState)(0),u=Object(l.a)(s,2),o=u[0],j=u[1],b=Object(c.useState)(0),h=Object(l.a)(b,2),d=(h[0],h[1],Object(c.useState)(0)),p=Object(l.a)(d,2),f=(p[0],p[1],Object(c.useState)(-1)),m=Object(l.a)(f,2),x=m[0],g=m[1],v=Object(c.useState)("\xa0"),w=Object(l.a)(v,2),y=w[0],N=w[1],k=e.localize,z=Object(c.useState)([]),S=Object(l.a)(z,2),A=(S[0],S[1]),L=Object(c.useState)([]),M=Object(l.a)(L,2),C=(M[0],M[1]),T=Object(c.useState)([]),F=Object(l.a)(T,2),P=F[0],E=F[1];Object(c.useEffect)((function(){for(var e=[],t=1,a=.006,n=1;n<=90;n++)n>=74&&(a+=.06,a=Math.min(a,1)),e.push(t*a),t*=1-a;E(e)}),[]);var J=function(e){return P[e-1]},_=x>.9999&&x<1,I=Math.round(1/x*10)/10;return Object(c.useEffect)((function(){if(x>=0){var e=Object(n.jsxs)("div",{children:["You have a"," ",Object(n.jsxs)("b",{children:[_?">99.99":parseFloat((100*x).toPrecision(4)),"%",x<.5&&x>0?" (1 in "+I+")":""]})," ","chance of getting"," ",Object(n.jsxs)("b",{children:[o," copies in ",r," wishes"]}),"."]});N(e)}}),[x]),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("header",{className:"Calc-page",children:[Object(n.jsx)(O.a,{children:Object(n.jsx)("title",{children:"Genshin character event wish confidence intervals"})}),Object(n.jsxs)("div",{className:"Calc-horiz-layout-left",children:[Object(n.jsx)("div",{children:"Genshin character event wish confidence intervals"}),Object(n.jsxs)("div",{className:"App-horiz-layout-unspaced",children:[k("numberofwishes")," ",Object(n.jsx)("input",{type:"number",className:"Text-input",value:r,onChange:function(e){return i(Math.max(0,Math.min(5e3,Math.trunc(e.target.value))))}})]}),Object(n.jsxs)("div",{className:"App-horiz-layout-unspaced",children:["Number of copies you want: "," ",Object(n.jsx)("input",{type:"number",className:"Text-input",value:o,onChange:function(e){return j(Math.max(1,Math.min(100,Math.trunc(e.target.value))))}})]}),Object(n.jsxs)("div",{className:"App-horiz-layout-disabled",children:[Object(n.jsx)("label",{children:"Wish base success rate: "}),Object(n.jsx)("input",{type:"number",className:"Text-input-disabled",value:.006,disabled:!0})]}),Object(n.jsxs)("div",{className:"App-horiz-layout-disabled",children:[Object(n.jsx)("label",{children:"Soft pity: "}),Object(n.jsx)("input",{type:"number",className:"Text-input-disabled",value:74,disabled:!0})]}),Object(n.jsxs)("div",{className:"App-horiz-layout-disabled",children:[Object(n.jsx)("label",{children:"Success rate increase per wish beginning at soft pity:"}),Object(n.jsx)("input",{type:"number",className:"Text-input-disabled",value:.06,disabled:!0})]}),Object(n.jsx)("div",{className:"App-horiz-layout-unspaced",children:Object(n.jsx)("button",{class:"Submit-button",onClick:function(){for(var e=Array(o).fill().map((function(){return Array(r).fill(-1)})),t=Array(o).fill().map((function(){return Array(r).fill(-1)})),a=function(t,a,n){e[t][a-1]=n},n=function(t,a){return t<0?1:a<=0?0:e[t][a-1]},c=function(e,a,n){t[e][a-1]=n},i=function(e,a){return e<0?1:a<=0?0:t[e][a-1]},s=0;s<o;s++){for(var l=1;l<=r;l++)if(l>90&&n(s-1,l-90)>=1)c(s,l,1);else{for(var u=0,j=1;j<=Math.min(90,l);j++)u+=J(j)*n(s-1,l-j);c(s,l,u)}for(var b=1;b<=r;b++)if(b>90&&n(s-1,b-90)>=1&&i(s,b-90)>=1)a(s,b,1);else{for(var h=0,d=1;d<=Math.min(90,b);d++)h+=.5*J(d)*n(s-1,b-d),h+=.5*J(d)*i(s,b-d);a(s,b,h)}}A(e),C(t),g(n(o-1,r))},children:"Calculate"})}),Object(n.jsx)("div",{className:"App-horiz-layout-unspaced",children:y})]}),Object(n.jsx)("div",{className:"Calc-horiz-layout-right"})]})})};function x(e){var t=e.localize;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"Homepage",children:[Object(n.jsx)(O.a,{children:Object(n.jsx)("title",{children:"Richard's site"})}),Object(n.jsx)("div",{className:"App-horiz-layout",children:Object(n.jsx)("img",{src:u,className:"App-logo",alt:"angery react"})}),Object(n.jsx)("div",{className:"App-horiz-layout",children:t("intro")}),Object(n.jsxs)("div",{className:"App-horiz-layout",children:[Object(n.jsx)("a",{className:"Profile-link",href:"https://www.linkedin.com/in/richardrliang/",target:"_blank",rel:"noreferrer",children:t("linkedin")}),Object(n.jsx)("a",{className:"Profile-link",href:"https://www.facebook.com/richard.liang.583/",target:"_blank",rel:"noreferrer",children:t("facebook")}),Object(n.jsx)("a",{className:"Profile-link",href:"https://twitter.com/angery_rliang",target:"_blank",rel:"noreferrer",children:t("twitter")})]})]})})}var g=function(){var e=Object(c.useState)("en"),t=Object(l.a)(e,2),a=t[0],r=t[1],i=function(e){return function(e){switch(a){case"en":return o[e];case"zh":return j[e];case"jp":return b[e];default:throw new Error("wtf must be tripping")}}(e)||o[e]};return Object(n.jsxs)("header",{className:"App-header",children:[Object(n.jsx)("div",{className:"Main-container",children:Object(n.jsx)(p.a,{children:Object(n.jsxs)(f.c,{children:[Object(n.jsx)(f.a,{exact:!0,path:"/",element:Object(n.jsx)(x,{localize:i})}),Object(n.jsx)(f.a,{path:"/calc",element:Object(n.jsx)(m,{localize:i})})]})})}),Object(n.jsxs)("div",{className:"App-language-layout",children:[Object(n.jsx)(d,{currLanguage:a,newLanguage:"en",setLanguage:r}),Object(n.jsx)(d,{currLanguage:a,newLanguage:"zh",setLanguage:r}),Object(n.jsx)(d,{currLanguage:a,newLanguage:"jp",setLanguage:r})]})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),v()},9:function(e,t,a){}},[[26,1,2]]]);
//# sourceMappingURL=main.5bb36c55.chunk.js.map