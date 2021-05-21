import React from "react";
import {
  Create,
  Edit,
  List,
  Datagrid,
  TextField,
  TextInput,
  SimpleForm
} from "react-admin";

export const CreateFuncionario = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="email" />
      <TextInput source="senha" />
    </SimpleForm>
  </Create>
);

export const ListFuncionario = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="Id" />
      <TextField source="email" label="Email" />
    </Datagrid>
  </List>
);

export const EditFuncionario = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="email" label="Email" />
      <TextInput source="senha" label="Senha" />
    </SimpleForm>
  </Edit>
);