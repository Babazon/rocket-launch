import { StyleSheet, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { formatLaunchDate } from '../utils/formatLaunchDate';
import { formatLaunchFailures } from '../utils/formatLaunchFailures';
import { getAvailableImage } from '../utils/getAvailableImage';
import { WikipediaWebView } from './WikipediaWebview';
import { YouTubeVideo } from './YoutubeVideo';
import { Launch } from '../services/types';
import { theme } from '../constants';

interface LaunchDetailsProps {
  launch: Launch;
}

export const LaunchDetails: React.FC<LaunchDetailsProps> = ({ launch }) => {
  return (
    <>
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
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: theme.fontSize.large,
    fontWeight: 'bold',
    marginBottom: theme.spacing.medium,
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: theme.fontSize.medium,
    fontWeight: 'bold',
    marginTop: theme.spacing.large,
    marginBottom: theme.spacing.medium,
    alignSelf: 'flex-start',
    color: '#FFFFFF',
  },
  image: {
    height: 300,
    width: 300,
    marginVertical: theme.spacing.medium,
    alignSelf: 'center',
  },
});
