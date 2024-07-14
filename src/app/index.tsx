import { Text, View, ScrollView } from "react-native";
import { Header } from "../components/header";

import Constants from "expo-constants";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";

// Constants.statusBarHeight is used to get the height of the status bar
const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View
        className="w-full mt-10 px-4"
        style={{ marginTop: statusBarHeight + 8 }}
      >
        <Header />
        <Banner />
        <Search />
      </View>
      <Section
        name="Comidas em Alta"
        size="text-lg"
        label="Veja mais"
        action={() => {
          console.log("clicou no botao");
        }}
      />
        <TrendingFoods/>
      
      <Section
        name="Famosos no RogerFood"
        size="text-lg"
        label="Veja todos"
        action={() => {
          console.log(`clicou no botao "Veja todos"`);
        }}
      />
      <Restaurants/>
    </ScrollView>
  );
}
