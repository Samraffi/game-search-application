export const fetchGames = async () => {
  const response = await fetch(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data.results;
};