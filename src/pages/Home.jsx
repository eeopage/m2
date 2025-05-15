import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import Data from '../components/Data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, useOutletContext } from 'react-router-dom';
import persistStorage from '../components/persistStorage';
import cartfunctions from '../components/cartFunction';




function Home() {
  const { movies, cart, setcart } = useOutletContext();
  const [optionsort, setoptionsort] = useState(()=> persistStorage("optionsort",""))
  const [movieinput, setmovieinput] = useState("")

  

  // const cartfunctions = (movie) => setcart([...cart, movie ])

  


  useEffect(()=>
    localStorage.setItem("optionsort",optionsort),
  [optionsort])
  

  // movies.filter((movie)=> movie.primaryTitle.toLocaleLowerCase().includes().(movieinput.toLocaleLowerCase()))
  
 
  const movieslide = [...movies].slice(20,30)
  const movieFilter = movies.filter((e)=> e.primaryTitle.toLocaleLowerCase().includes(movieinput.toLocaleLowerCase()))




  if (optionsort === "a-z") {
    movieFilter.sort((a,b) => a.primaryTitle.localeCompare(b.primaryTitle) )
  }
  if (optionsort === "z-a") {
    movieFilter.sort((a,b) => b.primaryTitle.localeCompare(a.primaryTitle))
  } 
  
  

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  

  return (
    <div>
      {/* <div className='home-heading'>New Cinema Request</div> */}
      


      <div className="top-slider">


        

          <Carousel 
                // autoPlaySpeed={1000}
                keyBoardControl={true}
                
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                responsive={responsive}>

                { movieslide
                .map((movieswip)=>

                  <div className='card-container'>

                      <img className='slider-card' key={movieswip.id} src={movieswip.primaryImage} alt={movieswip.primaryTitle} style={{ width: '350px', height: '400px' } } ></img>

                      <h3 className='slider-tittle' >{movieswip.primaryTitle}</h3>
                      

                        <div className="btn-slider">
                          <button>Coming soon</button>
                        </div>

                  </div>

                )}


          </Carousel>


      </div>



      <div className="fiiter-section">
            <input onChange={(e)=> setmovieinput(e.target.value)} className='search-input' placeholder='Search movies' type="text" /> 
            <select value={optionsort} onChange={(e)=> setoptionsort(e.target.value)}  className='select-option' name="sort" id="sort">
              <option  value="">Random</option>
              <option  value="a-z">A-Z</option>
              <option  value="z-a">Z-A</option>
            </select>
      </div>


      <div className="movie-list">
        {movieFilter.length < 1?  <h3> "{movieinput}" is not avialable, <br/>  there is nothing to show</h3>  : movieFilter.map((movie) => (
          <div key={movie.id || movie.rank} className="movie-card">
            <img src={movie.primaryImage} alt={movie.primaryTitle} style={{ width: '100%' }} />
            <h3>{movie.primaryTitle}</h3>
           {movie.originalTitle === movie.primaryTitle ? "" :  <h3> {movie.originalTitle }</h3> }
            <p>Rating: {movie.averageRating}</p>

            <div className="btn">
               <Link className='btn-watch-movie' to={movie.id} >  watch now </Link>
              <button onClick={() => cartfunctions(cart, setcart, movie) } >See movie later</button>
            </div>
            
          </div>

          
        ))}
      </div>
    </div>
  );
}

export default Home