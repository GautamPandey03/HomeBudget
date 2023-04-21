/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BudgetAdd from './components/BudgetAdd';
import ShowBudget from './components/ShowBudget';




const Stack=createNativeStackNavigator();

const App=()=>{
  
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={BudgetAdd}/>
      <Stack.Screen name='Budget' component={ShowBudget}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
