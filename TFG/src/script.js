import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as dat from 'dat.gui'

//Loaders
const gltfLoader = new GLTFLoader()

//Models
  //Primera columna
gltfLoader.load('columna.gltf', (gltf) => 
{
  console.log('success')
  console.log(gltf)
  gltf.scene.scale.set(2,2,2)
  gltf.scene.position.set(40,-38,300)
  scene.add(gltf.scene)
}
)
//Segunda columna
gltfLoader.load('columna.gltf', (gltf) => 
{
  console.log('success')
  console.log(gltf)
  gltf.scene.scale.set(2,2,2)
  gltf.scene.position.set(-40,-38,600)
  scene.add(gltf.scene)
}
)



// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );


    //const gltfLoader = new GLTFLoader();
    //const url = 'assets/columna.gltf';
    //gltfLoader.load(url, (gltf) => {
      //const root = gltf.scene;
      //scene.add(root);
      //...
    //});

// Materials

const material = new THREE.MeshStandardMaterial()
material.color = new THREE.Color(0xffffff)

// Mesh
const sphere = new THREE.Mesh(geometry,material)
scene.add(sphere)



// Lights

const ambientLight = new THREE.AmbientLight(0xff87f1, 1)
const pointLight = new THREE.PointLight(0xffffff, 0.2)

scene.add(ambientLight)
scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.x = 0
camera.position.y = 50
camera.position.z = 100
scene.add(camera)

// Controls
function moveCamera() {

const t = document.body.getBoundingClientRect().top;
camera.position.z = t * -0.5

}
document.body.onscroll = moveCamera;

// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


//Enviroment


/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = .5 * elapsedTime

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()