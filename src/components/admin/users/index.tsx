import { ShowGuesser } from 'react-admin';
import { UserGroupIcon } from '@heroicons/react/20/solid';
import UserList from './UserList';

export default {
  list: UserList,
  show: ShowGuesser,
  icon: () => <UserGroupIcon className="w-5 h-5" />,
};
