import './globals.css'
import { metadata as siteMetadata, viewport as siteViewport } from './metadata'
import { Montserrat } from 'next/font/google'
import FontLoader from '@/components/FontLoader'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata = siteMetadata
export const viewport = siteViewport

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={montserrat.className}>
        <FontLoader />
        {children}
      </body>
    </html>
  )
}

