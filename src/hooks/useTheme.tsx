import { useEffect, useState } from 'react';

export function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    const saved = window.localStorage.getItem('asdic-theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    window.localStorage.setItem('asdic-theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', dark ? '#0A0F0D' : '#06281E');
  }, [dark]);

  return { dark, toggle: () => setDark((d) => !d) };
}