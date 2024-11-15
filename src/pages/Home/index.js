import {Header} from '../../components/Header/index.js';
import background from '../../assets/bg.png';
import './styles.css';
import ItemList from '../../components/ItemList'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="imagem de background"/>
        <div className="info"> 
          <div>
          <input name="usuario" placeholder="@username"/>
          <button>Buscar</button>
          </div>
          <div className='perfil'>
            <img src="https://avatars.githubusercontent.com/u/104395768?s=400&u=fe2f7e70ac28274db46ede0ad9d00b8a9c3f724a&v=4" className='profile' alt='Imagem de Perfil'/>
            <div>
            <h3> Pauline Duarte</h3>
            <span>@PaulineDuart</span>
            <p>Descrição </p>
            </div>
          </div>
          <hr/>
          <div>
            <h4 className='repositorio'>Repositórios</h4>
            <ItemList title="Teste" description="descrição1"/>
          </div>
          </div>
        </div>
      </div>
  );
}

export default App;
