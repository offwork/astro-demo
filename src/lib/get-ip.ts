import type { IPAddress } from "../models";

export const getUserIP = async () => {
  return await fetch("https://freeipapi.com/api/json/").then<IPAddress>(
    (response) => response.json()
  );
};
