import { theme } from '../constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

interface YouTubeVideoProps {
  videoId: string;
}

export const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId }) => {
  if (!videoId) {
    return null;
  }

  return (
    <View style={styles.videoContainer}>
      <WebView
        style={styles.video}
        allowsFullscreenVideo={true}
        source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    width: '100%',
    marginTop: theme.spacing.large,
    aspectRatio: 16 / 9, // Aspect ratio of YouTube videos
  },
  video: {
    flex: 1,
    width: '100%',
  },
});
