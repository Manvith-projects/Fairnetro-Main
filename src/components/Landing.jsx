import React from 'react';
import { motion } from 'framer-motion';
import Scene from './Scene';

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } },
};

const Landing = () => {
  return (
    <div className="hero-bg">
      <motion.section 
        className="hero"
        variants={containerVariants} 
        initial="initial"
        animate="animate"
        viewport={{ once: true, amount: 0.2 }} // Ensures smooth animation
      >
        <div className="container">
          <motion.h1 className="hero-heading" variants={fadeInUp}>
            More than a website, <span className="color-text">Your</span><br />
            <span style={{
              backgroundImage: 'linear-gradient(90deg, #fa955c, #00d5f3 103%)', 
              WebkitTextFillColor: 'transparent', 
              WebkitBackgroundClip: 'text', 
              backgroundClip: 'text', 
              display: 'inline-block', 
              paddingBottom: '13px'
            }}>
              Story
            </span>
          </motion.h1>

          <motion.p className="hero-subtext text-wrapper" variants={fadeInUp}>
            Every brand has a voice, and we bring yours to life through design, 
            innovation, and seamless digital experiences.
          </motion.p>

          <motion.div className="hero-buttons" style={{ marginTop: '30px' }} variants={fadeIn}>
            <a href="#portfolio" className="btn-primary">View Portfolio</a>
            <a href="#contact" className="btn-secondary">Contact Us</a>
          </motion.div>
        </div>

        {/* Scene Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
        </motion.div>
      </motion.section>
          <Scene />
    </div>
  );
};

export default Landing;
