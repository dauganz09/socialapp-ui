import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames'
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <>
     <HomeScreen/>
    </>
  );
}
