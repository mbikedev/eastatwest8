import type { Metadata } from "next";
import { Inter, Roboto, Rozha_One, ZCOOL_XiaoWei } from "next/font/google";
import "./globals.css";
import ZeroCSSBlocking, { ultraCriticalCSS } from '../components/ZeroCSSBlocking';
import { ThemeProvider } from "../context/ThemeContext";
import { LightboxProvider } from "../context/LightboxContext";
import { CartProvider } from "../context/CartContext";
import { LanguageProvider } from "../context/LanguageContext";
import I18nProvider from "../components/I18nProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientProviders from "../components/ClientProviders";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ 
  weight: ['400', '500', '700'],
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

// Self-host display fonts to avoid render-blocking external CSS
const rozha = Rozha_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-rozha',
});
const zcool = ZCOOL_XiaoWei({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-xiaowei',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://eastatwest.be'),
  title: "East @ West — Lebanese Fusion Restaurant in Brussels",
  description: "Authentic Lebanese cuisine meets modern flavors at East @ West in Brussels. Experience handcrafted Mediterranean dishes, fresh ingredients & warm hospitality. Book now!",
  keywords: "Lebanese restaurant Brussels, Mediterranean cuisine, fusion restaurant, Brussels dining, Lebanese food, mezze, authentic cuisine, Restaurant Guru recommended",
  authors: [{ name: "East @ West" }],
  openGraph: {
    title: "East @ West — Lebanese Fusion Restaurant in Brussels",
    description: "Authentic Lebanese cuisine meets modern flavors in the heart of Brussels. Experience handcrafted Mediterranean dishes with fresh ingredients.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/banner.webp",
        width: 1200,
        height: 630,
        alt: "East @ West Lebanese Restaurant Brussels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "East @ West — Lebanese Fusion Restaurant in Brussels",
    description: "Authentic Lebanese cuisine meets modern flavors in the heart of Brussels. Experience handcrafted Mediterranean dishes with fresh ingredients.",
    images: ["/images/banner.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://awards.infcdn.net" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Critical CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{ __html: `*,::after,::before{box-sizing:border-box}body,html{margin:0;padding:0;height:100%}body{font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;line-height:1.5;-webkit-font-smoothing:antialiased}h1,h2,p{margin:0}button{font:inherit;cursor:pointer;border:0;background:0 0}.relative{position:relative}.absolute{position:absolute}.inset-0{inset:0}.z-10{z-index:10}.z-20{z-index:20}.mx-auto{margin-left:auto;margin-right:auto}.flex{display:flex}.min-h-screen{min-height:100vh}.w-full{width:100%}.max-w-6xl{max-width:72rem}.max-w-md{max-width:28rem}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-8{gap:2rem}.overflow-hidden{overflow:hidden}.rounded-2xl{border-radius:1rem}.rounded-xl{border-radius:.75rem}.bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.from-black\\/70{--tw-gradient-from:rgba(0,0,0,.7);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.via-black\\/50{--tw-gradient-to:rgba(0,0,0,0);--tw-gradient-stops:var(--tw-gradient-from),rgba(0,0,0,.5),var(--tw-gradient-to)}.to-transparent{--tw-gradient-to:transparent}.bg-cover{background-size:cover}.bg-center{background-position:center}.bg-no-repeat{background-repeat:no-repeat}.p-8{padding:2rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-12{padding-top:3rem;padding-bottom:3rem}.text-center{text-align:center}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-5xl{font-size:3rem;line-height:1}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.tracking-wider{letter-spacing:.05em}.text-white{color:#fff}.opacity-90{opacity:.9}.shadow-2xl{box-shadow:0 25px 50px -12px rgba(0,0,0,.25)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:150ms}.duration-300{transition-duration:300ms}@media(min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:gap-4{gap:1rem}.sm\\:px-8{padding-left:2rem;padding-right:2rem}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.sm\\:text-6xl{font-size:3.75rem;line-height:1}}@media(min-width:768px){.md\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.md\\:py-4{padding-top:1rem;padding-bottom:1rem}.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}}.bg-amber-600{background-color:#d97706}.bg-gray-700{background-color:#374151}.bg-gray-800{background-color:#1f2937}.bg-green-600{background-color:#16a34a}.hover\\:scale-105:hover{transform:scale(1.05)}.hover\\:bg-amber-700:hover{background-color:#b45309}.hover\\:bg-gray-600:hover{background-color:#4b5563}.hover\\:bg-gray-700:hover{background-color:#374151}.hover\\:bg-green-700:hover{background-color:#15803d}.dark .dark\\:from-black\\/80{--tw-gradient-from:rgba(0,0,0,.8);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.dark .dark\\:via-black\\/60{--tw-gradient-to:rgba(0,0,0,0);--tw-gradient-stops:var(--tw-gradient-from),rgba(0,0,0,.6),var(--tw-gradient-to)}` }} />
        
        {/* Non-blocking CSS loads with fallbacks */}
        <link rel="preload" as="style" href="/css/21dd575f6da5a64f.css" />
        <link rel="stylesheet" href="/css/21dd575f6da5a64f.css" media="print" onload="this.media='all'" />
        <noscript><link rel="stylesheet" href="/css/21dd575f6da5a64f.css" /></noscript>
        
        <link rel="preload" as="style" href="/css/824db010a7f7a3f8.css" />
        <link rel="stylesheet" href="/css/824db010a7f7a3f8.css" media="print" onload="this.media='all'" />
        <noscript><link rel="stylesheet" href="/css/824db010a7f7a3f8.css" /></noscript>
        
        <link rel="preload" as="style" href="https://awards.infcdn.net/circ5_n.css" />
        <link rel="stylesheet" href="https://awards.infcdn.net/circ5_n.css" media="print" onload="this.media='all'" />
        <noscript><link rel="stylesheet" href="https://awards.infcdn.net/circ5_n.css" /></noscript>
        
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;700&display=swap" media="print" onload="this.media='all'" />
        <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;700&display=swap" /></noscript>
        
        {/* Dark mode script */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                var theme = localStorage.getItem('theme') || 'light';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch(e) {}
            })();
          `
        }} />
      </head>
      <body className={`${inter.className} ${roboto.className} ${rozha.variable} ${zcool.variable}`}>
        <I18nProvider>
          <LanguageProvider>
            <ThemeProvider>
              <CartProvider>
                <LightboxProvider>
                  <ZeroCSSBlocking />
                  <div className="min-h-screen flex flex-col">
                    <Header />
                    <main className="flex-1">
              {children}
                    </main>
                    <Footer />
                  </div>
                  <ClientProviders />
                </LightboxProvider>
              </CartProvider>
            </ThemeProvider>
          </LanguageProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
