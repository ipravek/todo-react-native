import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.buttonCtr}>
          <View style={styles.button}>
            <Button onPress={() => setCount(count - 1)} title="-" />
          </View>
          <Text>The count is {count}</Text>
          <View style={styles.button}>
            <Button onPress={() => setCount(count + 1)} title="+" />
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonCtr: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    padding: 20,
  },
});
