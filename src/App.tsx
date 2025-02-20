import { useState } from 'react';
// import { Moon, Sun, Mail, Github, Linkedin, FileText } from 'lucide-react';
import Timeline from './Timeline';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Globes from './Globes';
import Connect from './Connect';

function App() {
  const [darkMode] = useState(true);

  return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar />
      {/* Hero Section */}
      <LandingPage />
      {/* About Section */}
      <About />
      <Timeline />
      {/* Skills Section */}
      <Skills />
      {/* Projects Section */}
      <Projects />
      {/* Contact Section */}
      <Connect />

      {/* <section id="contact" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Want To</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-pink-500">Offer job opportunity?</h3>
              <p>
                I am open to discussing potential job opportunities or collaborations. 
                With experience in web development and software engineering, I can take on roles 
                that allow me to work on exciting and challenging projects. If you have an opportunity, 
                feel free to reach out and let's discuss.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-pink-500">Connect?</h3>
              <p>
                Networking is key in the tech industry, and I'm always looking to meet new people 
                and expand my professional circle. Whether you're a fellow developer, designer, or 
                entrepreneur, I'd love to chat and learn more about your work and experiences. 
                Let's connect and see where the conversation takes us!
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-pink-500">Build something?</h3>
              <p>
                I have a passion for developing innovative solutions that solve complex problems. 
                Whether it's building a custom e-commerce platform or developing a mobile app, 
                I'm always ready for a new challenge. Let's create something amazing together!
              </p>
            </div>
          </div>
          
        </div>
      </section> */}
      {/* <div>
        <div></div>
        <Globes />
      </div>     */}
      {/* Footer */}
      <footer className="py-6 text-center text-sm text-white-500">
        <p>© {new Date().getFullYear()} Vinay Shirole. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;