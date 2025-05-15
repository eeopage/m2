import React from 'react'
import { Link, useOutletContext, useParams } from 'react-router'

function MovieDetail() {
    const { movies,cart, setcart } = useOutletContext()
    const param = useParams()
    const {id} = param
   

    const movie = movies.find((e)=> e.id === id)

    if (!movie) {
      return <div>the movie is loeading</div>
      
    }
        
    
  return (

    <div>
             <div className='header-container'>
                <div className="cover">
                    <img src={movie.primaryImage} alt={movie.primaryTitle} style={{ width: '100%' }} />
                </div>
                <Link to={movie.url} className="movie-icon">
                    <i className=' material-symbols-outlined'>play_circle</i> 
                    <div className="txt">Click to Watch Movie</div>
                </Link>
                
                <div className="movieDetails-img">      
                        <img src={movie.primaryImage} alt={movie.primaryTitle} style={{ width: '100%' }} />
                </div>

                <h1 className='movie-detail-tittle'>{movie.originalTitle}</h1>
            </div>
    </div>
    // <div key={id} style={{width : "100px", height: "100px" }} >{movie.primaryImage} </div>
  )
}

export default MovieDetail