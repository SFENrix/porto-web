import { useState } from 'react';
import { ChevronLeft, ChevronRight, Download, Mail, Linkedin, Github, Menu, X } from 'lucide-react';
// Import the image management system
import imageData from './imageData';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Sample data for languages/programming skills
  const languages = [
    { 
      name: 'C/C++', 
      logo: null, 
      level: 'Advanced',
      fallbackIcon: '⚡'
    },
    { 
      name: 'Python', 
      logo: null, 
      level: 'Advanced',
      fallbackIcon: '🐍'
    },
    { 
      name: 'React', 
      logo: null, 
      level: 'Intermediate',
      fallbackIcon: '⚛️'
    },
    { 
      name: 'TypeScript', 
      logo: null, 
      level: 'Intermediate',
      fallbackIcon: '🔷'
    },
    { 
      name: 'Flutter', 
      logo: null, 
      level: 'Intermediate',
      fallbackIcon: '💚'
    },
    { 
      name: 'VHDL', 
      logo: null, 
      level: 'Beginner',
      fallbackIcon: '🌐'
    },
    { 
      name: 'Java', 
      logo: null, 
      level: 'Intermediate',
      fallbackIcon: '☕'
    }
  ];

  // Helper function to handle image errors and undefined images
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, fallbackIcon?: string, fallbackSrc?: string) => {
    const target = e.target as HTMLImageElement;
    if (fallbackSrc) {
      target.src = fallbackSrc;
    } else if (fallbackIcon) {
      target.style.display = 'none';
      const parent = target.parentElement;
      if (parent) {
        parent.innerHTML = `<div class="w-full h-full flex items-center justify-center text-4xl">${fallbackIcon}</div>`;
      }
    }
  };

  // Sample data for tools/software
  const tools = [
    { 
      name: 'EasyEDA', 
      logo: null, 
      description: 'Circuit Design',
      fallbackIcon: '🔌'
    },
    { 
      name: 'Autodesk Fusion', 
      logo: null, 
      description: '3D Modeling',
      fallbackIcon: '🎯'
    },
    { 
      name: 'VS Code', 
      logo: null, 
      description: 'Code Editor',
      fallbackIcon: '💻'
    },
    { 
      name: 'Figma', 
      logo: null, 
      description: 'UI/UX Design',
      fallbackIcon: '🎨'
    },
    { 
      name: 'Arduino IDE', 
      logo: null, 
      description: 'Microcontroller',
      fallbackIcon: '🤖'
    },
    { 
      name: 'Prusa Slicer', 
      logo: null, 
      description: '3D Printing',
      fallbackIcon: '🖨️'
    },
    { 
      name: 'Vivado', 
      logo: null, 
      description: 'VHDL Programming',
      fallbackIcon: '🔧'
    }
  ];

  // Sample projects data
  const projects = [
    {
      title: 'AQUASENSE',
      description: 'IoT water quality monitoring system with real-time sensors and data analytics dashboard',
      image: null,
      tech: ['Arduino', 'IoT', 'Sensors', 'Data Analytics'],
      fallbackIcon: '🌊'
    },
    {
      title: 'Doorlock using FPGA',
      description: 'Smart door locking system using FPGA technology with biometric authentication',
      image: null,
      tech: ['FPGA', 'Verilog', 'Hardware', 'Security'],
      fallbackIcon: '🚪'
    },
    {
      title: 'Book Tracker App using Flutter',
      description: 'Mobile app for tracking reading progress and book collections with social features',
      image: null,
      tech: ['Flutter', 'Dart', 'Mobile', 'Firebase'],
      fallbackIcon: '📚'
    },
    {
      title: 'Morse Code Device',
      description: 'Hardware device that translates text to morse code signals with LED and sound output',
      image: null,
      tech: ['C++', 'Arduino', 'Electronics', 'Communication'],
      fallbackIcon: '📡'
    },
    {
      title: 'Smart Lamp',
      description: 'IoT-enabled smart lighting system with mobile app control and automation features',
      image: null,
      tech: ['IoT', 'Arduino', 'Mobile App', 'Automation'],
      fallbackIcon: '💡'
    }
  ];

  const scrollLanguages = (direction: 'left' | 'right') => {
    const container = document.getElementById('languages-container');
    const scrollAmount = 250;
    if (container) {
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  const scrollTools = (direction: 'left' | 'right') => {
    const container = document.getElementById('tools-container');
    const scrollAmount = 250;
    if (container) {
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#1F2833]/95 backdrop-blur-sm px-6 py-4 z-50 border-b border-gray-800">
        <div className="w-full flex justify-between items-center">
          <div className="text-[#66FCF1] text-xl font-bold">
            RIO<br />FERDINAND
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-[#C5C6C7] hover:text-[#66FCF1] transition-colors duration-300">Home</a>
            <a href="#about" className="text-[#C5C6C7] hover:text-[#66FCF1] transition-colors duration-300">About</a>
            <a href="#projects" className="text-[#C5C6C7] hover:text-[#66FCF1] transition-colors duration-300">Projects</a>
          </div>
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-[#C5C6C7] hover:text-[#66FCF1] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-[#C5C6C7] hover:text-[#66FCF1] transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-[#C5C6C7] hover:text-[#66FCF1] transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-[#C5C6C7] hover:text-[#66FCF1] transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Enhanced Background */}
      <section id="home" className="relative px-6 py-12 pt-0 min-h-screen flex items-center overflow-hidden">
        {/* Animated Background with Geometric Patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0C10] via-[#1F2833] to-[#0B0C10]">
          {/* Large Geometric Shapes */}
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Triangle 1 */}
            <div 
              className="absolute top-20 -left-20 w-96 h-96 opacity-10"
              style={{
                background: 'linear-gradient(135deg, #66FCF1 0%, transparent 70%)',
                clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                transform: 'rotate(15deg)'
              }}
            />
            
            {/* Triangle 2 */}
            <div 
              className="absolute bottom-40 -right-32 w-80 h-80 opacity-15"
              style={{
                background: 'linear-gradient(225deg, #45A29E 0%, transparent 70%)',
                clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                transform: 'rotate(-20deg)'
              }}
            />
            
            {/* Diamond Shape */}
            <div 
              className="absolute top-1/2 right-1/4 w-64 h-64 opacity-5 animate-bounce"
              style={{
                background: 'linear-gradient(45deg, #66FCF1, #45A29E)',
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                transform: 'rotate(45deg) translate(-50%, -50%)',
                animationDuration: '6s'
              }}
            />
            
            {/* Floating Circles */}
            <div className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full bg-gradient-to-r from-[#66FCF1]/10 to-transparent animate-pulse" />
            <div className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-[#45A29E]/15 to-transparent animate-pulse delay-1000" />
            
            {/* Grid Pattern Overlay */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(102, 252, 241, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(102, 252, 241, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
            />
            
            {/* Noise Texture */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12 items-center h-full">
            {/* Left side - Main headline */}
            <div className="text-[#C5C6C7] flex-col justify-center order-2 lg:order-1 text-center lg:text-right">
              <h1 className="text-4xl xl:text-6xl font-bold leading-tight mb-8">
                For<br />
                Companies<br />
                That Loves<br />
                Bringing<br />
                <span className="text-[#66FCF1] drop-shadow-lg">Ideas To Life</span>
              </h1>
            </div>
            
            {/* Center - Photo and Download Button */}
            <div className="flex flex-col items-center order-1 lg:order-2">
              {/* Photo */}
              <div className="w-64 h-80 xl:w-180 xl:h-200">
                {imageData.profile.main ? (
                  <img 
                    src={imageData.profile.main} 
                    alt="Rio Ferdinand Profile" 
                    className="w-full h-full object-cover"
                    onError={(e) => handleImageError(e, '👤', imageData.fallbacks.profile)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl text-gray-400">
                    👤
                  </div>
                )}
              </div>
              
              {/* Enhanced Download Button */}
              <button className="mt-8 border-2 border-[#66FCF1] text-[#66FCF1] px-8 py-3 hover:bg-[#66FCF1] hover:text-gray-900 transition-all duration-300 flex items-center gap-2 font-semibold shadow-lg hover:shadow-[#66FCF1]/25 hover:shadow-xl">
                <Download size={20} />
                DOWNLOAD CV
              </button>
            </div>
            
            {/* Right side - Personal Info */}
            <div className="text-white flex flex-col justify-center order-3 lg:order-3 text-center lg:text-left">
              <h2 className="text-3xl xl:text-4xl mb-4 text-[#C5C6C7]">
                Hello, I am
              </h2>
              <h3 className="text-[#66FCF1] text-4xl xl:text-5xl font-bold mb-6 drop-shadow-lg">
                Rio Ferdinand
              </h3>
              <p className="text-[#C5C6C7] text-lg xl:text-xl mb-2">IoT and Microcontroller Specialized</p>
              <p className="text-[#C5C6C7] text-lg xl:text-xl">Computer Engineer</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="bg-gray-200 px-6 py-20 pt-40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#45A29E] text-4xl font-bold mb-12">About Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="w-64 h-64">
                {imageData.profile.about ? (
                  <img 
                    src={imageData.profile.about} 
                    alt="About Rio Ferdinand" 
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    onError={(e) => handleImageError(e, undefined, imageData.fallbacks.profile)}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-600 shadow-lg">
                    <div className="text-4xl mb-2">📷</div>
                    <p className="font-semibold">My picture here</p>
                  </div>
                )}
              </div>
            </div>
            <div className="text-gray-700">
              <p className="text-lg leading-relaxed mb-6">
                I am a Computer Engineering student that has a passion for IoT and 
                automation. I look for new opportunities and chances to learn things that can 
                improve my knowledge and skills in the technology field.
              </p>
              <p className="text-lg leading-relaxed">
                I am someone that can operate both in teams and individually. I am fairly 
                adaptive with my working environment and colleagues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="bg-gray-200 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[#45A29E] text-4xl font-bold">Languages</h2>
            <div className="flex gap-2">
              <button 
                onClick={() => scrollLanguages('left')}
                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft size={24} className="text-gray-600" />
              </button>
              <button 
                onClick={() => scrollLanguages('right')}
                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                <ChevronRight size={24} className="text-gray-600" />
              </button>
            </div>
          </div>
          
          <div 
            id="languages-container"
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {languages.map((language, index) => (
              <div key={index} className="flex-shrink-0 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow min-w-[220px]">
                <div className="h-16 mb-4 flex items-center justify-center">
                  <div className="text-4xl">{language.fallbackIcon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{language.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="bg-gray-200 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[#45A29E] text-4xl font-bold">Tools & Software</h2>
            <div className="flex gap-2">
              <button 
                onClick={() => scrollTools('left')}
                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft size={24} className="text-gray-600" />
              </button>
              <button 
                onClick={() => scrollTools('right')}
                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
              >
                <ChevronRight size={24} className="text-gray-600" />
              </button>
            </div>
          </div>
          
          <div 
            id="tools-container"
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {tools.map((tool, index) => (
              <div key={index} className="flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow min-w-[300px]">
                {/* Image area for software screenshots */}
                <div className="h-48 bg-gray-100 flex items-center justify-center border-b p-4">
                  <div className="text-4xl">{tool.fallbackIcon}</div>
                </div>
                {/* Content area */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{tool.name}</h3>
                  <p className="text-gray-600">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-200 px-6 py-20 pt-40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#45A29E] text-4xl font-bold mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-700 flex items-center justify-center">
                  <div className="text-6xl">{project.fallbackIcon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-[#C5C6C7] text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-[#C5C6C7] mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-[#66FCF1] text-gray-900 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F2833] px-6 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-[#66FCF1] text-xl font-bold mb-4">Connect With Me</h3>
            <div className="text-[#C5C6C7] space-y-2">
              <p>Email: rioferd2005@gmail.com</p>
              <p>LinkedIn:</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-[#66FCF1] transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#66FCF1] transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#66FCF1] transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[#C5C6C7] space-y-2">
              <p><a href="#home" className="hover:text-[#66FCF1] transition-colors">Home</a></p>
              <p><a href="#about" className="hover:text-[#66FCF1] transition-colors">About</a></p>
              <p><a href="#projects" className="hover:text-[#66FCF1] transition-colors">Projects</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;