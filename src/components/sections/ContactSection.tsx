import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CyberButton } from '@/components/ui/cyber-button';
import { Mail, Phone, MapPin, Send, MessageSquare, Terminal } from 'lucide-react';

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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

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
            variants={itemVariants}
            className="text-center"
          >
            <h2 className="text-5xl font-bold bg-gradient-cyber bg-clip-text text-transparent mb-4">
              CONTACT
            </h2>
            <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full" />
            <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
              Ready to collaborate on cybersecurity projects or discuss security solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <Card className="cyber-border bg-card/40 backdrop-blur-sm p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Terminal className="w-8 h-8 text-cyber-green" />
                  <h3 className="text-2xl font-bold text-cyber-green">Connect</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 border border-muted/30">
                    <div className="p-2 rounded-lg bg-cyber-blue/10 border border-cyber-blue/30">
                      <Mail className="w-5 h-5 text-cyber-blue" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground font-mono text-sm">
                        caleb.gunalan@example.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 border border-muted/30">
                    <div className="p-2 rounded-lg bg-cyber-purple/10 border border-cyber-purple/30">
                      <Phone className="w-5 h-5 text-cyber-purple" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-muted-foreground font-mono text-sm">
                        +91 XXX XXX XXXX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/20 border border-muted/30">
                    <div className="p-2 rounded-lg bg-cyber-pink/10 border border-cyber-pink/30">
                      <MapPin className="w-5 h-5 text-cyber-pink" />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted-foreground font-mono text-sm">
                        Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Status indicators */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyber-green rounded-full animate-glow-pulse" />
                    <span className="text-sm font-mono text-cyber-green">Available for freelance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyber-blue rounded-full animate-glow-pulse" />
                    <span className="text-sm font-mono text-cyber-blue">Open to collaborations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyber-purple rounded-full animate-glow-pulse" />
                    <span className="text-sm font-mono text-cyber-purple">Response within 24h</span>
                  </div>
                </div>
              </Card>

              {/* Quick links */}
              <Card className="cyber-border bg-card/40 backdrop-blur-sm p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-8 h-8 text-cyber-blue" />
                  <h3 className="text-2xl font-bold text-cyber-blue">Quick Connect</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <CyberButton variant="neon" className="w-full">
                    LinkedIn
                  </CyberButton>
                  <CyberButton variant="matrix" className="w-full">
                    GitHub
                  </CyberButton>
                  <CyberButton variant="cyber" className="w-full">
                    Resume
                  </CyberButton>
                  <CyberButton variant="terminal" className="w-full">
                    Portfolio
                  </CyberButton>
                </div>
              </Card>
            </motion.div>

            {/* Contact form */}
            <motion.div variants={itemVariants}>
              <Card className="cyber-border bg-card/40 backdrop-blur-sm p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Send className="w-8 h-8 text-cyber-purple" />
                  <h3 className="text-2xl font-bold text-cyber-purple">Send Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-mono text-muted-foreground">Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="cyber-border bg-input/50 font-mono"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-mono text-muted-foreground">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="cyber-border bg-input/50 font-mono"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-mono text-muted-foreground">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="cyber-border bg-input/50 font-mono"
                      placeholder="Project collaboration / Security consultation"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-mono text-muted-foreground">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="cyber-border bg-input/50 font-mono min-h-32"
                      placeholder="Tell me about your project or security requirements..."
                      required
                    />
                  </div>

                  <CyberButton type="submit" variant="cyber" size="lg" className="w-full group">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    SEND MESSAGE
                  </CyberButton>
                </form>

                {/* Security notice */}
                <div className="mt-6 p-4 rounded-lg bg-cyber-green/5 border border-cyber-green/20">
                  <p className="text-sm text-cyber-green font-mono">
                    🔒 All communications are encrypted and secure
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}