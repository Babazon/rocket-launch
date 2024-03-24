import { StyleSheet, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { formatLaunchDate } from '../utils/formatLaunchDate';
import { formatLaunchFailures } from '../utils/formatLaunchFailures';
import { getAvailableImage } from '../utils/getAvailableImage';
import { WikipediaWebView } from './WikipediaWebview';
import { YouTubeVideo } from './YoutubeVideo';
import { Launch } from '../services/types';

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
  image: {
    height: 300,
    width: 300,
    marginVertical: 8,
    alignSelf: 'center',
  },
});
