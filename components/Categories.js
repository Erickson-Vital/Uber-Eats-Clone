import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

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
    <View style={{
      maringTop: 5,
      backgroundColor: "#fff",
      paddingVertical: 10,
      paddingLeft: 20,
    }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: 'center', marginRight: 30, }}>
            <Image source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: 'contain',
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: 'bold' }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}
