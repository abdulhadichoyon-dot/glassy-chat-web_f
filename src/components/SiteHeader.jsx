import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { site } from '../data/site.js';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Selected work', href: '#project' },
  { label: 'Find me', href: '#connect' },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="page-shell nav-shell">
        <a className="brand-lockup" href="#top" aria-label="Choyon, back to top" onClick={closeMenu}>
          <span className="brand-mark">c<span>.</span></span>
          <span className="brand-name">CHOYON<span> / PERSONAL SITE</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav id="primary-navigation" className={`nav-links${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {links.map((link, index) => (
            <a className="nav-item" href={link.href} key={link.href} onClick={closeMenu}>
              <span className="nav-index">0{index + 1}</span>{link.label}
            </a>
          ))}
          <a className="nav-contact" href={`mailto:${site.email}`} onClick={closeMenu}>
            Say hello <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
