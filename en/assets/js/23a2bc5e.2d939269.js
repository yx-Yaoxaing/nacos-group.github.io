"use strict";(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[4012],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=o(r),g=a,k=m["".concat(l,".").concat(g)]||m[g]||d[g]||i;return r?n.createElement(k,c(c({ref:t},p),{},{components:r})):n.createElement(k,c({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,c[1]=s;for(var o=2;o<i;o++)c[o]=r[o];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},51649:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var n=r(87462),a=(r(67294),r(3905));const i={title:"Nacos service discovery performance test report",keywords:["Nacos","service","discovery","performance"],description:"Nacos service discovery performance test report"},c="Nacos service discovery performance test report",s={unversionedId:"nacos-naming-benchmark",id:"version-2.X/nacos-naming-benchmark",title:"Nacos service discovery performance test report",description:"Nacos service discovery performance test report",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.X/nacos-naming-benchmark.md",sourceDirName:".",slug:"/nacos-naming-benchmark",permalink:"/en/docs/nacos-naming-benchmark",draft:!1,tags:[],version:"2.X",frontMatter:{title:"Nacos service discovery performance test report",keywords:["Nacos","service","discovery","performance"],description:"Nacos service discovery performance test report"}},l={},o=[{value:"Test purposes",id:"test-purposes",level:2},{value:"Testing tools",id:"testing-tools",level:2},{value:"Test environment",id:"test-environment",level:2},{value:"1.environment",id:"1environment",level:3},{value:"2.Set the launch parameters",id:"2set-the-launch-parameters",level:3},{value:"Test scenarios",id:"test-scenarios",level:2},{value:"Test data",id:"test-data",level:2},{value:"1. register instance",id:"1-register-instance",level:3},{value:"2. query instance",id:"2-query-instance",level:3},{value:"3. delete instance",id:"3-delete-instance",level:3},{value:"Test results",id:"test-results",level:2}],p={toc:o},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nacos-service-discovery-performance-test-report"},"Nacos service discovery performance test report"),(0,a.kt)("h2",{id:"test-purposes"},"Test purposes"),(0,a.kt)("p",null,"Main understanding Nacos service discovery performance load and capacity, to help us better manage Nacos performance quality, help users use of assessment Nacos system load faster."),(0,a.kt)("h2",{id:"testing-tools"},"Testing tools"),(0,a.kt)("p",null,"We use the research of PAS performance evaluation service platform for pressure measurement, the principle is based on the use of JMeter engine, the use of PAS to automatically generate the JMeter scripts, intelligent pressure measurement."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/tfs/TB1xCfDDpzqK1RjSZFvXXcB7VXa-692-297.png",alt:"IMAGE"})),(0,a.kt)("h2",{id:"test-environment"},"Test environment"),(0,a.kt)("h3",{id:"1environment"},"1.environment"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"indicators"),(0,a.kt)("th",{parentName:"tr",align:null},"parameter"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"machine"),(0,a.kt)("td",{parentName:"tr",align:null},"CPU 16 nuclear, 32G memory")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cluster size"),(0,a.kt)("td",{parentName:"tr",align:null},"3 nodes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Nacos version"),(0,a.kt)("td",{parentName:"tr",align:null},"1.0.0")))),(0,a.kt)("h3",{id:"2set-the-launch-parameters"},"2.Set the launch parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/opt/taobao/java/bin/java    -server\n-Xms20g\n-Xmx20g\n-Xmn10g  -XX:MetaspaceSize=128m\n-XX:MaxMetaspaceSize=320m\n-XX:-OmitStackTraceInFastThrow\n-XX:+HeapDumpOnOutOfMemoryError\n-XX:HeapDumpPath=/home/admin/nacos/logs/java_heapdump.hprof\n-XX:-UseLargePages\n-Djava.ext.dirs=/opt/taobao/java/jre/lib/ext:/opt/taobao/java/lib/ext:/home/admin/nacos/plugi\nns/cmdb:/home/admin/nacos/plugins/mysql  -Xloggc:/home/admin/nacos/logs/nacos_gc.log\n-verbose:gc  -XX:+PrintGCDetails     -XX:+PrintGCDateStamps  -XX:+PrintGCTimeStamps\n-XX:+UseGCLogFileRotation\n-XX:NumberOfGCLogFiles=10    -XX:GCLogFileSize=100M  -Xdebug\n-Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=8000\n-Dnacos.home=/home/admin/nacos   -jar    /home/admin/nacos/target/nacos-server.jar\n--spring.config.location=classpath:/,classpath:/config/,file:./,file:./config/,file:/home/admin/naco\ns/conf/ --logging.config=/home/admin/nacos/conf/nacos-logback.xml   nacos.nacos\n")),(0,a.kt)("h2",{id:"test-scenarios"},"Test scenarios"),(0,a.kt)("p",null,"The following test scenarios are service discovery interface:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Verify Nacos service discovery that the ability to register instance"),(0,a.kt)("li",{parentName:"ul"},"Verify Nacos service discovery that the ability to query instance"),(0,a.kt)("li",{parentName:"ul"},"Verify Nacos service discovery that the ability to delete instance")),(0,a.kt)("h2",{id:"test-data"},"Test data"),(0,a.kt)("h3",{id:"1-register-instance"},"1. register instance"),(0,a.kt)("p",null,"Nacos service discovery registry instance the performance of the interface, call the HTTP interface test.\nThe measured 3 nodes cluster performance under different pressure:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"machine*concurrency num"),(0,a.kt)("th",{parentName:"tr",align:"center"},"service num"),(0,a.kt)("th",{parentName:"tr",align:"center"},"register instance num"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TPS"),(0,a.kt)("th",{parentName:"tr",align:"center"},"RT(ms)"),(0,a.kt)("th",{parentName:"tr",align:"center"},"MIN RT(ms)"),(0,a.kt)("th",{parentName:"tr",align:"center"},"MAX RT(ms)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1*100"),(0,a.kt)("td",{parentName:"tr",align:"center"},"80301"),(0,a.kt)("td",{parentName:"tr",align:"center"},"84965"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1793.41"),(0,a.kt)("td",{parentName:"tr",align:"center"},"54.63"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.8"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1200.86")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"3*50"),(0,a.kt)("td",{parentName:"tr",align:"center"},"529321"),(0,a.kt)("td",{parentName:"tr",align:"center"},"819226"),(0,a.kt)("td",{parentName:"tr",align:"center"},"12574.8"),(0,a.kt)("td",{parentName:"tr",align:"center"},"15.8"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.45"),(0,a.kt)("td",{parentName:"tr",align:"center"},"3499.59")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"4*50"),(0,a.kt)("td",{parentName:"tr",align:"center"},"609726"),(0,a.kt)("td",{parentName:"tr",align:"center"},"836870"),(0,a.kt)("td",{parentName:"tr",align:"center"},"13000"),(0,a.kt)("td",{parentName:"tr",align:"center"},"18.54"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.46"),(0,a.kt)("td",{parentName:"tr",align:"center"},"3038.48")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"4*100"),(0,a.kt)("td",{parentName:"tr",align:"center"},"777262"),(0,a.kt)("td",{parentName:"tr",align:"center"},"927169"),(0,a.kt)("td",{parentName:"tr",align:"center"},"13257"),(0,a.kt)("td",{parentName:"tr",align:"center"},"35.65"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.48"),(0,a.kt)("td",{parentName:"tr",align:"center"},"3231.2")))),(0,a.kt)("h3",{id:"2-query-instance"},"2. query instance"),(0,a.kt)("p",null,"Nacos service discovery query instance of the performance of the interface, call the HTTP interface test.\nThe measured 3 nodes cluster performance under different pressure:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"machine*concurrency num"),(0,a.kt)("th",{parentName:"tr",align:"center"},"service num"),(0,a.kt)("th",{parentName:"tr",align:"center"},"register instance num"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TPS"),(0,a.kt)("th",{parentName:"tr",align:"center"},"RT(ms)"),(0,a.kt)("th",{parentName:"tr",align:"center"},"MIN RT(ms)"),(0,a.kt)("th",{parentName:"tr",align:"center"},"MAX RT(ms)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1*100"),(0,a.kt)("td",{parentName:"tr",align:"center"},"80301"),(0,a.kt)("td",{parentName:"tr",align:"center"},"84965"),(0,a.kt)("td",{parentName:"tr",align:"center"},"3092.16"),(0,a.kt)("td",{parentName:"tr",align:"center"},"30.86"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.81"),(0,a.kt)("td",{parentName:"tr",align:"center"},"509.4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"3*50"),(0,a.kt)("td",{parentName:"tr",align:"center"},"529321"),(0,a.kt)("td",{parentName:"tr",align:"center"},"819226"),(0,a.kt)("td",{parentName:"tr",align:"center"},"12574.8"),(0,a.kt)("td",{parentName:"tr",align:"center"},"15.8"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.45"),(0,a.kt)("td",{parentName:"tr",align:"center"},"3499.59")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"4*50"),(0,a.kt)("td",{parentName:"tr",align:"center"},"609726"),(0,a.kt)("td",{parentName:"tr",align:"center"},"836870"),(0,a.kt)("td",{parentName:"tr",align:"center"},"15603"),(0,a.kt)("td",{parentName:"tr",align:"center"},"16.41"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.42"),(0,a.kt)("td",{parentName:"tr",align:"center"},"3042.17")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"4*100"),(0,a.kt)("td",{parentName:"tr",align:"center"},"777262"),(0,a.kt)("td",{parentName:"tr",align:"center"},"927169"),(0,a.kt)("td",{parentName:"tr",align:"center"},"13604"),(0,a.kt)("td",{parentName:"tr",align:"center"},"34.19"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.43"),(0,a.kt)("td",{parentName:"tr",align:"center"},"3434.1")))),(0,a.kt)("h3",{id:"3-delete-instance"},"3. delete instance"),(0,a.kt)("p",null,"Nacos service discovery delete instance is given to the performance of the interface, call the HTTP interface test.\nThe measured 3 nodes cluster performance under different pressure:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"machine*concurrency num"),(0,a.kt)("th",{parentName:"tr",align:"center"},"service num"),(0,a.kt)("th",{parentName:"tr",align:"center"},"register instance num"),(0,a.kt)("th",{parentName:"tr",align:"center"},"TPS"),(0,a.kt)("th",{parentName:"tr",align:"center"},"RT(ms)"),(0,a.kt)("th",{parentName:"tr",align:"center"},"MIN RT(ms)"),(0,a.kt)("th",{parentName:"tr",align:"center"},"MAX RT(ms)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1*100"),(0,a.kt)("td",{parentName:"tr",align:"center"},"80301"),(0,a.kt)("td",{parentName:"tr",align:"center"},"84965"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1118.95"),(0,a.kt)("td",{parentName:"tr",align:"center"},"14.08"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.7"),(0,a.kt)("td",{parentName:"tr",align:"center"},"597.43")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"3*50"),(0,a.kt)("td",{parentName:"tr",align:"center"},"529321"),(0,a.kt)("td",{parentName:"tr",align:"center"},"819226"),(0,a.kt)("td",{parentName:"tr",align:"center"},"14508.53"),(0,a.kt)("td",{parentName:"tr",align:"center"},"11.23"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.4"),(0,a.kt)("td",{parentName:"tr",align:"center"},"3274.49")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"4*50"),(0,a.kt)("td",{parentName:"tr",align:"center"},"609726"),(0,a.kt)("td",{parentName:"tr",align:"center"},"836870"),(0,a.kt)("td",{parentName:"tr",align:"center"},"15476.93"),(0,a.kt)("td",{parentName:"tr",align:"center"},"16.02"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.38"),(0,a.kt)("td",{parentName:"tr",align:"center"},"3106.23")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"4*100"),(0,a.kt)("td",{parentName:"tr",align:"center"},"777262"),(0,a.kt)("td",{parentName:"tr",align:"center"},"927169"),(0,a.kt)("td",{parentName:"tr",align:"center"},"11940.9"),(0,a.kt)("td",{parentName:"tr",align:"center"},"40.33"),(0,a.kt)("td",{parentName:"tr",align:"center"},"0.42"),(0,a.kt)("td",{parentName:"tr",align:"center"},"51052.46")))),(0,a.kt)("h2",{id:"test-results"},"Test results"),(0,a.kt)("p",null,"Nacos service discovery performance test is aimed at a key function, through the pressure test was carried out on the 3 nodes cluster, can see the interface performance load and capacity."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Service for up to 60w pressure measuring capacity, instance registered number up to 110w, cluster running steadily, the desired;(note: due to the registered instance using the HTTP interface, did not report to the heart of the TPS is included, if you want to support millions of instances of heartbeat report, need expansion and cluster level, and tuning tomcat and kernel parameters)"),(0,a.kt)("li",{parentName:"ol"},"Register the TPS/query instance above 13000, interface to achieve expected;")),(0,a.kt)("p",null,"The tests only temporary instance/query/cancellation of registration, no persistent instance (subsequent);"),(0,a.kt)("p",null,"This test provides you as reference, if there are any deficiency or deviation, please correct me!\nIf you have any other requirements on the performance, can you give us the issue."))}d.isMDXComponent=!0}}]);