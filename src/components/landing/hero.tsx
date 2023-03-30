import { useAddress } from '@thirdweb-dev/react'
import { Button } from '@ui/button'
import { Container } from '@ui/container'
import { Text } from '@ui/text'
import Link from 'next/link'
import { isLive } from '~/utils/data'
import images from '~/utils/images'
import { Footer } from '../footer'
import { Navbar } from '../navbar'

export default function Hero() {
  const address = useAddress()

  return (
    <>
      <Navbar />

      <div className="mt-[-54px] pt-[54px] xl:mt-[-74px] xl:pt-[74px] ocean min-h-screen flex flex-col justify-between">
        <Container>
          <div className="flex flex-col items-center w-full py-10 2xl:py-16">
            <div className="flex flex-col items-center max-w-2xl space-y-5 text-center">
              <Text
                variant="subHeading/bold"
                className="tracking-wide uppercase font-display"
              >
                Welcome to{' '}
                <span className="uppercase text-[#FFF31C]">{`Orca`}</span>{' '}
                United Society
              </Text>
              <p className="font-semibold text-justify">
                Congratulations you have decided to invest in yourself. This
                digital collectible is the first step in your art and
                entertainment journey. The concept is easy. Buy an ORCA and
                attend a Masterclass provided by Actor, Producer, and all around
                Entertainer: Columbus Short and his well qualified industry
                insiders and friends.
              </p>
              <p className="font-semibold text-justify">
                {' '}
                Want to become a Actor, dancer, singer, musician (Buy an ORCA
                -attend the masterclass) Here from aspiring actors that have
                already participated in this top level experience!{' '}
              </p>
              <p className="font-semibold text-justify">Invest in YOURSELF!</p>
              {!address && (
                <Link href="/connect">
                  <Button type="button" className="hover:!-skew-y-3">
                    Connect Wallet
                  </Button>
                </Link>
              )}

              {address && isLive && (
                <Link href="/buy-now">
                  <Button type="button" className="hover:!-skew-y-3">
                    Buy Now
                  </Button>
                </Link>
              )}
            </div>

            <div className="grid grid-cols-3 gap-10 xl:grid-cols-5 mt-28 xl:mt-0">
              <img
                src={images.character3.src}
                className="w-[200px] animate-blob animation-delay-2000 -mt-40"
                alt=""
              />
              <img
                src={images.character4.src}
                className="w-[200px] animate-blob animation-delay-4000 -mt-20 sm:-mt-10"
                alt=""
              />
              <img
                src={images.mainCharacter.src}
                className="w-[200px] animate-blob -mt-40 xl:mt-20"
                alt=""
              />
              <img
                src={images.character1.src}
                className="w-[200px] animate-blob animation-delay-3000 -mt-10 hidden xl:block"
                alt=""
              />
              <img
                src={images.character2.src}
                className="w-[200px] animate-blob animation-delay-5000 -mt-40 hidden xl:block"
                alt=""
              />
            </div>
          </div>
        </Container>

        <Footer />
      </div>
    </>
  )
}
