/**
 * Section anchor IDs — single source of truth so nav links,
 * hero CTAs and section ids never drift out of sync.
 */
export const ANCHORS = {
  about: 'about',
  projects: 'projects',
  contact: 'contact'
} as const;

export type AnchorId = (typeof ANCHORS)[keyof typeof ANCHORS];