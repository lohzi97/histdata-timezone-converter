# Overview

A simple script to convert the timezone of forex historical data downloaded from www.histdata.com

## Prerequisite

1. You need to have NodeJs installed.

   For non-programmer, follow: https://www.youtube.com/watch?v=4Wq53LL4alQ

## Setup

1. Clone it to your local

   For non-programmer, in layman term, this means that:

   1. Download the code as zip file (you should able to find 'Download ZIP' button somewhere in this page).
   2. Extract the zip file.

2. cd to the project

   For non-programmer, in layman term, this means that:

   1. Open command prompt (cmd).
   2. Navigate to the extracted zip file in cmd by typing:

      ```
      cd [folder-path-to-the-extracted-zip-file]

      Example:
      cd D:\Project\NodeJs\histdata-timezone-converter
      ```

      Note: if your folder is located in another hard drive, then you will need to [navigate to the hard drive first](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiwtJb-8dr-AhX1SWwGHW30Ab4QFnoECAkQAw&url=https%3A%2F%2Fwww.minitool.com%2Fnews%2Ffix-cant-navigate-to-d-drive-cd-command.html%23%3A~%3Atext%3DQ2%253A%2520How%2520do%2520I%2520navigate%2Ckey%2520to%2520access%2520D%2520drive.&usg=AOvVaw0NIKhRCiuPLUS67sUoDotG).

3. run `npm install`

   For non-programmer, in layman term, this means that:

   1. In your cmd that you have already navigated to the extracted zip file, type `npm install` to install it. This will install all the depenency that the script needs.

      Example screenshot on how your cmd should now looks like: https://drive.google.com/file/d/11vBKsrgcWoe6tp2GJtti8P3WWJGh-Gx-/view?usp=share_link

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