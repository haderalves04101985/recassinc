import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const FormCad = () => {
  const [modalidades, setModalidades] = React.useState([]);

  const [nome, setNome] = React.useState('');
  const [dia, setDia] = React.useState('');
  const [modalidadeId, setModalidadeId] = React.useState(1);

  React.useEffect(() => {
    async function getModalidades() {
      const resposta = await axios.get('http://localhost:3000/modalidades');
      setModalidades(resposta.data);
    }
    getModalidades();
  }, []);

  const params = useParams();

  React.useEffect(() => {
    if (params.id) {
      async function getTreinos() {
        const resposta = await axios.get(
          `http://localhost:3000/treinos/${params.id}`,
        );

        setNome(resposta.data.nome);
        setDia(resposta.data.dia);
        setModalidadeId(resposta.data.modalidadeId);
      }
      getTreinos();
    }
  }, [params.id]);

  async function submeterFormulario(e) {
    e.preventDefault();

    try {
      if (!params.id) {
        await axios.post('http://localhost:3000/treinos', {
          nome,
          dia,
          modalidadeId: Number(modalidadeId),
        });
      } else {
        await axios.put(`http://localhost:3000/treinos/${params.id}`, {
          nome,
          dia,
          modalidadeId: Number(modalidadeId),
        });
      }

      setNome('');
      setDia('');
      setModalidadeId(1);
      alert('Dados Salvos');
    } catch (error) {
      alert('Erro ao salvar');
    }
  }

  return (
    <form onSubmit={submeterFormulario}>
      <div>
        <h1>Formulário de cadastro de Aluno</h1>

        <div className="form-group">
          <label htmlFor="nome">Nome do aluno</label>
          <input
            type="text"
            name="nome"
            id="nome"
            className="form-control"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dia">Data do Treino</label>
          <input
            type="datetime-local"
            name="dia"
            id="dia"
            className="form-control"
            value={dia}
            onChange={(e) => setDia(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="modalidadeId">Modalidade</label>
          <select
            className="form-control"
            name="modalidadeId"
            id="modalidadeId"
            value={modalidadeId}
            onChange={(e) => setModalidadeId(e.target.value)}
          >
            {modalidades.map((modalidade) => (
              <option key={modalidade.id} value={modalidade.id}>
                {modalidade.nome}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Salvar
        </button>
      </div>
    </form>
  );
};

export default FormCad;
