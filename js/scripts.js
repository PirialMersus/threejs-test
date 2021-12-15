let figure;
const itemList = document.getElementById("figures");
const btn = document.getElementById("btn");
const delButtonsBlock = document.getElementById("delButtonsBlock");
// const delButtons = document.querySelectorAll(".delBtn");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// const texture = new THREE.TextureLoader().load("/textures/crate.gif");

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);
// const geometry = new THREE.SphereGeometry(15, 32, 16);
// const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
// const sphere = new THREE.Mesh(geometry, material);
// scene.add(sphere);
// const geometry = new THREE.BoxGeometry(100, 100, 100);
// const edges = new THREE.EdgesGeometry(geometry);
// const line = new THREE.LineSegments(
//   edges,
//   new THREE.LineBasicMaterial({ color: 0xffffff })
// );
// scene.add(line);
addFigureIdToTheScreen = (id) => {};

const createAndAnimateFigure = (selectedFigure) => {
  if (figure) {
    scene.remove(figure);
  }
  let geometry, material;
  if (selectedFigure === "Куб") {
    geometry = new THREE.BoxGeometry(15, 15, 15);
    material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  } else if (selectedFigure === "Сфера") {
    geometry = new THREE.SphereGeometry(15, 32, 16);
  } else {
    geometry = new THREE.ConeGeometry(5, 20, 32);
    material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  }

  figure = new THREE.Mesh(geometry, material);

  console.log("figure.uuid", figure.uuid);
  scene.add(figure);

  camera.position.z = 50;

  function animate() {
    requestAnimationFrame(animate);
    figure.rotation.x += 0.01;
    figure.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
};

btn.addEventListener(
  "click",
  function () {
    let collection = itemList.selectedOptions;
    let selectedFigure;

    for (let i = 0; i < collection.length; i++) {
      selectedFigure = collection[i].label;
    }
    createAndAnimateFigure(selectedFigure);
  },
  false
);

delButtonsBlock.addEventListener("click", function () {}, false);
