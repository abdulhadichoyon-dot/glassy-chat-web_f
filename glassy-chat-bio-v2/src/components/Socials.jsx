import { ArrowUpRight, Github, Instagram, Send } from 'lucide-react';
import { site } from '../data/site.js';

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
