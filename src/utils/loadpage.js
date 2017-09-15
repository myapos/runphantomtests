import phantom from 'phantom';
import chalk from 'chalk';
import getHostname from './getHostname';

import * as constants from '../constants';

export default async url => {
  console.log('initialize page for url', url);

  const hostname = getHostname(url);

  const instance = await phantom.create(constants.CREATE_OPTIONS);

  const page = await instance.createPage();

  page.on('onConsoleMessage', msg => { console.log(msg); });

  page.on('onResourceRequested', (requestData, networkRequest) => {
    //console.log('Request (#' + requestData.id + '): ' + JSON.stringify(requestData));
    if(JSON.stringify(requestData).match(/gbanner/)){
      console.log('Request (#' + requestData.id + '): ' + JSON.stringify(requestData));
    }
  });

  const status = await page.open(url);
  // const title = await page.property('title');
  // console.log(title);

  await page.evaluate(() => {
    console.log('title:'+document.title);
    console.log('ad loaded:', document.getElementById('div-gpt-ad-web_300x250'));
  });

  console.log(`${chalk.grey('Parsing:')} ${chalk.green(hostname)}`);

  await instance.exit();
  
};
