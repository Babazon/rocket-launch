import { assets } from '../src/assets/assets';
import { Launch } from '../src/services/types';
import { getAvailableImage } from '../src/utils/getAvailableImage';
const sampleLaunch: Partial<Launch> = {
  links: {
    patch: { small: 'patch-small-uri', large: '' },
    reddit: { media: 'reddit-media-uri', campaign: '', launch: '', recovery: '' },
    flickr: { small: ['flickr-small-uri-1', 'flickr-small-uri-2'], original: [] },
    presskit: '', webcast: '', youtube_id: '', article: '', wikipedia: ''
  },
};

describe('getAvailableImage', () => {
  it('returns patch small image when available', () => {
    const result = getAvailableImage({ launch: sampleLaunch, thumbnail: false });
    expect(result).toEqual({ uri: 'patch-small-uri' });
  });

  it('returns reddit media image when patch small is not available', () => {
    const launchWithoutPatchSmall: Partial<Launch> = {
      ...sampleLaunch, links: { ...sampleLaunch.links, flickr: { small: ['flickr-media-uri'], original: [] }, presskit: '', webcast: '', youtube_id: '', article: '', wikipedia: '', patch: { small: 'reddit-media-uri', large: '' }, reddit: { media: '', campaign: '', launch: '', recovery: '' } }
    };
    const result = getAvailableImage({ launch: launchWithoutPatchSmall, thumbnail: true });
    expect(result).toEqual({ uri: 'reddit-media-uri' });
  });


  it('returns placeholderSmall when no image is available and thumbnail is true', () => {
    const launchWithoutAnyImages: Partial<Launch> = { links: { presskit: '', webcast: '', youtube_id: '', article: '', wikipedia: '', patch: { small: '', large: '' }, reddit: { media: '', campaign: '', launch: '', recovery: '' }, flickr: { small: [], original: [] } } };
    const result = getAvailableImage({ launch: launchWithoutAnyImages, thumbnail: true });
    expect(result).toEqual(assets.placeholderSmall);
  });

  it('returns placeholderLarge when no image is available and thumbnail is false', () => {
    const launchWithoutAnyImages: Partial<Launch> = { links: { presskit: '', webcast: '', youtube_id: '', article: '', wikipedia: '', patch: { small: '', large: '' }, reddit: { media: '', campaign: '', launch: '', recovery: '' }, flickr: { small: [], original: [] } } };
    const result = getAvailableImage({ launch: launchWithoutAnyImages, thumbnail: false });
    expect(result).toEqual(assets.placeholderSmall);
  });
});