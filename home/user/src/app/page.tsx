'use client'

import { useTranslation } from 'react-i18next'
import { useTheme } from '@/context/ThemeContext'
import { motion, easeInOut } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

// Dynamically import RealTimeSections to reduce initial bundle
const RealTimeSections = dynamic(() => import('../../../../src/components/RealTimeSections'), {
  loading: () => (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-48 bg-gray-300 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
  ssr: false
})

export default function HomePage() {
  const { t } = useTranslation('common')
  const { theme } = useTheme()
  const [isMuted, setIsMuted] = useState(true)

  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.muted = isMuted

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
  }, [isMuted])

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
    }
  }



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
      title: "🍷 Wine Tasting Evening",
      date: "February 15, 2025",
      time: "7:00 PM",
      description: "Join us for an exclusive wine tasting featuring Mediterranean wines paired with our signature dishes.",
      icon: "🍷"
    },
    {
      id: 2,
      title: "👨‍🍳 Chef's Table Experience",
      date: "February 22, 2025", 
      time: "6:30 PM",
      description: "An intimate dining experience with Chef Hanna featuring a 7-course tasting menu.",
      icon: "👨‍🍳"
    },
    {
      id: 3,
      title: "🥘 Mediterranean Cooking Class",
      date: "March 1, 2025",
      time: "2:00 PM",
      description: "Learn to prepare authentic Mediterranean dishes with our head chef.",
      icon: "🥘"
    }
  ])

  const [seasonalPromotions] = useState([
    {
      id: 1,
      title: "❄️ Winter Warmth Menu",
      description: "Hearty Mediterranean dishes to warm your soul during the cold months",
      discount: "15% off",
      validUntil: "March 31, 2025",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "💝 Valentine's Special",
      description: "Romantic dinner for two with complimentary champagne",
      discount: "Special Price €89",
      validUntil: "February 14, 2025",
      gradient: "from-pink-500 to-red-500"
    }
  ])

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
      <Head>
        <title>East at West | Authentic Mediterranean Cuisine</title>
        <meta name="description" content="Experience the authentic flavors of the Mediterranean in our modern culinary sanctuary. Enjoy handcrafted dishes made with the finest ingredients and traditional recipes." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={theme === 'dark' ? '#111827' : '#ffffff'} />
        <link rel="canonical" href="https://eastatwest.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eastatwest.com/" />
        <meta property="og:title" content="East at West | Authentic Mediterranean Cuisine" />
        <meta property="og:description" content="Experience the authentic flavors of the Mediterranean in our modern culinary sanctuary." />
        <meta property="og:image" content="https://eastatwest.com/images/banner.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://eastatwest.com/" />
        <meta property="twitter:title" content="East at West | Authentic Mediterranean Cuisine" />
        <meta property="twitter:description" content="Experience the authentic flavors of the Mediterranean in our modern culinary sanctuary." />
        <meta property="twitter:image" content="https://eastatwest.com/images/banner.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      </Head>
      <div className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' ? 'bg-[#5C4300] text-[#F5F1EC]' : 'bg-[#F5F1EC] text-[#5C4300]'
      }`} itemScope itemType="https://schema.org/Restaurant">
      {/* Enhanced Hero Video Section */}
      <header className="relative h-screen w-full overflow-hidden" role="banner">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden z-5">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-20 blur-xl"
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
            muted={isMuted}
            playsInline
            preload="metadata"
            poster="/images/banner.webp"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            <source src="/videos/hero-video.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>

          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/30 to-orange-900/40 z-15"></div>
        </div>

        {/* Enhanced Mute/Unmute Toggle */}
        <motion.button
          onClick={toggleMute}
          className="absolute top-6 right-6 z-30 p-4 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 transition-all duration-300 shadow-2xl backdrop-blur-sm"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMuted ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
        </motion.button>

        {/* Enhanced Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4 sm:px-6 lg:px-8 max-w-6xl">
            <div className="mb-8">
              <div className="text-6xl sm:text-8xl mb-4">🍽️</div>
            </div>

            <motion.h1
              className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-[#F5F1EC]'
              }`}
              style={{ fontFamily: '"ZCOOL XiaoWei", serif' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {theme === 'dark' ? (
                <span className="drop-shadow-2xl">
                  {t("hero.headline")}
                </span>
              ) : (
                <span className="bg-gradient-to-r from-[#f99747] via-[#bc906b] to-[#5C4300] bg-clip-text text-transparent drop-shadow-2xl">
                  {t("hero.headline")}
                </span>
              )}
            </motion.h1>

            <p
              className="lcp-text text-xl sm:text-2xl text-[#F5F1EC]/90 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
            >
              Experience the authentic flavors of the Mediterranean in our modern culinary sanctuary
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/reservations"
                className="group relative inline-block bg-gradient-to-r from-[#f99747] to-[#bc906b] hover:from-[#bc906b] hover:to-[#5C4300] text-[#F5F1EC] px-8 py-4 sm:px-10 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#f99747]/25"
              >
                <span className="relative z-10">{t("hero.cta")}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#bc906b] to-[#5C4300] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/menu"
                className="group relative inline-block border-3 border-[#F5F1EC] bg-[#F5F1EC]/10 backdrop-blur-sm text-[#F5F1EC] hover:bg-[#F5F1EC] hover:text-[#5C4300] px-8 py-4 sm:px-10 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <span className="relative z-10">{t("hero.viewMenu")}</span>
              </Link>
              <Link
                href="/gallery"
                className="group relative inline-block border-2 border-[#f99747]/50 bg-gradient-to-r from-[#f99747]/20 to-[#bc906b]/20 backdrop-blur-sm text-[#F5F1EC] hover:bg-gradient-to-r hover:from-[#f99747]/30 hover:to-[#bc906b]/30 hover:border-[#f99747] px-8 py-4 sm:px-10 sm:py-5 rounded-2xl text-lg sm:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <span className="relative z-10 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Gallery
                </span>
              </Link>
            </motion.div>
          </div>
        </div>



        {/* Minimal Loading Overlay - removed to improve LCP */}
      </header>

      {/* Main Content */}
      <main className={`relative py-24 px-4 sm:px-6 lg:px-8 ${
        theme === 'dark' ? 'bg-gradient-to-br from-[#5C4300] via-[#bc906b]/20 to-[#5C4300]' : 'bg-gradient-to-br from-[#F5F1EC] via-[#f99747]/30 to-[#F5F1EC]'
      }`}>
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-32 right-10 w-96 h-96 bg-gradient-to-r from-[#f99747]/20 to-[#bc906b]/20 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="float"
          />
          <motion.div
            className="absolute bottom-32 left-10 w-80 h-80 bg-gradient-to-r from-[#bc906b]/20 to-[#5C4300]/20 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="float"
            transition={{ delay: 1.5 }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Today's Specials */}
          <motion.section
            className="mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <div className="text-6xl mb-4">✨</div>
              <h2 className={`text-4xl sm:text-5xl font-black mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-[#5C4300]'
              }`} style={{fontFamily: 'Times New Roman, serif'}}>
                {theme === 'dark' ? (
                  t('realtime.todaysSpecials')
                ) : (
                  <span className="bg-gradient-to-r from-[#f99747] to-[#bc906b] bg-clip-text text-transparent">
                    {t('realtime.todaysSpecials')}
                  </span>
                )}
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-[#f99747] to-[#bc906b] mx-auto rounded-full"></div>
              <p className={`text-lg mt-6 text-black`}>
                Handcrafted delicacies prepared with passion and authentic Mediterranean flavors
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {todaysSpecials.map((special) => (
                <motion.div
                  key={special.id}
                  className={`group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 ${
                    theme === 'dark' ? 'bg-gradient-to-br from-[#5C4300] to-[#bc906b]' : 'bg-gradient-to-br from-[#F5F1EC] to-[#f99747]/50'
                  }`}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f99747] to-[#bc906b] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-0.5">
                    <div className={`w-full h-full rounded-3xl ${theme === 'dark' ? 'bg-[#5C4300]' : 'bg-[#F5F1EC]'}`}></div>
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
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-[#f99747] to-[#bc906b] text-[#F5F1EC] px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                        {special.price}
                      </div>
                      <div className="absolute bottom-4 left-4 text-[#F5F1EC]">
                        <div className="text-3xl mb-1">⭐</div>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className={`text-2xl font-bold mb-3 text-black`} style={{fontFamily: 'Times New Roman, serif'}}>
                        {t(special.nameKey)}
                      </h3>
                      <p className={`text-base leading-relaxed text-black`}>
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
            className="mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <div className="text-6xl mb-4">🎉</div>
              <Link href="/events-catering">
                <div className="relative inline-block">
                  <h2 className={`text-4xl sm:text-5xl font-black mb-6 cursor-pointer hover:scale-105 transition-transform duration-300 ${
                    theme === 'dark' ? 'text-white hover:text-orange-300' : 'text-[#5C4300] hover:text-orange-600'
              }`} style={{fontFamily: 'Times New Roman, serif'}}>
                {theme === 'dark' ? (
                      t('realtime.reserveEvents')
                ) : (
                      <span className="text-black">
                        {t('realtime.reserveEvents')}
                  </span>
                )}
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
                      className={`w-12 h-12 ${
                        theme === 'dark' ? 'text-orange-300' : 'text-[#f99747]'
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
                      className={`w-8 h-8 mx-auto ${
                        theme === 'dark' ? 'text-orange-300' : 'text-[#f99747]'
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
              <div className="w-32 h-1.5 bg-gradient-to-r from-[#bc906b] to-[#5C4300] mx-auto rounded-full"></div>
              <p className={`text-lg mt-6 text-black`}>
                Join us for unforgettable culinary experiences and special celebrations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <motion.div
                  key={event.id}
                  className={`group relative p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 backdrop-blur-sm ${
                    theme === 'dark' ? 'bg-gradient-to-br from-[#5C4300]/80 to-[#bc906b]/80 border border-[#f99747]' : 'bg-gradient-to-br from-[#F5F1EC]/80 to-[#f99747]/50 border border-[#bc906b]'
                  }`}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#f99747] to-[#bc906b] rounded-2xl flex items-center justify-center mr-6 text-3xl shadow-xl">
                      {event.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${
                        theme === 'dark' ? 'text-[#F5F1EC]' : 'text-[#5C4300]'
                      }`} style={{fontFamily: 'Times New Roman, serif'}}>
                        {event.title}
                      </h3>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-[#F5F1EC]' : 'text-[#5C4300]'
                      }`}>
                        {event.date} • {event.time}
                      </p>
                    </div>
                  </div>
                  <p className={`text-base leading-relaxed ${
                    theme === 'dark' ? 'text-[#F5F1EC]' : 'text-[#5C4300]'
                  }`}>
                    {event.description}
                  </p>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f99747]/10 to-[#bc906b]/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Enhanced Seasonal Promotions */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <div className="text-6xl mb-4">🎁</div>
              <h2 className={`text-4xl sm:text-5xl font-black mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-[#5C4300]'
              }`} style={{fontFamily: 'Times New Roman, serif'}}>
                {theme === 'dark' ? (
                  t('realtime.seasonalPromotions')
                ) : (
                  <span className="bg-gradient-to-r from-[#f99747] to-[#5C4300] bg-clip-text text-transparent">
                    {t('realtime.seasonalPromotions')}
                  </span>
                )}
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-[#f99747] to-[#5C4300] mx-auto rounded-full"></div>
              <p className={`text-lg mt-6 ${theme === 'dark' ? 'text-[#F5F1EC]' : 'text-[#5C4300]'}`}>
                Exclusive offers and seasonal delights crafted just for you
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {seasonalPromotions.map((promotion) => (
                <motion.div
                  key={promotion.id}
                  className={`group relative p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 overflow-hidden ${
                    theme === 'dark' ? 'bg-gradient-to-br from-[#5C4300] to-[#bc906b]' : 'bg-gradient-to-br from-[#F5F1EC] to-[#f99747]/50'
                  }`}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${promotion.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  <div className={`absolute top-0 right-0 bg-gradient-to-r ${promotion.gradient} text-white px-6 py-3 rounded-bl-3xl font-bold text-lg shadow-xl`}>
                    {promotion.discount}
                  </div>
                  
                  <div className="relative z-10 pr-24">
                    <h3 className={`text-3xl font-black mb-6 ${
                      theme === 'dark' ? 'text-[#F5F1EC]' : 'text-[#5C4300]'
                    }`} style={{fontFamily: 'Times New Roman, serif'}}>
                      {promotion.title}
                    </h3>
                    <p className={`text-lg mb-6 leading-relaxed ${
                      theme === 'dark' ? 'text-[#F5F1EC]' : 'text-[#5C4300]'
                    }`}>
                      {promotion.description}
                    </p>
                    <p className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-[#F5F1EC]' : 'text-[#5C4300]'
                    }`}>
                      ⏰ Valid until: {promotion.validUntil}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute bottom-4 right-4 text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    🎊
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
      
      {/* Dynamic Real-Time Sections */}
      <RealTimeSections />
      </div>
    </>
  )
}
