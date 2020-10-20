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


// const LoginScreen = ({ navigation }) => {s
    const DetailView = (props) => {   

      console.log('12- props in Detials View recived =' , props); 
      const { CompanyName , executiveFirstName } = props.route.params.item;
      
      console.log('16 - CompanyName = ', CompanyName); 
      console.log(' 17 - executiveFirstName = ', executiveFirstName); 
      console.log(' 18 - Full Item  = ', props.route.params.item); 

      
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
           
    

              <Card>
  <CardSection>
     <Input
      placeholder="jane"
      // value={this.props.agent_name}
      // onChangeText={text => this.props.propertyUpdate({ prop: 'agent_name', value: text })}
      />

  </CardSection>

  <CardSection>
      <Input
      placeholder="123 Main St"
      // value={this.props.address}
      // onChangeText={text => this.props.propertyUpdate({ prop: 'address', value: text })}
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
          // value = {this.props.cell}
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
          Phone
        </Text>
      </Col>
      <Col sm={9} md={1} lg={1} >
        <Input
          placeholder="555-555-5555"
          // value={this.props.phone}
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
    <Row size={12}>
      <Col sm={5} md={4} lg={3}>
        <Text>
          List Price
        </Text>
      </Col>
      <Col sm={7} md={4} lg={3}>
           <Input
            placeholder="$-5555"
            // value={this.props.listPrice}
            // onChangeText={text => this.props.propertyUpdate({ prop: 'listPrice', value: text })}
            />
      </Col>
    </Row>
  </CardSection>




  <CardSection>
    <Row size={12}>
      <Col sm={5} md={4} lg={3}>
        <Text>
          Offer Price
        </Text>
      </Col>
      <Col sm={7} md={4} lg={3}>
          <Input
            placeholder="$-5555"
            // value={this.props.Offer}
            // onChangeText={text => this.props.propertyUpdate({ prop: 'Offer', value: text })}
            />
      </Col>
    </Row>
  </CardSection>



  <CardSection>
    <Row size={12}>
      <Col sm={5} md={4} lg={3}>
        <Text>
          Percentage Price
        </Text>
      </Col>
      <Col sm={7} md={4} lg={3}>
        <Input
          value='70%'
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
            // value={this.props.agent_email_address}
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
            // value={this.props.comments}
            // onChangeText={text => this.props.propertyUpdate({ prop: 'comments', value: text })}
            />
      </Col>
    </Row>
  </CardSection>



</Card>



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
