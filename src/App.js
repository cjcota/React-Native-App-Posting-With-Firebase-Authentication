import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { exampleIncrement } from './actions'
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.exampleVar}</Text>
      </View>
    );
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
    exampleVar: state,
  }
}

export default connect(mapStateToProps, { exampleIncrement })(App);