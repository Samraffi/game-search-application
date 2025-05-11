import { Create, SimpleForm, ReferenceInput, TextInput } from "react-admin";

const GameCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" reference="games" />
      <TextInput source="background_image" />
      <TextInput source="name" />
      <TextInput source="rating" />
      <TextInput source="released" />
    </SimpleForm>
  </Create>
);

export default GameCreate;
