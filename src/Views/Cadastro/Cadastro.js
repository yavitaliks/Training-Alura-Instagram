import React, { useState, Fragment } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import api from "../../api/api";

import styles from "./styles";

export default function Cadastro() {
  const [data, setData] = useState({
    userName: "",
    password: "",
    userProfilePhotoUrl: "",
  });

  async function addNewUser() {
    try {
      const response = await api.post("users/signup", data);
      console.warn("AAAAAAAAA", response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Fragment>
      <View style={styles.container}>
        <TextInput
          value={data.userName}
          placeholder="User Name"
          style={styles.textInput}
          onChangeText={(text) => setData({ ...data, userName: text })}
        />
        <TextInput
          value={data.password}
          secureTextEntry={true}
          placeholder="Password"
          style={styles.textInput}
          onChangeText={(text) => setData({ ...data, password: text })}
        />
        <TextInput
          value={data.userProfilePhotoUrl}
          placeholder="Photo URL"
          style={styles.textInput}
          onChangeText={(text) =>
            setData({ ...data, userProfilePhotoUrl: text })
          }
        />
      </View>
      <View>
        <TouchableOpacity onPress={addNewUser} style={styles.addButtom}>
          <Text style={styles.textButtom}>Registe user</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
}
