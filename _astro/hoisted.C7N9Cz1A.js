var s;import"./hoisted.D9nzyrak.js";import"./hoisted.BUpSmjDO.js";import"./Tabs.astro_astro_type_script_index_0_lang.BqK4QFew.js";import"./index.DImtQWSj.js";const o=(s=window==null?void 0:window.location)==null?void 0:s.pathname,i=t=>{const{type:n}=t;setTimeout(function(){var e;if(window.aes&&window.AESPluginEvent){const a=window==null?void 0:window.aes.use(window.AESPluginEvent),c={TRACK_404:"TRACK_404"};console.log("-------"),a(c.TRACK_404,{c1:(e=window==null?void 0:window.location)==null?void 0:e.pathname,c2:n})}},1e3)};if(o==="/en"&&(window.location.pathname="/en/"),o.slice(-1)!=="/"&&(window.location.pathname+="/"),o.includes("docs"))if(/\/docs\/(latest|ebook|next|v[0-9]\.[0-9]\.[0-9]|v[0-9]\.[0-9]|v[0-9]|[0-9]\.[0-9]\.[0-9]|[0-9]\.[0-9]|[0-9])\/.+/.exec(o))i({type:"docs"});else{const[t,n]=o.split("/docs");t==="/en"?window.location.pathname="/en/docs/latest"+n:window.location.pathname="/docs/latest"+n}else i({type:"others"});