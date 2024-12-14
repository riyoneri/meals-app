import { PropsWithChildren, useState } from "react";

import { FavoritesContext } from "./store/context/favorites-context";

export default function Providers({ children }: PropsWithChildren) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavoriteIds((previousFavoriteIds) => [...previousFavoriteIds, id]);
  };

  const removeFavorite = (id: string) => {
    setFavoriteIds((previousFavoriteIds) =>
      previousFavoriteIds.filter(
        (previousFavoriteId) => previousFavoriteId !== id,
      ),
    );
  };

  const values = {
    ids: favoriteIds,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
}
