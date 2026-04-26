'use client'

import { createContext, useContext, useState } from 'react'
import { Lang, translations, TranslationKey } from './i18n'

interface LangContextType {
  lang: Lang
  dir: 'ltr' | 'rtl'
  t: (key: TranslationKey) => string
  setLang: (l: Lang) => void
  openModal: (type: 'demo' | 'video' | 'quote') => void
  closeModal: () => void
  modalType: 'demo' | 'video' | 'quote' | null
}

const LangContext = createContext<LangContextType | null>(null)

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr')
  const [modalType, setModalType] = useState<'demo' | 'video' | 'quote' | null>(null)

  const setLang = (l: Lang) => setLangState(l)
  const openModal = (type: 'demo' | 'video' | 'quote') => setModalType(type)
  const closeModal = () => setModalType(null)
  const t = (key: TranslationKey) => translations[lang][key] as string

  return (
    <LangContext.Provider value={{ lang, dir: lang === 'ar' ? 'rtl' : 'ltr', t, setLang, openModal, closeModal, modalType }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
