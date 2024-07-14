export type Typefood = 
    { 
        "id": string, 
        "name": string, 
        "price": number,
        "time": string,
        "delivery": number,
        "rating": number,
        "image": string,
        "restaurantId": string,
        'category': string
  
      }

export type TypeRestaurant =
    {
        "id": string,
        "name": string,
        "image": string,
    }      