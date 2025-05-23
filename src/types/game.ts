export type GameCardProps = {
  id: number;
  background_image: string;
  name: string;
  rating: number;
  released: string;
}

export type GameProps = {
  id: number;
  title: string;
  background_image?: string;
  rating?: number;
  released?: string;
  runtime?: number;
  src?: string;
  genres?: { id: number; name: string }[];
  description_raw?: string;
  developers?: { id: number; name: string }[];
}

export type GameCardData = { game: GameCardProps }

export type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
}
