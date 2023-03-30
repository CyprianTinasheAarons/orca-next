import {
  useActiveClaimConditionForWallet,
  useAddress,
  useClaimConditions,
  useClaimIneligibilityReasons,
  useClaimedNFTSupply,
  useClaimerProofs,
  useContract,
  useContractMetadata,
  useUnclaimedNFTSupply,
} from '@thirdweb-dev/react'
import { BigNumber, utils } from 'ethers'
import { useMemo, useState } from 'react'
import { myNftDropContractAddress } from '~/utils/data'
import { parseIneligibility } from '~/utils/parse-ineligibility'

export default function useMint() {
  const { contract: nftDrop } = useContract(myNftDropContractAddress)

  const address = useAddress()
  const [quantity, setQuantity] = useState(1)

  const { data: contractMetadata } = useContractMetadata(nftDrop)

  const claimConditions = useClaimConditions(nftDrop)

  const activeClaimCondition = useActiveClaimConditionForWallet(
    nftDrop,
    address || ''
  )
  const claimerProofs = useClaimerProofs(nftDrop, address || '')
  const claimIneligibilityReasons = useClaimIneligibilityReasons(nftDrop, {
    quantity,
    walletAddress: address || '',
  })
  const unclaimedSupply = useUnclaimedNFTSupply(nftDrop)
  const claimedSupply = useClaimedNFTSupply(nftDrop)

  const numberClaimed = useMemo(() => {
    return BigNumber.from(claimedSupply.data || 0).toString()
  }, [claimedSupply])

  const numberTotal = useMemo(() => {
    return BigNumber.from(claimedSupply.data || 0)
      .add(BigNumber.from(unclaimedSupply.data || 0))
      .toString()
  }, [claimedSupply.data, unclaimedSupply.data])

  const priceToMint = useMemo(() => {
    const bnPrice = BigNumber.from(
      activeClaimCondition.data?.currencyMetadata.value || 0
    )
    return `${utils.formatUnits(
      bnPrice.mul(quantity).toString(),
      activeClaimCondition.data?.currencyMetadata.decimals || 18
    )} ${activeClaimCondition.data?.currencyMetadata.symbol}`
  }, [
    activeClaimCondition.data?.currencyMetadata.decimals,
    activeClaimCondition.data?.currencyMetadata.symbol,
    activeClaimCondition.data?.currencyMetadata.value,
    quantity,
  ])

  const maxClaimable = useMemo(() => {
    let bnMaxClaimable
    try {
      bnMaxClaimable = BigNumber.from(
        activeClaimCondition.data?.maxClaimableSupply || 0
      )
    } catch (e) {
      bnMaxClaimable = BigNumber.from(1_000_000)
    }

    let perTransactionClaimable
    try {
      perTransactionClaimable = BigNumber.from(
        activeClaimCondition.data?.maxClaimablePerWallet || 0
      )
    } catch (e) {
      perTransactionClaimable = BigNumber.from(1_000_000)
    }

    if (perTransactionClaimable.lte(bnMaxClaimable)) {
      bnMaxClaimable = perTransactionClaimable
    }

    const snapshotClaimable = claimerProofs.data?.maxClaimable

    if (snapshotClaimable) {
      if (snapshotClaimable === '0') {
        bnMaxClaimable = BigNumber.from(1_000_000)
      } else {
        try {
          bnMaxClaimable = BigNumber.from(snapshotClaimable)
        } catch (e) {
          console.log({ e })
        }
      }
    }

    const maxAvailable = BigNumber.from(unclaimedSupply.data || 0)

    let max
    if (maxAvailable.lt(bnMaxClaimable)) {
      max = maxAvailable
    } else {
      max = bnMaxClaimable
    }

    if (max.gte(1_000_000)) {
      return 1_000_000
    }
    return max.toNumber()
  }, [
    claimerProofs.data?.maxClaimable,
    unclaimedSupply.data,
    activeClaimCondition.data?.maxClaimableSupply,
    activeClaimCondition.data?.maxClaimablePerWallet,
  ])

  const isSoldOut = useMemo(() => {
    try {
      return (
        (activeClaimCondition.isSuccess &&
          BigNumber.from(activeClaimCondition.data?.availableSupply || 0).lte(
            0
          )) ||
        numberClaimed === numberTotal
      )
    } catch (e) {
      return false
    }
  }, [
    activeClaimCondition.data?.availableSupply,
    activeClaimCondition.isSuccess,
    numberClaimed,
    numberTotal,
  ])

  console.log('claimIneligibilityReasons', claimIneligibilityReasons.data)

  const canClaim = useMemo(() => {
    return (
      activeClaimCondition.isSuccess &&
      claimIneligibilityReasons.isSuccess &&
      claimIneligibilityReasons.data?.length === 0 &&
      !isSoldOut
    )
  }, [
    activeClaimCondition.isSuccess,
    claimIneligibilityReasons.data?.length,
    claimIneligibilityReasons.isSuccess,
    isSoldOut,
  ])

  const isLoading = useMemo(() => {
    return (
      activeClaimCondition.isLoading ||
      unclaimedSupply.isLoading ||
      claimedSupply.isLoading ||
      !nftDrop
    )
  }, [
    activeClaimCondition.isLoading,
    nftDrop,
    claimedSupply.isLoading,
    unclaimedSupply.isLoading,
  ])

  const buttonLoading = useMemo(
    () => isLoading || claimIneligibilityReasons.isLoading,
    [claimIneligibilityReasons.isLoading, isLoading]
  )
  const buttonText = useMemo(() => {
    if (isSoldOut) {
      return 'Sold Out'
    }

    if (canClaim) {
      const pricePerToken = BigNumber.from(
        activeClaimCondition.data?.currencyMetadata.value || 0
      )
      if (pricePerToken.eq(0)) {
        return 'Mint (Free)'
      }
      return `Mint (${priceToMint})`
    }
    if (claimIneligibilityReasons.data?.length) {
      return parseIneligibility(claimIneligibilityReasons.data, quantity)
    }
    if (buttonLoading) {
      return 'Checking eligibility...'
    }

    return 'Claiming not available'
  }, [
    isSoldOut,
    canClaim,
    claimIneligibilityReasons.data,
    buttonLoading,
    activeClaimCondition.data?.currencyMetadata.value,
    priceToMint,
    quantity,
  ])

  return {
    address,
    nftDrop,
    quantity,
    setQuantity,
    contractMetadata,
    claimConditions,
    unclaimedSupply,
    claimedSupply,
    numberClaimed,
    numberTotal,
    maxClaimable,
    isSoldOut,
    canClaim,
    isLoading,
    buttonLoading,
    buttonText,
  }
}
