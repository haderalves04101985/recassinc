//metodos requisicoes http

//get - buscar informacoes back-end
//post - criar dados no back-end
//put - atualizar dado  no back-end
//delete - remover dado no back-end

//json - server
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Header from './components/menu';
import Footer from './Footer';
import Banner from './Banner';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Banner />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
