import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';
import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/loaders/GLTFLoader.js';
import { Reflector } from './jsm/objects/Reflector.js';

//canvas
const canvas = document.querySelector('canvas.webgl')

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
})

const scene = new THREE.Scene();
// Fog
scene.fog = new THREE.Fog(0x000000, 10, 20);
//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100);
camera.position.set(-10, 10, 20);
scene.add(camera);

const controls = new OrbitControls(camera, canvas);
controls.autoRotate = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.render(scene, camera, controls);
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.gammaOutput = true;

const loader2 = new THREE.TextureLoader();
const images = loader2.load('https://threejsfundamentals.org/threejs/resources/images/checker.png');
let roadPlane = new THREE.BoxGeometry(6, 7);
let roadMaterial = new THREE.MeshLambertMaterial({
    map: images
});

let plane = new THREE.Mesh(roadPlane, roadMaterial);
plane.rotation.x = Math.PI / 2;
plane.receiveShadow = true;
scene.add(plane);

// monkey
const loader = new GLTFLoader()
loader.load('assets/monkey/monkey.gltf', function(gltf) {
    const root = gltf.scene;
    root.scale.x = 50;
    root.scale.y = 50;
    root.scale.z = 50;
    scene.add(root);

    root.traverse(n => {
        if (n.isMesh) {
            n.castShadow = true;
            n.receiveShadow = true;
        }
    });

})

const skybox = new THREE.CubeTextureLoader();
const Texture = skybox.load([
    'skybox/px.jpg',
    'skybox/nx.jpg',
    'skybox/py.jpg',
    'skybox/ny.jpg',
    'skybox/pz.jpg',
    'skybox/nz.jpg'
]);

scene.background = Texture;

const color = 0xFFFFFF;
const intensity = 1;
const spotLight = new THREE.SpotLight(color, intensity);
spotLight.position.set(0, 5, 20);
spotLight.castShadow = true;
scene.add(spotLight);

// Reflective Sphere
const cubeRenderedTarget = new THREE.WebGLCubeRenderTarget(128, { format: THREE.RGBFormat, generateMipmaps: true, minFilter: THREE.LinearMipmapLinearFilter });
let sphereCamera = new THREE.CubeCamera(1, 100, cubeRenderedTarget);
sphereCamera.position.x = 0;
sphereCamera.position.y = 0;
sphereCamera.position.z = 0;
scene.add(sphereCamera);
const sphereMirror = new THREE.MeshBasicMaterial({
    envMap: sphereCamera.renderTarget.texture,
});

const sphereGeo = new THREE.SphereGeometry(2, 30, 15);
const mirrorBall = new THREE.Mesh(sphereGeo, sphereMirror);
mirrorBall.position.set(10, 10);
scene.add(mirrorBall);


// Mirror
let planeMirror = new THREE.PlaneGeometry(20, 10);
const verticalMirror = new Reflector(planeMirror, {
    clipBias: 0.005,
    textureWidth: window.innerWidth * window.devicePixelRatio,
    textureHeight: window.innerHeight * window.devicePixelRatio,
    color: 0xffffff
});
verticalMirror.position.set(5, -25);
scene.add(verticalMirror);


const animate = () => {
    controls.update();
    renderer.render(scene, camera);
    sphereCamera.update(renderer, scene);
    window.requestAnimationFrame(animate);
}
animate();
