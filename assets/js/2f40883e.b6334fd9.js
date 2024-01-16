/*! For license information please see 2f40883e.b6334fd9.js.LICENSE.txt */
(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[7613,8681,3922],{1262:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var s=i(7294),n=i(2389);function l(e){let{children:t,fallback:i}=e;return(0,n.Z)()?s.createElement(s.Fragment,null,t?.()):i??null}},5138:(e,t,i)=>{"use strict";i.d(t,{$Q:()=>m,N$:()=>o,zx:()=>c,$_:()=>x,iR:()=>p});var s=i(7294),n=i(4184),l=i.n(n),a=i(1876);const r={type:"primary",link:"",target:"_self",customStyle:{}},c=function(e){return void 0===e&&(e=r),s.createElement("a",{className:l()({button:!0,[`button-${e.type}`]:!0}),target:e.target||"_self",href:(0,a.Rg)(e.link,e.language),style:e.customStyle},e.children)},o=e=>s.createElement("div",{className:l()({bone:!0,[`bone-${e.type}`]:!0})}),m=e=>{const{text:t,img:i}=e,n=l()({bar:!0});return s.createElement("div",{className:n},s.createElement("div",{className:"bar-body"},s.createElement("img",{src:i,className:"front-img"}),s.createElement("div",{className:"bar-title"},s.createElement("span",null,t),s.createElement(o,{type:"light"})),s.createElement("img",{src:i,className:"back-img"})))};var d=i(3935);class u extends s.Component{constructor(e){super(e),this.container=null,this.state={screenIndex:0,visibleNum:1}}componentDidMount(){this.throttleAdjust=(0,a.P2)((()=>{this.setState({visibleNum:this.getVisibleNum()})}),200),window?.addEventListener?.("resize",this.throttleAdjust),this.setState({visibleNum:this.getVisibleNum()})}componentWillUnmount(){window?.removeEventListener?.("resize",this.throttleAdjust)}getVisibleNum=()=>{let e=3;const t=this.container?.getBoundingClientRect().width,i=this.sliderItemChild0?.getBoundingClientRect?this.sliderItemChild0?.getBoundingClientRect().width:d.findDOMNode(this.sliderItemChild0)?.getBoundingClientRect().width;return t&&i&&(e=Math.floor(t/i)),e||1};getListWidth=()=>{let e=0;const{children:t}=this.props,{visibleNum:i}=this.state,n=s.Children.count(t),l=Math.ceil(n/i);if(this.container){const t=this.container?.getBoundingClientRect().width;e=t*l}return e};changeScreen=e=>{const{screenIndex:t}=this.state;e!==t&&this.setState({screenIndex:e})};renderSliderList=()=>{const{children:e}=this.props,{screenIndex:t,visibleNum:i}=this.state,n=[],l=s.Children.count(e),a=Math.ceil(l/i);for(let s=0;s<a;s++)n.push(Array.from(e).slice(s*i,(s+1)*i));return s.createElement("div",{className:"slider-list",style:{transform:`translateX(-${t*(this.container&&this.container?.getBoundingClientRect().width||0)}px)`,transition:"transform 500ms ease",width:this.getListWidth()}},n.map(((e,t)=>s.createElement("div",{className:"slider-screen",style:{width:this.container&&this.container?.getBoundingClientRect().width||0},key:t,ref:e=>{this[`sliderScreen${t}`]=e}},e.map(((e,n)=>s.createElement("div",{className:"slider-item",key:n},s.cloneElement(e,{ref:e=>{this[`sliderItemChild${t*i+n}`]=e}}))))))))};renderControl=()=>{const{children:e}=this.props,{screenIndex:t,visibleNum:i}=this.state,n=s.Children.count(e),a=Math.ceil(n/i),r=[];for(let c=0;c<a;c++)r.push(s.createElement("span",{key:c,className:l()({"slider-control-item":!0,"slider-control-item-active":c===t}),onClick:this.changeScreen.bind(this,c)}));return s.createElement("div",{className:"slider-control"},r)};render(){return s.createElement("div",{className:"slider",ref:e=>{this.container=e}},this.renderSliderList(),this.renderControl())}}const p=u;s.Component;var g=i(5999),h=i(2263);const f={vision:{title:(0,g.I)({id:"homepage.footerVersionTitle",message:"\u613f\u666f"}),content:(0,g.I)({id:"homepage.footerVersionContent",message:"Nacos \u901a\u8fc7\u63d0\u4f9b\u7b80\u5355\u6613\u7528\u7684\u52a8\u6001\u670d\u52a1\u53d1\u73b0\u3001\u670d\u52a1\u914d\u7f6e\u3001\u670d\u52a1\u5171\u4eab\u4e0e\u7ba1\u7406\u7b49\u670d\u52a1\u57fa\u7840\u8bbe\u65bd\uff0c\u5e2e\u52a9\u7528\u6237\u5728\u4e91\u539f\u751f\u65f6\u4ee3\uff0c\u5728\u79c1\u6709\u4e91\u3001\u6df7\u5408\u4e91\u6216\u8005\u516c\u6709\u4e91\u7b49\u6240\u6709\u4e91\u73af\u5883\u4e2d\uff0c\u66f4\u597d\u7684\u6784\u5efa\u3001\u4ea4\u4ed8\u3001\u7ba1\u7406\u81ea\u5df1\u7684\u5fae\u670d\u52a1\u5e73\u53f0\uff0c\u66f4\u5feb\u7684\u590d\u7528\u548c\u7ec4\u5408\u4e1a\u52a1\u670d\u52a1\uff0c\u66f4\u5feb\u7684\u4ea4\u4ed8\u5546\u4e1a\u521b\u65b0\u7684\u4ef7\u503c\uff0c\u4ece\u800c\u4e3a\u7528\u6237\u8d62\u5f97\u5e02\u573a\u3002"})},documentation:{title:(0,g.I)({id:"homepage.footerDocTitle",message:"\u6587\u6863"}),list:[{text:(0,g.I)({id:"homepage.footerDocListText1",message:"\u6982\u89c8"}),link:"/docs/what-is-nacos",target:""},{text:(0,g.I)({id:"homepage.footerDocListText2",message:"\u5feb\u901f\u5f00\u59cb"}),link:"/docs/quickstart/quick-start",target:""},{text:(0,g.I)({id:"homepage.footerDocListText3",message:"\u5f00\u53d1\u8005\u6307\u5357"}),link:"/docs/contribution/contributing",target:""}]},resources:{title:(0,g.I)({id:"homepage.footerResourcesTitle",message:"\u8d44\u6e90"}),list:[{text:(0,g.I)({id:"homepage.footerResourcesListText1",message:"\u793e\u533a"}),link:"/community",target:""},{text:(0,g.I)({id:"homepage.footerResourcesListText2",message:"\u4e91\u670d\u52a1 MSE"}),link:"https://cn.aliyun.com/product/aliware/mse?from_alibabacloud=&spm=nacos.io.topbar.0.0.0",target:"_blank"},{text:(0,g.I)({id:"homepage.footerResourcesListText3",message:"\u4e91\u670d\u52a1 EDAS"}),link:"https://cn.aliyun.com/product/edas?from_alibabacloud=&source_type=nacos_pc_20181219",target:"_blank"},{text:(0,g.I)({id:"homepage.footerResourcesListText4",message:"\u4e91\u670d\u52a1 AHAS"}),link:"https://www.aliyun.com/product/ahas?source_type=nacos_pc_20190225",target:"_blank"}]},copyright:`Copyright \xa9 ${(new Date).getFullYear()} Nacos`},x=e=>{const{logo:t}=e,{i18n:i}=(0,h.Z)(),n=i.currentLocale;return s.createElement("footer",{className:"footer-container"},s.createElement("div",{className:"footer-body"},s.createElement("img",{style:{marginTop:"4px",maxWidth:"120px",height:"auto"},src:t}),s.createElement("div",{className:"cols-container"},s.createElement("div",{className:"col col-12"},s.createElement("h3",null,f.vision.title),s.createElement("p",null,f.vision.content)),s.createElement("div",{className:"col col-6"},s.createElement("dl",null,s.createElement("dt",null,f.documentation.title),f.documentation.list.map(((e,t)=>s.createElement("dd",{key:t},"http"===e.link?.substr(0,4)&&s.createElement("a",{href:e.link,target:e.target||"_self"},e.text),"http"!==e.link?.substr(0,4)&&s.createElement("a",{href:`/${n}${e.link}`,target:e.target||"_self"},e.text)))))),s.createElement("div",{className:"col col-6"},s.createElement("dl",null,s.createElement("dt",null,f.resources.title),f.resources.list.map(((e,t)=>s.createElement("dd",{key:t},"http"===e.link?.substr(0,4)&&s.createElement("a",{href:e.link,target:e.target||"_self"},e.text),"http"!==e.link?.substr(0,4)&&s.createElement("a",{href:`/${n}${e.link}`,target:e.target||"_self"},e.text))))))),s.createElement("div",{className:"copyright"},s.createElement("span",null,f.copyright))))}},4078:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>d});var s=i(7294),n=i(5999),l=i(1262),a=i(5138),r=i(4996),c=i(7340),o=i(9786),m=i(1701);(0,n.I)({id:"community.barText",message:"\u793e\u533a"}),(0,n.I)({id:"community.eventsTitle",message:"\u4e8b\u4ef6 & \u65b0\u95fb22222"}),(0,n.I)({id:"community.contactsTitle",message:"\u8054\u7cfb\u6211\u4eec"}),(0,n.I)({id:"community.contactsDesc",message:"\u6709\u95ee\u9898\u9700\u8981\u53cd\u9988\uff1f\u53ef\u4ee5\u4f18\u5148\u901a\u8fc7\u9489\u9489\u7fa4(1\u7fa4\u5df2\u6ee1\uff0c2\u7fa4\u7fa4\u53f7:30438813)\u8054\u7cfb\u6211\u4eec\uff0c\u6216\u8005\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u53c2\u4e0e\u6211\u4eec\u4e00\u8d77\u4e92\u52a8\u3002"}),(0,n.I)({id:"community.contributeTitle",message:"\u8d21\u732e\u6307\u5357"}),(0,n.I)({id:"community.contributeDesc",message:"Nacos\u793e\u533a\u6b22\u8fce\u4efb\u4f55\u5f62\u5f0f\u7684\u8d21\u732e\u3002"}),(0,n.I)({id:"community.dubboTitle",message:"\u5f00\u6e90\u751f\u6001\u76f8\u5173"});function d(){return s.createElement(l.Z,null,(()=>s.createElement(c.Z,{title:"Nacos",description:"Nacos Community"},s.createElement("div",{className:"community-page"},s.createElement(o.default,null),s.createElement(m.default,null),s.createElement(a.$_,{logo:(0,r.Z)("/img/nacos_gray.png")})))))}},9786:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>c});var s=i(7294),n=i(5138),l=i(4996),a=i(1262);const r={brandName:"Nacos",title:"Nacos Cloud",desc:"\u8fd9\u91cc\u662f\u5360\u4f4d\u6587\u5b57\u8fd9\u91cc\u662f\u5360\u4f4d\u6587\u5b57\u8fd9\u91cc\u662f\u5360\u4f4d\u6587\u5b57\u8fd9\u91cc\u662f\u5360\u4f4d\u6587\u5b57\u8fd9\u91cc\u662f\u5360\u4f4d\u6587\u5b57\u8fd9\u91cc\u662f\u5360\u4f4d\u6587\u5b57",cardList:[{title:"\u514d\u8d39\u8bd5\u7528",price:"FREE",unit:"",desc:"\u514d\u8d39\u6d4b\u8bd5\u548c\u4f53\u9a8c",linkName:"\u70b9\u51fb\u8bd5\u7528",link:"https://free.aliyun.com/?searchKey=nacos&spm=nacos.cloud.topbar.0.0.0",feature:["\u672a\u8d2d\u4e70\u5546\u4e1a\u7248\u7684\u7528\u6237\u53ef\u9886\u53d6\u514d\u8d39\u8bd5\u7528","\u5f00\u53d1\u72481C2G\uff0c1\u4e2a\u6708"]},{title:"\u5f00\u53d1\u7248",price:"47.2\u5143",unit:"/\u6708\u8d77",desc:"\u7528\u4e8e\u5f00\u53d1\u73af\u5883",linkName:"\u70b9\u51fb\u8ba2\u9605",link:"https://www.aliyun.com/product/aliware/mse?spm=nacos.cloud.topbar.0.0.0",feature:["\u6708\u53056\u6298\uff0c\u5e74\u53054\u6298\uff0c\u7eed\u8d39\u4e0d\u6da8\u4ef7","1C2G\uff0c1\u4e2a\u6708"]},{title:"\u751f\u4ea7 - Serverless \u5b9e\u4f8b",price:"0.16\u5143",unit:"/\u5c0f\u65f6",desc:"\u6d41\u91cf\u6ce2\u52a8\u5927\u3001\u4e2d\u5c0f\u6d41\u91cf\u7b49\u573a\u666f\uff0c\u6210\u672c\u66f4\u4f4e",linkName:"\u70b9\u51fb\u8ba2\u9605",link:"https://www.aliyun.com/product/aliware/mse?spm=nacos.cloud.topbar.0.0.0",feature:["\u6309\u8fde\u63a5\u6570\u6536\u8d39","<=10\u4e2a\u8fde\u63a5\u6570"]},{title:"\u751f\u4ea7 - \u666e\u901a\u5b9e\u4f8b",price:"348.6\u5143",unit:"/\u6708\u8d77",desc:"3\u8282\u70b9\u914d\u7f6e\uff0c\u53ef\u7528\u6027\u9ad8",linkName:"\u70b9\u51fb\u8ba2\u9605",link:"https://www.aliyun.com/product/aliware/mse?spm=nacos.cloud.topbar.0.0.0",feature:["\u6309\u5b9e\u4f8b\u5b50\u89c4\u683c\u6536\u8d39","1C2G\uff0c1\u4e2a\u6708"]}]},c=e=>{let{language:t}=e;return s.createElement(a.Z,null,(()=>s.createElement("section",{className:"bg-gradient-to-b from-white to-blue-400",style:{background:"repeating-linear-gradient(to top, #60a5fa, #ffffff)"}},s.createElement("div",{className:"mb-8"},s.createElement("p",{className:"pt-16 pb-16 text-center text-5xl text-[#4190FF] font-semibold"},r.title)),s.createElement("div",{className:"flex justify-center flex-wrap text-center0 pb-8"},r?.cardList?.map(((e,t)=>s.createElement("div",{key:t,className:"bg-white rounded-[6px] w-80 h-96 mr-4 mb-4 text-center p-8",style:{boxShadow:"0 -2px 4px 0 rgba(0,0,0,0.06), 0 2px 4px 0 rgba(0,0,0,0.06)"}},s.createElement("div",{className:"text-[#000] text-base font-[PingFangSC] font-medium"},e?.title),s.createElement("div",{className:"mt-[24px] text-[#000] text-5xl font-[DINAlternate-Bold]"},e?.price,e?.unit&&s.createElement("span",{className:"text-xl ml-1.5"},e?.unit)),s.createElement("div",{className:"mt-[24px]"},s.createElement(n.zx,{customStyle:{width:"100%",height:"40px",lineHeight:"40px"},type:e?.unit?"secondary":"free",link:e?.link,target:"_blank"},e?.linkName)),s.createElement("div",{className:"my-2 text-[#626262] text-xs"},e?.desc),e?.feature?.map(((e,t)=>s.createElement("div",{key:t,className:"text-left text-xs border-t border-[#979797] leading-9 text-[#000]",style:{borderTop:"1px solid #979797"}},s.createElement("img",{src:(0,l.Z)("/img/success.png"),style:{width:"13px",display:"inline-block",marginRight:"10px"}}),e))))))))))}},1701:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>a});var s=i(7294),n=i(1262);const l={brandName:"Nacos",title:"\u8c01\u5728\u4f7f\u7528Nacos Cloud",userList:[{title:"Soul",imgUrl:"https://img.alicdn.com/imgextra/i1/O1CN01INuvZ91MkDp3A3PgC_!!6000000001472-2-tps-160-130.png",description:"\u6211\u4eec\u901a\u8fc7 MSE \u4e91\u539f\u751f\u7f51\u5173\uff0c\u5c06\u6d41\u91cf\u3001\u5b89\u5168\u3001\u5fae\u670d\u52a1\u7f51\u5173\u4e09\u5408\u4e00\uff0c\u5927\u5e45\u964d\u4f4e\u8bf7\u6c42\u94fe\u8def\u6761\u6570\u3001\u964d\u4f4e\u67b6\u6784\u590d\u6742\u5ea6\u3001\u8fd0\u7ef4\u548c\u6545\u969c\u6392\u67e5\u6210\u672c\uff0c\u4f8b\u5982\u964d\u4f4e\u6574\u4e2a\u94fe\u8def RT \u5cf0\u503c\u4ece500ms\u4e0b\u964d\u81f3\u5cf0\u503c50ms\uff0c\u670d\u52a1\u53d1\u5e03\u671f\u95f4502\u964d\u4e3a0\uff0c499\u5e73\u5747\u964d\u4f4e10%\u7b49\u3002"},{title:"\u6765\u7535\u79d1\u6280",imgUrl:"https://img.alicdn.com/imgextra/i1/O1CN01tHBkdK1Jr8xSoM5k3_!!6000000001081-2-tps-160-130.png",description:"MSE \u5fae\u670d\u52a1\u6cbb\u7406\u4ee5\u65e0\u4fb5\u5165\u7684\u65b9\u5f0f\u63d0\u4f9b\u4e86\u5168\u94fe\u8def\u7070\u5ea6\u3001\u79bb\u7fa4\u5b9e\u4f8b\u6458\u9664\u3001\u5fae\u670d\u52a1\u6cbb\u7406\u6d41\u91cf\u53ef\u89c2\u6d4b\u7b49\u6838\u5fc3\u80fd\u529b\uff0c\u4ee5\u66f4\u7ecf\u6d4e\u7684\u65b9\u5f0f\u3001\u66f4\u9ad8\u6548\u7684\u8def\u5f84\u5e2e\u52a9\u6765\u7535\u79d1\u6280\u5728\u4e91\u4e0a\u5feb\u901f\u6784\u5efa\u8d77\u5b8c\u6574\u5fae\u670d\u52a1\u6cbb\u7406\u4f53\u7cfb\uff0c\u6709\u6548\u63d0\u5347\u7ebf\u4e0a\u7a33\u5b9a\u6027\uff0c\u4fdd\u8bc1\u670d\u52a1 99.95% \u7684\u53ef\u7528\u6027\u3002"},{title:"\u6781\u6c2a\u6c7d\u8f66",imgUrl:"https://img.alicdn.com/imgextra/i3/O1CN01tDMkkN1amsk54SPnX_!!6000000003373-0-tps-160-130.jpg",description:"MSE \u4e91\u539f\u751f\u7f51\u5173\u5e2e\u6211\u4eec\u964d\u4f4e 50%\u8d44\u6e90\u6210\u672c\uff0c\u540c\u65f6\u7f29\u77ed\u4e86\u8bf7\u6c42\u65f6\u95f4\uff0c\u964d\u4f4e\u8fd0\u7ef4\u590d\u6742\u5ea6\uff1b\u5fae\u670d\u52a1\u6cbb\u7406\u4e2d\u7684\u5168\u94fe\u8def\u7070\u5ea6\u65b9\u6848\u5b9e\u73b0\u201c\u6d41\u91cf\u6cf3\u9053\u201d\uff0c\u505a\u5230\u5feb\u901f\u62c9\u8d77\u9694\u79bb\u7684\u5f00\u53d1\u73af\u5883\uff0c\u5728\u63d0\u5347\u7814\u53d1\u6548\u7387\u7684\u540c\u65f6\u8282\u7701\u4e86\u4e00\u7b14\u4e0d\u83f2\u7684\u6210\u672c\u5f00\u9500\u3002"},{title:"\u4e91\u5feb\u5145",imgUrl:"https://img.alicdn.com/imgextra/i2/O1CN01Mzl4VB1Ws8pUrwH0z_!!6000000002843-0-tps-160-130.jpg",description:"\u4e8e MSE \u5168\u94fe\u8def\u7070\u5ea6\uff0c\u6211\u4eec\u5f97\u5230\u7684\u6536\u76ca\u662f\u5f88\u660e\u663e\u7684\uff0c\u56e0\u5e94\u7528\u53d8\u66f4\u5bfc\u81f4\u7684\u751f\u4ea7\u4e8b\u6545\u964d\u4f4e\u4e8670%\u4ee5\u4e0a\uff0c\u4e91\u5feb\u5145\u63a5\u5165\u7684\u7535\u6869\u6570\u91cf\u5b8c\u6210\u4e8620\u4e07\u523030\u4e07\u7684\u589e\u957f\u8fc7\u7a0b\u4e2d\uff0c\u5e73\u5747\u9700\u6c42\u8fed\u4ee3\u5468\u671f\u4ece7\u4eba\u65e5\u964d\u4f4e\u52304\u4eba\u65e5\uff0c\u6781\u5927\u5730\u4fc3\u8fdb\u4e86\u4e1a\u52a1\u7684\u5feb\u901f\u8fed\u4ee3\u3002"},{title:"\u6ce2\u53f8\u767b",imgUrl:"https://img.alicdn.com/imgextra/i2/O1CN01i6SiyH1UNKxHduaQX_!!6000000002505-0-tps-160-130.jpg",description:"\u6211\u4eec\u57fa\u4e8e ACK + MSE + ARMS + Prometheus \u652f\u6491\u4e86\u5728\u7ebf\u4e1a\u52a1\u767e\u4e07\u7ea7\u5e76\u53d1\u5927\u6d41\u91cf\uff0c\u5e76\u5e2e\u52a9\u4e1a\u52a1\u8fed\u4ee3\u6548\u7387\u63d0\u53472\u500d\uff0c\u56e0\u5e94\u7528\u53d8\u66f4\u5bfc\u81f4\u7684\u751f\u4ea7\u4e8b\u6545\u4e5f\u964d\u4f4e\u4e8670%\u3002"},{title:"\u65af\u51ef\u5947",imgUrl:"https://img.alicdn.com/imgextra/i2/O1CN01UI125w1wj93QttPIH_!!6000000006343-2-tps-160-130.png",description:"\u76f8\u6bd4\u81ea\u5efa API \u7f51\u5173\uff0cMSE \u4e91\u539f\u751f\u7f51\u5173\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u7edf\u4e00\u7684\u5fae\u670d\u52a1\u8def\u7531\u3001\u6d41\u63a7\u3001\u5b89\u5168\u7ba1\u7406\u7b49\u80fd\u529b\uff0c\u65b9\u4fbf\u5185\u5916\u90e8\u591a\u7cfb\u7edf\u95f4\u7684\u96c6\u6210\uff0c\u5728\u5f00\u53d1\u8fd0\u7ef4\u6548\u7387\u3001\u6027\u80fd\u3001\u5b89\u5168\u6027\u4e0a\u8868\u73b0\u66f4\u52a0\u4f18\u5f02\u3002"},{title:"\u8d39\u82ae\u4e92\u52a8",imgUrl:"https://img.alicdn.com/imgextra/i1/O1CN01hVqd3K1brkZ3yNd2E_!!6000000003519-2-tps-160-130.png",description:"\u6211\u4eec\u901a\u8fc7 MSE \u4e91\u539f\u751f\u7f51\u5173\u6784\u5efa\u4e86\u96f6\u4fe1\u4efb\u67b6\u6784\uff0c\u65e0\u9700\u91cd\u914d Nginx Ingress \u89c4\u5219\u5373\u53ef\u5e73\u6ed1\u8fc1\u79fb\uff0c\u6027\u80fd\u63d0\u5347 90%\uff0c\u54cd\u5e94\u65f6\u95f4\u4e0b\u964d 50% \uff0c\u5e76\u5927\u5e45\u63d0\u5347\u4e1a\u52a1\u5165\u53e3\u7684\u7a33\u5b9a\u53ca\u5b89\u5168\u6027\uff0c\u9ad8\u6548\u652f\u6491\u6bcf\u65e5 1 \u4ebf+\u7c89\u4e1d\u4ea4\u4e92\uff0c 4 \u4e07+\u7ebf\u4e0b\u95e8\u5e97\u3001\u6bcf\u6708 3000 \u4e07+\u7b14\u7684\u79fb\u52a8\u652f\u4ed8\u9700\u6c42\u3002"},{title:"\u81f4\u666f\u79d1\u6280",imgUrl:"https://img.alicdn.com/imgextra/i1/O1CN01CofhSr1sqh6P9CuXl_!!6000000005818-2-tps-544-180.png",description:"\u6211\u4eec\u672a\u4fee\u6539\u4efb\u4f55\u4ee3\u7801\u5c31\u63a5\u5165\u4e86 MSE \u7684\u5fae\u670d\u52a1\u6cbb\u7406\u6240\u6709\u80fd\u529b\u3002\u57fa\u4e8e\u5f00\u53d1\u73af\u5883\u9694\u79bb\u80fd\u529b\uff0c\u6d4b\u8bd5\u73af\u5883\u7684\u6784\u5efa\u65f6\u95f4\u7531\u5929\u8ba1\u7b97\u964d\u4f4e\u5230\u5206\u949f\u7ea7\u522b\uff0c\u5fae\u670d\u52a1\u7684\u5b9e\u65bd\u5468\u671f\u7f29\u77ed\u4e86 30%\uff0c\u52a0\u901f\u6784\u5efa\u7eba\u7ec7\u670d\u88c5\u7eb5\u5411\u4e00\u4f53\u5316\u7684\u6570\u667a\u5316\u7efc\u5408\u670d\u52a1\u5e73\u53f0\u3002"},{title:"\u79be\u8fde\u5065\u5eb7",imgUrl:"https://img.alicdn.com/imgextra/i2/O1CN01NBuTFc1iK2gpy6k8f_!!6000000004393-2-tps-544-180.png",description:"\u76f8\u6bd4\u4e8e\u81ea\u5efa\uff0c MSE \u6ce8\u518c\u914d\u7f6e\u4e2d\u5fc3\u5e2e\u52a9\u6211\u4eec\u5b9e\u73b0\u4e86\u6027\u80fd\u63d0\u5347\u8fbe 50%\uff0c\u89e3\u51b3\u4e86\u4e1a\u52a1\u9ad8\u901f\u53d1\u5c55\u4e2d\u7684\u6269\u5c55\u6027\u95ee\u9898\uff0c\u4fdd\u969c\u5168\u56fd 200 \u591a\u4e2a\u57ce\u5e02\u30012000 \u591a\u5bb6\u533b\u9662\u4f53\u9a8c\u4e1a\u52a1\u7684\u7a33\u5b9a\u6027\u8d85 99.99%\u3002"}]},a=e=>{let{language:t}=e;return s.createElement(n.Z,null,(()=>s.createElement("section",{className:"bg-blue-100"},s.createElement("div",null,s.createElement("p",{className:"pt-16 pb-16 text-center text-4xl text-[#4190FF] font-semibold"},l.title)),s.createElement("div",{className:"flex content-start flex-wrap pb-16"},l.userList.map((e=>s.createElement("div",{className:"box-border flex-[0_0_33%] h-48 mb-8"},s.createElement("div",{className:"flex w-11/12 m-4 h-full text-center justify-center items-center bg-white p-3 rounded-[6px]"},s.createElement("div",{className:"h-full flex items-center"},s.createElement("div",{className:"inline-block w-4/12 h-full ml-2"},s.createElement("img",{src:e.imgUrl,className:"w-20"})),s.createElement("div",{className:"inline-block w-8/12 h-full text-left"},s.createElement("p",{className:"text-lg font-medium"},e.title),s.createElement("span",{className:"inline-block text-xs pt-2 leading-5"},e.description)))))))))))}},1876:(e,t,i)=>{"use strict";i.d(t,{P2:()=>s,Rg:()=>n});const s=(e,t)=>{let i=null;return function(){for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];const a=this;clearTimeout(i),i=setTimeout((()=>{e.apply(a,n)}),t)}},n=(e,t)=>`${e}`.length>1&&/^\/[^/]/.test(`${e}`)?void 0===t?`${window.rootPath||""}${"default"===t?"/zh-cn":""}${e}`:`${window.rootPath||""}${"default"===t?"/zh-cn":`/${t}`}${e}`:e},4184:(e,t)=>{var i;!function(){"use strict";var s={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var l=typeof i;if("string"===l||"number"===l)e.push(i);else if(Array.isArray(i)){if(i.length){var a=n.apply(null,i);a&&e.push(a)}}else if("object"===l){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){e.push(i.toString());continue}for(var r in i)s.call(i,r)&&i[r]&&e.push(r)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(i=function(){return n}.apply(t,[]))||(e.exports=i)}()}}]);