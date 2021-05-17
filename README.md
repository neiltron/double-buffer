# DoubleBuffer

Simple utility for bootstrapping a ping-pongable framebuffer.

## Usage

### Create FBO

```js
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
      bufferTexture: { value: fbo.read().texture, type: 't' },
    }
  })
```

### Setup plane for display

```js
scenePlane = new THREE.Mesh(
  new THREE.PlaneBufferGeometry(canvasSize, canvasSize),
  new THREE.MeshBasicMaterial({
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