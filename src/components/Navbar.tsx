'use client'

import { useLang } from '@/lib/context'
import type { Lang } from '@/lib/i18n'

export default function Navbar() {
  const { lang, setLang, t, openModal } = useLang()

  const langs: { code: Lang; label: string }[] = [
    { code: 'ar', label: 'AR' },
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
  ]

  return (
    <nav className="fixed top-0 inset-x-0 z-50 h-[68px] flex items-center justify-between px-6 md:px-8
      bg-white/94 backdrop-blur-xl border-b border-[#E4E0D8]">
      <a href="#" className="flex items-center gap-1.5 font-semibold tracking-[0.15em] uppercase text-[#0A1628] text-[1.05rem] no-underline">
        MANALD
        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] inline-block" />
        OS
      </a>

      <div className="flex items-center gap-4">
        {/* Language toggle */}
        <div className="flex bg-[#F2F0EC] rounded-full p-[3px] gap-[2px]">
          {langs.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => setLang(code)}
              className={`text-[0.72rem] font-medium tracking-[0.05em] px-3 py-[5px] rounded-full border-none cursor-pointer transition-all duration-200
                ${lang === code ? 'bg-[#0A1628] text-white' : 'bg-transparent text-[#9A9080] hover:text-[#0A1628]'}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => openModal('demo')}
          className="hidden md:block text-[0.78rem] font-medium tracking-[0.08em] uppercase px-5 py-2.5
            bg-[#0A1628] text-white border-none rounded-sm cursor-pointer transition-all duration-200
            hover:bg-[#C9A96E] hover:text-[#0A1628]"
        >
          {t('nav_cta')}
        </button>
      </div>
    </nav>
  )
}
