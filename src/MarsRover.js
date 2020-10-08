import React, { useState, useEffect } from 'react'
import "./App.css";
import styled from 'styled-components';

export default function MarsRover(props)
{
    const {imgUrl} = props;

    const H2Mars = styled.h2`
        border-top: 1px solid white;
        font-family: 'Roboto Slab', serif;
        color: white;
        font-size: 2rem;
        padding-top: 3%;
    `


    return (
        <div>
        <H2Mars>Mars Rover Pictures</H2Mars>
        <img src={imgUrl}/>
        </div>
    )
}