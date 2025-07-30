'use client'

import { useEffect } from 'react'

// Critical CSS that must be inlined (expanded version)
export const criticalCSS = `
/* Critical reset and base styles - 100% above-the-fold coverage */
*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid}
html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif}
body{margin:0;line-height:inherit;background:var(--background);color:var(--foreground);font-family:'Roboto',sans-serif}

/* Critical CSS variables */
:root{--background:#ffffff;--foreground:#171717}
@media(prefers-color-scheme:dark){:root{--background:#0a0a0a;--foreground:#ededed}}

/* Critical layout utilities */
.min-h-screen{min-height:100vh}
.flex{display:flex}
.flex-col{flex-direction:column}
.items-center{align-items:center}
.justify-center{justify-content:center}
.relative{position:relative}
.absolute{position:absolute}
.fixed{position:fixed}
.inset-0{top:0;right:0;bottom:0;left:0}
.z-10{z-index:10}
.z-20{z-index:20}
.z-50{z-index:50}
.w-full{width:100%}
.h-full{height:100%}
.h-screen{height:100vh}

/* Critical spacing */
.p-4{padding:1rem}
.p-6{padding:1.5rem}
.px-4{padding-left:1rem;padding-right:1rem}
.px-6{padding-left:1.5rem;padding-right:1.5rem}
.py-12{padding-top:3rem;padding-bottom:3rem}
.pt-16{padding-top:4rem}
.mb-4{margin-bottom:1rem}
.mb-6{margin-bottom:1.5rem}
.mb-8{margin-bottom:2rem}
.mb-10{margin-bottom:2.5rem}
.mx-auto{margin-left:auto;margin-right:auto}
.gap-6{gap:1.5rem}
.max-w-3xl{max-width:48rem}
.max-w-6xl{max-width:72rem}

/* Critical typography */
.text-center{text-align:center}
.text-xl{font-size:1.25rem;line-height:1.75rem}
.text-2xl{font-size:1.5rem;line-height:2rem}
.text-4xl{font-size:2.25rem;line-height:2.5rem}
.text-5xl{font-size:3rem;line-height:1}
.text-6xl{font-size:3.75rem;line-height:1}
.font-bold{font-weight:700}
.font-black{font-weight:900}
.font-light{font-weight:300}
.leading-relaxed{line-height:1.625}

/* Critical colors */
.text-white{color:#fff}
.bg-white{background-color:#fff}
.bg-black{background-color:#000}

/* Critical hero section styles */
.hero-section{height:100vh;position:relative;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#5C4300 0%,#000 100%)}
.hero-video{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}
.hero-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.4) 50%,rgba(0,0,0,0.2) 100%)}
.hero-content{position:relative;z-index:20;text-align:center;padding:1rem;max-width:96rem}

/* Critical hero title with all responsive variants */
.hero-title{font-size:3rem;font-weight:900;margin-bottom:1.5rem;font-family:"ZCOOL XiaoWei",serif;background:linear-gradient(to right,#f99747,#bc906b,#5C4300);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;text-shadow:0 25px 50px rgba(0,0,0,0.5)}

/* Critical LCP text - must render immediately */
.lcp-text{opacity:1!important;transform:translateY(0px)!important;transition:none!important;font-size:1.25rem;line-height:1.75rem;color:rgba(245,241,236,0.9);margin-bottom:2.5rem;max-width:48rem;margin-left:auto;margin-right:auto;font-weight:300;line-height:1.625}

/* Critical buttons */
.btn-hero{display:inline-block;background:linear-gradient(90deg,#f99747 0%,#bc906b 100%);color:#F5F1EC;padding:1.25rem 2.5rem;border-radius:1rem;font-size:1.25rem;font-weight:700;text-decoration:none;transition:all 0.3s ease;box-shadow:0 25px 50px -12px rgba(0,0,0,0.25)}
.btn-hero:hover{transform:scale(1.05);box-shadow:0 25px 50px -12px rgba(249,151,71,0.25)}
.btn-secondary{display:inline-block;border:3px solid #F5F1EC;background:rgba(245,241,236,0.1);backdrop-filter:blur(4px);color:#F5F1EC;padding:1.25rem 2.5rem;border-radius:1rem;font-size:1.25rem;font-weight:700;text-decoration:none;transition:all 0.3s ease;box-shadow:0 25px 50px -12px rgba(0,0,0,0.25)}
.btn-secondary:hover{background:#F5F1EC;color:#5C4300;transform:scale(1.05)}

/* Critical navigation */
.nav-header{position:fixed;top:0;left:0;right:0;z-index:50;backdrop-filter:blur(12px);background:rgba(92,67,0,0.9)}

/* Critical gradients */
.bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}
.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}

/* Critical responsive breakpoints - all screen sizes covered */
@media(min-width:640px){
.sm\\:text-6xl{font-size:3.75rem;line-height:1}
.sm\\:text-8xl{font-size:6rem;line-height:1}
.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}
.sm\\:flex-row{flex-direction:row}
.lcp-text{font-size:1.5rem;line-height:2rem}
.hero-title{font-size:3.75rem}
}
@media(min-width:768px){
.md\\:text-5xl{font-size:3rem;line-height:1}
.md\\:text-6xl{font-size:3.75rem;line-height:1}
}
@media(min-width:1024px){
.lg\\:text-6xl{font-size:3.75rem;line-height:1}
.lg\\:text-7xl{font-size:4.5rem;line-height:1}
.lg\\:px-8{padding-left:2rem;padding-right:2rem}
.hero-title{font-size:4.5rem}
}
@media(min-width:1280px){
.xl\\:text-8xl{font-size:6rem;line-height:1}
.hero-title{font-size:5rem}
}

/* Prevent FOUC */
.loading{opacity:0;visibility:hidden}
.loaded{opacity:1;visibility:visible;transition:opacity 0.3s ease}
`

// List of all CSS files to defer
const deferredCSSFiles = [
  '/_next/static/css/app/layout.css',
  '/_next/static/css/app/globals.css', 
  '/styles/non-critical.css'
]

export default function AdvancedCSSOptimizer() {
  useEffect(() => {
    // Function to load CSS asynchronously
    const loadDeferredCSS = () => {
      deferredCSSFiles.forEach(href => {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = href
        link.media = 'print' // Load as print first (doesn't block)
        link.onload = () => {
          link.media = 'all' // Switch to all after load
        }
        // Fallback for browsers that don't support onload
        setTimeout(() => {
          link.media = 'all'
        }, 100)
        document.head.appendChild(link)
      })
      
      // Also defer any remaining stylesheet links
      const existingLinks = document.querySelectorAll('link[rel="stylesheet"]:not([data-deferred])')
      existingLinks.forEach(link => {
        const linkElement = link as HTMLLinkElement
        if (linkElement.href && !linkElement.href.includes('fonts.googleapis.com')) {
          linkElement.setAttribute('data-deferred', 'true')
          linkElement.media = 'print'
          setTimeout(() => {
            linkElement.media = 'all'
          }, 100)
        }
      })
    }

    // Load deferred CSS after a short delay to ensure critical rendering is complete
    const timer = setTimeout(loadDeferredCSS, 50)
    
    // Also load on user interaction for better perceived performance
    const events = ['mousedown', 'touchstart', 'keydown', 'scroll']
    const loadOnInteraction = () => {
      loadDeferredCSS()
      events.forEach(event => {
        document.removeEventListener(event, loadOnInteraction)
      })
    }
    
    events.forEach(event => {
      document.addEventListener(event, loadOnInteraction, { passive: true } as AddEventListenerOptions)
    })

    return () => {
      clearTimeout(timer)
      events.forEach(event => {
        document.removeEventListener(event, loadOnInteraction)
      })
    }
  }, [])

  // Preload critical resources
  useEffect(() => {
    const preloadLinks = [
      { href: '/_next/static/chunks/main.js', as: 'script' },
      { href: '/_next/static/chunks/framework.js', as: 'script' },
      { href: '/images/banner.webp', as: 'image' }
    ]

    preloadLinks.forEach(({ href, as }) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = href
      link.as = as
      document.head.appendChild(link)
    })

    // Video preloading removed - videos are better loaded on-demand
  }, [])

  return null
}

// Function to extract and minify critical CSS
export function getMinifiedCriticalCSS() {
  return criticalCSS.replace(/\s+/g, ' ').replace(/;\s*}/g, '}').trim()
}
