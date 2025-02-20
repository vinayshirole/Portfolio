import React from "react";
import { Mail, Github, Linkedin } from 'lucide-react';

const Connect: React.FC = () => {
  return (
    <div className="flex justify-center mt-6 mb-6 text-pink-500">
      <div className="flex gap-6 md:gap-12">
        <a
          href="mailto:vinayshirole07@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Mail size={24} />
        </a>
        <a
          href="https://github.com/vinayshirole?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/vinay-shirole/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default Connect;
