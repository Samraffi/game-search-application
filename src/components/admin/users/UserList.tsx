import { List, SimpleList, Datagrid, TextField, EmailField } from "react-admin";
import MyUrlField from '../MyUrlField';
import useMediaQuery from '../../../hooks/useMediaQuery';

const UserList = () => {
  const isSmall = useMediaQuery('(max-width: 600px)');

  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="phone" />
          <MyUrlField source="website" />
          <TextField source="company.name" />
        </Datagrid>
      )}
    </List>
  );
};

export default UserList;
