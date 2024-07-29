import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import tw from "twrnc";

const Keypad = () => {
  const [input, setInput] = useState("");

  const handlePress = (value: string) => {
    // Prevent multiple decimal points
    if (value === "." && input.includes(".")) return;
    setInput(input + value);
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <Text style={tw`text-5xl font-bold text-center p-8`}>{input}</Text>
      <View style={styles.row}>
        {[1, 2, 3].map((num) => (
          <TouchableOpacity
            key={num}
            style={styles.button}
            onPress={() => handlePress(num.toString())}
          >
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {[4, 5, 6].map((num) => (
          <TouchableOpacity
            key={num}
            style={styles.button}
            onPress={() => handlePress(num.toString())}
          >
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        {[7, 8, 9].map((num) => (
          <TouchableOpacity
            key={num}
            style={styles.button}
            onPress={() => handlePress(num.toString())}
          >
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress(".")}
        >
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress("0")}
        >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleBackspace}>
          <Text style={styles.buttonText}>⌫</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    fontSize: 32,
    marginBottom: 20,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginHorizontal: 10, // Add some margin to buttons
  },
  buttonText: {
    fontSize: 24,

    fontWeight: "600",
  },
});

export default Keypad;
