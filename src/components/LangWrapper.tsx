'use client'

import { useLang } from '@/lib/context'

export default function LangWrapper({ children }: { children: React.ReactNode }) {
  const { lang, dir } = useLang()
  return (
    <div lang={lang} dir={dir} className="min-h-screen">
      {children}
    </div>
  )
}
