import ls from '../operations/navigation/ls.js';
import up from '../operations/navigation/up.js';
import cd from '../operations/navigation/cd.js';
import cat from '../operations/files/cat.js';
import add from '../operations/files/add.js';
import rn from '../operations/files/rn.js';
import cp from '../operations/files/cp.js';
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
  cat: {
    func: cat,
    argsCount: 1,
  },
  add: {
    func: add,
    argsCount: 1,
  },
  rn: {
    func: rn,
    argsCount: 2,
  },
  cp: {
    func: cp,
    argsCount: 2,
  },
};

export default async input => {
  const [command, ...args] = input.trim().split(' ');
  const operation = OPERATIONS[command];
  if (!operation || args.length !== operation.argsCount) throwInvalidInput();
  return operation.func(...args);
};
