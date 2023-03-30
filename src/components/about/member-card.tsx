import { BlurImage } from '@ui/blur-image'
import { Text } from '@ui/text'
import { StaticImageData } from 'next/image'
import images from '~/utils/images'

interface Member {
  name: string
  twitter?: string
  href?: string
  title: string
  image: StaticImageData
}
export default function MemberCard({
  name,
  title,
  image,
  href,
  twitter,
}: Member) {
  return (
    <div>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer">
          <BlurImage image={image.src} classes="rounded-xl" />
        </a>
      ) : (
        <BlurImage image={image.src} classes="rounded-xl" />
      )}

      <div className="pt-5">
        <Text variant="subHeading2/bold" className="tracking-wide text-center">
          {name}
        </Text>
        <Text
          variant="title/normal"
          className="mt-2.5 !text-white/70 text-center"
        >
          {title}
        </Text>

        {href && (
          <a href={href} target="_blank" rel="noreferrer">
            <Text
              variant="paragraph/normal"
              className="mt-2.5 !text-white/70 text-center flex items-center justify-center space-x-2.5"
            >
              <img src={images.twitter.src} className="h-6" alt="" />
              <span> {twitter}</span>
            </Text>
          </a>
        )}
      </div>
    </div>
  )
}
