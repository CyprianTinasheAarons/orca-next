import { Web3Button } from '@thirdweb-dev/react'
import { BlurImage } from '@ui/blur-image'
import { Container } from '@ui/container'
import Loader from '@ui/loader'
import { Text } from '@ui/text'
import type { NextPage } from 'next'
import { Toaster, toast } from 'react-hot-toast'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { Navbar } from '~/components/navbar'
import useMint from '~/hooks/use-mint'
import { protectedRoute } from '~/hooks/use-route-guard'

const Home: NextPage = () => {
  const {
    nftDrop,
    quantity,
    setQuantity,
    contractMetadata,
    claimConditions,
    maxClaimable,
    isSoldOut,
    canClaim,
    isLoading,
    buttonLoading,
    buttonText,
  } = useMint()

  return (
    <div>
      <Toaster />

      <Navbar />

      <div className="mt-[-54px] pt-[54px] xl:mt-[-74px] xl:pt-[74px] ocean min-h-screen flex items-center justify-center">
        <Container>
          <div className="flex flex-col items-center p-3 space-y-3 text-center sm:p-5 sm:space-y-5">
            {isLoading ? (
              <Loader fullScreen />
            ) : (
              <div>
                <div className="mb-3 text-xl font-semibold text-center sm:mb-5">
                  {isSoldOut && (
                    <Text variant="heading/bold" className="mb-10 text-center">
                      Sold Out !!!
                    </Text>
                  )}

                  <Text variant="subHeading/bold">
                    {contractMetadata?.name}
                  </Text>
                  {/* <Text variant="title/normal" className="max-w-[400px]">
                    {contractMetadata?.description}
                  </Text> */}
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-[300px] relative group cursor-pointer mb-4">
                    <BlurImage
                      image={contractMetadata?.image}
                      classes="rounded-xl"
                      ratio="aspect-h-7 aspect-w-5"
                    />
                  </div>

                  {!isSoldOut && (
                    <>
                      {claimConditions.data?.length === 0 ||
                        claimConditions.data?.every(
                          (cc) => cc.maxClaimableSupply === '0'
                        ) ? (
                        <div>
                          <h2>
                            This drop is not ready to be minted yet. (No claim
                            condition set)
                          </h2>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center justify-center space-x-5">
                            <button
                              type="button"
                              className="p-2 text-black bg-white rounded"
                              onClick={() => setQuantity(quantity - 1)}
                              disabled={quantity <= 1}
                            >
                              <FiMinus size={20} />
                            </button>

                            <h4 className="text-2xl font-semibold text-white">
                              {quantity}
                            </h4>

                            <button
                              type="button"
                              className="p-2 text-black bg-white rounded"
                              onClick={() => setQuantity(quantity + 1)}
                              disabled={quantity >= maxClaimable}
                            >
                              <FiPlus size={20} />
                            </button>
                          </div>

                          <div className="flex items-center justify-center gap-[10%] mt-3 sm:mt-5">
                            <Web3Button
                              contractAddress={nftDrop?.getAddress() || ''}
                              action={(cntr) => cntr.erc721.claim(quantity)}
                              isDisabled={!canClaim || buttonLoading}
                              onError={(err) => {
                                console.error(err)
                                toast('Please Try Again Or Check Balance.', {
                                  style: {
                                    background: '#79252b',
                                    color: 'white',
                                    fontWeight: '600',
                                    fontSize: '17px',
                                    padding: '20px',
                                  },
                                })
                              }}
                              onSuccess={() => {
                                setQuantity(1)
                                toast('HOORAY...You successfully minted!!!', {
                                  duration: 8000,
                                  style: {
                                    background: '#95cfd0',
                                    color: 'white',
                                    fontWeight: '600',
                                    fontSize: '17px',
                                    padding: '20px',
                                  },
                                })
                              }}
                              accentColor="#fff"
                              className="connect-wallet button button-primary"
                            >
                              {buttonLoading ? 'Loading...' : buttonText}
                            </Web3Button>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default protectedRoute(Home)
