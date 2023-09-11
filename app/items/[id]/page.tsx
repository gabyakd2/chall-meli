'use client'
import React from 'react'
import {usePathname} from 'next/navigation'
import ItemDetail from './components/ItemDetail/ItemDetail'
import { useFetchDescriptions } from '@/app/hooks'

function DetailPage() {
  const pathname = usePathname()
  const idItem = pathname.replace('/items/', '')
  const {data} = useFetchDescriptions(idItem)
  return (
    <div>
      <ItemDetail />
    </div>
  )
}

export default DetailPage