/* eslint no-var: 0 */

export default async page => {
  await page.evaluate(() => {
    var left_ = 0;
    var top_ = 0;
    var h = document.querySelector('[class^=HYPE]');
    var c = document.querySelector('canvas');
    var e = document.querySelector('[class^=EDGE]');
    var gwd = document.querySelector('gwd-genericad');
    console.log('detected :', h, c, e, gwd);
    if (h !== null) {
      console.log('HYPE is being used. HYPE scene.');
    } else if (c !== null) {
      console.log('Canvas and createJS are being used.');
    } else if (e !== null) {
      console.log('EDGE is being used.');
    } else if (gwd !== null) {
      console.log('Google Web Designer Tool is being used.');
    } else {
      console.log('No popular case is detected.');
    }
    // set banner position to left and top pixels
    console.log('Moving banner to {top:0, left:0}');
    (h || c || e || gwd).style.position = 'fixed';
    (h || c || e || gwd).style.left = left_ + 'px';
    (h || c || e || gwd).style.top = top_ + 'px';
  });
};
