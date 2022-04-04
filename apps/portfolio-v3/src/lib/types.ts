export type NowPlayingSong = {
  isPlaying: boolean
  title: string
  artist: string
  album: string
  albumArt: string
  songUrl: string
}

export type OpenWeatherData = {
  city: string
  temp: number
  min: number
  max: number
  weather: string
  description: string
}
