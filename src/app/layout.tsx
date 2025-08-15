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
        
        {/* Minimal critical CSS for above-the-fold layout */}
        <style dangerouslySetInnerHTML={{ __html: `*,::after,::before{box-sizing:border-box}body,html{margin:0;padding:0}body{font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;line-height:1.5}h1,h2,p{margin:0}.relative{position:relative}.absolute{position:absolute}.inset-0{inset:0}.z-10{z-index:10}.z-20{z-index:20}.flex{display:flex}.min-h-screen{min-height:100vh}.w-full{width:100%}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.overflow-hidden{overflow:hidden}.rounded-xl{border-radius:.75rem}.bg-gradient-to-b{background-image:linear-gradient(to bottom,var(--tw-gradient-stops))}.from-black\\/70{--tw-gradient-from:rgba(0,0,0,.7)}.to-transparent{--tw-gradient-to:transparent}.bg-cover{background-size:cover}.bg-center{background-position:center}.px-4{padding-left:1rem;padding-right:1rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.text-center{text-align:center}.text-white{color:#fff}.bg-amber-600{background-color:#d97706}.bg-gray-800{background-color:#1f2937}.bg-green-600{background-color:#16a34a}` }} />
        
        {/* Non-blocking CSS with proper preload + swap pattern */}
        <link rel="preload" as="style" href="/css/21dd575f6da5a64f.css" />
        <link rel="preload" as="style" href="/css/824db010a7f7a3f8.css" />
        <link rel="preload" as="style" href="https://awards.infcdn.net/circ5_n.css" />
        
        {/* Use dangerouslySetInnerHTML to add onload attribute */}
        <script dangerouslySetInnerHTML={{
          __html: `
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
          `
        }} />
        
        {/* Google Fonts - CDN only strategy */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;500;700&display=swap" />
        
        <noscript>
          <link rel="stylesheet" href="/css/21dd575f6da5a64f.css" />
          <link rel="stylesheet" href="/css/824db010a7f7a3f8.css" />
          <link rel="stylesheet" href="https://awards.infcdn.net/circ5_n.css" />
        </noscript>
        
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
