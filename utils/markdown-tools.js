const toHashLink = phrase => {
  let kebabCase = phrase
    .split(" ")
    .map(s => s.toLowerCase())
    .join("-");
  return `#${kebabCase}`;
};

export { toHashLink };
