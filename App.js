import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import PageOne from './screens/LandingPages/PageOne';
import PageTwo from './screens/LandingPages/PageTwo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import LastPage from './screens/LandingPages/LastPage';
import LoginPage from './screens/LandingPages/LoginPage';

const Stack = createNativeStackNavigator();




export default function App() {
  const [fontloaded, setFontLoaded] = useState(false)
  const fontload = (async () => {
    await Font.loadAsync({
      "PoppinsBold": require("./assets/Fonts/PoppinsBold.ttf"),
      "Andika": require("./assets/Fonts/Andika-Regular.ttf"),


    });
    setFontLoaded(true)
  })
  useEffect(() => {

    fontload()

  }, [])

  if (fontloaded) {
    return (
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator>

          <Stack.Screen name="PageOne" component={PageOne} />

          <Stack.Screen name="PageTwo" component={PageTwo} />
          <Stack.Screen name="LastPage" component={LastPage} />
          <Stack.Screen name="LoginPage" component={LoginPage} />

        </Stack.Navigator>
      </NavigationContainer>

    );
  } else {
    return (<ActivityIndicator>

    </ActivityIndicator>)
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
