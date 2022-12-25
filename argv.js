import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

function argv() {
  const argv = yargs(hideBin(process.argv)).argv;
  _validateArgv(argv);
  return argv;
}

export default argv;

function _validateArgv(argv) {
  if (argv.initialFile === undefined) {
    throw new Error('Missing "initialFile" argument.');
  }
  if (argv.finalFile === undefined) {
    throw new Error('Missing "finalFile" argument.');
  }
  if (argv.initialTimezone === undefined) {
    argv.initialTimezone = -5;
    console.log(`Defaulted "initialTimezone" argument to GMT-5.`);
  }
  if (argv.finalTimezone === undefined) {
    argv.finalTimezone = 2;
    console.log(`Defaulted "finalTimezone" argument to GMT+2.`);
  }
}
