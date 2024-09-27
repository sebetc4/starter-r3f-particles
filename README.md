# React Three Fiber Particles

This is a starter template for building 3D applications using **React Three Fiber** and **TypeScript**. It includes pre-configured tools for shaders, debugging with Leva, and performance monitoring with `r3f-perf`. The project uses Vite for fast development and bundling.

## Features

- 🌐 **React Three Fiber**: Integrates Three.js into the React ecosystem for building declarative 3D scenes.
- 🛠 **TypeScript**: Includes TypeScript for strong typing and better development experience.
- 🖼 **Shader Support**: Easily import and use GLSL shaders.
- 🎛 **Leva**: Provides a beautiful and minimal UI for tweaking values in real-time.
- 📊 **Performance Monitoring**: Built-in FPS and performance metrics using `r3f-perf`.
- ⚡ **Vite**: Ultra-fast development server and build tool.
- ✨ **ESLint + Prettier**: Pre-configured for code linting and formatting.
  
## Technologies Used

- **[@react-three/fiber](https://github.com/pmndrs/react-three-fiber)**: React renderer for Three.js.
- **[three](https://threejs.org/)**: Three.js library for 3D graphics.
- **[@react-three/drei](https://github.com/pmndrs/drei)**: Useful helpers and abstractions for React Three Fiber.
- **[leva](https://github.com/pmndrs/leva)**: A GUI control for tweaking values in your scene.
- **[r3f-perf](https://github.com/utsuboco/r3f-perf)**: Real-time performance monitoring (FPS, memory usage, etc.).
- **[vite-plugin-glsl](https://github.com/UstymUkhman/vite-plugin-glsl)**: Plugin for loading GLSL shaders in Vite.
- **[TypeScript](https://www.typescriptlang.org/)**: Static type-checking for better development experience.

## Installation

First, clone the repository and install dependencies:

```bash
git clone https://github.com/sebetc4/starter-r3f-particles.git
cd starter-r3f-particles
npm install
```

Then, start the development server:

```bash
npm run dev
```

## Building for Production

To build the project for production, run:

```bash
npm run build
```

This will create an optimized build in the `dist` folder.

## Configuration

TypeScript is configured to recognize the following path alias:

```json
"paths": {
  "@/*": ["./src/*"]
}
```

Additionally, GLSL support is enabled through:

```json
"types": ["vite-plugin-glsl/ext"]
```

## License

This project is open source and available under the [MIT License](LICENSE).
