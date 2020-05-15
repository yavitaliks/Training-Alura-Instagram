import React, { Fragment, useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import style from "./style";
import api from "../../api/api";

export default function Login(props) {
  const [data, setData] = useState({ userName: "", password: "" });

  async function logIn() {
    try {
      const response = await api.post("users/login", data);
      await AsyncStorage.setItem("token", response.headers.x_access_token);
      await AsyncStorage.setItem("username", response.data.name);
      props.navigation.replace("Feed", { nome: response.data.name });
    } catch (error) {
      console.warn(error);
    }
  }

  function createLogin() {
    props.navigation.navigate("Cadastro");
  }

  return (
    <Fragment>
      <View style={style.container}>
        <TextInput
          onChangeText={(text) => setData({ ...data, userName: text })}
          style={style.textInput}
          value={data.userName}
          placeholder=" Usuario"
        />
        <TextInput
          secureTextEntry={true}
          onChangeText={(text) => setData({ ...data, password: text })}
          style={style.textInput}
          value={data.password}
          placeholder=" Senha"
        />
      </View>
      <View style={style.butLogin}>
        <TouchableOpacity onPress={logIn}>
          <Text style={{ fontSize: 18, color: "#141daa" }}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={style.butLogin}>
        <TouchableOpacity onPress={createLogin}>
          <Text style={{ fontSize: 18, color: "#c9c9c9" }}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
}
