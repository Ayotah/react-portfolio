import React from 'react'

const Footer = () => {
  return (
    <footer style={{ fontFamily: "'DM Sans', sans-serif", background: '#464545', paddingTop: '56px' }}>
      
      {/* Top Section */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', gap: '40px',
        maxWidth: '860px', margin: '0 auto', padding: '0 40px 48px',
        borderBottom: '0.5px solid rgba(255,255,255,0.1)'
      }}>

        {/* Brand */}
        <div>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', color: '#f5f0e8', margin: '0 0 10px' }}>
            Ayotah Endali
          </p>
          <p style={{ fontSize: '13px', color: '#7a7570', lineHeight: 1.7, margin: '0 0 28px', maxWidth: '220px' }}>
            Designer & developer crafting thoughtful digital experiences.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { href: 'https://github.com/Ayotah', icon: 'bi bi-github', label: 'GitHub' },
              { href: 'https://facebook.com/your-profile', icon: 'bi bi-facebook', label: 'Facebook' },
              { href: '#', icon: 'bi bi-linkedin', label: 'LinkedIn' },
            ].map(({ href, icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  border: '0.5px solid rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#9a9490', textDecoration: 'none', fontSize: '16px'
                }}>
                <i className={icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Nav Links */}
        <div>
          <p style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5a5550', margin: '0 0 18px' }}>
            Navigate
          </p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['/', '/about', '/projects', '/contact'].map((path, i) => (
              <li key={path}>
                <a href={path} style={{ fontSize: '14px', color: '#8a8480', textDecoration: 'none', fontWeight: 300 }}>
                  {['Home', 'About', 'Projects', 'Contact'][i]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5a5550', margin: '0 0 18px' }}>
            Get in touch
          </p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { href: 'mailto:hello@ayotah.dev', label: 'hello@ayotah.dev' },
              { href: '#', label: 'Schedule a call' },
              { href: '#', label: 'Download CV' },
            ].map(({ href, label }) => (
              <li key={label}>
                <a href={href} style={{ fontSize: '14px', color: '#8a8480', textDecoration: 'none', fontWeight: 300 }}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        maxWidth: '860px', margin: '0 auto', padding: '20px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <span style={{ fontSize: '12px', color: '#4a4540' }}>
          © 2024 Ayotah Endali &nbsp;·&nbsp; All rights reserved
        </span>
        <span style={{ fontSize: '12px', color: '#4a4540', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4caf7d', display: 'inline-block' }}></span>
          Available for work
        </span>
      </div>

    </footer>
  )
}

export default Footer