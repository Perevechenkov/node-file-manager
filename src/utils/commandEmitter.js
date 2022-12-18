import ls from '../operations/navigation/ls.js';
import up from '../operations/navigation/up.js';

const OPERATIONS = {
  ls,
  up,
};

export default async command => {
  return OPERATIONS[command]();
};
