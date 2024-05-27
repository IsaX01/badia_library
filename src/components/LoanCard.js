import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const LoanCard = ({ loan }) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    // Navigate to the loan details screen (adjust as needed)
    navigation.navigate("Loan", { loanId: loan.id, loan: loan });
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.card}>
        <Text style={styles.title}>Loan Register: {loan.id}</Text>
        <Text style={styles.title}>Book: {loan.book_title}</Text>
        <Text style={styles.title}>Loan to: {loan.full_name}</Text>
        <Text style={styles.date}>Load Date: {loan.loan_date}</Text>
        <Text style={styles.date}>Return Date: {loan.return_date}</Text>
        <Text style={styles.date}>Real Return Date: {loan.real_return_date}</Text>
        <Text style={styles.status}>Status: {loan.status}</Text>
      </View>
    </TouchableOpacity>
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
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    fontSize: 16,
    color: "#555",
  },
  status: {
    fontSize: 16,
    color: "#555",
  },
});
