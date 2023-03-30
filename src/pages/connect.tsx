/* eslint-disable react-hooks/exhaustive-deps */
import { useAddress } from '@thirdweb-dev/react'
import { ConnectWallet } from '@ui/connect-wallet'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function ConnectPage() {
  const router = useRouter()
  const address = useAddress()
  useEffect(() => {
    if (address) {
      router.push('/')
    }
  }, [address])

  return <ConnectWallet />
}
