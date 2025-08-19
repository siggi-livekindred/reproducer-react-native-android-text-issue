/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.textA}>Available to book</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textB}>Available to book</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  textA: {
    lineHeight: 36,
    backgroundColor: '#F08080',
  },
  textB: {
    backgroundColor: '#F08080',
  },
});

export default App;
