const memoizaFactorial = () => {
  const cache = {};

  return function factorial(n) {
    if (n in cache) {
      console.log(`Fetching from cache for ${n}`);
      return cache[n];
    }


    console.log(`Calculating result for ${n}`);

    if (n === 0 || n === 1) {
      return 1;
    }

    const result = n * factorial(n - 1);

    cache[n] = result;

    return result;


  };
};

export default memoizaFactorial;
