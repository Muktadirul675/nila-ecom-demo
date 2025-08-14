import { useLanguageStore } from "../stores/language";

export function useText(en: string | React.ReactNode, bn: string | React.ReactNode) {
  const language = useLanguageStore();
  return language.text(en, bn);
}