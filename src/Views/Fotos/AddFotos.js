import React, { useState, Fragment } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import api from "../../api/api";

import styles from "../Cadastro/styles";

export default function Fotos() {
  const [data, setData] = useState({
    url: "",
    description: "",
    allowComments: true,
  });

  async function addNewUser() {
    const token = await AsyncStorage.getItem("token");
    console.log("TOKEN", token);
    try {
      const response = await api.post("photos/upload", data, {
        headers: { x_access_token: token },
      });
      console.warn("AAAAAAAAA", response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Fragment>
      <View style={styles.container}>
        <TextInput
          value={data.url}
          placeholder="URL do Foto"
          style={styles.textInput}
          onChangeText={(text) => setData({ ...data, url: text })}
        />
        <TextInput
          value={data.description}
          placeholder="descriçao"
          style={styles.textInput}
          onChangeText={(text) => setData({ ...data, description: text })}
        />
      </View>
      <View>
        <TouchableOpacity onPress={addNewUser} style={styles.addButtom}>
          <Text style={styles.textButtom}>Postar</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
}
