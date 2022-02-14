import React from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import './threejs.styles.css';
import { Physics, useBox, usePlane } from '@react-three/cannon'
import BruceImage from './images/bruce.JPG'

import { TextureLoader } from 'three/src/loaders/TextureLoader'


function Box(props) {
    const [ref, api] = useBox(() => ({ mass: 1 }));
    const colorMap = useLoader(TextureLoader, BruceImage)
    function randomNum() {
        return Math.random() * 50 * Math.random() < 0.5 ? -1 : 1
    }
    return (
        <mesh onClick={() => {

            api.velocity.set(randomNum(),randomNum(),  Math.abs(randomNum()));
        }} ref={ref} position={[0, 2, 0]}>
            <boxBufferGeometry attach='geometry' />
            <meshStandardMaterial map={colorMap} attach='material' />
        </mesh>
    )
}

function Sphere(props) {
    const [ref, api] = useBox(() => ({ mass: 1 }));
    const colorMap = useLoader(TextureLoader, BruceImage)
    function randomNum() {
        return Math.random() * 50 * Math.random() < 0.5 ? -1 : 1
    }
    return (
        <mesh onClick={() => {

            api.velocity.set(randomNum(),randomNum(),  Math.abs(randomNum()));
        }} ref={ref} position={[0, 2, 0]}>
            <sphereBufferGeometry attach='geometry' />
            <meshStandardMaterial map={colorMap} attach='material' />
        </mesh>
    )
}

function Plane(props) {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
    }));

    return (
        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <meshLambertMaterial attach='material' color='lightblue' />
        </mesh>
    )
}

function Threejs() {
    return (
        <Canvas>
            <OrbitControls />
            <Stars />
            <ambientLight intensity={0.5} />
            <spotLight position={10, 15, 10} angle={0.3} />
            <Physics>
                <Box />
                <Plane />
                <Sphere/>
            </Physics>
        </Canvas>
    );
}

export default Threejs;
