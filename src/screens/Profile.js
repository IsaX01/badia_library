import React from 'react';
import { View, Text, Pressable, Button, StyleSheet } from 'react-native';

export const Profile = ({ navigation }) => {
  const handleLogout = () => {
    // Aquí puedes poner tu lógica de cierre de sesión
    // Por ejemplo, puedes borrar el token de autenticación del almacenamiento local

    // Luego navega de vuelta a la pantalla de inicio de sesión
    navigation.replace('Auth');
  };

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="Log out" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    // backgroundColor: "#141414",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  content: {
    marginVertical: 30
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 50,
    // color: '#fafafa',
    marginVertical: 15,
    padding: 10,
  },
  customButton: {
    width: 40,
    borderCurve: 'circular',
    height: 48,
    backgroundColor: '#76d6ff'

  },
  image: {
    width: 300,
    height: 300,
    alignSelf: 'center', 
  },
  text: {
    // color: '#fafafa', 
  },
});