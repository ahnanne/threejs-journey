/** scene */
const scene = new THREE.Scene();

/** cube */
const geometry = new THREE.BoxGeometry(1, 1, 1);
// 인자로 전달되는 3개의 숫자값은 box의 크기에 대응한다.
const material = new THREE.MeshBasicMaterial({ color: "cyan" });
// 간단한 음영 처리 방식으로 도형을 그리기 위한 material로서, lights의 영향을 받지 않는다.
const mesh = new THREE.Mesh(geometry, material);
// mesh는 geometry와 material로 구성된다.
scene.add(mesh);
// scene에 object를 추가한다.

/** sizes */
const sizes = {
  width: 800,
  height: 600,
};

/** camera */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// 첫 번째 인자로는 시야각(fov)을 전달받음. (시야각이 좁을수록(=fov 값이 작을수록) 가까이서 보는 느낌.)
// 두 번째 인자로는 aspect ratio를 전달음.
camera.position.z = 3;
scene.add(camera);

/** renderer */
const $canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas: $canvas });
// 객체를 인자로 받는다.
renderer.setSize(sizes.width, sizes.height);
// canvas의 크기를 인자로 전달받은 width, height 값에 따라 재조정한다.
renderer.render(scene, camera);
// 첫 번째 인자로는 scene을 전달받고, 두 번째 인자로는 camera를 전달받는다.
// scene 또는 object를 렌더링한다.
