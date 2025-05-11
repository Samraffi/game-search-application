import { API_URL } from "../constants/api";

export const fetchGame = async (url) => {
  const response = await fetch(`${API_URL}/${url}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data;
};