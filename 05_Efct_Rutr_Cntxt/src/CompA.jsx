import React from 'react'
import CompB from './CompB'

const CompA = ({abc1}) => {
  return (
    <>
        <h1>{abc1}</h1>
        <h3>CompA</h3>
        <CompB abc2 = {abc1}/>
    </>
  )
}

export default CompA;