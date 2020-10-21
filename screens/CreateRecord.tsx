import React, { useState, Component } from 'react';
import { ListItem, Icon, Avatar } from 'react-native-elements'
import { View, Text, SafeAreaView, ScrollView, StyleSheet  } from 'react-native'
import { Button } from 'react-native-elements';
import { Card, CardSection, Input } from '../components/common';
import { Column as Col, Row } from 'react-native-flexbox-grid'

import { API, graphqlOperation, Auth } from 'aws-amplify'
import { createRecord } from '../src/graphql/mutations'


class CreateRecord extends Component {
    state = {
        companyName: "",   
        executiveFirstName: "",  
    }

    componentDidMount = async () => {
 
    }

    handleChangePost = event => this.setState({
        [event.target.name] : event.target.value 
        })

   handleAddPost = async event => {
        event.preventDefault()

        const input = {
             companyName: this.state.companyName,
             executiveFirstName: this.state.executiveFirstName,
             createdAt: new Date().toISOString() 
        }

        await API.graphql(graphqlOperation(createRecord, { input }))

        this.setState({ companyName: "", executiveFirstName: ""})
   }      

        render() {

            return(
                <>
                <form className="add-post"  onSubmit={this.handleAddPost} >
                    <Card>
                    <CardSection>

                <input style={{ font: '19px'}} 
                    type="text" 
                    placeholder="companyName"
                    name="companyName"
                    required
                    value={this.state.companyName}
                    onChange={this.handleChangePost}
                />
 </CardSection>

 <CardSection>
                <input 
                  type="text"
                  name="executiveFirstName"
                  rows="3"
                  cols="40"
                  required
                  placeholder="executiveFirstName"
                  value={this.state.executiveFirstName}
                  onChange={this.handleChangePost}
                  />
</CardSection>                  
            

    <input type="submit"
                  className="btn"
                  style={{ fontSize: '19px'}}/>

                    </Card>
                </form>
                </>
            );

        }

    }
    export default CreateRecord;