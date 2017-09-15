import { TANK_TOPIC, TANK_BROKER } from '../constants';

const spawn = require('child_process').spawn;

export default (url, partition) => {
  const tank = spawn('/usr/local/bin/tank-cli', [
    '-b', TANK_BROKER,
    '-t', TANK_TOPIC,
    '-p', partition,
    'set', url,
  ], {
    shell: true,
    env: {
      'SWITCH_HAVE_TTY': 1,
    }
  });

  return new Promise(resolve => {
    tank.stdout.on('data', function(data) {
      console.log(`tank-cli out for url '${url}': ${data.toString()}`);
    });

    tank.stderr.on('data', function(data) {
      console.log(`tank-cli err for url '${url}': ${data.toString()}`);
    });

    tank.on('close', code => {
      // console.log(`TANK exit code: ${code}`);
      resolve(code);
    });
  });
};
