import React, {useState} from 'react';


function Star( props ){
  return (
    <div className={`star ${(props.value === 0) ? 'semi-active' : ''} ${(props.position <= props.rated) ? 'active' : ''} `} 
         onMouseEnter={ props.onMouseEnter }
         onMouseLeave={ props.onMouseLeave }
         onClick={ props.onClick }

    >
      <i className="fas fa-star"></i>
    </div>
  );
}

function Rating( props ){
  const messages = {
    "1": "Oh. Sorry you had a bad experience :( ",
    "2": "We will try to improve.",
    "3": "Appreciate it!",
    "4": "Thank you!", 
    "5": "You're Awesome!"
  };
  
  let rating = props.rating;
  
  return(
      <div className={"after-rating-message " + ((rating > 0) ? 'show': '')} >
          <span>You rated this {rating} star{rating > 1 ? 's' : ''}</span>
          <br/>
          <span>{ messages[rating] }</span>
      </div>
  );
}


const RatingWidget = (props) => {
  const [stars, setStars] = useState(Array(5).fill(-1));
  const [rated, setRated] = useState(0); 

 
  
  const handleMouseOver = ( i ) => {
    let currentRating = rated;
    
    if ( currentRating > 0 ) {
      const hoverRatedStars = stars.slice();
      _.fill( hoverRatedStars, 0, currentRating, i );
      setStars(hoverRatedStars)
    }
    else {
      const hoverStars = Array(5).fill(-1);
      _.fill( hoverStars, 0, 0, (i+1) );     
      setStars(hoverStars)

    }
  }
  
  const handleMouseOut = () => {
    let currentRating = rated;
    if ( currentRating > 0) {
      const resetRatedStars = stars.slice();
      _.fill( resetRatedStars, -1, currentRating, resetRatedStars.length );
      setStars(resetRatedStars)
      
    }
    else {
      const resetStars = this.state.stars.slice();
      _.fill( resetStars, -1, 0, resetStars.length );
      setStars(resetStars)

    }
  }
  
  const handleClick = ( i ) => {
    const clickedStar = stars.slice();
    
    _.fill( clickedStar, 1, 0, i );
    _.fill( clickedStar, 1, i, clickedStar.length );
      
    setStars(clickedStar);
    setRated(i)
  }
  
  
  const handleRating = ( rating ) =>{
    return (<Rating rating={rated} />)
  }
  
  const renderStar = ( i ) => {
    return (
      <Star 
        position={i}
        value={stars[i]} 
        rated={rated}
        onMouseEnter={ () => handleMouseOver(i) }
        onMouseLeave={ () => handleMouseOut() }
        onClick={ () => handleClick(i) }
        />
    );
  }
  
    return (
      <div className='rating-stars-widget-outer'>
          <div className='rating-stars'>
            {renderStar(1)}
            {renderStar(2)}
            {renderStar(3)}
            {renderStar(4)}
            {renderStar(5)}
          </div>
        
          {handleRating( rated )}
      </div>
      
      
    );
}

export default RatingWidget;
