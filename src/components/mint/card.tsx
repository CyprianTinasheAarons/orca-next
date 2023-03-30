import { Button } from '@ui/button'
import { Text } from '@ui/text'
import { StaticImageData } from 'next/image'

interface Props {
  nft: { name: string; avalable: boolean; image: StaticImageData }
}

export default function NftCard({ nft }: Props) {
  return (
    <div className="bg-dark rounded-xl ring-1 ring-white/10">
      <img src={nft.image.src} className="rounded-t-xl" alt="" />
      <div className="p-5 flex justify-between items-start">
        <div>
          <Text variant="title/bold" className="max-w-[150px] truncate">
            {nft.name}
          </Text>
          <Text variant="paragraph/normal">
            {nft.avalable === true ? 'Available' : 'Unavailable'}
          </Text>
        </div>

        <Button type="button" className="py-2 h-max">
          Burn
        </Button>
      </div>
    </div>
  )
}
