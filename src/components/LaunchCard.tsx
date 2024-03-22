import React from "react";
import { Launch } from "../services/types";
import { Image, Text, TouchableOpacity, View } from "react-native";


interface LaunchCardProps {
    launch: Launch
}

export const LaunchCard: React.FC<LaunchCardProps> = ({ launch }) => {
    return (
        <TouchableOpacity style={{ height: 200, width: '100%', backgroundColor: 'whitesmoke', marginBottom: 32 }}>
            <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'stretch' }}>
                <Text style={{ width: '100%' }}>{launch.name}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <Image
                        style={{ height: 100, width: 100 }}
                        resizeMode="cover"
                        source={{ uri: launch.links.patch.small ?? launch.links.reddit.media ?? launch.links.flickr.small[0] ?? '' }}
                    />
                    <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity >
    );
};