function n(n){return window.innerHeight*n}function r(n){return window.innerWidth*n}var t={vh:n,vw:r,vmax:function(t){return Math.max(n(t),r(t))},vmin:function(t){return Math.min(n(t),r(t))},px:function(n){return n}};function u(n){var r=n.match(/^(\d+)(\w+)$/);return r?function(n,r){var u=t[r];if(u)return u[parseFloat(n)];throw new TypeError("unsupport css unit: "+r)}(r[1],r[2]):n}var i={max:function(){var n=[].slice.call(arguments).map(function(n){return u(n)});return Math.max.apply(Math,n)},min:function(){var n=[].slice.call(arguments).map(function(n){return u(n)});return Math.min.apply(Math,n)}};function a(n){var r=n.match(/^(\w+)\((.+)\)/);return r?function(n,r){var t=i[n];if(t)return t.apply(void 0,r);throw new TypeError("unsupported css function: "+n)}(r[1],r[2].split(",")):u(n)}export{a as parseCSSValue,u as parsePureCSSValue};
//# sourceMappingURL=css-value.esm.js.map