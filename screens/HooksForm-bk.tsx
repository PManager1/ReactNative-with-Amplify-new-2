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
    