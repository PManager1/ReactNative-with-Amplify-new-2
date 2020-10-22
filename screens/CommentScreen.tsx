import React, {
  Component
} from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

import { Card, Input, CardSection, Button, Confirm } from '../components/common';



class CommentScreen extends Component {

  // static navigationOptions = ({ navigation }) => ({
  //     title: `${navigation.state.params.user}`,
  // });

    render() {
      // const { params } = this.props.navigation.state;
      console.log('23- ChatScreen  this.props =', this.props );
      return (
          <View style={styles.container}>
          <TextInput
            multiline={true}
            numberOfLines={4}
            style={styles.Textcontainer}
            value={this.props.comments}
            // onChangeText={text => this.props.propertyUpdate({ prop: 'comments', value: text })}
            placeholder="Notes..."
          />
        </View>
      );
    }
}


const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  Textcontainer:{
    padding: 10,
    height: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 10,
    // backgroundColor: 'pink',
    backgroundColor: '#FAFAF8'
  },
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 20,
    // backgroundColor: '#2ecc71',
    backgroundColor: '#FAFAF8'
  },
  textStyle: {
    flex: 1,
    fontSize: 28,
    textAlign: 'center',
    lineHeight: 40
  }
};




export default CommentScreen;












//
