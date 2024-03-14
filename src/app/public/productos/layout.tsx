import { IChildren } from '@/interfaces/IChildren'
import React from 'react'

export default function Productoslayout({children}: IChildren){
  return (
    <main>
        { children }
    </main>
  )
}