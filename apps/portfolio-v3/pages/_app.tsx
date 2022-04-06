import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import Script from 'next/script'
import { seo } from '@data/seo'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script
        src='https://analytics.bachitterch.com/umami.js'
        data-website-id='f02c92de-db59-42c6-8459-a1b6fdfe1c17'
        strategy='lazyOnload'
      />
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
