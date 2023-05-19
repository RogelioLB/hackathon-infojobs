import './globals.css'
import { Inter } from 'next/font/google'
import CurriculumContext from '../../context/curriculumContext'
import Logo from '../../components/Logo/Logo'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Logo />
        </nav>
        <CurriculumContext>
          {children}
        </CurriculumContext>
      </body>
    </html>
  )
}
