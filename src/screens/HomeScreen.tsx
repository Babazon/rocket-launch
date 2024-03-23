import React, { useRef, useState } from "react";
import { SectionList, RefreshControl, SafeAreaView, StyleSheet, Text, SectionListData, DefaultSectionT, TouchableOpacity, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { LaunchCard } from "../components/LaunchCard";
import { useLaunches } from "../hooks/useLaunches";
import { Launch } from "../services/types";

const SCREEN_HEIGHT = Dimensions.get('window').height;

export const HomeScreen: React.FC = () => {
    const { isLoading, isError, sections, fetchData } = useLaunches();

    const renderLaunch = ({ item }: { item: Launch }) => <LaunchCard launch={item} />;

    const renderSectionHeader = (info: { section: SectionListData<Launch, DefaultSectionT> }) => (
        <Text style={styles.sectionHeader}>{info.section.title}</Text>
    );

    const sectionListRef = useRef<SectionList>(null);
    const [showButton, setShowButton] = useState<Boolean>(false);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        if (offsetY > SCREEN_HEIGHT) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const scrollToTop = () => {
        sectionListRef.current?.scrollToLocation({ sectionIndex: 0, itemIndex: 0 });
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {isError && <Text>An error occurred. Please try to refresh.</Text>}
            <SectionList<Launch>
                ref={sectionListRef}
                sections={sections}
                contentContainerStyle={{ marginHorizontal: 16 }}
                keyExtractor={(launch, index) => launch.id + index}
                renderItem={renderLaunch}
                stickySectionHeadersEnabled
                renderSectionHeader={renderSectionHeader}
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchData} />}
                onScroll={handleScroll}
            />
            {showButton && (
                <TouchableOpacity style={styles.floatingButton} onPress={scrollToTop}>
                    <Text style={styles.buttonText}>^</Text>
                </TouchableOpacity>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionHeader: {
        fontSize: 18,
        fontWeight: "bold",
        backgroundColor: "#f0f0f0",
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 15,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'flex-end',
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'whitesmoke'

    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        top: 4,

    },
});
