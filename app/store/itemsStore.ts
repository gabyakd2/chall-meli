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

type SearchQueryStore = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useSearchQuery = create<SearchQueryStore>((set) => ({
  searchQuery: "",
  setSearchQuery: (query: string) => set({ searchQuery: query })
}))