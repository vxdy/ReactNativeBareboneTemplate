import React, { Component } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { createDrawerNavigator } from "@react-navigation/drawer";

class Initializer extends Component {

  render() {

    const Drawer = createDrawerNavigator();

    return (
      <>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen}
                          options={{headerShown:true}}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Welcome to the Centrapi React Native Template</Text>
    </View>
  )
}

export default Initializer;
