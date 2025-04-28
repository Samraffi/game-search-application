import { BookOpenIcon } from '@heroicons/react/20/solid';
import PostCreate from './PostCreate';
import PostEdit from './PostEdit';
import PostList from './PostList';

export default {
  list: PostList,
  create: PostCreate,
  edit: PostEdit,
  icon: () => <BookOpenIcon className="w-5 h-5" />,
};
