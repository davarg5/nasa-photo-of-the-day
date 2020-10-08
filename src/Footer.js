import React, { useState, useEffect } from 'react'
import "./App.css";
import styled from 'styled-components';

export default function Footer(props) 
{
    const {date, copyright} = props;

    const Footer = styled.div`
        background-image: url('https://scx1.b-cdn.net/csz/news/800/2018/studyofdista.jpg');
        padding-top: 3%;
        padding-bottom: 3%;
    `

    const FooterText = styled.div``


    return (
        <Footer>
        <p>Date: {date} <br></br>
        Copyright: {copyright}</p>
        </Footer>
    );
}