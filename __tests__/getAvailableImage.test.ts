import { assets } from '../src/assets/assets'
import { Launch } from '../src/services/types'
import { getAvailableImage } from '../src/utils/getAvailableImage'

const mockLaunch: Partial<Launch> = {
  links: {
    patch: {
      small: 'patch_small_url',
      large: '',
    },
    reddit: {
      media: 'reddit_media_url',
      campaign: '',
      launch: '',
      recovery: '',
    },
    flickr: {
      small: ['flickr_small_url'],
      original: [''],
    },
    presskit: '1',
    webcast: '',
    youtube_id: '',
    article: '',
    wikipedia: '',
  },
}

describe('getAvailableImage', () => {
  it('returns patch small image', () => {
    // @ts-ignore
    const result = getAvailableImage({ launch: mockLaunch, thumbnail: true })
    expect(result).toEqual({ uri: 'patch_small_url' })
  })

  it('returns reddit media image', () => {
    // @ts-ignore
    const result = getAvailableImage({ launch: mockLaunch, thumbnail: true })
    expect(result).toEqual({ uri: 'reddit_media_url' })
  })

  it('returns flickr small image', () => {
    // @ts-ignore
    const result = getAvailableImage({ launch: mockLaunch, thumbnail: true })
    expect(result).toEqual({ uri: 'flickr_small_url' })
  })

  it('returns placeholder for empty links', () => {
    // @ts-ignore
    const emptyLinks: Launch = { links: {} }
    const result = getAvailableImage({ launch: emptyLinks, thumbnail: true })
    expect(result).toEqual(assets.placeholderSmall)
  })

  it('returns placeholder for empty uri', () => {
    // @ts-ignore
    const emptyUri: Launch = {
      links: { patch: { small: null }, reddit: { media: null }, flickr: { small: [] } },
    }
    const result = getAvailableImage({ launch: emptyUri, thumbnail: true })
    expect(result).toEqual(assets.placeholderSmall)
  })
})
