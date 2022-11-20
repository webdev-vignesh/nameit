import React from 'react';
import '../stylesheets/ResultsContainer.css';
import NameCard from '../components/NameCard';

const ResultsComponent = ({suggestedNames}) => {
  const suggestedNameJSX = suggestedNames.map((suggestedName) => {
    return <NameCard key={suggestedName} suggestedName={suggestedName} />
  })
  
  return(
    <div className='results-container'>
      {suggestedNameJSX}
    </div>) 
}


export default ResultsComponent;