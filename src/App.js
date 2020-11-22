import { useState } from 'react';
import './App.css';
import axios from 'axios';
import CompanyCard from './components/CompanyCard';

function App() {
  const [inputValue, setInputValue] = useState(); // Search input state

  const [profileData, setProfileData] = useState(); //  profile 
  const [isTickerDataLoaded, setIsTickerDataLoaded] = useState(false);

  const BASE_URL = "https://financialmodelingprep.com/api/v3/profile/";
  const apiKey = "?apikey=f3cadaf0569807e5dd47e435a6d8c5a6"

  function handleSubmit (event) {
    event.preventDefault();
    axios.get(BASE_URL + inputValue + apiKey)
      .then (res => handleProfileSearch(res.data))
      .catch();
  }
  
  function handleInputChange (event) {
    setInputValue(event.target.value);
    setIsTickerDataLoaded(false);
  }

  function handleProfileSearch (responseData) {
    setProfileData(responseData);
    setIsTickerDataLoaded(true);
  }

  return (
    <div className="App">
      <h2>Company Profile Report tool, by Zack Kramer</h2>
      <form onSubmit={(event)=>handleSubmit(event)}>
        <label>Search for a company profile: 
          <input 
            className="input" 
            placeholder=" (i.e. AAPL or TIGR)" 
            onChange={(event)=>handleInputChange(event)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isTickerDataLoaded ? profileData.map(profile=> <CompanyCard data={profile}/>) : "Enter a company trade symbol above."}
    </div>
  );
}

export default App;