function n(n){return window.innerHeight*n}function t(n){return window.innerWidth*n}const r={vh:n,vw:t,vmax:function(r){return Math.max(n(r),t(r))},vmin:function(r){return Math.min(n(r),t(r))},px:n=>parseFloat(n)};function o(n){const t=n.match(/^(\d+)(\w+)$/);if(t){const[n,o,u]=t;return function(n,t){const o=r[t];if(o)return o(parseFloat(n));throw new TypeError("unsupport css unit: "+t)}(o,u)}return parseFloat(n)}const u={max:(...n)=>{const t=n.map(n=>o(n));return Math.max(...t)},min:(...n)=>{const t=n.map(n=>o(n));return Math.min(...t)}};function i(n){const t=n.match(/^(\w+)\((.+)\)/);return t?function(n,t){const r=u[n];if(r)return r(...t);throw new TypeError("unsupported css function: "+n)}(t[1],t[2].split(",")):o(n)}export{i as parseCSSValue,o as parsePureCSSValue};
//# sourceMappingURL=css-value.modern.js.map
