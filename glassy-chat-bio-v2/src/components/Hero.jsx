import { ArrowDown, ArrowUpRight, Code2, Sparkles } from 'lucide-react';
import { site } from '../data/site.js';

function OrbitArtwork() {
  return (
    <div className="hero-art" aria-label="Abstract animated Choyon monogram">
      <div className="art-topline">
        <span>PERSONAL ARCHIVE</span>
        <span className="art-live"><i /> OPEN TO IDEAS</span>
      </div>
      <div className="orbit-stage">
        <div className="orbit-grid" />
        <div className="orbit-ring orbit-ring--outer" />
        <div className="orbit-ring orbit-ring--middle" />
        <div className="orbit-ring orbit-ring--inner" />
        <div className="orbit-core"><span>C<span>.</span></span></div>
        <span className="orbit-satellite satellite--lime" />
        <span className="orbit-satellite satellite--coral" />
        <span className="orbit-caption caption--top">IDEAS IN MOTION <b>↗</b></span>
        <span className="orbit-caption caption--bottom">EST. IN CURIOSITY / 001</span>
        <div className="orbit-note"><Sparkles size={13} /><span>Always in progress</span></div>
      </div>
      <div className="art-bottomline">
        <span>DESIGNING / BUILDING / LEARNING</span>
        <span>VOL. 01</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="page-shell hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-kicker"><span className="eyebrow-line" /> A SMALL CORNER OF THE INTERNET</p>
          <h1 className="hero-title">
            Hello,<br />
            I'm <span className="hero-name">Choyon<span className="hero-period">.</span></span>
          </h1>
          <p className="hero-description">
            Student by day, builder by curiosity. I love exploring <strong>code, digital experiences, and creative technology</strong> — then turning ideas into things people can actually use.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href={site.project.url} target="_blank" rel="noreferrer">
              Explore Glassy Chat <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a className="text-link" href="#about"><span className="text-link-icon"><ArrowDown size={14} /></span> A little about me</a>
          </div>
          <div className="hero-footnote"><Code2 size={14} /><span>MADE WITH CURIOSITY, NOT A FINISH LINE.</span></div>
        </div>
        <OrbitArtwork />
      </div>
      <div className="hero-side-index" aria-hidden="true">C / 001</div>
    </section>
  );
}
