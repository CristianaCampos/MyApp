/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import {ENV, HELLO} from '@env';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar barStyle="dark-content" />
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
        }}>
        {ENV}
      </Text>
      <Text
        style={{
          fontSize: 18,
        }}>
        {HELLO}
      </Text>
    </SafeAreaView>
  );
};

export default App;
