import React, {useState} from 'react';
import '../stylesheets/App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import ResultsComponent from './ResultsContainer';

const name = require("@rstacruz/startup-name-generator");

const App = () => {

  const [headerText, setHeaderText] = useState("Name It!");
  const[headerExpanded, setHeaderExpanded] = useState(true);
  const[suggestedNames, setSuggestedNames] = useState([]);

  const handleInputChange = (inputText) => {
    setHeaderExpanded(!inputText);
    setSuggestedNames(inputText? name(inputText) : []);
  }

  return(
    <div className="app">
      <Header  headerTitle={headerText} headerExpanded={headerExpanded} />
      <SearchBar onInputChange={handleInputChange} />
      <ResultsComponent suggestedNames={suggestedNames} />
    </div>) 
}


export default App;