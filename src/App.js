import { Admin, Resource, Login } from "react-admin";
import React from "react";
import jsonServerProvider from "ra-data-json-server";
import { CreateSocio, EditSocio, ListSocio } from "./pages/socio";
import { CreateFuncionario, EditFuncionario, ListFuncionario } from "./pages/funcionario";
import authProvider from "./authProvider"
import Dashboard from './Dashboard';

const dataProvider = jsonServerProvider("http://localhost:8080");
const imgLogin = () => <Login backgroundImage="https://www.apartmaninovakovic.com/wp-content/uploads/2015/08/swimming-pool-1024x682.jpg" />

function App() {
  return (
    <Admin authProvider={authProvider} dataProvider={dataProvider} loginPage={imgLogin} dashboard={Dashboard}>
      <Resource
        name="socio"
        list={ListSocio}
        edit={EditSocio}
        create={CreateSocio}
      />
      <Resource
        name="funcionario"
        list={ListFuncionario}
        edit={EditFuncionario}
        create={CreateFuncionario}
      />
      <div style={{
        position: 'fixed', right: 0, bottom: 0, left: 0, zIndex: 10,
        padding: 2,
        backgroundColor: '#2196f3',
        textAlign: 'center',
        color: "white"
      }}><strong>Developed by Anderson Holanda</strong></div>
    </Admin>
  );
}

export default App;
