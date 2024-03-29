import React from 'react';
import { Button, View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as firebase from 'firebase';
export default class LoginScreen extends React.Component {
  state = {
    username: '',
    password: '',
  };
  loginFunction = () => {
    this.props.navigation.navigate('Register');
  }
  login = async () => {
    console.log(this.state.username)
    console.log(this.state.password)
      firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
        .then(() => this.props.navigation.navigate('Main'))
          .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      })

    }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Ionicons style={{marginTop: 50}} name={"ios-compass"} size={100} color="white" />
        </View>
        <View style={styles.bottom}>
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
          <TouchableOpacity onPress={() => this.login()} style={{borderRadius: 50,marginTop: 5,width: 150, height: 40, backgroundColor: 'white', alignItems: 'center',justifyContent: 'center',}}><Text>Log In</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.loginFunction()} style={{borderRadius: 50,marginTop: 5,width: 150, height: 40, backgroundColor: 'white', alignItems: 'center',justifyContent: 'center',}}><Text>Register</Text></TouchableOpacity>
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
