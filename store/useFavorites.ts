import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Location {
  id: string;
  name: string;
  country: string;
  temp: number;
  condition: string;
}

interface FavoritesStore {
  favorites: Location[];
  addFavorite: (location: Location) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const useFavorites = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (location) => {
        const { favorites } = get();
        if (!favorites.find((fav) => fav.id === location.id)) {
          set({ favorites: [...favorites, location] });
        }
      },
      removeFavorite: (id) => {
        const { favorites } = get();
        set({ favorites: favorites.filter((fav) => fav.id !== id) });
      },
      isFavorite: (id) => {
        const { favorites } = get();
        return favorites.some((fav) => fav.id === id);
      },
    }),
    {
      name: "weather-favorites",
    }
  )
);
