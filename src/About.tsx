import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16"> 
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4 text-pink-500">Past</h1>
                    <p className="text-justify">
                    I completed my undergraduate degree in Computer Engineering from Mumbai University with an 8.65 CGPA.
                    I discovered my passion for programming and data engineering while working at Capgemini, India. 
                    There, I worked on several ETL and cloud computing projects, primarily focusing on Azure data services.
                    </p>
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4 text-pink-500">Present</h1>
                    <p className="text-justify">
                    I am currently a Data Science student at Indiana University, Bloomington. 
                    I also work as a Research Assistant at the Luddy School of Informatics, where we train deep neural networks to predict areas affected by floods.
                    During the summer, I worked on an ETL project at the Kelley School of Business in collaboration with eBay.
                    </p>
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4 text-pink-500">Future</h1>
                    <p className="text-justify">
                    Looking ahead, I’m excited about the future of data engineering and its impact on technology and decision-making.
                    With my passion for building efficient data pipelines and my technical skills, 
                    I’m confident that I can contribute to developing scalable and reliable data solutions in the years to come.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default LandingPage;