import Script from 'next/script'

const Analytics = () => {
  return (
    <>
      <Script
        src='https://analytics.bachitterch.com/umami.js'
        data-website-id='f02c92de-db59-42c6-8459-a1b6fdfe1c17'
        strategy='lazyOnload'
      />
    </>
  )
}
export default Analytics
