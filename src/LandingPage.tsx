import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Mail, Github, Linkedin } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-screen">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-start text-left">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Hello! I am</h1>
        <h1 className="text-5xl md:text-8xl font-bold text-pink-500 mb-6">Vinay Shirole</h1>
        <h1 className="text-xl font-bold mb-4">
          <TypeAnimation
            sequence={[
              'Data Engineer',
              1500,
              'Cloud Engineer',
              1500,
              'Data Analyst',
              1500,
              'Data Scientist',
              1500,
            ]}
            wrapper="span"
            speed={10}
            style={{ fontSize: '1.5em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </h1>
        <a href="/Vinay Shirole Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
          <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
            Get my resume
          </button>
        </a>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center">
        <div className="w-60 h-60 md:w-80 md:h-80 relative mb-6">
          <div className="absolute inset-0 bg-pink-500 rounded-3xl md:rounded-12xl transform rotate-0"></div>
          <img 
            src="/Profile.png" 
            alt="Profile"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl md:rounded-12xl transform -rotate-6 hover:rotate-0 transition-transform duration-300"
          />
        </div>
        <div className="flex justify-center gap-6 md:gap-12">
          <a href="mailto:vinayshirole07@gmail.com" className="text-pink-400 hover:text-pink-600">
            <Mail size={24} />
          </a>
          <a href="https://github.com/vinayshirole?tab=repositories" className="text-pink-400 hover:text-pink-600">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/vinay-shirole/" className="text-pink-400 hover:text-pink-600">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
