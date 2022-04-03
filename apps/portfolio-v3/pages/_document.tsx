import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='preload'
          href='/fonts/Inter.var.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='stylesheet'
          href='https://use.typekit.net/ohm3ssj.css'
        ></link>
      </Head>
      <body className='text-white-800 bg-white-50'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
