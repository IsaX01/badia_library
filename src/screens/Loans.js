import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable
} from "react-native";
import { MagnifyingGlassIcon, PlusIcon } from "react-native-heroicons/micro";
import { LoanCard } from "../components/LoanCard";
import { useNavigation } from "@react-navigation/native";
import { getAllLoans } from "../store/loanActions";

// const loans = [
//   {
//     id: 1,
//     user_id: 1,
//     user_name: "Isaias",
//     book_id: 7,
//     book_title: "To kill a MockingGlass",
//     loan_date: "2024-05-20",
//     return_date: "2024-06-10",
//     real_return_date: "2024-06-08",
//     status: "Returned",
//   },
//   {
//     id: 2,
//     user_id: 1,
//     user_name: "Isaias",
//     book_id: 3,
//     book_title: "Pussy",
//     loan_date: "2024-05-22",
//     return_date: "2024-06-15",
//     real_return_date: null,
//     status: "On Loan",
//   },
// ];



export const Loans = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const fetchedLoans = await getAllLoans();
        setLoans(fetchedLoans);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching loans:', error);
      }
    };

    const unsubscribe = navigation.addListener('focus', () => {
      fetchBooks();
    });

    return unsubscribe;
  }, [navigation]);

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <MagnifyingGlassIcon size={24} color={"#07b2f0"}/>
        <TextInput
          title="Search"
          style={styles.input}
          placeholder="Search loans..."
          onChangeText={handleSearchChange}
        />
      </View>

      <ScrollView>
      {loading ? (
          <Text style={styles.text}>Loading...</Text>
        ) : (
          <View style={styles.loans}>
          {loans.map(
            (loan) =>
              loan.status.toLowerCase().includes(searchText.toLowerCase()) && (
                <LoanCard key={loan.id} loan={loan} />
              )
          )}
        </View>
         )}
      </ScrollView>
      <Pressable style={styles.floatingButton} onPress={() => navigation.navigate("Loan", { loanId: 0 })}>
        <PlusIcon size={24} color={"#dff4ff"} />
      </Pressable>
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
  loans: {
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
    height: 35,
  },
  input: {
    height: 30,
    // color: '#fafafa',
    flex: 1,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    marginTop: 10,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "semibold",
    letterSpacing: 0.25,
  },
  floatingButton: {
    position: "absolute",
    bottom: 10,
    right: 20,
    backgroundColor: "#07b2f0",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 50,
    elevation: 3,
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

