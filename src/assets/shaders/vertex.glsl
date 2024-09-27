uniform float uTime;
varying vec2 vUv;

void main() {
    vUv = uv;

    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = 10.0 * (1.0 / - mvPosition.z);
}
