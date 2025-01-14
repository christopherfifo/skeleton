import { useEffect, useRef, useState } from "react";
import "./App.css";
import Skeleton from "./components/skeleton";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const width = useRef(window.innerWidth / 4).current;// pega a largura da tela e divide por 4, o .current  é uma propriedade do objeto retornado por useRef que contém o valor atual da referência. Ao atribuir useRef(window.innerWidth / 4).current à constante width, estamos armazenando esse valor inicial de forma que ele não mudará mesmo que o componente seja re-renderizado.

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <div className="header">
          <Skeleton width={64} height={20}/>
          <Skeleton width={400} height={32} borderRadius={8}/>
          <Skeleton width={40} height={40} borderRadius={20}/>
        </div>

        <div className="content">
          {[1, 2, 3, 4, 5, 6, 7, 8,9].map((video) => (
              <Skeleton key={video} width={width} height={300} borderRadius={8}/>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="header">
        <h3>skeleton </h3>
        <input
          className="search-input"
          type="text"
          placeholder="digite para pesquisar"
        />
        <div className="profile">
          <img
            src="https://i.pinimg.com/736x/ad/86/22/ad862252e7912f36d177d4d927634ca8.jpg"
            alt="foto de perfil"
          />
        </div>
      </div>

      <div className="content">
      {[1, 2, 3, 4, 5, 6, 7, 8,9].map((video) => (
          <div className="video" key={video} style={{ width }}>
            <div className="thumbnail">
              <img
                src="https://i.pinimg.com/736x/ad/86/22/ad862252e7912f36d177d4d927634ca8.jpg"
                alt="thumbnail do video"
              />
            </div>
            <div className="info">
              <h3>Video {video}</h3>
              <p>granda pato</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
