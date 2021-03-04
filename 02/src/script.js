import './style.css'
import * as THREE from 'three'

const canvas = document.querySelector('.webgl')

//Sizes
const sizes = {
  width: 800,
  height: 600
}

const scene = new THREE.Scene()

//Instantiate geometry and material
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

//Mesh is composed of geometry and material
const mesh = new THREE.Mesh(geometry, material)

//Add mesh to scene
scene.add(mesh)

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3

//Add camera
scene.add(camera)

//Renderer
const renderer = new THREE.WebGLRenderer({ canvas })

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)