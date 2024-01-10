function generateDayName(dayIndex: number) {
  if (dayIndex === 0) return "nie";
  else if (dayIndex === 1) return "pon";
  else if (dayIndex === 2) return "wto";
  else if (dayIndex === 3) return "śro";
  else if (dayIndex === 4) return "czw";
  else if (dayIndex === 5) return "pią";
  else if (dayIndex === 6) return "sob";
  else return "Day Index ERROR";
}

export default generateDayName;
