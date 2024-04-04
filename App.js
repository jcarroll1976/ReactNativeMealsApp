import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Provider } from 'react-redux';

import CategoryScreen from './screens/CategoryScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
//import FavoritesContextProvider from './store/context/favorites-context';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
  <Drawer.Navigator
  screenOptions={{
    headerStyle: {backgroundColor: "#351401"},
    headerTintColor: "white",
    sceneContainerStyle: {backgroundColor: "#3f2f25"},
    drawerContentStyle: {backgroundColor: "#351401"},
    drawerInactiveTintColor: "white",
    drawerActiveTintColor: "#351401",
    drawerActiveBackgroundColor: "#e4baa1"
  }}
  >
    <Drawer.Screen 
      name="Categories" 
      component={CategoryScreen} 
      options={{
        title: "Categories",
        drawerIcon: ({ color,size }) => <Ionicons name="list" color={color} size={size} />
      }}/>
    <Drawer.Screen 
      name="Favorites" 
      component={FavoritesScreen}
      options={{
        title: "Favorites",
        drawerIcon: ({ color,size }) => <Ionicons name="star" color={color} size={size} />
      }}/>
  </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      {/*<FavoritesContextProvider>*/}
      <Provider store={store}>
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
                title: "All Categories",
                headerShown: false
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
      </Provider>
      {/*</FavoritesContextProvider>*/}
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
