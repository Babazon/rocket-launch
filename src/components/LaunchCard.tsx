import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import moment from "moment";
import React, { useCallback, useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import FastImage from "react-native-fast-image";
import { RootStackParamList } from "../navigation/navigation";
import { Launch } from "../services/types";
import { getAvailableImage } from "../utils/getAvailableImage";

interface LaunchCardProps {
    launch: Launch;
}

export const LaunchCard: React.FC<LaunchCardProps> = ({ launch }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const handleClickLaunch = useCallback(() => {
        navigation.navigate('Detail', { launch });
    }, [launch, navigation]);

    const isUpcomingLaunch = useMemo(() => launch.upcoming, [launch])

    const conditionalCardStyle: ViewStyle = useMemo(() => ({ backgroundColor: isUpcomingLaunch ? 'rgba(0,0,0,0.3)' : launch.success ? 'rgba(38,194,129,0.4)' : 'rgba(255,0,0,0.4)' }), [launch]);

    const launchFailures = useMemo(() => launch.failures.map((fail: { reason: string }, index: number) => `${fail.reason}${index < launch.failures.length - 1 ? ',' : ''}`), [launch])

    return (
        <TouchableOpacity style={[styles.card, conditionalCardStyle]} onPress={handleClickLaunch}>
            <View style={styles.content}>
                <Text numberOfLines={1} style={styles.title}>{`Mission: ${launch.name}`}</Text>
                <View style={styles.detailsContainer}>
                    <FastImage
                        style={styles.thumbnail}
                        source={getAvailableImage({ launch, thumbnail: true })}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                    <View style={styles.textContainer}>
                        <Text numberOfLines={1} style={styles.text}>{`${moment.utc(launch.date_utc).utcOffset(moment().utcOffset()).format('MMMM Do YYYY, HH:mm')}`}</Text>
                        {!!launch.details && <Text numberOfLines={launch.failures.length ? 2 : 4} style={styles.text}>{`Details: ${launch.details}`}</Text>}
                        {!!launch.failures.length && <Text numberOfLines={!!launch.details ? 2 : 4} style={styles.text}>{`Fail Reason: ${launchFailures}`}</Text>}
                    </View>
                    <Text style={{ alignSelf: 'center', fontSize: 20, color: 'white', textAlignVertical: 'top' }}>{`${'>'}`}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        height: 150,
        width: "100%",
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 20,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 16,
    },
    content: {
        flex: 1,
        padding: 8,
        borderRadius: 16,
        borderStyle: 'solid',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
        marginRight: 4,
        flexWrap: 'wrap',
    },
    detailsContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
    },
    thumbnail: {
        height: 100,
        width: 100,
        marginRight: 8,
        marginTop: 8
    },
    textContainer: {
        flexDirection: "column",
        flex: 1,
        marginTop: 16,
        marginLeft: 8,
    },
    text: {
        color: "white",
        marginBottom: 5,
        marginRight: 4,
        flexWrap: 'wrap',
    }
});

export default LaunchCard;
