import React, { Fragment } from "react";
import { View, Text, Image } from "react-native";
import style from "../../styles";

export default function Cabecalho({ nomeUsuario, urlAvatar }) {
  return (
    <View style={style.cabecalho}>
      <Image style={style.avatar} source={{ uri: urlAvatar }} />
      <Text style={style.textCabecalho}>{nomeUsuario}</Text>
    </View>
  );
}
