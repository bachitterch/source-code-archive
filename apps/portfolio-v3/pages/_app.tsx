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
      <Script type='text/partytown' id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-7WHCVMKCS8');
        `}
      </Script>
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
