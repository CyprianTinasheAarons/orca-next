import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

export function BlurImage({
  image,
  classes,
  ratio,
}: {
  image: any
  classes?: string
  ratio?: string
}) {
  const [isLoading, setLoading] = useState(true)

  return (
    <div className="group">
      <div
        className={clsx(
          'w-full overflow-hidden bg-[#160a0e]',
          classes && classes,
          ratio || 'aspect-h-1 aspect-w-1'
        )}
      >
        <Image
          alt=""
          src={image}
          layout="fill"
          objectFit="cover"
          className={clsx(
            'duration-700 ease-in-out group-hover:scale-110',
            isLoading ? 'scale-110 blur-2xl' : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </div>
  )
}
