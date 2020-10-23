import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

import MainView from '../screens/MainView';
import HighPriority from '../screens/HighPriority';
import LowPriority from '../screens/LowPriority';
import MidPriority from '../screens/MidPriority';
import CreateRecord from '../screens/CreateRecord';
import HooksForm from '../screens/HooksForm';
import Charts from '../screens/Charts';
import CalendarScreen from '../screens/CalendarScreen';
import ModalDemo from '../screens/ModalDemo';

import CommentScreen from '../screens/CommentScreen';

// // import CalendarEvent from '../screens/CalendarEvent';
// import RecordsMainView from '../screens/RecordsMainView';
// import LeftAllRecords from '../screens/LeftAllRecords';
import DetailView from '../screens/DetailView';
import AllRecords from '../screens/AllRecords';

// import LoginScreen from '../screens/LoginScreen';
import MultiSelector from '../screens/MultiSelector';
// import DateTimePicker from '../screens/DateTimePicker';
import ShowModal from '../screens/ShowModal';
import Flattlist from '../screens/Flattlist';



const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />


      <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={MainView}
        options={{ headerTitle: 'Tab One Title' }}
      />
      
      <TabOneStack.Screen name="HighPriority" component={HighPriority} />
      <TabOneStack.Screen name="MidPriority" component={MidPriority} />
      <TabOneStack.Screen name="CreateRecord" component={CreateRecord} />
      <TabOneStack.Screen name="AllRecords" component={AllRecords} />
      <TabOneStack.Screen name="DetailView" component={DetailView} />
      <TabOneStack.Screen name="HooksForm" component={HooksForm} />
      <TabOneStack.Screen name="Charts" component={Charts} />
      <TabOneStack.Screen name="CalendarScreen" component={CalendarScreen} />
      <TabOneStack.Screen name="MultiSelector" component={MultiSelector} />
      <TabOneStack.Screen name="ShowModal" component={ShowModal} />
      <TabOneStack.Screen name="ModalDemo" component={ModalDemo} />
      <TabOneStack.Screen name="CommentScreen" component={CommentScreen} />
      <TabOneStack.Screen name="Flattlist" component={Flattlist} />
      
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
