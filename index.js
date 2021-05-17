export default class DoubleBuffer {
  constructor(opts = {}) {
    const w = opts.width || window.innerWidth;
    const h = opts.height || window.innerHeight;
    const minFilter = THREE.LinearFilter;
    const magFilter = THREE.LinearFilter;

    this.bufferTexture = new THREE.WebGLRenderTarget( w, h, { minFilter, magFilter });
    this.bufferTexture2 = new THREE.WebGLRenderTarget( w, h, { minFilter, magFilter })
  }

  read() {
    return this.bufferTexture;
  }

  write() {
    return this.bufferTexture2;
  }

  swap() {
    const tmp = this.bufferTexture;
    this.bufferTexture = this.bufferTexture2;
    this.bufferTexture2 = tmp;
  }
}
