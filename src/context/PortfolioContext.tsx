import { createContext, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { enUS } from "../languages/english/enUS";
import { elGR } from "../languages/greek/elGR";

export type PortfolioContextType = {
  locale: string;
  setLocale: React.Dispatch<React.SetStateAction<string>>;
  translation: any;
  setTranslation: React.Dispatch<React.SetStateAction<any>>;
  handleToggle: () => void;
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
  const verifyLocale = (locale: string) => {
    if (locale === "en") {
      setTranslation(enUS);
    } else {
      setTranslation(elGR);
    }
  };

  const handleToggle = () => {
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
  };

  const contextValue = useMemo(
    () => ({
      locale,
      setLocale,
      handleToggle,
      translation,
      setTranslation,
    }),
    [locale, setLocale]
  );

  return (
    <PortfolioContext.Provider value={contextValue}>
      {children}
    </PortfolioContext.Provider>
  );
};
