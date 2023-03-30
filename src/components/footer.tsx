import { Container } from '@ui/container'
import HL from '@ui/hl'

export function Footer() {
  return (
    <footer>
      <Container>
        <HL />
        <div className="py-5">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-xs leading-5 text-zinc-500 dark:text-white">
              &copy; DRE Inc. & Topiax Inc. All rights reserved
            </p>
            <p className="text-xs leading-5 uppercase text-zinc-500 dark:text-white font-display">
              Orca
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
