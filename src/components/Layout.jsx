import React, {useEffect, useState} from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import axios from 'axios'
import useMovies from './useMovies'
import persistStorage from './persistStorage'

function Layout() {
  const [cart, setcart] = useState(()=> persistStorage("cart",[]));
  useEffect(()=>
    localStorage.setItem("cart", JSON.stringify(cart) ),
  [cart])


  const { movies, loading, error } = useMovies();
  


  

  if (loading) return <div>Loading movies...</div>;
  if (error) return <div>Error loading movies: {error}</div>;


 
  // console.log(cart);
  
  


  return (
    <div>
        <Navbar context={{ movies, setcart, cart }}   />
        <Outlet context={{ movies, setcart, cart }}   />
    </div>
    
  )
}

export default Layout