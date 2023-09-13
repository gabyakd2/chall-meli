'use client'
import React from 'react'
import { useFetchItems } from '../hooks'
import {CardList} from './components/index'

function ItemPage({searchParams}: {searchParams: {search:string}}) {
  const {search} = searchParams
  const {data} = useFetchItems(search)
  return (
    <div>
      <CardList data={data}/>
    </div>
  )
}

export default ItemPage