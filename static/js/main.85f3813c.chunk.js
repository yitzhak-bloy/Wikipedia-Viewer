(this["webpackJsonpwikipedia-viewer"]=this["webpackJsonpwikipedia-viewer"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),i=(n(9),n(1)),l=(n(10),function(e){var t=e.resp,n=t[1],a=t[3];return r.a.createElement("div",{className:"results"},n.map((function(e){return r.a.createElement("div",{key:e},r.a.createElement("a",{href:a[n.indexOf(e)],rel:"noopener noreferrer",target:"_blank"},r.a.createElement("h2",{className:"result"},e)))})))}),s=(n(11),function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),s=Object(i.a)(o,2),u=s[0],m=s[1],h=Object(a.useState)({}),p=Object(i.a)(h,2),f=p[0],d=p[1];Object(a.useEffect)((function(){E()}),[u]);var E=function(){fetch("https://he.wikipedia.org/w/api.php?origin=*&action=opensearch&search=".concat(u)).then((function(e){return e.json()})).then((function(e){console.log(e,"resJson"),d(e)})).catch((function(e){console.log(e)}))};return r.a.createElement("div",null,r.a.createElement("input",{type:"string",onChange:function(e){c(e.target.value)},className:"input",dir:"rtl",placeholder:"\u05d4\u05e7\u05e9 \u05dc\u05d7\u05d9\u05e4\u05d5\u05e9",onKeyPress:function(e){13===e.which&&m(n)}}),r.a.createElement("h1",null),r.a.createElement("button",{onClick:function(){m(n)}},"\u05d7\u05e4\u05e9"),f[0]?r.a.createElement(l,{resp:f}):null)}),u=(n(12),function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h2",null,"\u05de\u05e6\u05d9\u05d2 \u05d5\u05d9\u05e7\u05e4\u05d3\u05d9\u05d4"),r.a.createElement("p",{className:"subtitle"}," !\u05db\u05dc \u05d3\u05e3 \u05d5\u05d9\u05e7\u05e4\u05d3\u05d9\u05d4 \u05e9\u05d0\u05ea\u05d4 \u05e8\u05d5\u05e6\u05d4"),r.a.createElement("a",{href:"https://he.wikipedia.org/wiki/Special:Random",rel:"noopener noreferrer",target:"_blank",className:"random"},"\u05d9\u05d5\u05ea\u05e8 \u05de\u05d6\u05dc \u05de\u05e9\u05db\u05dc"),r.a.createElement(s,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.85f3813c.chunk.js.map