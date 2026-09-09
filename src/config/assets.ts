export const ASSETS = {
  logo: '/logo/gerahtai-logo.png',
  platformUrl: 'https://gerahtai-frontend.onrender.com/',

  /**
   * Unlisted YouTube pitch video.
   * Paste your video ID (the part after v=) or full URL.
   * Env override: VITE_YOUTUBE_VIDEO_ID=xxxxxxxxxxx
   */
  youtubeVideoId:
    (import.meta as any).env?.VITE_YOUTUBE_VIDEO_ID
    || 'g2I5kE0PS3I',

  youtubeWatchUrl:
    (import.meta as any).env?.VITE_YOUTUBE_WATCH_URL
    || 'https://youtu.be/g2I5kE0PS3I',

  /** Dedicated share page for the competition board */
  videoPage: '/watch.html',
  pdf: '/downloads/gerahtai-eaii-pitch-deck.pdf',
  images: {
    hero: '/images/hero.jpg',
    biochar: '/images/biochar.jpg',
    field: '/images/getin.jpg',
    soil: '/images/soil-field.jpg',
  },
} as const

export function resolveYoutubeId(): string {
  const fromEnvUrl = (import.meta as any).env?.VITE_YOUTUBE_WATCH_URL as string | undefined
  const raw = fromEnvUrl || ASSETS.youtubeWatchUrl || ASSETS.youtubeVideoId
  if (!raw || raw.startsWith('REPLACE_WITH_')) return ''
  const match = raw.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|v=)([A-Za-z0-9_-]{6,})/,
  )
  if (match?.[1]) return match[1]
  if (/^[A-Za-z0-9_-]{6,}$/.test(raw.trim())) return raw.trim()
  return ''
}

export function youtubeEmbedUrl(id: string): string {
  return `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`
}

export function youtubeWatchPageUrl(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`
}

export function hasYoutubePitch(): boolean {
  return Boolean(resolveYoutubeId())
}
