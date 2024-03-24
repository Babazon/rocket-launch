import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useMemo } from 'react';
import { RefreshControl, ScrollView, StyleSheet, ViewStyle } from 'react-native';

import { LaunchDetails } from '../components/LaunchDetails';
import { RocketDetails } from '../components/RocketDetails';
import { useRocket } from '../hooks/useRocket';
import { RootStackParamList } from '../navigation/navigation';
import { theme } from '../constants';

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;
type DetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Detail'>;

export const DetailScreen: React.FC = () => {
  const navigation = useNavigation<DetailScreenNavigationProp>();
  const route = useRoute<DetailScreenRouteProp>();
  const { launch } = route.params;

  const { rocket, isLoading, isError, fetchRocket } = useRocket(launch.rocket);

  useEffect(() => {
    navigation.setOptions({
      title: launch.name,
    });
  }, [navigation, launch]);

  const conditionalContainerStyle: ViewStyle = useMemo(
    () => ({
      backgroundColor: launch.upcoming
        ? theme.colors.upcoming
        : launch.success
          ? theme.colors.success
          : theme.colors.failure,
    }),
    [launch],
  );

  return (
    <ScrollView
      contentContainerStyle={[styles.container, conditionalContainerStyle]}
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchRocket} />}
    >
      <LaunchDetails launch={launch} />
      <RocketDetails rocket={rocket} isError={isError} isLoading={isLoading} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.large,
    paddingBottom: theme.spacing.xxlarge,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
