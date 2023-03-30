import { Button } from '@ui/button'
import { Text } from '@ui/text'
import { nfts } from '~/utils/data'
import NftCard from './card'

export default function MintComponent() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-5 lg:gap-10 py-10">
        <div className="flex flex-col space-y-5 xl:space-y-10">
          <div className="flex flex-col space-y-3">
            <Text variant="title/bold" className="capitalize">
              Total unordinals burnt
            </Text>
            <Text variant="heading/bold">201/1000</Text>
          </div>

          <div className="flex flex-col space-y-3">
            <div className="flex justify-between space-x-5 py-3 border-y border-white/10">
              <Text variant="title/bold" className="capitalize">
                Tokens burnt:
              </Text>

              <Text variant="title/bold" className="capitalize">
                3
              </Text>
            </div>

            <div className="flex justify-between space-x-5 pb-3 border-b border-white/10">
              <Text variant="title/bold" className="capitalize">
                Available to burn:
              </Text>

              <Text variant="title/bold" className="capitalize">
                7
              </Text>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 lg:gap-10">
            <Button fullWidth type="button">
              Burn All
            </Button>
            <Button fullWidth type="button">
              Burn Selected
            </Button>
          </div>
        </div>

        <div className="bg-dark rounded-xl p-5 2xl:p-10 ring-1 ring-white/10">
          <Text variant="title/bold" className="capitalize">
            BTC Receiver Addresses
          </Text>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10 pb-5">
        {nfts?.map((nft, index) => {
          return <NftCard nft={nft} key={index} />
        })}
      </div>
    </>
  )
}
