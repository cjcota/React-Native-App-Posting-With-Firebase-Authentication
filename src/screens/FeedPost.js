import React from 'react';
import { Button, View, StyleSheet, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { exampleIncrement } from '../actions'
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class FeedPost extends React.Component {
  render() {
    return (
      <View style={{flex: 2, marginTop: 5,borderBottomWidth: 1,borderTopWidth: 1, borderColor: '#E8E8E8', backgroundColor: 'white',flexDirection: 'column',}}>
      <Ionicons style={{marginLeft: 10}} name={this.props.icon} size={35} color="black" />
      <Text style={{color: 'black', marginLeft: 10, marginRight: 10}}>{this.props.text}</Text>
            <View style={{flex: 2,flexDirection: 'row'}}>
            <View style={{flex: 1, marginTop: 5,borderTopWidth: 1,borderTopColor: '#E8E8E8', borderBottomColor: '#98ff98', backgroundColor: 'white',}} ><Button title='Applaud' /></View>
            <View style={{flex: 1, marginTop: 5,borderTopWidth: 1,borderStartWidth: 1,borderStartColor: '#E8E8E8',borderTopColor: '#E8E8E8', borderBottomColor: '#98ff98', backgroundColor: 'white',}} ><Button title='Comment' /></View>
            </View>
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
