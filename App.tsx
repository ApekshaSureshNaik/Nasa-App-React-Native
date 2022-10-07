import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './components/Home';
import About from './components/About';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name="Home" component={Home} />
  <Stack.Screen name="About" component={About} options={{title:'About Asteriod'}} />
 </Stack.Navigator>
  </NavigationContainer>
  );
}
