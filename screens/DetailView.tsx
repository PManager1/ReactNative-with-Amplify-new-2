import { Dimensions } from "react-native";
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
import React, { useState, Component } from 'react';

import { Text, TextInput, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Constants, WebBrowser } from 'expo';

import { Card, CardSection, Input } from '../components/common';
import { Column as Col, Row } from 'react-native-flexbox-grid'
import Communications from 'react-native-communications';
import SubmitButton from '../forms/SubmitButton'

class DetailView extends Component {

  state = {
      id: '', 
      companyName: '', 
      executiveFirstName: '',
      email: '',
      postData: {
        companyName: this.props.route.params.item.companyName,
        executiveFirstName: this.props.route.params.item.executiveFirstName,
        // companyName: this.props.companyName,
        // executiveFirstName: this.props.executiveFirstName
   }
  }

  handleUpdatePost = async (event) => {
       event.preventDefault()

       const input = {
            id: this.props.id,
            companyName: this.state.postData.companyName,
            executiveFirstName: this.state.postData.executiveFirstName
       }
       console.log('46--- input = ', input );
       await API.graphql(graphqlOperation(updateRecord, { input }))
  }
   
  componentWillMount = async () => {
    // Autho code comes here 
      console.log(' 73- componentWillMount '); 
  }

  handlecompanyName = event => {
    console.log('41- calling handlecompanyName');
    this.setState({ postData: {...this.props.companyName,
      companyName: event.target.value}})
}

handleExecutiveFirstName = event => {
  console.log('41- calling handlecompanyName');
  this.setState({ postData: {...this.props.companyName,
    companyName: event.target.value}})
}

render() {
       console.log(' 70-  Edit Post props =', this.props );
       return (
<SafeAreaView style={styles.container}> 
 <ScrollView style={styles.scrollView}>

    <form className="add-post" 
                onSubmit={this.handleAddPost} >
    <Card>
    <CardSection>

                <input style={{fontSize: "19px"}}
                    type="text" placeholder="Title"
                    name="companyName"
                    value={this.state.postData.companyName}
                    onChange={this.handlecompanyName} 
                    />

    </CardSection>

    <CardSection>
                  <input 
                    style={{height: "150px", fontSize: "19px"}}
                    type="text"
                    name="executiveFirstName"
                    value={this.state.postData.executiveFirstName}
                    onChange={this.handleExecutiveFirstName}
                    />
    </CardSection>

    </Card>
    {/* onPress={} */}
    <SubmitButton title="Submit"  />

    <button>Update Post</button>

    </form>
    </ScrollView>
</SafeAreaView>
      );
  }
}

export default DetailView;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 15,
    },
    error: {
      marginBottom: 20,
      height: 17.5,
    },
  });
