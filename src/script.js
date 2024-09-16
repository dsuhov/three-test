import './style.css';

import * as THREE from 'three';
import * as dat from 'dat.gui';
import { TeapotGeometry } from 'three/addons/geometries/TeapotGeometry.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { scene, run } from './setup';

const cubeTextureLoader = new THREE.CubeTextureLoader();
const gui = new dat.GUI();

const textureLoader = new THREE.TextureLoader();

const gltfLoader = new GLTFLoader();

gltfLoader.load('gltf/containerfree.gltf', (gltf) => {
  const mesh = gltf.scene.children[0];
  mesh.scale.set(1, 1, 1);
  mesh.rotateY(Math.PI * 0.2);
  mesh.castShadow = true;
  // mesh.receiveShadow = true;
  // mesh.position.set(0, 0, 0);
  console.log(mesh);

  // mesh.
  scene.add(gltf.scene.children[0]);
});

// teapot
const teapotGeometry = new TeapotGeometry(0.2);
const teapotMaterial = new THREE.MeshStandardMaterial({ color: 0xbada55 });
const teapot = new THREE.Mesh(teapotGeometry, teapotMaterial);
teapot.position.set(1, 0.2, 1);
teapot.receiveShadow = true;
teapot.castShadow = true;
scene.add(teapot);

// plane
const planeGeometry = new THREE.PlaneGeometry(4, 4);
const planeMaterial = new THREE.MeshStandardMaterial();
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
planeMesh.rotateX(Math.PI * -0.5);
planeMesh.receiveShadow = true;
scene.add(planeMesh);

// sphere
// const geometry = new THREE.SphereGeometry(0.2);
// const material = new THREE.MeshStandardMaterial({ color: 0xbada55 });
// const sphere = new THREE.Mesh(geometry, material);
// sphere.position.y = 0.2;
// sphere.castShadow = true;
// sphere.receiveShadow = true;
// scene.add(sphere);

// light
const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(2.5, 2, 0.9);
directionalLight.castShadow = true;
scene.add(directionalLight);

directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 10;

const light = new THREE.AmbientLight(0x404040, 5);
scene.add(light);
// env map
const envMap = cubeTextureLoader.load([
  '/2/nx.jpg',
  '/2/ny.jpg',
  '/2/nz.jpg',
  '/2/px.jpg',
  '/2/py.jpg',
  '/2/pz.jpg',
]);
// scene.background = envMap;
scene.environment = envMap;

console.log(envMap);

const helper = new THREE.DirectionalLightHelper(directionalLight);
scene.add(helper);

run();
