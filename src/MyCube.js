import * as THREE from 'three';

import { useEffect, useRef } from "react";
import { color } from 'three/src/nodes/tsl/TSLCore.js';

function MyCube(){
    useEffect(()=>{
 const shape = new THREE.Shape();
shape.moveTo(0, 0);
shape.lineTo(1, 0);
shape.lineTo(1, 1);
shape.lineTo(0, 1);
shape.lineTo(0, 0);
const scene= new THREE.Scene();

scene.add(shape);


    })
   



}
export default MyCube;