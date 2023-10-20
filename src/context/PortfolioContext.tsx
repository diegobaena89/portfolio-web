import { createContext, useCallback, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { enUS } from "../languages/english/enUS";
import { elGR } from "../languages/greek/elGR";

export type PortfolioContextType = {
  locale: string;
  setLocale: React.Dispatch<React.SetStateAction<string>>;
  translation: any;
  setTranslation: React.Dispatch<React.SetStateAction<any>>;
  handleToggleLanguage: () => void;
};

export const PortfolioContext = createContext<PortfolioContextType | undefined>(
  undefined
);

type PortfolioProviderProps = {
  children: React.ReactNode;
};

export const PortfolioProvider: React.FC<PortfolioProviderProps> = ({
  children,
}) => {
  const router = useRouter();
  const [locale, setLocale] = useState("en");
  const [translation, setTranslation] = useState({});

  const verifyLocale = useCallback(
    (locale: string) => {
      if (locale === "en") {
        setTranslation(enUS);
      } else {
        setTranslation(elGR);
      }
    },
    [setTranslation]
  );

  const handleToggleLanguage = useCallback(() => {
    switch (locale) {
      case "en":
        setLocale("el");
        verifyLocale("el");
        router.push("/", "/", { locale: "el" });
        break;
      case "el":
        setLocale("en");
        verifyLocale("en");
        router.push("/", "/", { locale: "en" });
        break;
    }
  }, [locale, setLocale, verifyLocale, router]);

  const contextValue = useMemo(
    () => ({
      locale,
      setLocale,
      handleToggleLanguage,
      translation,
      setTranslation,
    }),
    [handleToggleLanguage, locale, translation]
  );

  return (
    <PortfolioContext.Provider value={contextValue}>
      {children}
    </PortfolioContext.Provider>
  );
};
