import { Button } from '@ui/button'
import { Text } from '@ui/text'
import Link from 'next/link'

export default function Mint() {
  return (
    <div className="grid lg:grid-cols-2 gap-5 lg:gap-10 py-10">
      <div className="flex flex-col space-y-5 xl:space-y-10">
        <div className="flex flex-col space-y-3">
          <Text variant="title/bold" className="capitalize">
            Total unordinals burnt
          </Text>
          <Text variant="heading/bold">1000/1000</Text>
        </div>

        <div className="flex flex-col space-y-3">
          <div className="flex justify-between space-x-5 py-3 border-y border-white/10">
            <Text variant="title/bold" className="capitalize">
              Total burnt:
            </Text>

            <Text variant="title/bold" className="capitalize">
              0
            </Text>
          </div>

          <div className="flex justify-between space-x-5 pb-3 border-b border-white/10">
            <Text variant="title/bold" className="capitalize">
              Available to burn:
            </Text>

            <Text variant="title/bold" className="capitalize">
              No more tokens to burn.
            </Text>
          </div>
        </div>

        <Link href="/mint">
          <Button fullWidth type="button">
            Approve
          </Button>
        </Link>
      </div>

      <div className="bg-dark rounded-xl p-5 2xl:p-10 ring-1 ring-white/10">
        <Text variant="title/bold" className="capitalize">
          BTC Receiver Addresses
        </Text>
      </div>
    </div>
  )
}
