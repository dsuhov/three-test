import './style.css';

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

const scene = new THREE.Scene();

const particlesGeometry = new THREE.BufferGeometry();
const count = 50000;

const positions = new Float32Array(count * 3);

for (let i = 0; i < count * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 10;
}

particlesGeometry.setAttribute(
  'position',
  new THREE.BufferAttribute(positions, 3),
);

const particlesMaterial = new THREE.PointsMaterial();

particlesMaterial.size = 0.02;
particlesMaterial.sizeAttenuation = true;

const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);
// const geometry = new THREE.TorusKnotGeometry(1.2, 0.4, 160, 20);
// const material = new THREE.MeshBasicMaterial({
//   color: 0xff0000,
//   wireframe: true,
// });
// geometry.parameters.radialSegments = 20;
// geometry.parameters.tubularSegments = 160;

// const material = new THREE.MeshStandardMaterial();
// material.wireframe = true;
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// const light = new THREE.PointLight(0xffffff, 10);
// light.position.set(2, 3, 4);
// scene.add(light);

// const light2 = new THREE.AmbientLight(0xffffff, 0.02);
// light2.position.set(-2, -3, -4);
// scene.add(light2);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(10, 8, 10);
// scene.add(camera);

const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('.webgl'),
});

renderer.setSize(sizes.width, sizes.height);
// pixel ratio
renderer.setPixelRatio(window.devicePixelRatio);

const controls = new OrbitControls(camera, renderer.domElement);
// controls.update();
// renderer.render(scene, camera);
const tick = () => {
  // controls.update();

  renderer.render(scene, camera);

  requestAnimationFrame(tick);
};

tick();

// Note: Group class
