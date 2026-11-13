import { ArrowUpRight, Braces, Compass, Lightbulb, MoveUpRight } from 'lucide-react';

const cards = [
  {
    number: '01',
    icon: Braces,
    title: 'Code with intent.',
    description: 'Exploring the web, understanding how things work, and building projects one thoughtful step at a time.',
    className: 'about-card--code',
  },
  {
    number: '02',
    icon: Compass,
    title: 'Curiosity first.',
    description: 'New tools, fresh ideas, and the details that make a digital product feel genuinely considered.',
    className: 'about-card--curiosity',
  },
  {
    number: '03',
    icon: Lightbulb,
    title: 'Better every version.',
    description: 'Learn, experiment, listen, refine. The process matters just as much as the finished thing.',
    className: 'about-card--growth',
  },
];

export default function About() {
  return (
    <section className="about-section section-space" id="about">
      <div className="page-shell">
        <div className="section-heading" data-motion="rise">
          <div>
            <p className="section-index">01 / THE PERSON BEHIND THE PIXELS</p>
            <h2>Curious by nature.<br /><em>Building by choice.</em></h2>
          </div>
          <p className="section-aside">Not here to know everything. Here to keep discovering what is possible.</p>
        </div>

        <div className="about-layout">
          <article className="about-statement" data-motion="rise">
            <span className="statement-mark">“</span>
            <p>I believe good digital experiences come from <em>clear thinking, patient craft,</em> and caring about the small things.</p>
            <div className="statement-bottom"><span>THE WAY I LIKE TO BUILD</span><MoveUpRight size={18} /></div>
          </article>
          <div className="about-card-grid">
            {cards.map(({ number, icon: Icon, title, description, className }) => (
              <article className={`about-card ${className}`} key={number} data-motion="rise">
                <div className="about-card-top"><span>{number} / 03</span><Icon size={19} strokeWidth={1.6} /></div>
                <div><h3>{title}</h3><p>{description}</p></div>
                <span className="card-corner"><ArrowUpRight size={15} /></span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
