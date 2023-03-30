import { Container } from '@ui/container'
import { Text } from '@ui/text'
import images from '~/utils/images'
import Map from './map'

export default function TunnelMap() {
  return (
    <div className="w-full py-10 overflow-x-hidden xl:py-20">
      <Container>
        <div>
          <Map />
        </div>

        <div className="mt-10 xl:mt-20">
          <Text
            variant="subHeading/bold"
            className="tracking-wide uppercase font-display !leading-none mb-5 xl:mb-10"
          >
            Infographic
          </Text>

          <div className="relative object-contain w-full">
            <img src={images.tunnelMap.src} className="rounded-xl" alt="" />
          </div>
        </div>
      </Container>
    </div>
  )
}
