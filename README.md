# DoubleBuffer

Simple utility for bootstrapping a ping-pongable framebuffer.

## Usage

Install via npm:

```
npm install -s git@github.com:neiltron/double-buffer.git
```

### Create FBO

```js
import DoubleBuffer from 'double-buffer';

fbo = new DoubleBuffer({ width: canvasSize, height: canvasSize });
```


### Setup plane for simulation

```js
plane = new THREE.Mesh(
  new THREE.PlaneGeometry(canvasSize, canvasSize),
  new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      // set read texture as input on simulation mesh
      bufferTexture: { value: fbo.read().texture, type: 't' },
    }
  })
);
```

### Setup plane for display

```js
scenePlane = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(canvasSize, canvasSize),
  new THREE.MeshBasicMaterial({
    // set read texture as input on display mesh
    map: fbo.read().texture
  })
);
```


### Update render and swap buffers (in rAF or whatever)

```js
  // set render target to fbo write target and render
  renderer.setRenderTarget(fbo.write());
  renderer.render(scene, camera);
  renderer.setRenderTarget(null);

  // swap read/write buffers
  fbo.swap();

  // set sim material texture to freshly drawn target
  plane.material.uniforms.bufferTexture.value = fbo.read().texture;
```