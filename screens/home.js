import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import tw from "twrnc";

export default function Home({navigation}) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  return (
    <View style={tw.style("p-10")}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={tw.style('p-3 mt-3 border-2 rounded-lg border-purple-500')}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
