import React, { useState } from "react";
import { FlatList, View, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { listRecords } from '../src/graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'
import { onCreateRecord, onDeleteRecord, onUpdateRecord } from '../graphql/subscriptions'

// import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
// import { withNavigation } from 'react-navigation';

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];



class AllRecords extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      query: '',
      sample: 'the sample',
      fullData: [],
      posts: []
    }
  }

  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    console.log('48,', state);
    console.log('49,', props);
  };

  
  getPosts = async () => {
    const result = await API.graphql (graphqlOperation(listRecords))
    console.log(' 32- result = ', result ); 
    this.setState ({ posts: result.data.listRecords.items})

};

  componentDidMount() {
    this.getPosts()
    // this.makeRemoteRequest()
  }

  render(props) {
    // console.log('64-props =', this.props.navigation.navigate); 
    // console.log('68- this.state  = ', this.state ); 
    
    // const { navigate } = this.props.props.navigation;
    
    // console.log('61- navigate  = ', navigate ); 
    // console.log('43- posts = ' this.state );

    
    // const { navigation } = props;

    const Item = ({ item, onPress, style }) => (
      <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.companyName}</Text>
        <Text style={styles.exname}>{item.executiveFirstName}</Text>
      </TouchableOpacity>
    );

    // const [selectedId, setSelectedId] = useState(null);
    const handleSelect = (item) => {
      console.log('73--handle slected clicked  - id=', item); 
      this.props.navigation.navigate('DetailView',{item});
    }

    const renderItem = ({ item }) => {
      // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

      return (
              <Item
                    item={item}
                    onPress={() => handleSelect(item) }
                />
        
      );
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.posts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          // extraData={selectedId}
        />
      </SafeAreaView>
    );
  }
}

export default AllRecords

// export default withNavigation(AllRecords);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f9c2ff'
  },
  title: {
    fontSize: 32,
  },
  exname: {
    fontSize: 16,
  },
});

