// import module
import fsp from 'fs/promises';
import { parse } from 'csv-parse/sync';
import { stringify } from 'csv-stringify/sync';
import moment from 'moment';

async function main(argv) {

  const INITIAL_FILE = argv.initialFile;
  const INITIAL_TIMEZONE = argv.initialTimezone;
  const FINAL_FILE = argv.finalFile;
  const FINAL_TIMEZONE = argv.finalTimezone;

  console.log('Start of Programe.');

  // read csv file
  console.log(`- Reading file (${INITIAL_FILE})...`);
  const fileContent = await fsp.readFile(INITIAL_FILE, 'utf8');
  const csvRecords = parse(fileContent);

  // hour to offset
  const offsetHours = FINAL_TIMEZONE - INITIAL_TIMEZONE;

  // modify csv records
  console.log('- Modifying records...');
  for (const csvRecord of csvRecords) {
    const time = moment(csvRecord[0] + ' ' + csvRecord[1], 'YYYY.MM.DD HH:mm', true);
    time.add(offsetHours, 'hours');
    csvRecord[0] = time.format('YYYY.MM.DD');
    csvRecord[1] = time.format('HH:mm');
  }

  // write csv file
  console.log('- Writing records to a new file...');
  const toWrite = stringify(csvRecords);
  await fsp.writeFile(FINAL_FILE, toWrite);

  console.log('End of Programe.');
}

export default main;
