'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/lib/context'
import type { TranslationKey } from '@/lib/i18n'

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
  </svg>
)
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
  </svg>
)
const MonitorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
  </svg>
)
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
  </svg>
)
const CardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/>
  </svg>
)
const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>
)

const features: { Icon: React.FC; titleKey: TranslationKey; textKey: TranslationKey }[] = [
  { Icon: CalendarIcon, titleKey: 'f1_title', textKey: 'f1_text' },
  { Icon: CheckIcon, titleKey: 'f2_title', textKey: 'f2_text' },
  { Icon: MonitorIcon, titleKey: 'f3_title', textKey: 'f3_text' },
  { Icon: PhoneIcon, titleKey: 'f4_title', textKey: 'f4_text' },
  { Icon: CardIcon, titleKey: 'f5_title', textKey: 'f5_text' },
  { Icon: ChatIcon, titleKey: 'f6_title', textKey: 'f6_text' },
]

export default function Features() {
  const { t } = useLang()

  return (
    <section id="features" className="py-24 px-6 md:px-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label mb-4"
        >
          {t('feat_label')}
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif font-light tracking-[-0.02em] text-[#0A1628] mb-14"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}
        >
          {t('feat_title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-[#E4E0D8]"
        >
          {features.map(({ Icon, titleKey, textKey }, i) => (
            <div
              key={i}
              className="group p-10 border-r border-b border-[#E4E0D8] transition-colors duration-300 hover:bg-[#F8F7F4]"
            >
              <div className="w-11 h-11 bg-[#F2F0EC] rounded-sm flex items-center justify-center mb-5
                transition-colors duration-300 group-hover:bg-[#C9A96E] text-[#0A1628] group-hover:text-white">
                <Icon />
              </div>
              <div className="text-[0.95rem] font-semibold text-[#0A1628] mb-2">{t(titleKey)}</div>
              <div className="text-[0.875rem] font-light text-[#5A5248] leading-[1.65]">{t(textKey)}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
