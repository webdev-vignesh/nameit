import React from 'react';
import '../stylesheets/App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import ResultsComponent from './ResultsContainer';


const name = require("@rstacruz/startup-name-generator");

class App extends React.Component {
  
  state = {
    headerText: "Name It!",
    headerExpanded: true,
    suggestedNames: [],
  };
  handleInputChange = (inputText) => {
    this.setState({
      headerExpanded: !inputText.length,
      suggestedNames: inputText? name(inputText) : [], 
    })
  }

  render() {
    return(
    <div className="app">
      <Header  headerTitle={this.state.headerText} headerExpanded={this.state.headerExpanded} />
      <SearchBar onInputChange={this.handleInputChange} />
      <ResultsComponent suggestedNames={this.state.suggestedNames} />
    </div>) 
  }
}


export default App;