import React from 'react';
import { Button, View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as firebase from 'firebase';
export default class SignupScreen extends React.Component {
  state = {
    username: '',
    password: '',
    city: '',
  };
  loginFunction = () => {
    this.props.navigation.navigate('Login');
  }
  login = async () => {
    try {
      firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.')
        } else {
          alert(errorMessage)
        }
        console.log(error)
      });
    } catch (err) {
      console.log('login failed')
      return
    }

    }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Ionicons style={{marginTop: 50}} name={"ios-compass"} size={100} color="white" />
        </View>
        <View style={styles.bottom}>
          <Text>Register:</Text>
          <TextInput placeholder="Username" placeholderTextColor="black"
            style={{width: 300, height: 40, borderBottomColor: 'white', borderBottomWidth: 1}}
            onChangeText={username => this.setState({ username })}
            value={this.state.username}
          />
          <TextInput placeholder="Password" placeholderTextColor="black"
            style={{marginTop: 5,width: 300, height: 40, borderBottomColor: 'white', borderBottomWidth: 1}}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            secureTextEntry={true}
          />
          <TextInput placeholder="City" placeholderTextColor="black"
            style={{marginTop: 5,width: 300, height: 40, borderBottomColor: 'white', borderBottomWidth: 1}}
            onChangeText={city => this.setState({ city })}
            value={this.state.city}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={() => this.login()} style={{borderRadius: 50,marginTop: 5,width: 150, height: 40, backgroundColor: 'white', alignItems: 'center',justifyContent: 'center',}}><Text>Register</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.loginFunction()} style={{borderRadius: 50,marginTop: 5,width: 150, height: 40, backgroundColor: 'white', alignItems: 'center',justifyContent: 'center',}}><Text>Login</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //justifyContent: 'center',
    backgroundColor: '#03C04A',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    flexDirection: 'column',
    flex: 3,
  },
  top: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'black',
  },
  bottom: {
    flex: 2,
    alignItems: 'flex-start',
    alignItems: 'center',
  },
});
