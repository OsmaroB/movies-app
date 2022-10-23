import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import TrendingList from '../components/trending/trending-list';

import DiscoverComedia from '../components/discover/discover-comedia';
import DiscoverRomance from '../components/discover/discover-romance';
import DiscoverAccion from '../components/discover/discover-accion';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <DiscoverComedia />
      <DiscoverRomance />
      <DiscoverAccion />

      <StatusBar style="light" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    overflow: 'hidden',
    maxWidth: '100%',
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 15,
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  link: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
