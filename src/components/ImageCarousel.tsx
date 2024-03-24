import React from 'react';
import { View, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import Carousel from 'react-native-snap-carousel';

interface ImageCarouselProps {
    images: string[]
}

const MyCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const renderImage = ({ item }: { item: string }) => (
        <View style={styles.imageContainer}>
            <FastImage source={{ uri: item }} style={styles.image} />
        </View>
    );

    return (
        <Carousel
            data={images}
            renderItem={renderImage}
            sliderWidth={300}
            itemWidth={300}
            layout="default"
            loop
        />
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        height: 400,
        width: 400,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});

export default MyCarousel;
