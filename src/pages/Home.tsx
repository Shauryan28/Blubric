import { motion } from 'framer-motion';
import GlassSurface from '../components/GlassSurface';
import AnimatedCounter from '../components/AnimatedCounter';
import BorderGlow from '../components/BorderGlow';
import TrueFocus from '../components/TrueFocus';
import { Target, Activity, Zap, ShieldCheck, Search, Map, FileText, Settings, Users, TrendingUp, IndianRupee, Award } from 'lucide-react';
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
          <TrueFocus 
            sentence="Clarity. Strategy. Execution."
            manualMode={false}
            blurAmount={4}
            borderColor="rgba(37, 99, 235, 0.8)"
            glowColor="rgba(37, 99, 235, 0.4)"
            animationDuration={0.8}
            pauseBetweenAnimations={0.5}
          />
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

      <section className="impact-section">
        <div className="impact-header">
          <motion.span
            className="section-subtitle"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Proven Results
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The Numbers Speak for Themselves
          </motion.h2>
        </div>
        <div className="impact-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            style={{ flex: 1, minWidth: '260px', display: 'flex' }}
          >
            <BorderGlow glowColor="#2563eb">
              <div className="impact-icon-wrap"><Users size={32} strokeWidth={1.5} color="#2563eb" /></div>
              <h3 className="impact-number"><AnimatedCounter to={250} suffix="+" /></h3>
              <p className="impact-label">Companies Scaled</p>
              <p className="impact-desc">Across sectors — from early-stage startups to established family businesses across India.</p>
            </BorderGlow>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ flex: 1, minWidth: '260px', display: 'flex' }}
          >
            <BorderGlow glowColor="#16a34a">
              <div className="impact-icon-wrap"><TrendingUp size={32} strokeWidth={1.5} color="#16a34a" /></div>
              <h3 className="impact-number" style={{ color: '#16a34a' }}><AnimatedCounter to={35} suffix="%" /></h3>
              <p className="impact-label">Average Profit Growth</p>
              <p className="impact-desc">Clients see measurable profit improvement within 90 days of our engagement.</p>
            </BorderGlow>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ flex: 1, minWidth: '260px', display: 'flex' }}
          >
            <BorderGlow glowColor="#9333ea">
              <div className="impact-icon-wrap"><IndianRupee size={32} strokeWidth={1.5} color="#9333ea" /></div>
              <h3 className="impact-number" style={{ color: '#9333ea' }}>₹<AnimatedCounter to={50} suffix="Cr+" /></h3>
              <p className="impact-label">Revenue Generated</p>
              <p className="impact-desc">Direct, attributable revenue unlocked for our clients through strategic execution.</p>
            </BorderGlow>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{ flex: 1, minWidth: '260px', display: 'flex' }}
          >
            <BorderGlow glowColor="#ea580c">
              <div className="impact-icon-wrap"><Award size={32} strokeWidth={1.5} color="#ea580c" /></div>
              <h3 className="impact-number" style={{ color: '#ea580c' }}><AnimatedCounter to={98} suffix="%" /></h3>
              <p className="impact-label">Client Retention Rate</p>
              <p className="impact-desc">Once clients see results, they stay. Our long-term advisory model builds lasting trust.</p>
            </BorderGlow>
          </motion.div>
        </div>
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
                  <h3 className="glass-card-title" style={{ fontSize: '1.4rem', marginBottom: '0.8rem', fontWeight: 700 }}>{step.title}</h3>
                  <p className="glass-card-text" style={{ fontSize: '1rem', lineHeight: 1.6 }}>{step.description}</p>
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
