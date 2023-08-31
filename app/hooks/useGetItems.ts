import { api } from "../services";
import { useQuery } from "@tanstack/react-query";


async function fetchItems(query: string) {
  const { data } = await api.get(`/items?q=${query}`)
  return data;
}

export function useFetchItems(query: string) {
  return useQuery(["items"], () => fetchItems(query));
}
