export default function shoDate(dateObject: Date | string) {
  if (typeof dateObject === "string") dateObject = new Date(dateObject);
  let year = dateObject.getFullYear();
  let month = dateObject.getMonth();
  let day = dateObject.getDate();
  //let hours = dateObject.getUTCHours();
  //let minutes = dateObject.getUTCMinutes();
  function format(date: number) {
    return date < 10 ? 0 + date.toString() : date;
  }
  //return `${format(day)}/${format(month)}/${year} ${format(hours)}:${format(minutes)}`;
  return `${format(day)}-${format(month + 1)}-${year}`;
}
