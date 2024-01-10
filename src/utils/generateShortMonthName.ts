function generateShortMonthName(dayIndex: number) {
  if (dayIndex === 0) return "Sty";
  else if (dayIndex === 1) return "Lut";
  else if (dayIndex === 2) return "Mar";
  else if (dayIndex === 3) return "Kwi";
  else if (dayIndex === 4) return "Maj";
  else if (dayIndex === 5) return "Cze";
  else if (dayIndex === 6) return "Lip";
  else if (dayIndex === 7) return "Sie";
  else if (dayIndex === 8) return "Wrz";
  else if (dayIndex === 9) return "Paź";
  else if (dayIndex === 10) return "Lis";
  else if (dayIndex === 11) return "Gru";
  else return "Month Index ERROR";
}

export default generateShortMonthName;
