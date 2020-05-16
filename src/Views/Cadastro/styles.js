import { StyleSheet, Dimensions } from "react-native";
const largura = Dimensions.get("screen").width;

export default StyleSheet.create({
  container: {
    flexGrow: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    fontSize: 24,
    width: largura * 0.8,
    borderBottomWidth: 1,
    marginBottom: 20,
    borderColor: "#c6c6c6",
  },
  addButtom: {
    marginBottom: 45,
    marginHorizontal: 35,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#836FFF",
  },

  textButtom: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
