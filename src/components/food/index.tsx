import { View, Pressable, Text, Image } from 'react-native';
import { FoodProps } from '../trending';
import { Ionicons } from '@expo/vector-icons';


export  function CardHorizontalFood({food}: {food: FoodProps} ) {
 return (
     <Pressable className='flex flex-col rounded-xl relative'>
       <Image
           className="w-44 h-32 rounded-t-lg"
           source={{
           uri: food.image,
           }}
       />
        <View className="flex flex-row bg-neutral-900/90 gap-1 rounded-full absolute top-2 right-3 px-2 py-1 justify-center">
        <Ionicons name="star" size={14 } color="#FFD700" />
        <Text className="text-white text-sm">{food.rating}</Text>
        </View>
         <View className="p-2">
              <Text className="text-lg font-semibold">{food.name}</Text>
              <Text className="text-sm text-neutral-700">{food.time}</Text>
              <Text className="text-sm text-neutral-700">R$ {food.price} - R$ {food.delivery}</Text>
            </View>
   </Pressable>
  );
}