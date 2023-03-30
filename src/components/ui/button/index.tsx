import { VariantProps, cva } from 'class-variance-authority'
import { ComponentPropsWithoutRef, ReactNode } from 'react'

const buttonStyles = cva(
  'flex items-center justify-center px-6 py-3 rounded-lg font-bold focus:outline-none focus:ring-2 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none hover:!bg-opacity-80 hover:scale-105 transition transform duration-300',
  {
    variants: {
      intent: {
        primary: 'bg-primary text-white focus:ring-primary/50',
        secondary: 'bg-secondary text-darkest focus:ring-secondary/50',
        danger: 'bg-danger text-white focus:ring-danger/50',
        monochrome:
          'bg-darkest dark:bg-white text-white dark:text-darkest focus:ring-darkest/50 dark:focus:ring-white/50',
      },
      outline: {
        true: '!bg-transparent border-2',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      intent: 'monochrome',
    },
    compoundVariants: [
      {
        intent: 'primary',
        outline: true,
        class:
          'border-primary !text-primary hover:!bg-primary hover:!text-white',
      },
      {
        intent: 'danger',
        outline: true,
        class: 'border-danger !text-danger hover:!bg-danger hover:!text-white',
      },
      {
        intent: 'secondary',
        outline: true,
        class:
          'border-secondary !text-secondary hover:!bg-secondary hover:!text-darkest',
      },
      {
        intent: 'monochrome',
        outline: true,
        class:
          'border-darkest dark:border-white !text-darkest dark:!text-white hover:!bg-darkest dark:hover:!bg-white hover:!text-white dark:hover:!text-darkest',
      },
    ],
  }
)

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  className?: string
  children: ReactNode
  type: 'button' | 'submit' | 'reset'
}

type Props = VariantProps<typeof buttonStyles> & ButtonProps

export function Button({
  intent,
  fullWidth,
  className,
  children,
  type,
  outline,
  ...props
}: Props) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={'button button-primary'}
      {...props}
    >
      {children}
    </button>
  )
}
