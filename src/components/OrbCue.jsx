import { motion } from 'framer-motion';

export default function OrbCue({ className = '' }) {
  return (
    <motion.div
      className={`relative inline-flex items-center ${className}`}
      initial={{ y: 0 }}
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
    >
      <span className="mr-2 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.9)]" />
      <span className="text-xs text-emerald-200/80">Interactive orb</span>
    </motion.div>
  );
}
