// Bring in action from api etc here. 

import { Dimensions } from "react-native";
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


import React, { useState, Component } from 'react';
import Form from '../forms/Form';
// import { login } from '../api/authentication';
// import { setToken } from '../api/token';
import { Text, TextInput, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Constants, WebBrowser } from 'expo';

import { Card, CardSection, Input } from '../components/common';
import { Column as Col, Row } from 'react-native-flexbox-grid'
import Communications from 'react-native-communications';

import SubmitButton from '../forms/SubmitButton'



class DetailView extends Component {

  state = {
      // show: false,
      // id: "",
   //    postOwnerId: "",
   //    postOwnerUsername: "",
      // companyName: "",
      // executiveFirstName: "",
      // postData: {
      //      companyName: this.props.companyName,
      //      executiveFirstName: this.props.executiveFirstName
      // }
      id: '', 
      companyName: '', 
      executiveFirstName: '',
      email: '',
      
      // id: this.props.route.params.item.id, 
      // email:  this.props.route.params.item.email , 
      // companyName: this.props.route.params.item.companyName, 
      // executiveFirstName: this.props.route.params.item.executiveFirstName, 
      // // executiveLastName: props.route.params.item., 
      // address: props.route.params.item., 
      // city: props.route.params.item., 
      // state: props.route.params.item., 
      // contactPerson: props.route.params.item., 
      // followupDate: props.route.params.item., 
      // phone_no:props.route.params.item., 
      // cell_phone: props.route.params.item., 
      // status: props.route.params.item., 
      // priorities:props.route.params.item., 
      // ownerStatus:props.route.params.item.,  
      // comment: props.route.params.item., 
      // business_size:props.route.params.item., 
      // createdAt:props.route.params.item.



  }



  

  handleUpdatePost = async (event) => {
       event.preventDefault()

       const input = {
            id: this.props.id,
        //     postOwnerId: this.state.postOwnerId,
        //     postOwnerUsername: this.state.postOwnerUsername,
            companyName: this.state.postData.companyName,
            executiveFirstName: this.state.postData.executiveFirstName

       }

       console.log('46--- input = ', input );
       await API.graphql(graphqlOperation(updateRecord, { input }))

       //force close the modal 
       this.setState({ show: !this.state.show})

  }
   
  handleTitle = event => {
        console.log('54- this.state= ', this.state );
       this.setState({
          postData: {...this.state.postData, companyName: event.target.value}
            
           
       })
  }
  handleBody = event => {
       this.setState({ postData: {...this.state.postData,
        executiveFirstName: event.target.value}})
  }
  componentWillMount = async () => {

      // await Auth.currentUserInfo()
      //     .then(user => {
      //          this.setState({
      //              postOwnerId: user.attributes.sub,
      //              postOwnerUsername: user.username 
      //          })
      //     })

      console.log(' 73- componentWillMount '); 
  }

  handlecompanyName = event => {
    console.log('95- calling handlecompanyName');
    
    this.setState({ postData: {...this.props.companyName,
      companyName: event.target.value}})
}

  render() {
       console.log(' 70-  Edit Post props =', this.props );
       return (
        <SafeAreaView style={styles.container}> 
          <ScrollView style={styles.scrollView}>


<form className="add-post" onSubmit={(event) => this.handleUpdatePost(event)}>
<Card>
<CardSection>
 <Input
  placeholder="company Name"
  value={this.props.route.params.item.companyName}
  
  // value={this.state.companyName}
  onChange={this.handlecompanyName} 
  />

</CardSection>

<CardSection>
 <Input
  placeholder="Executive First Name"
  value={this.props.route.params.item.executiveFirstName}
  />
</CardSection>

<CardSection>
 <Input
  placeholder="Executive Last Name"

  />
</CardSection>


<CardSection>
<Row size={14}>
  <Col sm={2} md={1} lg={1}>
    <Text>
      Cell
    </Text>
  </Col>
  <Col sm={9} md={1} lg={1} >
    <Input
      placeholder="9999"
      // value = {cell_phone}
      // onChangeText = {text => this.props.propertyUpdate({ prop: 'cell', value: text })}
      />
  </Col>
    <Col sm={2} md={1} lg={1}>
      <Text>
        {/* <Icon name="comment-o"  size={30} color="green" onPress={this.onTextPress.bind(this)} /> */}
      </Text>
    </Col>

  <Col sm={1} md={4} lg={3}>
      {/* <Icon name="phone"  size={30} color="#228B22"  onPress={this.onCellPress.bind(this)} /> */}
  </Col>
</Row>
</CardSection>



<CardSection>
<Row size={14}>
  <Col sm={2} md={1} lg={1}>
    <Text>
      Phone No
    </Text>
  </Col>
  <Col sm={9} md={1} lg={1} >
    <Input
      placeholder="555-555-5555"
      // value={phone_no}
      // onChangeText={text => this.props.propertyUpdate({ prop: 'phone', value: text })}
      />
  </Col>

  <Col sm={2} md={1} lg={1}>
    <Text>
        {/* <Icon  name="arrow-circle-up" size={30} color="#900" onPress={this.onCopyPhoneToCell.bind(this)} /> */}
    </Text>
  </Col>

  <Col sm={1} md={4} lg={3}>
        {/* <Icon name="phone"  size={30} color="#228B22"  onPress={this.onPhonePress.bind(this)} /> */}
  </Col>
  </Row>
  </CardSection>


<CardSection>
  <Input
  placeholder="Contact Person"
  // value={contactPerson}
  // onChangeText={text => this.props.propertyUpdate({ prop: 'address', value: text })}
  />
</CardSection>


<CardSection>
  <Input
  placeholder="Street address"
  // value={address}
  // onChangeText={text => this.props.propertyUpdate({ prop: 'address', value: text })}
  />
</CardSection>
<CardSection>
  <Input
  placeholder="City"
  // value={city}
  // onChangeText={text => this.props.propertyUpdate({ prop: 'address', value: text })}
  />
</CardSection>

<CardSection>
  <Input
  placeholder="State"
  // value={state}
  // onChangeText={text => this.props.propertyUpdate({ prop: 'address', value: text })}
  />
</CardSection>


<CardSection>
<Row size={12}>
  <Col sm={5} md={4} lg={3}>
    <Text>
      Status 
    </Text>
  </Col>
  <Col sm={7} md={4} lg={3}>
      <Input
        placeholder="status"
        // value={status}
        // onChangeText={text => this.props.propertyUpdate({ prop: 'Offer', value: text })}
        />
  </Col>
</Row>
</CardSection>



<CardSection>
<Row size={12}>
  <Col sm={5} md={4} lg={3}>
    <Text>
      Owner Status
    </Text>
  </Col>
  <Col sm={7} md={4} lg={3}>
    <Input
      // value={ownerStatus}
      />
  </Col>
</Row>
</CardSection>


<CardSection>
<Row size={12}>
  <Col sm={3} md={4} lg={3}>
    <Text>
        Email
    </Text>
  </Col>
  <Col sm={9} md={4} lg={3}>
        <Input
        placeholder="agent@email.com"
        // value={email}
        // onChangeText={text => this.props.propertyUpdate({ prop: 'agent_email_address', value: text })}
        />
  </Col>
</Row>
</CardSection>



<CardSection>
<Row size={12}>
  <Col sm={3} md={4} lg={3}>
    <Text>
        Followup
    </Text>
  </Col>
  <Col sm={9} md={4} lg={3}>
        <Input
        placeholder="July-18"
        // value={this.formatDate(this.props.FollowUp_Call_Date)}
        // onChangeText={text => this.props.propertyUpdate({ prop: 'FollowUp_Call_Date', value: text })}
        />
  </Col>
</Row>
</CardSection>


<CardSection>
<Row size={12}>
  <Col sm={3} md={4} lg={3}>
    <Text>
        Comments
    </Text>
  </Col>
  <Col sm={9} md={4} lg={3}>
        <Input
        placeholder="comments"
        // value={comment}
        // onChangeText={text => this.props.propertyUpdate({ prop: 'comments', value: text })}
        />
  </Col>
</Row>
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
