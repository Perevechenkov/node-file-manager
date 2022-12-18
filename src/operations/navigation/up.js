import { chdir } from 'node:process';
import { throwOperationFailed } from '../../utils/errorThrower';

export default () => {
  try {
    chdir('..');
  } catch (err) {
    throwOperationFailed();
  }
};
