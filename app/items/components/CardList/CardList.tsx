import React from 'react'
import CardItem from '../CardItem/CardItem'

function CardList({data}: any) {
  // console.log(data.results)
  return (
    <div className="flex items-center justify-center flex-col">
      {
        data && data.results.map((product: any) => (
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