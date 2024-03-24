import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/navigation';
import { useCallback, useMemo } from 'react';
import { ViewStyle } from 'react-native';

import { Launch } from '../services/types';
import { formatLaunchFailures } from '../utils/formatLaunchFailures';
import { theme } from '../constants';

export const useLaunchCard = (launch: Launch) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleClickLaunch = useCallback(() => {
    navigation.navigate('Detail', { launch });
  }, [launch, navigation]);

  const isUpcomingLaunch = useMemo(() => launch.upcoming, [launch]);

  const conditionalCardStyle: ViewStyle = useMemo(
    () => ({
      backgroundColor: isUpcomingLaunch
        ? theme.colors.upcoming
        : launch.success
          ? theme.colors.success
          : theme.colors.failure,
    }),
    [launch, isUpcomingLaunch],
  );

  const launchFailures = useMemo(() => formatLaunchFailures(launch), [launch]);

  return {
    handleClickLaunch,
    conditionalCardStyle,
    launchFailures,
  };
};
