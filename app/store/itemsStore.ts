import {create} from "zustand";
import { ResultItem } from "../items/types/typeResult";

type ItemsStore = {
  searchQueryStore: ResultItem;
  setSearchQueryStore: (query: ResultItem) => void;
};

export const useItemsQuery = create<ItemsStore>((set) => ({
  searchQueryStore: [],
  setSearchQueryStore: (query) => set({ searchQueryStore: query })
}));
