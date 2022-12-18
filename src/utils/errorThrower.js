export const throwInvalidInput = err => {
  err ? console.log(err.message) : '';
  throw new Error('Invalid input');
};

export const throwOperationFailed = err => {
  err ? console.log(err.message) : '';
  throw new Error('Operation failed');
};
