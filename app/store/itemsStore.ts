import {create} from "zustand";
import { useFetchItems } from "../hooks";

type itemsSearchedState = {
  resultsOfSearch: string[]
  getItems: any
}

export const useItemsStore = create<itemsSearchedState>((set) => ({
  resultsOfSearch: [],
  getItems: useFetchItems
}))