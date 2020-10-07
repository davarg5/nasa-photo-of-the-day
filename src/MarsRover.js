import React, { useState, useEffect } from 'react'
import "./App.css";

export default function MarsRover(props)
{
    const {imgUrl} = props;
    return (
        <img src={imgUrl} className="MarsPic"/>
    )
}