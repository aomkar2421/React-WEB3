import React , { useContext } from 'react'
import {xyz} from './App'

const CompB = ({abc2}) => {
    const lmn = useContext(xyz);
  return (
    <>
        <h3>CompB</h3>
        <h1>{abc2}</h1>
        <h1>{lmn.data}</h1>
        <h1>{lmn.ank.name}</h1>
        <h1>{lmn.ank.age}</h1>
    </>
  )
}

export default CompB;