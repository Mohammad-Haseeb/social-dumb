/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import HomeScreen from './src/screen/homeScreen';
function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'black',
    flex: 1,
  },
});

export default App;
