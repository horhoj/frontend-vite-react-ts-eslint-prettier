const CACHE_LIFETIME = 10000;

const getCurrentTimestamp = () => new Date().getTime();

export const memoize = <P extends unknown[], R>(cb: (...args: P) => Promise<R>) => {
  const getHash = (...args: P) => JSON.stringify(args);
  const data: Record<string, { res: R; timestamp: number }> = {};

  return async (...args: P) => {
    const hash = getHash(...args);
    const value = data[hash];
    if (value === undefined || getCurrentTimestamp() - value.timestamp > CACHE_LIFETIME) {
      const res = await cb(...args);
      // eslint-disable-next-line require-atomic-updates
      data[hash] = { res, timestamp: getCurrentTimestamp() };
      return res;
    }

    return value.res;
  };
};
