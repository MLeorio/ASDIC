import { motion } from 'framer-motion';
import Counter from '../components/Counter';
import { STATS } from '../data/stats';

export default function StatsStrip() {
  return (
    <section id="stats" className="bg-forest text-white">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
        {STATS.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="px-4 py-10 md:py-14 text-center md:text-left md:px-8"
          >
            <div className="font-display text-3xl md:text-5xl font-semibold text-gradient">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-xs md:text-sm text-white/60 leading-snug">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}