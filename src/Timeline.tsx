import React from "react";

interface TimelineItem {
  title: string;
  subtitle: string;
  duration: string;
  description: string[];
  side: "left" | "right";
}

const timelineData: TimelineItem[] = [
  {
    title: "Research Assistant.",
    subtitle: "Luddy School of Informatics.",
    duration: "November 2021 - Present",
    description: [
      "Me and my team are developing deep learning models to predict flood-affected areas, using NOAA images for Model training and Google Earth API for elevation data."
    ],
    side: "right"
  },
  {
    title: "Research Assistant.",
    subtitle: "Kelly School of Business.",
    duration: "May 2024 - August 2024",
    description: [
      "I enhanced data pipelines by optimizing ETL processes with T-SQL, analyzed seller behavior from over 10 billion ad records using R and PySpark, applied causal inference to assess eBay’s Promoted Ads impact on sellers, and drove optimizations that increased ROI by 20% and improved competitiveness."
    ],
    side: "left"
  },
  {
    title: "Sr. Analyst/Software Engineer.",
    subtitle: "Capgemini, India",
    duration: "July 2021 - July 2023",
    description: [
      "I migrated over 5 TB of on-premises data to Azure Data Lake using ADF and Databricks, enhancing operational efficiency by 50% with an automated system via Power Automate, and led a team of 3 IT professionals to boost client satisfaction through continuous support and training."
    ],
    side: "right"
  }
];

const Timeline: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Work Experiences</h2>
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-500"></div>

          {timelineData.map((item, index) => (
            <div 
              key={index} 
              className={`relative flex items-center mb-12 ${
                item.side === "left" ? "md:justify-end md:pr-16" : "md:justify-start md:pl-16"
              } flex-col md:flex-row`}
            >
              {/* Circle Marker */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-pink-500 rounded-full border-4 border-gray-900 hidden md:block"></div>

              {/* Timeline Card */}
              <div className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-md w-full md:w-[45%] text-left">
                <h3 className="text-2xl font-bold text-pink-500">{item.title}</h3>
                <p className="text-gray-250">{item.subtitle}</p>
                <p className="text-sm text-gray-400 mb-2">{item.duration}</p>
                <div className="text-justify">
                  {item.description.map((point, i) => (
                    <p key={i} className="mb-1">{point}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
