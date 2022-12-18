import ls from '../operations/navigation/ls.js';

const OPERATIONS = {
  ls,
};

export default async command => {
  return OPERATIONS[command]();
};
