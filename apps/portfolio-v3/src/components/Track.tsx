import { Song } from '@lib/types'
import Image from 'next/image'

const Track = (track: Song) => {
  return (
    <div className='flex flex-row items-start border-b border-white-200 mt-6'>
      <p className='text-sm font-semibold text-white-600 -mt-[3px]'>
        {track.ranking}
      </p>
      <div className='pl-3 flex'>
        <div>
          <Image
            src={track?.albumArt}
            width={50}
            height={50}
            className='rounded-md'
            alt='NowPlaying Cove Image'
          ></Image>
        </div>
        <div className='flex flex-col pl-3'>
          <a
            href={track?.songUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='font-medium text-white-800 w-60 sm:w-96 md:w-full'
          >
            {track?.title}
          </a>
          <p className='text-white-600 mb-4 w-60 sm:w-96 md:w-full'>
            {track?.artist}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Track
