# Overview

A simple script to convert the timezone of forex historical data downloaded from www.histdata.com

## Usage

1. Open into `config.js` file and modify the configuration parameters in it.

   - `initialFile` : the absolute file path + filename of the downloaded csv historical data file.
   - `initialTimezone` : the initial historical data file timezone. Should be GMT-5 as www.histdata.com uses EST.
   - `finalFile` : the absolute file path + filename of the converted timezone csv historical data file
   - `finalTimezone` : the converted historical data timezone.

2. Open cmd, cd to this project and run the below command:

   ```
   node index.js
   ```

3. Done~