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
  const [imgUrls2, setImgUrls2] = useState('');
  const [imgUrls3, setImgUrls3] = useState('');

  useEffect(() => {
    const fetchData = () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=BqQGjtz581NrEtx9BZehDpUR35PqkESE8bUNDlvl`)
        .then(res => {
          setData(res.data)
        })
        .catch(err => {
          debugger
        })
    }
    fetchData();   
  }, [])

  //#1

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

  //#2

  useEffect(() => {
    const fetchImgUrls2 = () => {
      axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`)
        .then(res => {
          setImgUrls2(res.data.photos[30].img_src);
        })
        .catch(err => {
          debugger
        }) 
    }
    fetchImgUrls2();   
  }, [])

  //#3

  useEffect(() => {
    const fetchImgUrls3 = () => {
      axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`)
        .then(res => {
          setImgUrls3(res.data.photos[5].img_src);
        })
        .catch(err => {
          debugger
        }) 
    }
    fetchImgUrls3();   
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
      <MarsRover imgUrl={imgUrls} imgUrl2={imgUrls2} imgUrl3={imgUrls3}/>
      <Footer date={data.date} copyright={data.copyright} />
      
    </AppScreen>

  );
}

export default App;
