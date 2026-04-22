import { motion } from 'framer-motion';
import GlassSurface from '../components/GlassSurface';
import { useEffect } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import './pages.css';

const CalendlyEmbed = () => {
  useEffect(() => {
    // Only append script if it doesn't already exist to avoid duplicates
    if (!document.getElementById('calendly-script')) {
      const head = document.querySelector('head');
      const script = document.createElement('script');
      script.id = 'calendly-script';
      script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
      script.setAttribute('async', 'true');
      head?.appendChild(script);
    }
  }, []);

  return (
    <div 
      className="calendly-inline-widget" 
      data-url="https://calendly.com/i9409285178/30min" 
      style={{ minWidth: '320px', height: '700px', width: '100%' }} 
    />
  );
};

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
    >
      <div className="section-header">
        <span className="section-subtitle">Get In Touch</span>
        <h1 className="hero-title" style={{ fontSize: '3rem', margin: '0 auto' }}>Start Your Journey</h1>
      </div>

      <div className="grid-2" style={{ marginTop: '4rem', alignItems: 'stretch' }}>
        <GlassSurface backgroundOpacity={0.02} style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 className="glass-card-title" style={{ marginBottom: '2rem', fontSize: '1.8rem' }}>Direct Contact</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="glass-card-icon" style={{ width: '48px', height: '48px', borderRadius: '50%', flexShrink: 0, marginBottom: 0 }}>
                <Mail size={24} />
              </div>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Email Us</p>
                <p style={{ color: 'var(--text-secondary)' }}>hello@blubric.com</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="glass-card-icon" style={{ width: '48px', height: '48px', borderRadius: '50%', flexShrink: 0, marginBottom: 0 }}>
                <Phone size={24} />
              </div>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Call Us</p>
                <p style={{ color: 'var(--text-secondary)' }}>+91 98765 43210</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="glass-card-icon" style={{ width: '48px', height: '48px', borderRadius: '50%', flexShrink: 0, marginBottom: 0 }}>
                <MapPin size={24} />
              </div>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Location</p>
                <p style={{ color: 'var(--text-secondary)' }}>India</p>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
            <h3 className="glass-card-title" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Book a Consultation</h3>
            <p className="glass-card-text">
              Select a time that works best for you on the calendar to schedule a 30-minute discovery call with our founder.
            </p>
          </div>
        </GlassSurface>

        <GlassSurface backgroundOpacity={0.1} style={{ padding: '1rem', overflow: 'hidden' }}>
          <CalendlyEmbed />
        </GlassSurface>
      </div>

      {/* Working Query Form Section */}
      <div style={{ marginTop: '4rem' }}>
        <GlassSurface backgroundOpacity={0.03} style={{ padding: '4rem 3rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Request a Quotation</h2>
            <p className="glass-card-text" style={{ fontSize: '1.1rem' }}>
              Have specific requirements? Send us a detailed query and our team will get back to you with a tailored proposal.
            </p>
          </div>

          <form 
            action="https://formspree.io/f/your-form-id" 
            method="POST"
            className="query-form"
            style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div className="grid-2" style={{ gap: '1.5rem', marginTop: 0 }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Full Name</label>
                <input type="text" name="name" className="form-input" placeholder="John Doe" required />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Email Address</label>
                <input type="email" name="email" className="form-input" placeholder="john@company.com" required />
              </div>
            </div>

            <div className="grid-2" style={{ gap: '1.5rem', marginTop: 0 }}>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Company Name</label>
                <input type="text" name="company" className="form-input" placeholder="Acme Corp" required />
              </div>
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Estimated Budget</label>
                <select name="budget" className="form-input" required style={{ appearance: 'none', backgroundColor: '#fff' }}>
                  <option value="" disabled selected>Select Budget Range</option>
                  <option value="Under ₹5L">Under ₹5 Lakhs</option>
                  <option value="₹5L - ₹20L">₹5L - ₹20 Lakhs</option>
                  <option value="₹20L+">₹20 Lakhs+</option>
                </select>
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Project Details & Requirements</label>
              <textarea 
                name="message" 
                className="form-input" 
                placeholder="Tell us about your current challenges, goals, and timeline..." 
                rows={6}
                required
              ></textarea>
            </div>

            <button type="submit" className="cta-button primary-cta" style={{ alignSelf: 'center', minWidth: '250px', marginTop: '1rem' }}>
              Submit Query
            </button>
          </form>
        </GlassSurface>
      </div>
    </motion.div>
  );
}
