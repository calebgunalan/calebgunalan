import { motion } from 'framer-motion';
import { CyberButton } from '@/components/ui/cyber-button';
import { ChevronDown, Shield, Terminal, Zap } from 'lucide-react';

const typewriterVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.05,
    },
  }),
};

const glitchVariants = {
  initial: { x: 0 },
  glitch: {
    x: [0, -2, 2, -2, 2, 0],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 3,
    },
  },
};

export default function HeroSection() {
  const titleText = "M. CALEB GUNALAN";
  const subtitleText = "CYBERSECURITY SPECIALIST";

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Matrix rain effect */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            className="absolute text-cyber-green text-xs font-mono animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {String.fromCharCode(33 + Math.random() * 94)}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Main title with glitch effect */}
          <motion.h1
            variants={glitchVariants}
            initial="initial"
            animate="glitch"
            className="text-6xl md:text-8xl font-bold bg-gradient-neon bg-clip-text text-transparent glow-text"
          >
            {titleText.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={typewriterVariants}
                initial="hidden"
                animate="visible"
                custom={i}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-xl md:text-2xl text-cyber-blue font-mono tracking-widest"
          >
            {subtitleText.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={typewriterVariants}
                initial="hidden"
                animate="visible"
                custom={i + 30}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>

          {/* Status indicators */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="flex justify-center gap-6 text-sm font-mono"
          >
            <div className="flex items-center gap-2 text-cyber-green">
              <div className="w-2 h-2 bg-cyber-green rounded-full animate-glow-pulse" />
              SECURITY: ACTIVE
            </div>
            <div className="flex items-center gap-2 text-cyber-blue">
              <div className="w-2 h-2 bg-cyber-blue rounded-full animate-glow-pulse" />
              SYSTEMS: ONLINE
            </div>
            <div className="flex items-center gap-2 text-cyber-purple">
              <div className="w-2 h-2 bg-cyber-purple rounded-full animate-glow-pulse" />
              DEFENSE: READY
            </div>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <CyberButton variant="neon" size="lg" className="group">
              <Shield className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              VIEW PROJECTS
            </CyberButton>
            <CyberButton variant="matrix" size="lg" className="group">
              <Terminal className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              ACCESS TERMINAL
            </CyberButton>
            <CyberButton variant="cyber" size="lg" className="group">
              <Zap className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform" />
              CONTACT
            </CyberButton>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-cyber-blue"
            >
              <ChevronDown className="w-8 h-8" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Data streams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-cyber-blue to-transparent animate-data-flow"
            style={{
              top: `${20 + i * 15}%`,
              width: '100%',
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}