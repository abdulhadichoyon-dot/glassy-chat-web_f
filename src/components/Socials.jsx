import { ArrowUpRight, Send } from 'lucide-react';
import { site } from '../data/site.js';

function Github({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.42-1.305.763-1.605-2.665-.305-5.466-1.333-5.466-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.805 5.623-5.475 5.921.431.372.816 1.102.816 2.222 0 1.605-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function Instagram({ size = 24, strokeWidth = 1.6, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}

const icons = { GitHub: Github, Instagram, Telegram: Send };

export default function Socials() {
  return (
    <section className="connect-section section-space" id="connect">
      <div className="page-shell">
        <div className="section-heading connect-heading" data-motion="rise">
          <div><p className="section-index">03 / ELSEWHERE ON THE INTERNET</p><h2>Find me <em>around.</em></h2></div>
          <p className="section-aside">Different corners, same person. Come say hello wherever you feel comfortable.</p>
        </div>
        <div className="social-list" data-motion="rise">
          {site.socials.map(({ name, handle, url }, index) => {
            const Icon = icons[name];
            return (
              <a className="social-row" href={url} key={name} target="_blank" rel="noreferrer">
                <span className="social-number">0{index + 1}</span>
                <span className="social-icon"><Icon size={20} strokeWidth={1.6} /></span>
                <span className="social-details"><strong>{name}</strong><small>{handle}</small></span>
                <ArrowUpRight className="social-arrow" size={19} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
