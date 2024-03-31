import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button, StyleSheet } from 'react-native';

import CategoryScreen from './screens/CategoryScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return 
  <Drawer.Navigator>
    <Drawer.Screen name="Categories" component={CategoryScreen}/>
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
    <StatusBar style='light' />
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: "#351401"},
            headerTintColor: "white",
            contentStyle: {backgroundColor: "#3f2f25"}
        }}
      >
        <Stack.Screen 
          name="DrawerScreen" 
          component={DrawerNavigator}
          options={{
           // title: "Meals Categories"
          }}
        />
        <Stack.Screen
          name="MealsOverview" 
          component={MealsOverviewScreen} 
          //options={({ route,navigation }) => {
          // const catId = route.params.categoryId;
          //  return {
          //    title: catId
          //  }
          //}}
        />
        <Stack.Screen
          name="MealDetails"
          component={MealDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
