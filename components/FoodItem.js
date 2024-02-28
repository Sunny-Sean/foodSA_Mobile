import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import MenuItem from "./MenuItem";

function FoodItem({ item }) {
  const data = [item];
  return (
    <View>
      {data?.map((item, index) => (
        <>
          <Pressable
            style={{
              margin: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            key={index}
          >
            <Text style={{ fontSize: 19, fontWeight: "bold" }}>
              {item?.name} ({item?.items.length}){" "}
            </Text>
            <AntDesign name="down" size={20} color="black" />
          </Pressable>

          {item?.items?.map((item, index) => (
            <MenuItem key={index} item={item} />
          ))}
        </>
      ))}
    </View>
  );
}

export default FoodItem;
