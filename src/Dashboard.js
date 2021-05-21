import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

export default () => (
    <Card>
        <CardHeader title="Bem vindo ao sistema do clube!" />
        <CardContent>
            <h3 style={{ fontStyle: "italic" }}>NOTA</h3>
            <ul>
                <li>O nosso sistema encontra-se em fase alpha de testes.</li>
                <li>Até o presente momento temos acesso a este dashboard e ao CRUD completo de sócios e funcionários, que pode ser encontrado no menu a esquerda.</li>
            </ul>
            <h3 style={{ fontStyle: "italic" }}>SOBRE O FUNCIONAMENTO</h3>
            <ul>
                <li><strong>CRIAR NOVO USUÁRIO:</strong> Há um botão acima da listagem onde pode ser criado um novo usuário.</li>
                <li><strong>EDITAR USUÁRIO:</strong> Basta clicar no item da lista que se deseja atualizar alguma informação.</li>
                <li><strong>DELETAR USUÁRIO:</strong> Selecione um ou mais itens na lista e clique em deletar logo acima da tabela.</li>
                <li><strong>SAIR DO SISTEMA:</strong> Basta clicar no avatar no canto superior direito e em seguida no botão de logout.</li>
            </ul>
            <h3 style={{ fontStyle: "italic" }}>AGRADECIMENTO</h3>
            <p style={{ textIndent: "20px" }}>Agradeço a Juliano e a toda equipe da Logique Sistemas pela oportunidade que me foi dada.</p>
        </CardContent>
    </Card>
);