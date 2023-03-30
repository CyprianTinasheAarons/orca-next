import { Text } from '@ui/text'
import images from '~/utils/images'

export default function Companies() {
  return (
    <div className="flex flex-col space-y-5 xl:space-y-10">
      <div className="grid md:grid-cols-2 gap-5 xl:gap-10">
        <div className="flex flex-col space-y-5 xl:space-y-10">
          <a
            href="https://dretech.io"
            target="_blank"
            className="bg-white/10 rounded-xl p-10 flex justify-center items-center group"
            rel="noreferrer"
          >
            <img
              src={images.dreLogo.src}
              className="h-20 object-contain group-hover:scale-110 transition traansform duration-500"
              alt=""
            />
          </a>

          <div>
            <Text variant="subHeading2/bold" className="tracking-wide mb-2.5">
              DRE Inc.
            </Text>

            <Text
              variant="paragraph/normal"
              className="!text-white/70 leading-7 xl:text-justify"
            >
              DRE Inc., based in Baltimore, MD USA, is best known for its
              advanced AI/ML and deep learning algorithms used go build radars
              for search and rescue operations throughout the world. In 2021,
              DRE opened a crypto division to assist projects by developing and
              deploying smart contracts primarily on the Ethereum blockchain but
              has since grown to include most L1 and L2 platforms. At{' '}
              <a
                className="text-secondary"
                href="https://dretech.io"
                target="_blank"
                rel="noreferrer"
              >
                Dretech.io
              </a>{' '}
              we help projects EVOLVE by offering dynamic NFT construction,
              layer and trait randomization, generative art production,
              metaverse construction, digital art consultation, dynamic
              layering, mobile and web3 gaming development, 3D | mocap
              animation, pfp collection building, prompt engineering support,
              Ai/ML and deep learning data set building services and artificial
              intelligence world building.
            </Text>
          </div>
        </div>

        <div className="flex flex-col space-y-5 xl:space-y-10">
          <a
            rel="noreferrer"
            href="https://www.topiax.xyz/"
            target="_blank"
            className="bg-white/10 rounded-xl p-10 flex justify-center items-center group"
          >
            <img
              src={images.topiaxLogo.src}
              className="h-20 object-contain group-hover:scale-110 transition traansform duration-500"
              alt=""
            />
          </a>

          <div>
            <Text variant="subHeading2/bold" className="tracking-wide mb-2.5">
              Topiax Inc.
            </Text>

            <Text
              variant="paragraph/normal"
              className="!text-white/70 leading-7 xl:text-justify"
            >
              {`Topiax is a global software development agency that specializes in
              designing, building, and transforming ideas into cutting-edge
              digital technology products. The company's core focus is on web3.0
              technologies, including decentralized applications, decentralized
              storage, smart contracts, and blockchain-based solutions for
              businesses, individuals, and non-profit organizations.
              Additionally, Topiax provides web2.0 technology services such as
              mobile and web app development and website design. The company
              also offers smart contract auditing and web3.0 technology advisory
              and training services. Topiax aims to help its clients leverage
              the benefits of web3.0 technologies to improve their business
              processes, increase revenue and profits, and ultimately grow their
              businesses. The company values professionalism, innovation, high
              quality, customer-centricity, inclusivity, and adherence to the
              ESG framework. Topiax is registered as a private limited company
              in multiple jurisdictions and seeks to become a leading software
              development agency in its operating markets.`}
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}
