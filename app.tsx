import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import * as SystemUI from "expo-system-ui";

import CategoriesScreen from "./screens/categories.screen";
import MealsOverviewScreen from "./screens/meals-overview.screen";

export type RootStackParameterList = {
  MealsCategories: undefined;
  MealsOverview: { categoryId: string };
};

SystemUI.setBackgroundColorAsync("#24180f");

const Stack = createNativeStackNavigator<RootStackParameterList>();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
