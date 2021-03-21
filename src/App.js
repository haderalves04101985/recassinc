//metodos requisicoes http

//get - buscar informacoes back-end
//post - criar dados no back-end
//put - atualizar dado  no back-end
//delete - remover dado no back-end

//json - server
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Header from './components/menu';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
