'use client'
import React from 'react'
import { useItemsQuery } from '../store/itemsStore'

function ItemPage() {
  const resultItem = useItemsQuery(state => state.searchQueryStore)
  console.log(resultItem)
  return (
    <div>ItemPage</div>
  )
}

export default ItemPage