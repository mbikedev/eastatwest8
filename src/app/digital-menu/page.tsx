'use client'

import Image from 'next/image'
import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

export default function DigitalMenuPage() {
  const { t } = useTranslation('common')
  const categories = useMemo(() => ([
    { id: 'setMenus', name: t('menu.categories.setMenus') },
    { id: 'coldMezzes', name: t('menu.categories.coldMezzes') },
    { id: 'hotMezzes', name: t('menu.categories.hotMezzes') },
    { id: 'salads', name: t('menu.categories.salads') },
    { id: 'lunchDishes', name: t('menu.categories.lunchDishes') },
    { id: 'sandwiches', name: t('menu.categories.sandwiches') },
    { id: 'skewers', name: t('menu.categories.skewers') },
    { id: 'desserts', name: t('menu.categories.desserts') },
    { id: 'drinks', name: t('menu.categories.drinks') },
  ]), [t])

  return (
    <main className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/menus/bg-digital.webp"
        alt={t('digitalMenu.alt')}
        fill
        priority
        className="object-cover object-center lg:object-top "
      />

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Framing borders (double frame) */}
     

      {/* Content */}
      <section className="relative z-10 flex min-h-[80svh] flex-col items-center justify-center lg:justify-start  text-center text-white px-6">
        

        

        {/* Title at top */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] ">
          {t('digitalMenu.title')}
        </h1>

        {/* Categories 3x3 grid */}
        <div className="mt-8 w-full max-w-4xl grid grid-cols-3 gap-3">
          {categories.map((cat) => {
            const href = cat.id === 'setMenus'
              ? '/pdfs/set-menus.pdf'
              : `/pdfs/${cat.id}.pdf`
            return (
              <a
                key={cat.id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-3 rounded-lg font-semibold text-sm bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md transition-all duration-300 text-white text-center"
              >
                {cat.name}
              </a>
            )
          })}
        </div>

      </section>
    </main>
  )
}


