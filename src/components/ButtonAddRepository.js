import React from 'react'

import api from '../services/api'

const ButtonAddRepository = ({ onSuccess }) => {

  const addRepository = async () => {
    const response = await api.post('repositories', {
      title: `Title ${Date.now()}`,
      url: `http://github.com/${Date.now()}`,
      techs: ["react", "react native", "nodejs"]
    })

    const repository = await response.data

    onSuccess(repository)
  }

  return (
    <button onClick={addRepository}>
      Adicionar
    </button>
  )
}

export default ButtonAddRepository