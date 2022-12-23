/**
 * Config file
 * @return {object} config object
 */
function config() {
  return {
    initialFile: String.raw`D:\OneDrive\Documents HDD\Investment\forex\Trading\Historical Data\OneMinuteOHLC\GMT-5\EURUSD\DAT_MT_EURUSD_M1_2019.csv`,
    initialTimezone: -5, // in GMT
    finalFile: String.raw`D:\OneDrive\Documents HDD\Investment\forex\Trading\Historical Data\OneMinuteOHLC\GMT+2\EURUSD\DAT_MT_EURUSD_M1_2019.csv`,
    finalTimezone: 2, // in GMT
  };
}

export default config;
