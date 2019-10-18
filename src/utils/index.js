const checkOnEmpty = str => {
  return str === "" || str === null || str === undefined ? false : true;
};

const checkStrOnRegExp = str => {
  const regExp = /^([1-9][1-9]|[0-9])$/;
  return regExp.test(str);
};

export { checkOnEmpty, checkStrOnRegExp };
