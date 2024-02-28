import { Redirect } from "expo-router";
import { Text, View } from "react-native";

function index() {
  return <Redirect href="/authenticate/login" />;
}

export default index;
