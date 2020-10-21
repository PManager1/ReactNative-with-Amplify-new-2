// Bring in action from api etc here. 

import { Dimensions } from "react-native";
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


import React, { useState } from 'react';
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

// const LoginScreen = ({ navigation }) => {s
    const DetailView = (props) => {   

      // const [ companyName , executiveFirstName, executiveLastName, address, city, state, contactPerson, followupDate, phone_no, cell_phone, status, priorities, ownerStatus,  comment, business_size, createdAt ] = useState('');

      console.log('12- props in Detials View recived =' , props); 
      const { id, email, companyName , executiveFirstName, executiveLastName, address, city, state, contactPerson, followupDate, phone_no, cell_phone, status, priorities, ownerStatus,  comment, business_size, createdAt  } = props.route.params.item;

      
      console.log('27 - companyName = ', companyName); 
      console.log(' 28 - executiveFirstName = ', executiveFirstName); 
      console.log(' 29 - Full Item  = ', props.route.params.item); 

      const handleUpdatePost = async (event) => {
        event.preventDefault()

        const input = {
             id,
             companyName,
             executiveFirstName: executiveFirstName,
             executiveLastName: executiveLastName,  
             address,
             city, 
             state, 
             contactPerson, 
             followupDate, 
             phone_no, 
             cell_phone, 
             status, 
             priorities, 
             ownerStatus,  
             comment, 
             business_size, 
             createdAt             
        }

        console.log('58--- input = ', input );
        console.log(' 59 - this.state = ' , this.state );
        await API.graphql(graphqlOperation(updateRecord, { input }))

   }

      
        const handleResult = async (result) => {
            // if (result.ok && result.data) {
            // //   await setToken(result.data.auth_token);
            //   navigation.navigate('Home');
            // } else if (result.status === 401) {
            //   throw new Error('Invalid login.');
            // } else {
            //   throw new Error('Something went wrong.');
            // }
          };

          return (
            <SafeAreaView style={styles.container}> 
              <ScrollView style={styles.scrollView}>
           
<form className="add-post" onSubmit={(event) => this.handleUpdatePost(event)}>
  <Card>
  <CardSection>
     <Input
      placeholder="company Name"
      value={companyName}
      // onChangeText={text => this.props.propertyUpdate({ prop: 'agent_name', value: text })}
      />

  </CardSection>

  <CardSection>
     <Input
      placeholder="Executive First Name"
      value={executiveFirstName}
      // onChangeText={text => this.props.propertyUpdate({ prop: 'agent_name', value: text })}
      />
  </CardSection>

  <CardSection>
     <Input
      placeholder="Executive Last Name"
      value={executiveLastName}
      // onChangeText={text => this.props.propertyUpdate({ prop: 'agent_name', value: text })}
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
          value = {cell_phone}
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
          value={phone_no}
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
      value={contactPerson}
      // onChangeText={text => this.props.propertyUpdate({ prop: 'address', value: text })}
      />
  </CardSection>


 <CardSection>
      <Input
      placeholder="Street address"
      value={address}
      // onChangeText={text => this.props.propertyUpdate({ prop: 'address', value: text })}
      />
  </CardSection>
  <CardSection>
      <Input
      placeholder="City"
      value={city}
      // onChangeText={text => this.props.propertyUpdate({ prop: 'address', value: text })}
      />
  </CardSection>

  <CardSection>
      <Input
      placeholder="State"
      value={state}
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
            value={status}
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
          value={ownerStatus}
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
            value={email}
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
            value={comment}
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
        
};

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
