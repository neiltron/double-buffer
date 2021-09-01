import { LinearFilter, WebGLRenderTarget } from 'three';

export default class DoubleBuffer {
  constructor(opts = {}) {
    const w = opts.width || window.innerWidth;
    const h = opts.height || window.innerHeight;
    const minFilter = LinearFilter;
    const magFilter = LinearFilter;

    this.bufferTexture = new WebGLRenderTarget( w, h, { minFilter, magFilter });
    this.bufferTexture2 = new WebGLRenderTarget( w, h, { minFilter, magFilter })
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
