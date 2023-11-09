"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[4912],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>v});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(a),m=n,v=s["".concat(o,".").concat(m)]||s[m]||d[m]||l;return a?r.createElement(v,i(i({ref:t},p),{},{components:a})):r.createElement(v,i({ref:t},p))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[s]="string"==typeof e?e:n,i[1]=c;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},77853:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const l={title:"Nacos \u67b6\u6784",keywords:["Nacos","\u67b6\u6784"],description:"Nacos \u67b6\u6784"},i="Nacos \u67b6\u6784",c={unversionedId:"architecture",id:"version-2.X/architecture",title:"Nacos \u67b6\u6784",description:"Nacos \u67b6\u6784",source:"@site/versioned_docs/version-2.X/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/docs/architecture",draft:!1,tags:[],version:"2.X",frontMatter:{title:"Nacos \u67b6\u6784",keywords:["Nacos","\u67b6\u6784"],description:"Nacos \u67b6\u6784"}},o={},u=[{value:"\u57fa\u672c\u67b6\u6784\u53ca\u6982\u5ff5",id:"\u57fa\u672c\u67b6\u6784\u53ca\u6982\u5ff5",level:2},{value:"\u670d\u52a1 (Service)",id:"\u670d\u52a1-service",level:3},{value:"\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3 (Service Registry)",id:"\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3-service-registry",level:3},{value:"\u670d\u52a1\u5143\u6570\u636e (Service Metadata)",id:"\u670d\u52a1\u5143\u6570\u636e-service-metadata",level:3},{value:"\u670d\u52a1\u63d0\u4f9b\u65b9 (Service Provider)",id:"\u670d\u52a1\u63d0\u4f9b\u65b9-service-provider",level:3},{value:"\u670d\u52a1\u6d88\u8d39\u65b9 (Service Consumer)",id:"\u670d\u52a1\u6d88\u8d39\u65b9-service-consumer",level:3},{value:"\u914d\u7f6e (Configuration)",id:"\u914d\u7f6e-configuration",level:3},{value:"\u914d\u7f6e\u7ba1\u7406 (Configuration Management)",id:"\u914d\u7f6e\u7ba1\u7406-configuration-management",level:3},{value:"\u540d\u5b57\u670d\u52a1 (Naming Service)",id:"\u540d\u5b57\u670d\u52a1-naming-service",level:3},{value:"\u914d\u7f6e\u670d\u52a1 (Configuration Service)",id:"\u914d\u7f6e\u670d\u52a1-configuration-service",level:3},{value:"\u66f4\u591a\u6982\u5ff5...",id:"\u66f4\u591a\u6982\u5ff5",level:3},{value:"\u903b\u8f91\u67b6\u6784\u53ca\u5176\u7ec4\u4ef6\u4ecb\u7ecd",id:"\u903b\u8f91\u67b6\u6784\u53ca\u5176\u7ec4\u4ef6\u4ecb\u7ecd",level:2},{value:"\u9886\u57df\u6a21\u578b",id:"\u9886\u57df\u6a21\u578b",level:2},{value:"\u6570\u636e\u6a21\u578b",id:"\u6570\u636e\u6a21\u578b",level:3},{value:"\u670d\u52a1\u9886\u57df\u6a21\u578b",id:"\u670d\u52a1\u9886\u57df\u6a21\u578b",level:3},{value:"\u914d\u7f6e\u9886\u57df\u6a21\u578b",id:"\u914d\u7f6e\u9886\u57df\u6a21\u578b",level:3},{value:"\u7c7b\u89c6\u56fe",id:"\u7c7b\u89c6\u56fe",level:2},{value:"Nacos-SDK \u7c7b\u89c6\u56fe",id:"nacos-sdk-\u7c7b\u89c6\u56fe",level:3},{value:"\u6784\u5efa\u7269\u3001\u90e8\u7f72\u53ca\u542f\u52a8\u6a21\u5f0f",id:"\u6784\u5efa\u7269\u90e8\u7f72\u53ca\u542f\u52a8\u6a21\u5f0f",level:2},{value:"\u4e24\u79cd\u4ea4\u4ed8\u5de5\u4ef6",id:"\u4e24\u79cd\u4ea4\u4ed8\u5de5\u4ef6",level:3},{value:"\u4e24\u79cd\u542f\u52a8\u6a21\u5f0f",id:"\u4e24\u79cd\u542f\u52a8\u6a21\u5f0f",level:3},{value:"\u514d\u8d39\u7684\u516c\u6709\u4e91\u670d\u52a1\u6a21\u5f0f",id:"\u514d\u8d39\u7684\u516c\u6709\u4e91\u670d\u52a1\u6a21\u5f0f",level:3}],p={toc:u},s="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(s,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"nacos-\u67b6\u6784"},"Nacos \u67b6\u6784"),(0,n.kt)("h2",{id:"\u57fa\u672c\u67b6\u6784\u53ca\u6982\u5ff5"},"\u57fa\u672c\u67b6\u6784\u53ca\u6982\u5ff5"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/jpeg/338441/1561217892717-1418fb9b-7faa-4324-87b9-f1740329f564.jpeg",alt:"nacos_arch.jpg"})," "),(0,n.kt)("h3",{id:"\u670d\u52a1-service"},"\u670d\u52a1 (Service)"),(0,n.kt)("p",null,"\u670d\u52a1\u662f\u6307\u4e00\u4e2a\u6216\u4e00\u7ec4\u8f6f\u4ef6\u529f\u80fd\uff08\u4f8b\u5982\u7279\u5b9a\u4fe1\u606f\u7684\u68c0\u7d22\u6216\u4e00\u7ec4\u64cd\u4f5c\u7684\u6267\u884c\uff09\uff0c\u5176\u76ee\u7684\u662f\u4e0d\u540c\u7684\u5ba2\u6237\u7aef\u53ef\u4ee5\u4e3a\u4e0d\u540c\u7684\u76ee\u7684\u91cd\u7528\uff08\u4f8b\u5982\u901a\u8fc7\u8de8\u8fdb\u7a0b\u7684\u7f51\u7edc\u8c03\u7528\uff09\u3002Nacos \u652f\u6301\u4e3b\u6d41\u7684\u670d\u52a1\u751f\u6001\uff0c\u5982 Kubernetes Service\u3001gRPC|Dubbo RPC Service \u6216\u8005 Spring Cloud RESTful Service\u3002"),(0,n.kt)("h3",{id:"\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3-service-registry"},"\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3 (Service Registry)"),(0,n.kt)("p",null,"\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\uff0c\u5b83\u662f\u670d\u52a1\uff0c\u5176\u5b9e\u4f8b\u53ca\u5143\u6570\u636e\u7684\u6570\u636e\u5e93\u3002\u670d\u52a1\u5b9e\u4f8b\u5728\u542f\u52a8\u65f6\u6ce8\u518c\u5230\u670d\u52a1\u6ce8\u518c\u8868\uff0c\u5e76\u5728\u5173\u95ed\u65f6\u6ce8\u9500\u3002\u670d\u52a1\u548c\u8def\u7531\u5668\u7684\u5ba2\u6237\u7aef\u67e5\u8be2\u670d\u52a1\u6ce8\u518c\u8868\u4ee5\u67e5\u627e\u670d\u52a1\u7684\u53ef\u7528\u5b9e\u4f8b\u3002\u670d\u52a1\u6ce8\u518c\u4e2d\u5fc3\u53ef\u80fd\u4f1a\u8c03\u7528\u670d\u52a1\u5b9e\u4f8b\u7684\u5065\u5eb7\u68c0\u67e5 API \u6765\u9a8c\u8bc1\u5b83\u662f\u5426\u80fd\u591f\u5904\u7406\u8bf7\u6c42\u3002"),(0,n.kt)("h3",{id:"\u670d\u52a1\u5143\u6570\u636e-service-metadata"},"\u670d\u52a1\u5143\u6570\u636e (Service Metadata)"),(0,n.kt)("p",null,"\u670d\u52a1\u5143\u6570\u636e\u662f\u6307\u5305\u62ec\u670d\u52a1\u7aef\u70b9(endpoints)\u3001\u670d\u52a1\u6807\u7b7e\u3001\u670d\u52a1\u7248\u672c\u53f7\u3001\u670d\u52a1\u5b9e\u4f8b\u6743\u91cd\u3001\u8def\u7531\u89c4\u5219\u3001\u5b89\u5168\u7b56\u7565\u7b49\u63cf\u8ff0\u670d\u52a1\u7684\u6570\u636e\u3002"),(0,n.kt)("h3",{id:"\u670d\u52a1\u63d0\u4f9b\u65b9-service-provider"},"\u670d\u52a1\u63d0\u4f9b\u65b9 (Service Provider)"),(0,n.kt)("p",null,"\u662f\u6307\u63d0\u4f9b\u53ef\u590d\u7528\u548c\u53ef\u8c03\u7528\u670d\u52a1\u7684\u5e94\u7528\u65b9\u3002"),(0,n.kt)("h3",{id:"\u670d\u52a1\u6d88\u8d39\u65b9-service-consumer"},"\u670d\u52a1\u6d88\u8d39\u65b9 (Service Consumer)"),(0,n.kt)("p",null,"\u662f\u6307\u4f1a\u53d1\u8d77\u5bf9\u67d0\u4e2a\u670d\u52a1\u8c03\u7528\u7684\u5e94\u7528\u65b9\u3002"),(0,n.kt)("h3",{id:"\u914d\u7f6e-configuration"},"\u914d\u7f6e (Configuration)"),(0,n.kt)("p",null,"\u5728\u7cfb\u7edf\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u901a\u5e38\u4f1a\u5c06\u4e00\u4e9b\u9700\u8981\u53d8\u66f4\u7684\u53c2\u6570\u3001\u53d8\u91cf\u7b49\u4ece\u4ee3\u7801\u4e2d\u5206\u79bb\u51fa\u6765\u72ec\u7acb\u7ba1\u7406\uff0c\u4ee5\u72ec\u7acb\u7684\u914d\u7f6e\u6587\u4ef6\u7684\u5f62\u5f0f\u5b58\u5728\u3002\u76ee\u7684\u662f\u8ba9\u9759\u6001\u7684\u7cfb\u7edf\u5de5\u4ef6\u6216\u8005\u4ea4\u4ed8\u7269\uff08\u5982 WAR\uff0cJAR \u5305\u7b49\uff09\u66f4\u597d\u5730\u548c\u5b9e\u9645\u7684\u7269\u7406\u8fd0\u884c\u73af\u5883\u8fdb\u884c\u9002\u914d\u3002\u914d\u7f6e\u7ba1\u7406\u4e00\u822c\u5305\u542b\u5728\u7cfb\u7edf\u90e8\u7f72\u7684\u8fc7\u7a0b\u4e2d\uff0c\u7531\u7cfb\u7edf\u7ba1\u7406\u5458\u6216\u8005\u8fd0\u7ef4\u4eba\u5458\u5b8c\u6210\u8fd9\u4e2a\u6b65\u9aa4\u3002\u914d\u7f6e\u53d8\u66f4\u662f\u8c03\u6574\u7cfb\u7edf\u8fd0\u884c\u65f6\u7684\u884c\u4e3a\u7684\u6709\u6548\u624b\u6bb5\u4e4b\u4e00\u3002"),(0,n.kt)("h3",{id:"\u914d\u7f6e\u7ba1\u7406-configuration-management"},"\u914d\u7f6e\u7ba1\u7406 (Configuration Management)"),(0,n.kt)("p",null,"\u5728\u6570\u636e\u4e2d\u5fc3\u4e2d\uff0c\u7cfb\u7edf\u4e2d\u6240\u6709\u914d\u7f6e\u7684\u7f16\u8f91\u3001\u5b58\u50a8\u3001\u5206\u53d1\u3001\u53d8\u66f4\u7ba1\u7406\u3001\u5386\u53f2\u7248\u672c\u7ba1\u7406\u3001\u53d8\u66f4\u5ba1\u8ba1\u7b49\u6240\u6709\u4e0e\u914d\u7f6e\u76f8\u5173\u7684\u6d3b\u52a8\u7edf\u79f0\u4e3a\u914d\u7f6e\u7ba1\u7406\u3002"),(0,n.kt)("h3",{id:"\u540d\u5b57\u670d\u52a1-naming-service"},"\u540d\u5b57\u670d\u52a1 (Naming Service)"),(0,n.kt)("p",null,"\u63d0\u4f9b\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u6240\u6709\u5bf9\u8c61(Object)\u3001\u5b9e\u4f53(Entity)\u7684\u201c\u540d\u5b57\u201d\u5230\u5173\u8054\u7684\u5143\u6570\u636e\u4e4b\u95f4\u7684\u6620\u5c04\u7ba1\u7406\u670d\u52a1\uff0c\u4f8b\u5982 ServiceName -> Endpoints Info, Distributed Lock Name -> Lock Owner/Status Info, DNS Domain Name -> IP List, \u670d\u52a1\u53d1\u73b0\u548c DNS \u5c31\u662f\u540d\u5b57\u670d\u52a1\u76842\u5927\u573a\u666f\u3002"),(0,n.kt)("h3",{id:"\u914d\u7f6e\u670d\u52a1-configuration-service"},"\u914d\u7f6e\u670d\u52a1 (Configuration Service)"),(0,n.kt)("p",null,"\u5728\u670d\u52a1\u6216\u8005\u5e94\u7528\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u63d0\u4f9b\u52a8\u6001\u914d\u7f6e\u6216\u8005\u5143\u6570\u636e\u4ee5\u53ca\u914d\u7f6e\u7ba1\u7406\u7684\u670d\u52a1\u63d0\u4f9b\u8005\u3002"),(0,n.kt)("h3",{id:"\u66f4\u591a\u6982\u5ff5"},(0,n.kt)("a",{parentName:"h3",href:"/docs/concepts"},"\u66f4\u591a\u6982\u5ff5...")),(0,n.kt)("h2",{id:"\u903b\u8f91\u67b6\u6784\u53ca\u5176\u7ec4\u4ef6\u4ecb\u7ecd"},"\u903b\u8f91\u67b6\u6784\u53ca\u5176\u7ec4\u4ef6\u4ecb\u7ecd"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/25601973/1646715315872-7ee3679a-e66e-49e9-ba9f-d24168a86c14.png",alt:"nacos-logic.jpg"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7ba1\u7406\uff1a\u5b9e\u73b0\u670d\u52a1CRUD\uff0c\u57df\u540dCRUD\uff0c\u670d\u52a1\u5065\u5eb7\u72b6\u6001\u68c0\u67e5\uff0c\u670d\u52a1\u6743\u91cd\u7ba1\u7406\u7b49\u529f\u80fd"),(0,n.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u7ba1\u7406\uff1a\u5b9e\u73b0\u914d\u7f6e\u7ba1CRUD\uff0c\u7248\u672c\u7ba1\u7406\uff0c\u7070\u5ea6\u7ba1\u7406\uff0c\u76d1\u542c\u7ba1\u7406\uff0c\u63a8\u9001\u8f68\u8ff9\uff0c\u805a\u5408\u6570\u636e\u7b49\u529f\u80fd"),(0,n.kt)("li",{parentName:"ul"},"\u5143\u6570\u636e\u7ba1\u7406\uff1a\u63d0\u4f9b\u5143\u6570\u636eCURD \u548c\u6253\u6807\u80fd\u529b"),(0,n.kt)("li",{parentName:"ul"},"\u63d2\u4ef6\u673a\u5236\uff1a\u5b9e\u73b0\u4e09\u4e2a\u6a21\u5757\u53ef\u5206\u53ef\u5408\u80fd\u529b\uff0c\u5b9e\u73b0\u6269\u5c55\u70b9SPI\u673a\u5236"),(0,n.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u673a\u5236\uff1a\u5b9e\u73b0\u5f02\u6b65\u5316\u4e8b\u4ef6\u901a\u77e5\uff0csdk\u6570\u636e\u53d8\u5316\u5f02\u6b65\u901a\u77e5\u7b49\u903b\u8f91"),(0,n.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u6a21\u5757\uff1a\u7ba1\u7406\u65e5\u5fd7\u5206\u7c7b\uff0c\u65e5\u5fd7\u7ea7\u522b\uff0c\u65e5\u5fd7\u53ef\u79fb\u690d\u6027\uff08\u5c24\u5176\u907f\u514d\u51b2\u7a81\uff09\uff0c\u65e5\u5fd7\u683c\u5f0f\uff0c\u5f02\u5e38\u7801+\u5e2e\u52a9\u6587\u6863"),(0,n.kt)("li",{parentName:"ul"},"\u56de\u8c03\u673a\u5236\uff1asdk\u901a\u77e5\u6570\u636e\uff0c\u901a\u8fc7\u7edf\u4e00\u7684\u6a21\u5f0f\u56de\u8c03\u7528\u6237\u5904\u7406\u3002\u63a5\u53e3\u548c\u6570\u636e\u7ed3\u6784\u9700\u8981\u5177\u5907\u53ef\u6269\u5c55\u6027"),(0,n.kt)("li",{parentName:"ul"},"\u5bfb\u5740\u6a21\u5f0f\uff1a\u89e3\u51b3ip\uff0c\u57df\u540d\uff0cnameserver\u3001\u5e7f\u64ad\u7b49\u591a\u79cd\u5bfb\u5740\u6a21\u5f0f\uff0c\u9700\u8981\u53ef\u6269\u5c55"),(0,n.kt)("li",{parentName:"ul"},"\u63a8\u9001\u901a\u9053\uff1a\u89e3\u51b3server\u4e0e\u5b58\u50a8\u3001server\u95f4\u3001server\u4e0esdk\u95f4\u63a8\u9001\u6027\u80fd\u95ee\u9898"),(0,n.kt)("li",{parentName:"ul"},"\u5bb9\u91cf\u7ba1\u7406\uff1a\u7ba1\u7406\u6bcf\u4e2a\u79df\u6237\uff0c\u5206\u7ec4\u4e0b\u7684\u5bb9\u91cf\uff0c\u9632\u6b62\u5b58\u50a8\u88ab\u5199\u7206\uff0c\u5f71\u54cd\u670d\u52a1\u53ef\u7528\u6027"),(0,n.kt)("li",{parentName:"ul"},"\u6d41\u91cf\u7ba1\u7406\uff1a\u6309\u7167\u79df\u6237\uff0c\u5206\u7ec4\u7b49\u591a\u4e2a\u7ef4\u5ea6\u5bf9\u8bf7\u6c42\u9891\u7387\uff0c\u957f\u94fe\u63a5\u4e2a\u6570\uff0c\u62a5\u6587\u5927\u5c0f\uff0c\u8bf7\u6c42\u6d41\u63a7\u8fdb\u884c\u63a7\u5236"),(0,n.kt)("li",{parentName:"ul"},"\u7f13\u5b58\u673a\u5236\uff1a\u5bb9\u707e\u76ee\u5f55\uff0c\u672c\u5730\u7f13\u5b58\uff0cserver\u7f13\u5b58\u673a\u5236\u3002\u5bb9\u707e\u76ee\u5f55\u4f7f\u7528\u9700\u8981\u5de5\u5177"),(0,n.kt)("li",{parentName:"ul"},"\u542f\u52a8\u6a21\u5f0f\uff1a\u6309\u7167\u5355\u673a\u6a21\u5f0f\uff0c\u914d\u7f6e\u6a21\u5f0f\uff0c\u670d\u52a1\u6a21\u5f0f\uff0cdns\u6a21\u5f0f\uff0c\u6216\u8005all\u6a21\u5f0f\uff0c\u542f\u52a8\u4e0d\u540c\u7684\u7a0b\u5e8f+UI"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u81f4\u6027\u534f\u8bae\uff1a\u89e3\u51b3\u4e0d\u540c\u6570\u636e\uff0c\u4e0d\u540c\u4e00\u81f4\u6027\u8981\u6c42\u60c5\u51b5\u4e0b\uff0c\u4e0d\u540c\u4e00\u81f4\u6027\u673a\u5236"),(0,n.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u6a21\u5757\uff1a\u89e3\u51b3\u6570\u636e\u6301\u4e45\u5316\u3001\u975e\u6301\u4e45\u5316\u5b58\u50a8\uff0c\u89e3\u51b3\u6570\u636e\u5206\u7247\u95ee\u9898"),(0,n.kt)("li",{parentName:"ul"},"Nameserver\uff1a\u89e3\u51b3namespace\u5230clusterid\u7684\u8def\u7531\u95ee\u9898\uff0c\u89e3\u51b3\u7528\u6237\u73af\u5883\u4e0enacos\u7269\u7406\u73af\u5883\u6620\u5c04\u95ee\u9898"),(0,n.kt)("li",{parentName:"ul"},"CMDB\uff1a\u89e3\u51b3\u5143\u6570\u636e\u5b58\u50a8\uff0c\u4e0e\u4e09\u65b9cmdb\u7cfb\u7edf\u5bf9\u63a5\u95ee\u9898\uff0c\u89e3\u51b3\u5e94\u7528\uff0c\u4eba\uff0c\u8d44\u6e90\u5173\u7cfb"),(0,n.kt)("li",{parentName:"ul"},"Metrics\uff1a\u66b4\u9732\u6807\u51c6metrics\u6570\u636e\uff0c\u65b9\u4fbf\u4e0e\u4e09\u65b9\u76d1\u63a7\u7cfb\u7edf\u6253\u901a"),(0,n.kt)("li",{parentName:"ul"},"Trace\uff1a\u66b4\u9732\u6807\u51c6trace\uff0c\u65b9\u4fbf\u4e0eSLA\u7cfb\u7edf\u6253\u901a\uff0c\u65e5\u5fd7\u767d\u5e73\u5316\uff0c\u63a8\u9001\u8f68\u8ff9\u7b49\u80fd\u529b\uff0c\u5e76\u4e14\u53ef\u4ee5\u548c\u8ba1\u91cf\u8ba1\u8d39\u7cfb\u7edf\u6253\u901a"),(0,n.kt)("li",{parentName:"ul"},"\u63a5\u5165\u7ba1\u7406\uff1a\u76f8\u5f53\u4e8e\u963f\u91cc\u4e91\u5f00\u901a\u670d\u52a1\uff0c\u5206\u914d\u8eab\u4efd\u3001\u5bb9\u91cf\u3001\u6743\u9650\u8fc7\u7a0b"),(0,n.kt)("li",{parentName:"ul"},"\u7528\u6237\u7ba1\u7406\uff1a\u89e3\u51b3\u7528\u6237\u7ba1\u7406\uff0c\u767b\u5f55\uff0csso\u7b49\u95ee\u9898"),(0,n.kt)("li",{parentName:"ul"},"\u6743\u9650\u7ba1\u7406\uff1a\u89e3\u51b3\u8eab\u4efd\u8bc6\u522b\uff0c\u8bbf\u95ee\u63a7\u5236\uff0c\u89d2\u8272\u7ba1\u7406\u7b49\u95ee\u9898"),(0,n.kt)("li",{parentName:"ul"},"\u5ba1\u8ba1\u7cfb\u7edf\uff1a\u6269\u5c55\u63a5\u53e3\u65b9\u4fbf\u4e0e\u4e0d\u540c\u516c\u53f8\u5ba1\u8ba1\u7cfb\u7edf\u6253\u901a"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u77e5\u7cfb\u7edf\uff1a\u6838\u5fc3\u6570\u636e\u53d8\u66f4\uff0c\u6216\u8005\u64cd\u4f5c\uff0c\u65b9\u4fbf\u901a\u8fc7SMS\u7cfb\u7edf\u6253\u901a\uff0c\u901a\u77e5\u5230\u5bf9\u5e94\u4eba\u6570\u636e\u53d8\u66f4"),(0,n.kt)("li",{parentName:"ul"},"OpenAPI\uff1a\u66b4\u9732\u6807\u51c6Rest\u98ce\u683cHTTP\u63a5\u53e3\uff0c\u7b80\u5355\u6613\u7528\uff0c\u65b9\u4fbf\u591a\u8bed\u8a00\u96c6\u6210"),(0,n.kt)("li",{parentName:"ul"},"Console\uff1a\u6613\u7528\u63a7\u5236\u53f0\uff0c\u505a\u670d\u52a1\u7ba1\u7406\u3001\u914d\u7f6e\u7ba1\u7406\u7b49\u64cd\u4f5c"),(0,n.kt)("li",{parentName:"ul"},"SDK\uff1a\u591a\u8bed\u8a00sdk"),(0,n.kt)("li",{parentName:"ul"},"Agent\uff1adns-f\u7c7b\u4f3c\u6a21\u5f0f\uff0c\u6216\u8005\u4e0emesh\u7b49\u65b9\u6848\u96c6\u6210"),(0,n.kt)("li",{parentName:"ul"},"CLI\uff1a\u547d\u4ee4\u884c\u5bf9\u4ea7\u54c1\u8fdb\u884c\u8f7b\u91cf\u5316\u7ba1\u7406\uff0c\u50cfgit\u4e00\u6837\u597d\u7528")),(0,n.kt)("h2",{id:"\u9886\u57df\u6a21\u578b"},"\u9886\u57df\u6a21\u578b"),(0,n.kt)("h3",{id:"\u6570\u636e\u6a21\u578b"},"\u6570\u636e\u6a21\u578b"),(0,n.kt)("p",null,"Nacos \u6570\u636e\u6a21\u578b Key \u7531\u4e09\u5143\u7ec4\u552f\u4e00\u786e\u5b9a, Namespace\u9ed8\u8ba4\u662f\u7a7a\u4e32\uff0c\u516c\u5171\u547d\u540d\u7a7a\u95f4\uff08public\uff09\uff0c\u5206\u7ec4\u9ed8\u8ba4\u662f DEFAULT_GROUP\u3002 "),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/jpeg/338441/1561217857314-95ab332c-acfb-40b2-957a-aae26c2b5d71.jpeg",alt:"nacos_data_model"})," "),(0,n.kt)("h3",{id:"\u670d\u52a1\u9886\u57df\u6a21\u578b"},"\u670d\u52a1\u9886\u57df\u6a21\u578b"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/jpeg/338441/1561217924697-ba504a35-129f-4fc6-b0df-1130b995375a.jpeg",alt:"nacos_naming_data_model"})," "),(0,n.kt)("h3",{id:"\u914d\u7f6e\u9886\u57df\u6a21\u578b"},"\u914d\u7f6e\u9886\u57df\u6a21\u578b"),(0,n.kt)("p",null,"\u56f4\u7ed5\u914d\u7f6e\uff0c\u4e3b\u8981\u6709\u4e24\u4e2a\u5173\u8054\u7684\u5b9e\u4f53\uff0c\u4e00\u4e2a\u662f\u914d\u7f6e\u53d8\u66f4\u5386\u53f2\uff0c\u4e00\u4e2a\u662f\u670d\u52a1\u6807\u7b7e\uff08\u7528\u4e8e\u6253\u6807\u5206\u7c7b\uff0c\u65b9\u4fbf\u7d22\u5f15\uff09\uff0c\u7531 ID \u5173\u8054\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2019/jpeg/338441/1561217958896-4465757f-f588-4797-9c90-a76e604fabb4.jpeg",alt:"nacos_config_er"})," "),(0,n.kt)("h2",{id:"\u7c7b\u89c6\u56fe"},"\u7c7b\u89c6\u56fe"),(0,n.kt)("h3",{id:"nacos-sdk-\u7c7b\u89c6\u56fe"},"Nacos-SDK \u7c7b\u89c6\u56fe"),(0,n.kt)("p",null,"\u670d\u52a1\u90e8\u5206\u5f85\u7eed"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.nlark.com/yuque/0/2022/png/25574784/1650771676187-d95a9e45-8656-4d1a-8b5b-ed63a23a816b.png",alt:"nacos_sdk_class_relation"})," "),(0,n.kt)("h2",{id:"\u6784\u5efa\u7269\u90e8\u7f72\u53ca\u542f\u52a8\u6a21\u5f0f"},"\u6784\u5efa\u7269\u3001\u90e8\u7f72\u53ca\u542f\u52a8\u6a21\u5f0f"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.yuque.com/lark/0/2018/png/15914/1531730742844-e8325932-258b-49b2-9473-8d1199efe20d.png",alt:"undefined"})," "),(0,n.kt)("h3",{id:"\u4e24\u79cd\u4ea4\u4ed8\u5de5\u4ef6"},"\u4e24\u79cd\u4ea4\u4ed8\u5de5\u4ef6"),(0,n.kt)("p",null,"Nacos \u652f\u6301\u6807\u51c6 Docker \u955c\u50cf(TODO: 0.2\u7248\u672c\u5f00\u59cb\u652f\u6301\uff09\u53ca zip(tar.gz)\u538b\u7f29\u5305\u7684\u6784\u5efa\u7269\u3002"),(0,n.kt)("h3",{id:"\u4e24\u79cd\u542f\u52a8\u6a21\u5f0f"},"\u4e24\u79cd\u542f\u52a8\u6a21\u5f0f"),(0,n.kt)("p",null,"Nacos \u652f\u6301\u5c06\u6ce8\u518c\u4e2d\u5fc3(Service Registry\uff09\u4e0e\u914d\u7f6e\u4e2d\u5fc3(Config Center) \u5728\u4e00\u4e2a\u8fdb\u7a0b\u5408\u5e76\u90e8\u7f72\u6216\u8005\u5c062\u8005\u5206\u79bb\u90e8\u7f72\u7684\u4e24\u79cd\u6a21\u5f0f\u3002"),(0,n.kt)("h3",{id:"\u514d\u8d39\u7684\u516c\u6709\u4e91\u670d\u52a1\u6a21\u5f0f"},"\u514d\u8d39\u7684\u516c\u6709\u4e91\u670d\u52a1\u6a21\u5f0f"),(0,n.kt)("p",null,"\u9664\u4e86\u60a8\u81ea\u5df1\u90e8\u7f72\u548c\u542f\u52a8 Nacos \u670d\u52a1\u4e4b\u5916\uff0c\u5728\u4e91\u8ba1\u7b97\u65f6\u4ee3\uff0cNacos \u4e5f\u652f\u6301\u516c\u6709\u4e91\u6a21\u5f0f\uff0c\u5728\u963f\u91cc\u4e91\u516c\u6709\u4e91\u7684\u5546\u4e1a\u4ea7\u54c1\uff08\u5982",(0,n.kt)("a",{parentName:"p",href:"https://www.aliyun.com/product/acm"},"ACM"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.aliyun.com/product/edas"},"EDAS"),") \u4e2d\u4f1a\u63d0\u4f9b Nacos \u7684\u514d\u8d39\u7684\u516c\u6709\u4e91\u670d\u52a1\u3002\u6211\u4eec\u4e5f\u6b22\u8fce\u548c\u652f\u6301\u5176\u4ed6\u7684\u516c\u6709\u4e91\u63d0\u4f9b\u5546\u63d0\u4f9b Nacos \u7684\u516c\u6709\u4e91\u670d\u52a1\u3002"))}d.isMDXComponent=!0}}]);