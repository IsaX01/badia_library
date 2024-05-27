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
import { createLoan, updateLoan, deleteLoan } from "../store/loanActions";
import { useDispatch } from "react-redux";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

export const Loan = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { loanId } = route.params;
  const { loan } = route.params;
  const dispatch = useDispatch();

  const [book_id, setBook_id] = useState("");
  const [user_id, setUser_id] = useState("");
  const [loan_date, setLoan_date] = useState("");
  const [return_date, setReturn_date] = useState("");
  const [real_return_date, setReal_return_date] = useState("");
  const [status, setStatus] = useState("");
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (loanId > 0) {
      setBook_id(loan.book_id);
      setUser_id(loan.user_id);
      setLoan_date(loan.loan_date);
      setReturn_date(loan.return_date);
      setReal_return_date(loan.real_return_date);
      setStatus(loan.status);
    } else {
      cleanInputs();
    }
  }, [loanId]);

  function cleanInputs() {
    setBook_id("");
    setUser_id("");
    setLoan_date("");
    setReturn_date("");
    setReal_return_date("");
    setStatus("");
  }

  const handleLoanOption = () => {
    const loanData = {
      book_id,
      user_id,
      loan_date,
      return_date,
      real_return_date,
      status,
    };

    if (loanId > 0) {
      updateLoan(loanId, loanData)
        .then((response) => {
          if (response) {
            Alert.alert("Updated", "Loan Updated successfully!");
            setBook_id(response.book_id);
            setUser_id(response.user_id);
            setLoan_date(response.loan_date);
            setReturn_date(response.return_date);
            setReal_return_date(response.real_return_date);
            setStatus(response.status);
          } else {
            console.error("Error Updated loan:", response);
            Alert.alert("Error", "Failed to updated loan. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error during updated loan:", error);
          Alert.alert(
            "Error",
            "An unexpected error occurred. Please try again."
          );
        });
    } else if (loanId == 0) {
      const validationErrors = validateLoanData({
        book_id,
        user_id,
        loan_date,
        return_date,
        real_return_date,
        status,
      });

      if (validationErrors.length > 0) {
        const errorMessage = validationErrors.join("\n");
        Alert.alert("Error", errorMessage);
        return;
      }

      createLoan(loanData)
        .then((response) => {
          if (response) {
            Alert.alert("Created", "Loan added successfully!");
            cleanInputs();
          } else {
            console.error("Error creating loan:", response);
            Alert.alert("Error", "Failed to create loan. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error during create loan:", error);
          Alert.alert(
            "Error",
            "An unexpected error occurred. Please try again."
          );
        });
    }
  };

  function validateLoanData(loanData) {
    const errors = [];
    if (!loanData.loan_date) {
      errors.push("Loan Date is required.");
    }
    if (!loanData.user_id) {
      errors.push("Loan User is required.");
    }
    if (!loanData.book_id) {
      errors.push("Loan Book title is required.");
    }
   
    return errors;
  }

  const handleDeleteLoan= () => {
    if (loanId > 0) {
      deleteLoan(loanId)
        .then((response) => {
          if (response) {
            Alert.alert("Delete", "Loan deleted successfully!");
            cleanInputs();
          } else {
            console.error("Error delete loan:", response);
            Alert.alert("Error", "Failed to delete loan. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error during delete loan:", error);
          Alert.alert(
            "Error",
            "An unexpected error occurred. Please try again."
          );
        });
    }
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.content}
        onPress={() => navigation.navigate("Loans", { loanUpdated: true })}
      >
        <ArrowLeftIcon size={28} color={"#dff4ff"} />
        <Text style={styles.text}>Return to Books</Text>
      </Pressable>
      <ScrollView>
        <Text>Book Title:</Text>
        <Picker
          style={styles.input}
          selectedValue={book_id}
          onValueChange={(itemValue, itemIndex) => setBook_id(itemValue)}
        >
          <Picker.Item label="Select option..." value="" />
          <Picker.Item label="Test Title" value="3" />
          <Picker.Item label="Test Title 2" value="7" />
        </Picker>
        <Text>Loan to:</Text>
         <Picker
          style={styles.input}
          selectedValue={user_id}
          onValueChange={(itemValue, itemIndex) => setUser_id(itemValue)}
        >
          <Picker.Item label="Select option..." value="" />
          <Picker.Item label="Isaias Badia" value="152" />
        </Picker>
        <Text>Loan Date:</Text>
        <TextInput
              style={styles.input}
              value={loan_date}
              onChangeText={setLoan_date}
              placeholder="Enter Loan Date"
            />
        <Text>Return Date:</Text>
        <TextInput
              style={styles.input}
              value={return_date}
              onChangeText={setReturn_date}
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
        <Text>Real Return Date:</Text>
        <TextInput
          style={styles.input}
          value={real_return_date}
          onChangeText={setReal_return_date}
          placeholder="Enter Real Return Date"
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
          <Picker.Item label="On Loan" value="On Loan" />
          <Picker.Item label="Returned" value="Returned" />
        </Picker>
      </ScrollView>
      <View style={{ flexDirection: "row", gap: 10, justifyContent: "center" }}>
        <Pressable style={styles.button} onPress={handleLoanOption}>
          <Text style={[styles.text, { color: "#c2edff" }]}>Save</Text>
          <CheckCircleIcon size={24} color="#c2edff" />
        </Pressable>

        {loanId > 0 && (
          <Pressable
            style={[styles.button, { backgroundColor: "#ff0000" }]}
            onPress={handleDeleteLoan}
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
