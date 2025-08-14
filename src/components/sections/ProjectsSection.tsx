import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CyberButton } from '@/components/ui/cyber-button';
import { ExternalLink, Github, Calendar, Shield, Server, Search } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Website Authenticator",
    period: "December 2024 — April 2025",
    description: "Built a scalable TOTP-based site authentication system with real-time phishing protection. Led system architecture, secure key management, and comprehensive testing protocols.",
    tech: ["TOTP", "Security", "Authentication", "Phishing Protection"],
    icon: Shield,
    color: "cyber-blue",
    status: "In Development"
  },
  {
    id: 2,
    title: "Anti-Remote Disk Imaging",
    period: "July 2024 — November 2024",
    description: "Engineered a defensive system to detect and prevent remote disk imaging attacks on endpoints. Implemented advanced detection algorithms and real-time response mechanisms.",
    tech: ["Endpoint Security", "Forensics", "Defense", "Detection"],
    icon: Search,
    color: "cyber-green",
    status: "Completed"
  },
  {
    id: 3,
    title: "Web Based Attendance System",
    period: "April 2023",
    description: "Developed a full-stack attendance portal using Django, HTML/CSS, and MySQL for academic institutions. Features include biometric integration and automated reporting.",
    tech: ["Django", "MySQL", "Full Stack", "Biometrics"],
    icon: Server,
    color: "cyber-purple",
    status: "Completed"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -15 },
  visible: { opacity: 1, y: 0, rotateX: 0 },
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section header */}
          <motion.div 
            variants={cardVariants}
            className="text-center"
          >
            <h2 className="text-5xl font-bold bg-gradient-matrix bg-clip-text text-transparent mb-4">
              PROJECTS
            </h2>
            <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
              Cybersecurity solutions built with cutting-edge technology and security-first mindset
            </p>
          </motion.div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  className="group"
                >
                  <Card className="cyber-border bg-card/30 backdrop-blur-sm p-6 h-full hover:shadow-glow transition-all duration-500 group-hover:scale-105">
                    {/* Project header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-${project.color}/10 border border-${project.color}/30`}>
                        <IconComponent className={`w-6 h-6 text-${project.color}`} />
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`border-${project.color} text-${project.color} text-xs`}
                      >
                        {project.status}
                      </Badge>
                    </div>

                    {/* Title and period */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground font-mono">
                      <Calendar className="w-4 h-4" />
                      {project.period}
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="text-xs bg-muted/30 border border-muted"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2 mt-auto">
                      <CyberButton 
                        variant="ghost" 
                        size="sm" 
                        className="flex-1 group/btn"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </CyberButton>
                      <CyberButton 
                        variant="neon" 
                        size="sm" 
                        className="flex-1 group/btn"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Demo
                      </CyberButton>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-cyber opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-500" />
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Call to action */}
          <motion.div 
            variants={cardVariants}
            className="text-center"
          >
            <CyberButton variant="cyber" size="lg" className="group">
              <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              VIEW ALL PROJECTS
            </CyberButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 3 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 border border-cyber-blue/10 rounded-full"
            style={{
              top: `${30 + i * 20}%`,
              right: `${-10 + i * 15}%`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </section>
  );
}