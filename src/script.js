import './style.css';

import * as THREE from 'three';
import * as dat from 'dat.gui';

import { scene, run } from './setup';

const gui = new dat.GUI();

const textureLoader = new THREE.TextureLoader();
const particleTexture = textureLoader.load('/2.png');
// console.log(particleTexture);

const particlesGeometry = new THREE.BufferGeometry();
const count = 6000;

const positions = new Float32Array(count * 3);
for (let i = 0; i < count; i++) {
  positions[i] = (Math.random() - 0.5) * 3;
}

particlesGeometry.setAttribute(
  'position',
  new THREE.BufferAttribute(positions, 3),
);

const particlesMaterial = new THREE.PointsMaterial({
  size: 0.1,
  sizeAttenuation: true,
});
particlesMaterial.color = new THREE.Color('#bada55');
// particlesMaterial.map = particleTexture;
particlesMaterial.alphaMap = particleTexture;
particlesMaterial.transparent = true;
// 1 way
// particlesMaterial.alphaTest = 0.01;
// 2 way
particlesMaterial.depthTest = false;

const particles = new THREE.Points(particlesGeometry, particlesMaterial);

scene.add(particles);

run(particles);
