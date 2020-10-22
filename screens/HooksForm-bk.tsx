import React from "react";
    
import { Text, TextInput, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Constants, WebBrowser } from 'expo';
import { Card, CardSection, Input } from '../components/common';
import { Column as Col, Row } from 'react-native-flexbox-grid'
import Communications from 'react-native-communications';
import { Auth, API, graphqlOperation } from 'aws-amplify'
import { updateRecord } from '../src/graphql/mutations'

import { useForm } from "react-hook-form";


export default function HooksForm(props) {
  console.log(' 6- in HooksForm -- props =', props );

      const { register, handleSubmit } = useForm({
        // defaultValues: preloadedValues
      });

      const onSubmit = (data) => {
        alert(JSON.stringify(data));
      };
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            ref={register}
            placeholder="Company Name"
            defaultValue={props.route.params.item.companyName} 
            type="text"
            name="companyName"
          />
          <input
            ref={register}
            placeholder="executive FirstName"
            defaultValue={props.route.params.item.executiveFirstName}
            type="text"
            name="executiveFirstName"
          />
          <button>Submit</button>
        </form>
      );
    }
    






    // Hooks bk  =========



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
