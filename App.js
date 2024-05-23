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

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Login from './src/screens/Login';

const Tab = createBottomTabNavigator();

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

