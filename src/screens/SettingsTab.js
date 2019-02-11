import React from 'react';
import { Button, View, StyleSheet, Text, TextInput } from 'react-native';
export default class FilterTab extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Settings Tab: </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
});
