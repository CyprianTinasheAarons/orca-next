import { ReactNode } from 'react'
import { Footer } from '~/components/footer'
import { Navbar } from '~/components/navbar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow mt-[-54px] pt-[54px] xl:mt-[-74px] xl:pt-[74px] bg-gradient-to-tr from-[#331710] to-[#c89450] min-h-screen flex flex-col justify-between">
        {children}

        <Footer />
      </div>
    </div>
  )
}
