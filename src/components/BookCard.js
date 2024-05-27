import React from "react";
import { View, Text, StyleSheet, TouchableOpacity  } from "react-native";
import { useNavigation } from "@react-navigation/native";


export const BookCard = ({ book }) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    // Aquí puedes mostrar un modal o un menú para que el usuario seleccione una opción
    // Por ahora, simplemente navegaré a la pantalla de edición
    navigation.navigate("Book", { bookId: book.id, book: book });
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
    <View style={styles.card}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>Author: {book.author}</Text>
      <Text style={styles.genre}>Genre: {book.genre}</Text>
      <Text style={styles.language}>Language: {book.language}</Text>
      <Text style={styles.qty}>Quantity: {book.qty}</Text>
      <Text style={styles.status}>State: {book.status}</Text>
    </View></TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "#c2edff",
    borderRadius: 10,
    shadowColor: "#32c9fe",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  author: {
    fontSize: 16,
    color: "#0090cd",
  },
  genre: {
    fontSize: 16,
    color: "#555",
  },
  language: {
    fontSize: 16,
    color: "#555",
  },
  qty: {
    fontSize: 16,
    color: "#555",
  },
  status: {
    fontSize: 16,
    color: "#555",
  },
});
