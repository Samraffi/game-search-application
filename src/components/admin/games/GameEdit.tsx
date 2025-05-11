import { Edit, SimpleForm, ReferenceInput, TextInput } from "react-admin";

const GameEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="background_image" />
      <TextInput source="name" />
      <TextInput source="rating" />
      <TextInput source="released" />
    </SimpleForm>
  </Edit>
);

export default GameEdit;
