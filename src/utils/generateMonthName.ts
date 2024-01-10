function generateMonthName(dayIndex: number) {
  if (dayIndex === 0) return "Styczeń";
  else if (dayIndex === 1) return "Luty";
  else if (dayIndex === 2) return "Marzec";
  else if (dayIndex === 3) return "Kwiecień";
  else if (dayIndex === 4) return "Maj";
  else if (dayIndex === 5) return "Czerwiec";
  else if (dayIndex === 6) return "Lipiec";
  else if (dayIndex === 7) return "Sierpień";
  else if (dayIndex === 8) return "Wrzesień";
  else if (dayIndex === 9) return "Październik";
  else if (dayIndex === 10) return "Listopad";
  else if (dayIndex === 11) return "Grudzień";
  else return "Month Index ERROR";
}

export default generateMonthName;
