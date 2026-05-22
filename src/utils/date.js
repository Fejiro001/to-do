export const createNewDate = () => {
  return new Date().toLocaleString("en-ca", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
};
