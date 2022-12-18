import ls from '../operations/ls.js';

const OPERATIONS = {
  ls,
};

export default async command => {
  return OPERATIONS[command]();
};
