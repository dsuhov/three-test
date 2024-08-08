import './style.css';

import * as THREE from 'three';
import { scene, run } from './setup';
import { TeapotGeometry } from 'three/addons/geometries/TeapotGeometry.js';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';

const planeGeometry = new THREE.PlaneGeometry(3, 3);
const material = new THREE.MeshStandardMaterial({
  color: 0xffff00,
});
const plane = new THREE.Mesh(planeGeometry, material);
plane.rotateX(Math.PI * -0.5);
scene.add(plane);

const teapotMaterialConfig = {
  clearcoat: 0.1,
  clearcoatRoughness: 0.15,
  metalness: 0.3,
  roughness: 0.5,
  color: '#a739ec',
};

const teapotGeometry = new TeapotGeometry(0.5, 18);
// test material
const teapotMaterial = new THREE.MeshPhysicalMaterial(teapotMaterialConfig);
const teapot = new THREE.Mesh(teapotGeometry, teapotMaterial);
teapot.position.y = 0.5;
scene.add(teapot);

const light = new THREE.PointLight(0xffffff, 2, 100);
light.position.set(1, 2, 1);
scene.add(light);

const pointLightHelper = new THREE.PointLightHelper(light, 0.2);
scene.add(pointLightHelper);

const rectLight = new THREE.RectAreaLight(0xffffff, 3, 1, 1);
rectLight.position.set(0, 2, -2);

rectLight.rotateY(Math.PI);
rectLight.rotateX(-0.71);
scene.add(rectLight);

const rectLightHelper = new RectAreaLightHelper(rectLight);
rectLight.add(rectLightHelper);

run();
