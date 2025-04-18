export type GameProps = {
  id: number;
  background_image: string;
  name: string;
  rating: number;
  released: string;
}

export type CardProps = { game: GameProps }