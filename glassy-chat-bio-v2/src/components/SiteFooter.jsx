import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { site } from '../data/site.js';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <a className="footer-brand" href="#top">c<span>.</span></a>
        <p>© {new Date().getFullYear()} {site.name}. Made with curiosity.</p>
        <a className="footer-project" href={site.project.url} target="_blank" rel="noreferrer">GLASSY CHAT <ArrowUpRight size={13} /></a>
        <a className="back-to-top" href="#top"><ArrowUp size={14} /> BACK TO TOP</a>
      </div>
    </footer>
  );
}
