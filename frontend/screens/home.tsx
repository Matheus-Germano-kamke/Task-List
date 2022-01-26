import React, { FC, useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Button, Input, PostRender } from "../components";
import { FlatList } from "react-native-gesture-handler";
import { IStackScreenProps } from "../library/StackScreenProps";
import { Modal, Pressable } from "react-native";
import { creatPost, getPosts } from "../api/posts.service";

const App: FC<IStackScreenProps> = (props) => {
  const [msg, setMsg] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [posts, setPosts] = useState<any>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const email = props.route.params.email;

  const fetchPosts = async () => {
    const documents = await getPosts(email);

    setPosts(documents);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const post = async () => {
    console.log("foi");
    console.log();
    props.navigation.getState;
    setModalVisible(!modalVisible);
    if (msg) {
      const data = {
        msg,
      };

      const documents = await creatPost({ ...data, email });

      setPosts(documents);
    } else {
      Alert.alert(`Missing Fields`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, marginTop: 25 }}>Parlador Ideal</Text>

      <View style={{ marginVertical: 20 }}>
        <Button title="Post" onPress={() => setModalVisible(true)} />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Input
                placeholder="Write Something Here"
                onChangeText={(text) => setMsg(text)}
              />
              <View style={styles.modalButton}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => post()}
                >
                  <Text style={styles.text}>Confirmar</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.text}>Cancelar</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>

        {posts.length > 0 ? (
          <FlatList
            data={posts}
            renderItem={({ item }) => {
              return (
                <PostRender
                  msg={item.text}
                  email={item.email}
                  name={item.name}
                  valid={email}
                />
              );
            }}
          />
        ) : (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text>Sem Posts</Text>
          </View>
        )}
      </View>
      <View style={{ flex: 0.5, marginTop: 5 }}></View>
      <View style={{ flex: 0.5 }}></View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
  text: {
    color: "#fff",
  },
  buttonOpen: {
    backgroundColor: "#000",
  },
  buttonClose: {
    backgroundColor: "#000",
    marginRight: 10,
  },
  textStyle: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalButton: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-between",
  },
});
