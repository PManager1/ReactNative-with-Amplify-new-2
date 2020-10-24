import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import { Card, Input, CardSection, Button, Confirm } from '../components/common';
import moment from 'moment';
import { Calendar } from 'react-native-calendars';

import { API, graphqlOperation, Auth } from 'aws-amplify'
import { updateRecord } from '../src/graphql/mutations'


class CalendarScreen extends Component {

  constructor(props) {
      super(props);
      this.state = {};
      this.onDayPress = this.onDayPress.bind(this);
    }


  formatDate() {
    console.log('27--formatDate called');
    if (this.props.FollowUp_Call_Date){
      return this.props.FollowUp_Call_Date.slice(0,10);
    }

    return '';
  }

  handleCalendarSave = (props) => {
    console.log('36--handleCalendarSave  - props=', props); 
      // props.navigation.navigate('CalendarScreen', props.route.params.item.id );
  }

onSave = async (data) => {
  console.log(' 41--onSave--props =', this.props); 
  console.log(' 42--onSave--data =', data); 
  
    const input = {
                    id: this.props.route.params,
                    followupDate: data,
                  }
      console.log(input);
      await API.graphql(graphqlOperation(updateRecord, { input }))
}


  static navigationOptions = ({ navigation }) => ({
      title: `${navigation.state.params.user}`,
  });

  render(props) {
    console.log('56- CalendarScreen  this.props =', this.props );

    const id = this.props.route.params; 
    console.log(' 59- id=', id );

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Pick your Follow Up date</Text>
        <Calendar
          current={this.formatDate()}
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{[this.state.selected]: {selected: true}}}
        />

      <Card>
        <CardSection>
          <Input
            label="FollowUp"
            placeholder="comments"
            value={this.formatDate()}
            // onChangeText={text => this.props.propertyUpdate({ prop: 'FollowUp_Call_Date', value: text })}
            // onChangeText={text => this.props.onSave({ prop: 'FollowUp_Call_Date', value: text })}
            />
        </CardSection>
      </Card>

      </ScrollView>
    );
  }

  onDayPress(day) {
    console.log('92-  date selected = ', moment.utc(day.dateString));
    console.log(moment.utc(day));
    // {text => this.props.propertyUpdate({ prop: 'FollowUp_Call_Date', value: text })}
    // {day => this.props.propertyUpdate({ prop: 'FollowUp_Call_Date', value: day })}
    this.setState({
      selected: day.dateString
    });
    // console.log('99-  date day.dateString = ', moment.utc(day));
    // console.log(' 991 - day.dateString =', moment.utc(day).valueOf() );
    // console.log(' 992 - day.dateString =', moment(day).valueOf() );
    console.log(' 993 - day.dateString =', moment.utc(day).format() );
    
    
    // call Update function

    this.onSave(  moment.utc(day).format()  ); 
    // this.props.propertyUpdate({ prop: 'FollowUp_Call_Date', value: moment.utc(day.dateString).format() });
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});

export default CalendarScreen;













//
