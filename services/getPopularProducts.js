export const getPopularProducts = async () => {
  const response = await fetch('/api/popular');
  const json = await response.json();

  return json;
};
