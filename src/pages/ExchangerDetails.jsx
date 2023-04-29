import React from 'react'
import { useParams } from 'react-router'

const ExchangerDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Exchanger {id}Details</h1>
    </div>
  )
}

export default ExchangerDetails
