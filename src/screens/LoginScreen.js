import React from 'react';
import { Button, View, StyleSheet, Text, TextInput } from 'react-native';
export default class LoginScreen extends React.Component {
  state = {
    username: '',
    password: '',
  };
  loginFunction = () => {
    this.props.navigation.navigate('Main');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Login: </Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          secureTextEntry={true}
        />
        <Button title="Press to Log In" onPress={() => this.loginFunction()} />
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
