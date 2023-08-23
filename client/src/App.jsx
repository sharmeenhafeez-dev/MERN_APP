import { useContext, useState } from 'react'
import Admin from './Admin'
import Guest from './Guest'
import { GlobalContext } from './Admin/Context/context'
import User from './User'
import { decodeToken } from 'react-jwt'

const UserRolee = {

  'admin': Admin,
  'user': User,
  'guest': Guest
}


 export const AppRoute ='http://localhost:1234/'



 
const UserByRole = (role) => UserRolee[role] || UserRolee['guest']
// const UserByRole =  (role) => UserRolee[role]||UserRolee['admin']

const getDecodeToken = (token) => decodeToken(token) || []


export default function App() {

  const { state, dispatch } = useContext(GlobalContext)



  const currentToken = getDecodeToken(state.token)

  console.log(currentToken)
    // const CurrentUser = UserByRole(state?.role)

  const CurrentUser = UserByRole(currentToken?.role)

  return <CurrentUser />

  //   const {state, dispatch} = useContext(GlobalContext)
  //  console.log(state)
  //  const CurrentUser = state ? UserByRole(state.role) : UserRolee['guest'];
  //  return <CurrentUser/>

}
