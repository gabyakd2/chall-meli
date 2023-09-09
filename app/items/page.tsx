'use client'
import React from 'react'
import { useFetchItems } from '../hooks'
import CardItem from './components/CardItem/CardItem'

function ItemPage({searchParams}: {searchParams: {search:string}}) {
  const {search} = searchParams
  const {data} = useFetchItems(search)
  return (
    <div>
      <CardItem data={data}/>
    </div>
  )
}

export default ItemPage