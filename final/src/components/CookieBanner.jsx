import { useState, useEffect } from "react";

import styled, { css } from 'styled-components';

const button = css`
    margin: 0;
    padding: 0;
    font-size: 16px;
    padding: 10px 20px;
    cursor: pointer;
    color: black;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 50px;
    background-color: #f5f5f5;
    position: fixed;
    bottom: 0;
    width: 100vw;
`;

const Title = styled.h3`
    margin: 0 0 10px 0;
    padding: 0;
    width: 100%;
    color: palevioletred;
    font-size: 24px;
`;

const Accept = styled.div`
    ${button}
    margin-right: 20px;
    background-color: lightgreen;
`;

const Decline = styled.div`
    ${button}
    background-color: lightcoral;
`;


const CookieBanner = () => {
    const [visible, setVisible] = useState(true);

    const handleAccept = () => {
        localStorage.setItem('cookiesAccepted', true);
        setVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookiesAccepted', false);
        setVisible(false);
        // block
    };

    useEffect(() => {
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');

        if (cookiesAccepted !== null) {
            setVisible(false);
        }
    }, []);

    if (!visible) {
        return null;
    }

    return (
        <Container>
            <Title>This website uses cookies to enhance user experience</Title>
            <Accept onClick={handleAccept}>Accept</Accept>
            <Decline onClick={handleDecline}>Decline</Decline>
        </Container>
    );
};

export default CookieBanner;
