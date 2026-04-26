'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/lib/context'
import type { TranslationKey } from '@/lib/i18n'

const cards: { num: string; icon: string; titleKey: TranslationKey; textKey: TranslationKey }[] = [
  { num: '01', icon: '📅', titleKey: 'ch1_title', textKey: 'ch1_text' },
  { num: '02', icon: '⚠️', titleKey: 'ch2_title', textKey: 'ch2_text' },
  { num: '03', icon: '📊', titleKey: 'ch3_title', textKey: 'ch3_text' },
  { num: '04', icon: '🔀', titleKey: 'ch4_title', textKey: 'ch4_text' },
]

export default function Challenges() {
  const { t } = useLang()

  return (
    <section className="py-24 px-6 md:px-8 bg-[#F8F7F4]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label mb-4"
        >
          {t('ch_label')}
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif font-light tracking-[-0.02em] text-[#0A1628] mb-12"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}
        >
          {t('ch_title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E4E0D8] border border-[#E4E0D8]"
        >
          {cards.map(({ num, icon, titleKey, textKey }) => (
            <div
              key={num}
              className="group bg-white p-10 transition-all duration-300 hover:bg-[#0A1628] cursor-default"
            >
              <div className="font-serif font-light text-[3.5rem] leading-none tracking-[-0.04em] text-[#E4E0D8] mb-6 transition-all duration-300 group-hover:text-white/10">
                {num}
              </div>
              <div className="text-2xl mb-4">{icon}</div>
              <div className="text-[0.95rem] font-semibold text-[#0A1628] mb-3 transition-colors duration-300 group-hover:text-white">
                {t(titleKey)}
              </div>
              <div className="text-[0.875rem] font-light text-[#5A5248] leading-[1.65] transition-colors duration-300 group-hover:text-white/55">
                {t(textKey)}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
