'use client'
import React from 'react'
import { useSearchQuery } from '../store/itemsStore'
import { getLocalStorageItem, useFetchItems } from '../hooks'

function ItemPage() {
  // const { searchQuery } = useSearchQuery()
  const globalState = getLocalStorageItem('globalState')
  const { searchQuery } = globalState || {searchQuery: ''}
  const {data} = useFetchItems(searchQuery)
  console.log(data?.results)
  return (
    <div>ItemPage</div>
  )
}

export default ItemPage