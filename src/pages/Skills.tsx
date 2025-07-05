import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Settings, Laptop, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 88 },
        { name: "SQL", level: 82 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-accent",
      bgColor: "bg-accent/10",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Database Design", level: 80 }
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: Settings,
      color: "text-purple",
      bgColor: "bg-purple/10",
      skills: [
        { name: "Git & GitHub", level: 88 },
        { name: "VS Code", level: 90 },
        { name: "Eclipse", level: 85 },
        { name: "Figma", level: 75 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "text-cyan",
      bgColor: "bg-cyan/10",
      skills: [
        { name: "Oracle Cloud Infrastructure", level: 65 },
        { name: "Kubernetes", level: 60 }
      ]
    },
    {
      title: "Operating Systems",
      icon: Laptop,
      color: "text-orange",
      bgColor: "bg-orange/10",
      skills: [
        { name: "Windows", level: 95 },
        { name: "Linux", level: 80 }
      ]
    },
    {
      title: "Methodologies",
      icon: Users,
      color: "text-primary",
      bgColor: "bg-primary/10",
      skills: [
        { name: "Agile", level: 75 },
        { name: "Scrum", level: 75 },
        { name: "SDLC", level: 80 }
      ]
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
              Skills
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical expertise and proficiency across various technologies and methodologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 + categoryIndex * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-8 glass rounded-2xl hover-glow transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-4">
                    <div className={`p-3 ${category.bgColor} rounded-xl`}>
                      <Icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.1 
                        }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-foreground font-medium">{skill.name}</span>
                          <span className={`text-sm font-bold ${category.color}`}>
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1.5, 
                              delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                            className={`h-full bg-gradient-to-r ${
                              category.color === 'text-primary' ? 'from-primary to-primary-glow' :
                              category.color === 'text-accent' ? 'from-accent to-accent-glow' :
                              category.color === 'text-purple' ? 'from-purple to-purple-glow' :
                              category.color === 'text-cyan' ? 'from-cyan to-cyan-glow' :
                              category.color === 'text-orange' ? 'from-orange to-orange-glow' :
                              'from-primary to-primary-glow'
                            } rounded-full`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="p-8 glass rounded-2xl text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Programming Languages</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple">10+</div>
              <div className="text-sm text-muted-foreground">Tools & Technologies</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-cyan">5+</div>
              <div className="text-sm text-muted-foreground">Major Projects</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;