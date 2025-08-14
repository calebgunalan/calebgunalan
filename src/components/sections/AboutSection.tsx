import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { GraduationCap, Award, Code, Shield } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const skills = [
  { name: 'Ethical Hacking', level: 95, color: 'cyber-green' },
  { name: 'Network Security', level: 90, color: 'cyber-blue' },
  { name: 'Python', level: 85, color: 'cyber-purple' },
  { name: 'Linux', level: 88, color: 'cyber-pink' },
  { name: 'Digital Forensics', level: 80, color: 'cyber-green' },
  { name: 'Penetration Testing', level: 92, color: 'cyber-blue' },
];

export default function AboutSection() {
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
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-5xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-4">
              ABOUT ME
            </h2>
            <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full" />
          </motion.div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left column - Bio and Education */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Bio */}
              <Card className="cyber-border bg-card/50 backdrop-blur-sm p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-cyber-blue" />
                  <h3 className="text-2xl font-bold text-cyber-blue">Profile</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Cybersecurity enthusiast passionate about ethical hacking, particularly in network security.
                  I enjoy leveraging my cybersecurity knowledge to secure complex systems and build scalable 
                  security solutions that protect against evolving threats.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-cyber-green text-cyber-green">
                    Ethical Hacker
                  </Badge>
                  <Badge variant="outline" className="border-cyber-blue text-cyber-blue">
                    Network Security
                  </Badge>
                  <Badge variant="outline" className="border-cyber-purple text-cyber-purple">
                    Penetration Testing
                  </Badge>
                </div>
              </Card>

              {/* Education */}
              <Card className="cyber-border bg-card/50 backdrop-blur-sm p-8">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-8 h-8 text-cyber-purple" />
                  <h3 className="text-2xl font-bold text-cyber-purple">Education</h3>
                </div>
                <div className="space-y-6">
                  <div className="border-l-2 border-cyber-blue pl-4">
                    <h4 className="font-semibold text-lg">Bachelor of Technology</h4>
                    <p className="text-cyber-blue font-mono">September 2022 — April 2026</p>
                    <p className="text-muted-foreground">Kalasalingam Academy of Research and Education</p>
                    <p className="text-cyber-green font-mono">CGPA: 8.97/10</p>
                  </div>
                  <div className="border-l-2 border-cyber-purple pl-4">
                    <h4 className="font-semibold text-lg">Higher Secondary</h4>
                    <p className="text-cyber-purple font-mono">June 2020 — May 2022</p>
                    <p className="text-muted-foreground">Sainik School Amaravathinagar</p>
                    <p className="text-cyber-green font-mono">Score: 88%</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Right column - Skills and Achievements */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Skills */}
              <Card className="cyber-border bg-card/50 backdrop-blur-sm p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Code className="w-8 h-8 text-cyber-green" />
                  <h3 className="text-2xl font-bold text-cyber-green">Expertise</h3>
                </div>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-mono text-sm">{skill.name}</span>
                        <span className={`font-mono text-sm text-${skill.color}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted/30"
                      />
                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* Achievements */}
              <Card className="cyber-border bg-card/50 backdrop-blur-sm p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-8 h-8 text-cyber-pink" />
                  <h3 className="text-2xl font-bold text-cyber-pink">Achievements</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-2 border-cyber-blue pl-4">
                    <h4 className="font-semibold">IBM ICE Day 24-hour Hackathon</h4>
                    <p className="text-cyber-blue text-sm font-mono">Runner-Up - 2023</p>
                    <p className="text-muted-foreground text-sm">
                      Innovation and endurance in real-time problem-solving
                    </p>
                  </div>
                  <div className="border-l-2 border-cyber-green pl-4">
                    <h4 className="font-semibold">CTF Competition Winner</h4>
                    <p className="text-cyber-green text-sm font-mono">University Level</p>
                    <p className="text-muted-foreground text-sm">
                      Ethical hacking and problem-solving under pressure
                    </p>
                  </div>
                  <div className="border-l-2 border-cyber-purple pl-4">
                    <h4 className="font-semibold">Best in Computer Science</h4>
                    <p className="text-cyber-purple text-sm font-mono">Class 12</p>
                    <p className="text-muted-foreground text-sm">
                      Outstanding academic performance and excellence
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}