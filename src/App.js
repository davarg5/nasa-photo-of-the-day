import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Title from './Title';
import ImageandExplanation from './ImageandExplanation'
import MarsRover from './MarsRover'
import Footer from './Footer'
import styled from 'styled-components';

function App() {
  const [data, setData] = useState({});
  const [imgUrls, setImgUrls] = useState('');

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

  useEffect(() => {
    const fetchImgUrls = () => {
      axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`)
        .then(res => {
          setImgUrls(res.data.photos[0].img_src);
        })
        .catch(err => {
          debugger
        }) 
    }
    fetchImgUrls();   
  }, [])

  const AppScreen = styled.div`
    text-align: center;
    border: 15px solid black;
    background-color: #282c34;
  `


  
  return (
    <AppScreen>
      <Title title={data.title} />
      <ImageandExplanation imgURL={data.url} explanation={data.explanation}/>
      <MarsRover imgUrl={imgUrls} />
      <Footer date={data.date} copyright={data.copyright} />
      
    </AppScreen>

  );
}

export default App;
