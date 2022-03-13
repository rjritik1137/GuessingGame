const generateRandomTarget = (upperLimit = 100) => {
  return Math.trunc(Math.random() * upperLimit) + 1
}
export { generateRandomTarget }
