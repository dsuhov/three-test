import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

export const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.set(3, 3, 3);

const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// renderer
export const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('.webgl'),
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);

export const controls = new OrbitControls(camera, renderer.domElement);

export const run = () => {
  // controls.update();

  renderer.render(scene, camera);

  requestAnimationFrame(run);
};