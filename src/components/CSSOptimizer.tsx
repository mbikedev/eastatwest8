'use client'

import { useEffect } from 'react'

export default function CSSOptimizer() {
  useEffect(() => {
    // Load non-critical CSS after page load
    const loadNonCriticalCSS = () => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = '/styles/non-critical.css'
      link.media = 'print'
      link.onload = () => {
        link.media = 'all'
      }
      document.head.appendChild(link)
    }

    // Load CSS after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadNonCriticalCSS)
    } else {
      loadNonCriticalCSS()
    }

    // Cleanup
    return () => {
      document.removeEventListener('DOMContentLoaded', loadNonCriticalCSS)
    }
  }, [])

  return null
}

// Critical CSS that will be inlined
export const criticalCSS = `
html{-webkit-text-size-adjust:100%!important;-moz-text-size-adjust:100%!important;-ms-text-size-adjust:100%!important;text-size-adjust:100%!important}:host{-webkit-text-size-adjust:100%!important;-moz-text-size-adjust:100%!important;-ms-text-size-adjust:100%!important;text-size-adjust:100%!important}:root{--background:#ffffff;--foreground:#171717}@media (prefers-color-scheme:dark){:root{--background:#0a0a0a;--foreground:#ededed}}body{background:var(--background);color:var(--foreground);font-family:'Roboto',sans-serif;margin:0;padding:0;transition:background-color .3s ease,color .3s ease}.header-gradient{background:linear-gradient(135deg,#f99747 0%,#bc906b 100%)}.btn-primary{background:linear-gradient(135deg,#f99747 0%,#bc906b 100%);color:white;padding:.75rem 1.5rem;border-radius:.5rem;font-weight:600;border:none;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease}.btn-primary:hover{transform:scale(1.05);box-shadow:0 10px 25px -5px rgba(249,151,71,.4)}.text-gradient{background:linear-gradient(135deg,#f99747 0%,#bc906b 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent}.theme-light{--bg-primary:#ffffff;--text-primary:#171717;--bg-secondary:#f8fafc;--text-secondary:#64748b}.theme-dark{--bg-primary:#5C4300;--text-primary:#ffffff;--bg-secondary:#4a3700;--text-secondary:#94a3b8}.loading{opacity:0;visibility:hidden}.loaded{opacity:1;visibility:visible;transition:opacity .3s ease}.min-h-screen{min-height:100vh}.flex{display:flex}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.w-full{width:100%}.h-full{height:100%}.relative{position:relative}.absolute{position:absolute}.inset-0{top:0;right:0;bottom:0;left:0}.z-10{z-index:10}.z-20{z-index:20}.z-50{z-index:50}.p-4{padding:1rem}.p-8{padding:2rem}.mb-4{margin-bottom:1rem}.mb-8{margin-bottom:2rem}.mt-4{margin-top:1rem}.mx-auto{margin-left:auto;margin-right:auto}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.font-bold{font-weight:700}.font-black{font-weight:900}.text-center{text-align:center}@media (min-width:768px){.md\\:text-5xl{font-size:3rem;line-height:1}.md\\:text-6xl{font-size:3.75rem;line-height:1}}@media (min-width:1024px){.lg\\:text-6xl{font-size:3.75rem;line-height:1}.lg\\:text-7xl{font-size:4.5rem;line-height:1}}
` 