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

class CalendarScreen extends Component {

  constructor(props) {
      super(props);
      this.state = {};
      this.onDayPress = this.onDayPress.bind(this);
    }
  formatDate() {
    if (this.props.FollowUp_Call_Date){
      return this.props.FollowUp_Call_Date.slice(0,10);
    }

    return '';
  }

  static navigationOptions = ({ navigation }) => ({
      title: `${navigation.state.params.user}`,
  });

  render() {
    console.log('40 - CalendarScreen  this.props =', this.props );
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
            onChangeText={text => this.props.propertyUpdate({ prop: 'FollowUp_Call_Date', value: text })}
            />
        </CardSection>
      </Card>

      </ScrollView>
    );
  }

  onDayPress(day) {
    console.log('74-  date selected = ', moment.utc(day.dateString));
    console.log(moment.utc(day));
    // {text => this.props.propertyUpdate({ prop: 'FollowUp_Call_Date', value: text })}
    // {day => this.props.propertyUpdate({ prop: 'FollowUp_Call_Date', value: day })}
    this.setState({
      selected: day.dateString
    });
    console.log('80-  date day.dateString = ', moment.utc(day));
    console.log('81-  this.props  = ', this.props);
    console.log('85-  this.props  = ', this.props);

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
