import React from 'react';
import { Button, View, StyleSheet, Text, TextInput, createStackNavigator, createAppContainer } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AccountProfile from './AccountProfile';
import RecentPosts from './RecentPosts';
import Privacy from './Privacy';
export default class SettingsTab extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Settings</Text>
          <Button title= "Account Profile"  onPress={() => this.props.navigation.navigate('AccountProfile')} style={styles.settingstext}  />
          <Button title= "Recent Posts"  onPress={() => this.props.navigation.navigate('RecentPosts')} style={styles.settingstext}  style={styles.settingstext} />
          <Button title= 'Privacy'  onPress={() => this.props.navigation.navigate('Privacy')} style={styles.settingstext}  style={styles.settingstext} />
        </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
    color: 'green',
    fontWeight: 'bold',
    fontSize: 20

  },
  settingstext: {
    fontSize: 10,




  },
});
