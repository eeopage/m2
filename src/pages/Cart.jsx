import React from 'react'
import {Link, useOutletContext } from 'react-router';


function Cart() {

  const { movies, cart, setcart } = useOutletContext();

  const handleRemove = (remove) => setcart(cart.filter((e)=> e.id !== remove.id))

  if (!Array.isArray(cart) ) {
    return <h1>there is nothing to show</h1> 
  }
 


  return (
    <div className='cartContainer'>

       { !Array.isArray(cart) || cart.length === 0 ? <h1>there is nothing to show</h1> : cart.map((movie)=> 
      
       
            <div key={movie.id} className="movie-card">
                <img src={movie.primaryImage} alt="" style={{ width: '100%' }} />

                <h3>{movie.primaryTitle}</h3>

                <p>{movie.averageRating}</p>

                <div className="btn">
                <Link className='btn-watch-movie' to={movie.id} >  watch now </Link>
                  <button onClick={()=> handleRemove (movie)} >remove movie</button>
                </div>

                <div></div>

            </div>
            



      )}


    </div>
  )
}

export default Cart