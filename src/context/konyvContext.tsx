import { createContext, useContext, useEffect, useState } from "react"
import { getKonyv } from "../service/service";
import type { konyvType,  } from "../types/KonyvType";

interface KonyvProps {
    konyvek:konyvType[];
    load: boolean;
  error: string | null;
}

export const KonyvContext = createContext<KonyvProps[]|undefined>(undefined);

export  function KonyvContextProvider({ children }: { children: React.ReactNode }) {
    const [konyvek, setKonyvek] = useState<konyvType[]>([])
    const [load, setLoad] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

      useEffect(() => {
    getKonyv()
      .then((data) => {
        setKonyvek(data);
        setError(null);
      })
      .catch(() => {
        setError("Nem sikerült betölteni a termékeket.");
      })
      .finally(() => {
        setLoad(false);
      });
  }, []);

  return (
    <KonyvContext.Provider value={{ konyvek, load, error }}>
      {children}
    </KonyvContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(KonyvContextProvider);

  if (context === undefined) {
    throw new Error("A useProductContext csak a ProductProvider-en belül használható.");
  }

  return context;
}



