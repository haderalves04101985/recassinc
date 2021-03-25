import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <br></br>
      <NavLink activeClassName="badge badge-primary" to="/" end>
        Agendamentos
      </NavLink>{' '}
      |{' '}
      <NavLink activeClassName="badge badge-primary" to="cadastro">
        Agendar treinos
      </NavLink>
    </nav>
  );
};

export default Header;
