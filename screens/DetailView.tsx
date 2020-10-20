// Bring in action from api etc here. 
import React, { useState } from 'react';
import Form from '../forms/Form';
// import { login } from '../api/authentication';
// import { setToken } from '../api/token';
import { Text, TextInput, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Constants, WebBrowser } from 'expo';
import { Card, CardSection, Input } from '../../components/common';
import { Column as Col, Row } from 'react-native-flexbox-grid'

// const LoginScreen = ({ navigation }) => {
    const DetailView = (props) => {   

      console.log('12- props in Detials View recived =' , props); 
      const { CompanyName , executiveFirstName } = props.route.params.item;
      
      console.log('16 - CompanyName = ', CompanyName); 
      console.log(' 17 - executiveFirstName = ', executiveFirstName); 
      console.log(' 18 - Full Item  = ', props.route.params.item); 


      const _handlePressButtonAsync = async () => {
        console.log('32-  clicking handlePress Button Async');
        let result = await WebBrowser.openBrowserAsync('https://www.google.com/search?q=123+main+street+new+york+ny&oq=123+main+street%2C+&aqs=chrome.1.69i57j0l5.4708j0j1&sourceid=chrome&ie=UTF-8');
        this.setState({ result });
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
           
              <Row size={12}>
                <Col sm={1} md={4} lg={3}>

                </Col>

                <Col sm={2} md={4} lg={3}>
                <Icon
                      name="google"
                      size={30}
                      color="#1E90FF"
                    />
                </Col>
                </Row>

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
