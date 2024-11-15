import { useState } from 'react';
import { Header } from '../../components/Header/index.js';
import background from '../../assets/bg.png';
import './styles.css';
import ItemList from '../../components/ItemList'

function App() {
  const [user, setUser] = useState('');
  const [currentuser, setCurrentUser] = useState(null);
  const [reposit, setReposit] = useState(null);


  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser= await userData.json();

    if (newUser.name){
      const {avatar_url, name , bio, login} = newUser;
      setCurrentUser({avatar_url, name , bio, login})

      console.log(newUser);

      const repositData = await fetch(`https://api.github.com/users/${user}/repos`)
      const newReposit= await repositData.json();

      if (newReposit.length){
        setReposit(newReposit);
      }


    }


  };


  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="imagem de background" />
        <div className="info">
          <div>
            <input name="usuario" value={user} 
             onChange={event => setUser(event.target.value)}
             placeholder="@username" />
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {currentuser?.name ? (<>
            <div className='perfil'>
            <img src={currentuser.avatar_url} className='profile' alt='Imagem de Perfil' />
            <div>
              <h3>{currentuser.name}</h3>
              <span>@{currentuser.login}</span>
              <p>{currentuser.bio}</p>
            </div>
          </div>
          <hr />
          </>): null}
          {reposit?.length ?(
            <div>
            <h4 className='repositorio'>Repositórios</h4>
            {reposit.map( repo => (
              <ItemList title={repo.name} description={repo.description} />
            ))}
          </div>
          ): null}
        </div>
      </div>
    </div>
  );
}

export default App;
