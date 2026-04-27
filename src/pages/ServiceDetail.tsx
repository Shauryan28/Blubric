import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Activity, Target, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';
import './pages.css';

const serviceData: Record<string, {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  intro: string;
  color: string;
  features: { title: string; desc: string }[];
  process: { step: string; detail: string }[];
  outcomes: string[];
}> = {
  'business-audits': {
    icon: <Activity size={48} strokeWidth={1.5} />,
    title: 'Business Audits',
    subtitle: 'Diagnostic Intelligence',
    intro: 'Our Business Audit is a comprehensive, ground-level diagnostic that goes far beyond surface-level financial reviews. We dissect your operations, revenue streams, cost structures, and organizational workflows to identify precisely where value is being lost — and where it can be unlocked.',
    color: '#2563eb',
    features: [
      { title: 'Operational Gap Analysis', desc: 'We map every process in your business to find bottlenecks, redundancies, and inefficiencies that silently erode your margins.' },
      { title: 'Revenue Stream Diagnostics', desc: 'Identify which revenue lines are truly profitable and which are costing you more than they return — backed by hard data.' },
      { title: 'Cost Structure Review', desc: 'A forensic breakdown of your fixed and variable costs, benchmarked against industry standards to find savings.' },
      { title: 'Team & Talent Assessment', desc: 'Evaluate whether your current team structure and capabilities align with your growth ambitions.' },
    ],
    process: [
      { step: 'Discovery Call', detail: 'A 30-minute session to understand your business context, pain points, and objectives.' },
      { step: 'Data Collection', detail: 'We gather financials, operational data, and conduct stakeholder interviews over 5–7 business days.' },
      { step: 'Deep Analysis', detail: 'Our team runs proprietary diagnostic frameworks to surface hidden patterns and risks.' },
      { step: 'Report & Roadmap', detail: 'You receive a detailed audit report with prioritized, actionable recommendations.' },
    ],
    outcomes: [
      'Crystal-clear understanding of your business health',
      'Prioritized list of quick wins and long-term fixes',
      'Benchmarking data against industry peers',
      'A strategic foundation for all future decisions',
    ],
  },
  'growth-strategy': {
    icon: <Target size={48} strokeWidth={1.5} />,
    title: 'Growth Strategy',
    subtitle: 'Scalable Revenue Architecture',
    intro: 'Growth without direction is just chaos. Our Growth Strategy service builds a precise, data-backed roadmap that tells you exactly where to invest, which markets to target, and how to outmanoeuvre competitors — all tailored to the unique dynamics of Indian businesses.',
    color: '#16a34a',
    features: [
      { title: 'Market Opportunity Mapping', desc: 'We identify untapped segments, emerging trends, and blue-ocean opportunities specific to your industry and geography.' },
      { title: 'Competitor Intelligence', desc: 'Detailed analysis of competitor positioning, pricing strategies, and market share — so you know exactly where the gaps are.' },
      { title: 'Revenue Model Design', desc: 'Build or refine your revenue model to maximize lifetime value, improve unit economics, and reduce customer acquisition costs.' },
      { title: 'Go-to-Market Planning', desc: 'A phased launch and expansion blueprint with clear milestones, KPIs, and contingency plans.' },
    ],
    process: [
      { step: 'Strategic Brief', detail: 'We align on your vision, constraints, and growth targets through a structured kickoff.' },
      { step: 'Research Phase', detail: 'Market sizing, competitor benchmarking, and customer persona development over 10–14 days.' },
      { step: 'Strategy Workshop', detail: 'Collaborative sessions to co-create the roadmap with your leadership team.' },
      { step: 'Execution Playbook', detail: 'A comprehensive, actionable strategy document with quarterly milestones.' },
    ],
    outcomes: [
      'A clear, phased growth roadmap with measurable KPIs',
      'Deep understanding of your competitive landscape',
      'Refined revenue model optimized for scale',
      'Confidence to make bold, informed decisions',
    ],
  },
  'advisory-support': {
    icon: <ShieldCheck size={48} strokeWidth={1.5} />,
    title: 'Advisory Support',
    subtitle: 'Continuous Strategic Partnership',
    intro: 'Strategy without execution is a PowerPoint. Our Advisory Support embeds us as an extension of your leadership team — providing ongoing mentorship, real-time problem-solving, and accountability to ensure every strategy translates into measurable results.',
    color: '#9333ea',
    features: [
      { title: 'Monthly Strategy Reviews', desc: 'Structured check-ins to review progress, recalibrate priorities, and address emerging challenges before they escalate.' },
      { title: 'On-Demand Advisory', desc: 'Direct access to senior advisors for critical decisions — from pricing pivots to partnership evaluations.' },
      { title: 'Execution Tracking', desc: 'We monitor the implementation of every recommendation, ensuring nothing falls through the cracks.' },
      { title: 'AI & Automation Integration', desc: 'Hands-on support to implement AI tools and automation workflows that boost efficiency across your operations.' },
    ],
    process: [
      { step: 'Onboarding', detail: 'Comprehensive alignment session to set engagement scope, communication cadence, and success metrics.' },
      { step: 'Ongoing Cadence', detail: 'Bi-weekly or monthly advisory sessions tailored to your operational rhythm.' },
      { step: 'Escalation Support', detail: 'Priority access for urgent decisions, market shifts, or crisis navigation.' },
      { step: 'Quarterly Impact Review', detail: 'Detailed analysis of measurable outcomes and strategic recalibration.' },
    ],
    outcomes: [
      'A trusted advisory partner invested in your success',
      'Faster, more confident decision-making',
      'Consistent progress tracking and accountability',
      'Tangible, measurable business impact quarter over quarter',
    ],
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : undefined;

  if (!service) return <Navigate to="/services" replace />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="sd-hero">
        <motion.div
          className="sd-hero-icon"
          style={{ color: service.color }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'backOut' }}
        >
          {service.icon}
        </motion.div>
        <motion.span
          className="sd-hero-subtitle"
          style={{ color: service.color }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {service.subtitle}
        </motion.span>
        <motion.h1
          className="sd-hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {service.title}
        </motion.h1>
        <motion.p
          className="sd-hero-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {service.intro}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Link to="/contact" className="cta-button primary-cta" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Get Started <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="sd-section">
        <div className="sd-section-header">
          <span className="section-subtitle">What's Included</span>
          <h2 className="section-title">Core Capabilities</h2>
        </div>
        <div className="sd-features-grid">
          {service.features.map((f, i) => (
            <motion.div
              key={i}
              className="sd-feature-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={fadeUp}
            >
              <div className="sd-feature-accent" style={{ background: service.color }}></div>
              <h3 className="sd-feature-title">{f.title}</h3>
              <p className="sd-feature-desc">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="sd-section sd-section-alt">
        <div className="sd-section-header">
          <span className="section-subtitle">How It Works</span>
          <h2 className="section-title">Our Process</h2>
        </div>
        <div className="sd-process-list">
          {service.process.map((p, i) => (
            <motion.div
              key={i}
              className="sd-process-item"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
            >
              <div className="sd-process-number" style={{ background: service.color }}>{String(i + 1).padStart(2, '0')}</div>
              <div className="sd-process-content">
                <h3 className="sd-process-step">{p.step}</h3>
                <p className="sd-process-detail">{p.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="sd-section">
        <div className="sd-section-header">
          <span className="section-subtitle">What You Get</span>
          <h2 className="section-title">Expected Outcomes</h2>
        </div>
        <div className="sd-outcomes">
          {service.outcomes.map((o, i) => (
            <motion.div
              key={i}
              className="sd-outcome-item"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <CheckCircle size={22} color={service.color} strokeWidth={2} />
              <span>{o}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="sd-cta-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to get started?
        </motion.h2>
        <motion.p
          className="sd-cta-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Book a free discovery call or request a custom quotation.
        </motion.p>
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a href="https://calendly.com/i9409285178/30min" target="_blank" rel="noopener noreferrer" className="cta-button primary-cta" style={{ display: 'inline-block', textDecoration: 'none' }}>Book a Call</a>
          <Link to="/contact" className="secondary-cta" style={{ textDecoration: 'none' }}>Request a Quotation</Link>
        </motion.div>
      </section>
    </motion.div>
  );
}
