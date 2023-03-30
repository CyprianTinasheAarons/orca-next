import { Container } from '@ui/container'
import { Text } from '@ui/text'
import { team } from '~/utils/data'
import images from '~/utils/images'
import Companies from './companies'
import MemberCard from './member-card'

export default function About() {
  return (
    <div className="py-10 xl:py-20 w-full">
      <Container>
        <div className="grid lg:grid-cols-2 gap-5 xl:gap-10">
          <img
            src={images.mainCharacter.src}
            className="w-[500px] animate-blob mx-auto lg:mx-0 order-last mt-10 lg:order-first lg:mt-0"
            alt=""
          />

          <div className="flex flex-col space-y-5">
            <Text
              variant="subHeading/bold"
              className="tracking-wide uppercase font-display"
            >
              About Us
            </Text>

            <Text
              variant="paragraph/normal"
              className="!text-white/70 leading-7 xl:text-justify"
            >
              {`A collection of 1,000 digital artifacts that are made up of hundreds of exciting visual traits 100% prompt designed by @bitgallery1 using Midjourney Ai text to image generator.  SubOrdinals include likenesses of humans, animals, robots, insects, androids, mixed limb creatures, 'Awesomely Abled' and an amalgamation of cross bred little entities that will make you fall in love with them from the moment you mint. The Subordinals collection also includes dozens of rare traits, costumes, and color combinations of the creator's palette that opens the collection to endless possibilities.  `}
            </Text>

            <Text
              variant="paragraph/normal"
              className="!text-white/70 leading-7 xl:text-justify"
            >
              {`The Subterranean Ordinals (SubOrdinals) have evolved beneath the surface of the earth for millions of years.  While the subverse expands, and our brand grows, collectors can expect exclusive access to the latest products, merchandise and events through ownership.`}
            </Text>

            <Text
              variant="paragraph/normal"
              className="!text-white/70 leading-7 xl:text-justify"
            >
              {`This drop is UNIQUE... mint your SubOrdinals (max 10) from our website in ETH and then jump down the magically rabbit hole into the subverse where we will walk you through inscripting your digital artifact on the Bitcoin Blockchain.  We heard you ETH NFT maxies - no it is not mandatory and no we will not burn your Subordinals - but we have BIG BIG carrots to entice you to join us on the BitCoin blockchain.`}
            </Text>

            <Text
              variant="paragraph/normal"
              className="!text-white/70 leading-7 xl:text-justify"
            >
              {`If you allow us to lead you through the inscription process - your inscription number will prove valuable in future subterranean activities.`}
            </Text>
          </div>
        </div>
      </Container>

      <div className="mt-10 xl:mt-20">
        <Container>
          <div className="flex flex-col space-y-5 xl:space-y-10">
            <div>
              <Text
                variant="subHeading/bold"
                className="tracking-wide uppercase font-display !m-0 !leading-none"
              >
                Created by
              </Text>

              <Text
                variant="paragraph/normal"
                className="!text-white/70 leading-7 max-w-2xl mt-2.5"
              >
                Two companies working closely together supporting creators,
                artists and NFT enthusiasts for the last 2 years (yes it does
                feel like 2 decades)...
              </Text>
            </div>

            <Companies />

            <div className="pt-10 xl:pt-20">
              <Text
                variant="subHeading/bold"
                className="tracking-wide uppercase font-display !leading-none mb-5 xl:mb-10"
              >
                Meet the team
              </Text>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 xl:gap-10">
                {team.map((member, index) => (
                  <MemberCard key={index} {...member} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
