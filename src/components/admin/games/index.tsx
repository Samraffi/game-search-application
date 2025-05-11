import { BookOpenIcon } from '@heroicons/react/20/solid';
import GameCreate from './GameCreate';
import GameEdit from './GameEdit';
import GameList from './GameList';

export default {
  list: GameList,
  create: GameCreate,
  edit: GameEdit,
  icon: () => <BookOpenIcon className="w-5 h-5" />,
};
