import React from "react";
import { View, Image } from "react-native";
import style from "../../styles";

export default function UserFotos({ urlFotos }) {
  return (
    <View>
      <Image style={style.imagem} source={{ uri: urlFotos }} />
    </View>
  );
}
