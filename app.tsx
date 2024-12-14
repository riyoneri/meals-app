import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import Providers from "./providers";
import CategoriesScreen from "./screens/categories.screen";
import FavoritesScreen from "./screens/favorites.screen";
import MealDetailsScreen from "./screens/meal-details.screen";
import MealsOverviewScreen from "./screens/meals-overview.screen";

export type RootStackParameterList = {
  DrawerNavigation: undefined;
  MealsOverview: { categoryId: string };
  MealDetails: { mealId: string };
};

export type RootDrawerParameterList = {
  MealsCategories: undefined;
  Favorites: undefined;
};

const Stack = createNativeStackNavigator<RootStackParameterList>();
const Drawer = createDrawerNavigator<RootDrawerParameterList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        sceneStyle: { backgroundColor: "#351401" },
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#3f2f25" },
        drawerType: "front",
        drawerContentStyle: {
          backgroundColor: "#351401",
        },
        drawerItemStyle: {
          borderRadius: 3,
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="MealsCategories"
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
        component={CategoriesScreen}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Providers>
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
              name="DrawerNavigation"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={{ title: "About the Meal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Providers>
    </>
  );
}
