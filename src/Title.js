import React, { useState, useEffect } from 'react'
import "./App.css";

export default function Title(props) {
    const {title} = props;

    return (
        <div className='App-header'>
            <h1>{title}</h1>
        </div>
    )





}