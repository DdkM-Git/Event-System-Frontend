type LanguageType = "pl" | "en";

export default function translateBoolean(myBoolean: boolean, language: LanguageType): string {
  if (myBoolean) {
    switch (language) {
      case "pl":
        return "Tak";
      case "en":
        return "Yes";
      default:
        return "{Error}";
    }
  } else {
    switch (language) {
      case "pl":
        return "Nie";
      case "en":
        return "No";
      default:
        return "{Error}";
    }
  }
}
