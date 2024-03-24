import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import Icon from 'react-native-vector-icons/EvilIcons';
import { useLaunchCard } from "../hooks/useLaunchCard";
import { Launch } from "../services/types";
import { formatLaunchDate } from "../utils/formatLaunchDate";
import { getAvailableImage } from "../utils/getAvailableImage";


interface LaunchCardProps {
    launch: Launch;
}

export const LaunchCard: React.FC<LaunchCardProps> = ({ launch }) => {

    const {
        handleClickLaunch,
        conditionalCardStyle,
        launchFailures
    } = useLaunchCard(launch);

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
                        <Text numberOfLines={1} style={styles.text}>{`${formatLaunchDate(launch.date_utc)}`}</Text>
                        {!!launch.details && <Text numberOfLines={launch.failures.length ? 2 : 4} style={styles.text}>{`Details: ${launch.details}`}</Text>}
                        {!!launch.failures.length && <Text numberOfLines={!!launch.details ? 2 : 4} style={styles.text}>{`Fail Reason: ${launchFailures}`}</Text>}
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
        backgroundColor: '#fff',
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
    },
    icon: { alignSelf: 'center' }
});