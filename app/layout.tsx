import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600']
})

export const metadata: Metadata = {
  title: 'Biodiversidad.cl',
  description: 'Una plataforma sustentable, abierta y humana para el ecosistema verde.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}