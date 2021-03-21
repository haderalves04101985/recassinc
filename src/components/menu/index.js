import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink activeClassName="badge badge-primary" to="/" end>
        Agendamento
      </NavLink>{' '}
      |{' '}
      <NavLink activeClassName="badge badge-primary" to="cadastro">
        Cadastro de Alunos
      </NavLink>
    </nav>
  );
};

export default Header;
