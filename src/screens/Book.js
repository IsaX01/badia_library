import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Pressable,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  CheckCircleIcon,
  XMarkIcon,
  CalendarIcon,
} from "react-native-heroicons/micro";
import { createBook, updateBook, deleteBook } from "../store/bookActions";
import { useDispatch } from "react-redux";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

export const Book = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { bookId } = route.params;
  const { book } = route.params;
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [release_date, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");
  const [qty, setQty] = useState("");
  const [status, setStatus] = useState("");
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (bookId > 0) {
      setTitle(book.title);
      setAuthor(book.author);
      setReleaseDate(book.release_date);
      setGenre(book.genre);
      setLanguage(book.language);
      setQty(book.qty);
      setStatus(book.status);
    } else {
      cleanInputs();
    }
  }, [bookId]);

  function cleanInputs() {
    setTitle("");
    setAuthor("");
    setReleaseDate("");
    setGenre("");
    setLanguage("");
    setQty("");
    setStatus("");
  }

  const handleOption = () => {
    const bookData = {
      title,
      author,
      release_date,
      genre,
      language,
      qty,
      status,
    };

    if (bookId > 0) {
      updateBook(bookId, bookData)
        .then((response) => {
          if (response) {
            Alert.alert("Updated", "Book Updated successfully!");
            setTitle(response.title);
            setAuthor(response.author);
            setReleaseDate(response.release_date);
            setGenre(response.genre);
            setLanguage(response.language);
            setQty(response.qty);
            setStatus(response.status);
          } else {
            console.error("Error Updated book:", response);
            Alert.alert("Error", "Failed to updated book. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error during create book:", error);
          Alert.alert(
            "Error",
            "An unexpected error occurred. Please try again."
          );
        });
    } else if (bookId == 0) {
      const validationErrors = validateBookData({
        title,
        author,
        release_date,
        genre,
        language,
        qty,
        status,
      });

      if (validationErrors.length > 0) {
        const errorMessage = validationErrors.join("\n");
        Alert.alert("Error", errorMessage);
        return;
      }

      createBook(bookData)
        .then((response) => {
          if (response) {
            Alert.alert("Created", "Book added successfully!");
            cleanInputs();
          } else {
            console.error("Error creating book:", response);
            Alert.alert("Error", "Failed to create book. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error during create book:", error);
          Alert.alert(
            "Error",
            "An unexpected error occurred. Please try again."
          );
        });
    }
  };

  function validateBookData(bookData) {
    const errors = [];
    if (!bookData.title) {
      errors.push("Title is required.");
    }
    if (!bookData.author) {
      errors.push("Author is required.");
    }

    return errors;
  }

  const handleDeleteBook = () => {
    if (bookId > 0) {
      deleteBook(bookId)
        .then((response) => {
          if (response) {
            Alert.alert("Delete", "Book deleted successfully!");
            cleanInputs();
          } else {
            console.error("Error delete book:", response);
            Alert.alert("Error", "Failed to delete book. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error during delete book:", error);
          Alert.alert(
            "Error",
            "An unexpected error occurred. Please try again."
          );
        });
    }
  };

  const onChange = (event, selectedDate) => {
    if (selectedDate) {
      const currentDate = selectedDate;
      setShow(false);
      setReleaseDate(currentDate);
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.content}
        onPress={() => navigation.navigate("Books", { bookUpdated: true })}
      >
        <ArrowLeftIcon size={28} color={"#dff4ff"} />
        <Text style={styles.text}>Return to Books</Text>
      </Pressable>
      <ScrollView>
        <Text>Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Enter title"
        />
        <Text>Author</Text>
        <TextInput
          style={styles.input}
          value={author}
          onChangeText={setAuthor}
          placeholder="Enter author"
        />
        <Text>Release Date</Text>
        <TextInput
              style={styles.input}
              value={release_date}
              onChangeText={setReleaseDate}
              placeholder="Enter Release Date"
            />
        {/* <SafeAreaView>
          <View>
            <TextInput
              style={styles.input}
              value={release_date.toLocaleString()}
            />
            <Pressable style={styles.button} onPress={showDatepicker}>
              <Text style={[styles.text, { color: "#c2edff" }]}>
                Set a date
              </Text>
              <CalendarIcon size={24} color="#c2edff" />
            </Pressable>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={release_date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
              />
            )}
          </View>
        </SafeAreaView> */}
        <Text>Genre</Text>
        {/* <TextInput
          style={styles.input}
          value={genre}
          onChangeText={setGenre}
          placeholder="Enter Genre"
        /> */}
        <Picker
          style={styles.input}
          selectedValue={genre}
          onValueChange={(itemValue, itemIndex) => setGenre(itemValue)}
        >
          <Picker.Item label="Select option..." value="" />
          <Picker.Item label="Fantasy" value="Fantasy" />
          <Picker.Item label="Science Fiction" value="Science Fiction" />
          <Picker.Item label="Dystopian" value="Dystopian" />
          <Picker.Item label="Mystery" value="Mystery" />
          <Picker.Item label="Romance" value="Romance" />
          <Picker.Item label="Historical Fiction" value="Historical Fiction" />
          <Picker.Item label="Horror" value="Horror" />
          <Picker.Item label="Literary Fiction" value="Literary Fiction" />
          <Picker.Item label="Biography" value="Biography" />
          <Picker.Item label="Young Adult" value="Young Adult" />
        </Picker>
        <Text>Language</Text>
        {/* <TextInput
          style={styles.input}
          value={language}
          onChangeText={setLanguage}
          placeholder="Enter Language"
        /> */}
        <Picker
          style={styles.input}
          selectedValue={language}
          onValueChange={(itemValue, itemIndex) => setLanguage(itemValue)}
        >
          <Picker.Item label="Select option..." value="" />
          <Picker.Item label="English" value="English" />
          <Picker.Item label="Spanish" value="Spanish" />
        </Picker>
        <Text>Qty</Text>
        <TextInput
          style={styles.input}
          value={qty}
          onChangeText={setQty}
          placeholder="Enter Qty"
        />
        <Text>Status</Text>
        {/* <TextInput
          style={styles.input}
          value={status}
          onChangeText={setStatus}
          placeholder="Enter Status"
        /> */}
        <Picker
          style={styles.input}
          selectedValue={status}
          onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
        >
          <Picker.Item label="Select option..." value="" />
          <Picker.Item label="Available" value="Available" />
          <Picker.Item label="Out of stock" value="Out of stock" />
        </Picker>
      </ScrollView>
      <View style={{ flexDirection: "row", gap: 10, justifyContent: "center" }}>
        <Pressable style={styles.button} onPress={handleOption}>
          <Text style={[styles.text, { color: "#c2edff" }]}>Save</Text>
          <CheckCircleIcon size={24} color="#c2edff" />
        </Pressable>

        {bookId > 0 && (
          <Pressable
            style={[styles.button, { backgroundColor: "#ff0000" }]}
            onPress={handleDeleteBook}
          >
            <Text style={[styles.text, { color: "#ff9a9a" }]}>Delete</Text>
            <XMarkIcon size={24} color={"#ff9a9a"} />
          </Pressable>
        )}
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
    gap: 10,
  },
  content: {
    borderRadius: 50,
    padding: 5,
    backgroundColor: "#07b2f0",
    alignItems: "center",
    flexDirection: "row",
    gap: 7,
  },
  input: {
    borderColor: "#32c9fe",
    borderWidth: 1,
    height: 50,
    // color: '#fafafa',
    marginVertical: 12,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    justifyContent: "center",
    gap: 5,
    marginVertical: 1,
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 15,
    elevation: 3,
    width: 180,
    backgroundColor: "#07b2f0",
    alignSelf: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "semibold",
    letterSpacing: 0.25,
    color: "#dff4ff",
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
