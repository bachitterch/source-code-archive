import '../styles/globals.css'
import { seo } from '@data/seo'
import Script from 'next/script'
import { DefaultSeo } from 'next-seo'

const MyApp = ({ Component, pageProps }) => {
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
