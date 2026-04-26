'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/lib/context'
import type { TranslationKey } from '@/lib/i18n'

const cards: { numKey: TranslationKey; lblKey: TranslationKey; descKey: TranslationKey }[] = [
  { numKey: 't1_num', lblKey: 't1_lbl', descKey: 't1_desc' },
  { numKey: 't2_num', lblKey: 't2_lbl', descKey: 't2_desc' },
  { numKey: 't3_num', lblKey: 't3_lbl', descKey: 't3_desc' },
]

export default function Trust() {
  const { t, lang } = useLang()

  return (
    <section className="py-24 px-6 md:px-8 bg-white border-t border-[#E4E0D8]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label mb-4"
        >
          {t('trust_label')}
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif font-light tracking-[-0.02em] text-[#0A1628] mb-12"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}
        >
          {t('trust_title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cards.map(({ numKey, lblKey, descKey }) => (
            <div
              key={numKey}
              className={`p-8 bg-[#F8F7F4] ${lang === 'ar' ? 'border-r-[3px]' : 'border-l-[3px]'} border-[#C9A96E]`}
            >
              <div className="font-serif font-light text-[2.8rem] leading-none tracking-[-0.03em] text-[#0A1628] mb-3">
                {t(numKey)}
              </div>
              <div className="text-[0.95rem] font-medium text-[#0A1628] mb-2">{t(lblKey)}</div>
              <div className="text-[0.85rem] font-light text-[#5A5248] leading-[1.65]">{t(descKey)}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
