module.exports=function(){function e(e){void 0===e&&(e={});var r=e.width||window.innerWidth,t=e.height||window.innerHeight,i=THREE.LinearFilter,n=THREE.LinearFilter;this.bufferTexture=new THREE.WebGLRenderTarget(r,t,{minFilter:i,magFilter:n}),this.bufferTexture2=new THREE.WebGLRenderTarget(r,t,{minFilter:i,magFilter:n})}var r=e.prototype;return r.read=function(){return this.bufferTexture},r.write=function(){return this.bufferTexture2},r.swap=function(){var e=this.bufferTexture;this.bufferTexture=this.bufferTexture2,this.bufferTexture2=e},e}();
//# sourceMappingURL=index.cjs.js.map
