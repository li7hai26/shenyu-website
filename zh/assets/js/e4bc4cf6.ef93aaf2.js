"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[16568],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(o,".").concat(h)]||p[h]||d[h]||s;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},62999:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const s={title:"e2e\u6d4b\u8bd5\u8be6\u89e3",author:"Haiqi Qin",author_title:"Apache ShenYu Committer",author_url:"https://github.com/HaiqiQin",author_image_url:"https://avatars.githubusercontent.com/u/80969210?v=4",tags:["E2e Test","Apache ShenYu"]},i=void 0,l={permalink:"/zh/blog/E2eTest-Analysis",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-blog/E2eTest-Analysis.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/E2eTest-Analysis.md",title:"e2e\u6d4b\u8bd5\u8be6\u89e3",description:"\u8fd9\u7bc7\u6587\u7ae0\u5c06\u4f1a\u5bf9Apache ShenYu\u7684e2e\u6a21\u5757\u8fdb\u884c\u6df1\u5165\u5256\u6790\u3002",date:"2024-01-06T12:12:51.742Z",formattedDate:"2024\u5e741\u67086\u65e5",tags:[{label:"E2e Test",permalink:"/zh/blog/tags/e-2-e-test"},{label:"Apache ShenYu",permalink:"/zh/blog/tags/apache-shen-yu"}],readingTime:9.87,truncated:!1,prevItem:{title:"WebSocket\u6570\u636e\u540c\u6b65\u6e90\u7801\u5206\u6790",permalink:"/zh/blog/DataSync-SourceCode-Analysis-WebSocket-Data-Sync"},nextItem:{title:"ZooKeeper\u6570\u636e\u540c\u6b65\u6e90\u7801\u5206\u6790",permalink:"/zh/blog/DataSync-SourceCode-Analysis-ZooKeeper-Data-Sync"}},o=[{value:"\u4ec0\u4e48\u662fe2e",id:"\u4ec0\u4e48\u662fe2e",children:[]},{value:"e2e\u7684\u4f18\u52bf",id:"e2e\u7684\u4f18\u52bf",children:[]},{value:"\u81ea\u52a8\u5316e2e\u6d4b\u8bd5\u5982\u4f55\u5b9e\u73b0",id:"\u81ea\u52a8\u5316e2e\u6d4b\u8bd5\u5982\u4f55\u5b9e\u73b0",children:[]},{value:"\u672c\u5730\u5982\u4f55\u8fd0\u884ce2e\u6d4b\u8bd5",id:"\u672c\u5730\u5982\u4f55\u8fd0\u884ce2e\u6d4b\u8bd5",children:[]},{value:"e2e\u542f\u52a8\u6d41\u7a0b\u5256\u6790",id:"e2e\u542f\u52a8\u6d41\u7a0b\u5256\u6790",children:[]}],c={toc:o},u="wrapper";function p(e){let{components:t,...s}=e;return(0,r.kt)(u,(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u5c06\u4f1a\u5bf9Apache ShenYu\u7684e2e\u6a21\u5757\u8fdb\u884c\u6df1\u5165\u5256\u6790\u3002"),(0,r.kt)("h3",{id:"\u4ec0\u4e48\u662fe2e"},"\u4ec0\u4e48\u662fe2e"),(0,r.kt)("p",null,"e2e(end to end)\uff0c\u4e5f\u53eb\u7aef\u5230\u7aef\u6d4b\u8bd5\uff0c\u662f\u4e00\u79cd\u7528\u4e8e\u6d4b\u8bd5\u5e94\u7528\u7a0b\u5e8f\u6d41\u662f\u5426\u4ece\u5934\u5230\u5c3e\u6309\u8bbe\u8ba1\u6267\u884c\u7684\u65b9\u6cd5\u3002 \u6267\u884c\u7aef\u5230\u7aef\u6d4b\u8bd5\u7684\u76ee\u7684\u662f\u8bc6\u522b\u7cfb\u7edf\u4f9d\u8d56\u5173\u7cfb\uff0c\u5e76\u786e\u4fdd\u5728\u5404\u79cd\u7cfb\u7edf\u7ec4\u4ef6\u548c\u7cfb\u7edf\u4e4b\u95f4\u4f20\u9012\u6b63\u786e\u7684\u4fe1\u606f\u3002\u7aef\u5230\u7aef\u6d4b\u8bd5\u7684\u76ee\u7684\u662f\u6d4b\u8bd5 \u6574\u4e2a\u8f6f\u4ef6\u7684\u4f9d\u8d56\u6027\u3001\u6570\u636e\u5b8c\u6574\u6027\u4ee5\u53ca\u4e0e\u5176\u4ed6\u7cfb\u7edf\u3001\u63a5\u53e3\u548c\u6570\u636e\u5e93\u7684\u901a\u4fe1\uff0c\u4ee5\u6a21\u62df\u5b8c\u6574\u7684\u751f\u4ea7\u573a\u666f\u3002"),(0,r.kt)("h3",{id:"e2e\u7684\u4f18\u52bf"},"e2e\u7684\u4f18\u52bf"),(0,r.kt)("p",null,"e2e\u6d4b\u8bd5\u80fd\u591f\u6a21\u62df\u771f\u5b9e\u7528\u6237\u573a\u666f\u4e0b\u6d4b\u8bd5\u8f6f\u4ef6\u7cfb\u7edf\u7684\u5b8c\u6574\u6027\u548c\u51c6\u786e\u6027\uff0c\u80fd\u591f\u9a8c\u8bc1\u6574\u4e2a\u7cfb\u7edf\u662f\u5426\u6309\u7167\u9884\u671f\u5de5\u4f5c\uff0c\u4ee5\u53ca\u4e0d\u540c\u7ec4\u4ef6\u662f\u5426\u80fd\u591f\u534f\u540c\u5de5\u4f5c\u3002 e2e\u6d4b\u8bd5\u6709\u4ee5\u4e0b\u51e0\u4e2a\u597d\u5904:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5e2e\u52a9\u4fdd\u8bc1\u7cfb\u7edf\u529f\u80fd\u7684\u6b63\u786e\u6027\uff1ae2e\u6d4b\u8bd5\u80fd\u591f\u6a21\u62df\u771f\u5b9e\u7528\u6237\u573a\u666f\u4e0b\u7684\u4ea4\u4e92\u548c\u64cd\u4f5c\uff0c\u9a8c\u8bc1\u6574\u4e2a\u7cfb\u7edf\u662f\u5426\u80fd\u591f\u6309\u7167\u9884\u671f\u5de5\u4f5c\uff0c\u5e2e\u52a9\u53d1\u73b0\u7cfb\u7edf\u4e2d\u7684\u6f5c\u5728\u95ee\u9898\u548c\u7f3a\u9677\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u63d0\u9ad8\u6d4b\u8bd5\u8986\u76d6\u7387\uff1ae2e\u6d4b\u8bd5\u80fd\u591f\u8986\u76d6\u6574\u4e2a\u7cfb\u7edf\uff0c\u5305\u62ec\u524d\u7aef\u3001\u540e\u7aef\u3001\u6570\u636e\u5e93\u7b49\u4e0d\u540c\u5c42\u9762\u548c\u7ec4\u4ef6\uff0c\u4ece\u800c\u63d0\u9ad8\u6d4b\u8bd5\u8986\u76d6\u7387\uff0c\u4fdd\u8bc1\u6d4b\u8bd5\u7684\u5168\u9762\u6027\u548c\u51c6\u786e\u6027\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4fdd\u8bc1\u7cfb\u7edf\u7684\u7a33\u5b9a\u6027\uff1aE2E\u6d4b\u8bd5\u53ef\u4ee5\u68c0\u67e5\u7cfb\u7edf\u5728\u5404\u79cd\u60c5\u51b5\u4e0b\u7684\u7a33\u5b9a\u6027\u548c\u5065\u58ee\u6027\uff0c\u5305\u62ec\u7cfb\u7edf\u7684\u54cd\u5e94\u65f6\u95f4\u3001\u9519\u8bef\u5904\u7406\u80fd\u529b\u3001\u5e76\u53d1\u6027\u7b49\u65b9\u9762\uff0c\u5e2e\u52a9\u786e\u4fdd\u7cfb\u7edf\u5728\u9762\u5bf9\u9ad8\u8d1f\u8f7d\u548c\u5f02\u5e38\u60c5\u51b5\u65f6\u4ecd\u7136\u80fd\u591f\u4fdd\u6301\u7a33\u5b9a\u8fd0\u884c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u51cf\u5c11\u6d4b\u8bd5\u6210\u672c\uff1ae2e\u6d4b\u8bd5\u80fd\u591f\u63d0\u9ad8\u6d4b\u8bd5\u6548\u7387\u548c\u51c6\u786e\u6027\uff0c\u51cf\u5c11\u6d4b\u8bd5\u6210\u672c\u548c\u65f6\u95f4\uff0c\u4ece\u800c\u5e2e\u52a9\u4f01\u4e1a\u66f4\u5feb\u901f\u5730\u53d1\u5e03\u548c\u4ea4\u4ed8\u9ad8\u8d28\u91cf\u7684\u8f6f\u4ef6\u4ea7\u54c1\u3002")),(0,r.kt)("p",null,"\u603b\u4e4b\uff0ce2e\u6d4b\u8bd5\u662f\u4e00\u79cd\u5168\u9762\u7684\u6d4b\u8bd5\u65b9\u5f0f\uff0c\u80fd\u591f\u9a8c\u8bc1\u6574\u4e2a\u7cfb\u7edf\u662f\u5426\u6309\u7167\u9884\u671f\u5de5\u4f5c\uff0c\u63d0\u9ad8\u6d4b\u8bd5\u8986\u76d6\u7387\u548c\u6d4b\u8bd5\u6548\u7387\uff0c\u4ece\u800c\u4fdd\u8bc1\u7cfb\u7edf\u7684\u7a33\u5b9a\u6027\u548c\u6b63\u786e\u6027\uff0c\u51cf\u5c11\u6d4b\u8bd5\u6210\u672c\u548c\u65f6\u95f4\uff0c\u662f\u4e00\u79cd\u975e\u5e38\u91cd\u8981\u548c\u6709\u6548\u7684\u6d4b\u8bd5\u65b9\u6cd5\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u5b8c\u5584 e2e\u76f8\u5173\u4ee3\u7801\u3002"),(0,r.kt)("h3",{id:"\u81ea\u52a8\u5316e2e\u6d4b\u8bd5\u5982\u4f55\u5b9e\u73b0"},"\u81ea\u52a8\u5316e2e\u6d4b\u8bd5\u5982\u4f55\u5b9e\u73b0"),(0,r.kt)("p",null,"\u5728Apache ShenYu\u4e2d\uff0ce2e\u6d4b\u8bd5\u7684\u4e3b\u8981\u6b65\u9aa4\u4f53\u73b0\u5728GitHub Action\u5de5\u4f5c\u6d41\u7684\u811a\u672c\u4e2d\uff0c\u5982\u4e0b\u6240\u793a\uff0c\u8be5\u811a\u672c\u4f4d\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/master/.github/workflows"},"~/.github/workflows"),"\u76ee\u5f55\u4e0b\u7684e2e\u6587\u4ef6\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'name: e2e\n\non:\n  pull_request:\n  push:\n    branches:\n      - master\njobs:\n  changes:\n    ...\n  build-docker-images:\n    ...\n  e2e-http:\n    ...\n  e2e-case:\n    runs-on: ubuntu-latest\n    needs:\n      - changes\n      - build-docker-images\n    if: ${{ needs.changes.outputs.e2e == \'true\' }}\n    strategy:\n      matrix:\n        case: [ "shenyu-e2e-case-spring-cloud", "shenyu-e2e-case-apache-dubbo", "shenyu-e2e-case-sofa" ]\n    steps:\n      - uses: actions/checkout@v3\n        with:\n          submodules: true\n      - name: Load ShenYu Docker Images\n        run: |\n          docker load --input /tmp/apache-shenyu-admin.tar\n          docker load --input /tmp/apache-shenyu-bootstrap.tar\n          docker image ls -a\n      - name: Build examples with Maven\n        run: ./mvnw -B clean install -Pexample -Dmaven.javadoc.skip=true -Dmaven.test.skip=true -f ./shenyu-examples/pom.xml\n      - name: Run ShenYu E2E Tests\n        env:\n          storage: mysql\n        run: |\n          bash ./shenyu-e2e/script/storage_init.sh\n          ./mvnw -B -f ./shenyu-e2e/pom.xml -pl shenyu-e2e-case/${{ matrix.case }} -Dstorage=mysql test\n')),(0,r.kt)("p",null,"\u5f53\u5de5\u4f5c\u6d41\u89e6\u53d1\u65f6\uff0c\u4f7f\u7528shenyu-dist\u6a21\u5757\u4e0b\u7684dockerfile\u6587\u4ef6\u6784\u5efaadmin\u4e0ebootstrap\u9879\u76ee\u7684\u955c\u50cf\u5e76\u4e0a\u4f20\uff0c\u5f53e2e\u6d4b\u8bd5\u6a21\u5757\u8fd0\u884c\u65f6\u53ef\u4ee5\u52a0\u8f7dadmin\u4e0ebootstrap\u955c\u50cf\u3002\u7d27\u63a5\u7740\u6784\u5efaexamples\u4e2d\u7684\u6a21\u5757\uff0c\u6700\u540e\u6267\u884c\u5bf9\u5e94\u6d4b\u8bd5\u6a21\u5757\u7684\u6d4b\u8bd5\u65b9\u6cd5\u3002"),(0,r.kt)("h3",{id:"\u672c\u5730\u5982\u4f55\u8fd0\u884ce2e\u6d4b\u8bd5"},"\u672c\u5730\u5982\u4f55\u8fd0\u884ce2e\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u7f16\u5199e2e\u6d4b\u8bd5\u7528\u4f8b\uff0c\u9996\u5148\u9700\u8981\u5728\u672c\u5730\u7f16\u7801\u5e76\u8c03\u8bd5\u3002\u76ee\u524de2e\u652f\u6301\u4e24\u79cd\u542f\u52a8\u65b9\u5f0f\uff0c\u4e00\u4e2a\u662fdocker\u542f\u52a8\uff0c\u53e6\u4e00\u4e2a\u662fhost\u542f\u52a8\u3002\u8fd9\u4e24\u79cd\u6a21\u5f0f\u53ef\u4ee5\u901a\u8fc7\u5728\u6d4b\u8bd5\u7c7b\u4e2d\u7684@ShenYuTest\u6ce8\u89e3\u4e2d\u5207\u6362\u3002host\u542f\u52a8\u65b9\u5f0f\u76f4\u63a5\u5728\u672c\u5730\u5c06\u9700\u8981\u542f\u52a8\u7684\u670d\u52a1\u76f4\u63a5\u542f\u52a8\u5373\u53ef\u8fd0\u884c\u6d4b\u8bd5\u4ee3\u7801\u3002\u91c7\u7528docker\u8fdb\u884c\u542f\u52a8\u524d\uff0c\u9700\u8981\u5728\u5148\u6784\u5efa\u51fa\u76f8\u5e94\u955c\u50cf\u3002\u56e0\u4e3aShenYu\u76ee\u524d\u9700\u8981\u652f\u6301\u5728github\u5de5\u4f5c\u6d41\u8fdb\u884ce2e\u6d4b\u8bd5\uff0c\u5efa\u8bae\u91c7\u7528docker\u542f\u52a8\u65b9\u5f0f\u3002"),(0,r.kt)("h3",{id:"e2e\u542f\u52a8\u6d41\u7a0b\u5256\u6790"},"e2e\u542f\u52a8\u6d41\u7a0b\u5256\u6790"),(0,r.kt)("p",null,"\u76ee\u524de2e\u6a21\u5757\u4e3b\u8981\u5206\u4e3a\u56db\u4e2a\u90e8\u5206\uff0c\u5206\u522b\u4e3a\uff1acase\u3001client\u3001common\u4ee5\u53caengine\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"e2e-modules",src:n(73047).Z})),(0,r.kt)("p",null,"case\u6a21\u5757\u5b58\u653e\u63d2\u4ef6\u7684\u6d4b\u8bd5\u7528\u4f8b\uff0cclient\u6a21\u5757\u7f16\u5199\u4e86admin\u4e0egateway\u7684\u5ba2\u6237\u7aef\uff0c\u4ee5\u4fbf\u8bf7\u6c42\u5bf9\u5e94\u63a5\u53e3\u3002common\u5b58\u653e\u4e00\u4e9b\u516c\u5171\u7c7b\uff0cengine\u6a21\u5757\u662f\u6846\u67b6\u7684\u6838\u5fc3\uff0c\u4f9d\u6258testcontainer\u6846\u67b6\u5229\u7528java\u4ee3\u7801\u542f\u52a8docker\u5bb9\u5668\u5e76\u5b8c\u6210\u5bf9admin\u4ee5\u53cagatewat\u7684\u914d\u7f6e\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u5c06\u4f9d\u6258\u6e90\u7801\u5bf9e2e\u542f\u52a8\u6d41\u7a0b\u8fdb\u884c\u5256\u6790\u3002"),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u6267\u884ccase\u4e2d\u7684\u6d4b\u8bd5\u65b9\u6cd5\u65f6\uff0c@ShenYuTest\u6ce8\u89e3\u5c06\u4f1a\u751f\u6548\uff0c\u5bf9\u6d4b\u8bd5\u7c7b\u8fdb\u884c\u6269\u5c55\u3002\u901a\u8fc7@ShenYuTest\uff0c\u6211\u4eec\u53ef\u4ee5\u9009\u62e9\u542f\u52a8\u65b9\u6cd5\u3001\u5bf9admin\u4ee5\u53cagateway\u914d\u7f6e\u76f8\u5173\u53c2\u6570\uff0c\u4ee5\u53ca\u9009\u62e9\u5c06\u8981\u6267\u884c\u7684docker-compose\u6587\u4ef6\u3002\u5bf9\u4e8eadmin\u4ee5\u53cagateway\uff0c\u53ef\u4ee5\u914d\u7f6e\u767b\u9646\u6240\u9700\u7684\u7528\u6237\u540d\u3001\u5bc6\u7801\u3001\u6570\u636e\u540c\u6b65\u65b9\u5f0f\u4ee5\u53ca\u4fee\u6539yaml\u7684\u5185\u5bb9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@ShenYuTest(\n        mode = ShenYuEngineConfigure.Mode.DOCKER,\n        services = {\n                @ShenYuTest.ServiceConfigure(\n                        serviceName = "admin",\n                        port = 9095,\n                        baseUrl = "http://{hostname:localhost}:9095",\n                        parameters = {\n                                @ShenYuTest.Parameter(key = "username", value = "admin"),\n                                @ShenYuTest.Parameter(key = "password", value = "123456"),\n                                @ShenYuTest.Parameter(key = "dataSyn", value = "admin_websocket")\n                        }\n                ),\n                @ShenYuTest.ServiceConfigure(\n                        serviceName = "gateway",\n                        port = 9195,\n                        baseUrl = "http://{hostname:localhost}:9195", \n                        type = ShenYuEngineConfigure.ServiceType.SHENYU_GATEWAY,\n                        parameters = {\n                          @ShenYuTest.Parameter(key = "application", value =  "spring.cloud.discovery.enabled:true,eureka.client.enabled:true"), \n                          @ShenYuTest.Parameter(key = "dataSyn", value = "gateway_websocket")})},           dockerComposeFile = "classpath:./docker-compose.mysql.yml")\n\n')),(0,r.kt)("p",null,"@ShenYuTest\u901a\u8fc7ShenYuExtension\u7c7b\u8fdb\u884c\u6269\u5c55\uff0c\u5bf9admin\u4e0egateway\u7684\u914d\u7f6e\u5728ShenYuExtension\u4e2d\u7684beforeAll\u4e2d\u751f\u6548\u3002\u5177\u4f53\u7684\u751f\u6548\u903b\u8f91\u5728DockerServiceCompose\u7c7b\u4e2d\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"e2e-shenyutest",src:n(3339).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"e2e-beforeall",src:n(93067).Z})),(0,r.kt)("p",null,"@ShenYuTest\u914d\u7f6e\u9879\u5728docker\u542f\u52a8\u524d\u751f\u6548\uff0c\u4e3b\u8981\u901a\u8fc7\u4fee\u6539\u6d4b\u8bd5\u6a21\u5757\u4e2dresource\u76ee\u5f55\u4e0b\u7684yaml\u6587\u4ef6\u3002\u76ee\u524de2e\u652f\u6301\u5bf9\u4e0d\u540c\u6570\u636e\u540c\u6b65\u65b9\u5f0f\u8fdb\u884c\u6d4b\u8bd5\uff0c\u5176\u539f\u7406\u5c31\u662f\u901a\u8fc7DockerServiceCompose\u7c7b\u4e2d\u7684chooseDataSyn\u65b9\u6cd5\u3002\u5728DataSyncHandler\u4e2d\u5bf9\u5404\u79cd\u6570\u636e\u540c\u6b65\u65b9\u5f0f\u9700\u8981\u4fee\u6539\u7684\u5185\u5bb9\u8fdb\u884c\u521d\u59cb\u5316\uff0c\u6700\u540e\u542f\u52a8container\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"e2e-docer-service-compose",src:n(87768).Z})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"e2e-datahandle-syn",src:n(3606).Z})),(0,r.kt)("p",null,"\u5f53docker\u542f\u52a8\u5b8c\u540e\uff0c\u5f00\u59cb\u5bf9\u63d2\u4ef6\u529f\u80fd\u8fdb\u884c\u6d4b\u8bd5\u3002\u5728PluginsTest\u7c7b\u4e2d\uff0c\u6709\u9488\u5bf9\u6d4b\u8bd5\u8fdb\u884c\u7684\u524d\u7f6e\u4ee5\u53ca\u540e\u7f6e\u64cd\u4f5c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    @BeforeAll\n    static void setup(final AdminClient adminClient, final GatewayClient gatewayClient) throws InterruptedException, JsonProcessingException {\n        adminClient.login();\n        Thread.sleep(10000);\n        List<SelectorDTO> selectorDTOList = adminClient.listAllSelectors();\n        List<MetaDataDTO> metaDataDTOList = adminClient.listAllMetaData();\n        List<RuleDTO> ruleDTOList = adminClient.listAllRules();\n        Assertions.assertEquals(2, selectorDTOList.size());\n        Assertions.assertEquals(13, metaDataDTOList.size());\n        Assertions.assertEquals(14, ruleDTOList.size());\n        \n        for (SelectorDTO selectorDTO : selectorDTOList) {\n            if (selectorDTO.getHandle() != null && !"".equals(selectorDTO.getHandle())) {\n                SpringCloudPluginCases.verifierUri(selectorDTO.getHandle());\n            }\n        }\n        \n        List<MetaData> metaDataCacheList = gatewayClient.getMetaDataCache();\n        List<SelectorCacheData> selectorCacheList = gatewayClient.getSelectorCache();\n        List<RuleCacheData> ruleCacheList = gatewayClient.getRuleCache();\n        Assertions.assertEquals(2, selectorCacheList.size());\n        Assertions.assertEquals(13, metaDataCacheList.size());\n        Assertions.assertEquals(14, ruleCacheList.size());\n\n        MultiValueMap<String, String> formData = new LinkedMultiValueMap<>();\n        formData.add("id", "8");\n        formData.add("name", "springCloud");\n        formData.add("enabled", "true");\n        formData.add("role", "Proxy");\n        formData.add("sort", "200");\n        adminClient.changePluginStatus("8", formData);\n        String id = "";\n        for (SelectorDTO selectorDTO : selectorDTOList) {\n            if (!"".equals(selectorDTO.getHandle())) {\n                id = selectorDTO.getId();\n            }\n        }\n        adminClient.deleteSelectors(id);\n        selectorDTOList = adminClient.listAllSelectors();\n        Assertions.assertEquals(1, selectorDTOList.size());\n    }\n')),(0,r.kt)("p",null,"\u4ee5springcloud\u63d2\u4ef6\u4e3a\u4f8b\uff0c\u9996\u5148\u9700\u8981\u6d4b\u8bd5\u6ce8\u518c\u4e2d\u5fc3\u4ee5\u53ca\u6570\u636e\u540c\u6b65\u80fd\u5426\u6b63\u5e38\u5de5\u4f5c\uff0c\u63a5\u7740\u542f\u52a8\u63d2\u4ef6\u5e76\u5220\u9664\u5df2\u5b58\u5728\u7684\u9009\u62e9\u5668\u3002\u6d4b\u8bd5\u6570\u636e\u662f\u5426\u6210\u529f\u6ce8\u518c\u8fdb\u6ce8\u518c\u4e2d\u5fc3\uff0c\u53ef\u4ee5\u8c03\u7528admin\u5ba2\u6237\u7aef\u7684\u63a5\u53e3\u8fdb\u884c\u6d4b\u8bd5\uff0c\u6d4b\u8bd5\u6570\u636e\u540c\u6b65\u662f\u5426\u6210\u529f\uff0c\u53ef\u4ee5\u83b7\u53d6gateway\u7684\u7f13\u5b58\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,r.kt)("p",null,"\u63a5\u7740\u8fd0\u884ccase\u6587\u4ef6\u4e2d\u7684\u6d4b\u8bd5\u7528\u4f8b\uff0c\u901a\u8fc7@ShenYuScenario\u83b7\u53d6\u7528\u4f8b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    @ShenYuScenario(provider = SpringCloudPluginCases.class)\n    void testSpringCloud(GatewayClient gateway, CaseSpec spec) {\n        spec.getVerifiers().forEach(verifier -> verifier.verify(gateway.getHttpRequesterSupplier().get()));\n    }\n")),(0,r.kt)("p",null,"\u9488\u5bf9\u4e0d\u540c\u7684\u63d2\u4ef6\uff0c\u6211\u4eec\u53ef\u4ee5\u6784\u5efaCase\u7c7b\uff0c\u5b58\u653e\u8981\u6d4b\u8bd5\u7684\u89c4\u5219\u3002\u6240\u6709\u7684\u6d4b\u8bd5\u89c4\u5219\u5b58\u653e\u8fdblist\u4e2d\uff0c\u6309\u987a\u5e8f\u8fdb\u884c\u6d4b\u8bd5\u3002beforeEachSpec\u4e2d\u8fdb\u884c\u6784\u5efa\u9009\u62e9\u5668\u4e0e\u89c4\u5219\uff0ccaseSpec\u5b58\u653e\u6d4b\u8bd5\u5b9e\u4f53\uff0c\u5982\u679c\u7b26\u5408uri\u89c4\u5219\u7684\u5e94\u5b58\u5728\uff0c\u5426\u5219\u4e0d\u5b58\u5728\u3002\u6211\u4eec\u9700\u8981\u6a21\u62df\u7528\u6237\u5bf9\u9009\u62e9\u5668\u548c\u89c4\u5219\u8fdb\u884c\u65b0\u589e\uff0c\u56e0\u4e3a\u5404\u4e2a\u63d2\u4ef6\u7684\u9009\u62e9\u5668\u7684handler\u89c4\u5219\u4e0d\u4e00\u5b9a\u76f8\u540c\uff0c\u6240\u4ee5\u6211\u4eec\u9700\u8981\u6839\u636e\u63d2\u4ef6\u9700\u6c42\u53bb\u7f16\u5199\u5176handle\u7c7b\u3002\u5e76\u901a\u8fc7\u8bf7\u6c42\u9a8c\u8bc1\u5176\u7b26\u5408\u89c4\u5219\u3002\u5177\u4f53\u6d4b\u8bd5\u7528\u4f8b\u4e3b\u8981\u5206\u4e3a\u4e24\u5927\u7c7b\uff0c\u4e00\u7c7b\u662f\u5bf9uri\u89c4\u5219\u8fdb\u884c\u5339\u914d\uff0c\u6bd4\u5982euqal\u3001path_pattern\u3001start_with\u3001end_with\uff0c\u4e00\u7c7b\u662f\u8bf7\u6c42\u7c7b\u578b\uff0c\u6bd4\u5982get\u3001put\u3001post\u3001delete\u3002"),(0,r.kt)("p",null,"\u5f53\u516b\u79cd\u5339\u914d\u60c5\u51b5\u90fd\u6d4b\u8bd5\u901a\u8fc7\u540e\uff0c\u53ef\u4ee5\u5224\u65ad\u8be5\u63d2\u4ef6\u529f\u80fd\u6b63\u5e38\uff0c\u6211\u4eec\u5728\u6d4b\u8bd5\u7ed3\u675f\u540e\u9700\u8981\u6062\u590d\u73af\u5883\uff0c\u5c06\u6240\u6709\u7684\u9009\u62e9\u5668\u5220\u9664\uff0c\u5c06\u8be5\u63d2\u4ef6\u8bbe\u7f6e\u4e3a\u4e0d\u53ef\u7528\uff0c\u6700\u540e\u5173\u95ed\u6240\u6709\u5bb9\u5668\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public List<ScenarioSpec> get() {\n        return Lists.newArrayList(\n                testWithUriEquals(),\n                testWithUriPathPattern(),\n                testWithUriStartWith(),\n                testWithEndWith(),\n                testWithMethodGet(),\n                testWithMethodPost(),\n                testWithMethodPut(),\n                testWithMethodDelete()\n        );\n    }\n\n    private ShenYuScenarioSpec testWithUriEquals() {\n        return ShenYuScenarioSpec.builder()\n                .name("single-spring-cloud uri =]")\n                .beforeEachSpec(\n                        ShenYuBeforeEachSpec.builder()\n                                .addSelectorAndRule(\n                                        newSelectorBuilder("selector", Plugin.SPRING_CLOUD)                                               .handle(SpringCloudSelectorHandle.builder().serviceId("springCloud-test")\n                                                        .gray(true)\n                                                        .divideUpstreams(DIVIDE_UPSTREAMS)\n                                                        .build())\n                                                .conditionList(newConditions(Condition.ParamType.URI, Condition.Operator.EQUAL, TEST))\n                                                .build(),\n                                        newRuleBuilder("rule")                               .handle(SpringCloudRuleHandle.builder().loadBalance("hash").timeout(3000).build())\n                                                .conditionList(newConditions(Condition.ParamType.URI, Condition.Operator.EQUAL, TEST))\n                                                .build()\n                                )\n                                .checker(notExists(TEST))\n                                .waiting(exists(TEST))\n                                .build()\n                )\n                .caseSpec(\n                        ShenYuCaseSpec.builder()\n                                .addExists(TEST)\n                                .addNotExists("/springcloud/te")\n                                .addNotExists("/put")\n                                .addNotExists("/get")\n                                .build()\n                )\n                .afterEachSpec(ShenYuAfterEachSpec.DEFAULT)\n                .build();\n    }\n')))}p.isMDXComponent=!0},93067:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/e2e-beforeall-51fdb9d49dbc3eae99f77268b0e1a5c9.png"},3606:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/e2e-datahandle-syn-92a7b3dc57bc8b46972128042b8281cb.png"},87768:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/e2e-docer-service-compose-ac329d9290f48407e5c8310031913fb2.png"},73047:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/e2e-modules-1ff1ff840f0fe5a53970e750624f61b6.png"},3339:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/e2e-shenyutest-8ea26c9ea373d2c182be8d19c53cb021.png"}}]);