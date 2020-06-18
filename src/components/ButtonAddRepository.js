import React from 'react'

import api from '../services/api'

const ButtonAddRepository = ({ addRepository }) => {

  const handleAddRepository = async () => {
    const response = await api.post('repositories', {
      title: `Title ${Date.now()}`,
      url: `http://github.com/${Date.now()}`,
      techs: ["react", "react native", "nodejs"]
    })

    const repository = await response.data

    addRepository(repository)
  }

  return (
    <button onClick={handleAddRepository}>
      Adicionar
    </button>
  )
}

export default ButtonAddRepository