const cartfunctions = (cart, setcart, movie) => {
    const exists = cart.some(m => m.id === movie.id);
    if (exists) {
      alert("This movie is already in the cart.");
    } else {
      setcart([...cart, movie]);
    }
  };
  
  export default cartfunctions;
  

