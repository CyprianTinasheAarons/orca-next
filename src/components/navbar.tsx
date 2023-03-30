import clsx from 'clsx'

import { Container } from '@ui/container'
import HL from '@ui/hl'
import Logo from './logo'
import { MobileNavigation } from './mobile-navigation'
import { Navigation, NavigationIcons } from './navigation'

function Header() {
  return (
    <header
      className={clsx(
        'sticky top-0 z-50 transition duration-500 backdrop-blur-md'
      )}
    >
      <Container>
        <div className="flex w-full items-center space-x-6 xl:space-x-12 justify-between py-3">
          <Logo />

          <div className="hidden xl:block">
            <NavigationIcons />
          </div>

          <div className="ml-4 flex space-x-3 xl:space-x-6 items-center">
            <div className="hidden xl:flex space-x-6 items-center">
              <Navigation />
            </div>
            <MobileNavigation />
          </div>
        </div>

        <HL />
      </Container>
    </header>
  )
}

export function Navbar() {
  return (
    <>
      <Header />
    </>
  )
}
