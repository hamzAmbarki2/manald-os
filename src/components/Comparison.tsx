'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/lib/context'
import type { TranslationKey } from '@/lib/i18n'

const rows: TranslationKey[] = ['comp_r1', 'comp_r2', 'comp_r3', 'comp_r4', 'comp_r5', 'comp_r6']

export default function Comparison() {
  const { t, lang } = useLang()

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
          {t('comp_label')}
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif font-light tracking-[-0.02em] text-[#0A1628] mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}
        >
          {t('comp_title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-[1rem] font-light text-[#5A5248] max-w-[560px] leading-[1.7] mb-12"
        >
          {t('comp_sub')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse bg-white border border-[#E4E0D8]" style={{ direction: lang === 'ar' ? 'rtl' : 'ltr' }}>
            <thead>
              <tr>
                <th className={`px-7 py-5 text-[0.78rem] font-semibold tracking-[0.08em] uppercase border-b-2 border-[#E4E0D8] text-[#5A5248] ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  {t('comp_col1')}
                </th>
                <th className={`px-7 py-5 text-[0.78rem] font-semibold tracking-[0.08em] uppercase border-b-2 border-[#E4E0D8] bg-[#0A1628] text-[#C9A96E] ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  MANALD OS
                </th>
                <th className={`px-7 py-5 text-[0.78rem] font-semibold tracking-[0.08em] uppercase border-b-2 border-[#E4E0D8] text-[#9A9080] ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                  Boulevard / Zenoti
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((key) => (
                <tr key={key} className="group hover:bg-[#F2F0EC] transition-colors duration-150">
                  <td className={`px-7 py-4 border-b border-[#F2F0EC] text-[0.875rem] font-light text-[#5A5248] ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    {t(key)}
                  </td>
                  <td className={`px-7 py-4 border-b border-[#F2F0EC] bg-[#0A1628]/[0.02] group-hover:bg-[#0A1628]/[0.04] transition-colors ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    <span className="text-[0.875rem] font-semibold text-emerald-700">✓ {lang === 'ar' ? 'نعم' : lang === 'en' ? 'Yes' : 'Oui'}</span>
                  </td>
                  <td className={`px-7 py-4 border-b border-[#F2F0EC] ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
                    <span className="text-[0.875rem] font-light text-red-600/70">✗ {lang === 'ar' ? 'لا' : lang === 'en' ? 'No' : 'Non'}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
