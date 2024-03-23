import React from "react";
import { SectionList, RefreshControl, SafeAreaView, StyleSheet, Text, SectionListData, DefaultSectionT } from "react-native";
import { LaunchCard } from "../components/LaunchCard";
import { useLaunches } from "../hooks/useLaunches";
import { Launch } from "../services/types";

export const HomeScreen: React.FC = () => {
    const { isLoading, isError, sections, fetchData } = useLaunches();

    const renderLaunch = ({ item }: { item: Launch }) => <LaunchCard launch={item} />;

    const renderSectionHeader = (info: { section: SectionListData<Launch, DefaultSectionT> }) => (
        <Text style={styles.sectionHeader}>{info.section.title}</Text>
    );


    return (
        <SafeAreaView style={{ flex: 1 }}>
            {isError && <Text>An error occurred. Please try to refresh.</Text>}
            <SectionList<Launch>
                sections={sections}
                contentContainerStyle={{ marginHorizontal: 16 }}
                keyExtractor={(launch, index) => launch.id + index}
                renderItem={renderLaunch}
                stickySectionHeadersEnabled
                renderSectionHeader={renderSectionHeader}
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchData} />}
            />
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
});
