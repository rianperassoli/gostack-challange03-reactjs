import React from 'react'

import api from '../services/api'
import ItemRepository from './ItemRepository'

const ListRepository = ({ repositories, onSuccess }) => {

  async function removeRepository(id) {
    const response = await api.delete(`repositories/${id}`)

    if (response.status === 204) {
      onSuccess(id)
    }
  }

  return (
    <ul data-testid="repository-list">
      {
        repositories.map(repository => (
          <div key={repository.id}>
            <ItemRepository
              repository={repository}
              removeRepository={() => removeRepository(repository.id)}
            />
          </div>
        ))
      }
    </ul >
  )

}

export default ListRepository