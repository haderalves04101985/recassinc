import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const Treinos = () => {
  function formatarData(data) {
    return format(new Date(data), 'dd/MM/yyyy HH:mm');
  }
  const [treinos, setTreinos] = useState([]);
  useEffect(() => {
    async function getTreinos() {
      const resposta = await axios.get(
        'http://localhost:3000/treinos?_expand=modalidade',
      );
      setTreinos(resposta.data);
    }
    getTreinos();
  }, []);

  async function removerTreino(id) {
    if (window.confirm('Deseja excluir?')) {
      try {
        await axios.delete(`http://localhost:3000/treinos/${id}`);

        setTreinos(treinos.filter((treino) => treino.id !== id));
      } catch (error) {
        alert('Erro ao excluir!');
      }
    }
  }

  if (treinos.length === 0) {
    return <p>Sem treinos cadastrados..</p>;
  }

  return (
    <div>
      <hr />
      <h1>Agendamento de treino</h1>

      <hr />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome do aluno</th>
            <th>Agendamento</th>
            <th>Modalidade</th>
            <th>Gerenciar</th>
          </tr>
        </thead>

        <tbody>
          {treinos.map((treino) => (
            <tr key={treino.id}>
              <td>{treino.nome}</td>
              <td>{formatarData(treino.dia)}</td>
              <td>{treino.modalidade.nome}</td>
              <td>
                <Link
                  to={`cadastro/${treino.id}`}
                  className="badge badge-primary"
                >
                  Editar
                </Link>{' '}
                <button
                  style={{ border: 0 }}
                  className="badge badge-danger"
                  onClick={() => removerTreino(treino.id)}
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Treinos;
