import React, { FC, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Input, Button } from "../components";
import { IStackScreenProps } from "../library/StackScreenProps";
import { creatUser } from "../api/user.service";

const App: FC<IStackScreenProps> = (props) => {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const signup = async () => {
    if (name && email && password) {
      try {
        creatUser({ name, email, password });
        Alert.alert(`Sucesso`);
        props.navigation.navigate("login");
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert(`Error`, `Campo vazio`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, marginTop: -20, marginBottom: 30 }}>
        Sign Up
      </Text>
      <Input placeholder="Name" onChangeText={(text) => setName(text)} />
      <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Sign Up" onPress={signup} />
      <View style={styles.loginText}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("login")}
          style={{ marginHorizontal: 5 }}
        >
          <Text style={{ color: "blue" }}>Login Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    flexDirection: "row",
    marginVertical: 20,
  },
});
