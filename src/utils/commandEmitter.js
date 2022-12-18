import ls from '../operations/navigation/ls.js';
import up from '../operations/navigation/up.js';
import cd from '../operations/navigation/cd.js';
import { throwInvalidInput } from './errorThrower.js';

const OPERATIONS = {
  ls: {
    func: ls,
    argsCount: 0,
  },
  up: {
    func: up,
    argsCount: 0,
  },
  cd: {
    func: cd,
    argsCount: 1,
  },
};

export default async input => {
  const [command, ...args] = input.trim().split(' ');
  const operation = OPERATIONS[command];
  if (!operation || args.length !== operation.argsCount) throwInvalidInput();
  return operation.func(...args);
};
