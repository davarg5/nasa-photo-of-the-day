import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Title from './Title';
import ImageandExplanation from './ImageandExplanation'

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=NyCvtPnHyvSaaxO0crf2FTm1SYd3xZAtL9kn9SXu`)
        .then(res => {
          setData(res.data)
        })
        .catch(err => {
          debugger
        })
    }
    fetchData();   
  }, [])

  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Title title={data.title} />
      <ImageandExplanation imgURL={data.url} explanation={data.explanation}/>
    </div>
  );
}

export default App;
