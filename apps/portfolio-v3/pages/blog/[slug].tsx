import { getItemList, getItem, getBlocks } from '@lib/notion'
import { renderBlocks } from '@lib/renderBlocks'
import { Fragment } from 'react'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Container from '@layouts/__layout'

export const databaseId = process.env.BLOG_DATABASE_ID

export const getStaticPaths = async () => {
  let paths = []
  const posts: any = await getItemList(databaseId)

  posts.forEach(post => {
    if (
      post.object === 'page' &&
      post.properties.status.select.name === 'published'
    ) {
      paths.push({
        params: {
          slug: post.properties.slug.rich_text[0].plain_text
        }
      })
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const data: any = await getItemList(databaseId)

  const post: any = await getItem(data, slug)

  let content = []

  const Matter = {
    Title: post.properties.name.title[0].plain_text,
    Summary: post.properties.summary.rich_text[0].plain_text,
    Author: post.properties.author.people[0].name,
    Slug: post.properties.slug.rich_text[0].plain_text,
    Thumbnail:
      post.properties?.thumbnail?.files[0]?.file?.url ||
      post.properties.thumbnail?.files[0]?.external?.url,
    Date: new Date(post.properties.published.date.start).toLocaleString(
      'en-US',
      {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      }
    )
  }

  let blocks: any = await getBlocks(post.id)

  content = [...blocks]

  while (blocks.has_more) {
    blocks = await getBlocks({
      block_id: post.id,
      start_cursor: blocks.next_cursor
    })

    content = [...content, ...blocks]
  }

  return {
    props: {
      content,
      frontMatter: Matter
    },
    revalidate: 10
  }
}

const Post = ({ content, frontMatter }) => {
  return (
    <>
      <NextSeo
        title={`${frontMatter.Title} - Bachitter Chahal`}
        description={`${frontMatter.Summary}`}
        canonical={`https://bachitter.dev/${frontMatter.Slug}`}
      />
      <Container>
        <div>
          <Image
            src={frontMatter.Thumbnail}
            objectFit='cover'
            width={1200}
            height={684}
            placeholder='blur'
            blurDataURL={frontMatter.Thumbnail}
            alt={'article cover'}
          ></Image>
          <h1 className='mb-2'>{frontMatter.Title}</h1>
          <div className='mb-10 flex space-x-2'>
            <a
              href='https://twitter.com/bachitterch'
              className='flex items-center space-x-2'
            >
              <p>{frontMatter.Author}</p>
            </a>{' '}
            <span>|</span>
            <span>{frontMatter.Date}</span>
          </div>

          <div className=' space-y-5'>
            {content.map(block => (
              <Fragment key={block.id}>{renderBlocks(block)}</Fragment>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Post
