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
  Platform,
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
    linkscreen: 'AllRecords',
  },
  {
    id: '58694a0f-3da1-4731f-bd96-145571e29d72',
    title: 'Flatlist',
    linkscreen: 'Flattlist'
  },
  {
    id: '58694a0f-3da1-4734631f-bd96-145571e29d72',
    title: 'Calendar',
    linkscreen: 'CalendarScreen',
  },
  {
    id: '58694a0f-3da1-475771f-bd96-145571e29d72',
    title: 'Charts',
    linkscreen: 'CalendarScreen',
  },
  {
    id: '586902394a0f-3da1-471789f-bd96-145571e29d72',
    title: 'Hooks Form ex ',
    linkscreen: 'HooksForm',
  },
  {
    id: '5568694a0f-3da1-475431f-bd96-145571e29d72',
    title: 'Create Record',
    linkscreen: 'CreateRecord',
  },  
  // new 
  {
    id: '58694a120f-3da1-475431f-bd96-145571e29d72',
    title: 'Deails View',
    linkscreen: 'CreateRecord',
  },
  {
    id: '5869894a0f-3da1-475431f-bd96-145571e29d72',
    title: 'Login',
    linkscreen: 'CreateRecord',
  },
  {
    id: '5856694a0f-3da1-475431f-bd96-145571e29d72',
    title: 'Red Priority',
    linkscreen: 'CreateRecord',
  },
  {
    id: '5869784a0f-3da1-475431f-bd96-145571e29d72',
    title: 'High Priority- calendar ',
    linkscreen: 'HighPriority',
  },
  {
    id: '58694a0f-3da1-47785431f-bd96-145571e29d72',
    title: 'Mid Priority',
    linkscreen: 'MidPriority',
  },
  {
    id: '58694a0f-3da15-475431f-bd96-145571e29d72',
    title: 'Multi Selector',
    linkscreen: 'MultiSelector',
  },
  {
    id: '5869454a0f-3da1-475431f-bd96-145571e29d72',
    title: 'Show Modal ',
    linkscreen: 'ShowModal',
  },
  {
    id: '586945a0f-3da1-475431f-bd96-145571e29d72',
    title: 'Comment Screen',
    linkscreen: 'CommentScreen',
  },
  {
    id: '5869234a0f-3da1-475431f-bd96-145571e29d72',
    title: 'Model Demo',
    linkscreen: 'ModalDemo',
  },
  // {
  //   id: '5869234a0f-3d5a1-475431f-bd96-145571e29d72',
  //   title: 'Dialog Screen',
  //   linkscreen: 'DialogScreen',
  // },
  {
    id: '5869234a0f-3234d90a1-475431f-bd96-145571e29d72',
    title: 'Call Back',
    linkscreen: 'CreateRecord',
  },
];


const MainView = (props) => {
  // console.log('23- inside MainView ListItem=', ListItem.Content);
  console.log('MainView - props =', props); 
  const { navigation } = props;

  const [toggleCheckBox, setToggleCheckBox] = useState(false)


  const handleSelect = (item) => {
    console.log('73-- handleSelect clicked  - item=', item.linkscreen); 
    const link = item.linkscreen;
        props.navigation.navigate(link);
    // onPress={() => navigation.navigate('Flattlist')}
  }
  
  const renderItem = ({ item }) => (
    <Item title={item.title} linkscreen={item.linkscreen} 
    onPress={() => handleSelect(item) }
    />
  );
  
  const Item = ({ item, title, linkscreen, id, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <View style={styles.listItem}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{title}                                                           </Text>
          <Text style={styles.subtitle}>{linkscreen}</Text>
  
        </View>
      </View>
    </TouchableOpacity>
  );

  

  
return (<>
  
<ScrollView style={styles.sContainer}>
  <View>
  <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
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

    marginTop: 11,
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 3,
    paddingBottom: 3,

    backgroundColor: 'white',
    borderWidth: Platform.OS === 'ios' ? .5 : 0,
    borderRadius: 2,
    borderColor:  Platform.OS === 'ios' ? 'rgb(225, 225, 225)' : 'rgba(0,0,0,.0)',

    // shadow
    // shadowColor: "#000",
    // shadowOffset: {
    //     width: 0,
    //     height: 1,
    // },
    // shadowOpacity: 0.15,
    // shadowRadius: 2.5,
    // elevation: 2,
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
