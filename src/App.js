import React, { useEffect, useState } from "react";

import "./styles.css";

import api from './services/api'
import ListRepository from './components/ListRepositories'

function App() {

  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data)
    })
  }, [])

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title: `Title ${Date.now()}`,
      url: `http://github.com/${Date.now()}`,
      techs: ["react", "react native", "nodejs"]
    })

    const repository = await response.data

    setRepositories([...repositories, repository])
  }

  return (
    <>
      <ListRepository repositories={repositories} setRepositories={setRepositories} />

      <button onClick={handleAddRepository}>Adicionar</button>
    </>
  );
}

export default App;
