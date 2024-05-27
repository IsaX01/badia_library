import React from "react";
import { View, Text, StyleSheet, TouchableOpacity  } from "react-native";

export const ProfileCard = ({ user }) => {

  return (
    <TouchableOpacity>
    <View style={styles.card}>
      <Text style={styles.title}>{user.first_name +" "+ user.last_name}</Text>
      <Text style={styles.author}>Status: {user.status}</Text>
      <Text style={styles.genre}>Email: {user.email}</Text>
      <Text style={styles.language}>Role: {user.role}</Text>
      <Text style={styles.language}>Address: {user.address}</Text>
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
