export const debounce = <P extends unknown[]>(cb: (...args: P) => void, timeout: number) => {
  let timerId: NodeJS.Timeout | null = null;
  return (...args: P) => {
    if (timerId !== null) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => cb(...args), timeout);
  };
};
