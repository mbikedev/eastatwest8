"use client"

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'

const Footer = () => {
  const { t } = useTranslation('common')
  const { theme } = useTheme()

  return (
    <footer className={`w-full pb-8 pt-8 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-[#033b3d] text-white'
    }`}>
      <div className="flex flex-col lg:flex-row justify-between items-center px-4 md:px-12 py-4 text-sm gap-4">
        {/* Left Section - Logo, Design and Copyright */}
        <div className="flex flex-col md:flex-row items-center md:space-x-4 w-full lg:w-auto">
          <Image
            src="/images/logo-tr.webp"
            alt="East at West Logo"
            width={150}
            height={150}
            className={`h-10 w-auto mb-2 md:mb-0 transition-all duration-300 ${
              theme === 'dark' ? 'drop-shadow-[0_0_5px_white]' : ''
            }`}
          />
          <div className="flex flex-col md:flex-row items-center md:space-x-2">
            <span style={{ fontFamily: 'Rozha One, serif' }}>{t('footer.design')}</span>
            <span className="hidden md:inline-block mx-2">|</span>
            <span style={{ fontFamily: 'Rozha One, serif' }}>{t('footer.copyright')}</span>
          </div>
        </div>
        
        {/* Center Section - Social Icons */}
        <div className="flex justify-center items-center gap-2 order-first lg:order-none">
          <a
            href="https://www.facebook.com/people/East-at-West/100063702576184/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="rounded-md bg-[#3b5998] hover:bg-[#2d4373] p-2 transition-colors duration-200 shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="24" height="24">
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/east_at_west/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="rounded-md bg-[#E4405F] hover:bg-[#C13584] p-2 transition-colors duration-200 shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.808 2.256 6.088 2.243 6.497 2.243 12c0 5.503.013 5.912.072 7.192.059 1.276.353 2.449 1.32 3.416.967.967 2.14 1.261 3.416 1.32 1.28.059 1.689.072 7.192.072s5.912-.013 7.192-.072c1.276-.059 2.449-.353 3.416-1.32.967-.967 1.261-2.14 1.32-3.416.059-1.28.072-1.689.072-7.192s-.013-5.912-.072-7.192c-.059-1.276-.353-2.449-1.32-3.416C21.551.425 20.378.131 19.102.072 17.822.013 17.413 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </a>
        </div>

        {/* Right Section - Contact Info */}
        <div className="flex flex-col md:flex-row items-center md:space-x-4 w-full lg:w-auto lg:justify-end">
          <span style={{ fontFamily: 'Rozha One, serif' }}>{t('footer.phone')}</span>
          <span className="hidden md:inline-block mx-2">|</span>
          <span style={{ fontFamily: 'Rozha One, serif' }}>{t('footer.email')}</span>
          <span className="hidden md:inline-block mx-2">|</span>
          <span style={{ fontFamily: 'Rozha One, serif' }}>{t('footer.address')}</span>
        </div>
      </div>
      <div className="border-t border-white/10 w-full" />
    </footer>
  )
}

export default Footer
