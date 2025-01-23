export const toggleTheme = (theme) => {
  switch (theme) {
    case "system":
    case "light":
      return "dark";
    case "dark":
      return "light";
    default:
      break;
  }
};
