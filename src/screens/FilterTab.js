import React from 'react';
import { Button, View, StyleSheet, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { exampleIncrement, exampleSet } from '../actions'
class FilterTab extends React.Component {
  testThing() {
      this.props.incr()
  }
  testThing2 (){
    this.props.incr(7)
  }
  render() {
    return (
      <View style={styles.container}>
      <Text>Filter {this.props.count} {this.props.second.helloText}</Text>
      <Button title='press' onPress={() => this.testThing()}/>
      <Button title='Press2' onPress={() => this.testThing2()}/>

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
    incr: (num) => {
      dispatch(exampleSet(num))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterTab);
