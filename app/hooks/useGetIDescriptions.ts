import { api } from "../services";
import { useQuery } from "@tanstack/react-query";

async function fetchDescriptions() {
  const { data } = await api.get("/items");
  return data;
}

export function useFetchDescriptions() {
  return useQuery(["descriptions"], fetchDescriptions);
}
