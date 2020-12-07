import React, { useState, useEffect } from 'react'
import "./App.css";
import styled from 'styled-components';

export default function MarsRover(props)
{
    const {imgUrl, imgUrl2, imgUrl3} = props;

    const H2Mars = styled.h2`
        border-top: 1px solid white;
        font-family: 'Roboto Slab', serif;
        color: white;
        font-size: 2rem;
        padding-top: 3%;
        text-shadow: 2px 2px 5px gray;
    `

    const ImgDiv = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    `
    const Images = styled.img`
        width: 30%;
        border-radius: 10px;
    `


    return (
        <div>
        <H2Mars>Mars Rover Pictures</H2Mars>
        <ImgDiv>
        <Images src={imgUrl}/>
        <Images src={imgUrl2}/>
        <Images src={imgUrl3}/>
        </ImgDiv>
        </div>
    )
}