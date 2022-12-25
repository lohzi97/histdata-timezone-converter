# Overview

A simple script to convert the timezone of forex historical data downloaded from www.histdata.com

## Usage

1. Open cmd, cd to this project and run the below command:

   ```
   // command
   npm run start -- --initialFile="initialFile" --finalFile="finalFile"

   // full example
   npm run start -- --initialFile="D:\OneDrive\Documents HDD\Investment\forex\Trading\Historical Data\OneMinuteOHLC\GMT-5\EURUSD\DAT_MT_EURUSD_M1_2019.csv" --finalFile="D:\OneDrive\Documents HDD\Investment\forex\Trading\Historical Data\OneMinuteOHLC\GMT+2\EURUSD\DAT_MT_EURUSD_M1_2019.csv" --initialTimezone=-5 --finalTimezone=2
   ```

   Arguments:
   - `initialFile`: required. The full filepath (including filename and file extension) of the downloaded csv historical data file.
   - `finalFile`: required. The full filepath (including filename and file extension) of the converted timezone csv historical data file.
   - `initialTimezone` : optional. The initial historical data file timezone in GMT. Defaulted to GMT-5 as www.histdata.com uses EST.
   - `finalTimezone` : optional. The converted historical data timezone in GMT. Defaulted to GMT+2 as it is common to end the day at new york close.

2. Done~