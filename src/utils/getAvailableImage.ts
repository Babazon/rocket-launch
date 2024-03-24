import { ImageRequireSource } from 'react-native'
import { Source } from 'react-native-fast-image'

import { assets } from '../assets/assets'
import { Launch } from '../services/types'

export const getAvailableImage = ({
  launch,
  thumbnail,
}: {
  launch: Launch
  thumbnail?: boolean
}): Source | ImageRequireSource => {
  const uri = launch.links.patch.small ?? launch.links.reddit.media ?? launch.links.flickr.small[0]
  if (!uri) {
    return thumbnail ? assets.placeholderSmall : assets.placeholderLarge
  }
  return { uri }
}
