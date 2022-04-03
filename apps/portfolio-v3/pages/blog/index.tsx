import { getItemList } from '@lib/notion'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Container from '@layouts/__layout'

export const databaseId = process.env.BLOG_DATABASE_ID

export const getStaticProps = async () => {
  const response = await getItemList(databaseId)

  return {
    props: {
      posts: response
    },
    revalidate: 1
  }
}

const Blog = ({ posts }) => {
  const filteredPosts = posts.filter(post => {
    return post.properties.status.select.name === 'published'
  })
  return (
    <>
      <NextSeo
        title={`Blog - Bachitter Chahal`}
        canonical={`https://bachitter.dev/blog`}
      />
      <Container>
        <h1>Blog</h1>
        <p className='mb-10 text-tiny opacity-60 md:text-base'>
          Here I share my knowledge about development, CSS, Javascript and
          experience in my life.
        </p>
        <div className='post_list space-y-5'>
          {filteredPosts.map(post => {
            const postTitle = post.properties.name.title[0].plain_text
            const postSummary = post.properties.summary.rich_text[0].plain_text
            const postDate = new Date(
              post.properties.published.date.start
            ).toLocaleString('en-US', {
              month: 'short',
              day: '2-digit',
              year: 'numeric'
            })
            const postSlug = post.properties.slug.rich_text[0].plain_text
            return (
              <div key={post.id}>
                <Link href={`/blog/${postSlug}`}>
                  <a className='post block rounded-2xl bg-white/5 p-6 no-underline hover:bg-white/[0.08]'>
                    <h2>{postTitle}</h2>
                    <p className='mb-3 -mt-2 text-tiny italic opacity-60'>
                      {postDate}
                    </p>
                    <p className='text-lg'>{postSummary}</p>
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      </Container>
    </>
  )
}

export default Blog
