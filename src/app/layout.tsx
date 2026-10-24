import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Miami Vice Systems | CAD-MDT',
  description: 'Administrative Panel for Miami Vice RP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className + " bg-slate-950 text-slate-50"}>
        {children}
      </body>
    </html>
  )
}
