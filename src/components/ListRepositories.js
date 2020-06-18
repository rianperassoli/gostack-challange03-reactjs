import React from 'react'

import api from '../services/api'
import ItemRepository from './ItemRepository'

const ListRepository = ({ repositories, setRepositories }) => {

  async function handleRemoveRepository(id) {
    const response = await api.delete(`repositories/${id}`)

    if (response.status === 204) {
      const newRepositories = repositories.filter(repository => repository.id !== id)

      setRepositories(newRepositories)
    }
  }

  return (
    <ul data-testid="repository-list">
      {
        repositories.map(repository => (
          <div key={repository.id}>
            <ItemRepository repository={repository} removeRepository={() => handleRemoveRepository(repository.id)} />
          </div>
        ))
      }
    </ul >
  )

}

export default ListRepository