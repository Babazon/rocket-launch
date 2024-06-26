import React, { useRef } from 'react';
import {
  DefaultSectionT,
  RefreshControl,
  SafeAreaView,
  SectionList,
  SectionListData,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import { LaunchCard } from '../components/LaunchCard';
import { useLaunches } from '../hooks/useLaunches';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { Launch } from '../services/types';
import { theme } from '../constants';

export const HomeScreen: React.FC = () => {
  const { isLoading, isError, sections, fetchData } = useLaunches();

  const sectionListRef = useRef<SectionList>(null);
  const { showButton, handleScroll, scrollToTop } = useScrollToTop(sectionListRef);

  const renderLaunch = ({ item }: { item: Launch }) => <LaunchCard launch={item} />;

  const renderSectionHeader = (info: { section: SectionListData<Launch, DefaultSectionT> }) => (
    <Text style={styles.sectionHeader}>{info.section.title}</Text>
  );

  return (
    <SafeAreaView style={styles.container}>
      {isError && <Text>An error occurred. Please try to refresh.</Text>}
      <SectionList<Launch>
        ref={sectionListRef}
        sections={sections}
        contentContainerStyle={styles.sectionList}
        keyExtractor={(launch, index) => launch.id + index}
        renderItem={renderLaunch}
        stickySectionHeadersEnabled
        renderSectionHeader={renderSectionHeader}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchData} />}
        onScroll={handleScroll}
      />
      {showButton && (
        <TouchableOpacity style={styles.floatingButton} onPress={scrollToTop}>
          <Icon name="chevron-up" size={30} color="black" style={styles.icon} />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: theme.fontSize.medium,
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    paddingVertical: theme.spacing.medium,
    paddingHorizontal: theme.spacing.large,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 36,
    right: 20,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'whitesmoke',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: theme.fontSize.large,
    top: theme.spacing.small,
  },
  icon: { top: -theme.spacing.xsmall },
  sectionList: { marginHorizontal: theme.spacing.large },
  container: { flex: 1 },
});
