import { Admin, Resource } from 'react-admin';
import { Dashboard } from '../components/admin/Dashboard';
import posts from "../components/admin/posts";
import users from "../components/admin/users";
import { authProvider } from '../authProvider';
import { dataProvider } from '../dataProvider';

const AdminPage = () => {
  return (
    <Admin
      basename="/admin"
      authProvider={authProvider}
      dataProvider={dataProvider}
      dashboard={Dashboard}
    >
      <Resource name="posts" {...posts} />
      <Resource name="users" {...users} />
    </Admin>
  );
};

export default AdminPage;
