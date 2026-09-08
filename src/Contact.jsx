import React, { useState } from 'react'
import './Contact.css'

const CONTACT_ITEMS = [
  {
    id: 'email',
    label: 'EMAIL',
    value: 'vijaysahu@gmail.com',
    href: 'mailto:vijaysahu@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    )
  },
  {
    id: 'portfolio',
    label: 'PORTFOLIO',
    value: 'vijay-henna.vercel.app',
    href: 'https://vijay-henna.vercel.app',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
        <path d="M2 12h20"/>
      </svg>
    )
  },
  {
    id: 'linkedin',
    label: 'LINKEDIN',
    value: 'linkedin.com/in/vijaysahu-',
    href: 'https://linkedin.com/in/vijaysahu-',
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    )
  },
  {
    id: 'phone',
    label: 'PHONE',
    value: '+91 75061 82484',
    href: 'tel:+917506182484',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    )
  },
  {
    id: 'location',
    label: 'LOCATION',
    value: 'Bengaluru, India',
    href: 'https://maps.google.com/?q=Bengaluru+India',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    )
  }
]

export default function Contact({ onBack }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSent, setIsSent] = useState(false)

  const handleSendForm = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill all fields')
      return
    }
    setIsSent(true)
    setTimeout(() => {
      alert('Message sent successfully! I will get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
      setIsSent(false)
      setIsModalOpen(false)
    }, 600)
  }

  return (
    <div className="contact-page-container">
      {/* Smooth Moving Purple Ball Layer */}
      <div className="page-ambient-glow-layer">
        <div className="page-moving-purple-orb" />
      </div>

      {/* Top Header Bar */}
      <header className="contact-topbar">
        <button className="contact-home-btn" onClick={onBack} title="Back">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
      </header>

      {/* Main Wrapper */}
      <main className="contact-main-wrapper">
        <div className="contact-master-card">
          {/* Main 2-Column Body */}
          <div className="contact-body-grid">
            {/* Left Column: Headlines & Work Together */}
            <div className="contact-left-col">
              <div>
                {/* Tag */}
                <div className="contact-tag-wrap">
                  <span className="contact-tag-text">CONTACT</span>
                  <div className="contact-tag-line" />
                </div>

                {/* Headline */}
                <h1 className="contact-headline">
                  Let's{' '}
                  <span className="highlight-purple">Connect.</span>
                </h1>

                {/* Description */}
                <p className="contact-body-text">
                  I'm always open to discussing new opportunities, creative ideas, or exciting projects.
                </p>
              </div>

              {/* Let's Work Together Card */}
              <div className="contact-work-card">
                <div className="contact-work-top">
                  <div className="contact-plane-icon-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m22 2-7 20-4-9-9-4Z"/>
                      <path d="M22 2 11 13"/>
                    </svg>
                  </div>
                  <div className="contact-work-text">
                    <h4>LET'S WORK TOGETHER</h4>
                    <p>Have a project in mind or just want to say hi? Drop me a message!</p>
                  </div>
                </div>

                {/* Send Message Button */}
                <button
                  className="contact-send-btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  <div className="btn-left-content">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    <span>Send Message</span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column: 5 Stacked Cards */}
            <div className="contact-right-col">
              {CONTACT_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-info-card-item"
                >
                  <div className="contact-card-icon-wrap">
                    {item.icon}
                  </div>
                  <div className="contact-card-details">
                    <span className="contact-card-label">{item.label}</span>
                    <span className="contact-card-value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Social Channels Bar */}
          <footer className="contact-footer-bar">
            <span className="contact-footer-label">LET'S CONNECT ON</span>
            <div className="contact-social-icons-row">
              {/* Dribbble / Web */}
              <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="social-circle-btn" title="Dribbble">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/>
                  <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/>
                  <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"/>
                </svg>
              </a>

              {/* Behance */}
              <a href="https://behance.net" target="_blank" rel="noreferrer" className="social-circle-btn" title="Behance" style={{ fontWeight: 700, fontSize: '13px', fontFamily: 'sans-serif' }}>
                Bē
              </a>

              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-circle-btn" title="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-circle-btn" title="Twitter / X">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </footer>
        </div>
      </main>

      {/* Interactive Message Composition Modal */}
      {isModalOpen && (
        <div className="contact-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="contact-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-icon" onClick={() => setIsModalOpen(false)}>
              ✕
            </button>
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>Send a Message</h3>
            <p style={{ fontSize: '12.5px', color: '#9493a8', marginBottom: '18px' }}>
              Drop a quick note and I'll respond within 24 hours.
            </p>

            <form onSubmit={handleSendForm} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label style={{ fontSize: '11px', color: '#888', textTransform: 'uppercase', display: 'block', marginBottom: '4px', fontWeight: 600 }}>Your Name</label>
                <input
                  type="text"
                  placeholder="Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: '100%', background: '#25252e', border: '1px solid #3e3e4d', borderRadius: '8px', padding: '9px 12px', color: '#fff', fontSize: '13px', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '11px', color: '#888', textTransform: 'uppercase', display: 'block', marginBottom: '4px', fontWeight: 600 }}>Email Address</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: '100%', background: '#25252e', border: '1px solid #3e3e4d', borderRadius: '8px', padding: '9px 12px', color: '#fff', fontSize: '13px', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '11px', color: '#888', textTransform: 'uppercase', display: 'block', marginBottom: '4px', fontWeight: 600 }}>Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ width: '100%', background: '#25252e', border: '1px solid #3e3e4d', borderRadius: '8px', padding: '9px 12px', color: '#fff', fontSize: '13px', outline: 'none', resize: 'none', fontFamily: 'inherit' }}
                />
              </div>

              <button
                type="submit"
                disabled={isSent}
                style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  border: 'none',
                  color: '#fff',
                  padding: '11px',
                  borderRadius: '9px',
                  fontWeight: 600,
                  fontSize: '13.5px',
                  cursor: 'pointer',
                  marginTop: '4px',
                  boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)'
                }}
              >
                {isSent ? 'Sending...' : 'Send Message 🚀'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
