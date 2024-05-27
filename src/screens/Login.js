import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  Button,
  StyleSheet,
  TextInput,
  Image,
  Alert,
} from "react-native";
import { ArrowRightEndOnRectangleIcon } from "react-native-heroicons/micro";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/authActions';

export const Login = ({ navigation }) => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  // ...
  
  const isAuthenticated = useSelector((state) => state.auth.user !== null);
  const user = useSelector((state) => state.auth.user);
  const [isLoading, setIsLoading] = React.useState(false); 
  
  const handleLogin = async () => {
    try {
      setIsLoading(true); 
      await dispatch(loginUser(email, password));

      if (isAuthenticated) {
        console.log(user)
        const fullName = `${user?.first_name || ''} ${user?.last_name || ''}`; // Handle potential missing names
        console.log("auth", isAuthenticated);
        console.log(fullName);
        Alert.alert("Welcome!", `Hello, ${fullName}!`);
        navigation.replace("Main");
      } else {
        Alert.alert("Error", "Authentication failed. Please check your credentials.");
      }
    } catch (error) {
      Alert.alert("Error", "Error connecting to the server.");
    } finally {
      setIsLoading(false); 
    }
  };
  
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/books.jpg")}
      />

      <View style={styles.content}>
        <Text style={styles.text}>Email</Text>
        <TextInput
          title="Email"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          title="Password"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Pressable
          style={styles.button}
          onPress={handleLogin}
          disabled={isLoading}
        >
          <Text style={[styles.text, {color: "#c2edff"}]}>{isLoading ? 'Loading...' : 'Login'}</Text>
          <ArrowRightEndOnRectangleIcon size={24} color="#c2edff"/>
        </Pressable>
      </View>
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
