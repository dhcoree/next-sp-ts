import './globals.scss'
import { Poppins } from 'next/font/google'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600']
})

export const metadata = {
  title: 'Douglas H. de Souza',
  description: 'Douglas H. de Souza is a front-end software engineer...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
