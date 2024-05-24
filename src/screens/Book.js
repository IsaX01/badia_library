
import React from 'react';
import { View, Text, TextInput, Button, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/micro";

export const Book = () => {
const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Books")}>
          <View style={styles.content}>
            <ArrowLeftIcon size={30} color={"#dff4ff"}/>
          </View>
        </Pressable>
      <Text>Book</Text>
      <Text>Title</Text>
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


// import React, { useEffect, useState } from "react";
// import { View, Text } from "react-native";

// export const Book = ({ route }) => {
//   const { bookId } = route.params;
//   const [bookData, setBookData] = useState(null);

//   useEffect(() => {
//     // Aquí debes hacer una llamada a tu API o base de datos para obtener los detalles del libro
//     // Utiliza el bookId para buscar el libro y luego actualiza el estado con los datos completos
//     // Ejemplo ficticio:
//     const fetchBookDetails = async () => {
//       try {
//         const response = await fetch(`https://api.example.com/books/${bookId}`);
//         const data = await response.json();
//         setBookData(data); // Actualiza el estado con los datos del libro
//       } catch (error) {
//         console.error("Error fetching book details:", error);
//       }
//     };

//     fetchBookDetails();
//   }, [bookId]);

//   if (!bookData) {
//     return <Text>Cargando...</Text>;
//   }


//   return (
//     <View>
//       <Text>Title: {bookData.title}</Text>
//       <Text>Author: {bookData.author}</Text>
//       {/* Agrega más detalles aquí */}
//     </View>
//   );
// };
