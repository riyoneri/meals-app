import { StatusBar } from "expo-status-bar";
import * as SystemUI from "expo-system-ui";

import CategoriesScreen from "./screens/categories-screen";

SystemUI.setBackgroundColorAsync("#24180f");

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <CategoriesScreen />
    </>
  );
}
