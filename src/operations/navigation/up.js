import { chdir } from 'node:process';
import { throwOperationFailed } from '../../utils/errorThrower.js';

export default () => {
  try {
    chdir('..');
  } catch (err) {
    throwOperationFailed(err);
  }
};
