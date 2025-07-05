import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Award, Briefcase, GraduationCap } from 'lucide-react';

const Resume: React.FC = () => {
  const handleDownload = () => {
    // Create a dummy PDF download for demo purposes
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Siva_Shankaran_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experiences = [
    {
      title: "AI and ML Internship",
      company: "IBM",
      period: "June 2025",
      type: "Virtual Mode",
      description: "Built a machine learning regression model to predict employee salaries based on experience, education, job role, and industry."
    }
  ];

  const education = [
    {
      degree: "MSc in Information Technology",
      school: "Bishop Heber College (Autonomous)",
      period: "June 2023 – April 2025"
    },
    {
      degree: "BSc in Computer Science",
      school: "RVS College of Arts and Science",
      period: "June 2019 – April 2022"
    }
  ];

  const certifications = [
    "Java Foundation Certificate - Infosys Springboard (2025)",
    "AI and Gen AI for Work Productivity Analytics Certificate - HCL (2025)"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-24 px-6 pb-12"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Resume
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Download my complete resume or view the highlights below
          </p>

          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="btn-hero group"
          >
            <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
            Download PDF Resume
          </motion.button>
        </motion.div>

        {/* Resume Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Experience */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Experience</h2>
            </div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -2 }}
                className="p-6 glass rounded-2xl hover-glow transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                  </div>
                  <div className="text-accent font-medium">{exp.company} • {exp.type}</div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-foreground">Education</h2>
            </div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -2 }}
                className="p-6 glass rounded-2xl hover-glow transition-all duration-300"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                    <span className="text-sm text-accent font-medium">{edu.period}</span>
                  </div>
                  <p className="text-muted-foreground">{edu.school}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-purple" />
            <h2 className="text-2xl font-bold text-foreground">Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="p-4 glass rounded-xl hover-glow transition-all duration-300 flex items-center gap-3"
              >
                <FileText className="w-5 h-5 text-purple flex-shrink-0" />
                <span className="text-foreground">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="p-8 glass rounded-2xl"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Skills Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-primary mb-3">Languages</h3>
              <p className="text-muted-foreground">Java, JavaScript, HTML, CSS, SQL</p>
            </div>
            <div>
              <h3 className="font-semibold text-accent mb-3">Frameworks & Tools</h3>
              <p className="text-muted-foreground">Git, GitHub, VS Code, Eclipse, Figma</p>
            </div>
            <div>
              <h3 className="font-semibold text-purple mb-3">Databases</h3>
              <p className="text-muted-foreground">MySQL, SQL</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Resume;