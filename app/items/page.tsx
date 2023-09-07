'use client'
import React from 'react'
import { useSearchQuery } from '../store/itemsStore'
import { useFetchItems } from '../hooks'

function ItemPage({searchParams}: {searchParams: {search:string}}) {
  const {search} = searchParams
  const {data} = useFetchItems(search)
  return (
    <div>ItemPage</div>
  )
}

export default ItemPage