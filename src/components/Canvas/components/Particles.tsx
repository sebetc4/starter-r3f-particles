// Libs
import { useFrame } from '@react-three/fiber'
import { type FC, useRef } from 'react'
import { type ShaderMaterial, Uniform } from 'three'
// App
import { getPositionsAndUvs } from '@/functions/three.functions'
// GLSL
import fragmentShader from '@/assets/shaders/fragment.glsl'
import vertexShader from '@/assets/shaders/vertex.glsl'

interface ParticlesProps {
    resolution: number
}

export const Particles: FC<ParticlesProps> = ({ resolution }) => {
    
    const particleCount = resolution ** 2
    const { positions, uvs } = getPositionsAndUvs(resolution, 5)

    const shaderMatRef = useRef<ShaderMaterial>(null)

    useFrame(({ clock }) => {
        const shaderMat = shaderMatRef.current

        if (!shaderMat) return

        shaderMat.uniforms.uTime.value = clock.getElapsedTime()
    })

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    attach='attributes-position'
                    count={particleCount}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach='attributes-uv'
                    count={particleCount}
                    array={uvs}
                    itemSize={2}
                />
            </bufferGeometry>
            <shaderMaterial
                ref={shaderMatRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={{
                    uTime: new Uniform(0),
                }}
            />
        </points>
    )
}
