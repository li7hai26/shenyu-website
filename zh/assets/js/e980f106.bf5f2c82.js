"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[48608],{15680:(e,n,i)=>{i.d(n,{xA:()=>m,yg:()=>s});var a=i(96540);function l(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function t(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(n){l(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,a,l=function(e,n){if(null==e)return{};var i,a,l={},t=Object.keys(e);for(a=0;a<t.length;a++)i=t[a],n.indexOf(i)>=0||(l[i]=e[i]);return l}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)i=t[a],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var p=a.createContext({}),y=function(e){var n=a.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},m=function(e){var n=y(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var i=e.components,l=e.mdxType,t=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=y(i),d=l,s=u["".concat(p,".").concat(d)]||u[d]||g[d]||t;return i?a.createElement(s,r(r({ref:n},m),{},{components:i})):a.createElement(s,r({ref:n},m))}));function s(e,n){var i=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var t=i.length,r=new Array(t);r[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:l,r[1]=o;for(var y=2;y<t;y++)r[y]=i[y];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},21062:(e,n,i)=>{i.r(n),i.d(n,{contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>p});var a=i(58168),l=(i(96540),i(15680));const t={title:"2.4.1",sidebar_position:6,keywords:["release-notes"],description:"release-notes"},r="2.4.1",o={unversionedId:"2.4.1-release",id:"2.4.1-release",isDocsHomePage:!1,title:"2.4.1",description:"release-notes",source:"@site/i18n/zh/docusaurus-plugin-content-docs-event/current/2.4.1-release.md",sourceDirName:".",slug:"/2.4.1-release",permalink:"/zh/event/2.4.1-release",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs-event/current/2.4.1-release.md",version:"current",lastUpdatedBy:"po-168",lastUpdatedAt:1729504603,formattedLastUpdatedAt:"2024/10/21",sidebarPosition:6,frontMatter:{title:"2.4.1",sidebar_position:6,keywords:["release-notes"],description:"release-notes"}},p=[{value:"\u65b0\u529f\u80fd",id:"\u65b0\u529f\u80fd",children:[]},{value:"API \u66f4\u6539",id:"api-\u66f4\u6539",children:[]},{value:"\u589e\u5f3a",id:"\u589e\u5f3a",children:[]},{value:"\u91cd\u6784",id:"\u91cd\u6784",children:[]},{value:"\u9519\u8bef\u4fee\u590d",id:"\u9519\u8bef\u4fee\u590d",children:[]}],y={toc:p},m="wrapper";function u(e){let{components:n,...i}=e;return(0,l.yg)(m,(0,a.A)({},y,i,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"241"},"2.4.1"),(0,l.yg)("h2",{id:"\u65b0\u529f\u80fd"},"\u65b0\u529f\u80fd"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"admin"),"\u7aef\u652f\u6301",(0,l.yg)("inlineCode",{parentName:"li"},"PostgreSQL"),"\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u652f\u6301\u52a8\u6001\u52a0\u8f7d\u63d2\u4ef6\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u652f\u6301\u672c\u5730\u4fee\u6539\u6570\u636e\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u6dfb\u52a0",(0,l.yg)("inlineCode",{parentName:"li"},"Websocket"),"\u63d2\u4ef6\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u6dfb\u52a0",(0,l.yg)("inlineCode",{parentName:"li"},"CryptorRequest"),"\u63d2\u4ef6\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u6dfb\u52a0",(0,l.yg)("inlineCode",{parentName:"li"},"CryptorResponse"),"\u63d2\u4ef6\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u652f\u6301",(0,l.yg)("inlineCode",{parentName:"li"},"Spring Cloud"),"\u7070\u5ea6\u53d1\u5e03\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u652f\u6301",(0,l.yg)("inlineCode",{parentName:"li"},"Apache Dubbo"),"\u7070\u5ea6\u53d1\u5e03\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u5b9e\u73b0",(0,l.yg)("inlineCode",{parentName:"li"},"dubbo"),"\u7684\u5f02\u6b65\u8c03\u7528\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u652f\u6301\u5916\u90e8\u8de8\u57df\u914d\u7f6e\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u652f\u6301",(0,l.yg)("inlineCode",{parentName:"li"},"Sign"),"\u63d2\u4ef6\u7684\u81ea\u5b9a\u4e49\u3002")),(0,l.yg)("h2",{id:"api-\u66f4\u6539"},"API \u66f4\u6539"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u91cd\u6784",(0,l.yg)("inlineCode",{parentName:"li"},"shenyu"),"\u914d\u7f6e\u6587\u4ef6\u3002")),(0,l.yg)("h2",{id:"\u589e\u5f3a"},"\u589e\u5f3a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u4f18\u5316",(0,l.yg)("inlineCode",{parentName:"li"},"dubbo")," \u7684\u5f02\u6b65\u8c03\u7528\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u6dfb\u52a0\u8d1f\u8f7d\u5747\u8861\u516c\u5171\u6a21\u5757\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u4f18\u5316",(0,l.yg)("inlineCode",{parentName:"li"},"SQL"),"\u521d\u59cb\u5316\u8bed\u53e5\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u91cd\u6784",(0,l.yg)("inlineCode",{parentName:"li"},"Admin"),"\u7aef\u7684",(0,l.yg)("inlineCode",{parentName:"li"},"PageHelper"),"\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u4f18\u5316",(0,l.yg)("inlineCode",{parentName:"li"},"GlobalErrorHandler"),"\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u5c06",(0,l.yg)("inlineCode",{parentName:"li"},"ShenyuPlugin"),"\u7684",(0,l.yg)("inlineCode",{parentName:"li"},"skip"),"\u65b9\u6cd5\u63a5\u53e3\u7684\u8fd4\u56de\u503c\u4f18\u5316\u4e3a",(0,l.yg)("inlineCode",{parentName:"li"},"boolean"),"\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u4f18\u5316\u6ce8\u518c\u89c4\u5219"),(0,l.yg)("li",{parentName:"ul"},"\u4fee\u6539",(0,l.yg)("inlineCode",{parentName:"li"},"dubbo"),"\u548c",(0,l.yg)("inlineCode",{parentName:"li"},"sofa"),"\u53c2\u6570\u89e3\u6790\u670d\u52a1\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u91cd\u6784",(0,l.yg)("inlineCode",{parentName:"li"},"sign"),"\u63d2\u4ef6\u63a5\u53e3\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u79fb\u9664",(0,l.yg)("inlineCode",{parentName:"li"},"websocket"),"\u8fc7\u6ee4\u5668\u3002")),(0,l.yg)("h2",{id:"\u91cd\u6784"},"\u91cd\u6784"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u79fb\u9664",(0,l.yg)("inlineCode",{parentName:"li"},"lombok"),"\u4f9d\u8d56\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u79fb\u9664",(0,l.yg)("inlineCode",{parentName:"li"},"mapstruct"),"\u4f9d\u8d56\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u652f\u6301",(0,l.yg)("inlineCode",{parentName:"li"},"JDK8 ~ JDK15"),"\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"motan"),"\u63d2\u4ef6\u6dfb\u52a0",(0,l.yg)("inlineCode",{parentName:"li"},"plugin_handle"),"\u7684",(0,l.yg)("inlineCode",{parentName:"li"},"SQL"),"\u8bed\u53e5\u3002")),(0,l.yg)("h2",{id:"\u9519\u8bef\u4fee\u590d"},"\u9519\u8bef\u4fee\u590d"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u4fee\u590d",(0,l.yg)("inlineCode",{parentName:"li"},"jwt"),"\u63d2\u4ef6\u7684",(0,l.yg)("inlineCode",{parentName:"li"},"JsonSyntaxException"),"\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u4fee\u590d",(0,l.yg)("inlineCode",{parentName:"li"},"resilience4j"),"\u63d2\u4ef6",(0,l.yg)("inlineCode",{parentName:"li"},"sql"),"\u811a\u672c\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u4fee\u590d",(0,l.yg)("inlineCode",{parentName:"li"},"disruptor"),"\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u4fee\u590d",(0,l.yg)("inlineCode",{parentName:"li"},"HealthCheckTask"),"\u6b7b\u9501\u95ee\u9898\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u4fee\u590d",(0,l.yg)("inlineCode",{parentName:"li"},"client"),"\u91cd\u8bd5\u8fde\u63a5\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u4fee\u590d",(0,l.yg)("inlineCode",{parentName:"li"},"nacos"),"\u9ed8\u8ba4\u5206\u7ec4\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u4fee\u590d",(0,l.yg)("inlineCode",{parentName:"li"},"maven"),"\u548c",(0,l.yg)("inlineCode",{parentName:"li"},"docker"),"\u95ee\u9898\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u4fee\u590d",(0,l.yg)("inlineCode",{parentName:"li"},"admin"),"\u8fd4\u56de\u503c\u95ee\u9898\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u4fee\u590d",(0,l.yg)("inlineCode",{parentName:"li"},"LDAP"),"\u67e5\u8be2\u95ee\u9898\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u4fee\u590d",(0,l.yg)("inlineCode",{parentName:"li"},"IP"),"\u5730\u5740\u67e5\u8be2\u9519\u8bef\u95ee\u9898\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u4fee\u590d",(0,l.yg)("inlineCode",{parentName:"li"},"Gson"),"\u5e8f\u5217\u5316\u7684\u95ee\u9898\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u4fee\u590d",(0,l.yg)("inlineCode",{parentName:"li"},"context path"),"\u63d2\u4ef6\u95ee\u9898\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u4fee\u590d",(0,l.yg)("inlineCode",{parentName:"li"},"monitor"),"\u63d2\u4ef6\u521d\u59cb\u5316\u7684",(0,l.yg)("inlineCode",{parentName:"li"},"bug"),"\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u4fee\u590d",(0,l.yg)("inlineCode",{parentName:"li"},"GlobalErrorHandler"),"\u5bf9\u8c61\u6620\u5c04\u95ee\u9898\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u4fee\u590d",(0,l.yg)("inlineCode",{parentName:"li"},"modify response"),"\u63d2\u4ef6\u6392\u5e8f\u95ee\u9898\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u4fee\u590d\u6ce8\u518c\u95ee\u9898\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u4fee\u590d",(0,l.yg)("inlineCode",{parentName:"li"},"sofa"),"\u63d2\u4ef6\u6ce8\u518c\u5143\u6570\u636e\u548c\u53c2\u6570\u89e3\u6790\u3002"),(0,l.yg)("li",{parentName:"ul"},"\u4fee\u590d",(0,l.yg)("inlineCode",{parentName:"li"},"motan")," ,",(0,l.yg)("inlineCode",{parentName:"li"},"dubbo"),", ",(0,l.yg)("inlineCode",{parentName:"li"},"sofa"),"\u63d2\u4ef6\u5143\u6570\u636e\u521d\u59cb\u5316\u3002")))}u.isMDXComponent=!0}}]);