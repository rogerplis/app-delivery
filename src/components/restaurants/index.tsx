import { TypeRestaurant } from '@/types/type';
import { useEffect, useState } from 'react';
import { FlatList} from 'react-native';
import { RestauranteItem } from './horizontal';

export function Restaurants() {
    const [restaurant, setRestaurant] = useState<TypeRestaurant[]>([]);
    
    useEffect(() => {
        async function getRestaurant() {
        const response = await fetch('http://192.168.100.51:3000/restaurants')
        const data = await response.json();
        setRestaurant(data);
        }
        getRestaurant();

    }   , []);
    

 return (
    <FlatList
      data={restaurant}
      renderItem={({ item }) => <RestauranteItem  item={item}/>}
      horizontal={true}
      contentContainerStyle={{ gap:14, paddingLeft: 16, paddingRight: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  );
}