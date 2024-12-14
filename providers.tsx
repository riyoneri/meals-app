import { PropsWithChildren } from "react";
import { Provider } from "react-redux";

import { store } from "./store/redux/store";

export default function Providers({ children }: PropsWithChildren) {
  // const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  // const addFavorite = (id: string) => {
  //   setFavoriteIds((previousFavoriteIds) => [...previousFavoriteIds, id]);
  // };

  // const removeFavorite = (id: string) => {
  //   setFavoriteIds((previousFavoriteIds) =>
  //     previousFavoriteIds.filter(
  //       (previousFavoriteId) => previousFavoriteId !== id,
  //     ),
  //   );
  // };

  // const values = {
  //   ids: favoriteIds,
  //   addFavorite,
  //   removeFavorite,
  // };

  return <Provider store={store}>{children}</Provider>;
}
