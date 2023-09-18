export const wordCount = (text = "") => {
  const wordArray = text.split(/\W/gi);
  return wordArray.filter((word) => word).length;
};
