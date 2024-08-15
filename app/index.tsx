import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Hello world!</Text>
      <Link href="/home" style={{ color: "blue" }}>
        Go to home
      </Link>
    </View>
  );
};

export default App;
