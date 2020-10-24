import React, { useState, Component } from 'react';
import { ListItem, Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, SafeAreaView, KeyboardAvoidingView,  ScrollView, StyleSheet } from 'react-native'
import { Card, CardSection, Input } from '../components/common';
import { Column as Col, Row } from 'react-native-flexbox-grid'
import { API, graphqlOperation, Auth } from 'aws-amplify'

import { updateRecord } from '../src/graphql/mutations'
import { TextInput, 
  // Button,
   Alert, 
   Platform } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Communications from 'react-native-communications';
import SubmitButton from '../forms/SubmitButton'
import { Button } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

export default function DetailView(props) {

  const { navigation } = props;
  console.log(' 26- props', props);

const { control, handleSubmit, errors } = useForm();

const onPhonePress = (p) =>{
  Communications.phonecall(p, true);
}


  const onCalendarPress = (p) =>{
    Communications.phonecall(p, true);
  }

  const handleDelete = () =>{
    console.log(' handleDelete called'); 
  }

  const onDelete = (data) =>{
    console.log(' delete called'); 
  }

const onSubmit = async (data) => {
      console.log(data);

      const input = {
                      id: props.route.params.item.id,
                      companyName: data.companyName,
                      executiveFirstName: data.executiveFirstName,
                      executiveLastName: data.executiveLastName,
                      contactPerson: data.contactPerson,
                      followupDate: data.followupDate,
                      comment: data.comment,
                      email: data.email,
                      status: data.status,
                      priorities: data.priorities,
                      phone_no: data.phone_no,
                      address: data.address,
                      cell_phone: data.cell_phone,
                      city: data.city,
                      state: data.state,
                      ownerStatus: data.ownerStatus,
                      Linkedin: data.Linkedin,
                      business_size: data.business_size,
                      // lastUpdated: new Date().toISOString()
                    }
        console.log(input);
        await API.graphql(graphqlOperation(updateRecord, { input }))
}

return (
<ScrollView>
<SafeAreaView>
<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
  <View>
    <Button title="Submit" onPress={handleSubmit(onSubmit)} />

    <Card>
      <Text  style={styles.textStyle}> Company Name</Text>
      <CardSection>       
      <View style={styles.viewContainerStyle}>
        <Controller control={control} render={({ onChange, onBlur, value })=> (
          <TextInput style={styles.input} onBlur={onBlur} onChangeText={value=> onChange(value)}
            value={value}
            />
            )}
            name="companyName"
            // rules={{ required: true }}
            defaultValue={props.route.params.item.companyName}
            />
            </View>
      </CardSection>

      <Text style={styles.textStyle}> Exe First Name</Text>
      <CardSection>
      <View style={styles.viewContainerStyle}>
        <Controller control={control} render={({ onChange, onBlur, value })=> (
          <TextInput style={styles.input} onBlur={onBlur} onChangeText={value=> onChange(value)}
            value={value}
            />
            )}
            name="executiveFirstName"
            // rules={{ required: true }}
            defaultValue={props.route.params.item.executiveFirstName}
            />
            </View>
      </CardSection>

      <Text style={styles.textStyle}> Last Name</Text>
      <CardSection>        
      <View style={styles.viewContainerStyle}>
        <Controller control={control} render={({ onChange, onBlur, value })=> (
          <TextInput style={styles.input} onBlur={onBlur} onChangeText={value=> onChange(value)}
            value={value}
            />
            )}
            name="executiveLastName"
            // rules={{ required: true }}
            defaultValue={props.route.params.item.executiveLastName}
            />
            </View>
      </CardSection>


      <Text style={styles.textStyle}> Contact Person</Text>
      <CardSection>        
      <View style={styles.viewContainerStyle}>
        <Controller control={control} render={({ onChange, onBlur, value })=> (
          <TextInput style={styles.input} onBlur={onBlur} onChangeText={value=> onChange(value)}
            value={value}
            />
            )}
            name="contactPerson"
            // rules={{ required: true }}
            defaultValue={props.route.params.item.contactPerson}
            />
            </View>
      </CardSection>

      <Text style={styles.textStyle}> Phone No</Text>
      <CardSection>   
      <Row size={12}>
      <Col sm={11} md={9} lg={11} >
      <View style={styles.viewContainerStyle}>
        <Controller control={control} render={({ onChange, onBlur, value })=> (
          <TextInput style={styles.input} onBlur={onBlur} onChangeText={value=> onChange(value)}
            value={value}
            />
            )}
            name="phone_no"
            // rules={{ required: true }}
            defaultValue={props.route.params.item.phone_no}
            />
            </View>
      </Col>            
      <Col sm={1} md={1} lg={1}>
            <Icon name="phone"  size={30} color="#228B22" onPress= {()=> onPhonePress( props.route.params.item.phone_no  )}  />

      </Col>           
        </Row>                 
      </CardSection> 



      <Text style={styles.textStyle}> Status T </Text>
      <CardSection>   
      <Row size={12}>
      <Col sm={11} md={9} lg={11} >
      <View style={styles.viewContainerStyle}>
        <Controller control={control} render={({ onChange, onBlur, value })=> (
          <TextInput style={styles.input} onBlur={onBlur} onChangeText={value=> onChange(value)}
            value={value}
            />
            )}
            name="status"
            // rules={{ required: true }}
            defaultValue={props.route.params.item.status}
            />
            </View>
      </Col>            
      <Col sm={1} md={1} lg={1}>
            <Icon name="shield"  size={30} color="#FFB6C1"  onPress={() => props.navigation.navigate('MultiSelector') }  />

      </Col>           
        </Row>                 
      </CardSection> 



 <Text style={styles.textStyle}> Direct Cell </Text>
      <CardSection>        
      <View style={styles.viewContainerStyle}>
        <Controller control={control} render={({ onChange, onBlur, value })=> (
          <TextInput style={styles.input} onBlur={onBlur} onChangeText={value=> onChange(value)}
            value={value}
            />
            )}
            name="cell_phone"
            // rules={{ required: true }}
            defaultValue={props.route.params.item.cell_phone}
            />
            </View>
      </CardSection>  



 <Text style={styles.textStyle}> Owner Status</Text>
      <CardSection>        
      <View style={styles.viewContainerStyle}>
        <Controller control={control} render={({ onChange, onBlur, value })=> (
          <TextInput style={styles.input} onBlur={onBlur} onChangeText={value=> onChange(value)}
            value={value}
            />
            )}
            name="ownerStatus"
            // rules={{ required: true }}
            defaultValue={props.route.params.item.ownerStatus}
            />
            </View>
      </CardSection>   


      <Text style={styles.textStyle}> Follow up Date</Text>
      <CardSection>   
      <Row size={12}>
      <Col sm={11} md={9} lg={11} >
      <View style={styles.viewContainerStyle}>
        <Controller control={control} render={({ onChange, onBlur, value })=> (
          <TextInput style={styles.input} onBlur={onBlur} onChangeText={value=> onChange(value)}
            value={value}
            />
            )}
            name="followupDate"
            // rules={{ required: true }}
            defaultValue={props.route.params.item.followupDate}
            />
            </View>
      </Col>            
      <Col sm={1} md={1} lg={1}>
            <Icon name="calendar"  size={30} color="#FFB6C1"  onPress={() => props.navigation.navigate('CalendarScreen',   123   ) }  />

      </Col>           
        </Row>                 
      </CardSection> 



      <Text style={styles.textStyle}> Comment </Text>
      <CardSection>        
      <View style={styles.viewContainerStyle}>
        <Controller control={control} render={({ onChange, onBlur, value })=> (
          <TextInput style={styles.input} onBlur={onBlur} onChangeText={value=> onChange(value)}
            value={value}
            />
            )}
            name="comment"
            // rules={{ required: true }}
            defaultValue={props.route.params.item.comment}
            />
            </View>
      </CardSection> 



      <Text style={styles.textStyle}> Comment CommentScreen</Text>
      <CardSection>   
      <Row size={12}>
      <Col sm={11} md={9} lg={11} >
      <View style={styles.viewContainerStyle}>
        <Controller control={control} render={({ onChange, onBlur, value })=> (
          <TextInput style={styles.input} onBlur={onBlur} onChangeText={value=> onChange(value)}
            value={value}
            />
            )}
            name="comment"
            // rules={{ required: true }}
            defaultValue={props.route.params.item.comment}            />
            </View>
      </Col>            
      <Col sm={1} md={1} lg={1}>
            <Icon name="sticky-note"  size={30} color="#FFB6C1"  onPress={() => props.navigation.navigate('CommentScreen') }  />

      </Col>           
        </Row>                 
      </CardSection> 


      <Text style={styles.textStyle}> Email </Text>
      <CardSection>        
      <View style={styles.viewContainerStyle}>
        <Controller control={control} render={({ onChange, onBlur, value })=> (
          <TextInput style={styles.input} onBlur={onBlur} onChangeText={value=> onChange(value)}
            value={value}
            />
            )}
            name="email"
            // rules={{ required: true }}
            defaultValue={props.route.params.item.email}
            />
            </View>
      </CardSection>   


      <Text style={styles.textStyle}> City  </Text>
      <CardSection>        
      <View style={styles.viewContainerStyle}>
        <Controller control={control} render={({ onChange, onBlur, value })=> (
          <TextInput style={styles.input} onBlur={onBlur} onChangeText={value=> onChange(value)}
            value={value}
            />
            )}
            name="city"
            // rules={{ required: true }}
            defaultValue={props.route.params.item.city}
            />
            </View>
      </CardSection>   


      <Text style={styles.textStyle}> Street Address  </Text>
      <CardSection>        
      <View style={styles.viewContainerStyle}>
        <Controller control={control} render={({ onChange, onBlur, value })=> (
          <TextInput style={styles.input} onBlur={onBlur} onChangeText={value=> onChange(value)}
            value={value}
            />
            )}
            name="address"
            // rules={{ required: true }}
            defaultValue={props.route.params.item.address}
            />
            </View>
      </CardSection>   


      <Text style={styles.textStyle}> State </Text>
      <CardSection>        
      <View style={styles.viewContainerStyle}>
        <Controller control={control} render={({ onChange, onBlur, value })=> (
          <TextInput style={styles.input} onBlur={onBlur} onChangeText={value=> onChange(value)}
            value={value}
            />
            )}
            name="state"
            // rules={{ required: true }}
            defaultValue={props.route.params.item.state}
            />
            </View>
      </CardSection>  

    </Card>

    <Button title="Delete-Not workin" onPress={handleDelete(onDelete)} />

  </View>
  </KeyboardAvoidingView>
</SafeAreaView>  
</ScrollView>
);
}



const styles = StyleSheet.create({
        textStyle:{
          color: '#8795fa'
        },
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
        viewContainerStyle:{
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // width: width,
        },
        input:{
        // color: '#000',
        // color:'#5E90AF',
        color:'#184662',
        backgroundColor: '#FFFFFF',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
        }
});
