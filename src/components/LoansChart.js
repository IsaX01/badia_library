import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { BarChart } from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;

export const LoansChart = ({ loanData }) => {
  console.log(loanData); // Check if loanData is valid

  const monthlyLoanCounts = {};

  loanData.forEach((loan) => {
    const month = new Date(loan.load_date).getMonth();
    monthlyLoanCounts[month] = (monthlyLoanCounts[month] || 0) + 1;
  });

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = labels.map((_, index) => monthlyLoanCounts[index] || 0);
  const chartColors = data.map((value) => `#${Math.floor(Math.random() * 16777215).toString(16)}`);
  

  return (
    <View style={styles.container}>
    <Text style={styles.text}>Monthly Loan Data</Text>
    {loanData.length > 0 ? (
      <ScrollView horizontal={true}>
        <BarChart
          data={{
            labels: labels,
            datasets: [{ data }],
          }}
          width={screenWidth}
          height={300}
          yAxisSuffix=" loans"
          chartConfig={{
            backgroundColor: "#dff4ff",
            backgroundGradientFrom: "#dff4ff",
            backgroundGradientTo: "#dff4ff",
            decimalPlaces: 0,
            color: (opacity = 1) => chartColors[opacity],
          }}
          style={{
            borderRadius: 16, 
            padding: 2
          }}
        />
      </ScrollView>
    ) : (
      <Text>No loan data available.</Text>
    )}
  </View>
  );
};


const styles = StyleSheet.create({
    container: {
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
      fontSize: 18,
      lineHeight: 21,
      fontWeight: "bold",
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