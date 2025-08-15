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
        
        <style dangerouslySetInnerHTML={{ __html: `*,::after,::before{box-sizing:border-box}body,html{margin:0;padding:0;height:100%}body{font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;line-height:1.5;-webkit-font-smoothing:antialiased}h1,h2,p{margin:0}button{font:inherit;cursor:pointer;border:0;background:0 0}.relative{position:relative}.absolute{position:absolute}.inset-0{inset:0}.z-5{z-index:5}.z-10{z-index:10}.z-15{z-index:15}.z-20{z-index:20}.mx-auto{margin-left:auto;margin-right:auto}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.flex{display:flex}.inline-block{display:inline-block}.h-screen{height:100vh}.min-h-screen{min-height:100vh}.w-full{width:100%}.max-w-6xl{max-width:72rem}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.gap-3{gap:.75rem}.gap-4{gap:1rem}.overflow-hidden{overflow:hidden}.rounded-xl{border-radius:.75rem}.rounded-2xl{border-radius:1rem}.bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}.bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.from-black\\/60{--tw-gradient-from:rgba(0,0,0,.6);--tw-gradient-to:rgba(0,0,0,0);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.via-black\\/30{--tw-gradient-to:rgba(0,0,0,0);--tw-gradient-stops:var(--tw-gradient-from),rgba(0,0,0,.3),var(--tw-gradient-to)}.to-black\\/40{--tw-gradient-to:rgba(0,0,0,.4)}.bg-cover{background-size:cover}.bg-center{background-position:center}.object-cover{object-fit:cover}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.text-center{text-align:center}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-5xl{font-size:3rem;line-height:1}.text-sm{font-size:.875rem;line-height:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-black{font-weight:900}.font-bold{font-weight:700}.italic{font-style:italic}.text-white{color:#fff}.text-transparent{color:transparent}.bg-clip-text{background-clip:text}.opacity-90{opacity:.9}.shadow-2xl{box-shadow:0 25px 50px -12px rgba(0,0,0,.25)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:150ms}.duration-300{transition-duration:300ms}.transform{transform:translate(0,0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1)}.hover\\:scale-105:hover{transform:scale(1.05)}.focus\\:scale-105:focus{transform:scale(1.05)}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-4:focus{box-shadow:0 0 0 4px var(--tw-ring-color)}.group{}.group:hover .group-hover\\:opacity-100{opacity:1}.group:focus .group-focus\\:opacity-100{opacity:1}@media(min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:gap-4{gap:1rem}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:py-3{padding-top:.75rem;padding-bottom:.75rem}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.sm\\:text-6xl{font-size:3.75rem;line-height:1}.sm\\:text-base{font-size:1rem;line-height:1.5rem}.sm\\:text-lg{font-size:1.125rem;line-height:1.75rem}.sm\\:rounded-2xl{border-radius:1rem}.sm\\:mb-4{margin-bottom:1rem}.sm\\:mb-6{margin-bottom:1.5rem}.sm\\:mb-8{margin-bottom:2rem}}@media(min-width:768px){.md\\:px-8{padding-left:2rem;padding-right:2rem}.md\\:py-4{padding-top:1rem;padding-bottom:1rem}.md\\:text-7xl{font-size:4.5rem;line-height:1}.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}.md\\:text-xl{font-size:1.25rem;line-height:1.75rem}.md\\:gap-6{gap:1.5rem}}@media(min-width:1024px){.lg\\:px-10{padding-left:2.5rem;padding-right:2.5rem}.lg\\:py-5{padding-top:1.25rem;padding-bottom:1.25rem}.lg\\:text-7xl{font-size:4.5rem;line-height:1}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}.lg\\:text-xl{font-size:1.25rem;line-height:1.75rem}}.bg-\\[rgb\\(48\\,46\\,46\\)\\]{background-color:rgb(48,46,46)}.bg-\\[rgb\\(168\\,213\\,186\\)\\]{background-color:rgb(168,213,186)}.text-\\[rgb\\(255\\,255\\,255\\)\\]{color:rgb(255,255,255)}.text-\\[rgb\\(255\\,255\\,255\\)\\]\\/90{color:rgba(255,255,255,.9)}.focus\\:ring-\\[rgb\\(168\\,213\\,186\\)\\]\\/50:focus{--tw-ring-color:rgba(168,213,186,.5)}.bg-\\[rgba\\(42\\,37\\,37\\,0\\.24\\)\\]{background-color:rgba(42,37,37,.24)}.bg-\\[rgba\\(246\\,242\\,236\\,1\\)\\]{background-color:rgba(246,242,236,1)}` }} />

        <link rel="preload" as="style" href="/css/21dd575f6da5a64f.css" />
        <link rel="preload" as="style" href="/css/824db010a7f7a3f8.css" />
        <link rel="preload" as="style" href="https://awards.infcdn.net/circ5_n.css" />

        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var css1 = document.createElement('link');
              css1.rel = 'stylesheet';
              css1.href = '/css/21dd575f6da5a64f.css';
              css1.media = 'print';
              css1.onload = function() { this.media = 'all'; };
              document.head.appendChild(css1);
              
              var css2 = document.createElement('link');
              css2.rel = 'stylesheet';
              css2.href = '/css/824db010a7f7a3f8.css';
              css2.media = 'print';
              css2.onload = function() { this.media = 'all'; };
              document.head.appendChild(css2);
              
              var css3 = document.createElement('link');
              css3.rel = 'stylesheet';
              css3.href = 'https://awards.infcdn.net/circ5_n.css';
              css3.media = 'print';
              css3.onload = function() { this.media = 'all'; };
              document.head.appendChild(css3);
            })();
          `
        }} />

        <noscript>
          <link rel="stylesheet" href="/css/21dd575f6da5a64f.css" />
          <link rel="stylesheet" href="/css/824db010a7f7a3f8.css" />
          <link rel="stylesheet" href="https://awards.infcdn.net/circ5_n.css" />
        </noscript>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;700&display=swap" />

        <style dangerouslySetInnerHTML={{ __html: ultraCriticalCSS }} />
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