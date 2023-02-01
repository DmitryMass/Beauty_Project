export const transformDate = (date: Date) => {
  let day: string | number = date.getDate();
  let month: string | number = date.getMonth() + 1;
  if (day < 10) {
    day = `0${day}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }
  const format = `${day}.${month}.${date.getFullYear()}`;
  return format;
};
