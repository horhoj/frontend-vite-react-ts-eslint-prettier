export const memoize = <P extends unknown[], R>(cb: (...args: P) => Promise<R>) => {
  const getHash = (...args: P) => JSON.stringify(args);
  const data: Record<string, R> = {};

  return async (...args: P) => {
    const hash = getHash(...args);
    const value = data[hash];
    if (value === undefined) {
      const res = await cb(...args);
      // eslint-disable-next-line require-atomic-updates
      data[hash] = res;
      return res;
    }

    return value;
  };
};
