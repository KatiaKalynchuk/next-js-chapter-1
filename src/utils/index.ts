export const formatDate = (date: string | undefined) =>
  date && new Date(date).toISOString().split('T')[0];
