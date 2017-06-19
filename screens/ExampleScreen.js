import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class ExampleScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Example',
    },
  };

  render() {
    return (
      <View containerStyle={styles}>
        <Text>
            Hello world
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
