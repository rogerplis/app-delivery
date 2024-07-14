import { TypeRestaurant } from "@/types/type";
import { Pressable, Image, Text } from "react-native";

export function RestauranteItem({ item }: { item: TypeRestaurant }) {
  return (
    <Pressable className="flex flex-col rounded-full relative">
      <Image
        className="w-20 h-20 rounded-full"
        source={{
          uri: item.image,
        }}
      />
      <Text
        className="text-center text-sm mt-2 leading-4 text-black"
        numberOfLines={2}
      >
        {item.name}
      </Text>
    </Pressable>
  );
}
