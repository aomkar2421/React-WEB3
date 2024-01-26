import React from 'react'
import CompA from './CompA'

const Body = ({abc}) => {
  return (
    <>
        <h1>{abc}</h1>
        <h3>Body</h3>
        <CompA abc1 = {abc}/>
    </>
  )
}

export default Body