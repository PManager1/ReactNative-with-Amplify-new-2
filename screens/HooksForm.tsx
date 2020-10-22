
// export default function HooksForm(props) {


import React, { useState, Component } from 'react';
import { ListItem, Icon, Avatar } from 'react-native-elements'
import { View, Text, SafeAreaView, ScrollView, StyleSheet  } from 'react-native'
import { Card, CardSection, Input } from '../components/common';
import { Column as Col, Row } from 'react-native-flexbox-grid'
import { API, graphqlOperation, Auth } from 'aws-amplify'

import { updateRecord } from '../src/graphql/mutations'
import { TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function HooksForm(props) {
  const { control, handleSubmit, errors } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        const input = {
            id: props.route.params.item.id,
             companyName: data.companyName,
             executiveFirstName: data.executiveFirstName,
            //  lastUpdated: new Date().toISOString() 
        }
        console.log(input);
        await API.graphql(graphqlOperation(updateRecord, { input }))
   }      

  return (
<ScrollView>
    <View>  
      <Card>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
        <CardSection>  
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
          </CardSection>
        )}
        name="companyName"
        rules={{ required: true }}
        defaultValue={props.route.params.item.companyName}
      />

 <CardSection>
   
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (

        <CardSection>  
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        </CardSection>  
        )}
        name="executiveFirstName"
        defaultValue={props.route.params.item.executiveFirstName}
      />
 </CardSection>
</Card>             

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
</ScrollView>

  );
}



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
    viewContainerStyle:{
      height: 40,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      // width: width,
    },
    input:{
    color: '#000',
    backgroundColor: '#FFFFFF',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
    }
  });

  