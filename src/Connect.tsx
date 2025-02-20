import React from "react";
import { Mail, Github, Linkedin } from 'lucide-react';

const Connect: React.FC = () => {
  return (
    <section id="webEnding" className="py-20 bg-black-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Connect</h2>
        <div className="flex justify-center gap-6 md:gap-12">
          <a
            href="mailto:vinayshirole07@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link text-pink-400 hover:text-pink-800 transition-colors"
          >
            <Mail size={40} />
          </a>
          <a
            href="https://github.com/vinayshirole?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link text-pink-400 hover:text-pink-800 transition-colors"
          >
            <Github size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/vinay-shirole/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link text-pink-400 hover:text-pink-800 transition-colors"
          >
            <Linkedin size={40} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Connect;
