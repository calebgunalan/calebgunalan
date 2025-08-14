import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Shield, Network, Search, ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: "Ethical Hacking Essentials",
    issuer: "EC-Council",
    description: "Gained foundational skills in ethical hacking, penetration testing, and cybersecurity threats.",
    skills: ["Penetration Testing", "Vulnerability Assessment", "Security Auditing"],
    icon: Shield,
    color: "cyber-green",
    level: "Professional"
  },
  {
    id: 2,
    title: "Network Defense Essentials",
    issuer: "EC-Council",
    description: "Learned core principles of network security, threat mitigation, and defense strategies.",
    skills: ["Network Security", "Threat Mitigation", "Defense Strategies"],
    icon: Network,
    color: "cyber-blue",
    level: "Professional"
  },
  {
    id: 3,
    title: "Digital Forensics Essentials",
    issuer: "EC-Council",
    description: "Acquired basic proficiency in digital forensics principles, tools, and procedures.",
    skills: ["Digital Forensics", "Evidence Analysis", "Investigation Tools"],
    icon: Search,
    color: "cyber-purple",
    level: "Professional"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
  visible: { opacity: 1, scale: 1, rotateY: 0 },
};

export default function CertificationsSection() {
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
            <h2 className="text-5xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-4">
              CERTIFICATIONS
            </h2>
            <div className="w-24 h-1 bg-gradient-cyber mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
              Industry-recognized credentials in cybersecurity and ethical hacking
            </p>
          </motion.div>

          {/* Certifications grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <motion.div
                  key={cert.id}
                  variants={cardVariants}
                  className="group"
                >
                  <Card className="cyber-border bg-card/40 backdrop-blur-sm p-6 h-full hover:shadow-cyber transition-all duration-500 group-hover:scale-105 relative overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Level badge */}
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant="outline" 
                        className={`border-${cert.color} text-${cert.color} text-xs bg-${cert.color}/10`}
                      >
                        {cert.level}
                      </Badge>
                    </div>

                    {/* Icon and issuer */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-lg bg-${cert.color}/10 border border-${cert.color}/30 group-hover:shadow-neon transition-all duration-300`}>
                        <IconComponent className={`w-8 h-8 text-${cert.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {cert.title}
                        </h3>
                        <p className={`text-${cert.color} font-mono text-sm`}>
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="space-y-3 mb-6">
                      <h4 className="text-sm font-semibold text-foreground">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary" 
                            className="text-xs bg-muted/30 border border-muted/50"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Verify button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-2 px-4 rounded-md border border-${cert.color}/50 text-${cert.color} bg-${cert.color}/5 hover:bg-${cert.color}/10 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-mono`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      VERIFY CREDENTIAL
                    </motion.button>

                    {/* Glowing dots effect */}
                    <div className="absolute top-2 left-2 space-y-1">
                      {Array.from({ length: 3 }, (_, i) => (
                        <motion.div
                          key={i}
                          className={`w-1 h-1 bg-${cert.color} rounded-full`}
                          animate={{
                            opacity: [0.3, 1, 0.3],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.3,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Stats section */}
          <motion.div 
            variants={cardVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: "Active Certifications", value: "3", color: "cyber-green" },
              { label: "Years Experience", value: "2+", color: "cyber-blue" },
              { label: "Security Projects", value: "5+", color: "cyber-purple" },
              { label: "CTF Wins", value: "1", color: "cyber-pink" },
            ].map((stat, index) => (
              <Card key={index} className="cyber-border bg-card/30 backdrop-blur-sm p-6 text-center">
                <div className={`text-3xl font-bold text-${stat.color} mb-2 font-mono`}>
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}