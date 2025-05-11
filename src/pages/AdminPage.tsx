import { Admin, Resource } from 'react-admin';
import games from "../components/admin/games";
import { authProvider } from '../authProvider';
import { dataProvider } from '../dataProvider';

const AdminPage = () => {
  return (
    <Admin
      basename="/admin"
      authProvider={authProvider}
      dataProvider={dataProvider}
    >
      <Resource name="games" {...games} />
    </Admin>
  );
};

export default AdminPage;
