import React, {  } from 'react'
import { Authcontext } from '../context/Auth'
import { useContext } from 'react'
const Home = () => {
  const {auth} = useContext(Authcontext)
 
  return (
    <div>
      <h1>Homepage</h1>
      <h1>{JSON.stringify(auth)}</h1>
    </div>
  )
}

export default Home
