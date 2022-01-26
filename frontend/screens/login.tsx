import React, { FC, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Input, Button } from "../components";
import { IStackScreenProps } from "../library/StackScreenProps";
import { login } from "../api/user.service";

const App: FC<IStackScreenProps> = (props) => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const navigation = props;

  const loginfn = async () => {
    if (email && password) {
      const back = await login({ email, password });

      if (back === "error") {
        Alert.alert(`Error`, `email ou senha incorreta`);
      } else {
        props.navigation.navigate("home", { email: email });
      }
    } else {
      Alert.alert(`Error`, `Campo vazio`);
    }
  };

  const duo = () => {
    loginfn();
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, marginTop: -20, marginBottom: 30 }}>
        Login
      </Text>
      <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Confirmar" onPress={duo} />

      <View style={styles.loginText}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("signup")}
          style={{ marginHorizontal: 5 }}
        >
          <Text style={{ color: "blue" }}>Sign Up</Text>
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
