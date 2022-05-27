export const getFullYear = () => {
  return new Date().getFullYear();
};

export const getFooterCopy = (isIndex = true) => {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
};
