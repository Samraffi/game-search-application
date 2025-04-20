export const fetchGames = async (url) => {
  const response = await fetch(`https://api.rawg.io/${url}?key=${process.env.API_KEY}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data.results;
};