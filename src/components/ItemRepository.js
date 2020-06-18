import React from 'react'

const ItemRepository = ({ repository, removeRepository }) => {
  return (
    <li>
      {repository.title}

      <button onClick={removeRepository}>
        Remover
      </button>
    </li>
  )
}

export default ItemRepository