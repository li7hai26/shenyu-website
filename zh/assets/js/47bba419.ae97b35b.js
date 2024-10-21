"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[97285],{15680:(e,n,a)=>{a.d(n,{xA:()=>g,yg:()=>y});var l=a(96540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function u(e,n){if(null==e)return{};var a,l,t=function(e,n){if(null==e)return{};var a,l,t={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=l.createContext({}),o=function(e){var n=l.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},g=function(e){var n=o(e.components);return l.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},c=l.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,g=u(e,["components","mdxType","originalType","parentName"]),d=o(a),c=t,y=d["".concat(s,".").concat(c)]||d[c]||p[c]||i;return a?l.createElement(y,r(r({ref:n},g),{},{components:a})):l.createElement(y,r({ref:n},g))}));function y(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,r=new Array(i);r[0]=c;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u[d]="string"==typeof e?e:t,r[1]=u;for(var o=2;o<i;o++)r[o]=a[o];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},35660:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var l=a(58168),t=(a(96540),a(15680));const i={title:"\u6269\u5c55\u63d2\u4ef6\u52a0\u8f7d\u903b\u8f91",author:"hql0312",author_title:"hql0312 Coder",author_url:"https://github.com/hql0312",tags:["plugin","ext","Apache ShenYu"]},r=void 0,u={permalink:"/zh/blog/Loader-SourceCode-Analysis-ExtLoader",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-blog/Loader-SourceCode-Analysis-ExtLoader.md",source:"@site/i18n/zh/docusaurus-plugin-content-blog/Loader-SourceCode-Analysis-ExtLoader.md",title:"\u6269\u5c55\u63d2\u4ef6\u52a0\u8f7d\u903b\u8f91",description:"\u672c\u6587\u57fa\u4e8eshenyu-2.6.1\u7248\u672c\u8fdb\u884c\u6e90\u7801\u5206\u6790.",date:"2024-10-21T09:57:01.220Z",formattedDate:"2024\u5e7410\u670821\u65e5",tags:[{label:"plugin",permalink:"/zh/blog/tags/plugin"},{label:"ext",permalink:"/zh/blog/tags/ext"},{label:"Apache ShenYu",permalink:"/zh/blog/tags/apache-shen-yu"}],readingTime:9.695,truncated:!1,prevItem:{title:"\u96c6\u6210\u6d4b\u8bd5\u5256\u6790",permalink:"/zh/blog/IntegrationTest-Analysis"},nextItem:{title:"SPI\u8bbe\u8ba1\u5b9e\u73b0\u6e90\u7801\u5206\u6790",permalink:"/zh/blog/SPI-SourceCode-Analysis-SPI"}},s=[{value:"\u5165\u53e3",id:"\u5165\u53e3",children:[]},{value:"\u63d2\u4ef6\u6ce8\u518c",id:"\u63d2\u4ef6\u6ce8\u518c",children:[]},{value:"\u540c\u6b65",id:"\u540c\u6b65",children:[]}],o={toc:s},g="wrapper";function d(e){let{components:n,...a}=e;return(0,t.yg)(g,(0,l.A)({},o,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u672c\u6587\u57fa\u4e8e",(0,t.yg)("inlineCode",{parentName:"p"},"shenyu-2.6.1"),"\u7248\u672c\u8fdb\u884c\u6e90\u7801\u5206\u6790.")),(0,t.yg)("h1",{id:"\u6b63\u6587"},"\u6b63\u6587"),(0,t.yg)("p",null,"Shenyu \u63d0\u4f9b\u4e86\u4e00\u79cd\u673a\u5236\u6765\u5b9a\u5236\u81ea\u5df1\u7684\u63d2\u4ef6\u6216\u662f\u4fee\u6539\u5df2\u6709\u7684\u63d2\u4ef6\uff0c\u5728\u5176\u5185\u90e8\u901a\u8fc7extPlugin\u7684\u914d\u7f6e\u5b9e\u73b0\uff0c\u5176\u9700\u8981\u6ee1\u8db3\u4ee5\u4e0b\u4e24\u70b9\uff1a"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u5b9e\u73b0\u63a5\u53e3 ",(0,t.yg)("inlineCode",{parentName:"li"},"ShenyuPlugin")," \u6216\u662f ",(0,t.yg)("inlineCode",{parentName:"li"},"PluginDataHandler")),(0,t.yg)("li",{parentName:"ol"},"\u5c06\u5b9e\u73b0\u7684\u5305\u6253\u5305\u540e\uff0c\u653e\u7f6e\u4e8e",(0,t.yg)("inlineCode",{parentName:"li"},"shenyu.extPlugin.path"),"\u5bf9\u5e94\u7684\u8def\u5f84\u4e0b")),(0,t.yg)("h2",{id:"\u5165\u53e3"},"\u5165\u53e3"),(0,t.yg)("p",null,"\u771f\u6b63\u5b9e\u73b0\u8be5\u903b\u8f91\u7684\u7c7b\u662f",(0,t.yg)("inlineCode",{parentName:"p"},"ShenyuLoaderService"),",\u63a5\u4e0b\u6765\u770b\u4e0b\u8be5\u7c7b\u662f\u5982\u4f55\u5904\u7406"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'    public ShenyuLoaderService(final ShenyuWebHandler webHandler, final CommonPluginDataSubscriber subscriber, final ShenyuConfig shenyuConfig) {\n        // \u63d2\u4ef6\u4fe1\u606f\u7684\u4fe1\u606f\u8ba2\u9605\n        this.subscriber = subscriber;\n        // Shenyu\u5c01\u88c5\u7684WebHandler\uff0c\u5305\u542b\u4e86\u6240\u6709\u7684\u63d2\u4ef6\u903b\u8f91\n        this.webHandler = webHandler;\n        // \u914d\u7f6e\u4fe1\u606f\n        this.shenyuConfig = shenyuConfig;\n        // \u6269\u5c55\u63d2\u4ef6\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u5982\u8def\u5f84\uff0c\u662f\u5426\u542f\u7528\u3001\u5f00\u542f\u591a\u5c11\u7ebf\u7a0b\u6765\u5904\u7406\u3001\u68c0\u67e5\u52a0\u8f7d\u7684\u9891\u7387\u7b49\u4fe1\u606f\n        ExtPlugin config = shenyuConfig.getExtPlugin();\n        // \u5982\u679c\u542f\u7528\u7684\uff0c\u5219\u521b\u5efa\u5b9a\u65f6\u4efb\u52a1\u6765\u68c0\u67e5\u5e76\u52a0\u8f7d\n        if (config.getEnabled()) {\n            // \u521b\u5efa\u4e00\u4e2a\u6307\u5b9a\u7ebf\u7a0b\u540d\u79f0\u7684\u5b9a\u65f6\u4efb\u52a1\n            ScheduledThreadPoolExecutor executor = new ScheduledThreadPoolExecutor(config.getThreads(), ShenyuThreadFactory.create("plugin-ext-loader", true));\n            // \u521b\u5efa\u56fa\u5b9a\u9891\u7387\u6267\u884c\u7684\u4efb\u52a1\uff0c\u9ed8\u8ba4\u572830s\uff0c\u6bcf300s\uff0c\u6267\u884c\u4e00\u6b21\n            executor.scheduleAtFixedRate(() -> loadExtOrUploadPlugins(null), config.getScheduleDelay(), config.getScheduleTime(), TimeUnit.SECONDS);\n        }\n    }\n    \n')),(0,t.yg)("p",null,"\u8be5\u7c7b\u6709\u4ee5\u4e0b\u51e0\u4e2a\u5c5e\u6027\uff1a"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"webHandler"),": \u8be5\u7c7b\u662fshenyu \u5904\u7406\u8bf7\u6c42\u7684\u5165\u53e3\uff0c\u5f15\u7528\u4e86\u6240\u6709\u7684\u63d2\u4ef6\u6570\u636e\uff0c\u5728\u6269\u5c55\u63d2\u4ef6\u52a0\u8f7d\u540e\uff0c\u9700\u8981\u8fdb\u884c\u66f4\u65b0"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"subscriber"),": \u8be5\u7c7b\u662f\u63d2\u4ef6\u7684\u8ba2\u9605\u7684\u5165\u53e3\uff0c\u5f15\u7528\u4e86\u6240\u6709\u63d2\u4ef6\u7684\u8ba2\u9605\u5904\u7406\u7c7b\uff0c\u5728\u6269\u5c55\u914d\u7f6e\u52a0\u8f7d\u540e\uff0c\u4e5f\u9700\u8981\u8fdb\u884c\u540c\u6b65\u66f4\u65b0"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"executor"),": \u5728",(0,t.yg)("inlineCode",{parentName:"p"},"ShenyuLoaderService"),"\u5185\u90e8\u4f1a\u521b\u5efa\u4e00\u4e2a\u5b9a\u65f6\u4efb\u52a1\uff0c\u6765\u5b9a\u65f6\u626b\u63cf\u52a0\u8f7d\u6307\u5b9a\u8def\u5f84\u4e0b\u7684jar\u5305\uff0c\u4fbf\u4e8e\u52a0\u8f7d\u6269\u5c55\u7684\u63d2\u4ef6\uff0c\u5b9e\u73b0\u52a8\u6001\u53d1\u73b0\n\u9ed8\u8ba4\u4f1a\u5728\u542f\u52a830\u79d2\u540e\uff0c\u6bcf300\u79d2\u626b\u63cf\u4e00\u6b21"),(0,t.yg)("p",null,"\u540c\u65f6\u8fd9\u91cc\u53ef\u4ee5\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"p"},"shenyu.extPlugin.enabled"),"\u914d\u7f6e\u6765\u51b3\u5b9a\u662f\u5426\u8981\u5f00\u542f\u6269\u5c55\u63d2\u4ef6\u529f\u80fd\u7684\u542f\u7528"),(0,t.yg)("p",null,"\u4ee5\u4e0a\u7684\u914d\u7f6e\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u8fdb\u884c\u8c03\u6574\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  extPlugin:\n    path:   # \u6269\u5c55\u63d2\u4ef6\u7684\u5b58\u50a8\u76ee\u5f55\n    enabled: true # \u662f\u5426\u542f\u7528\u6269\u5c55\u529f\u80fd\n    threads: 1 # \u626b\u63cf\u52a0\u8f7d\u7684\u7ebf\u7a0b\u6570\n    scheduleTime: 300 # \u4efb\u52a1\u6267\u884c\u7684\u9891\u7387\n    scheduleDelay: 30 # \u4efb\u52a1\u542f\u52a8\u540e\u591a\u4e45\u5f00\u59cb\u6267\u884c\n")),(0,t.yg)("p",null,"\u63a5\u4e0b\u6765\u770b\u4e0b\u52a0\u8f7d\u7684\u903b\u8f91\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'   public void loadExtOrUploadPlugins(final PluginData uploadedJarResource) {\n        try {\n            List<ShenyuLoaderResult> plugins = new ArrayList<>();\n            // \u83b7\u53d6ShenyuPluginClassloader\u7684\u6301\u6709\u5bf9\u8c61\n            ShenyuPluginClassloaderHolder singleton = ShenyuPluginClassloaderHolder.getSingleton();\n            if (Objects.isNull(uploadedJarResource)) {\n                // \u53c2\u6570\u4e3a\u7a7a\uff0c\u5219\u4ece\u6269\u5c55\u7684\u76ee\u5f55\uff0c\u52a0\u8f7d\u6240\u6709\u7684jar\u5305\n                // PluginJar\uff1a\u5305\u542bShenyuPlugin\u63a5\u53e3\u3001PluginDataHandler\u63a5\u53e3\u7684\u6570\u636e\n                List<PluginJarParser.PluginJar> uploadPluginJars = ShenyuExtPathPluginJarLoader.loadExtendPlugins(shenyuConfig.getExtPlugin().getPath());\n                // \u904d\u5386\u6240\u6709\u7684\u5f85\u52a0\u8f7d\u63d2\u4ef6\n                for (PluginJarParser.PluginJar extPath : uploadPluginJars) {\n                    LOG.info("shenyu extPlugin find new {} to load", extPath.getAbsolutePath());\n                    // \u4f7f\u7528\u6269\u5c55\u63d2\u4ef6\u7684\u52a0\u8f7d\u5668\u6765\u52a0\u8f7d\u6307\u5b9a\u7684\u63d2\u4ef6\uff0c\u4fbf\u4e8e\u540e\u7eed\u7684\u52a0\u8f7d\u548c\u5378\u8f7d\n                    ShenyuPluginClassLoader extPathClassLoader = singleton.createPluginClassLoader(extPath);\n                    // \u4f7f\u7528ShenyuPluginClassLoader \u8fdb\u884c\u52a0\u8f7d\n                    // \u4e3b\u8981\u903b\u8f91\u662f\uff1a\u5224\u65ad\u662f\u5426\u5b9e\u73b0ShenyuPlugin\u63a5\u53e3\u3001PluginDataHandler\u63a5\u53e3 \u6216\u662f\u5426\u6807\u8bc6 @Component\\@Service\u7b49\u6ce8\u89e3\uff0c\u5982\u679c\u6709\uff0c\u5219\u6ce8\u518c\u4e3aSpringBean\n                    // \u6784\u9020 ShenyuLoaderResult\u5bf9\u8c61\n                    plugins.addAll(extPathClassLoader.loadUploadedJarPlugins());\n                }\n            } else {\n                // \u52a0\u8f7d\u6307\u5b9ajar\uff0c\u903b\u8f91\u540c\u52a0\u8f7d\u5168\u90e8\n                PluginJarParser.PluginJar pluginJar = PluginJarParser.parseJar(Base64.getDecoder().decode(uploadedJarResource.getPluginJar()));\n                LOG.info("shenyu upload plugin jar find new {} to load", pluginJar.getJarKey());\n                ShenyuPluginClassLoader uploadPluginClassLoader = singleton.createPluginClassLoader(pluginJar);\n                plugins.addAll(uploadPluginClassLoader.loadUploadedJarPlugins());\n            }\n            // \u5c06\u6269\u5c55\u7684\u63d2\u4ef6\uff0c\u52a0\u5165\u5230ShenyuWebHandler\u7684\u63d2\u4ef6\u5217\u8868\uff0c\u540e\u7eed\u7684\u8bf7\u6c42\u5219\u4f1a\u7ecf\u8fc7\u52a0\u5165\u7684\u63d2\u4ef6\u5185\u5bb9\n            loaderPlugins(plugins);\n        } catch (Exception e) {\n            LOG.error("shenyu plugins load has error ", e);\n        }\n    }\n')),(0,t.yg)("p",null,"\u8be5\u65b9\u6cd5\u5904\u7406\u7684\u903b\u8f91\uff1a"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u5224\u65ad\u53c2\u6570uploadedJarResource\u662f\u5426\u6709\u503c\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u5219\u4f1a\u52a0\u8f7d\u5168\u90e8\uff0c\u5426\u5219\u52a0\u8f7d\u6307\u5b9a\u8d44\u6e90jar\u5305\u8fdb\u884c\u5904\u7406"),(0,t.yg)("li",{parentName:"ol"},"\u4ece ",(0,t.yg)("inlineCode",{parentName:"li"},"shenyu.extPlugin.path")," \u4e2d\u83b7\u53d6\u5230\u6307\u5b9ajar\u5305\uff0c\u5e76\u5c01\u88c5\u6210 PluginJar\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u5305\u542b\u4e86jar\u5305\u4ee5\u4e0b\u4fe1\u606f",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"version: \u7248\u672c\u4fe1\u606f"),(0,t.yg)("li",{parentName:"ul"},"groupId\uff1a\u5305\u7684groupId"),(0,t.yg)("li",{parentName:"ul"},"artifactId: \u5305\u7684 artifactId"),(0,t.yg)("li",{parentName:"ul"},"absolutePath\uff1a \u7edd\u5bf9\u8def\u5f84"),(0,t.yg)("li",{parentName:"ul"},"clazzMap\uff1aclass\u5bf9\u5e94\u7684\u5b57\u8282\u7801"),(0,t.yg)("li",{parentName:"ul"},"resourceMap\uff1ajar\u5305\u7684\u5b57\u8282\u7801"))),(0,t.yg)("li",{parentName:"ol"},"\u901a\u8fc7",(0,t.yg)("inlineCode",{parentName:"li"},"ShenyuPluginClassloaderHolder"),"\u521b\u5efa\u5bf9\u5e94\u7684ClassLoader,\u5bf9\u5e94\u7684\u7c7b\u662f",(0,t.yg)("inlineCode",{parentName:"li"},"ShenyuPluginClassLoader"),", \u5e76\u8fdb\u884c\u52a0\u8f7d\u5bf9\u5e94\u7684\u7c7b",(0,t.yg)("ul",{parentName:"li"},(0,t.yg)("li",{parentName:"ul"},"\u8c03\u7528",(0,t.yg)("inlineCode",{parentName:"li"},"ShenyuPluginClassLoader.loadUploadedJarPlugins")," \u52a0\u8f7d\u5bf9\u5e94\u7684\u7c7b\u5e76\u6ce8\u518c\u6210Spring Bean\uff0c\u8fd9\u6837\u53ef\u4ee5\u4f7f\u7528Spring\u5bb9\u5668\u6765\u7ba1\u7406"))),(0,t.yg)("li",{parentName:"ol"},"\u8c03\u7528",(0,t.yg)("inlineCode",{parentName:"li"},"loaderPlugins"),"\u65b9\u6cd5\uff0c\u5c06\u6269\u5c55\u7684\u63d2\u4ef6\u66f4\u65b0\u5230 ",(0,t.yg)("inlineCode",{parentName:"li"},"webHandler")," \u4ee5\u53ca ",(0,t.yg)("inlineCode",{parentName:"li"},"subscriber"),"\u4e2d")),(0,t.yg)("h2",{id:"\u63d2\u4ef6\u6ce8\u518c"},"\u63d2\u4ef6\u6ce8\u518c"),(0,t.yg)("p",null,"\u5bf9\u4e8e\u63d0\u4f9b\u7684jar\u5305\u91cc\u7684\u5185\u5bb9\uff0c\u52a0\u8f7d\u5668\u53ea\u4f1a\u5904\u7406\u6307\u5b9a\u63a5\u53e3\u7c7b\u578b\u7684\u7c7b\uff0c\u5b9e\u73b0\u903b\u8f91\u5728 ",(0,t.yg)("inlineCode",{parentName:"p"},"ShenyuPluginClassLoader.loadUploadedJarPlugins()")," \u65b9\u6cd5"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'public List<ShenyuLoaderResult> loadUploadedJarPlugins() {\n        List<ShenyuLoaderResult> results = new ArrayList<>();\n        // \u6240\u6709\u7684\u7c7b\u6620\u5c04\u5173\u7cfb\n        Set<String> names = pluginJar.getClazzMap().keySet();\n        // \u904d\u5386\u6240\u6709\u7684\u7c7b\n        names.forEach(className -> {\n            Object instance;\n            try {\n                // \u5c1d\u8bd5\u521b\u5efa\u5bf9\u8c61\uff0c\u5982\u679c\u53ef\u4ee5\uff0c\u5219\u52a0\u5165\u5230Spring\u5bb9\u5668\u4e2d\n                instance = getOrCreateSpringBean(className);\n                if (Objects.nonNull(instance)) {\n                    // \u6784\u5efaShenyuLoaderResult\u5bf9\u8c61\n                    results.add(buildResult(instance));\n                    LOG.info("The class successfully loaded into a upload-Jar-plugin {} is registered as a spring bean", className);\n                }\n            } catch (ClassNotFoundException | IllegalAccessException | InstantiationException e) {\n                LOG.warn("Registering upload-Jar-plugins succeeds spring bean fails:{}", className, e);\n            }\n        });\n        return results;\n    }\n')),(0,t.yg)("p",null,"\u8be5\u65b9\u6cd5\u5c31\u662f\u8d1f\u8d23\u6784\u5efa\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684\u5bf9\u8c61\uff0c\u5e76\u5c01\u88c5\u6210 ",(0,t.yg)("inlineCode",{parentName:"p"},"ShenyuLoaderResult"),"\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u5bf9\u4e8e\u521b\u5efa\u540e\u5bf9\u8c61\uff0c\u8fdb\u884c\u4e86\u5c01\u88c5\uff0c\u4f1a\u5728\u65b9\u6cd5 ",(0,t.yg)("inlineCode",{parentName:"p"},"buildResult()"),"\u4e2d\u8fdb\u884c\u5904\u7406"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"    private ShenyuLoaderResult buildResult(final Object instance) {\n        ShenyuLoaderResult result = new ShenyuLoaderResult();\n        // \u521b\u5efa\u7684\u5bf9\u8c61\u662f\u5426\u5b9e\u73b0\u4e86ShenyuPlugin\n        if (instance instanceof ShenyuPlugin) {\n            result.setShenyuPlugin((ShenyuPlugin) instance);\n            // \u521b\u5efa\u7684\u5bf9\u8c61\u662f\u5426\u5b9e\u73b0\u4e86PluginDataHandler\n        } else if (instance instanceof PluginDataHandler) {\n            result.setPluginDataHandler((PluginDataHandler) instance);\n        }\n        return result;\n    }\n")),(0,t.yg)("p",null,"\u540c\u65f6\u8fdb\u5165\u65b9\u6cd5 ",(0,t.yg)("inlineCode",{parentName:"p"},"getOrCreateSpringBean()")," \u8fdb\u4e00\u6b65\u5206\u6790"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"    private <T> T getOrCreateSpringBean(final String className) throws ClassNotFoundException, IllegalAccessException, InstantiationException {\n        // \u786e\u8ba4\u662f\u5426\u5df2\u7ecf\u6ce8\u518c\u8fc7\u4e86\uff0c\u5982\u679c\u6709\u5219\u4e0d\u5904\u7406\uff0c\u76f4\u63a5\u8fd4\u56de\n        if (SpringBeanUtils.getInstance().existBean(className)) {\n            return SpringBeanUtils.getInstance().getBeanByClassName(className);\n        }\n        lock.lock();\n        try {\n            // Double check,\n            T inst = SpringBeanUtils.getInstance().getBeanByClassName(className);\n            if (Objects.isNull(inst)) {\n                // \u4f7f\u7528 ShenyuPluginClassLoader \u8fdb\u884c\u52a0\u8f7d\u7c7b\n                Class<?> clazz = Class.forName(className, false, this);\n                //Exclude ShenyuPlugin subclass and PluginDataHandler subclass\n                // without adding @Component @Service annotation\n                // \u786e\u8ba4\u662f\u5426\u662f ShenyuPlugin \u6216\u662f PluginDataHandler\u7684\u5b50\u7c7b\n                boolean next = ShenyuPlugin.class.isAssignableFrom(clazz)\n                        || PluginDataHandler.class.isAssignableFrom(clazz);\n                if (!next) {\n                    // \u5982\u679c\u4e0d\u662f\uff0c\u786e\u8ba4\u662f\u5426\u6807\u8bc6\u4e86 @Component \u4e0e @Service \u6ce8\u89e3\n                    Annotation[] annotations = clazz.getAnnotations();\n                    next = Arrays.stream(annotations).anyMatch(e -> e.annotationType().equals(Component.class)\n                            || e.annotationType().equals(Service.class));\n                }\n                if (next) {\n                    // \u5982\u679c\u7b26\u5408\u4ee5\u4e0a\u5185\u5bb9\uff0c\u5219\u6ce8\u518cBean\n                    GenericBeanDefinition beanDefinition = new GenericBeanDefinition();\n                    beanDefinition.setBeanClassName(className);\n                    beanDefinition.setAutowireCandidate(true);\n                    beanDefinition.setRole(BeanDefinition.ROLE_INFRASTRUCTURE);\n                    // \u6ce8\u518cbean\n                    String beanName = SpringBeanUtils.getInstance().registerBean(beanDefinition, this);\n                    // \u521b\u5efa\u5bf9\u8c61\n                    inst = SpringBeanUtils.getInstance().getBeanByClassName(beanName);\n                }\n            }\n            return inst;\n        } finally {\n            lock.unlock();\n        }\n    }\n")),(0,t.yg)("p",null,"\u903b\u8f91\u5927\u81f4\u5982\u4e0b\uff1a"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u5224\u65ad\u662f\u5426\u5b9e\u73b0\u4e86\u63a5\u53e3 ",(0,t.yg)("inlineCode",{parentName:"li"},"ShenyuPlugin")," \u6216 ",(0,t.yg)("inlineCode",{parentName:"li"},"PluginDataHandler"),", \u5982\u679c\u6ca1\u6709\uff0c\u5219\u662f\u5426\u6807\u8bc6\u4e86 ",(0,t.yg)("inlineCode",{parentName:"li"},"@Component")," \u6216\u662f ",(0,t.yg)("inlineCode",{parentName:"li"},"@Service")),(0,t.yg)("li",{parentName:"ol"},"\u5982\u679c\u7b26\u54081\u7684\u6761\u4ef6\uff0c\u5219\u5c06\u8be5\u5bf9\u8c61\u6ce8\u518c\u5230Spring \u5bb9\u5668\uff0c\u5e76\u8fd4\u56de\u521b\u5efa\u7684\u5bf9\u8c61")),(0,t.yg)("h2",{id:"\u540c\u6b65"},"\u540c\u6b65"),(0,t.yg)("p",null,"\u5728\u63d2\u4ef6\u6ce8\u518c\u6210\u529f\u540e\uff0c\u8fd9\u65f6\u53ea\u662f\u5b9e\u4f8b\u5316\u4e86\u63d2\u4ef6\uff0c\u4f46\u5b83\u8fd8\u4e0d\u4f1a\u751f\u6548\uff0c\u56e0\u4e3a\u5b83\u8fd8\u672a\u6dfb\u52a0\u5230 Shenyu\u7684\u63d2\u4ef6\u94fe\u4e2d\uff0c\u540c\u6b65\u903b\u8f91\u7531 ",(0,t.yg)("inlineCode",{parentName:"p"},"loaderPlugins()"),"\u65b9\u6cd5\u5b9e\u73b0"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},"    private void loaderPlugins(final List<ShenyuLoaderResult> results) {\n        if (CollectionUtils.isEmpty(results)) {\n            return;\n        }\n        // \u83b7\u53d6\u6240\u6709\u5b9e\u73b0\u4e86\u63a5\u53e3ShenyuPlugin\u7684\u5bf9\u8c61\n        List<ShenyuPlugin> shenyuExtendPlugins = results.stream().map(ShenyuLoaderResult::getShenyuPlugin).filter(Objects::nonNull).collect(Collectors.toList());\n        // \u540c\u6b65\u66f4\u65b0webHandler\u4e2dplugins\n        webHandler.putExtPlugins(shenyuExtendPlugins);\n        // \u83b7\u53d6\u6240\u6709\u5b9e\u73b0\u4e86\u63a5\u53e3PluginDataHandler\u7684\u5bf9\u8c61\n        List<PluginDataHandler> handlers = results.stream().map(ShenyuLoaderResult::getPluginDataHandler).filter(Objects::nonNull).collect(Collectors.toList());\n        // \u540c\u6b65\u6269\u5c55\u7684PluginDataHandler\n        subscriber.putExtendPluginDataHandler(handlers);\n\n    }\n")),(0,t.yg)("p",null,"\u8be5\u65b9\u6cd5\u7684\u903b\u8f91\u5904\u7406\u4e86\u4e24\u4e2a\u6570\u636e\uff1a"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u5c06\u5b9e\u73b0\u4e86 ",(0,t.yg)("inlineCode",{parentName:"li"},"ShenyuPlugin")," \u63a5\u53e3\u7684\u6570\u636e\uff0c\u540c\u6b65\u81f3 ",(0,t.yg)("inlineCode",{parentName:"li"},"webHandler"),"\u7684plugins \u5217\u8868")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'    public void putExtPlugins(final List<ShenyuPlugin> extPlugins) {\n        if (CollectionUtils.isEmpty(extPlugins)) {\n            return;\n        }\n        // \u8fc7\u6ee4\u51fa\u65b0\u589e\u7684\u63d2\u4ef6\n        final List<ShenyuPlugin> shenyuAddPlugins = extPlugins.stream()\n                .filter(e -> plugins.stream().noneMatch(plugin -> plugin.named().equals(e.named())))\n                .collect(Collectors.toList());\n        // \u8fc7\u6ee4\u51fa\u66f4\u65b0\u7684\u63d2\u4ef6\uff0c\u4ee5\u540d\u79f0\u548c\u65e7\u7684\u76f8\u540c\u6765\u5224\u65ad\uff0c\u5219\u4e3a\u66f4\u65b0\n        final List<ShenyuPlugin> shenyuUpdatePlugins = extPlugins.stream()\n                .filter(e -> plugins.stream().anyMatch(plugin -> plugin.named().equals(e.named())))\n                .collect(Collectors.toList());\n        // \u5982\u679c\u6ca1\u6709\u6570\u636e\uff0c\u5219\u8df3\u8fc7\n        if (CollectionUtils.isEmpty(shenyuAddPlugins) && CollectionUtils.isEmpty(shenyuUpdatePlugins)) {\n            return;\n        }\n        // \u590d\u5236\u65e7\u7684\u6570\u636e\n        // copy new list\n        List<ShenyuPlugin> newPluginList = new ArrayList<>(plugins);\n        // \u6dfb\u52a0\u65b0\u7684\u63d2\u4ef6\u6570\u636e\n        // Add extend plugin from pluginData or shenyu ext-lib\n        this.sourcePlugins.addAll(shenyuAddPlugins);\n        // \u6dfb\u52a0\u65b0\u6570\u636e\n        if (CollectionUtils.isNotEmpty(shenyuAddPlugins)) {\n            shenyuAddPlugins.forEach(plugin -> LOG.info("shenyu auto add extends plugins:{}", plugin.named()));\n            newPluginList.addAll(shenyuAddPlugins);\n        }\n        // \u4fee\u6539\u66f4\u65b0\u7684\u6570\u636e\n        if (CollectionUtils.isNotEmpty(shenyuUpdatePlugins)) {\n            shenyuUpdatePlugins.forEach(plugin -> LOG.info("shenyu auto update extends plugins:{}", plugin.named()));\n            for (ShenyuPlugin updatePlugin : shenyuUpdatePlugins) {\n                for (int i = 0; i < newPluginList.size(); i++) {\n                    if (newPluginList.get(i).named().equals(updatePlugin.named())) {\n                        newPluginList.set(i, updatePlugin);\n                    }\n                }\n                for (int i = 0; i < this.sourcePlugins.size(); i++) {\n                    if (this.sourcePlugins.get(i).named().equals(updatePlugin.named())) {\n                        this.sourcePlugins.set(i, updatePlugin);\n                    }\n                }\n            }\n        }\n        // \u91cd\u65b0\u6392\u5e8f\n        plugins = sortPlugins(newPluginList);\n    }\n')),(0,t.yg)("ol",{start:2},(0,t.yg)("li",{parentName:"ol"},"\u5c06\u5b9e\u73b0\u4e86 ",(0,t.yg)("inlineCode",{parentName:"li"},"PluginDataHandler")," \u63a5\u53e3\u7684\u6570\u636e\uff0c\u540c\u6b65\u81f3 ",(0,t.yg)("inlineCode",{parentName:"li"},"subscriber")," \u7684handlers \u5217\u8868")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-java"},'    public void putExtendPluginDataHandler(final List<PluginDataHandler> handlers) {\n        if (CollectionUtils.isEmpty(handlers)) {\n            return;\n        }\n        // \u904d\u5386\u6240\u6709\u6570\u636e\n        for (PluginDataHandler handler : handlers) {\n            String pluginNamed = handler.pluginNamed();\n            // \u66f4\u65b0\u73b0\u6709\u7684PluginDataHandler\u5217\u8868\n            MapUtils.computeIfAbsent(handlerMap, pluginNamed, name -> {\n                LOG.info("shenyu auto add extends plugin data handler name is :{}", pluginNamed);\n                return handler;\n            });\n        }\n    }\n')),(0,t.yg)("p",null,"\u81f3\u6b64\uff0c\u6269\u5c55\u63d2\u4ef6\u7684\u52a0\u8f7d\u8fc7\u7a0b\u5206\u6790\u7ed3\u675f\u3002"))}d.isMDXComponent=!0}}]);