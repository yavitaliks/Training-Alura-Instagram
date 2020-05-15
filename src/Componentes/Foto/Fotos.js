import React, { Fragment, useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import style from "../../styles";

export default function Foto({ urlFoto, descricao, likeFoto }) {
  const [like, setLike] = useState(false);
  const [qntlike, setQntlike] = useState(0);

  function clickLike() {
    const [novoCurtiu, qnt] = likeFoto(like, qntlike);
    setLike(novoCurtiu);
    setQntlike(qnt);
  }

  return (
    <View>
      <Image style={style.imagem} source={{ uri: urlFoto }} />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={clickLike}>
          {!like && <Icon name="heart-o" size={22} />}
          {like && <Icon name="heart" size={22} color="red" />}
        </TouchableOpacity>
        <Text> {qntlike} curtidas</Text>
      </View>
      <Text style={style.comentFotoTitle}>{descricao}</Text>
    </View>
  );
}
