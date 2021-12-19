import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Movies from "./Screens/Movies";
import Detail from "./Screens/Detail";


const Tabs = createNativeStackNavigator();

const Navigator = () => (
  <Tabs.Navigator screenOptions={{headerShown: false, presentation:"modal"}}>
      <Tabs.Screen name="Movies" component={Movies} />
      <Tabs.Screen name="Detail" component={Detail} />
  </Tabs.Navigator>
);

export default Navigator;