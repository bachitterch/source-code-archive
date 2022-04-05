import '../styles/globals.css'
import { seo } from '@data/seo'
import Script from 'next/script'
import { DefaultSeo } from 'next-seo'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        strategy='worker'
        src='https://www.googletagmanager.com/gtag/js?id=G-7WHCVMKCS8'
      />
      <Script
        src='https://analytics.bachitterch.com/umami.js'
        data-website-id='f02c92de-db59-42c6-8459-a1b6fdfe1c17'
        strategy='afterInteractive'
      />
      <script
        type='text/partytown'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7WHCVMKCS8', { 
                page_path: window.location.pathname,
            });
        `
        }}
      />
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
