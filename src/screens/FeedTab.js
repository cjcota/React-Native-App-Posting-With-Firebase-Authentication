import React from 'react';
import { Button, View, StyleSheet, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { exampleIncrement } from '../actions'
class FeedTab extends React.Component {
  testThing() {
    if (this.props.count < 8){
      this.props.incr()
    }
  }
  render() {
    return (
      <View style={styles.container}>
      <Text>Feed {this.props.count} {this.props.second.helloText}</Text>
      <Button title='press' onPress={() => this.testThing()}/>
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
const mapStateToProps = (state) => {
  return {
    count: state.counter,
    second: state.second,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    incr: () => {
      dispatch(exampleIncrement())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FeedTab);
