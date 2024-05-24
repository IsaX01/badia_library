
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/micro";

export const Loan = () => {
    const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate("Books")}>
            <View style={styles.content}>
              <ArrowLeftIcon size={30} color={"#dff4ff"}/>
            </View>
          </Pressable>
        <Text>Loan</Text>
        <Text>Name</Text>
        <Text>Author</Text>
  
        <Button title="Save" onPress={() => console.log("His")} />
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
      gap: 10
    },
    content: {
        borderRadius: 50,
        padding: 10,
        backgroundColor: '#07b2f0',
        width: 50,
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