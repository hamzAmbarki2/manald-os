'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/lib/context'

const anim = (delay = 0) => ({
  initial: { opacity: 0, y: 24 } as const,
  animate: { opacity: 1, y: 0 } as const,
  transition: { duration: 0.6, delay },
})

export default function Hero() {
  const { t, openModal } = useLang()

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-8 pt-[120px] pb-20 overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 30%, rgba(201,169,110,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 20% 70%, rgba(10,22,40,0.03) 0%, transparent 70%)' }}
      />
      <div className="absolute top-0 right-[15%] w-px h-full pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #E4E0D8 20%, #E4E0D8 80%, transparent)' }}
      />

      <div className="max-w-[1200px] mx-auto w-full relative">
        <motion.div {...anim(0)} className="section-label mb-6">
          {t('hero_eyebrow')}
        </motion.div>

        <motion.h1 {...anim(0.1)}
          className="font-serif font-light leading-[1.1] tracking-[-0.02em] text-[#0A1628] mb-6 max-w-[820px]"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
        >
          {t('hero_headline_1')}{' '}
          <em className="italic text-[#C9A96E]">{t('hero_headline_em')}</em>{' '}
          {t('hero_headline_2')}
        </motion.h1>

        <motion.p {...anim(0.2)} className="text-[1.05rem] font-light text-[#5A5248] max-w-[560px] leading-[1.7] mb-10">
          {t('hero_sub')}
        </motion.p>

        <motion.div {...anim(0.3)} className="flex flex-wrap gap-4">
          <button
            onClick={() => openModal('demo')}
            className="text-[0.78rem] font-medium tracking-[0.1em] uppercase px-8 py-[15px]
              bg-[#0A1628] text-white border-none rounded-sm cursor-pointer transition-all duration-200
              hover:bg-[#C9A96E] hover:text-[#0A1628] hover:-translate-y-px"
          >
            {t('hero_cta_primary')}
          </button>
          <button
            onClick={() => openModal('video')}
            className="flex items-center gap-2 text-[0.78rem] font-medium tracking-[0.1em] uppercase px-8 py-[15px]
              bg-transparent text-[#0A1628] border border-[#E4E0D8] rounded-sm cursor-pointer transition-all duration-200
              hover:border-[#0A1628] hover:bg-[#0A1628] hover:text-white"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
            {t('hero_cta_secondary')}
          </button>
        </motion.div>

        <motion.div {...anim(0.4)} className="mt-20 pt-10 border-t border-[#E4E0D8] flex flex-wrap gap-12">
          {([['13','stat1'],['4','stat2'],['50+','stat3'],['90','stat4']] as const).map(([num, key]) => (
            <div key={key} className="flex flex-col gap-1">
              <span className="font-serif font-light text-[2.2rem] tracking-[-0.02em] text-[#0A1628]">{num}</span>
              <span className="text-[0.72rem] font-normal text-[#9A9080] tracking-[0.08em] uppercase">{t(key)}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
