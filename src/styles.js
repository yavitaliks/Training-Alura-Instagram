import { StyleSheet, Dimensions } from "react-native";
const largura = Dimensions.get("screen").width;

export default StyleSheet.create({
  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
  },
  textCabecalho: {
    fontSize: 16,
    fontWeight: "bold",
  },
  comentFotoTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#a6a6a6",
  },
  comentInput: {},
  imagem: {
    width: largura,
    height: largura,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 17,
    margin: 10,
  },
  button: {
    margin: 25,
  },
});
