import React from "react";
import {
  Create,
  Edit,
  List,
  Datagrid,
  TextField,
  TextInput,
  SimpleForm,
  SelectInput,
  ReferenceInput
} from "react-admin";

export const CreateSocio = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="nome" />
      <TextInput source="rg" />
      <TextInput source="cpf" />
      <TextInput source="telefone" />
      <TextInput source="endereco" />
      <TextInput source="banco" />
      <TextInput source="agencia" />
      <TextInput source="conta" />
      <SelectInput
        source="tipo"
        choices={[
          { id: "socio", name: "Socio" },
          { id: "dependente", name: "Dependente" },
        ]}
      />
      {/* <TextInput source="dependencia" /> */}
      <ReferenceInput label="Socios" source="dependencia" reference="socio">
        <SelectInput optionText="nome" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const ListSocio = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="Id" />
      <TextField source="nome" label="Nome" />
      <TextField source="rg" label="RG" />
      <TextField source="cpf" label="CPF" />
      <TextField source="telefone" label="Telefone" />
      <TextField source="endereco" label="Endereco" />
      <TextField source="banco" label="Banco" />
      <TextField source="agencia" label="Agencia" />
      <TextField source="conta" label="Conta" />
      <TextField source="tipo" label="Tipo" />
      <TextField source="dependencia" label="Dependencia" />
    </Datagrid>
  </List>
);

export const EditSocio = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="nome" label="Nome" />
      <TextInput source="rg" label="RG" />
      <TextInput source="cpf" label="CPF" />
      <TextInput source="telefone" label="Telefone" />
      <TextInput source="endereco" label="Endereco" />
      <TextInput source="banco" label="Banco" />
      <TextInput source="agencia" label="Agencia" />
      <TextInput source="conta" label="Conta" />
      <SelectInput
        source="tipo"
        choices={[
          { id: "socio", name: "Socio" },
          { id: "dependente", name: "Dependente" },
        ]}
      />
      {/* <TextInput source="dependencia" label="Dependencia" /> */}
      <ReferenceInput label="Socios" source="dependencia" reference="socio">
        <SelectInput optionText="nome" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);