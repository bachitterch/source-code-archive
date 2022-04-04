import authorimage from 'public/images/author.png'
import NowPlaying from '@components/NowPlaying'
import Layout from '@layouts/__layout'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  getItemList,
  convertItemsToList,
  convertProjectsToList
} from '@lib/notion'
import WeatherWidget from '@components/WeatherWidget'
import Subscribe from '@components/Subscribe'

const projectsDbId = process.env.PROJECTS_DATABASE_ID
const databaseId = process.env.BLOG_DATABASE_ID

export const getStaticProps: GetStaticProps = async () => {
  const projects = async () => {
    const response = await getItemList(projectsDbId)
    const { items } = convertProjectsToList(response)

    return items
  }

  const posts = async () => {
    const response = await getItemList(databaseId)
    const { items } = convertItemsToList(response)

    const featuredPosts = items.filter(item => item.featured === true)

    return featuredPosts
  }

  return {
    props: {
      projects: await projects(),
      posts: await posts()
    },
    revalidate: 600
  }
}

const Home = ({ projects, posts }) => {
  return (
    <>
      <Layout>
        <div className='grid space-y-6'>
          <div className='authorData'>
            <Image
              src={authorimage}
              alt='Photo of Bachitter'
              width={86}
              height={86}
              className='authorImage'
            ></Image>
            <div className='authorInfo'>
              <h1 className='mb-6'>
                Welcome, <br /> I&#39;m Bachitter Chahal
              </h1>
              <p className='mb-6'>
                I&#39;m a self-taught developer specializing in front-end
                development, originally from Punjab, currently living in
                Vancouver, BC. I spend my spare time watching NetFlix or Twitch
                streams. You can check the{' '}
                <Link href='/now'>
                  <a>now</a>
                </Link>{' '}
                page to know what I&#39;m currently doing.
              </p>
              <div className='authorSocials flex gap-4 flex-wrap'>
                <a target='blank' href='https://twitter.com/bachitterch'>
                  Twitter
                </a>
                <a target='blank' href='https://github.com/bachitterch'>
                  Github
                </a>
                <a target='blank' href='https://linkedin.com/in/bachitterch'>
                  LinkedIn
                </a>
                <a target='blank' href='https://polywork.com/bachitterch'>
                  Polywork
                </a>
              </div>
            </div>
          </div>
          <div className='projects'>
            <h2 className='mb-6 mt-2'>Projects</h2>
            <div className='space-y-6'>
              {(!projects.length && (
                <p className='text-center text-white-600 text-base'>
                  No Projects Found!
                </p>
              )) ||
                projects.map(project => {
                  return (
                    <div key={project.id} className='project'>
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        layout='raw'
                        width={1200}
                        height={684}
                        placeholder='blur'
                        blurDataURL={project.thumbnail}
                        className='projectImage rounded-md md:rounded-xl object-cover object-top'
                      ></Image>
                      <h3 className='mb-2 mt-4'>{project.title}</h3>
                      <p className='mb-4 text-base'>{project.summary}</p>

                      <div className='project-links flex gap-4'>
                        <a
                          target='blank'
                          rel='noopener noreferrer'
                          href={project.link}
                        >
                          Visit Website
                        </a>
                        <a
                          target='blank'
                          rel='noopener noreferrer'
                          href={project.github}
                        >
                          View Code
                        </a>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
          <div className='articles'>
            <h2 className='mb-6 mt-2'>Posts</h2>
            <div className='space-y-6'>
              {(!posts.length && (
                <p className='text-center text-white-600 text-base'>
                  No Article Found!
                </p>
              )) ||
                posts.map(post => {
                  return (
                    <div key={post.id}>
                      <Link href={`/blog/${post.slug}`}>
                        <a className='block'>
                          <Image
                            src={post.thumbnail}
                            alt={post.title}
                            layout='raw'
                            width={1200}
                            height={684}
                            placeholder='blur'
                            blurDataURL={post.thumbnail}
                            className='projectImage rounded-md md:rounded-xl object-cover object-top'
                          ></Image>
                          <h3 className='mb-2 mt-4 text-white-800'>
                            {post.title}
                          </h3>
                          <p className='text-base'>{post.summary}</p>
                        </a>
                      </Link>
                    </div>
                  )
                })}
            </div>
          </div>
          <div className='widgets space-y-6'>
            <div className='grid grid-flow-row sm:grid-cols-2  mt-2 gap-6'>
              <NowPlaying />
              <WeatherWidget />
            </div>
            <Subscribe />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
