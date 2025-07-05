import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Website for Plants and Seeds",
      description: "Created an online store with functionalities for login, product catalog, cart, and order tracking. Designed MySQL database schema and implemented structured data flow for efficient backend operations.",
      technologies: ["Java", "HTML", "CSS", "JavaScript", "MySQL"],
      github: "https://github.com/sivashankaran2001/E-Commerce-Website-for-Plants-and-Seeds.git",
      color: "from-primary to-purple"
    },
    {
      title: "Cab Booking System",
      description: "Developed a real-time cab booking system with features like fare estimation, secure payments, and driver allocation. Built an admin dashboard to manage users, rides, and drivers using modular Java code and MySQL.",
      technologies: ["Java", "HTML", "CSS", "JavaScript", "MySQL"],
      github: "https://github.com/sivashankaran2001/Cab-booking-system.git",
      color: "from-accent to-cyan"
    },
    {
      title: "Employee Salary Prediction Model",
      description: "Built a machine learning regression model to predict employee salaries based on experience, education, job role, and industry. Gained hands-on experience in feature engineering and model evaluation.",
      technologies: ["Python", "Machine Learning", "Data Analysis"],
      github: "#",
      color: "from-purple to-orange"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-24 px-6 pb-12"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in full-stack development and machine learning
          </p>
        </motion.div>

        {/* Animated Header Visual */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-64 mb-12 flex items-center justify-center"
        >
          <div className="relative flex gap-8">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -20, 0],
                  rotateY: [0, 180, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
                className={`w-20 h-20 rounded-xl bg-gradient-to-br ${
                  index === 0 ? 'from-primary to-purple' :
                  index === 1 ? 'from-accent to-cyan' :
                  'from-purple to-orange'
                } shadow-2xl hover-glow`}
              />
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="group relative"
            >
              <div className="p-8 glass rounded-2xl hover-glow transition-all duration-500 h-full flex flex-col">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="space-y-4 flex-grow">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6 mt-auto">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 text-accent rounded-lg transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Demo</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center pt-12"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <motion.a
            href="https://github.com/sivashankaran2001"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-hero"
          >
            <Github className="w-5 h-5 mr-3" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;