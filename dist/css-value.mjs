function n(n){return window.innerHeight*n/100}function r(n){return window.innerWidth*n/100}var t={vh:n,vw:r,vmax:function(t){return Math.max(n(t),r(t))},vmin:function(t){return Math.min(n(t),r(t))},px:function(n){return parseFloat(n)}};function a(n){var r=n.match(/^(\d+)(\w+)$/);return r?function(n,r){var a=t[r];if(a)return a(parseFloat(n));throw new TypeError("unsupport css unit: "+r)}(r[1],r[2]):parseFloat(n)}var u={max:function(){var n=[].slice.call(arguments).map(function(n){return a(n)});return Math.max.apply(Math,n)},min:function(){var n=[].slice.call(arguments).map(function(n){return a(n)});return Math.min.apply(Math,n)}};function i(n){var r=n.match(/^(\w+)\((.+)\)/);return r?function(n,r){var t=u[n];if(t)return t.apply(void 0,r);throw new TypeError("unsupported css function: "+n)}(r[1],r[2].split(",")):a(n)}export{i as parseCSSValue,a as parsePureCSSValue};
//# sourceMappingURL=css-value.mjs.map
