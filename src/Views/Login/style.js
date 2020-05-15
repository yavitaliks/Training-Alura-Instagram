import { StyleSheet, Dimensions } from "react-native";
const largura = Dimensions.get("screen").width;

export default StyleSheet.create({
  container: {
    flexGrow: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  butLogin: {
    margin: 25,
    alignItems: "center",
  },
  textInput: {
    fontSize: 32,
    width: largura * 0.8,
    borderBottomWidth: 1,
    marginBottom: 25,
    borderColor: "#c6c6c6",
    textAlign: "center",
  },
});
