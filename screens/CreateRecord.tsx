import React, { useState, Component } from 'react';
import { ListItem, Icon, Avatar } from 'react-native-elements'
import { View, Text, SafeAreaView, ScrollView, StyleSheet  } from 'react-native'
import { Card, CardSection, Input } from '../components/common';
import { Column as Col, Row } from 'react-native-flexbox-grid'
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { createRecord } from '../src/graphql/mutations'
import { TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function CreateRecord() {
  const { control, handleSubmit, errors } = useForm();

//   const onSubmit = data => console.log(data);
    const onSubmit = async (data) => {
        console.log(data);
        const input = {
             companyName: data.firstName,
             executiveFirstName: data.lastName,
             createdAt: new Date().toISOString() 
        }
        console.log(input);
        await API.graphql(graphqlOperation(createRecord, { input }))
   }      

  return (
<ScrollView>
    <View>               
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
        name="firstName"
        rules={{ required: true }}
        defaultValue="1234--first"
      />
      {errors.firstName && <Text>This is required.</Text>}

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
        name="lastName"
        defaultValue=""
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
</ScrollView>

  );
}



// class CreateRecord extends Component {
//     state = {
//         companyName: "",   
//         executiveFirstName: "",  
//     }

//     componentDidMount = async () => {
 
//     }

//     handleChangePost = event => this.setState({
//         [event.target.name] : event.target.value 
//         })

//    handleAddPost = async event => {
//         event.preventDefault()

//         const input = {
//              companyName: this.state.companyName,
//              executiveFirstName: this.state.executiveFirstName,
//              createdAt: new Date().toISOString() 
//         }

//         await API.graphql(graphqlOperation(createRecord, { input }))
//         this.setState({ companyName: "", executiveFirstName: ""})
//    }      

//         render() {

//             return(
//                 <>
//                 <form className="add-post"  onSubmit={this.handleAddPost} >
//                     <Card>
//                     <CardSection>

//                 <input style={{ font: '19px'}} 
//                     type="text" 
//                     placeholder="companyName"
//                     name="companyName"
//                     required
//                     value={this.state.companyName}
//                     onChange={this.handleChangePost}
//                 />
//  </CardSection>

//  <CardSection>
//                 <input 
//                   type="text"
//                   name="executiveFirstName"
//                   rows="3"
//                   cols="40"
//                   required
//                   placeholder="executiveFirstName"
//                   value={this.state.executiveFirstName}
//                   onChange={this.handleChangePost}
//                   />
// </CardSection>                  
            

//     <input type="submit"
//                   className="btn"
//                   style={{ fontSize: '19px'}}/>

//                     </Card>
//                 </form>
//                 </>
//             );

//         }

//     }
//     export default CreateRecord;

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
