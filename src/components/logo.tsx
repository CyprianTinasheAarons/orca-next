import clsx from 'clsx'
import Link from 'next/link'
import images from '~/utils/images'

export default function Logo({ classes }: { classes?: string }) {
  return (
    <Link
      href="/"
      className="flex items-center space-x-3"
      aria-label="Home page"
    >
      <img
        src={images.logo.src}
        className={clsx('h-10 xl:h-14', classes && classes)}
        alt=""
      />
    </Link>
  )
}
