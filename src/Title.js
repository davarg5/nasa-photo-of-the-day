import React, { useState, useEffect } from 'react'
import "./App.css";
import styled from 'styled-components';

export default function Title(props) {
    const {title} = props;

    const H1Text = styled.h1`
        text-shadow: 2px 2px 5px gray;
        font-family: 'Roboto Slab', serif;
    `
    return (
        <div className='App-header'>
            <H1Text>Image of the Day: <br></br>{title}</H1Text>
        </div>
    )





}