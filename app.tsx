import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import CategoriesScreen from "./screens/categories.screen";
import MealsOverviewScreen from "./screens/meals-overview.screen";

export type RootStackParameterList = {
  MealsCategories: undefined;
  MealsOverview: { categoryId: string };
};

const Stack = createNativeStackNavigator<RootStackParameterList>();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: { backgroundColor: "#351401" },
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            options={{
              title: "All Categories",
            }}
            component={CategoriesScreen}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
