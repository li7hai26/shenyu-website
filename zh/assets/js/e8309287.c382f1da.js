"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[95001],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),h=a,g=p["".concat(l,".").concat(h)]||p[h]||m[h]||i;return t?r.createElement(g,o(o({ref:n},u),{},{components:t})):r.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},37360:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const i={title:"HTTP\u793a\u4f8b"},o="\u4ee5Http\u65b9\u5f0f\u6ce8\u518c\u5230ShenYu\u7f51\u5173",s={unversionedId:"http",id:"version-1.0.0/http",isDocsHomePage:!1,title:"HTTP\u793a\u4f8b",description:"1.\u9996\u5148\u786e\u4fddShenYuAdmin\u662f\u542f\u52a8\u7684\uff0c\u5e76\u4e14ShenYuAdmin\u670d\u52a1\u542f\u52a8\u7684\u7aef\u53e3\u662f9095 .",source:"@site/i18n/zh/docusaurus-plugin-content-docs-shenyuClientGolang/version-1.0.0/http.md",sourceDirName:".",slug:"/http",permalink:"/zh/shenyuClientGolang/http",version:"1.0.0",lastUpdatedBy:"moremind",lastUpdatedAt:1681741414,formattedLastUpdatedAt:"2023/4/17",frontMatter:{title:"HTTP\u793a\u4f8b"},sidebar:"version-1.0.0/tutorialSidebar",previous:{title:"Etcd\u793a\u4f8b",permalink:"/zh/shenyuClientGolang/etcd"},next:{title:"Nacos\u793a\u4f8b",permalink:"/zh/shenyuClientGolang/nacos"}},l=[],c={toc:l},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4ee5http\u65b9\u5f0f\u6ce8\u518c\u5230shenyu\u7f51\u5173"},"\u4ee5Http\u65b9\u5f0f\u6ce8\u518c\u5230ShenYu\u7f51\u5173"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.\u9996\u5148\u786e\u4fddShenYuAdmin\u662f\u542f\u52a8\u7684\uff0c\u5e76\u4e14ShenYuAdmin\u670d\u52a1\u542f\u52a8\u7684\u7aef\u53e3\u662f9095 .")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'\u5982\u679c\u6ca1\u542f\u52a8,\u4f60\u5c06\u770b\u5230\u5982\u4e0b\u9519\u8bef:\n \n2022-05-05 15:24:28 [WARN] [github.com/apache/shenyu-client-golang/example/http_client/main.go:53] MetaDataRegister has error: The errCode is ->:503, The errMsg is  ->:Please check ShenYu admin service status\n\ncaused by:\nPost "http://127.0.0.1:9095/shenyu-client/register-metadata": dial tcp 127.0.0.1:9095: connect: connection refused\n2022-05-05 15:24:28 [INFO] [github.com/apache/shenyu-client-golang/example/http_client/main.go:55] finish register metadata ,the result is-> false\n2022-05-05 15:24:28 [WARN] [github.com/apache/shenyu-client-golang/example/http_client/main.go:68] UrlRegister has error: The errCode is ->:503, The errMsg is  ->:Please check ShenYu admin service status\n\ncaused by:\nPost "http://127.0.0.1:9095/shenyu-client/register-uri": dial tcp 127.0.0.1:9095: connect: connection refused\n2022-05-05 15:24:28 [INFO] [github.com/apache/shenyu-client-golang/example/http_client/main.go:70] finish UrlRegister ,the result is-> false\n \n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.\u83b7\u53d6shenyu_admin_client. (\u6ce8\u518c\u670d\u52a1\u9700\u8981\u8fd9\u4e2a\u5b9e\u4f8b)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'//\u521d\u59cb\u5316 ShenYuAdminClient\nadminClient := &model.ShenYuAdminClient{\n    UserName: "admin",  //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n    Password: "123456", //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n}\n\nadminToken, err := clients.NewShenYuAdminClient(adminClient)\n\nadminToken\u50cf\u8fd9\u6837 :\n{\n    "code":200,\n    "message":"login dashboard user success",\n    "data":{\n        "id":"1",\n        "userName":"admin",\n        "role":1,\n        "enabled":true,\n        "dateCreated":"2018-06-23 15:12:22",\n        "dateUpdated":"2022-03-09 15:08:14",\n        "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwiZXhwIjoxNjUwNjc5OTQ2fQ.K92Il2kmJ0X3FgjY4igW35-pw9nsf5VKdUyqBoyIaF4"\n    }\n}\n\n\u5f53\u4f60\u6210\u529f\u83b7\u53d6\u5230Token,\u4f60\u5c06\u770b\u5230\u8fd9\u4e9b:\nthis is ShenYu Admin client token -> eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwiZXhwIjoxNjUwNjc5OTQ2fQ.K92Il2kmJ0X3FgjY4igW35-pw9nsf5VKdUyqBoyIaF4\n\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3.\u6ce8\u518c\u5143\u6570\u636e\u5230ShenYu\u7f51\u5173. (\u9700\u8981\u4e0a\u4e00\u6b65\u7684adminToken\u53bb\u8c03\u7528)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'//\u5143\u6570\u636e\u6ce8\u518c(\u9700\u8981\u4e0a\u4e00\u6b65\u7684token: adminToken.AdminTokenData)\nmetaData := &model.MetaDataRegister{\n  AppName: "testMetaDataRegister", //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n  Path:    "/your/path",           //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n  Enabled: true,                   //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n  Host:    "127.0.0.1",            //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n  Port:    "8080",                 //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n }\n result, err := clients.RegisterMetaData(adminToken.AdminTokenData, metaData)\n if err != nil {\n  logger.Warn("MetaDataRegister has error:",err)\n }\n logger.Info("finish register metadata ,the result is->", result)\n\n\n\u5f53\u4f60\u6ce8\u518c\u6210\u529f,\u4f60\u5c06\u770b\u5230\u8fd9\u4e9b:\nfinish register metadata ,the result is-> true\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4.\u4ee5URL\u7684\u65b9\u5f0f\u6ce8\u518c\u5230ShenYu\u7f51\u5173. (\u9700\u8981\u4e0a\u4e00\u6b65\u7684adminToken\u53bb\u8c03\u7528)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'//URI\u6ce8\u518c(\u9700\u8981\u4e0a\u4e00\u6b65\u7684token: adminToken.AdminTokenData)\n//\u521d\u59cb\u5316 URI\u6ce8\u518c\n urlRegister := &model.URIRegister{\n  Protocol:    "testMetaDataRegister", //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n  AppName:     "testURLRegister",      //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n  ContextPath: "contextPath",          //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n  RPCType:     constants.RPCTYPE_HTTP, //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n  Host:        "127.0.0.1",            //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n  Port:        "8080",                 //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n }\n result, err = clients.UrlRegister(adminToken.AdminTokenData, urlRegister)\n if err != nil {\n  logger.Warn("UrlRegister has error:", err)\n }\n logger.Info("finish UrlRegister ,the result is->", result)\n         //\u505a\u4f60\u7684\u903b\u8f91\u5904\u7406\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5.\u5b8c\u6574\u7684\u6210\u529f\u65e5\u5fd7")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"2022-05-05 15:43:56 [INFO] [github.com/apache/shenyu-client-golang/clients/admin_client/shenyu_admin_client.go:51] Get ShenYu Admin response, body is -> {200 login dashboard user success {1 admin 1 true 2018-06-23 15:12:22 2022-03-09 15:08:14 eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwiZXhwIjoxNjUxODIzMDM2fQ.gMzPKaNlXEd1Q517qQamOpg358W9L0-0cZN3lkk06WE}}\n2022-05-05 15:43:56 [INFO] [github.com/apache/shenyu-client-golang/example/http_client/main.go:40] this is ShenYu Admin client token -> eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyTmFtZSI6ImFkbWluIiwiZXhwIjoxNjUxODIzMDM2fQ.gMzPKaNlXEd1Q517qQamOpg358W9L0-0cZN3lkk06WE\n2022-05-05 15:43:57 [INFO] [github.com/apache/shenyu-client-golang/example/http_client/main.go:55] finish register metadata ,the result is-> true\n2022-05-05 15:43:57 [INFO] [github.com/apache/shenyu-client-golang/example/http_client/main.go:70] finish UrlRegister ,the result is-> true\n\n")))}p.isMDXComponent=!0}}]);