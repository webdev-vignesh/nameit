import React from 'react';
import '../stylesheets/NameCard.css';

const nameCheapUrl = "https://www.namecheap.com/domains/registration/results/?domain=";


const NameCard = ({suggestedName}) => {
  return(
    <a className='card-link' href={`${nameCheapUrl}${suggestedName}`} target='_blank' rel="noreferrer">
      <div className='result-name-card'>
      <p className='result-name'>{suggestedName}</p>
    </div>
    </a>
    
  )
}

export default NameCard;
