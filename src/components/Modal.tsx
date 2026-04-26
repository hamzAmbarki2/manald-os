'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useLang } from '@/lib/context'

type FormValues = { name: string; email: string; phone?: string; company?: string; message?: string }

export default function Modal() {
  const { t, lang, modalType, closeModal } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>()

  const titles = {
    demo: t('m_demo_title'),
    video: t('m_video_title'),
    quote: t('m_quote_title'),
  }
  const descs = {
    demo: t('m_demo_desc'),
    video: t('m_video_desc'),
    quote: t('m_quote_desc'),
  }

  useEffect(() => {
    if (modalType) {
      document.body.style.overflow = 'hidden'
      setSubmitted(false)
      reset()
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [modalType, reset])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeModal])

  const onSubmit = () => {
    setSubmitted(true)
    setTimeout(closeModal, 1600)
  }

  const inputClass = `w-full text-[0.875rem] px-4 py-3 border border-[#E4E0D8] rounded-sm outline-none
    transition-all duration-200 bg-[#F8F7F4] text-[#0A1628] placeholder:text-[#9A9080]
    focus:border-[#0A1628] focus:bg-white ${lang === 'ar' ? 'text-right' : 'text-left'}`

  return (
    <AnimatePresence>
      {modalType && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-6"
          style={{ background: 'rgba(10,22,40,0.75)', backdropFilter: 'blur(8px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) closeModal() }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            className="bg-white p-10 max-w-[480px] w-full rounded-sm relative"
            dir={lang === 'ar' ? 'rtl' : 'ltr'}
          >
            <button
              onClick={closeModal}
              className={`absolute top-6 ${lang === 'ar' ? 'left-6' : 'right-6'} bg-none border-none text-[#9A9080] cursor-pointer text-xl hover:text-[#0A1628] transition-colors`}
            >
              ✕
            </button>

            <h3 className="font-serif font-light text-[1.8rem] text-[#0A1628] mb-2">
              {titles[modalType]}
            </h3>
            <p className="text-[0.9rem] text-[#5A5248] mb-8 leading-[1.6]">
              {descs[modalType]}
            </p>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-3">✓</div>
                <div className="text-[0.95rem] font-medium text-[#0A1628]">{t('f_sent')}</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                <input
                  {...register('name', { required: true })}
                  placeholder={t('f_name')}
                  className={`${inputClass} ${errors.name ? 'border-red-400' : ''}`}
                />
                <input
                  {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                  type="email"
                  placeholder={t('f_email')}
                  className={`${inputClass} ${errors.email ? 'border-red-400' : ''}`}
                />
                <input
                  {...register('phone')}
                  type="tel"
                  placeholder={t('f_phone')}
                  className={inputClass}
                />
                <input
                  {...register('company')}
                  placeholder={t('f_company')}
                  className={inputClass}
                />
                <textarea
                  {...register('message')}
                  placeholder={t('f_msg')}
                  rows={3}
                  className={`${inputClass} resize-none`}
                />
                <button
                  type="submit"
                  className="mt-1 py-[14px] bg-[#0A1628] text-white border-none rounded-sm
                    text-[0.78rem] font-medium tracking-[0.1em] uppercase cursor-pointer
                    transition-all duration-200 hover:bg-[#C9A96E] hover:text-[#0A1628]"
                >
                  {t('f_submit')}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
