import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { seo } from '@data/seo'
import '../styles/globals.css'
import Analytics from '@lib/analytics'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Analytics />
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
