import type { NextApiRequest, NextApiResponse } from 'next'
import { getNowPlaying } from '@lib/spotify'

const nowPlaying = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await getNowPlaying()
  if (response.status === 204 || response.status > 400) {
    res.status(200).json({
      isPlaying: false
    })
  }

  const song = await response.json()

  if (song.item === null) {
    res.status(200).json({
      isPlaying: false
    })
  }

  // const songData = {
  //   isPlaying: song.is_playing,
  //   item: song.item.name,
  //   artist: song.item.artists.map(artist => artist.name).join(', '),
  //   album: song.item.album.name,
  //   albumArt: song.item.album.images[0].url,
  //   songUrl: song.item.external_urls.spotify
  // }

  const isPlaying = song.is_playing
  const title = song.item.name
  const artist = song.item.artists.map(artist => artist.name).join(', ')
  const album = song.item.album.name
  const albumArt = song.item.album.images[0].url
  const songUrl = song.item.external_urls.spotify

  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=')

  return res.status(200).json({
    isPlaying,
    title,
    artist,
    album,
    albumArt,
    songUrl
  })
}

export default nowPlaying
