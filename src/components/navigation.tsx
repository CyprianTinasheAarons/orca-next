import { useAddress, useDisconnect } from '@thirdweb-dev/react'
import { Button } from '@ui/button'
import Link from 'next/link'
import images from '~/utils/images'

export function NavigationIcons() {
  return (
    <div className="flex items-center space-x-6 align-middle">
      <a
        href="https://opensea.io/ORCAUNITEDSOCIETY"
        className="transition duration-300 transform hover:scale-110"
        target="_blank"
        rel="noreferrer"
      >
        <img src={images.opensea.src} className="h-10" alt="" />
      </a>
      <a
        href="https://twitter.com/UnitedORCA"
        className="transition duration-300 transform hover:scale-110"
        target="_blank"
        rel="noreferrer"
      >
        <img src={images.twitter.src} className="h-10" alt="" />
      </a>
      <a
        href="https://www.instagram.com/officialcshort/"
        className="transition duration-300 transform hover:scale-110"
        target="_blank"
        rel="noreferrer"
      >
        <img src={images.instagram.src} className="h-11" alt="" />
      </a>
    </div>
  )
}

export function Navigation() {
  const address = useAddress()
  const disconnect = useDisconnect()

  return (
    <>
      {!address ? (
        <Link href="/connect">
          <Button type="button" className="hover:!-skew-y-3">
            Connect Wallet
          </Button>
        </Link>
      ) : (
        <Button
          onClick={() => disconnect()}
          type="button"
          className="hover:!-skew-y-3"
        >
          Logout
        </Button>
      )}
    </>
  )
}
