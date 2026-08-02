/**
 * Shared motion configuration — used by every section so the
 * whole site moves with the same personality.
 */

// House "expo-out" cubic-bezier curve — explicitly typed as a 4-number
// tuple so framer-motion accepts it everywhere (animate, transitions, springs).
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// "Fade + slide up" reveal, spread onto sections: {...fadeInUp}
export const fadeInUp = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: EASE }
};