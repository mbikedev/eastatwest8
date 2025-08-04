'use client'

import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'
import { motion, easeInOut } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Guru1 from '../../public/images/guru2023.webp'
import Guru2 from '../../public/images/guru2024.webp'


export default function HomePage() {
  const { t } = useTranslation('common')
  const { theme } = useTheme()

  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.muted = true

      const playVideo = async () => {
        try {
          console.log('Attempting to play video...')
          await video.play()
          console.log('Video playing successfully')
        } catch (error) {
          console.log('Video autoplay failed:', error)
        }
      }

      if (video.readyState >= 3) {
        playVideo()
      } else {
        video.addEventListener('canplaythrough', playVideo)
      }

      return () => {
        video.removeEventListener('canplaythrough', playVideo)
      }
    }
  }, [])



  // Mock data for enhanced sections
  const [todaysSpecials] = useState([
    {
      id: 1,
      nameKey: "specials.taratorChicken.title",
      descriptionKey: "specials.taratorChicken.description",
      price: "€8.50",
      image: "/images/gallery/poulet-torator.webp"
    },
    {
      id: 2,
      nameKey: "specials.kibbeh.title",
      descriptionKey: "specials.kibbeh.description",
      price: "€5.00",
      image: "/images/gallery/kebbe.webp"
    },
    {
      id: 3,
      nameKey: "specials.vegan.title",
      descriptionKey: "specials.vegan.description",
      price: "€18.50",
      image: "/images/gallery/eggplant.jpg"
    }
  ])

  const [upcomingEvents] = useState([
    {
      id: 1,
      titleKey: "upcomingEvents.wineTasting.title",
      dateKey: "upcomingEvents.wineTasting.date",
      timeKey: "upcomingEvents.wineTasting.time",
      descriptionKey: "upcomingEvents.wineTasting.description",
      icon: "🍷"
    },
    {
      id: 2,
      titleKey: "upcomingEvents.chefTable.title",
      dateKey: "upcomingEvents.chefTable.date",
      timeKey: "upcomingEvents.chefTable.time",
      descriptionKey: "upcomingEvents.chefTable.description",
      icon: "👨‍🍳"
    },
    {
      id: 3,
      titleKey: "upcomingEvents.cookingClass.title",
      dateKey: "upcomingEvents.cookingClass.date",
      timeKey: "upcomingEvents.cookingClass.time",
      descriptionKey: "upcomingEvents.cookingClass.description",
      icon: "🥘"
    }
  ])

  // Note: Seasonal promotions feature is available but not currently displayed

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: easeInOut
      }
    }
  }

  // JSON-LD Schema for Restaurant
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "East at West",
    "description": "Experience the authentic flavors of the Mediterranean in our modern culinary sanctuary.",
    "servesCuisine": ["Mediterranean", "Middle Eastern", "Lebanese"],
    "priceRange": "$$",
    "image": "/images/banner.webp",
    "hasMenu": "/menu",
    "acceptsReservations": true,
    "menu": "/menu",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "12:00",
        "closes": "22:00"
      }
    ]
  });

  return (
    <>
      {/* JSON-LD Schema for Restaurant */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schema }}
      />
      <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-[rgb(26,26,26)] text-[rgb(245,240,230)]' : 'bg-[rgb(245,240,230)] text-[rgb(26,26,26)]'
        }`} itemScope itemType="https://schema.org/Restaurant">
        {/* Enhanced Hero Video Section */}
        <header className="relative h-screen w-full overflow-hidden" role="banner" aria-label="East @ West Restaurant Hero Section">
          {/* Floating Background Elements */}
          <div className="absolute inset-0 overflow-hidden z-5">
            <motion.div
              className={`absolute top-20 left-10 w-32 h-32 rounded-full opacity-20 blur-xl ${theme === 'dark' ? 'bg-gradient-to-r from-[rgb(26,26,26)] to-[rgb(26,26,26)]' : 'bg-gradient-to-r from-[rgb(168,213,186)] to-[rgb(168,213,186)]'
                }`}
              variants={floatingVariants}
              animate="float"
            />
            <motion.div
              className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 blur-xl"
              variants={floatingVariants}
              animate="float"
              transition={{ delay: 1 }}
            />
            <motion.div
              className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-green-400 to-teal-400 rounded-full opacity-20 blur-xl"
              variants={floatingVariants}
              animate="float"
              transition={{ delay: 2 }}
            />
          </div>

          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover z-10"
              autoPlay
              loop
              muted={true}
              playsInline
              preload="metadata"
              poster="/images/banner.webp"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
              <source src="/videos/hero-video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>

            {/* Enhanced Gradient Overlay */}
            <div className={`absolute inset-0 z-15 ${theme === 'dark'
                ? 'bg-gradient-to-br from-black/60 via-[rgb(26,26,26)]/30 to-[rgb(26,26,26)]/40'
                : 'bg-gradient-to-br from-black/60 via-[rgb(26,26,26)]/30 to-[rgb(26,26,26)]/40'
              }`}></div>
          </div>



          {/* Enhanced Hero Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center px-4 sm:px-6 lg:px-8 max-w-6xl">
              <div className="mb-8">
                <div className="text-3xl xs:text-4xl sm:text-6xl md:text-8xl mb-2 sm:mb-4">🍽️</div>
              </div>

              <motion.h1
                className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-4 sm:mb-6 sm:bg-transparent bg-black/40 ${theme === 'dark' ? 'text-white' : 'text-[rgb(255,255,255)]'
                  }`}
                style={{ fontFamily: '"ZCOOL XiaoWei", serif', backgroundColor: 'rgba(46, 42, 42, 0.23)' }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span
                  className="font-black text-transparent bg-clip-text italic sm:bg-white bg-[rgba(246,242,236,1)]"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    fontFamily: 'Rozha One, serif',
                    filter: 'drop-shadow(rgba(0, 0, 0, 0.15) 0px 25px 25px)'
                  }}
                >
                  {t("hero.headline")}
                </span>
              </motion.h1>

              <p
                className="lcp-text text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-[rgb(255,255,255)]/90 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto"
                style={{ font: 'italic 300 20px/32.5px Rozha One, serif', backgroundColor: 'rgba(42, 37, 37, 0.24)' }}
              >
                {t("hero.description")}
              </p>

                              <motion.div
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                <Link
                  href="/reservations"
                                  className={`group relative inline-block text-[rgb(255,255,255)] px-4 py-2 sm:px-6 md:px-8 lg:px-10 sm:py-3 md:py-4 lg:py-5 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg lg:text-xl font-bold transition-all duration-300 transform hover:scale-105 focus:scale-105 shadow-2xl focus:outline-none focus:ring-4 ${theme === 'dark'
                  ? 'focus:ring-[rgb(26,26,26)]/50'
                  : 'bg-[rgb(168,213,186)] focus:ring-[rgb(168,213,186)]/50'
                }`}
                  aria-label="Reserve your table at East @ West"
                  style={{ backgroundColor: 'rgb(48,46,46)' }}
                >
                  <span className="relative z-10">{t("hero.cta")}</span>
                                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 ${theme === 'dark'
                    ? 'bg-gradient-to-r from-[rgb(26,26,26)] to-[rgb(255,255,255)] text-[rgb(26,26,26)]'
                    : 'bg-gradient-to-r from-[rgb(168,213,186)] to-[rgb(26,26,26)]'
                  }`}></div>
                </Link>
                <Link
                  href="/menu"
                  className="group relative inline-block border-3 border-[rgb(255,255,255)] backdrop-blur-sm text-[rgb(255,255,255)] hover:bg-[rgb(255,255,255)] hover:text-[rgb(26,26,26)] focus:bg-[rgb(255,255,255)] focus:text-[rgb(26,26,26)] px-4 py-2 sm:px-6 md:px-8 lg:px-10 sm:py-3 md:py-4 lg:py-5 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg lg:text-xl font-bold transition-all duration-300 transform hover:scale-105 focus:scale-105 shadow-2xl bg-transparent focus:outline-none focus:ring-4 focus:ring-white/50"
                  aria-label="View our restaurant menu"
                  style={{ backgroundColor: 'rgb(48,46,46)' }}
                >
                  <span className="relative z-10">{t("hero.viewMenu")}</span>
                </Link>
                <Link
                  href="/gallery"
                                  className={`group relative inline-block border-2 backdrop-blur-sm text-[rgb(255,255,255)] px-4 py-2 sm:px-6 md:px-8 lg:px-10 sm:py-3 md:py-4 lg:py-5 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg lg:text-xl font-bold transition-all duration-300 transform hover:scale-105 focus:scale-105 bg-transparent focus:outline-none focus:ring-4 ${theme === 'dark'
                  ? 'border-[rgb(26,26,26)]/50 hover:border-[rgb(26,26,26)] focus:border-[rgb(26,26,26)] focus:ring-[rgb(26,26,26)]/50'
                  : 'border-[rgb(168,213,186)]/50 hover:border-[rgb(168,213,186)] focus:border-[rgb(168,213,186)] focus:ring-[rgb(168,213,186)]/50'
                }`}
                  aria-label="View our restaurant gallery"
                  style={{ backgroundColor: 'rgb(48,46,46)' }}
                >
                  <span className="relative z-10 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {t("hero.gallery")}
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>



          {/* Minimal Loading Overlay - removed to improve LCP */}
        </header>

        {/* Main Content */}
        <main
          className={`relative py-24 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-gradient-to-br from-[rgb(26,26,26)] via-[rgb(26,26,26)]/20 to-[rgb(26,26,26)]' : 'bg-gradient-to-br from-[rgb(245,240,230)] via-[rgb(168,213,186)]/30 to-[rgb(245,240,230)]'
            }`}
          role="main"
          aria-label="Restaurant content and sections"
        >
          {/* Floating Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
                        <motion.div
              className={`absolute top-32 right-10 w-96 h-96 rounded-full blur-3xl ${theme === 'dark'
                ? 'bg-gradient-to-r from-[rgb(26,26,26)]/20 to-[rgb(26,26,26)]/10'
                : 'bg-gradient-to-r from-[rgb(168,213,186)]/20 to-[rgb(168,213,186)]/10'
              }`}
              variants={floatingVariants}
              animate="float"
            />
                        <motion.div
              className={`absolute bottom-32 left-10 w-80 h-80 rounded-full blur-3xl ${theme === 'dark'
                ? 'bg-gradient-to-r from-[rgb(26,26,26)]/20 to-[rgb(26,26,26)]/20'
                : 'bg-gradient-to-r from-[rgb(168,213,186)]/20 to-[rgb(26,26,26)]/20'
              }`}
              variants={floatingVariants}
              animate="float"
              transition={{ delay: 1.5 }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Enhanced Today's Specials */}
            <motion.section
              className="mb-12 sm:mb-16 md:mb-20"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              aria-labelledby="todays-specials-heading"
              role="region"
            >
              <motion.div className="text-center mb-8 sm:mb-12 md:mb-16" variants={itemVariants}>
                <div className="text-3xl xs:text-4xl sm:text-6xl mb-2 sm:mb-4">✨</div>
                <h2
                  id="todays-specials-heading"
                                  className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 ${theme === 'dark' ? 'text-white' : 'text-[rgb(26,26,26)]'
                  }`}
                  style={{ fontFamily: 'Times New Roman, serif' }}
                >
                  <span className={`font-black ${theme === 'dark' ? 'text-white' : 'bg-clip-text text-transparent bg-black'
                    }`}>
                    {t('realtime.todaysSpecials')}
                  </span>
                </h2>
                <div className={`w-32 h-1.5 mx-auto rounded-full ${theme === 'dark'
                    ? 'bg-gradient-to-r from-[rgb(26,26,26)] to-[rgb(26,26,26)]'
                    : 'bg-gradient-to-r from-[rgb(168,213,186)] to-[rgb(168,213,186)]'
                  }`}></div>
                <p className={`text-sm xs:text-base sm:text-lg mt-4 sm:mt-6 ${theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>
                  {t('realtime.todaysSpecialsDescription')}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {todaysSpecials.map((special) => (
                  <motion.div
                    key={special.id}
                    className={`group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 ${theme === 'dark' ? 'bg-gradient-to-br from-[rgb(230, 245, 236)] to-[rgb(245,240,230)]' : 'bg-gradient-to-br from-[rgb(60, 55, 55)] to-[rgb(81,87,83)]/50'
                      }`}
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                  >
                    {/* Gradient Border Effect */}
                    <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-0.5 ${theme === 'dark'
                        ? 'bg-gradient-to-r from-[rgb(26,26,26)] to-[rgb(26,26,26)]'
                        : 'bg-gradient-to-r from-[rgb(37,38,37)] to-[rgb(37,38,37)]'
                      }`}>
                      <div className={`w-full h-full rounded-3xl ${theme === 'dark' ? 'bg-[rgb(245,240,230)]' : 'bg-[rgb(255,255,255)]'}`}></div>
                    </div>

                    <div className="relative z-10">
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={special.image}
                          alt={t(special.descriptionKey)}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          loading="lazy"
                          quality={75}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className={`absolute top-4 right-4 text-[rgb(255,255,255)] px-4 py-2 rounded-full font-bold text-lg shadow-lg ${theme === 'dark'
                            ? 'bg-gradient-to-r from-[rgb(26,26,26)] to-[rgb(26,26,26)]'
                            : 'bg-gradient-to-r from-[rgb(37,38,37)] to-[rgb(37,38,37)]'
                          }`}>
                          {special.price}
                        </div>
                        <div className="absolute bottom-4 left-4 text-[rgb(255,255,255)]">
                          <div className="text-3xl mb-1">⭐</div>
                        </div>
                      </div>
                      <div className="p-8">
                        <h3 className={`text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-[rgb(245,240,230)]' : 'text-[rgb(26,26,26)]'
                          }`} style={{ fontFamily: 'Times New Roman, serif', color: 'rgba(0, 0, 0, 1)' }}>
                          {t(special.nameKey)}
                        </h3>
                        <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-[rgb(245,240,230)]' : 'text-[rgb(26,26,26)]'
                          }`} style={{ color: 'rgba(0, 0, 0, 1)' }}>
                          {t(special.descriptionKey)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Enhanced Upcoming Events */}
            <motion.section
              className="mb-12 sm:mb-16 md:mb-20"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              aria-labelledby="events-heading"
              role="region"
            >
              <motion.div className="text-center mb-8 sm:mb-12 md:mb-16" variants={itemVariants}>
                <div className="text-3xl xs:text-4xl sm:text-6xl mb-2 sm:mb-4">🎉</div>
                <Link href="/events-catering" aria-label="Learn more about our events and catering services">
                  <div className="relative inline-block">
                    <h2
                      id="events-heading"
                      className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 cursor-pointer hover:scale-105 focus:scale-105 transition-transform duration-300 ${theme === 'dark' ? 'text-white hover:text-[rgb(168,213,186)] focus:text-[rgb(168,213,186)]' : 'text-[rgb(26,26,26)] hover:text-[rgb(168,213,186)] focus:text-[rgb(168,213,186)]'
                        }`}
                      style={{ fontFamily: 'Times New Roman, serif' }}
                    >
                      <span className={`font-black ${theme === 'dark' ? 'text-white' : 'bg-clip-text text-transparent bg-black'
                        }`}>
                        {t('realtime.reserveEvents')}
                      </span>
                    </h2>
                    {/* Animated Hand Pointer */}
                    <motion.div
                      className="absolute -right-16 top-1/2 transform -translate-y-1/2 hidden sm:block"
                      animate={{
                        x: [0, 10, 0],
                        rotate: [0, 15, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg
                        className={`w-12 h-12 ${theme === 'dark' ? 'text-[rgb(168,213,186)]' : 'text-[rgb(168,213,186)]'
                          }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M10.5 14.5L16 9M16 9H11M16 9V14M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />
                      </svg>
                    </motion.div>
                    {/* Mobile Hand Pointer - positioned below */}
                    <motion.div
                      className="block sm:hidden mt-2"
                      animate={{
                        y: [0, -5, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg
                        className={`w-8 h-8 mx-auto ${theme === 'dark' ? 'text-[rgb(168,213,186)]' : 'text-[rgb(168,213,186)]'
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 5L16 12L9 19"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </Link>
                              <div className={`w-32 h-1.5 mx-auto rounded-full ${theme === 'dark'
                ? 'bg-gradient-to-r from-[rgb(26,26,26)] to-[rgb(26,26,26)]'
                : 'bg-gradient-to-r from-[rgb(168,213,186)] to-[rgb(168,213,186)]'
              }`}></div>
                <p className={`text-sm xs:text-base sm:text-lg mt-4 sm:mt-6 ${theme === 'dark' ? 'text-[rgb(245,240,230)]' : 'text-[rgb(26,26,26)]'}`}>
                  {t('realtime.upcomingEventsDescription')}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event) => (
                  <motion.div
                    key={event.id}
                                      className={`group relative p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 backdrop-blur-sm ${theme === 'dark' ? 'bg-gradient-to-br from-[rgb(26,26,26)]/80 to-[rgb(168,213,186)]/80 border border-[rgb(168,213,186)]' : 'bg-gradient-to-br from-[rgb(255,255,255)]/80 to-[rgb(81,87,83)]/50 border border-[rgb(81,87,83)]'
                    }`}
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                  >
                    <div className="flex items-center mb-6">
                                          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-6 text-3xl shadow-xl ${theme === 'dark'
                      ? 'bg-gradient-to-r from-[rgb(26,26,26)] to-[rgb(26,26,26)]'
                      : 'bg-gradient-to-r from-[rgb(168,213,186)] to-[rgb(168,213,186)]'
                    }`}>
                        {event.icon}
                      </div>
                                              <div className={`${theme === 'dark' ? 'text-[rgb(245,240,230)]' : 'text-[rgb(26,26,26)]'}`} style={{ fontFamily: 'Times New Roman, serif', fontSize: '20px', lineHeight: '28px' }}>
                        {t(event.titleKey)}
                      </div>
                    </div>
                                          <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-[rgb(245,240,230)]' : 'text-[rgb(26,26,26)]'}`}>
                      {t(event.descriptionKey)}
                    </p>

                    {/* Hover effect overlay */}
                                        <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${theme === 'dark'
                      ? 'bg-gradient-to-r from-[rgb(26,26,26)]/10 to-[rgb(26,26,26)]/10'
                      : 'bg-gradient-to-r from-[rgb(168,213,186)]/10 to-[rgb(168,213,186)]/10'
                    }`}></div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Parallax Section */}
            <motion.section
              className="relative h-[30vh] sm:h-[35vh] md:h-[40vh] w-full overflow-hidden mb-12 sm:mb-16 md:mb-20"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              aria-labelledby="parallax-heading"
              role="region"
            >
              {/* Parallax Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed hidden md:block"
                  style={{
                    backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fbe215e77a32d4149b4ac6363162e72c1%2Fad25fd893c9a4f8182c3ce6d0b29aff7?format=webp&width=800')`
                  }}
                />
                {/* Static background for mobile */}
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center block md:hidden"
                  style={{
                    backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fbe215e77a32d4149b4ac6363162e72c1%2Fad25fd893c9a4f8182c3ce6d0b29aff7?format=webp&width=800')`
                  }}
                />

                {/* Translucent Overlay */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
                  <motion.h2
                    id="parallax-heading"
                    className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 text-white italic"
                    style={{ fontFamily: 'Rozha One, serif' }}
                    variants={itemVariants}
                  >
                    {t('parallax.title')}
                  </motion.h2>

                  <motion.p
                    className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 font-light mb-6 sm:mb-8 italic"
                    style={{ fontFamily: 'Times New Roman, serif' }}
                    variants={itemVariants}
                  >
                    {t('parallax.subtitle')}
                  </motion.p>

                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
                  >
                    <Link
                      href="/reservations"
                      className="group relative inline-block border-3 border-[rgb(255,255,255)] backdrop-blur-sm text-[rgb(255,255,255)] hover:bg-[rgb(255,255,255)] hover:text-[rgb(43,242,12)] focus:bg-[rgb(255,255,255)] focus:text-[rgb(26,26,26)] px-4 py-2 sm:px-6 md:px-8 lg:px-10 sm:py-3 md:py-4 lg:py-5 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg lg:text-xl font-bold transition-all duration-300 transform hover:scale-105 focus:scale-105 shadow-2xl bg-transparent focus:outline-none focus:ring-4 focus:ring-white/50"
                      aria-label="Book your table - Reserve now at East @ West"
                      style={{ backgroundColor: 'rgb(56, 42, 42)' }}
                    >
                      <span className="relative z-10">{t('parallax.cta')}</span>
                    </Link>
                    <Link
                      href="/menu"
                      className="group relative inline-block border-3 border-[rgb(255,255,255)] backdrop-blur-sm text-[rgb(255,255,255)] hover:bg-[rgb(255,255,255)] hover:text-[rgb(43,242,12)] focus:bg-[rgb(255,255,255)] focus:text-[rgb(26,26,26)] px-4 py-2 sm:px-6 md:px-8 lg:px-10 sm:py-3 md:py-4 lg:py-5 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg lg:text-xl font-bold transition-all duration-300 transform hover:scale-105 focus:scale-105 shadow-2xl bg-transparent focus:outline-none focus:ring-4 focus:ring-white/50"
                      aria-label="View our restaurant menu"
                      style={{ backgroundColor: 'rgb(56, 42, 42)' }}
                    >
                      <span className="relative z-10">VIEW THE MENU</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* Restaurant Guru Awards Section - SEO Optimized */}
            <motion.section
              className="mb-12 sm:mb-16 md:mb-20 text-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              itemScope
              itemType="https://schema.org/Organization"
            >
              {/* Section Header */}
              <motion.div className="mb-8 sm:mb-10 md:mb-12" variants={itemVariants}>
                <h2 className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 ${theme === 'dark' ? 'text-white' : 'text-[rgb(26,26,26)]'
                  }`} style={{ fontFamily: 'Times New Roman, serif' }}>
                  <span className={`font-black ${theme === 'dark' ? 'text-white' : 'bg-clip-text text-transparent bg-black'
                    }`}>
                    {t('awards.title')}
                  </span>
                </h2>
                <div className="w-32 h-1.5 bg-gradient-to-r from-[rgb(168,213,186)] to-[rgb(168,213,186)] mx-auto rounded-full mb-4"></div>
                <p className={`text-sm xs:text-base sm:text-lg md:text-xl ${theme === 'dark' ? 'text-[rgb(245,240,230)]' : 'text-[rgb(26,26,26)]'
                  }`} style={{ fontFamily: 'Times New Roman, serif' }}>
                  {t('awards.subtitle')}
                </p>
              </motion.div>

              {/* Awards Row */}
              <motion.div
                className="flex flex-col sm:flex-row gap-8 lg:gap-12 justify-center items-center px-4"
                variants={itemVariants}
                role="list"
                aria-label="Restaurant Guru Awards"
              >
                {/* 1. Restaurant Guru 2021 Badge */}
                <article className="flex-shrink-0 flex justify-center" role="listitem">
                  <figure className="text-center hover:scale-105 transition-transform duration-300">
                    <div
                      id="rest_circ5"
                      onClick={(e) => {
                        const target = e.target as Element;
                        if (target.nodeName.toLowerCase() !== 'a') {
                          const link = e.currentTarget.querySelector('.circ_top_title') as HTMLAnchorElement;
                          if (link) window.open(link.href);
                          return false;
                        }
                      }}
                      style={{ cursor: 'pointer' }}
                      role="img"
                      aria-label="Restaurant Guru Recommended 2021 – East @ West Brussels"
                    >
                      <div className="circ_cont">
                        <div
                          className="circ_img"
                          style={{ background: "url('https://awards.infcdn.net/img/star_red.svg') no-repeat center" }}
                          role="img"
                          aria-hidden="true"
                        >
                          &nbsp;
                        </div>
                        <a
                          href="https://restaurantguru.com"
                          target="_blank"
                          className="circ_top_title"
                          rel="noopener noreferrer"
                          aria-label="Visit Restaurant Guru website"
                        >
                          Restaurant Guru 2021
                        </a>
                        <span>Recommended</span>
                        <a
                          href="https://restaurantguru.com/East-and-West-Eatery-Brussels"
                          className="circ_bot_title"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View East @ West on Restaurant Guru"
                        >
                          East @ West
                        </a>
                      </div>
                    </div>

                  </figure>
                </article>

                {/* 2. Restaurant Guru 2023 */}
                <article className="flex-shrink-0 flex justify-center" role="listitem">
                  <figure className="text-center hover:scale-105 transition-transform duration-300">
                    <a
                      href="https://restaurantguru.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ cursor: 'pointer' }}
                      aria-label="Restaurant Guru Award 2023 – East @ West Brussels"
                    >
                      <div className="h-48 w-auto">
                        <img
                          src={Guru1.src}
                          alt="Restaurant Guru Award 2023 – East @ West Brussels"
                          className="h-full w-auto object-contain rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                          loading="lazy"
                        />
                      </div>
                    </a>

                  </figure>
                </article>

                {/* 3. Restaurant Guru 2024 */}
                <article className="flex-shrink-0 flex justify-center" role="listitem">
                  <figure className="text-center hover:scale-105 transition-transform duration-300">
                    <a
                      href="https://restaurantguru.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ cursor: 'pointer' }}
                      aria-label="Restaurant Guru Award 2024 – East @ West Brussels"
                    >
                      <div className="h-48 w-auto">
                        <img
                          src={Guru2.src}
                          alt="Restaurant Guru Award 2024 – East @ West Brussels"
                          className="h-full w-auto object-contain rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                          loading="lazy"
                        />
                      </div>
                    </a>

                  </figure>
                </article>
              </motion.div>

              {/* JSON-LD Schema for Rich Snippets */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "East @ West",
                    "description": "Mediterranean Restaurant in Brussels",
                    "url": "https://eastatwest.com",
                    "awards": [
                      {
                        "@type": "Award",
                        "name": "Restaurant Guru Recommended 2021",
                        "awarder": {
                          "@type": "Organization",
                          "name": "Restaurant Guru"
                        },
                        "dateAwarded": "2021"
                      },
                      {
                        "@type": "Award",
                        "name": "Restaurant Guru Award 2023",
                        "awarder": {
                          "@type": "Organization",
                          "name": "Restaurant Guru"
                        },
                        "dateAwarded": "2023"
                      },
                      {
                        "@type": "Award",
                        "name": "Restaurant Guru Award 2024",
                        "awarder": {
                          "@type": "Organization",
                          "name": "Restaurant Guru"
                        },
                        "dateAwarded": "2024"
                      }
                    ]
                  })
                }}
              />
            </motion.section>

            {/* Contact Section */}
            <motion.section 
              id="contact"
              className={`py-20 px-4 sm:px-6 lg:px-8 relative ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 pointer-events-none ${
                theme === 'dark' 
                  ? 'bg-gray-900' 
                  : 'bg-white'
              }`} />
              
              <div className="max-w-7xl mx-auto relative">
                {/* Section Header */}
                <motion.div className="mb-12 text-center" variants={itemVariants}>
                  <h2 className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 ${theme === 'dark' ? 'text-white' : 'text-[rgb(26,26,26)]'
                    }`} style={{ fontFamily: 'Times New Roman, serif' }}>
                    <span className={`font-black ${theme === 'dark' ? 'text-white' : 'bg-clip-text text-transparent bg-black'
                      }`}>
                      {t('contact.contactUs')}
                    </span>
                  </h2>
                  <div className="w-32 h-1.5 bg-gradient-to-r from-[rgb(168,213,186)] to-[rgb(168,213,186)] mx-auto rounded-full mb-4"></div>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Contact Details */}
                  <motion.div 
                    className={`p-8 rounded-xl shadow-2xl backdrop-blur-sm border-2 transform hover:scale-105 transition-all duration-300  ${
                      theme === 'dark' 
                        ? 'bg-gray-900/80 border-gray-600 shadow-gray-500/20' 
                        : 'bg-white/80 border-gray-600 shadow-gray-500/20'
                    }`}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >


                    <div className="space-y-6">
                      {/* Phone */}
                      <div className="flex items-center">
                        <a 
                          href="tel:+32465206024"
                          title={t('contact.contactTooltips.phone')}
                          className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 cursor-pointer hover:scale-110 transition-transform duration-300 ${
                            theme === 'dark' ? 'bg-gray-500 hover:bg-green-500' : 'bg-gray-900 hover:bg-green-600'
                          }`}
                        >
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </a>
                        <div>
                          <h3 className="text-lg font-semibold">{t('contact.phone')}</h3>
                          <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>{t('footer.phone')}</p>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-center">
                        <a 
                          href="mailto:contact@eastatwest.com"
                          title={t('contact.contactTooltips.email')}
                          className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 cursor-pointer hover:scale-110 transition-transform duration-300 ${
                            theme === 'dark' ? 'bg-gray-500 hover:bg-green-500' : 'bg-gray-900 hover:bg-green-600'
                          }`}
                        >
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </a>
                        <div>
                          <h3 className="text-lg font-semibold">{t('contact.email')}</h3>
                          <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>{t('footer.email')}</p>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="flex items-start">
                        <a 
                          href="https://maps.google.com/?q=Bld+de+l'Empereur+26+1000+Brussels+Belgium"
                          target="_blank"
                          rel="noopener noreferrer"
                          title={t('contact.contactTooltips.address')}
                          className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1 cursor-pointer hover:scale-110 transition-transform duration-300 ${
                            theme === 'dark' ? 'bg-gray-500 hover:bg-green-500' : 'bg-gray-900 hover:bg-green-600'
                          }`}
                        >
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </a>
                        <div>
                          <h3 className="text-lg font-semibold">{t('contact.address')}</h3>
                          <p className={`whitespace-pre-line ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>{t('footer.address')}</p>
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="flex items-start">
                        <a 
                          href="/reservations"
                          className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 mt-1 cursor-pointer hover:scale-110 transition-transform duration-300 ${
                            theme === 'dark' ? 'bg-gray-500 hover:bg-green-500' : 'bg-gray-900 hover:bg-green-600'
                          }`}
                        >
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </a>
                        <div>
                          <h3 className="text-lg font-semibold">{t('contact.openingHours')}</h3>
                          <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>
                            <p>{t('contact.mondayFriday')}</p>
                            <p>{t('contact.saturday')}</p>
                            <p>{t('contact.sundayClosed')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Restaurant Image */}
                  <motion.div className="relative" variants={itemVariants}>
                    <div className="rounded-xl overflow-hidden shadow-lg h-full min-h-[400px] relative">
                      <Image
                        src="/images/banner.webp"
                        alt="East at West Restaurant"
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-8 left-8 right-8 text-white text-center lg:text-left">
                        <h3 className={`text-5xl font-bold mb-2 ${
                          theme === 'dark' ? 'text-white' : 'text-white'
                        }`} style={{ fontFamily: 'Times New Roman, serif' }}>
                          {t('contact.restaurantImageAlt')}
                        </h3>
                        <p className="text-lg">
                          {t('contact.restaurantDescription')}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>

          </div>
        </main>



      </div>
    </>
  )
}
