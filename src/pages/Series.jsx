import React, { useState } from 'react'
import { data } from 'react-router'
import { Link, useOutletContext } from 'react-router-dom';
import cartfunctions from '../components/cartFunction';


function Series() {

  const { movies,cart, setcart } = useOutletContext();
  const [inputtext,setinputtext] = useState('')
  const [optiontext,setoptiontext] = useState("")

  // const cartfunctions = (movie) => setcart([...cart, movie ])

  
  
  const inputfilter =  movies.filter((movie) => 
    movie.genres && movie.genres.some(genre => genre === "Action")
  ).filter((movie)=> movie.primaryTitle.toLocaleLowerCase().includes(inputtext.toLocaleLowerCase()) )

  if (optiontext === "a-z") {
    inputfilter.sort((a,b) => a.primaryTitle.localeCompare(b.primaryTitle))
  }

 else if (optiontext === "z-a") {
    inputfilter.sort((a,b) => b.primaryTitle.localeCompare(a.primaryTitle))
  }

  return (
    <div>


        <div className="fiiter-section">
              <input onChange={(e)=> setinputtext(e.target.value)} className='search-input' placeholder='Search movies' type="text" /> 
              <select onChange={(e)=> setoptiontext(e.target.value)} className='select-option' name="sort" id="sort">
                <option value="sort">Random</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
              </select>
        </div>


            <div className="movie-list">
            {inputfilter.length < 1 ? <h3> "{inputtext}" is not avialable, <br/>  there is nothing to show</h3> : inputfilter
            .map((movie) => (
              <div key={movie.id || movie.rank} className="movie-card">
                <img src={movie.primaryImage} alt={movie.primaryTitle} style={{ width: '100%' }} />
                <h3>{movie.primaryTitle}</h3>
              {movie.originalTitle === movie.primaryTitle ? "" :  <h3> {movie.originalTitle }</h3> }
                <p>Rating: {movie.averageRating}</p>

                <div className="btn">
                  <Link className='btn-watch-movie' to={movie.id} >  watch now </Link>
                  <button  onClick={() => cartfunctions(cart, setcart, movie)} >See movie later</button>
                </div>
                
              </div>

              
            ))}
          </div>



    </div>
  )
}

export default Series