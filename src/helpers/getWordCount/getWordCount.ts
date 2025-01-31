export const getWordCount = (text = "") => {
  const wordArray = text.split(/\W/gi);
  return wordArray.filter((word) => word).length;
};
