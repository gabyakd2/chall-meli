import React from 'react'
import CardItem from '../CardItem/CardItem'
import { DataItem, Result } from '../CardItem/dataProp'

interface Props {
  data: DataItem
}

function CardList({data}: Props) {
  // console.log(data)
  return (
    <div className="flex items-center justify-center flex-col">
      {
        data && data.results.map((product: Result) => (
          <CardItem 
            image={product.thumbnail}
            price={product.price}
            title={product.title}
            location={product.address.state_name}
          />
        ))
      }
    </div>
  )
}

export default CardList