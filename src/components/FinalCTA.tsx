'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/lib/context'

const CalIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
  </svg>
)
const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
)
const TagIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
    <circle cx="7" cy="7" r="1" fill="currentColor"/>
  </svg>
)

export default function FinalCTA() {
  const { t, openModal } = useLang()

  const cards = [
    {
      Icon: CalIcon,
      titleKey: 'cta1_title' as const,
      textKey: 'cta1_text' as const,
      btnKey: 'cta1_btn' as const,
      action: () => openModal('demo'),
    },
    {
      Icon: PlayIcon,
      titleKey: 'cta2_title' as const,
      textKey: 'cta2_text' as const,
      btnKey: 'cta2_btn' as const,
      action: () => openModal('video'),
    },
    {
      Icon: TagIcon,
      titleKey: 'cta3_title' as const,
      textKey: 'cta3_text' as const,
      btnKey: 'cta3_btn' as const,
      action: () => openModal('quote'),
    },
  ]

  return (
    <section id="contact" className="relative py-24 px-6 md:px-8 bg-[#0A1628] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 80% at 0% 50%, rgba(201,169,110,0.06) 0%, transparent 60%)' }}
      />
      <div className="max-w-[1200px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label mb-4"
          style={{ color: 'rgba(201,169,110,0.55)' }}
        >
          {t('cta_label')}
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif font-light tracking-[-0.02em] text-white mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}
        >
          {t('cta_title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-[1rem] font-light text-white/45 max-w-[480px] leading-[1.7] mb-14"
        >
          {t('cta_sub')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/7 border border-white/7"
        >
          {cards.map(({ Icon, titleKey, textKey, btnKey, action }, i) => (
            <div
              key={i}
              className="group bg-[#162040] p-10 flex flex-col gap-5 transition-colors duration-300 hover:bg-[#C9A96E]/10"
            >
              <div className="w-12 h-12 border border-[#C9A96E]/30 rounded-sm flex items-center justify-center text-[#C9A96E]">
                <Icon />
              </div>
              <div className="text-[1.1rem] font-medium text-white">{t(titleKey)}</div>
              <div className="text-[0.875rem] font-light text-white/45 leading-[1.65] flex-1">{t(textKey)}</div>
              <button
                onClick={action}
                className="self-start text-[0.76rem] font-medium tracking-[0.1em] uppercase px-6 py-3
                  bg-transparent text-[#C9A96E] border border-[#C9A96E]/40 rounded-sm cursor-pointer
                  transition-all duration-200 hover:bg-[#C9A96E] hover:text-[#0A1628] hover:border-[#C9A96E]"
              >
                {t(btnKey)} →
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
