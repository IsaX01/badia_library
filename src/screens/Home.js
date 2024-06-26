import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { BookAvailableChart } from "../components/BookAvailableChart";
import { LoansChart } from "../components/LoansChart";

const loanData = [
  {
    id: 1,
    user_id: 123,
    book_id: 456,
    load_date: "2024-05-20",
    return_date: "2024-06-10",
    real_return_date: "2024-06-08",
    status: "Returned",
  },
  {
    id: 2,
    user_id: 234,
    book_id: 789,
    load_date: "2024-05-22",
    return_date: "2024-06-15",
    real_return_date: null,
    status: "On Loan",
  },
  // Add more loan objects here...
];

const totalBooks = 100;
const inStockBooks = 75;

export const Home = () => {
  return (
    <View style={styles.container}>
      <LoansChart loanData={loanData} />
      <BookAvailableChart totalBooks={totalBooks} inStockBooks={inStockBooks}/>
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
    paddingBottom: 10,
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
