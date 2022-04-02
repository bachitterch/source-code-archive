import '../styles/globals.css'
import { seo } from '@data/seo'
import { DefaultSeo } from 'next-seo'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...seo} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp