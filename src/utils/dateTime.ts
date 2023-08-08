export const getLocaleTime = (date: number) =>
  new Date(date).toLocaleTimeString('ru', {
    hour: '2-digit',
    minute: '2-digit',
  });

export const getLocaleDate = (date: number) =>
  new Date(date).toLocaleDateString('ru', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
