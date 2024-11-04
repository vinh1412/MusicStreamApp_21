import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import LaunchScreen from '../components/screens/LaunchScreen.js';
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LaunchScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
