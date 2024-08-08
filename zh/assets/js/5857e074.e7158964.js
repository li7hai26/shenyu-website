"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[89066],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||c;return n?r.createElement(m,l(l({ref:t},g),{},{components:n})):r.createElement(m,l({ref:t},g))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<c;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87543:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var r=n(58168),a=(n(96540),n(15680));const c={title:"Etcd\u793a\u4f8b"},l=void 0,i={unversionedId:"etcd",id:"version-1.0.0/etcd",isDocsHomePage:!1,title:"Etcd\u793a\u4f8b",description:"\u4ee5Etcd\u65b9\u5f0f\u6ce8\u518c\u5230ShenYu\u7f51\u5173",source:"@site/i18n/zh/docusaurus-plugin-content-docs-shenyuClientGolang/version-1.0.0/etcd.md",sourceDirName:".",slug:"/etcd",permalink:"/zh/shenyuClientGolang/etcd",version:"1.0.0",lastUpdatedBy:"aias00",lastUpdatedAt:1723104459,formattedLastUpdatedAt:"2024/8/8",frontMatter:{title:"Etcd\u793a\u4f8b"},sidebar:"version-1.0.0/tutorialSidebar",previous:{title:"Consul\u793a\u4f8b",permalink:"/zh/shenyuClientGolang/consul"},next:{title:"HTTP\u793a\u4f8b",permalink:"/zh/shenyuClientGolang/http"}},o=[{value:"\u4ee5Etcd\u65b9\u5f0f\u6ce8\u518c\u5230ShenYu\u7f51\u5173",id:"\u4ee5etcd\u65b9\u5f0f\u6ce8\u518c\u5230shenyu\u7f51\u5173",children:[]},{value:"\u5b8c\u6574\u7684\u6210\u529f\u65e5\u5fd7",id:"\u5b8c\u6574\u7684\u6210\u529f\u65e5\u5fd7",children:[]}],s={toc:o},g="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\u4ee5etcd\u65b9\u5f0f\u6ce8\u518c\u5230shenyu\u7f51\u5173"},"\u4ee5Etcd\u65b9\u5f0f\u6ce8\u518c\u5230ShenYu\u7f51\u5173"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"1.\u9996\u5148\u786e\u4fdd\u4f60\u7684Etcd\u73af\u5883\u662f\u6b63\u786e\uff0c\u7136\u540e\u8bbe\u7f6e\u8fd9\u4e9bEtcd\u5fc5\u8981\u7684\u53c2\u6570 .")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'    //\u5f00\u59cb\u521b\u5efaShenYuEtcdClient \n    ecp := &etcd_client.EtcdClientParam{\n    EtcdServers: []string{"http://127.0.0.1:2379"}, //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n    UserName : "" // \u53ef\u9009\u53c2\u6570etcd\u8bbf\u95ee\u8d26\u53f7\u540d\n    Password : "" // \u53ef\u9009\u53c2\u6570etcd\u8bbf\u95ee\u5bc6\u7801\n    TTL:    50, // \u53ef\u9009\u53c2\u6570 key\u751f\u5b58\u65f6\u95f4\n    }\n\n    sdkClient := shenyu_sdk_client.GetFactoryClient(constants.ETCD_CLIENT)\n    client, createResult, err := sdkClient.NewClient(ecp)\n    if !createResult && err != nil {\n    logger.Fatal("Create ShenYuEtcdClient error : %v", err)\n    }\n    \n    etcd := client.(*etcd_client.ShenYuEtcdClient)\n    defer etcd.Close()\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"2.  \u51c6\u5907\u4f60\u8981\u6ce8\u518c\u670d\u52a1\u7684\u5143\u6570\u636e\u4fe1\u606f")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'//\u5143\u6570\u636e\u662f\u5fc5\u8981\u7684\u53c2\u6570\uff0c\u8fd9\u5c06\u6ce8\u518c\u5230shenyu\u7f51\u5173\u4f7f\u7528\n    metaData1 := &model.MetaDataRegister{\n        AppName: "testMetaDataRegister1", //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Path:    "your/path1",            //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Enabled: true,                    //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Host:    "127.0.0.1",             //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Port:    "8080",                  //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n    }\n    \n    metaData2 := &model.MetaDataRegister{\n        AppName: "testMetaDataRegister2", //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Path:    "your/path2",            //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Enabled: true,                    //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Host:    "127.0.0.1",             //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Port:    "8181",                  //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n    }\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"3.\u4f7f\u7528\u5ba2\u6237\u7aef\u8fdb\u884c\u8282\u70b9\u4fe1\u606f\u6ce8\u518c")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'   //\u53ef\u4ee5\u8fdb\u884c\u591a\u4e2a\u5b9e\u4f8b\u6ce8\u518c \n    registerResult1, err := etcd.RegisterServiceInstance(metaData1)\n    if !registerResult1 && err != nil {\n    logger.Fatal("Register etcd Instance error : %v", err)\n    }\n    \n    registerResult2, err := etcd.RegisterServiceInstance(metaData2)\n    if !registerResult2 && err != nil {\n    logger.Fatal("Register etcd Instance error : %v", err)\n    }\n    //\u505a\u4f60\u7684\u903b\u8f91\u5904\u7406\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"4.\u4f7f\u7528\u5ba2\u6237\u7aef\u8fdb\u884c\u6ce8\u518c\u8282\u70b9\u4fe1\u606f\u5220\u9664")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"    //\u9009\u62e9\u6027\u8c03\u7528\n    deRegisterResult1, err := etcd.DeregisterServiceInstance(metaData1)\n        if err != nil {\n            panic(err)\n        }\n\n    deRegisterResult2, err := etcd.DeregisterServiceInstance(metaData2)\n        if err != nil {\n            panic(err)\n        }\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"5.\u4f7f\u7528\u5ba2\u6237\u7aef\u83b7\u53d6\u6ce8\u518c\u8282\u70b9\u7684\u4fe1\u606f")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'   //\u5f00\u59cb\u8c03\u7528GetServiceInstanceInfo\n    instanceDetail, err := etcd.GetServiceInstanceInfo(metaData1)\n    nodes1, ok := instanceDetail.([]*model.MetaDataRegister)\n    if !ok {\n    logger.Fatal("get etcd client metaData error %v:", err)\n    }\n    \n    //range nodes\n    for index, node := range nodes1 {\n        nodeJson, err := json.Marshal(node)\n        if err == nil {\n        logger.Info("GetNodesInfo ,success Index", index, string(nodeJson))\n        }\n}\n\n    instanceDetail2, err := etcd.GetServiceInstanceInfo(metaData2)\n    nodes2, ok := instanceDetail2.([]*model.MetaDataRegister)\n    if !ok {\n    logger.Fatal("get etcd client metaData error %v:", err)\n    }\n\n')),(0,a.yg)("h2",{id:"\u5b8c\u6574\u7684\u6210\u529f\u65e5\u5fd7"},"\u5b8c\u6574\u7684\u6210\u529f\u65e5\u5fd7"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},'2022-08-16 10:18:55 [INFO] [github.com/shenyu-client-golang/clients/etcd_client/etcd_client.go:66] Create customer etcd client success!\n2022-08-16 10:18:55 [INFO] [github.com/shenyu-client-golang/clients/etcd_client/etcd_client.go:142] RegisterServiceInstance,result:true\n2022-08-16 10:18:55 [INFO] [github.com/shenyu-client-golang/clients/etcd_client/etcd_client.go:142] RegisterServiceInstance,result:true\n2022-08-16 10:18:56 [INFO] [github.com/shenyu-client-golang/example/etcd_client/etcd_client.go:71] GetNodesInfo ,success Index 0 {"appName":"testMetaDataRegister1","path":"your/path1","contextPath":"","ruleName":"","rpcType":"","enabled":true,"host":"127.0.0.1","port":"8080","pluginNames":null,"registerMetaData":false,"timeMillis":0}\n2022-08-16 10:18:56 [INFO] [github.com/shenyu-client-golang/example/etcd_client/etcd_client.go:85] GetNodesInfo ,success Index 0 {"appName":"testMetaDataRegister2","path":"your/path2","contextPath":"","ruleName":"","rpcType":"","enabled":true,"host":"127.0.0.1","port":"8181","pluginNames":null,"registerMetaData":false,"timeMillis":0}\n2022-08-16 10:18:56 [INFO] [github.com/shenyu-client-golang/example/etcd_client/etcd_client.go:89] > DeregisterServiceInstance start\n2022-08-16 10:19:33 [INFO] [github.com/shenyu-client-golang/example/etcd_client/etcd_client.go:101] DeregisterServiceInstance success !\n')))}u.isMDXComponent=!0}}]);