import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { EASE } from '../lib/motion';

interface ThemeToggleProps {
  dark: boolean;
  toggle: () => void;
}

export default function ThemeToggle({ dark, toggle }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.9 }}
      aria-label="Basculer le thème sombre"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-forest dark:bg-emerald text-white
                 flex items-center justify-center border border-white/10
                 shadow-[0_2px_8px_-2px_rgba(6,40,30,0.4)]
                 dark:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.55)]
                 hover:scale-105 hover:shadow-[0_4px_12px_-4px_rgba(6,40,30,0.5)]
                 transition-all duration-300"
    >
      <motion.div
        key={dark ? 'moon' : 'sun'}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: EASE }}
      >
        {dark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      </motion.div>
    </motion.button>
  );
}