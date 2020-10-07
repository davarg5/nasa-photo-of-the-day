import React, { useState, useEffect } from 'react'
import "./App.css";

export default function Footer(props) 
{
    const {date, copyright} = props;

    return (
        <div>
        <p>Date: {date} <br></br>
        Copyright: {copyright}</p>
        </div>
    );
}