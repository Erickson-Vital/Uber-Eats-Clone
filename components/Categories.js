import React from 'react'
import { View, Text, Image } from 'react-native'

const items = [
    {
      image: require("../assets/images/shopping-bag.png"),
      text: "Pick-up", // Escolher
    },
    {
      image: require("../assets/images/soft-drink.png"),
      text: "Soft Drinks", // Refrigerantes
    },
    {
      image: require("../assets/images/bread.png"),
      text: "Bakery Items", // Itens de padaria
    },
    {
      image: require("../assets/images/fast-food.png"),
      text: "Fast Foods", // Comidas rápidas
    },
    {
      image: require("../assets/images/deals.png"),
      text: "Deals", // Promoções
    },
    {
      image: require("../assets/images/coffee.png"),
      text: "Coffee & Tea", // Café & chá
    },
    {
      image: require("../assets/images/desserts.png"),
      text: "Desserts", // Sobremesas
    },
  ];

export default function Categories() {
    return (
        <View>
            <Image source={items[0].image} 
            style={{
                width: 50,
                height: 40,
                resizeMode: 'contain'
            }}
            />
            <Text>Pick-Up</Text>
        </View>
    )
}
