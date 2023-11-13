/*! For license information please see d6ad5e62.8bb6ce0e.js.LICENSE.txt */
(self.webpackChunkNacos=self.webpackChunkNacos||[]).push([[8276],{91262:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var i=n(67294),s=n(72389);function l(e){let{children:t,fallback:n}=e;return(0,s.Z)()?i.createElement(i.Fragment,null,t?.()):n??null}},35138:(e,t,n)=>{"use strict";n.d(t,{$Q:()=>m,N$:()=>o,zx:()=>c,$_:()=>E,iR:()=>h});var i=n(67294),s=n(94184),l=n.n(s),r=n(81876);const a={type:"primary",link:"",target:"_self",customStyle:{}},c=function(e){return void 0===e&&(e=a),i.createElement("a",{className:l()({button:!0,[`button-${e.type}`]:!0}),target:e.target||"_self",href:(0,r.Rg)(e.link,e.language),style:e.customStyle},e.children)},o=e=>i.createElement("div",{className:l()({bone:!0,[`bone-${e.type}`]:!0})}),m=e=>{const{text:t,img:n}=e,s=l()({bar:!0});return i.createElement("div",{className:s},i.createElement("div",{className:"bar-body"},i.createElement("img",{src:n,className:"front-img"}),i.createElement("div",{className:"bar-title"},i.createElement("span",null,t),i.createElement(o,{type:"light"})),i.createElement("img",{src:n,className:"back-img"})))};var d=n(73935);class u extends i.Component{constructor(e){super(e),this.container=null,this.state={screenIndex:0,visibleNum:1}}componentDidMount(){this.throttleAdjust=(0,r.P2)((()=>{this.setState({visibleNum:this.getVisibleNum()})}),200),window?.addEventListener?.("resize",this.throttleAdjust),this.setState({visibleNum:this.getVisibleNum()})}componentWillUnmount(){window?.removeEventListener?.("resize",this.throttleAdjust)}getVisibleNum=()=>{let e=3;const t=this.container?.getBoundingClientRect().width,n=this.sliderItemChild0?.getBoundingClientRect?this.sliderItemChild0?.getBoundingClientRect().width:d.findDOMNode(this.sliderItemChild0)?.getBoundingClientRect().width;return t&&n&&(e=Math.floor(t/n)),e||1};getListWidth=()=>{let e=0;const{children:t}=this.props,{visibleNum:n}=this.state,s=i.Children.count(t),l=Math.ceil(s/n);if(this.container){const t=this.container?.getBoundingClientRect().width;e=t*l}return e};changeScreen=e=>{const{screenIndex:t}=this.state;e!==t&&this.setState({screenIndex:e})};renderSliderList=()=>{const{children:e}=this.props,{screenIndex:t,visibleNum:n}=this.state,s=[],l=i.Children.count(e),r=Math.ceil(l/n);for(let i=0;i<r;i++)s.push(Array.from(e).slice(i*n,(i+1)*n));return i.createElement("div",{className:"slider-list",style:{transform:`translateX(-${t*(this.container&&this.container?.getBoundingClientRect().width||0)}px)`,transition:"transform 500ms ease",width:this.getListWidth()}},s.map(((e,t)=>i.createElement("div",{className:"slider-screen",style:{width:this.container&&this.container?.getBoundingClientRect().width||0},key:t,ref:e=>{this[`sliderScreen${t}`]=e}},e.map(((e,s)=>i.createElement("div",{className:"slider-item",key:s},i.cloneElement(e,{ref:e=>{this[`sliderItemChild${t*n+s}`]=e}}))))))))};renderControl=()=>{const{children:e}=this.props,{screenIndex:t,visibleNum:n}=this.state,s=i.Children.count(e),r=Math.ceil(s/n),a=[];for(let c=0;c<r;c++)a.push(i.createElement("span",{key:c,className:l()({"slider-control-item":!0,"slider-control-item-active":c===t}),onClick:this.changeScreen.bind(this,c)}));return i.createElement("div",{className:"slider-control"},a)};render(){return i.createElement("div",{className:"slider",ref:e=>{this.container=e}},this.renderSliderList(),this.renderControl())}}const h=u;i.Component;var g=n(95999),p=n(52263);const f={vision:{title:(0,g.I)({id:"homepage.footerVersionTitle",message:"\u613f\u666f"}),content:(0,g.I)({id:"homepage.footerVersionContent",message:"Nacos \u901a\u8fc7\u63d0\u4f9b\u7b80\u5355\u6613\u7528\u7684\u52a8\u6001\u670d\u52a1\u53d1\u73b0\u3001\u670d\u52a1\u914d\u7f6e\u3001\u670d\u52a1\u5171\u4eab\u4e0e\u7ba1\u7406\u7b49\u670d\u52a1\u57fa\u7840\u8bbe\u65bd\uff0c\u5e2e\u52a9\u7528\u6237\u5728\u4e91\u539f\u751f\u65f6\u4ee3\uff0c\u5728\u79c1\u6709\u4e91\u3001\u6df7\u5408\u4e91\u6216\u8005\u516c\u6709\u4e91\u7b49\u6240\u6709\u4e91\u73af\u5883\u4e2d\uff0c\u66f4\u597d\u7684\u6784\u5efa\u3001\u4ea4\u4ed8\u3001\u7ba1\u7406\u81ea\u5df1\u7684\u5fae\u670d\u52a1\u5e73\u53f0\uff0c\u66f4\u5feb\u7684\u590d\u7528\u548c\u7ec4\u5408\u4e1a\u52a1\u670d\u52a1\uff0c\u66f4\u5feb\u7684\u4ea4\u4ed8\u5546\u4e1a\u521b\u65b0\u7684\u4ef7\u503c\uff0c\u4ece\u800c\u4e3a\u7528\u6237\u8d62\u5f97\u5e02\u573a\u3002"})},documentation:{title:(0,g.I)({id:"homepage.footerDocTitle",message:"\u6587\u6863"}),list:[{text:(0,g.I)({id:"homepage.footerDocListText1",message:"\u6982\u89c8"}),link:"/docs/what-is-nacos",target:""},{text:(0,g.I)({id:"homepage.footerDocListText2",message:"\u5feb\u901f\u5f00\u59cb"}),link:"/docs/quick-start",target:""},{text:(0,g.I)({id:"homepage.footerDocListText3",message:"\u5f00\u53d1\u8005\u6307\u5357"}),link:"/docs/contributing",target:""}]},resources:{title:(0,g.I)({id:"homepage.footerResourcesTitle",message:"\u8d44\u6e90"}),list:[{text:(0,g.I)({id:"homepage.footerResourcesListText1",message:"\u793e\u533a"}),link:"/community",target:""},{text:"\u4e91\u670d\u52a1 MSE",link:"//cn.aliyun.com/product/aliware/mse?spm=nacos-website.topbar.0.0.0",target:"_blank"},{text:"\u4e91\u670d\u52a1 EDAS",link:"//www.aliyun.com/product/edas?source_type=nacos_pc_20181219",target:"_blank"},{text:"\u4e91\u670d\u52a1 AHAS",link:"//www.aliyun.com/product/ahas?source_type=nacos_pc_20190225",target:"_blank"}]},copyright:`Copyright \xa9 ${(new Date).getFullYear()} Nacos`},E=e=>{const{logo:t}=e,{i18n:n}=(0,p.Z)(),s=n.currentLocale;return i.createElement("footer",{className:"footer-container"},i.createElement("div",{className:"footer-body"},i.createElement("img",{src:e.logo}),i.createElement("div",{className:"cols-container"},i.createElement("div",{className:"col col-12"},i.createElement("h3",null,f.vision.title),i.createElement("p",null,f.vision.content)),i.createElement("div",{className:"col col-6"},i.createElement("dl",null,i.createElement("dt",null,f.documentation.title),f.documentation.list.map(((e,t)=>i.createElement("dd",{key:t},i.createElement("a",{href:`/${s}${e.link}`,target:e.target||"_self"},e.text)))))),i.createElement("div",{className:"col col-6"},i.createElement("dl",null,i.createElement("dt",null,f.resources.title),f.resources.list.map(((e,t)=>i.createElement("dd",{key:t},i.createElement("a",{href:`/${s}${e.link}`,target:e.target||"_self"},e.text))))))),i.createElement("div",{className:"copyright"},i.createElement("span",null,f.copyright))))}},32567:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>m});var i=n(67294),s=n(95999),l=n(35138),r=n(91262),a=n(81876);const c={list:[{icon:"img/dynamic_configuration.png",title:(0,s.I)({id:"homepage.functionListTitle1",message:"\u52a8\u6001\u914d\u7f6e\u670d\u52a1"}),content:[(0,s.I)({id:"homepage.functionListContent1",message:"\u52a8\u6001\u914d\u7f6e\u670d\u52a1\u8ba9\u60a8\u80fd\u591f\u4ee5\u4e2d\u5fc3\u5316\u3001\u5916\u90e8\u5316\u548c\u52a8\u6001\u5316\u7684\u65b9\u5f0f\u7ba1\u7406\u6240\u6709\u73af\u5883\u7684\u914d\u7f6e\u3002\u52a8\u6001\u914d\u7f6e\u6d88\u9664\u4e86\u914d\u7f6e\u53d8\u66f4\u65f6\u91cd\u65b0\u90e8\u7f72\u5e94\u7528\u548c\u670d\u52a1\u7684\u9700\u8981\u3002\u914d\u7f6e\u4e2d\u5fc3\u5316\u7ba1\u7406\u8ba9\u5b9e\u73b0\u65e0\u72b6\u6001\u670d\u52a1\u66f4\u7b80\u5355\uff0c\u4e5f\u8ba9\u6309\u9700\u5f39\u6027\u6269\u5c55\u670d\u52a1\u66f4\u5bb9\u6613\u3002"})]},{icon:"img/service_discovery.png",title:(0,s.I)({id:"homepage.functionListTitle2",message:"\u670d\u52a1\u53d1\u73b0\u53ca\u7ba1\u7406"}),content:[(0,s.I)({id:"homepage.functionListContent2",message:"\u52a8\u6001\u670d\u52a1\u53d1\u73b0\u5bf9\u4ee5\u670d\u52a1\u4e3a\u4e2d\u5fc3\u7684\uff08\u4f8b\u5982\u5fae\u670d\u52a1\u548c\u4e91\u539f\u751f\uff09\u5e94\u7528\u67b6\u6784\u65b9\u5f0f\u975e\u5e38\u5173\u952e\u3002Nacos\u652f\u6301DNS-Based\u548cRPC-Based\uff08Dubbo\u3001gRPC\uff09\u6a21\u5f0f\u7684\u670d\u52a1\u53d1\u73b0\u3002Nacos\u4e5f\u63d0\u4f9b\u5b9e\u65f6\u5065\u5eb7\u68c0\u67e5\uff0c\u4ee5\u9632\u6b62\u5c06\u8bf7\u6c42\u53d1\u5f80\u4e0d\u5065\u5eb7\u7684\u4e3b\u673a\u6216\u670d\u52a1\u5b9e\u4f8b\u3002\u501f\u52a9Nacos\uff0c\u60a8\u53ef\u4ee5\u66f4\u5bb9\u6613\u5730\u4e3a\u60a8\u7684\u670d\u52a1\u5b9e\u73b0\u65ad\u8def\u5668\u3002"})]},{icon:"img/dynamic_DNS.png",title:(0,s.I)({id:"homepage.functionListTitle3",message:"\u52a8\u6001DNS\u670d\u52a1"}),content:(0,s.I)({id:"homepage.functionListContent3",message:"\u901a\u8fc7\u652f\u6301\u6743\u91cd\u8def\u7531\uff0c\u52a8\u6001DNS\u670d\u52a1\u80fd\u8ba9\u60a8\u8f7b\u677e\u5b9e\u73b0\u4e2d\u95f4\u5c42\u8d1f\u8f7d\u5747\u8861\u3001\u66f4\u7075\u6d3b\u7684\u8def\u7531\u7b56\u7565\u3001\u6d41\u91cf\u63a7\u5236\u4ee5\u53ca\u7b80\u5355\u6570\u636e\u4e2d\u5fc3\u5185\u7f51\u7684\u7b80\u5355DNS\u89e3\u6790\u670d\u52a1\u3002\u52a8\u6001DNS\u670d\u52a1\u8fd8\u80fd\u8ba9\u60a8\u66f4\u5bb9\u6613\u5730\u5b9e\u73b0\u4ee5DNS\u534f\u8bae\u4e3a\u57fa\u7840\u7684\u670d\u52a1\u53d1\u73b0\uff0c\u4ee5\u6d88\u9664\u8026\u5408\u5230\u5382\u5546\u79c1\u6709\u670d\u52a1\u53d1\u73b0API\u4e0a\u7684\u98ce\u9669\u3002"})}],title:(0,s.I)({id:"homepage.functionTitle",message:"\u529f\u80fd"})},o=e=>{const{func:t,imgFirst:n}=e;return n?i.createElement(r.Z,null,(()=>i.createElement("div",{className:"func-item"},i.createElement("div",{className:"col img"},i.createElement("img",{src:(0,a.Rg)(t.icon)})),i.createElement("div",{className:"col"},i.createElement("div",{className:"vertical-middle"},i.createElement("h4",null,t.title),i.createElement("p",null,t.content)))))):i.createElement(r.Z,null,(()=>i.createElement("div",{className:"func-item"},i.createElement("div",{className:"col"},i.createElement("div",{className:"vertical-middle"},i.createElement("h4",null,t.title),i.createElement("p",null,t.content))),i.createElement("div",{className:"col img"},i.createElement("img",{src:(0,a.Rg)(t.icon)})))))},m=()=>i.createElement(r.Z,null,(()=>i.createElement("section",{className:"function-section"},i.createElement("h3",null,c.title),i.createElement(l.N$,{type:"dark"}),i.createElement("div",null,c.list.map(((e,t)=>i.createElement(o,{func:e,key:t})))))))},81876:(e,t,n)=>{"use strict";n.d(t,{P2:()=>i,Rg:()=>s});const i=(e,t)=>{let n=null;return function(){for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];const r=this;clearTimeout(n),n=setTimeout((()=>{e.apply(r,s)}),t)}},s=(e,t)=>`${e}`.length>1&&/^\/[^/]/.test(`${e}`)?void 0===t?`${window.rootPath||""}${"default"===t?"/zh-cn":""}${e}`:`${window.rootPath||""}${"default"===t?"/zh-cn":`/${t}`}${e}`:e},94184:(e,t)=>{var n;!function(){"use strict";var i={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var r=s.apply(null,n);r&&e.push(r)}}else if("object"===l){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)i.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()}}]);