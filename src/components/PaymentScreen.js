import React from 'react'
import styled from 'styled-components';
import {Title} from './Title'
import ApplePay from '../assets/apple-pay.png';
import GooglePay from '../assets/google-pay.png';

const PaymentDiv = styled.div`
    background-color: #FF86B3;
    width: 100%;
    height: 125%;
    margin-top: -25%;
    padding-top: 40%;
`;

const Button = styled.button`
width: 60%;
height: auto;
background-color: white;
font-size: 44px;
font-family: 'Outfit-bold';
margin-botom: 50%;
margin-left: 25%;
border: none;
margin-top: 20%;
align-items: 'center'
`;


const PaymentScreen = ({payClick}) => {

    return (
    <PaymentDiv>
        <Title smallText="PAY US" bigText="NOW" style={{textAlign: 'right'}}/>
        <Button onClick={payClick}>
            <img src={ApplePay} alt='Apple Pay'></img>
        </Button>
        <Button onClick={payClick}>
            <img src={GooglePay} alt='Google Pay'></img>
        </Button>
    </PaymentDiv>
    )   
};

export {PaymentScreen};

