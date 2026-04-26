'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/lib/context'

export default function Solution() {
  const { t, openModal } = useLang()

  return (
    <section className="relative py-24 px-6 md:px-8 bg-[#0A1628] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 200% at 80% 50%, rgba(201,169,110,0.08) 0%, transparent 70%)',
        }}
      />
      <div className="max-w-[1200px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label mb-6"
          style={{ color: 'rgba(201,169,110,0.65)' }}
        >
          {t('sol_label')}
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif font-light tracking-[-0.02em] text-white mb-6 max-w-[760px]"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}
        >
          {t('sol_title_1')}{' '}
          <em className="italic text-[#C9A96E]">{t('sol_title_em')}</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[1rem] font-light text-white/50 max-w-[640px] leading-[1.7] mb-10"
        >
          {t('sol_text')}
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={() => openModal('demo')}
          className="text-[0.78rem] font-medium tracking-[0.1em] uppercase px-8 py-[15px]
            bg-[#C9A96E] text-[#0A1628] border-none rounded-sm cursor-pointer transition-all duration-200
            hover:bg-white hover:text-[#0A1628] hover:-translate-y-px"
        >
          {t('sol_cta')}
        </motion.button>
      </div>
    </section>
  )
}
