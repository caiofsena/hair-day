export const generateNewId = () => {
  return Math.random().toString().substr(2, 5);
}