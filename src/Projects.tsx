import React from "react";
import { Github } from "lucide-react";

const projects = [
    {
      title: 'Music Recommendation System',
      description: 'The Music Recommendation System is designed to provide personalized song recommendations to users based on their listening history, preferences, and behavior by leveraging machine learning algorithms and collaborative filtering techniques.',
      image: '/Music Recommendation.webp',
      codeLink: 'https://github.com/vinayshirole/Music-Recommendation-System'
    },
    {
      title: 'InsightWise',
      description: "A cloud-based inventory management web application designed to help businesses of all sizes streamline their stock control, reduce waste, and optimize supply chain efficiency thereby providing the tools to track, manage, and analyze inventory in real time.",
      image: '/Inventory.webp',
      codeLink: 'https://github.com/vinayshirole/InsightWise'
    },
    {
      title: 'Cloud-Based Airline Satisfaction Prediction',
      description: 'The project focuses on analyzing and predicting airline customer satisfaction using machine learning models. It is built on Google Cloud Platform (GCP) and utilizes Python-based ML models running in Jupyter Notebook on a virtual machine (VM) to process and analyze more than 1 million customer reviews',
      image: '/Airplane.webp',
      // codeLink: '#'
    },
    {
      title: 'Flood Risk Prediction Using CNN',
      description: 'We are developing a Convolutional Neural Network (CNN) model to predict areas likely to be affected in the event of a flood. The model leverages satellite images from NOAA along with geospatial features such as landscape and elevation to enhance prediction accuracy.',
      image: '/GeoAI.webp',
      // codeLink: '#'
    }
  ];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <div key={project.title} className="bg-gray-900 rounded-xl overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-400 mb-4 text_left text-justify">{project.description}</p>
                        <div className="flex gap-4">
                        <div className="flex items-center space-x-4">
                          <a href={project.codeLink} className="bg-pink-500 text-white px-12 py-2 rounded-lg hover:bg-pink-800 flex items-center gap-2">
                            <Github size={24} /> View Code
                          </a>
                        </div>

                        {/* {project.codeLink && (
                            <a href={project.codeLink} className="border border-pink-500 text-pink-500 px-4 py-2 rounded-lg hover:bg-pink-500 hover:text-white">
                            View Code
                            </a>
                        )} */}
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;