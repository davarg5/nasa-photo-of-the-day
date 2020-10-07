import React, { useState, useEffect } from 'react'
import "./App.css";

export default function ImageandExplanation(props) {
    const {imgURL, explanation} = props;

    return (
        <div className='daily-img-container'>
            <img src={imgURL} className='daily-img'/>
            <p className='explanation'>{explanation}</p>
        </div>
    )





}