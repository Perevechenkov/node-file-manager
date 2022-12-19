import { cpus, EOL, userInfo } from 'node:os';
import { arch } from 'node:process';
import { throwInvalidInput } from '../../utils/errorThrower.js';

export default arg => {
  const cpusInfo = cpus().map(cpu => ({
    model: cpu.model,
    speed: `${cpu.speed / 1000}GHz`,
  }));

  const { username, homedir } = userInfo();

  const OPTIONS = {
    '--EOL': JSON.stringify(EOL),
    '--cpus': cpusInfo,
    '--homedir': homedir,
    '--username': username,
    '--architecture': arch,
  };

  if (!OPTIONS[arg]) throwInvalidInput();

  if (arg === '--cpus')
    console.log(`Overall amount of CPUS: ${cpusInfo.length}`);
  console.table(OPTIONS[arg]);
};
