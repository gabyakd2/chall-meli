import { api } from "../services";
import { useQuery } from "@tanstack/react-query";

async function fetchDescriptions(id: string) {
  const { data } = await api.get(`/items/${id}`);
  return data;
}

export function useFetchDescriptions(id: string) {
  return useQuery(["descriptions"], () => fetchDescriptions(id));
}
