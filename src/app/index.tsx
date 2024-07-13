import { Text, View, ScrollView } from "react-native";
import { Header } from "../components/header";

import Constants from "expo-constants";

// Constants.statusBarHeight is used to get the height of the status bar
const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full mt-10 px-4" style={{ marginTop: statusBarHeight + 8}}>
        <Header />
      </View>
    </ScrollView>
  );
}
