import { View, Pressable, Text, Image } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
  return (
    <View className="w-full h-36 md:h-60 rounded-2xl mt-5 mb-4">
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        <Pressable
          className="w-full h-full rounded-2xl md:h-60"
          onPress={() => {
            "clicou na imagem 1";
          }}
        >
          <Image
            key="1"
            source={{ uri: "https://via.placeholder.com/375x150" }}
            className="w-full h-full rounded-2xl md:h-60"
          />         
        </Pressable>
        <Pressable
          className="w-full h-full rounded-2xl md:h-60"
          onPress={() => {
            "clicou na imagem 2";
          }}
        >
          <Image
            key="2"
            source={{ uri: "https://via.placeholder.com/375x150" }}
            className="w-full h-full rounded-2xl md:h-60"
          />
        </Pressable>
      </PagerView>
    </View>
  );
}
