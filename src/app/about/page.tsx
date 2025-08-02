'use client'

import { useTranslation } from 'react-i18next'
import { useTheme } from '../../context/ThemeContext'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutPage() {
  const { t } = useTranslation('common')
  const { theme } = useTheme()

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
        ease: "easeInOut" as const
      }
    }
  }

  return (
    <div className={`min-h-screen pt-16 transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
      {/* Enhanced Header */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/images/about-us.webp')"}}>
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#f99747]/20 to-[#bc906b]/20 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="float"
          />
          <motion.div
            className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-[#bc906b]/20 to-[#5C4300]/20 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="float"
            transition={{ delay: 1.5 }}
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="text-8xl mb-6">🍽️</div>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 text-white drop-shadow-2xl"
            style={{ fontFamily: 'Times New Roman, serif' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {t('nav.about')}
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl max-w-4xl mx-auto font-light leading-relaxed text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Learn about our passion for Mediterranean cuisine and our journey
          </motion.p>
        </div>
      </section>

      {/* Enhanced About Section */}
      <motion.section
        className={`relative py-20 px-4 sm:px-8 shadow-2xl backdrop-blur-md ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-100 to-gray-300'
          }`}
        style={{ fontFamily: '"Times New Roman", sans-serif' }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div className="mb-12" variants={itemVariants}>
            <div className="text-6xl mb-6">✨</div>
            <h2 className="text-4xl sm:text-5xl font-black mb-8 text-center">
              <span className="bg-gradient-to-r from-[#f99747] to-[#bc906b] bg-clip-text text-transparent">
                {t('about.title')}
              </span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#f99747] to-[#bc906b] mx-auto rounded-full mb-8"></div>
          </motion.div>

                      <motion.div
              className={`text-lg sm:text-xl leading-relaxed mb-8 p-8 rounded-3xl backdrop-blur-sm border ${theme === 'dark' ? 'bg-gray-900/80 border-gray-700' : 'bg-[#F5F1EC]/70 border-[#bc906b]/50'
                }`}
              variants={itemVariants}
            >
              <p className={`text-gray-700 ${theme === 'dark' ? 'text-white' : 'text-black'
                } leading-relaxed text-center mb-6`}>
                {t('about.part1')}
              </p>
            </motion.div>

            <motion.div
              className={`text-lg sm:text-xl leading-relaxed p-8 rounded-3xl backdrop-blur-sm border ${theme === 'dark' ? 'bg-gray-900/80 border-gray-700' : 'bg-[#F5F1EC]/70 border-[#bc906b]/50'
                }`}
              variants={itemVariants}
            >
              <p className={`text-gray-700 ${theme === 'dark' ? 'text-white' : 'text-black'
                } leading-relaxed text-center`}>
                {t('about.part2')}
              </p>
            </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Chef Hanna Section */}
      <section className={`relative py-24 px-4 sm:px-6 lg:px-8 shadow-2xl overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-[#F5F1EC] via-[#f99747]/30 to-[#F5F1EC]'
        }`}>
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-32 right-10 w-96 h-96 bg-gradient-to-r from-[#bc906b]/20 to-[#f99747]/20 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="float"
          />
          <motion.div
            className="absolute bottom-32 left-10 w-80 h-80 bg-gradient-to-r from-[#5C4300]/20 to-[#bc906b]/20 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="float"
            transition={{ delay: 1 }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="text-6xl mb-6">👨‍🍳</div>
            <h2 className="text-4xl sm:text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-[#f99747] to-[#bc906b] bg-clip-text text-transparent">
                Meet Our Master Chef
              </span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#f99747] to-[#bc906b] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-center">
            {/* Enhanced Image */}
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 1.2,
                ease: "easeOut"
              }}
            >
              <div className="relative">
                {/* Gradient Border Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#f99747] via-[#bc906b] to-[#5C4300] rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative">
                  <Image
                    src="/images/hanna.webp"
                    alt="Chef Hanna portrait"
                    width={400}
                    height={500}
                    className="rounded-2xl shadow-2xl object-cover bg-white relative z-10"
                    style={{
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 10px 20px -5px rgba(0, 0, 0, 0.2)',
                      width: 'auto',
                      height: 'auto'
                    }}
                  />
                  {/* Decorative Corner Elements */}
                  <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-r from-[#f99747] to-[#bc906b] rounded-full"></div>
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-[#bc906b] to-[#5C4300] rounded-full"></div>
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-r from-[#5C4300] to-[#f99747] rounded-full"></div>
                  <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-gradient-to-r from-[#bc906b] to-[#f99747] rounded-full"></div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Text Content */}
            <motion.div
              className="flex flex-col items-center justify-center h-full w-full text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              <motion.div
                className="mb-6"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-7xl bg-gradient-to-r from-[#f99747] to-[#bc906b] bg-clip-text text-transparent">&ldquo;</span>
              </motion.div>

              <h3 className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-center ${theme === 'dark' ? 'text-white' : 'text-black'
                }`} style={{ fontFamily: 'Times New Roman, serif' }}>
                {t('about.heading')}
              </h3>

              <h4 className={`text-2xl sm:text-3xl font-bold mb-8 text-center ${theme === 'dark' ? 'text-white' : 'text-black'
                }`} style={{ fontFamily: 'Times New Roman, serif' }}>
                {t('about.subheading')}
              </h4>

              <motion.div
                className={`p-6 rounded-2xl backdrop-blur-sm border mb-6 ${theme === 'dark' ? 'bg-gray-900/80 border-gray-700' : 'bg-[#F5F1EC]/70 border-[#bc906b]/50'
                  }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <p className={`text-base sm:text-lg leading-7 text-center ${theme === 'dark' ? 'text-white' : 'text-black'
                  } mb-4`} style={{ fontFamily: 'Times New Roman, serif' }}>
                  {t('about.paragraph1')}
                </p>
              </motion.div>

              <motion.div
                className={`p-6 rounded-2xl backdrop-blur-sm border ${theme === 'dark' ? 'bg-gray-900/80 border-gray-700' : 'bg-[#F5F1EC]/70 border-[#bc906b]/50'
                  }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <p className={`text-base sm:text-lg leading-7 text-center ${theme === 'dark' ? 'text-white' : 'text-black'
                  }`} style={{ fontFamily: 'Times New Roman, serif' }}>
                  {t('about.paragraph2')}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <motion.section
        className={`relative py-24 px-4 sm:px-6 lg:px-8 shadow-2xl overflow-hidden ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-[#F5F1EC] via-[#f99747]/30 to-[#F5F1EC]'
          }`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-r from-[#f99747]/20 to-[#bc906b]/20 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="float"
          />
          <motion.div
            className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-r from-[#bc906b]/20 to-[#5C4300]/20 rounded-full blur-3xl"
            variants={floatingVariants}
            animate="float"
            transition={{ delay: 2 }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <div className="text-6xl mb-6">🌟</div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8" style={{ fontFamily: 'Times New Roman, serif' }}>
              <span className="bg-gradient-to-r from-[#f99747] to-[#bc906b] bg-clip-text text-transparent">
                {t('home.features.title')}
              </span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#f99747] to-[#bc906b] mx-auto rounded-full"></div>
            <p className={`text-lg mt-8 max-w-3xl mx-auto ${theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
              Discover what makes our culinary experience extraordinary
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Enhanced Fusion Cuisine */}
            <motion.div
              className={`group relative text-center p-10 rounded-3xl transition-all duration-500 transform hover:scale-105 backdrop-blur-sm border-2 ${theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/80 hover:from-gray-900/90 hover:to-gray-800/90 border-gray-600 hover:border-gray-500'
                  : 'bg-gradient-to-br from-[#F5F1EC]/80 to-[#f99747]/50 hover:from-[#F5F1EC]/90 hover:to-[#f99747]/60 border-[#bc906b]/50 hover:border-[#bc906b]/70'
                }`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#f99747]/20 to-[#bc906b]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <div className="relative z-10">
                <motion.div
                  className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-[#f99747] to-[#bc906b] rounded-2xl flex items-center justify-center shadow-2xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </motion.div>
                <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'
                  }`} style={{ fontFamily: 'Times New Roman, serif' }}>
                  {t('home.features.fusion')}
                </h3>
                <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-black'
                  }`} style={{ fontFamily: 'Times New Roman, serif' }}>
                  {t('home.features.fusion_desc')}
                </p>
              </div>
            </motion.div>

            {/* Enhanced Fresh Ingredients */}
            <motion.div
              className={`group relative text-center p-10 rounded-3xl transition-all duration-500 transform hover:scale-105 backdrop-blur-sm border-2 ${theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/80 hover:from-gray-900/90 hover:to-gray-800/90 border-gray-600 hover:border-gray-500'
                  : 'bg-gradient-to-br from-[#F5F1EC]/80 to-[#f99747]/50 hover:from-[#F5F1EC]/90 hover:to-[#f99747]/60 border-[#bc906b]/50 hover:border-[#bc906b]/70'
                }`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#f99747]/20 to-[#bc906b]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <div className="relative z-10">
                <motion.div
                  className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-[#f99747] to-[#bc906b] rounded-2xl flex items-center justify-center shadow-2xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </motion.div>
                <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'
                  }`} style={{ fontFamily: 'Times New Roman, serif' }}>
                  {t('home.features.fresh')}
                </h3>
                <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-black'
                  }`} style={{ fontFamily: 'Times New Roman, serif' }}>
                  {t('home.features.fresh_desc')}
                </p>
              </div>
            </motion.div>

            {/* Enhanced Elegant Ambiance */}
            <motion.div
              className={`group relative text-center p-10 rounded-3xl transition-all duration-500 transform hover:scale-105 backdrop-blur-sm border-2 ${theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/80 hover:from-gray-900/90 hover:to-gray-800/90 border-gray-600 hover:border-gray-500'
                  : 'bg-gradient-to-br from-[#F5F1EC]/80 to-[#f99747]/50 hover:from-[#F5F1EC]/90 hover:to-[#f99747]/60 border-[#bc906b]/50 hover:border-[#bc906b]/70'
                }`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#f99747]/20 to-[#bc906b]/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              <div className="relative z-10">
                <motion.div
                  className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-[#f99747] to-[#bc906b] rounded-2xl flex items-center justify-center shadow-2xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </motion.div>
                <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'
                  }`} style={{ fontFamily: 'Times New Roman, serif' }}>
                  {t('home.features.ambiance')}
                </h3>
                <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-black'
                  }`} style={{ fontFamily: 'Times New Roman, serif' }}>
                  {t('home.features.ambiance_desc')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
} 