import * as THREE from 'three'
import michroma from '../../assets/michroma.json'
import { Canvas } from '@react-three/fiber'
import { extend } from '@react-three/fiber'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'
import { useRef, useState } from 'react'
import { useEffect } from 'react'

extend({ TextGeometry })

function TitleText({text,position=[0,0,0]}) {
    const textMesh = useRef();
    const font = new FontLoader().parse(michroma)
    const textOptions = {font, size:2, depth:0.02, height: 0.1, curveSegments:5, bevelEnabled : true, bevelSize: 0.05, bevelSegments: 5, bevelThickness: 0.1} 
    const geometry = new TextGeometry( text, textOptions );
    const [hover, setHover] = useState(false)
    geometry.computeBoundingBox();



    // Calculate the center of the bounding box
    geometry.center()
    return (
        <div className='h-20 w-full' onPointerOver={(event) => {setHover(true)}} onPointerOut={(event) => {setHover(false)}}>
            <Canvas camera={{fov: 75, near: 0.1, far: 1000, position: [0,0,3]}}>
                <pointLight position={[0, 0, 10]} decay={0} intensity={2} color="white"/>
                <mesh
                    scale={hover ? 1.2 : 1}
                    ref={textMesh}
                    position={position}
                    geometry={geometry}
                >
                <meshNormalMaterial />
                </mesh>
            </Canvas>
        </div>
        
    )
}

export default TitleText