import React, { useState, useEffect } from 'react'
import "./App.css";
import styled from 'styled-components';

export default function Footer(props) 
{
    const {date, copyright} = props;

    const Footer = styled.div`
        background-image: url('https://scx1.b-cdn.net/csz/news/800/2018/studyofdista.jpg');
        padding-top: 2.5%;
        padding-bottom: 2.5%;
    `

    const FooterText = styled.p`
        color: white;
        font-size: 1rem;
        font-family: 'Roboto Slab', serif;
    `



    return (
        <Footer>
        <FooterText>Date: {date} <br></br>
        Copyright: {copyright}</FooterText>
        </Footer>
    );
}