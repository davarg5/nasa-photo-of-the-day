import React, { useState, useEffect } from 'react'
import "./App.css";
import styled from 'styled-components';

export default function ImageandExplanation(props) {
    const {imgURL, explanation} = props;

    const DailyImage = styled.img`
        width: 80%;
        border-radius: 10%;
    
    `

    const Explanation = styled.p`
        
        font-family: 'Titillium Web', sans-serif;
        width: 80%;
        margin: auto;
    `

    return (
        <div className='daily-img-container'>
            <DailyImage src={imgURL} />
            <Explanation>{explanation}</Explanation>
        </div>
    )





}