!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e||self).doubleBuffer=t()}(this,function(){return function(){function e(e){void 0===e&&(e={});var t=e.width||window.innerWidth,r=e.height||window.innerHeight,i=THREE.LinearFilter,n=THREE.LinearFilter;this.bufferTexture=new THREE.WebGLRenderTarget(t,r,{minFilter:i,magFilter:n}),this.bufferTexture2=new THREE.WebGLRenderTarget(t,r,{minFilter:i,magFilter:n})}var t=e.prototype;return t.read=function(){return this.bufferTexture},t.write=function(){return this.bufferTexture2},t.swap=function(){var e=this.bufferTexture;this.bufferTexture=this.bufferTexture2,this.bufferTexture2=e},e}()});
//# sourceMappingURL=index.cjs.umd.js.map