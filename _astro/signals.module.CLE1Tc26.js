import{b as T,l as k,t as V}from"./preact.module.DjWlRcrZ.js";import{q as x,F as C,_ as z}from"./hooks.module.lAnevgcz.js";var B=Symbol.for("preact-signals");function S(){if(v>1)v--;else{for(var i,t=!1;d!==void 0;){var r=d;for(d=void 0,$++;r!==void 0;){var o=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&P(r))try{r.c()}catch(f){t||(i=f,t=!0)}r=o}}if($=0,v--,t)throw i}}function D(i){if(v>0)return i();v++;try{return i()}finally{S()}}var n=void 0;function H(i){var t=n;n=void 0;try{return i()}finally{n=t}}var d=void 0,v=0,$=0,b=0;function j(i){if(n!==void 0){var t=i.n;if(t===void 0||t.t!==n)return t={i:0,S:i,p:n.s,n:void 0,t:n,e:void 0,x:void 0,r:t},n.s!==void 0&&(n.s.n=t),n.s=t,i.n=t,32&n.f&&i.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=n.s,t.n=void 0,n.s.n=t,n.s=t),t}}function u(i){this.v=i,this.i=0,this.n=void 0,this.t=void 0}u.prototype.brand=B,u.prototype.h=function(){return!0},u.prototype.S=function(i){this.t!==i&&i.e===void 0&&(i.x=this.t,this.t!==void 0&&(this.t.e=i),this.t=i)},u.prototype.U=function(i){if(this.t!==void 0){var t=i.e,r=i.x;t!==void 0&&(t.x=r,i.e=void 0),r!==void 0&&(r.e=t,i.x=void 0),i===this.t&&(this.t=r)}},u.prototype.subscribe=function(i){var t=this;return l(function(){var r=t.value,o=n;n=void 0;try{i(r)}finally{n=o}})},u.prototype.valueOf=function(){return this.value},u.prototype.toString=function(){return this.value+""},u.prototype.toJSON=function(){return this.value},u.prototype.peek=function(){var i=n;n=void 0;try{return this.value}finally{n=i}},Object.defineProperty(u.prototype,"value",{get:function(){var i=j(this);return i!==void 0&&(i.i=this.i),this.v},set:function(i){if(i!==this.v){if($>100)throw new Error("Cycle detected");this.v=i,this.i++,b++,v++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{S()}}}});function m(i){return new u(i)}function P(i){for(var t=i.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function A(i){for(var t=i.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){i.s=t;break}}}function q(i){for(var t=i.s,r=void 0;t!==void 0;){var o=t.p;t.i===-1?(t.S.U(t),o!==void 0&&(o.n=t.n),t.n!==void 0&&(t.n.p=o)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=o}i.s=r}function h(i){u.call(this,void 0),this.x=i,this.s=void 0,this.g=b-1,this.f=4}(h.prototype=new u).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===b))return!0;if(this.g=b,this.f|=1,this.i>0&&!P(this))return this.f&=-2,!0;var i=n;try{A(this),n=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return n=i,q(this),this.f&=-2,!0},h.prototype.S=function(i){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}u.prototype.S.call(this,i)},h.prototype.U=function(i){if(this.t!==void 0&&(u.prototype.U.call(this,i),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}},h.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;i!==void 0;i=i.x)i.t.N()}},Object.defineProperty(h.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var i=j(this);if(this.h(),i!==void 0&&(i.i=this.i),16&this.f)throw this.v;return this.v}});function U(i){return new h(i)}function F(i){var t=i.u;if(i.u=void 0,typeof t=="function"){v++;var r=n;n=void 0;try{t()}catch(o){throw i.f&=-2,i.f|=8,E(i),o}finally{n=r,S()}}}function E(i){for(var t=i.s;t!==void 0;t=t.n)t.S.U(t);i.x=void 0,i.s=void 0,F(i)}function L(i){if(n!==this)throw new Error("Out-of-order effect");q(this),n=i,this.f&=-2,8&this.f&&E(this),S()}function p(i){this.x=i,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}p.prototype.c=function(){var i=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{i()}},p.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,F(this),A(this),v++;var i=n;return n=this,L.bind(this,i)},p.prototype.N=function(){2&this.f||(this.f|=2,this.o=d,d=this)},p.prototype.d=function(){this.f|=8,1&this.f||E(this)};function l(i){var t=new p(i);try{t.c()}catch(r){throw t.d(),r}return t.d.bind(t)}var g,N;function c(i,t){k[i]=t.bind(null,k[i]||function(){})}function w(i){N&&N(),N=i&&i.S()}function G(i){var t=this,r=i.data,o=J(r);o.value=r;var f=x(function(){for(var e=t.__v;e=e.__;)if(e.__c){e.__c.__$f|=4;break}return t.__$u.c=function(){var s;!V(f.peek())&&((s=t.base)==null?void 0:s.nodeType)===3?t.base.data=f.peek():(t.__$f|=1,t.setState({}))},U(function(){var s=o.value.value;return s===0?0:s===!0?"":s||""})},[]);return f.value}G.displayName="_st",Object.defineProperties(u.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:G},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),c("__b",function(i,t){if(typeof t.type=="string"){var r,o=t.props;for(var f in o)if(f!=="children"){var e=o[f];e instanceof u&&(r||(t.__np=r={}),r[f]=e,o[f]=e.peek())}}i(t)}),c("__r",function(i,t){w();var r,o=t.__c;o&&(o.__$f&=-2,(r=o.__$u)===void 0&&(o.__$u=r=function(f){var e;return l(function(){e=this}),e.c=function(){o.__$f|=1,o.setState({})},e}())),g=o,w(r),i(t)}),c("__e",function(i,t,r,o){w(),g=void 0,i(t,r,o)}),c("diffed",function(i,t){w(),g=void 0;var r;if(typeof t.type=="string"&&(r=t.__e)){var o=t.__np,f=t.props;if(o){var e=r.U;if(e)for(var s in e){var a=e[s];a!==void 0&&!(s in o)&&(a.d(),e[s]=void 0)}else r.U=e={};for(var _ in o){var y=e[_],O=o[_];y===void 0?(y=M(r,_,O,f),e[_]=y):y.o(O,f)}}}i(t)});function M(i,t,r,o){var f=t in i&&i.ownerSVGElement===void 0,e=m(r);return{o:function(s,a){e.value=s,o=a},d:l(function(){var s=e.value.value;o[t]!==s&&(o[t]=s,f?i[t]=s:s?i.setAttribute(t,s):i.removeAttribute(t))})}}c("unmount",function(i,t){if(typeof t.type=="string"){var r=t.__e;if(r){var o=r.U;if(o){r.U=void 0;for(var f in o){var e=o[f];e&&e.d()}}}}else{var s=t.__c;if(s){var a=s.__$u;a&&(s.__$u=void 0,a.d())}}i(t)}),c("__h",function(i,t,r,o){(o<3||o===9)&&(t.__$f|=2),i(t,r,o)}),T.prototype.shouldComponentUpdate=function(i,t){var r=this.__$u;if(!(r&&r.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var o in t)return!0;for(var f in i)if(f!=="__source"&&i[f]!==this.props[f])return!0;for(var e in this.props)if(!(e in i))return!0;return!1};function J(i){return x(function(){return m(i)},[])}function Q(i){var t=C(i);return t.current=i,g.__$f|=4,x(function(){return U(function(){return t.current()})},[])}function R(i){var t=C(i);t.current=i,z(function(){return l(function(){return t.current()})},[])}export{u as Signal,D as batch,U as computed,l as effect,m as signal,H as untracked,Q as useComputed,J as useSignal,R as useSignalEffect};
