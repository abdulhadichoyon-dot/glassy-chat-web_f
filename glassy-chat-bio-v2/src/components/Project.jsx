import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, Send } from 'lucide-react';
import { site } from '../data/site.js';

function ChatPreview() {
  return (
    <div className="chat-preview" aria-label="Decorative Glassy Chat conversation preview">
      <div className="chat-preview-top">
        <div className="chat-brand"><span className="chat-brand-icon">g<span>.</span></span><span>GLASSY CHAT</span></div>
        <div className="window-dots"><i /><i /><i /></div>
      </div>
      <div className="chat-preview-meta"><span>YOUR SPACE, YOUR PACE</span><span>ONLINE <i /></span></div>
      <div className="chat-thread">
        <div className="chat-message chat-message--incoming">Hey! How's the new project coming along?</div>
        <div className="chat-message chat-message--outgoing">Piece by piece. The little details are starting to click.<span>Delivered · 10:42</span></div>
        <div className="chat-message chat-message--incoming">That's the best part. Keep going ✳</div>
      </div>
      <div className="chat-input-preview"><span>Write a message...</span><span className="chat-send"><Send size={14} /></span></div>
      <div className="chat-preview-foot"><span>PRIVATE CONVERSATIONS</span><span>G / 001</span></div>
      <div className="project-orbit" aria-hidden="true"><span /></div>
    </div>
  );
}

function SupportBox() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText && window.isSecureContext) {
        await navigator.clipboard.writeText(site.email);
      } else {
        const field = document.createElement('textarea');
        field.value = site.email;
        field.setAttribute('readonly', '');
        field.style.position = 'fixed';
        field.style.opacity = '0';
        document.body.appendChild(field);
        field.select();
        const success = document.execCommand('copy');
        field.remove();
        if (!success) throw new Error('Clipboard unavailable');
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  return (
    <aside className="support-box" id="support" data-motion="rise">
      <div className="support-copy">
        <span className="support-kicker"><Mail size={13} /> NEED A HAND?</span>
        <span className="support-title">Glassy Chat support</span>
        <a className="support-email" href={`mailto:${site.email}`}>{site.email}</a>
      </div>
      <div className="support-actions">
        <a className="support-action support-action--mail" href={`mailto:${site.email}`} aria-label="Email Glassy Chat support"><Mail size={17} /></a>
        <button className="support-action" type="button" onClick={copyEmail} aria-label="Copy support email">
          {copied ? <Check size={17} /> : <Copy size={16} />}
        </button>
      </div>
      <span className={`copy-feedback${copied ? ' is-visible' : ''}`} role="status" aria-live="polite">Email copied</span>
    </aside>
  );
}

export default function Project() {
  return (
    <section className="project-section" id="project">
      <div className="page-shell">
        <div className="project-panel" data-motion="rise">
          <div className="project-panel-top">
            <span>02 / A PROJECT I'M BUILDING</span>
            <span className="project-status"><i /> LIVE ON THE WEB</span>
          </div>
          <div className="project-content">
            <div className="project-copy">
              <p className="project-overline">A LITTLE MORE HUMAN. A LITTLE LESS NOISE.</p>
              <h2>Glassy<br /><em>Chat.</em></h2>
              <p className="project-description">{site.project.description}</p>
              <a className="project-visit" href={site.project.url} target="_blank" rel="noreferrer">
                Visit Glassy Chat <ArrowUpRight size={17} />
              </a>
              <SupportBox />
            </div>
            <ChatPreview />
          </div>
          <div className="project-panel-foot"><span>DESIGNED TO KEEP CONVERSATION SIMPLE</span><span>GLASSY CHAT ↗</span></div>
        </div>
      </div>
    </section>
  );
}
