import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/EvilIcons';

import { useLaunchCard } from '../hooks/useLaunchCard';
import { Launch } from '../services/types';
import { formatLaunchDate } from '../utils/formatLaunchDate';
import { getAvailableImage } from '../utils/getAvailableImage';
import { theme } from '../constants';


const isIOS = Platform.OS === 'ios';

const shadowStyles: ViewStyle = {
  shadowColor: '#000000',
  shadowOffset: {
    width: 2,
    height: 20,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
}
interface LaunchCardProps {
  launch: Launch;
}

export const LaunchCard: React.FC<LaunchCardProps> = ({ launch }) => {
  const { handleClickLaunch, conditionalCardStyle, launchFailures } = useLaunchCard(launch);

  return (
    <TouchableOpacity style={[styles.card, conditionalCardStyle, isIOS ? shadowStyles : {}]} onPress={handleClickLaunch}>
      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.title}>{`Mission: ${launch.name}`}</Text>
        <View style={styles.detailsContainer}>
          <FastImage
            style={styles.thumbnail}
            source={getAvailableImage({ launch, thumbnail: true })}
            resizeMode={FastImage.resizeMode.contain}
          />
          <View style={styles.textContainer}>
            <Text
              numberOfLines={1}
              style={styles.text}
            >{`${formatLaunchDate(launch.date_utc)}`}</Text>
            {!!launch.details && (
              <Text
                numberOfLines={launch.failures.length ? 2 : 4}
                style={styles.text}
              >{`Details: ${launch.details}`}</Text>
            )}
            {!!launch.failures.length && (
              <Text
                numberOfLines={!!launch.details ? 2 : 4}
                style={styles.text}
              >{`Fail Reason: ${launchFailures}`}</Text>
            )}
          </View>
          <Icon name="chevron-right" size={40} color="white" style={styles.icon} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 150,
    width: '100%',
    marginBottom: theme.spacing.large,
    borderRadius: 16,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    padding: theme.spacing.medium,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: theme.fontSize.medium,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginRight: theme.spacing.small,
    flexWrap: 'wrap',
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  thumbnail: {
    height: 100,
    width: 100,
    marginRight: theme.spacing.medium,
    marginTop: theme.spacing.medium,
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
    marginTop: theme.spacing.large,
    marginLeft: theme.spacing.medium,
  },
  text: {
    color: '#FFFFFF',
    marginBottom: theme.spacing.small,
    marginRight: theme.spacing.small,
    flexWrap: 'wrap',
  },
  icon: { alignSelf: 'center' },
});
