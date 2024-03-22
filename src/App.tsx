import { useLaunches } from './hooks/useLaunches'
import React from 'react'
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme
} from 'react-native'
import {
  Colors
} from 'react-native/Libraries/NewAppScreen'
import { Launch } from './services/types'
import { LaunchCard } from './components/LaunchCard'




function App(): React.JSX.Element {

  const {
    isLoading,
    isError,
    data,
    fetchData
  } = useLaunches()


  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {isError && <Text>An error occurred. Please try to refresh.</Text>}
      <FlatList<Launch>
        style={{ flex: 1 }}
        contentContainerStyle={styles.sectionContainer}
        data={data}
        keyExtractor={launch => launch.id}
        renderItem={({ item }) => (<LaunchCard launch={item} />)}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={fetchData}
          />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 64
  },
})

export default App
