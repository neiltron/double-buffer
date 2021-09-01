import DoubleBuffer from 'double-buffer';

console.log(DoubleBuffer)

global.THREE = require("three");
const canvasSketch = require("canvas-sketch");

const settings = {
  animate: true,
  context: "webgl"
};

const sketch = ({ context }) => {
  const renderer = new THREE.WebGLRenderer({
    canvas: context.canvas
  });

  renderer.setClearColor("#000", 1);

  const camera = new THREE.PerspectiveCamera(50, 1, 0.01, 100);
  camera.position.set(0, 0, -4);
  camera.lookAt(new THREE.Vector3());

  const scene = new THREE.Scene();

  const renderScene = new THREE.Scene();
  const renderCamera = new THREE.OrthographicCamera( - 1, 1, 1, - 1, -1000, 1000 );


  const geometry = new THREE.SphereGeometry(1, 32, 16);

  const canvasSize = 512;
  const fbo = new DoubleBuffer({ width: canvasSize, height: canvasSize });

  const simPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(canvasSize, canvasSize),
    new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        bufferTexture: { value: fbo.read().texture, type: 't' },
      }
    })
  );

  renderScene.add(plane);

  const displayPlane = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(canvasSize, canvasSize),
    new THREE.MeshBasicMaterial({
      map: fbo.read().texture
    })
  );

  scene.add(displayPlane);

  // draw each frame
  return {
    // Handle resize events here
    resize({ pixelRatio, viewportWidth, viewportHeight }) {
      renderer.setPixelRatio(pixelRatio);
      renderer.setSize(viewportWidth, viewportHeight, false);
      camera.aspect = viewportWidth / viewportHeight;
      camera.updateProjectionMatrix();
    },
    // Update & render your scene here
    render({ time }) {
      renderer.render(scene, camera);

      renderer.setRenderTarget(fbo.write());
      renderer.render(renderScene, renderCameraa);
      renderer.setRenderTarget(null);

      // swap read/write buffers
      fbo.swap();

      // set sim material texture to freshly drawn target
      plane.material.uniforms.bufferTexture.value = fbo.read().texture;
    },
    // Dispose of events & renderer for cleaner hot-reloading
    unload() {
      controls.dispose();
      renderer.dispose();
    }
  };
};

canvasSketch(sketch, settings);
