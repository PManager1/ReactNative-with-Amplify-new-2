import React, { useState } from "react";
import { FlatList, View, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { listRecords } from '../src/graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'
import { onCreateRecord, onDeleteRecord, onUpdateRecord } from '../graphql/subscriptions'
import { useNavigation } from '@react-navigation/native';



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
    return (<View>
           <Text>  Hi, All records </Text>
      </View>
    )
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

