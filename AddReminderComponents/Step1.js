// SelectableCard.js
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Colors from "../src/Constants/Colors";

const Step1 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Reminder Type</Text>
      <TouchableOpacity
        style={[
          styles.card,
          selectedOption === "product" && styles.selectedCard,
        ]}
        onPress={() => handleSelect("product")}
      >
        <View style={styles.row}>
          <View style={styles.circle(selectedOption === "product")} />
          <View style={styles.textContainer}>
            <Text style={styles.optionText}>Product based</Text>
            <Text style={styles.description}>
              Skincare products, medication and other essentials.
            </Text>
          </View>
          <Image
            style={styles.image}
            source={{ uri: "https://example.com/product_image.png" }} // Replace with your image URL
          />
        </View>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      <TouchableOpacity
        style={[
          styles.card,
          selectedOption === "activity" && styles.selectedCard,
        ]}
        onPress={() => handleSelect("activity")}
      >
        <View style={styles.row}>
          <View style={styles.circle(selectedOption === "activity")} />
          <View style={styles.textContainer}>
            <Text style={styles.optionText}>Activity based</Text>
            <Text style={styles.description}>
              Yoga sessions, running, gym workouts, and reading books.
            </Text>
          </View>
          <Image
            style={styles.image}
            source={{ uri: "https://example.com/activity_image.png" }} // Replace with your image URL
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    right: 15,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 20,
    fontFamily: "Nunito-Regular",
  },
  card: {
    width: 342,
    
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 16,
  },
  selectedCard: {
    borderColor: Colors.primary100,
  },
  row: {
   
    flexDirection: "row",
    alignItems: "center",
   
  },
  textContainer: {
    flex: 1,
  },
  circle: (isSelected) => ({
    marginRight:15,
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: isSelected ? Colors.primary100 : "#ccc",
    backgroundColor: isSelected ? Colors.primary100 : "transparent",
    marginBottom: 10,
    borderColor: "#929292",
  }),
  optionText: {
    fontFamily: "Nunito-SemiBold",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  description: {
    fontFamily: "Nunito-Regular",
    fontSize: 10,
    color: "#101018",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  orText: {
    fontWeight: "500",
    textAlign: "center",
    fontSize: 15,
    left:10,
    marginVertical: 10,
  },
});

export default Step1;
