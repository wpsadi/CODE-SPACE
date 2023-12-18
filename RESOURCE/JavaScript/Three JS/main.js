import * as THREE from 'three';
import { OrbitControls } from '/node_modules/three/addons/controls/OrbitControls.js';
import { GLTFLoader } from '/node_modules/three/three/addons/loaders/GLTFLoader.js';

const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();
