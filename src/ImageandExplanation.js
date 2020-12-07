import React, { useState, useEffect } from 'react'
import "./App.css";
import styled from 'styled-components';

export default function ImageandExplanation(props) {
    const {imgURL, explanation} = props;

    const DailyImage = styled.img`
        width: 80%;
        border-radius: 10%;
        border: 1px solid white;
        box-shadow: 10px 10px 5px grey;
        margin-bottom: 3%;
    `

    const Explanation = styled.p`
        font-size: 1.2rem;
        font-family: 'Roboto Slab', serif;
        width: 80%;
        margin: auto;
        color: white;
        border: 1px solid white;
        border-radius: 10px;
        padding: 2%;
        text-shadow: 2px 2px 5px gray;
    `

    return (
        <div>
            <DailyImage src={imgURL} />
            <Explanation>{explanation}</Explanation>
        </div>
    )





}