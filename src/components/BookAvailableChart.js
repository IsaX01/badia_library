import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;

export const BookAvailableChart = ({ inStockBooks, totalBooks }) => {
  console.log(inStockBooks, totalBooks);
  const outOfStockBooks = totalBooks - inStockBooks;

  const totalData = inStockBooks + outOfStockBooks;
  if (totalData !== totalBooks) {
    console.warn("Total books calculation might be incorrect.");
  }

  const labels = ["In Stock", "Out of Stock"];
  const bookData = [
    {
      data: [inStockBooks, outOfStockBooks],
    },
  ];
  console.log(bookData);

  const chartColors = bookData.map(
    () => `#${Math.floor(Math.random() * 16777215).toString(16)}`
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Book Availability</Text>
      {bookData.length > 0 ? (
        <ScrollView>
          <LineChart
            data={{
              labels,
              datasets: bookData,
            }}
            width={screenWidth}
            height={300}
            yAxisLabel={'-'}
            chartConfig={{
              backgroundColor: "#dff4ff",
              backgroundGradientFrom: "#dff4ff",
              backgroundGradientTo: "#dff4ff",
              decimalPlaces: 0,
              color: (opacity = 1) => chartColors[opacity],
            }}
            bezier
            style={{
              borderRadius: 16,
              padding: 2
            }}
          />
        </ScrollView>
      ) : (
        <Text>No data available for the chart.</Text>
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
