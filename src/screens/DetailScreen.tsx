import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useEffect, useMemo } from 'react'
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native'
import FastImage from 'react-native-fast-image'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/EvilIcons'

import ImageCarousel from '../components/ImageCarousel'
import { WikipediaWebView } from '../components/WikipediaWebview'
import { YouTubeVideo } from '../components/YoutubeVideo'
import { useRocket } from '../hooks/useRocket'
import { RootStackParamList } from '../navigation/navigation'
import { formatLaunchDate } from '../utils/formatLaunchDate'
import { formatLaunchFailures } from '../utils/formatLaunchFailures'
import { getAvailableImage } from '../utils/getAvailableImage'

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>
type DetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Detail'>

export const DetailScreen: React.FC = () => {
  const navigation = useNavigation<DetailScreenNavigationProp>()
  const route = useRoute<DetailScreenRouteProp>()
  const { launch } = route.params

  const { rocket, isLoading, isError, fetchRocket } = useRocket(launch.rocket)

  useEffect(() => {
    navigation.setOptions({
      title: launch.name,
    })
  }, [navigation, launch])

  const conditionalContainerStyle: ViewStyle = useMemo(
    () => ({
      backgroundColor: launch.upcoming
        ? 'rgba(0,0,0,0.3)'
        : launch.success
          ? 'rgba(38,194,129,0.4)'
          : 'rgba(255,0,0,0.4)',
    }),
    [launch],
  )

  return (
    <ScrollView
      contentContainerStyle={[styles.container, conditionalContainerStyle]}
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchRocket} />}
    >
      <Text style={styles.title}>{launch.name}</Text>
      {launch.success && <Text style={styles.subtitle}>Successful Launch</Text>}
      {!launch.success && <Text style={styles.subtitle}>Failed Launch</Text>}
      {launch.upcoming && <Text style={styles.subtitle}>Upcoming Launch</Text>}
      <YouTubeVideo videoId={launch.links.youtube_id ?? ''} />
      <Text style={styles.subtitle}>{`Date: ${formatLaunchDate(launch.date_utc)}`}</Text>
      {launch.details && <Text style={styles.subtitle}>{`Details: ${launch.details}`}</Text>}
      {!!launch.failures.length && (
        <Text style={styles.subtitle}>{`Failure Reasons: ${formatLaunchFailures(launch)}`}</Text>
      )}
      <WikipediaWebView wikipediaUrl={launch.links.wikipedia ?? ''} />
      <FastImage
        style={styles.image}
        source={getAvailableImage({ launch })}
        resizeMode={FastImage.resizeMode.contain}
      />
      {!!rocket && (
        <View style={styles.rocketContainer}>
          <Text style={styles.title}>Rocket: {rocket.name}</Text>
          <View style={styles.swipeIcon}>
            <Icon name="chevron-left" size={40} color="white" />
            <Icon name="pointer" size={40} color="white" />
            <Icon name="chevron-right" size={40} color="white" />
          </View>
          <View style={styles.swipeIcon}>
            <Icon name="chevron-left" size={40} color="white" />
            <ImageCarousel images={rocket.flickr_images} />
            <Icon name="chevron-right" size={40} color="white" />
          </View>
          <Text style={styles.subtitle}>{rocket.description}</Text>
          <Text style={styles.subtitle}>Height: {rocket.height.meters} meters</Text>
          <Text style={styles.subtitle}>Diameter: {rocket.diameter.meters} meters</Text>
          <Text style={styles.subtitle}>Weight: {rocket.mass.kg} kg</Text>
        </View>
      )}
      {isLoading && <ActivityIndicator size={'large'} />}
      {isError && <Text>Error fetching rocket. Please try to refresh</Text>}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 64,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    alignSelf: 'flex-start',
    color: 'white',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 8,
  },
  videoContainer: {
    width: '100%',
    marginTop: 16,
    aspectRatio: 16 / 9, // Aspect ratio of YouTube videos
  },
  video: {
    flex: 1,
    width: '100%',
  },
  image: {
    height: 300,
    width: 300,
    marginVertical: 8,
    alignSelf: 'center',
  },
  rocketContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 16,
  },
  swipeIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
