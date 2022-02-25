import * as THREE from "three";
import React, {useRef, Suspense} from 'react'
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import styled from 'styled-components';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';
 
const WaveShaderMaterial = shaderMaterial(
    // Uniform
    {
      uTime: 0,
      uColor: new THREE.Color(0.0, 0.0, 0.0),
      uTexture: new THREE.Texture(),
    },
    // Vertex Shader
    glsl`
      precision mediump float;
      varying vec2 vUv;
      varying float vWave;
      uniform float uTime;
      #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);
      void main() {
        vUv = uv;
        vec3 pos = position;
        float noiseFreq = 2.0;
        float noiseAmp = 0.4;
        vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
        pos.z += snoise3(noisePos) * noiseAmp;
        vWave = pos.z;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);  
      }
    `,
    // Fragment Shader
    glsl`
      precision mediump float;
      uniform vec3 uColor;
      uniform float uTime;
      uniform sampler2D uTexture;
      varying vec2 vUv;
      varying float vWave;
      void main() {
        float wave = vWave * 0.1;
        vec3 texture = texture2D(uTexture, vUv + wave).rgb;
        gl_FragColor = vec4(texture, 1.0); 
      }
    `
  );
  
  extend({ WaveShaderMaterial });

const BackgroundLayout = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 90w;
height: 90vh;
background-color: ${(props) => props.theme.backgroundColor};
`

const ThreeStyles = styled.div`
box-sizing: border-box;
width: 100vw;

height: 100vh;
margin: 0;
padding: 0;
`


const Wave = () => {
    const ref = useRef();
    useFrame(({clock}) => (ref.current.uTime = clock.getElapsedTime()));

    const [image] = useLoader(THREE.TextureLoader, [
        "https://i.postimg.cc/CL8DLVQP/Black-Turtleneck-popart-01.jpg",
      ]);

    return (
<mesh>
                <planeBufferGeometry args={[0.8, 0.8, 16, 16]} />
                <waveShaderMaterial uColor={"blue"} ref={ref} uTexture={image} />

            </mesh>

    )
}

const Scene = () =>  {
    return (
        <BackgroundLayout>
        <ThreeStyles>
        <Canvas camera={{fov: 12, position: [0, 0, 5]}}>
          <Suspense fallback={null}>

              <Wave />
          </Suspense>
            
        </Canvas>
        </ThreeStyles>
        </BackgroundLayout>
    )
}

export default Scene;
