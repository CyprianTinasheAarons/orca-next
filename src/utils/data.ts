import images from './images'

export const myNftDropContractAddress =
  '0x8458bF6dF499EBD50765582B7A2E3B295b877ccf'

export const isLive = true

export const nfts = [
  { name: 'Unordinal #1', avalable: true, image: images.home1 },
  { name: 'Unordinal #2', avalable: true, image: images.nft1 },
  { name: 'Unordinal #3', avalable: true, image: images.nft2 },
  { name: 'Unordinal #4', avalable: true, image: images.nft3 },
  { name: 'Unordinal #5', avalable: true, image: images.nft4 },
]

export const team = [
  {
    name: 'Dave',
    twitter: '@bitgallery1',
    href: 'https://twitter.com/bitgallery1',
    title: 'Founder / SC',
    image: images.dave,
  },
  {
    name: 'Cyprian',
    twitter: '@CyprianAarons',
    href: 'https://twitter.com/cyprianaarons',
    title: 'Founder / Back End',
    image: images.cyprian,
  },
  {
    name: 'Brent',
    twitter: '@ZembeBrent',
    href: 'https://twitter.com/ZembeBrent',
    title: 'Project Manager',
    image: images.brent,
  },
  {
    name: 'Truth',
    twitter: '@TNyamukuva',
    href: 'https://twitter.com/TNyamukuva',
    title: 'Senior Frontend / Web3.0',
    image: images.truth,
  },
  { name: 'Jim', title: 'Advisor', image: images.jim },
  { name: 'Phil', title: 'Advisor', image: images.phil },
]

export const mapItems = [
  {
    title: 'Launch the project on the Ethereum Blockchain',
    company_name: 'Starbucks',
    icon: images.character1.src,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Our first stop on the Tunnel Map',
      'launch the project on the Ethereum Blockchain',
    ],
  },
  {
    title:
      'Incentivize Inscription of your NFT as a Digital Artifact on Ordinals',
    icon: images.character1.src,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'We have created a system that rewards users who participate in this process.',
      'The more NFTs you inscribe (max 10), the greater their rewards will be.',
      'The sooner you inscribe the lower your hash will be and the greater your rewards will be throughout our subterranean eco-system.',
    ],
  },
  {
    title: 'Allow Community to assign their own traits during Inscription',
    company_name: 'Starbucks',
    icon: images.character1.src,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'We have created a collection with greater than 1200 attributes, visually impacting the "nature" of the character and reflecting the vast diversity of SubOrdinals.',
      'This gives collectors greater control over their Digital Artifact and foster a sense of ownership and community involvement.',
      'We will create a user-friendly interface for assigning traits and will also develop a system for tracking and verifying assigned traits directly on our website (subordinals.xyz).',
    ],
  },
  {
    title: 'Time to Gamify',
    icon: images.character1.src,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Think Dig Dug meets Zelda, a game based on the traits you assigned to your digital artifacts.',
      'Keep it fun, engaging, and rewarding players for using their Artifacts.',
      'The sooner users mint on Bitcoin, the greater power they will have in the game.',
      'We will also create a leaderboard to showcase the top players and incentivize competition.',
    ],
  },
]
