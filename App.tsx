import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoBlue from './TodoApp/TodoBlue'
import TodoWhite from './TodoApp/TodoWhite'
import Home from './TodoApp/Home';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        {/* Home */}
        <Stack.Screen name='Home' component={Home} />

        {/* Todo White */}
        <Stack.Screen name='Todo White' component={TodoWhite} />

        {/* Todo Blue */}
        <Stack.Screen name='Todo Blue' component={TodoBlue} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;