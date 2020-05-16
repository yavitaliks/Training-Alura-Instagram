import React, { Fragment, useState, useEffect } from "react";
import { ScrollView, FlatList, StatusBar } from "react-native";

import { Cabecalho } from "../../Componentes/Cabecalho";
import { Fotos } from "../../Componentes/Foto";
import { Comentario } from "../../Componentes/Comentarios";
import api from "../../api/feed";
import { likeFoto } from "../../api/curtidas";
import { adicionarComentario } from "../../api/comentarios";

export default function Feed(props) {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    api(setFeed);
  }, []);

  return (
    <ScrollView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <FlatList
        data={feed}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Fragment>
            <Cabecalho nomeUsuario={item.userName} urlAvatar={item.userURL} />

            <Fotos
              urlFoto={item.url}
              descricao={item.description}
              likeFoto={likeFoto}
            />
            <Comentario
              comentar={item.comentarios}
              urlAvatar={item.userURL}
              adicionarComentario={adicionarComentario}
            />
          </Fragment>
        )}
      />
    </ScrollView>
  );
}
