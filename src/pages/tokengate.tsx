/* eslint-disable react-hooks/exhaustive-deps */
import { useAddress } from '@thirdweb-dev/react'
import Loader from '@ui/loader'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import nftAbi from '../abi/nft.json'

export default function TokenGate() {
  const router = useRouter()
  const address = useAddress()
  const [isLoading, setIsLoading] = useState(true)

  const getToken = async () => {
    // Connect to the Ethereum network (e.g., using MetaMask)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window?.ethereum)
    const signer = provider.getSigner()

    // Instantiate the contract object
    const nftDrop = new ethers.Contract(
      '0x8458bF6dF499EBD50765582B7A2E3B295b877ccf',
      nftAbi,
      signer
    )
    try {
      await nftDrop?.balanceOf(address?.toString()).then((res: number) => {
        setIsLoading(false)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        if (parseInt(res) > 0) {
          return null
        } else {
          router.push('/buy-now')
        }
      })
    } catch (e) {
      setIsLoading(false)
      router.push('/buy-now')
      console.log(e)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (address !== (null || undefined)) {
        getToken()
      } else {
        router.push('/buy-now')
      }
    }, 2000)
  }, [address])

  return (
    <>
      {isLoading ? (
        <Loader fullScreen />
      ) : (
        <iframe
          title="Calendly"
          src="https://calendly.com/orcaunited"
          className="w-full h-screen"
          style={{ border: 'none' }}
        />
      )}
    </>
  )
}
