import { useAddress } from '@thirdweb-dev/react'
import Loader from '@ui/loader'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useMint from './use-mint'

export function protectedRoute(Component: any) {
  return function useProtectedRoute(props: any) {
    const router = useRouter()
    const address = useAddress()
    const [loader, setLoader] = useState<boolean>()
    const { isLoading: isMintLoading } = useMint()

    useEffect(() => {
      if (!isMintLoading && !address) {
        router.replace('/connect')
        return setLoader(true)
      }
    }, [isMintLoading, address, router])

    if (loader || isMintLoading) {
      return <Loader fullScreen />
    }

    return <Component {...props} />
  }
}
