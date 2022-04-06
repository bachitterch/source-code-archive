import Script from 'next/script'

type AnalyticsProps = {
  websiteId: string
}

const Analytics = ({ websiteId }: AnalyticsProps) => {
  return (
    <>
      <Script
        src='https://analytics.bachitterch.com/umami.js'
        data-website-id={websiteId}
        strategy='lazyOnload'
      />
    </>
  )
}
export default Analytics
