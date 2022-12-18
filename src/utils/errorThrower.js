export const throwInvalidInput = err => {
  console.log(err.message);
  throw new Error('Invalid input');
};

export const throwOperationFailed = err => {
  console.log(err.message);
  throw new Error('Operation failed');
};
