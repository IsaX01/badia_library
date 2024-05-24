import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/micro";
import { BookCard } from "../components/BookCard";

const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    release_date: "1960-07-11",
    genre: "Southern Gothic",
    language: "English",
    qty: 15,
    status: "Available",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    release_date: "1949-06-08",
    genre: "Dystopian",
    language: "English",
    qty: 20,
    status: "Out of Stock",
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    release_date: "1925-04-10",
    genre: "Tragedy",
    language: "English",
    qty: 5,
    status: "Available",
  },
  {
    id: 4,
    title: "Moby-Dick",
    author: "Herman Melville",
    release_date: "1851-10-18",
    genre: "Adventure",
    language: "English",
    qty: 10,
    status: "Available",
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    release_date: "1813-01-28",
    genre: "Romance",
    language: "English",
    qty: 12,
    status: "Available",
  },
  {
    id: 6,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    release_date: "1951-07-16",
    genre: "Realistic Fiction",
    language: "English",
    qty: 8,
    status: "Out of Stock",
  },
  {
    id: 7,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    release_date: "1937-09-21",
    genre: "Fantasy",
    language: "English",
    qty: 20,
    status: "Available",
  },
  {
    id: 8,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    release_date: "1953-10-19",
    genre: "Dystopian",
    language: "English",
    qty: 5,
    status: "Available",
  },
];

export const Books = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <MagnifyingGlassIcon size={24} />
        <TextInput
          title="Search"
          style={styles.input}
          placeholder="Search books..."
        />
      </View>

      <ScrollView>
        <View style={styles.books}>
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </View>
      </ScrollView>
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
  books: {
    gap: 10,
    padding: 5,
  },
  search: {
    flexDirection: "row",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    paddingLeft: 10,
    paddingTop: 8,
    paddingBottom: 10
  },
  input: {
    height: 30,
    // color: '#fafafa',
    flex: 1,
    paddingTop: 8,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "semibold",
    letterSpacing: 0.25,
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
  card: {
    backgroundColor: "#828282",
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
