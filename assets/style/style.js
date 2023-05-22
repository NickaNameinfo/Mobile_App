import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    justifyContent: "space-between",
    padding: 20,
    height: "100%",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#212761",
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
    borderRadius: 5,
    width: 150,
    backgroundColor: "#42a0dd",
    color: "#fff",
  },
  inputBox: {
    marginBottom: 10,
    borderTopLeftRadius: 30,
    borderRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
    fontSize: 14,
    borderColor: "white",
  },
  image: {
    height: 100,
    width: 100,
    margin: "auto",
    marginBottom: 30,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  backImage: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#212761",
  },
  card: {
    backgroundColor: "#d9d9d9c7",
    margin: 15,
  },
  Registercard: {
    backgroundColor: "#d9d9d9c7",
    margin: 15,
    marginBottom: 0,
    height: "90%",
  },
  textRght: {
    textAlign: "right",
    fontWeight: "600",
  },
  dashBoradCard: {
    minHeight: 100,
    borderRadius: 10,
    backgroundColor: "#7C2927",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  cardText: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
  cardHeader: {
    margin: 3,
    left: 15,
    fontWeight: "600",
  },
  Details: {
    fontSize: 18,
    backgroundColor: "#7C2927",
    padding: 10,
    color: "white",
  },
  DetailsData: {
    fontSize: 15,
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
  },
});
