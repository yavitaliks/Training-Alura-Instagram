import React, { Fragment, useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import style from "../../styles";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Comentario({
  comentar,
  urlAvatar,
  adicionarComentario,
}) {
  const [coment, setComent] = useState(comentar);

  let conteudoCampoInput = "";
  let campoInput;
  function addComents() {
    console.warn(conteudoCampoInput);
    campoInput.clear();
    const novoComentario = adicionarComentario(conteudoCampoInput, "Vitaliy");
    setComent([...coment, novoComentario]);
  }

  return (
    <Fragment>
      <Text>Comentarios</Text>
      <FlatList
        data={coment}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item.text}</Text>}
      />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View>
          <Image
            style={{ width: 30, height: 30, borderRadius: 15 }}
            source={{ uri: urlAvatar }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            ref={(textInput) => (campoInput = textInput)}
            onChangeText={(text) => (conteudoCampoInput = text)}
            style={style.comentInput}
            placeholder="Adicione um comenteario"
          />
        </View>
        <View style={{ marginRight: 10 }}>
          <TouchableOpacity onPress={addComents}>
            <Icon name="plus-square-o" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  );
}
