import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { WikipediaWebView } from "../components/WikipediaWebview";
import { YouTubeVideo } from "../components/YoutubeVideo";
import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { RootStackParamList } from "../navigation/navigation";
import FastImage from "react-native-fast-image";
import { getAvailableImage } from "../utils/getAvailableImage";
import { formatLaunchDate } from "../utils/formatLaunchDate";


type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;
type DetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Detail'>;

export const DetailScreen: React.FC = () => {
    const navigation = useNavigation<DetailScreenNavigationProp>();
    const route = useRoute<DetailScreenRouteProp>();
    const { launch } = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: launch.name,
        });
    }, [navigation, launch]);




    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>{launch.name}</Text>
            <FastImage
                style={styles.image}
                source={getAvailableImage({ launch })}
                resizeMode={FastImage.resizeMode.contain}
            />
            <Text style={styles.subtitle}>Launch Details:</Text>
            <Text>{`Date: ${formatLaunchDate(launch.date_utc)}`}</Text>
            <Text>{`Rocket: ${launch.rocket}`}</Text>
            <Text>{`Details: ${launch.details}`}</Text>
            <WikipediaWebView wikipediaUrl={launch.links.wikipedia ?? ''} />
            <YouTubeVideo videoId={launch.links.youtube_id ?? ''} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 16,
        marginBottom: 8,
    },
    link: {
        color: "blue",
        textDecorationLine: "underline",
        marginTop: 8,
    },
    videoContainer: {
        width: '100%',
        marginTop: 16,
        aspectRatio: 16 / 9, // Aspect ratio of YouTube videos
    },
    video: {
        flex: 1,
        width: '100%'
    },
    image: {
        height: 300,
        width: 300,
        marginVertical: 8
    },
});

export default DetailScreen;
