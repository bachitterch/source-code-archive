import '../styles/globals.css'
import { seo } from '@data/seo'
import { DefaultSeo } from 'next-seo'
import Script from 'next/script'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Script
        strategy='worker'
        src='https://www.googletagmanager.com/gtag/js?id=G-7WHCVMKCS8'
      />
      <Script id='google-analytics' type='text/partytown'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
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
