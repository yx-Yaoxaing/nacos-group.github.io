import"./hoisted.DdGmKWmt.js";import"./Tabs.astro_astro_type_script_index_0_lang.BqK4QFew.js";import"./index.DImtQWSj.js";class o extends HTMLElement{constructor(){super()}}customElements.define("home-introduce",o);class r extends HTMLElement{constructor(){super()}}customElements.define("choose-reason",r);class c extends HTMLElement{constructor(){super()}}customElements.define("nacos-ebook",c);class u extends HTMLElement{constructor(){super()}}customElements.define("explore-features",u);class l extends HTMLElement{constructor(){super()}}customElements.define("use-companies",l);class i extends HTMLElement{cardSolution=this.querySelector(".solution-container");currentInputid="c0";flag=!0;constructor(){super(),this.cardSolution.addEventListener("mouseover",s=>{this.selectedLabel(s)})}selectedLabel(s){const t=s.target.getAttribute("input-id");if(this.flag&&t&&t!==this.currentInputid){this.currentInputid=t,this.flag=!1,setTimeout(()=>{this.flag=!0},200);let n=this.querySelector(`input[type=radio]#${t}`);n&&n.checked===!1&&(n.checked=!0)}}}customElements.define("card-solution",i);class a extends HTMLElement{constructor(){super()}}customElements.define("star-and-fork",a);
