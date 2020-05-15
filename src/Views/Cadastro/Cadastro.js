import React from "react";
import { View, Text, TextInput } from "react-native";
export default function Cadastro() {
  return (
    <View>
      <TextInput
        placeholder=""
        style={}
        onChangeText={(text) => setData({ ...data })}
      />
      <TextInput
        placeholder=""
        style={}
        onChangeText={(text) => setData({ ...data })}
      />
      <TextInput
        placeholder=""
        style={}
        onChangeText={(text) => setData({ ...data })}
      />
    </View>
  );
}
