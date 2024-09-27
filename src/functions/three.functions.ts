export const getPositionsAndUvs = (resolution: number, size: number = 1) => {
    const count = resolution ** 2
    const positions = new Float32Array(count * 3)
    const uvs = new Float32Array(count * 2)

    for (let y = 0; y < resolution; y++) {
        for (let x = 0; x < resolution; x++) {
            const i = y * resolution + x
            const i2 = i * 2
            const i3 = i * 3

            positions[i3] = (x / resolution - 0.5) * size
            positions[i3 + 1] = (y / resolution - 0.5) * size
            positions[i3 + 2] = 0

            uvs[i2] = x / (resolution - 1)
            uvs[i2 + 1] = y / (resolution - 1)
        }
    }
    return { positions, uvs }
}
