import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../Admin/Context/context'
export default function Logout() {

  const {state,dispatch} = useContext(GlobalContext)
  return (
    <div>
      
      <button className='btn btn-secondary mx-1' onClick={()=>{
        dispatch({

type:"LOGOUT"

        })
      }}> Logout</button>
    </div>
  )
}
