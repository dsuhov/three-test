import './style.css';

import * as THREE from 'three';

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// - field of view; vertical vision angle(?); in degrees;
// - aspect ratio
// the width of the renderer divided by the height of the renderer
const camera = new THREE.PerspectiveCamera(75, 800/600);
camera.position.z = 3;
camera.position.x = 2;
scene.add(camera);

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('.webgl')
});

renderer.setSize(800, 600);

renderer.render(scene, camera);