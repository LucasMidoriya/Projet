import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Login from './Components/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  const [user, setUser] = useState(null);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login">
          {(props) => <Login setUser={setUser} navigation={props.navigation} />}
         </Stack.Screen>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}