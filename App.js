// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     // <View style={styles.container}>
//     <View className='flex-1 flex justify-center items-center bg-black'>
//       <Text className='text-white'>Open upe App.js to start working on your app!</Text>
//       <StatusBar style='auto' />
//       <SafeAreaView/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import React from "react";
import { useEffect } from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { Appearance, useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "./src/screens/Home";
import { Profile } from "./src/screens/Profile";
import { Login } from "./src/screens/Login";
import { Books } from "./src/screens/Books";
import { Book } from "./src/screens/Book";
import { Loans } from "./src/screens/Loans";
import { Loan } from "./src/screens/Loan";
import { NavBar } from "./src/navigation/NavBar";

const Stack = createStackNavigator();
const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const MainTabs = () => (
  <Tab.Navigator tabBar={(props) => <NavBar {...props} />}>
    <Tab.Screen name="Dashboard" component={Home} />
    <Tab.Screen name="Books" component={Books} />
    <Tab.Screen name="Loans" component={Loans} />
    <Tab.Screen name="Profile" component={Profile} />
    <Tab.Screen name="Book" component={Book} />
    <Tab.Screen name="Loan" component={Loan} />

  </Tab.Navigator>
);

const App = () => {
  const scheme = useColorScheme();

  useEffect(() => {
    console.log("Color scheme:", scheme);
  }, [scheme]);

  return (
    // <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
