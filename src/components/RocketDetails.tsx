import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import ImageCarousel from './ImageCarousel';
import { Maybe, Rocket } from '../services/types';
import { theme } from '../constants';

interface RocketDetailsProps {
  rocket: Maybe<Rocket>;
  isError: boolean;
  isLoading: boolean;
}

export const RocketDetails: React.FC<RocketDetailsProps> = ({ rocket, isError, isLoading }) => {
  return (
    <>
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
  rocketContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: theme.spacing.large,
  },
  swipeIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
