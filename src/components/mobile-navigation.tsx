import { Dialog } from '@headlessui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { useAddress } from '@thirdweb-dev/react'
import HL from '@ui/hl'
import { XIcon } from '@ui/icons'
import { Text } from '@ui/text'
import Link from 'next/link'
import { GiSharkFin } from 'react-icons/gi'
import { isLive } from '~/utils/data'

export function MobileNavigation() {
  const router = useRouter()
  const address = useAddress()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    function onRouteChange() {
      setIsOpen(false)
    }

    router.events.on('routeChangeComplete', onRouteChange)
    router.events.on('routeChangeError', onRouteChange)

    return () => {
      router.events.off('routeChangeComplete', onRouteChange)
      router.events.off('routeChangeError', onRouteChange)
    }
  }, [router, isOpen])

  return (
    <>
      <button
        type="button"
        className="flex items-center justify-center rounded-lg h-7 w-7"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation"
      >
        {/* <MenuIcon className="w-4 h-4 fill-white stroke-white" /> */}
        <GiSharkFin
          className="transition duration-700 transform scale-125 stroke-white hover:-rotate-45"
          size={30}
        />
      </button>

      <Dialog
        open={isOpen}
        onClose={setIsOpen}
        className="fixed inset-0 z-50 flex justify-end overflow-y-auto bg-darkest/50 backdrop-blur"
        aria-label="Navigation"
      >
        <Dialog.Panel className="w-full max-w-xs min-h-full px-4 pt-5 pb-12 ocean sm:px-6">
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation"
            >
              <XIcon className="w-6 h-6 transition duration-700 transform stroke-white hover:rotate-180" />
            </button>
          </div>

          <div className="flex flex-col items-center w-full mt-10 space-y-5">
            {!address && (
              <Link href="/connect" className="group">
                <span className="w-full">
                  <HL />
                  <Text
                    variant="title/bold"
                    className="my-5 transition duration-300 transform group-hover:text-secondary"
                  >
                    Connect Wallet
                  </Text>
                  <HL />
                </span>
              </Link>
            )}

            {address && isLive && (
              <Link href="/buy-now" className="group">
                <span className="w-full">
                  <HL />
                  <Text
                    variant="title/bold"
                    className="my-5 transition duration-300 transform group-hover:text-secondary"
                  >
                    Buy Now
                  </Text>
                  <HL />
                </span>
              </Link>
            )}

            <a
              target="_blank"
              href="https://twitter.com/UnitedORCA"
              rel="noreferrer"
              className="group"
            >
              <span className="w-full">
                <Text
                  variant="title/bold"
                  className="mb-5 transition duration-300 transform group-hover:text-secondary"
                >
                  Twitter
                </Text>
                <HL />
              </span>
            </a>

            <a
              target="_blank"
              href="https://opensea.io/OrcaUnited"
              rel="noreferrer"
              className="group"
            >
              <span className="w-full">
                <Text
                  variant="title/bold"
                  className="mb-5 transition duration-300 transform group-hover:text-secondary"
                >
                  OpenSea
                </Text>
                <HL />
              </span>
            </a>

            <a
              target="_blank"
              href="https://www.instagram.com/officialcshort/"
              rel="noreferrer"
              className="group"
            >
              <span className="w-full">
                <Text
                  variant="title/bold"
                  className="mb-5 transition duration-300 transform group-hover:text-secondary"
                >
                  Instagram
                </Text>
                <HL />
              </span>
            </a>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
