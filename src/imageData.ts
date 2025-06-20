// imageData.ts - Image management file

// Profile and About images
import profileImage from './assets/sigma.png';
import aboutImage from './assets/asik.png';

// Programming language icons
import cppLogo from './assets/cpp.png';
import pythonLogo from './assets/python.png';
import reactLogo from './assets/react.png';
import typescriptLogo from './assets/typescript.png';
import flutterLogo from './assets/flutter.png';
import vhdlLogo from './assets/vhdl.png';
import javaLogo from './assets/java.png';

// Tools and Software images
import easyedaLogo from './assets/easyeda.png';
import fusionLogo from './assets/fusion.png';
import vscodeLogo from './assets/VSCode.png';
import figmaLogo from './assets/Figma.png';
import arduinoLogo from './assets/arduino.jpg';
import prusaLogo from './assets/prusa.png';
import vivadoLogo from './assets/vivado.png';

// Project images
// import aquasenseImage from './assets/projects/aquasense.jpg';
// import doorlockImage from './assets/projects/doorlock.jpg';
// import booktrackerImage from './assets/projects/booktracker.jpg';
// import morsecodeImage from './assets/projects/morsecode.jpg';
// import smartlampImage from './assets/projects/smartlamp.jpg';

// Create imageData object
const imageData = {
  // Profile images
  profile: {
    main: profileImage, // profileImage when you uncomment it
    about: aboutImage // aboutImage when you uncomment it
  },

  // Programming languages
  languages: {
    cpp: cppLogo,
    python: pythonLogo,
    react: reactLogo,
    typescript: typescriptLogo,
    flutter: flutterLogo,
    vhdl: vhdlLogo,
    java: javaLogo
  },

  // Tools and software
  tools: {
    easyeda: easyedaLogo,
    fusion: fusionLogo,
    vscode: vscodeLogo,
    figma: figmaLogo,
    arduino: arduinoLogo,
    prusa: prusaLogo,
    vivado: vivadoLogo,
  },

  // Projects
  projects: {
    aquasense: undefined, // aquasenseImage when you uncomment it
    doorlock: undefined, // doorlockImage when you uncomment it
    booktracker: undefined, // booktrackerImage when you uncomment it
    morsecode: undefined, // morsecodeImage when you uncomment it
    smartlamp: undefined // smartlampImage when you uncomment it
  },

  // Fallback/placeholder images
  fallbacks: {
    profile: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMyMCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMzIwIiBmaWxsPSIjMzc0MTUxIi8+CjxjaXJjbGUgY3g9IjE2MCIgY3k9IjEyMCIgcj0iNDAiIGZpbGw9IiM2QjczODAiLz4KUGhdGggZD0iTTEwMCAyNDBIMjIwQzIyMCAyMTIuNCAyMDAuNiAxOTAgMTgwIDE5MEgxNDBDMTE5LjQgMTkwIDEwMCAyMTIuNCAxMDAgMjQwWiIgZmlsbD0iIzZCNzM4MCIvPgo8L3N2Zz4K',
    tool: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE0NCIgdmlld0JveD0iMCAwIDIwMCAxNDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTQ0IiBmaWxsPSIjRjNGNEY2Ii8+CjxyZWN0IHg9IjcwIiB5PSI0NCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRDFEOEUwIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjY0IiByPSIxMCIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K',
    project: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDMwMCAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMTkyIiBmaWxsPSIjMzc0MTUxIi8+CjxyZWN0IHg9IjEwMCIgeT0iNjQiIHdpZHRoPSIxMDAiIGhlaWdodD0iNjQiIGZpbGw9IiM2QjczODAiLz4KPC9zdmc+'
  }
};

export default imageData;
