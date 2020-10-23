import * as React from 'react'
import  { useState } from "react";
import { Button } from 'react-native-elements';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'

import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import {
  View, Text,
  FlatList,
  SafeAreaView,
  ScrollView,
  Image,
  // ListItem,
  StyleSheet,
  ActivityIndicator,  
  TouchableOpacity
} from 'react-native'

import CheckBox from '@react-native-community/checkbox';


const DATA = [
  {
    id: 'bd7acbea-c1b1-456c2-aed5-3ad53abb28ba',
    title: 'All Records',
    linkscreen: 'AllRecords',
  },
  {
    id: '3ac68afc-c605-4238d3-a4f8-fbd91aa97f63',
    title: 'Today',
  },
  {
    id: '58694a0f-3da1-4731f-bd96-145571e29d72',
    title: 'Flatlist',
  },
  {
    id: '58694a0f-3da1-4734631f-bd96-145571e29d72',
    title: 'Calendar',
  },
  {
    id: '58694a0f-3da1-475771f-bd96-145571e29d72',
    title: 'Charts',
  },
  {
    id: '58694a0f-3da1-471789f-bd96-145571e29d72',
    title: 'Hooks Form ex ',
  },
  {
    id: '58694a0f-3da1-475431f-bd96-145571e29d72',
    title: 'Create Record',
  },
];
s
const renderItem = ({ item }) => (
  <Item title={item.title} linkscreen={item.linkscreen} />
);

const Item = ({ item, title, linkscreen, id, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <View style={styles.listItem}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{linkscreen}</Text>

      </View>
    </View>
  </TouchableOpacity>
);

const MainView = (props) => {
  // console.log('23- inside MainView ListItem=', ListItem.Content);
  console.log('MainView - props =', props); 
  const { navigation } = props;

  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  
return (<>
  
<ScrollView style={styles.sContainer}>
  <View>
  <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </View>


<View>
<Button title="EMT/NEMT ?" onPress={() => console.log('something')} />

<Button title="Dentist ?" onPress={() => console.log('something')} />
<Button title="Urgent Care ?" onPress={() => console.log('something')} />
<Button title="Labs ?" onPress={() => console.log('something')} />

  <Badge value="99+" status="primary" />

  <Button
    title="AllRecords (Flat it) "
    type="outline"
    onPress={() => navigation.navigate('AllRecords')}
  />

<Button
    title="Flattlist"
    type="outline"
    onPress={() => navigation.navigate('Flattlist')}
  />

<Button
    title="Today"
    type="outline"
    onPress={() => navigation.navigate('AllRecords')}
  />

<Button
    title="Calendar"
    type="outline"
    onPress={() => navigation.navigate('CalendarScreen')}
  />


<Button
    title="Charts"
    type="outline"
    onPress={() => navigation.navigate('Charts')}
  />

  
  <Button
    title="Hooks-form-ex "
    type="outline"
    onPress={() => navigation.navigate('HooksForm')}
  />

<Button
    title="Create Record "
    type="outline"
    onPress={() => navigation.navigate('CreateRecord')}
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
    title="Mid Priority(TEST)"
    type="outline"
    onPress={() => navigation.navigate('MidPriority')}
  />

<Button
    title="Multi Selector "
    type="outline"
    onPress={() => navigation.navigate('MultiSelector')}
  />
<Button
    title="ShowModal"
    type="outline"
    onPress={() => navigation.navigate('ShowModal')}
  />

<Button
    title="CommentScreen"
    type="outline"
    onPress={() => navigation.navigate('CommentScreen')}
  />

<Button
    title="ModalDemo"
    type="outline"
    onPress={() => navigation.navigate('ModalDemo')}
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

</ScrollView>
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
  sContainer: {
    flex: 1,
  },
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",

    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#F5F5F5',
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
  },

  //New

  listItem: {
    flex: 1,
    height: 75,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#d6d7da',
    padding: 6,
  },
  imageWrapper: {
    padding: 5,
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    margin: 6,
    marginLeft: 77,
  },
  subtitle: {
    fontSize: 12,
    textAlign: 'left',
    margin: 6,
    // marginTop: 30,
    marginLeft: 80,
  },
});
