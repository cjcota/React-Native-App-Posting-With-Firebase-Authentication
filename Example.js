import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { exampleIncrement } from './src/actions'
class Example extends React.Component {
  testThing() {
    if (this.props.count < 8){
      this.props.incr()
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>hello {this.props.count} {this.props.second.helloText}</Text>
        <Button title='press' onPress={() => this.testThing()}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
export default connect(mapStateToProps, mapDispatchToProps)(Example);
