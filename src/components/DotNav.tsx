import { useEffect, useRef, useState } from 'react';
import { NAV_DOTS } from '../data/nav';

/** Renvoie true si le fond de cet élément est sombre, null si transparent (on continue de remonter) */
function backgroundDarkness(el: Element): boolean | null {
  const bg = getComputedStyle(el).backgroundColor;
  if (!bg) return null;
  const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (!m) return null;
  const alpha = m[4] !== undefined ? parseFloat(m[4]) : 1;
  if (alpha < 0.5) return null; // transparent → on regarde le parent
  const r = parseInt(m[1]);
  const g = parseInt(m[2]);
  const b = parseInt(m[3]);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.5;
}

export default function DotNav() {
  const [active, setActive] = useState('hero');
  const [onDark, setOnDark] = useState<boolean[]>(() => NAV_DOTS.map(() => true));
  const navRef = useRef<HTMLElement>(null);
  const dotRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const rafRef = useRef(0);

  // Section active (pour le dot "actif")
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    NAV_DOTS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Pour chaque dot : mesure la couleur du fond juste derrière lui
  useEffect(() => {
    const update = () => {
      const nav = navRef.current;
      if (!nav) return;
      // On rend la nav "transparente" pour que elementFromPoint voie le fond derrière
      nav.style.pointerEvents = 'none';
      const next = dotRefs.current.map((dot) => {
        if (!dot) return true;
        const r = dot.getBoundingClientRect();
        const el = document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2);
        if (!el) return true;
        let node: Element | null = el;
        while (node) {
          const dark = backgroundDarkness(node);
          if (dark !== null) return dark;
          node = node.parentElement;
        }
        return false;
      });
      nav.style.pointerEvents = '';
      setOnDark((prev) => (prev.length === next.length && prev.every((v, i) => v === next[i]) ? prev : next));
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <nav ref={navRef} className="dot-nav" aria-label="Navigation de section">
      {NAV_DOTS.map(({ id, label }, i) => (
        <a
          key={id}
          href={`#${id}`}
          ref={(el) => {
            dotRefs.current[i] = el;
          }}
          aria-label={label}
          className={`dot-nav-item ${active === id ? 'active' : ''} ${onDark[i] ? 'on-dark' : ''}`}
        >
          <span className="dot-label">{label}</span>
        </a>
      ))}
    </nav>
  );
}