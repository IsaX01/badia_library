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
    display: "flex",
    flex: 1,
    // backgroundColor: "#141414",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  content: {
    marginVertical: 30,
  },
  input: {
    borderColor: "#32c9fe",
    borderWidth: 1,
    height: 50,
    // color: '#fafafa',
    marginVertical: 15,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
    marginVertical: 15,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    width: 200,
    backgroundColor: "#07b2f0",
    alignSelf: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "semibold",
    letterSpacing: 0.25,
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: "center",
    objectFit: "cover",
    borderRadius: 15,
  },
});