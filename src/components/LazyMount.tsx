import { useEffect, useRef, useState, type ReactNode } from 'react';

interface LazyMountProps {
  children: ReactNode;
  rootMargin?: string;
  className?: string;
}

/**
 * Monte le contenu (et donc ses imports dynamiques) seulement quand
 * l'élément approche du viewport. Réduit le JS chargé au départ.
 */
export default function LazyMount({ children, rootMargin = '600px 0px', className = '' }: LazyMountProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className}>
      {inView ? children : null}
    </div>
  );
}
