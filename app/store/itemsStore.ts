import {create} from "zustand";

type SearchQueryStore = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useSearchQuery = create<SearchQueryStore>((set) => ({
  searchQuery: "",
  setSearchQuery: (query: string) => set({ searchQuery: query })
}))