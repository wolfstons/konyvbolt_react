import type { konyvType } from "../types/KonyvType";

const URI = "http://localhost:3000/konyvek";

export async function getKonyv(): Promise<konyvType[]> {
  const response = await fetch(URI);

  if (!response.ok) {
    throw new Error("Hiba történt a termékek lekérésekor.");
  }

  return (await response.json()) as konyvType[];
}
