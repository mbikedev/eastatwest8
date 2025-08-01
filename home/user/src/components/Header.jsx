'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const { t } = useTranslation('common')
  const { theme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.sidebar') && !event.target.closest('.menu-toggle')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <motion.header 
      className={`fixed w-full top-0 z-50 transition-all duration-700 ${
        scrolled 
          ? theme === 'dark' 
            ? 'bg-black/20 backdrop-blur-md border-b border-white/10 shadow-lg' 
            : 'bg-white/30 backdrop-blur-md border-b border-gray-900/10 shadow-lg'
          : theme === 'dark' 
            ? 'bg-black/10 backdrop-blur-sm' 
            : 'bg-white/20 backdrop-blur-sm'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-14' : 'h-16'}`}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                className="relative"
                initial={{ rotate: -5 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Image
                  src="/images/logo-tr.webp"
                  alt="East at West Logo"
                  width={40}
                  height={40}
                  sizes="(max-width: 768px) 32px, 40px"
                  priority
                  className={`transition-all duration-500 group-hover:scale-110 ${
                    scrolled ? 'h-8' : 'h-10'
                  } w-auto ${
                    theme === 'dark' 
                      ? 'drop-shadow-[0_0_8px_rgba(251,146,60,0.4)] group-hover:drop-shadow-[0_0_12px_rgba(251,146,60,0.6)]' 
                      : 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)] group-hover:drop-shadow-[0_4px_16px_rgba(251,146,60,0.3)]'
                  }`}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-pink-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>
          </motion.div>



          {/* Mobile menu button */}
          <motion.div 
            className={`md:hidden flex items-center space-x-3 px-3 py-2 rounded-2xl backdrop-blur-lg transition-all duration-500 ${
              theme === 'dark' 
                ? 'bg-black/20 border border-white/20' 
                : 'bg-black/20 border border-white/20'
            }`}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
              <LanguageSwitcher />
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
              <ThemeToggle />
            </motion.div>
            <motion.button
              onClick={toggleMenu}
              className={`menu-toggle relative p-3 rounded-xl backdrop-blur-md transition-all duration-300 group ${
                theme === 'dark' 
                  ? 'text-white hover:text-orange-300 hover:bg-white/10 drop-shadow-lg' 
                  : 'text-white hover:text-orange-200 hover:bg-black/10 drop-shadow-lg'
              }`}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 relative flex flex-col justify-center items-center">
                <motion.span
                  className="block h-0.5 w-6 rounded-full transition-all duration-300 bg-white drop-shadow-lg"
                  animate={isMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                />
                <motion.span
                  className="block h-0.5 w-6 rounded-full transition-all duration-300 bg-white drop-shadow-lg"
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span
                  className="block h-0.5 w-6 rounded-full transition-all duration-300 bg-white drop-shadow-lg"
                  animate={isMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                />
              </div>
            </motion.button>
          </motion.div>
        </div>

                {/* Mobile Menu - Fully Responsive */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Mobile Menu Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/40 backdrop-blur-md z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Mobile Menu Sidebar */}
              <motion.div
                className={`sidebar fixed top-0 right-0 w-80 max-w-[90vw] sm:max-w-[75vw] h-screen z-50 md:hidden flex flex-col ${
                  theme === 'dark'
                    ? 'bg-black/30 border-l border-white/10'
                    : 'bg-white/30 border-l border-black/10'
                } backdrop-blur-2xl shadow-2xl`}
                initial={{ x: '100%', opacity: 0, scale: 0.95 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: '100%', opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* Mobile Menu Header */}
                <div className={`flex items-center justify-between p-6 border-b ${
                  theme === 'dark' ? 'border-white/10' : 'border-black/10'
                }`}>
                  <Image
                    src="/images/logo-tr.webp"
                    alt="East at West Logo"
                    width={32}
                    height={32}
                    sizes="32px"
                    className="h-8 w-auto"
                  />
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className={`p-3 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20 ${
                      theme === 'dark'
                        ? 'bg-white/5 hover:bg-white/10 text-white'
                        : 'bg-black/5 hover:bg-black/10 text-gray-900'
                    }`}
                    whileHover={{ scale: 1.05, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Close menu"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                {/* Mobile Menu Navigation */}
                <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                  {/* Menu Link */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                  >
                    <Link
                      href="/menu"
                      onClick={() => setIsMenuOpen(false)}
                      className={`group relative w-full px-6 py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/20 ${
                        theme === 'dark'
                          ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white'
                          : 'bg-black/5 hover:bg-black/10 border border-black/10 hover:border-black/20 text-gray-900'
                      } flex items-center justify-between backdrop-blur-sm`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold tracking-wide uppercase">{t('nav.menu')}</h3>
                          <p className={`text-sm ${
                            theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                          }`}>Browse our delicious offerings</p>
                        </div>
                      </div>
                      <svg className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${
                        theme === 'dark' ? 'text-white/60' : 'text-gray-500'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>

                  {/* Reservations Link */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <Link
                      href="/reservations"
                      onClick={() => setIsMenuOpen(false)}
                      className={`group relative w-full px-6 py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/20 ${
                        theme === 'dark'
                          ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white'
                          : 'bg-black/5 hover:bg-black/10 border border-black/10 hover:border-black/20 text-gray-900'
                      } flex items-center justify-between backdrop-blur-sm`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold tracking-wide uppercase">{t('nav.reservations')}</h3>
                          <p className={`text-sm ${
                            theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                          }`}>Book your table online</p>
                        </div>
                      </div>
                      <svg className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${
                        theme === 'dark' ? 'text-white/60' : 'text-gray-500'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>

                  {/* Takeaway Link */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    <Link
                      href="/takeaway"
                      onClick={() => setIsMenuOpen(false)}
                      className={`group relative w-full px-6 py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/20 ${
                        theme === 'dark'
                          ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white'
                          : 'bg-black/5 hover:bg-black/10 border border-black/10 hover:border-black/20 text-gray-900'
                      } flex items-center justify-between backdrop-blur-sm`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold tracking-wide uppercase">{t('nav.takeaway')}</h3>
                          <p className={`text-sm ${
                            theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                          }`}>Order for pickup or delivery</p>
                        </div>
                      </div>
                      <svg className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${
                        theme === 'dark' ? 'text-white/60' : 'text-gray-500'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>

                  {/* About Link */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    <Link
                      href="/about"
                      onClick={() => setIsMenuOpen(false)}
                      className={`group relative w-full px-6 py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/20 ${
                        theme === 'dark'
                          ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white'
                          : 'bg-black/5 hover:bg-black/10 border border-black/10 hover:border-black/20 text-gray-900'
                      } flex items-center justify-between backdrop-blur-sm`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold tracking-wide uppercase">{t('nav.about')}</h3>
                          <p className={`text-sm ${
                            theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                          }`}>Learn about our story</p>
                        </div>
                      </div>
                      <svg className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${
                        theme === 'dark' ? 'text-white/60' : 'text-gray-500'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>

                  {/* Contact Link */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                  >
                    <Link
                      href="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className={`group relative w-full px-6 py-4 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/20 ${
                        theme === 'dark'
                          ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white'
                          : 'bg-black/5 hover:bg-black/10 border border-black/10 hover:border-black/20 text-gray-900'
                      } flex items-center justify-between backdrop-blur-sm`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold tracking-wide uppercase">{t('nav.contact')}</h3>
                          <p className={`text-sm ${
                            theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                          }`}>Get in touch with us</p>
                        </div>
                      </div>
                      <svg className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${
                        theme === 'dark' ? 'text-white/60' : 'text-gray-500'
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>

                {/* Mobile Menu Footer */}
                <div className={`p-6 border-t space-y-4 ${
                  theme === 'dark' ? 'border-white/10' : 'border-black/10'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium tracking-wide uppercase ${
                      theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                    }`}>Language</span>
                    <LanguageSwitcher />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium tracking-wide uppercase ${
                      theme === 'dark' ? 'text-white/60' : 'text-gray-600'
                    }`}>Theme</span>
                    <ThemeToggle />
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  )
}

export default Header
