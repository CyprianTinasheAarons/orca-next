import { VariantProps, cva } from 'class-variance-authority'
import { ReactNode } from 'react'

const textStyles = cva([], {
  variants: {
    size: {
      regular: 'text-sm text-zinc-800 dark:text-zinc-100',
      paragraph: 'text-base text-zinc-600 dark:text-zinc-400',
      title: 'tracking-tight text-zinc-800 dark:text-zinc-100 text-xl',
      subHeading:
        'text-2xl tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl',
      subHeading2:
        'text-xl tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl',
      heading:
        'text-4xl tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl 2xl:text-6xl',
    },
    weight: {
      light: 'font-light',
      normal: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
})

type TextStylesProps = VariantProps<typeof textStyles> & { className?: string }

export interface TextProps extends Omit<TextStylesProps, 'size' | 'weight'> {
  variant: `${NonNullable<TextStylesProps['size']>}/${NonNullable<
    TextStylesProps['weight']
  >}`
  children: ReactNode
}

export function Text({ variant, children, className, ...props }: TextProps) {
  const [size, weight] = variant.split('/') as [
    TextStylesProps['size'],
    TextStylesProps['weight']
  ]

  return (
    <div className={textStyles({ size, weight, className, ...props })}>
      {children}
    </div>
  )
}
