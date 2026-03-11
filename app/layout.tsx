import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP, Shippori_Mincho_B1 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

const shipporiminchoB1 = Shippori_Mincho_B1({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-shippori-mincho',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: '横浜市立大学 医学部 消化器内科学教室',
    template: '%s | 横浜市立大学 消化器内科学教室',
  },
  description:
    '横浜市立大学医学部消化器内科学教室の公式サイトです。消化器内科の診療・研究・教育を通じて、横浜から世界へ。入局希望の医学生・研修医の方、患者さん・地域の医療機関の方への情報を掲載しています。',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0C2340',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ja"
      data-scroll-behavior="smooth"
      className={`${notoSansJP.variable} ${shipporiminchoB1.variable}`}
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
