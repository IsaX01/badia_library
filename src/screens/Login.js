
import React from 'react';
import { SafeAreaView, View, Text, Pressable, Button, StyleSheet, TextInput, Image } from 'react-native';

export const Login = ({ navigation }) => {
  return (

      <View style={styles.container}>
       
          <Image style={styles.image} source={require('../../assets/images/books.jpg')} />
       
      <View style={styles.content}> 
        <Text style={styles.text}>Email</Text>
        <TextInput title="Email" style={styles.input} />
        <Text style={styles.text}>Password</Text>
        <TextInput title="Password" style={styles.input} secureTextEntry={true} />
        <Button title="Login" onPress={() => navigation.replace('Main')} />
      </View>
        
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