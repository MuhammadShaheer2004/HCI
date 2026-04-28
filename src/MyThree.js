import * as THREE from "three";
import { useEffect, useRef } from "react";

import img1 from "./img1.jpeg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";

function MyThree() {
  const refContainer = useRef(null);

  useEffect(() => {
    const container = refContainer.current;

    // 🧹 Clear previous canvas (fixes duplicate cube issue)
    container.innerHTML = "";

    // === Scene ===
    const scene = new THREE.Scene();

    // === Camera ===
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // === Renderer ===
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // === Geometry ===
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    // === Textures ===
    const loader = new THREE.TextureLoader();

    const material = [
      new THREE.MeshBasicMaterial({ map: loader.load(img1) }),
      new THREE.MeshBasicMaterial({ map: loader.load(img2) }),
      new THREE.MeshBasicMaterial({ map: loader.load(img3) }),
      new THREE.MeshBasicMaterial({ map: loader.load(img3) }),
      new THREE.MeshBasicMaterial({ map: loader.load(img2) }),
      new THREE.MeshBasicMaterial({ map: loader.load(img1) }),
      
    ];

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // === Animation ===
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // 🧹 Cleanup (VERY IMPORTANT)
    return () => {
      container.innerHTML = "";
      renderer.dispose();
    };
  }, []);

  return <div ref={refContainer}></div>;
}

export default MyThree;