import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { seo } from '@data/seo'
import '../styles/globals.css'
import Analytics from '@lib/analytics'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Analytics websiteId='f02c92de-db59-42c6-8459-a1b6fdfe1c17' />
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
