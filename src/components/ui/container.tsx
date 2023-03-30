import clsx from 'clsx'

export function Container({ className, ...props }: any) {
  return (
    <div
      className={clsx(
        'mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 max-w-[1536px]',
        className
      )}
      {...props}
    />
  )
}
