import React from 'react';
import { Button, View, StyleSheet, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import FeedPost from './FeedPost';
import { exampleIncrement, setPostText, postText, dispView } from '../actions'
import Ionicons from 'react-native-vector-icons/Ionicons';
class FeedTab extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
    headerTitle: 'Applause',
    headerStyle: {
      backgroundColor: '#98ff98',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
    fontWeight: 'bold',
    fontFamily: 'Trebuchet-BoldItalic',
    fontSize: 30,
    },
    headerRight: (
      <TouchableOpacity onPress={navigation.getParam('displayView')}>
      <Ionicons name={"ios-create"} size={35} color="white" />
      </TouchableOpacity>
    ),
  }
}
  componentDidMount() {
  this.props.navigation.setParams({ displayView: this.displayView});
  }
  displayView = () => {
    this.props.dispView()
  }
  displaySwitch() {
    if (this.props.displayView) {
      return {
        borderRadius: 10,borderWidth: 5, borderColor: 'powderblue', backgroundColor: 'white',
        flex: 1,
        //backgroundColor: 'green',
        display: 'flex',
      }
    }
    else {
      return {
        borderRadius: 10,borderWidth: 5, borderColor: 'powderblue', backgroundColor: 'white',
        flex: 1,
        //backgroundColor: 'green',
        display: 'none',
      }
    }
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.feed}>
          <View style={this.displaySwitch()}>
            <TextInput
            style={{height: 40, borderBottomColor: 'gray', borderBottomWidth: 1}}
            onChangeText={(text) => this.props.setPostText(text)}
            value={this.props.feedText}
            />
            <Button title="Post" onPress={() => this.props.postText(this.props.feedText)}/>
          </View>
          <View style={styles.posts}>
            <FlatList
              data={this.props.feedPostArray}
              renderItem={({ item }) => ( <FeedPost text={item.text} icon={item.icon}/>
              )} />
          </View>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    flex: 20,
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
  },
  columns: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  feed: {
    flex: 18,
    backgroundColor: '#F5F5F5',
    flexDirection: 'column',
  },
  textInput: {
    flex: 1,
    backgroundColor: 'green',
    display: 'none',
  },
  posts: {
    flex: 9,
    //backgroundColor: 'black',
  },
});
const mapStateToProps = (state) => {
  return {
    count: state.counter,
    second: state.second,
    feedText: state.feed.postText,
    feedPostArray: state.feed.postArray,
    displayView: state.feed.displayView,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setPostText: (text) => {
      dispatch(setPostText(text))
    },
    postText: (text) => {
      dispatch(postText(text))
    },
    dispView: () => {
      dispatch(dispView())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FeedTab);
