import * as React from 'react'
import  { useState } from "react";
import { Button } from 'react-native-elements';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'

import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import {
  View, Text,
  FlatList,
  // ListItem,
  StyleSheet,
  ActivityIndicator,  
  TouchableOpacity
} from 'react-native'

import CheckBox from '@react-native-community/checkbox';

import { Column as Col, Row } from 'react-native-flexbox-grid';
import { Card, CardSection, Input } from '../components/common';
// import Communications from 'react-native-communications';
// import { Checkbox } from 'react-native-paper';

const item = {
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  title: "First Item-1",
}; 

const MainView = (props) => {
  // console.log('23- inside MainView ListItem=', ListItem.Content);
  console.log('MainView - props =', props); 
  const { navigation } = props;

  // const [isSelectedE, setSelectionE] = useState(false);
  // const [isSelectedD, setSelectionD] = useState(false);
  // const [isSelectedC, setSelectionC] = useState(false);
  // const [isSelectedU, setSelectionU] = useState(false);
  
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (<>
  
<View>

<Button title="EMT/NEMT ?" onPress={() => console.log('something')} />
<Button title="Dentist ?" onPress={() => console.log('something')} />
<Button title="Urgent Care ?" onPress={() => console.log('something')} />
<Button title="Labs ?" onPress={() => console.log('something')} />

<Button
    title="--"
    type="outline"
  />

  <Button
    title="All Inbox (make it Flat List"
    type="outline"
    onPress={() => navigation.navigate('LeftAllRecords')}
    // onPress={() => navigation.navigate('HighPriority')}
  />  
  <Badge value="99+" status="primary" />

  <Button
    title="AllRecords "
    type="outline"
    onPress={() => navigation.navigate('AllRecords')}
  />

<Button
    title="DetailsView "
    type="outline"
    onPress={() => navigation.navigate('DetailView', {item})}
  />



<Button
    title="Login "
    type="outline"
    onPress={() => navigation.navigate('LoginScreen')}
  />

<Button
    title="Red Priority "
    type="outline"
    onPress={() => navigation.navigate('HighPriority')}
  />

<Button
    title="High Priority "
    type="outline"
    onPress={() => navigation.navigate('HighPriority')}
  />

<Button
    title="Mid Priority "
    type="outline"
    onPress={() => navigation.navigate('MidPriority')}
  />

<Button
    title="Multi Selector "
    type="outline"
    onPress={() => navigation.navigate('MultiSelector')}
  />



<Button
    title="Followup "
    type="outline"
  />

<Button
    title="Call Back "
    type="outline"
  />

</View>
</>


  )
}

function handleHelpPressAll() {
  console.log('click handleHelpPress'); 

}

function handleHelpPressRed() {
  console.log('click handleHelpPress'); 
}

function handleHelpPressHigh() {
  console.log('click handleHelpPress'); 
}

export default MainView; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxInput: {
    flexDirection: "row",
    marginBottom: 20,
  },
  label: {
    margin: 8,
  },
  testDiv:{
    width: '100%', 
    backgroundColor: '#f7ddbb',
  }
});
