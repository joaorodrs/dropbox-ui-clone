import React from 'react';

import {
  Container,
  Navigation,
  DropboxLogo,
  Form
} from './styles';

const MenuForm: React.FC = () => {
  return (
    <Container>
      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>

        <button className="action--close">✕</button>
      </Navigation>

      <Form>
        <span className="title">Registre-se</span>
        <span className="subtitle">Preencha o formulário abaixo</span>

        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Sobrenome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button>Prosseguir</button>
        <span className="termns">
          Esta página está sujeita à Política de Privacidade e aos Termos de Serviço.
        </span>
      </Form>
    </Container>
  );
};

export default MenuForm;
