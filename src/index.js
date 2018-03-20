const throwError = (errorMessage) => {
  const error = new Error(errorMessage);
  throw error;
};

module.exports = (errorMessage) => {
  return new Proxy(new Function(), {
    get() {
      throwError(errorMessage);
    },
    set() {
      throwError(errorMessage);
    },
    apply() {
      throwError(errorMessage);
    }
  });
};
