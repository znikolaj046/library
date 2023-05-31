import React from "react";
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Events from "../screens/Events";
import Eventtest from "../screens/Eventtest";
import Search from "../screens/Search";
import { Ionicons } from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Events" options={({
            title: "Мероприятия", 
            tabBarIcon: info => (
              <Ionicons name='ios-star' size={25} color="#252F49" />
            ),
            headerStyle : styles.headerStyle,
            headerTitleStyle : styles.headerTitleStyle
        })} component={Events} />

        <Tab.Screen name="Search" options={({
            title:'Поиск книг', 
            tabBarIcon: info => (
              <Ionicons name='ios-albums' size={25} color="#252F49" />
            ),
            headerStyle : styles.headerStyle,
            headerTitleStyle : styles.headerTitleStyle
        })} component={Search} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  headerTitleStyle: {
    color:'#E6AB6B',
    fontSize:15
  }, 
  headerStyle: {
    backgroundColor:'#252F49'
  },
});


export default TabNavigator;