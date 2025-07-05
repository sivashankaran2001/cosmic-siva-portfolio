import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Mail, Phone } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center pt-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Main CTA */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <h1 className="text-6xl lg:text-8xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent text-glow">
              Let's Build
            </span>
            <br />
            <span className="text-foreground">Something Amazing</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to turn your ideas into reality? I'm available for full-time positions, 
            freelance projects, and exciting collaborations. Let's create something extraordinary together.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-6 bg-gradient-primary text-primary-foreground rounded-2xl font-bold text-lg overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple/20 to-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative flex items-center gap-3">
                Contact Me
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </Link>

          <Link to="/resume">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 glass border border-primary/30 text-primary hover:bg-primary/10 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-3"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.button>
          </Link>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
        >
          <motion.a
            href="mailto:iamsivashankaran2001@gmail.com"
            whileHover={{ scale: 1.02, y: -5 }}
            className="p-6 glass rounded-2xl hover-glow transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Email Me</div>
                <div className="text-sm text-muted-foreground">iamsivashankaran2001@gmail.com</div>
              </div>
            </div>
          </motion.a>

          <motion.a
            href="tel:+919361088920"
            whileHover={{ scale: 1.02, y: -5 }}
            className="p-6 glass rounded-2xl hover-glow transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Call Me</div>
                <div className="text-sm text-muted-foreground">+91 9361088920</div>
              </div>
            </div>
          </motion.a>
        </motion.div>

        {/* Availability Status */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="p-6 glass rounded-2xl max-w-md mx-auto"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
            <span className="text-foreground font-medium">Available for new opportunities</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Currently based in Tiruchirappalli, open to remote work
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CallToAction;