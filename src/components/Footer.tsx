'use client'

import { useLang } from '@/lib/context'

export default function Footer() {
  const { t, openModal } = useLang()

  return (
    <footer className="bg-[#060E1C] px-6 md:px-8 py-12">
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-between gap-8">
        <div>
          <div className="font-semibold tracking-[0.15em] uppercase text-white/70 text-[0.95rem]">MANALD OS</div>
          <div className="text-[0.78rem] text-white/30 mt-1">{t('footer_tag')}</div>
        </div>

        <div className="flex flex-wrap gap-6">
          <a href="#" className="text-[0.78rem] text-white/30 hover:text-[#C9A96E] no-underline transition-colors duration-200">
            {t('footer_privacy')}
          </a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); openModal('demo') }}
            className="text-[0.78rem] text-white/30 hover:text-[#C9A96E] no-underline transition-colors duration-200"
          >
            {t('footer_contact')}
          </a>
          <a href="#" className="text-[0.78rem] text-white/30 hover:text-[#C9A96E] no-underline transition-colors duration-200">
            LinkedIn
          </a>
        </div>

        <div className="text-[0.72rem] text-white/20">{t('footer_copy')}</div>
      </div>
    </footer>
  )
}
