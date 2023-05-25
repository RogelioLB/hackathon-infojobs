import './globals.css'
import { Lato } from 'next/font/google'
import CurriculumContext from '../../context/curriculumContext'
import Logo from '../../components/Logo/Logo'
import OffersContext from '../../context/offersContext'
import ModalContext from '../../context/modalContext'

const lato = Lato({ subsets: ['latin'] , weight:["400","700","900"]})

export const metadata = {
  title: 'InfoJobs Offer Checker with CV',
  description: 'This app provides you a way to compare the min requirements of the offer with your skills. Using ChatGPT.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <nav>
          <Logo />
        </nav>
        <ModalContext>
          <CurriculumContext>
            <OffersContext>
              {children}
            </OffersContext>
          </CurriculumContext>
        </ModalContext>
      </body>
    </html>
  )
}
