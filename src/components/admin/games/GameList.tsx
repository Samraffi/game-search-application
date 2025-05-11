import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  ReferenceInput,
  TextInput,
} from "react-admin";

const gameFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="Game" reference="games" />,
];

const GameList = () => (
  <List filters={gameFilters}>
    <Datagrid rowClick={false}>
      <TextField source="id" />
      <TextField source="background_image" />
      <TextField source="name" />
      <TextField source="rating" />
      <TextField source="released" />
      <EditButton />
    </Datagrid>
  </List>
);

export default GameList;
