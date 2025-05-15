import React from 'react'
import { NavLink } from 'react-router'
import { useState } from 'react'
import { useOutletContext } from 'react-router'

function Navbar({context}) {
    const [slideMenu, setslideMenu] = useState(false)
    const { cart = [] } = context;

    const slideMenufunction = ()=> setslideMenu(!slideMenu)

    
  return (
    <div className='nav-container'>
            <div onClick={slideMenufunction} className="hambuger-menu">
                <i className='material-symbols-outlined'>menu</i>
            </div>
        <div className="logo"><NavLink>Omohills Movies</NavLink>  </div>
        <div className="menuList">

        

            <div className="movies"> <NavLink to="/" > Movies</NavLink></div>
            <div className="series"><NavLink to="series"> Series</NavLink>  </div>
            <div className="original"><NavLink to="original" > Originals</NavLink> </div>
            {/* <input className='search-input' placeholder='Search movies' type="text" /> */}
            {/* <i className='search-icon'></i> */}
        </div>
        <div className="accountlist">
            <NavLink to="cart" >
            <div className="notification-container">
                    <i className='material-symbols-outlined notifications-icon '>notifications</i>
                   { cart.length > 0 && <div className="notification-count">{cart.length }</div>}
            </div>
            </NavLink>

            <NavLink to="contact" >
            <div className="image">
                <div className="img"></div>
                <div className="img-names">
                
                    <div className="fullname">Sarah j</div>
                    <div className="package">premium</div>
                </div>
                
                
                
            </div>
            </NavLink>
           

        </div>


        { 

            <div className={`slide-menu ${slideMenu ? 'active' : ''}`}>
            <div className="search-container">
                <input className='slide-search-input' placeholder='Search movies' type="text" />
                <button >Search</button>
            </div>

            <div className="slide-movies"> <NavLink to="/" > Movies</NavLink></div>
            <div className="slide-series"><NavLink to="series"> Series</NavLink>  </div>
            <div className="slide-original"><NavLink to="original" > Originals</NavLink> </div>
            </div>


        }

        
        
    </div>
  )
}

export default Navbar