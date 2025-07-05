import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center pt-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Hero Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-32 h-32 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-primary/20 hover-glow"
          >
            <img
              src="/lovable-uploads/91629fc4-d35a-41b4-920b-66fe501c075d.png"
              alt="Siva Shankaran"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold"
            >
              <span className="text-glow bg-gradient-primary bg-clip-text text-transparent">
                Siva
              </span>
              <br />
              <span className="text-foreground">Shankaran</span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-muted-foreground font-medium"
            >
              Full-Stack Developer & Software Engineer
            </motion.p>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              Enthusiastic postgraduate student in Information Technology with hands-on experience 
              in full-stack web development and machine learning. Passionate about creating 
              innovative solutions with modern technologies.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link to="/cta">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-hero"
                >
                  Hire Me
                </motion.button>
              </Link>
              
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-ghost"
                >
                  View Projects
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 pt-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">5+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple">3+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Animated Visual */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-96 lg:h-[600px] relative flex items-center justify-center"
        >
          {/* Animated Orbs */}
          <div className="relative w-80 h-80">
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple opacity-20 blur-xl"
            />
            
            <motion.div
              animate={{
                rotate: -360,
                scale: [1.1, 1, 1.1],
              }}
              transition={{
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute inset-4 rounded-full bg-gradient-to-r from-accent to-cyan opacity-30 blur-lg"
            />
            
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute inset-8 rounded-full bg-gradient-to-r from-purple to-orange opacity-40 blur-md"
            />
            
            {/* Central Glow */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-16 rounded-full bg-gradient-primary opacity-60 blur-sm"
            />
            
            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.sin(i) * 20, 0],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
                className="absolute w-2 h-2 bg-primary rounded-full"
                style={{
                  top: `${20 + i * 10}%`,
                  left: `${20 + (i % 3) * 20}%`
                }}
              />
            ))}
          </div>
          
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-purple/5 to-transparent animate-pulse-glow pointer-events-none" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;