import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { appName } from '~/utils/app-data'
import '../styles/globals.css'

export const activeChainId = ChainId.Mainnet

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChainId}
      authConfig={{
        authUrl: '/api/thirdweb-auth',
        domain: 'example.org',
      }}
    >
      <ThemeProvider attribute="class" defaultTheme="dark">
        <DefaultSeo
          defaultTitle={`${appName} | Welcome to ORCA United Society`}
          titleTemplate={`%s | ${appName}`}
          description={`${appName} | Welcome to ORCA United Society`}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
