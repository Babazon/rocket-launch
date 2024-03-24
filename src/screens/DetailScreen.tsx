import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useMemo } from 'react';
import { RefreshControl, ScrollView, StyleSheet, ViewStyle } from 'react-native';

import { LaunchDetails } from '../components/LaunchDetails';
import { RocketDetails } from '../components/RocketDetails';
import { useRocket } from '../hooks/useRocket';
import { RootStackParamList } from '../navigation/navigation';

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
        ? 'rgba(0,0,0,0.3)'
        : launch.success
          ? 'rgba(38,194,129,0.4)'
          : 'rgba(255,0,0,0.4)',
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
    padding: 16,
    paddingBottom: 64,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
