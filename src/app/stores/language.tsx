"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type LanguageContextType = {
  active: string;
  setActive: (lang: string) => void;
  setLanguage: (lang: string) => void;
  isActive: (lang: string) => boolean;
  text : (en: string | React.ReactNode, bn: string | React.ReactNode) => string | React.ReactNode;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [active, setActive] = useState<string>("bn");

  const setLanguage = (lang: string) => {
    if (lang !== "en" && lang !== "bn") return;
    setActive(lang);
  };

  const isActive = (lang: string) => active === lang;

  function text(en: string | React.ReactNode, bn: string | React.ReactNode){
    if(active == 'en') return en;
    return bn;
  }

  return (
    <LanguageContext.Provider value={{ active, setActive, setLanguage, isActive, text }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageStore = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguageStore must be used within a LanguageProvider");
  }
  return context;
};