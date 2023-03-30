import { useAddress, useNetwork, useNetworkMismatch } from '@thirdweb-dev/react'
import { Button } from '@ui/button'
import { useEffect } from 'react'
import { activeChainId } from '~/pages/_app'

export const AutoSwitchNetwork = () => {
  const address = useAddress()
  const [, switchNetwork] = useNetwork()
  const isMismatched = useNetworkMismatch()

  useEffect(() => {
    if (isMismatched && switchNetwork) {
      setTimeout(() => {
        switchNetwork?.(activeChainId)
      }, 2000)
    }
  }, [address, isMismatched, switchNetwork])

  return (
    <Button
      type="button"
      className="!font-semibold"
      onClick={() => switchNetwork?.(activeChainId)}
    >
      Switch Network
    </Button>
  )
}
