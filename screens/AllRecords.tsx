import React, { useState } from "react";
import { FlatList, View, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { listRecords } from '../src/graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'
import { onCreateRecord, onDeleteRecord, onUpdateRecord } from '../graphql/subscriptions'
import { useNavigation } from '@react-navigation/native';

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
  state = {
    loading: false,
    data: [],
    page: 1,
    seed: 1,
    error: null,
    query: '',
    fullData: [],
    posts: []
  }

  getPosts = async () => {
    const result = await API.graphql (graphqlOperation(listRecords))
    console.log(' 32- result = ', result ); 
    this.setState ({ psosts: result.data.listRecords.items})

};

  componentDidMount() {
    this.getPosts()
    // this.makeRemoteRequest()
  }

  render(props) {
    // const { navigate } = this.props.props.navigation;

    const Item = ({ item, onPress, style }) => (
      <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );


    // const [selectedId, setSelectedId] = useState(null);
    const handleSelect = () =>{
      console.log('hanlde slected clcieked'); 
    }

    const renderItem = ({ item }) => {
      // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

      return (
        <Item
          item={item}
          onPress={() => handleSelect() }
        />
      );
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          // data={this.props.posts}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          // extraData={selectedId}
        />
      </SafeAreaView>
    );
  }
}

export default AllRecords

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

