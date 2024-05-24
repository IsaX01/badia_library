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
} from "react-native";
import { ArrowRightEndOnRectangleIcon } from "react-native-heroicons/micro";

export const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = async () => {
    const response = await fetch("https://my-api.com/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      dispatch(loginSuccess(data.user));
    } else {
      // Manejar error de inicio de sesión
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
          onPress={() => navigation.replace("Main")}
        >
          <Text style={[styles.text, {color: "#c2edff"}]}>Login</Text>
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
