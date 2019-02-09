import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { helloAction } from './src/actions'
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>hello</Text>
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
function mapStateToProps(state) {
  return {
    exampleVar: state.counter,
    anotherVar: state.second
  }
}
const mapDispatchToProps = dispatch => {
  return {
    hello: () => {
      dispatch(helloAction())
    }
  }
}
connect(mapStateToProps, mapDispatchToProps)(App);
