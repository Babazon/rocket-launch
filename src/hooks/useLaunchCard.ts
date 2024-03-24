import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from 'navigation/navigation'
import { useCallback, useMemo } from 'react'
import { ViewStyle } from 'react-native'

import { Launch } from '../services/types'
import { formatLaunchFailures } from '../utils/formatLaunchFailures'

export const useLaunchCard = (launch: Launch) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const handleClickLaunch = useCallback(() => {
    navigation.navigate('Detail', { launch })
  }, [launch, navigation])

  const isUpcomingLaunch = useMemo(() => launch.upcoming, [launch])

  const conditionalCardStyle: ViewStyle = useMemo(
    () => ({
      backgroundColor: isUpcomingLaunch
        ? 'rgba(0,0,0,0.3)'
        : launch.success
          ? 'rgba(38,194,129,0.4)'
          : 'rgba(255,0,0,0.4)',
    }),
    [launch, isUpcomingLaunch],
  )

  const launchFailures = useMemo(() => formatLaunchFailures(launch), [launch])

  return {
    handleClickLaunch,
    conditionalCardStyle,
    launchFailures,
  }
}
