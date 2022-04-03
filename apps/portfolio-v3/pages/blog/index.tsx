import { getItemList, convertItemsToList } from '@lib/notion'
import Link from 'next/link'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import Container from '@layouts/__layout'
import { generateRSS } from 'scripts/generate-rss'

export const databaseId = process.env.BLOG_DATABASE_ID

export const getStaticProps = async () => {
  const response = await getItemList(databaseId)
  const { items } = convertItemsToList(response)

  await generateRSS()

  return {
    props: {
      posts: items
    },
    revalidate: 1
  }
}

const Blog = ({ posts }) => {
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
          {posts.map(post => {
            return (
              <div key={post.id}>
                <Link href={`/blog/${post.slug}`}>
                  <a className='post block rounded-2xl bg-white/5 p-6 no-underline hover:bg-white/[0.08]'>
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      objectFit='cover'
                      width={1200}
                      height={684}
                      placeholder='blur'
                      blurDataURL={post.thumbnail}
                      className='postImage rounded-md md:rounded-xl'
                    ></Image>
                    <h2>{post.title}</h2>
                    <p className='mb-3 -mt-2 text-tiny italic opacity-60'>
                      {post.date}
                    </p>
                    <p className='text-lg'>{post.summary}</p>
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
