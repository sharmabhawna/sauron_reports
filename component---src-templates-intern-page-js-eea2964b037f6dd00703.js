(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{129:function(n,e,t){"use strict";t.r(e);var a=t(0),o=t.n(a),r=t(131).b.div.withConfig({displayName:"mainLayout__MainContainer",componentId:"sc-2f817r-0"})(["width:960px;margin:0 auto;"]),i=function(n){return o.a.createElement(r,null,n.children)},u=t(145),l=t(138);t.d(e,"query",function(){return c});e.default=function(n){return o.a.createElement("div",null,o.a.createElement(l.a,null),o.a.createElement(i,null,o.a.createElement(u.a,{data:n.data.allDataJson.edges})))};var c="1477005020"},137:function(n,e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"==typeof window&&(t=window)}n.exports=t},138:function(n,e,t){"use strict";var a=t(147),o=t.n(a),r=t(131);function i(){var n=o()(["\n  @import url('https://fonts.googleapis.com/css?family=Ubuntu+Mono');\n\n  body {\n    font-family: 'Ubuntu Mono', monospace;\n  }\n"]);return i=function(){return n},n}e.a=Object(r.a)(i())},145:function(n,e,t){"use strict";var a=t(0),o=t.n(a),r=t(131),i=(t(133),t(136)),u=t.n(i),l=r.b.article.withConfig({displayName:"summaryCard__StyledCard",componentId:"sc-1nk90xs-0"})(["border:1px solid black;padding:10px;margin-bottom:10px;"]),c=function(n){n.node.job.results.testResult.failed||console.log(n.node);var e=n.node.job.results.testResult.failed.map(function(n,e){return o.a.createElement("li",{key:e},n.title)});return o.a.createElement(l,null,o.a.createElement("p",null,n.node.pusher.name," | ",n.node.commit.id," | ",o.a.createElement("span",null,o.a.createElement(u.a,{fromNow:!0,ago:!0},n.node.commit.timestamp)," ")),o.a.createElement("ul",null,e))},s=t(134),d=t.n(s),m=r.b.section.withConfig({displayName:"summaryCards__CardSection",componentId:"sc-10vv493-0"})(["margin-top:10px;"]),f=function(n){return n.node.job.results.testResult.failed};e.a=function(n){var e=n.data.filter(f),t=d.a.orderBy(e,function(n){return n.node.commit.timestamp},"desc").map(function(n){return o.a.createElement(c,{node:n.node,key:n.node.id})});return o.a.createElement(m,null,t)}}}]);
//# sourceMappingURL=component---src-templates-intern-page-js-eea2964b037f6dd00703.js.map