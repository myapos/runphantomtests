export default (fn, ms = 1500) =>
  new Promise(resolve => {
    const check = () => {
      const result = fn();
      console.log('result:', result);
      if (result) {
        clearInterval(interval);
        return resolve(result);
      }

      return true;
    };

    const interval = setInterval(check, ms);
  });

