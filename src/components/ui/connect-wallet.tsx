import {
  useCoinbaseWallet,
  useMetamask,
  useWalletConnect,
} from '@thirdweb-dev/react'

import { Button } from '@ui/button'
import { isLive } from '~/utils/data'
import images from '~/utils/images'
import Logo from '../logo'
import { CoinbaseIcon, MetamaskIcon, WallectConnectIcon } from './icons'
import { Text } from './text'

export const ConnectWallet = () => {
  const connectWithCoinbaseWallet = useCoinbaseWallet()
  const connectWithMetamask = useMetamask()
  const connectWithWalletConnect = useWalletConnect()

  return (
    <div className="flex min-h-screen lg:flex ocean">
      <img
        src={images.character2.src}
        className="hidden object-cover w-1/2 h-screen bg-blue-500 bg-opacity-30 lg:block"
        alt=""
      />

      <div className="flex flex-col justify-center w-full p-5 space-y-5 xl:space-y-10 lg:w-1/2 md:px-10 xl:px-20 2xl:px-40">
        {isLive ? (
          <>
            <div>
              <div className="grid grid-cols-3 gap-10 mb-10 justify-items-center">
                <img
                  src={images.character3.src}
                  className="w-[100px] animate-blob animation-delay-2000"
                  alt=""
                />

                <img
                  src={images.mainCharacter.src}
                  className="w-[100px] animate-blob"
                  alt=""
                />

                <img
                  src={images.character4.src}
                  className="w-[100px] animate-blob animation-delay-4000"
                  alt=""
                />
              </div>

              <div className="flex flex-col items-center justify-between space-y-5 md:space-y-0 md:flex-row">
                <Text variant="title/bold" className="text-2xl">
                  Connect wallet
                </Text>
              </div>
              <Text
                variant="title/normal"
                className="mt-5 text-center lg:text-start !text-lg"
              >
                Choose how you want to connect. There are several wallet
                providers.
              </Text>
            </div>
            <div className="flex flex-col w-full space-y-5">
              <Button
                fullWidth
                type="button"
                onClick={() => connectWithMetamask()}
                className="  button button-secondary align-middle items-center first-line:hover:scale-105 transform transition duration-300 flex !justify-center space-x-3"
              >
                <div className="flex items-center p-2 align-middle">
                  {' '}
                  <MetamaskIcon className="mr-2 w-7" />
                  <span>MetaMask</span>
                </div>
              </Button>

              <Button
                fullWidth
                type="button"
                onClick={() => connectWithCoinbaseWallet()}
                className="  button button-secondary align-middle items-center first-line:hover:scale-105 transform transition duration-300 flex !justify-center space-x-3"
              >
                <div className="flex items-center p-2 align-middle">
                  <CoinbaseIcon className="mr-2 w-7" />{' '}
                  <span>Coinbase Wallet</span>
                </div>
              </Button>

              <Button
                fullWidth
                type="button"
                onClick={() => connectWithWalletConnect()}
                className="  button button-secondary align-middlw items-center first-line:hover:scale-105 transform transition duration-300 flex !justify-center space-x-3"
              >
                {' '}
                <div className="flex items-center p-2 align-middle">
                  <WallectConnectIcon className="mr-2 w-7" />{' '}
                  <span>WalletConnect</span>
                </div>
              </Button>
            </div>
          </>
        ) : (
          <div>
            <div className="grid grid-cols-3 gap-10 mb-10 justify-items-center">
              <img
                src={images.character3.src}
                className="w-[100px] animate-blob animation-delay-2000"
                alt=""
              />

              <img
                src={images.mainCharacter.src}
                className="w-[100px] animate-blob"
                alt=""
              />

              <img
                src={images.character4.src}
                className="w-[100px] animate-blob animation-delay-4000"
                alt=""
              />
            </div>

            <Logo classes="mx-auto !h-[40px] object-contain" />

            <Text variant="subHeading/normal" className="mt-5 text-center">
              We Launch on March 6th <br />
              Follow us on{' '}
              <a
                href="https://twitter.com/subordinals"
                className="inline-block -mb-2 transition duration-300 transform hover:scale-110"
                target="_blank"
                rel="noreferrer"
              >
                <img src={images.twitter.src} className="h-10" alt="" />
              </a>
            </Text>
          </div>
        )}
      </div>
    </div>
  )
}
