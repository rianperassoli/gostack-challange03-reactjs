import React, { useEffect, useState } from "react";

import "./styles.css";

import api from './services/api'
import ListRepository from './components/ListRepositories'
import ButtonAddRepository from './components/ButtonAddRepository'

function App() {

  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data)
    })
  }, [])

  async function handleAddRepository(repository) {
    setRepositories([...repositories, repository])
  }

  async function handleRemoveRepository(id) {
    const newRepositories = repositories.filter(repository => repository.id !== id)

    setRepositories(newRepositories)
  }

  return (
    <>
      <ListRepository
        repositories={repositories}
        onSuccess={handleRemoveRepository}
      />

      <ButtonAddRepository onSuccess={handleAddRepository} />
    </>
  );
}

export default App;
