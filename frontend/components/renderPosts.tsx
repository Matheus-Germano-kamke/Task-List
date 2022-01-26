import React, { FC } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

interface Props {
  msg: string;
  email: string;
  name: string;
  valid: string;
}

const App: FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ width: "60%" }}>{props.msg}</Text>
        {/* <Text>{props.timeStamp}</Text>
        <Text>{props.userID}</Text> */}
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: width / 1.1,
    alignSelf: "center",
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: "#ccc",
    shadowOpacity: 0.9,
  },
  text: {
    padding: 5,
    color: "blue",
  },
  name: {
    padding: 5,
    color: "black",
    fontWeight: "bold",
  },
});
