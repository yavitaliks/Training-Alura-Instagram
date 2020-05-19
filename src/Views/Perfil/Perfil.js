import React, { Fragment, useState, useEffect } from "react";
import {
  View,
  FlatList,
  AsyncStorage,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { UserFotos } from "../../Componentes/Foto";
import api from "../../api/api";

export default function Perfil() {
  const [data, setData] = useState();

  async function getPhotos() {
    const userName = await AsyncStorage.getItem("username");
    try {
      const response = await api.get(`${userName}/photos`);
      setData(response.data);
      console.log("PHOTOS", response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Fragment>
      <TouchableOpacity onPress={getPhotos}>
        <Text>Refresh</Text>
      </TouchableOpacity>
      <View>
        <FlatList
          data={data}
          columnLayout={[1, 2]}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{item.id}</Text>
              <UserFotos urlFotos={item.url} />
            </View>
          )}
        />
      </View>
    </Fragment>
  );
}
