import { motion } from 'framer-motion';
import GlassSurface from '../components/GlassSurface';

import { Target, Activity, Zap, ShieldCheck, Search, Map, FileText, Settings, Users } from 'lucide-react';
import './pages.css';

const journeySteps = [
  { icon: <Search size={64} strokeWidth={1} />, title: "Initial Diagnostic & Business Audit", description: "Deep dive into your operations, financials, and market positioning to identify blind spots." },
  { icon: <Map size={64} strokeWidth={1} />, title: "Market & Competitor Analysis", description: "Assess where you stand in the ecosystem and discover uncontested opportunities for revenue." },
  { icon: <FileText size={64} strokeWidth={1} />, title: "Strategic Roadmap Creation", description: "Develop clear, actionable master plans tailored specifically to the unique constraints of Indian businesses." },
  { icon: <Settings size={64} strokeWidth={1} />, title: "Implementation & System Setup", description: "Deploying the exact operational frameworks and AI integrations needed to streamline efficiency." },
  { icon: <Users size={64} strokeWidth={1} />, title: "Ongoing Advisory & Iteration", description: "We don't just hand over a report. We work alongside you to execute, measure, and pivot in real-time." }
];

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="hero-section">
        <motion.h1 
          className="hero-title"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Clarity. Strategy. Execution.
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          We are a lean, modern advisory practice helping Indian businesses overcome growth plateaus with execution-focused direction.
        </motion.p>
        <motion.div 
          className="hero-cta"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button className="cta-button primary-cta">Book a Consultation</button>
          <button className="secondary-cta">Get Diagnostic Audit</button>
        </motion.div>
      </section>

      <section className="section-container">
        <div className="section-header">
          <span className="section-subtitle">What We Do</span>
          <h2 className="section-title">Services Built for Growth</h2>
        </div>
        <div className="grid-3">
          <GlassSurface>
            <div className="glass-card">
              <div className="glass-card-icon"><Activity /></div>
              <h3 className="glass-card-title">Business Audits</h3>
              <p className="glass-card-text">Comprehensive diagnostics to identify operational gaps and hidden opportunities in your current setup.</p>
            </div>
          </GlassSurface>
          <GlassSurface>
            <div className="glass-card">
              <div className="glass-card-icon"><Target /></div>
              <h3 className="glass-card-title">Growth Strategy</h3>
              <p className="glass-card-text">Data-driven market analysis and competitor intelligence to build a robust, scalable revenue roadmap.</p>
            </div>
          </GlassSurface>
          <GlassSurface>
            <div className="glass-card">
              <div className="glass-card-icon"><ShieldCheck /></div>
              <h3 className="glass-card-title">Advisory Support</h3>
              <p className="glass-card-text">Ongoing mentorship and real-time execution support, ensuring strategies translate into tangible results.</p>
            </div>
          </GlassSurface>
        </div>
      </section>

      <section className="section-container">
        <div className="section-header">
          <span className="section-subtitle">The Blubric Journey</span>
          <h2 className="section-title">How We Engage</h2>
        </div>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {journeySteps.map((step, idx) => (
            <motion.div 
              className="timeline-item" 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="timeline-node"></div>
              <div className="timeline-content">
                <div className="timeline-card">
                  <div className="timeline-icon-wrap">
                    {step.icon}
                  </div>
                  <h3 className="glass-card-title" style={{ fontSize: '1.4rem', marginBottom: '0.8rem', color: '#fff', fontWeight: 700 }}>{step.title}</h3>
                  <p className="glass-card-text" style={{ fontSize: '1rem', lineHeight: 1.6, color: '#c9d2db' }}>{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <div className="section-header">
          <span className="section-subtitle">Why Blubric</span>
          <h2 className="section-title">The Premium Edge</h2>
        </div>
        <div className="grid-3">
          <div className="differentiator-item">
            <Zap className="differentiator-icon" />
            <div>
              <h3 className="glass-card-title" style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>Diagnostic-First Approach</h3>
              <p className="glass-card-text">We prescribe solutions only after a profound understanding of your unique bottlenecks.</p>
            </div>
          </div>
          <div className="differentiator-item">
            <Zap className="differentiator-icon" />
            <div>
              <h3 className="glass-card-title" style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>Indian Business Aligned</h3>
              <p className="glass-card-text">Our strategies are grounded in the practical realities of operating a business in India.</p>
            </div>
          </div>
          <div className="differentiator-item">
            <Zap className="differentiator-icon" />
            <div>
              <h3 className="glass-card-title" style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>Execution Focused</h3>
              <p className="glass-card-text">We deliver actionable steps, not just theoretical jargon, backed by founder-led credibility.</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
