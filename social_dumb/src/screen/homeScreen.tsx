import React from 'react';
import Header from '../components/home/header';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Stories from '../components/home/stories';
function HomeScreen() {
  return (
    <View>
      <Header />
      <Stories />
    </View>
  );
}

export default HomeScreen;
