import React from "react"

const Skills: React.FC = () => {
    return(
        <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-12 text-center">Skills</h1>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Programming and Data Engineering</h3>
              <div className="flex flex-wrap gap-4">
                {['Python', 'Java', 'C/C++', 'Javascript', 'SQL', 'PostgreSQL', 'Oracle Database', 'MongoDB', 'Flask', 'PySpark'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-pink-500 rounded-full text-md hover:bg-pink-800 transition">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">ETL and Data Pipeline</h3>
              <div className="flex flex-wrap gap-4">
                {['Azure Data Factory', 'Selenium', 'BeautifulSoup', 'Google Cloud Dataflow', 'PL/SQL', 'MySQL', 'Apache Airflow'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-pink-500 rounded-full text-md hover:bg-pink-800 transition">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Cloud and DevOps</h3>
              <div className="flex flex-wrap gap-4">
                {['Azure Blob Storage', 'Azure Databricks', 'Azure Data Lake', 'CI/CD Pipelines', 'Spark', 'Apache Kafka'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-pink-500 rounded-full text-md hover:bg-pink-800 transition">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Skills;
