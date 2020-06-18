import React from 'react';
import styled from "styled-components";

// Image files
import TreadmillSvg from '../../Images/Treadmill.svg';
import BikeSvg from '../../Images/Bike.svg';
import EllipticalSvg from '../../Images/Elliptical.svg';
import StrengthSvg from '../../Images/Strength.svg';

const Wrapper = styled.section`
    width: 100%;
    min-height: 382px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font: 600 24px/28px "Proxima Nova Lt";
    margin: 75px 0 50px 0;
    padding: 0 20px;
`;
const Text = styled.p`
    opacity: 0.8;
    color: #34383c;
    letter-spacing: 0.3px;
    text-align: center;
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 4px 0 50px 0;
    @media (min-width: 700px) {
        justify-content: space-between;
        width: 670px;
    }
    @media (min-width: 1410px) {
        width: 1392px;
        justify-content: space-between;
    }
`;
const Card = styled.div`
    width: 330px;
    height: 330px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 2px rgba(46, 49, 52, 0.4);
    border-radius: 4px;
    background-color: #fff;
    font: 700 24px/28px "Proxima Nova Rg";
    margin-top: 20px;
    transition: 0.1s ease-in-out;
    &:hover {
        box-shadow: 0 7px 12px rgba(46, 49, 52, 0.3);
        cursor: pointer;
        transition: 0.1s ease-in-out;
    }
`;
const CardText = styled.p`
    opacity: 0.8;
    color: #2e3134;
    letter-spacing: 0.3px;
`;
const CardImg = styled.img``;

function Equipment() {
    return (
    <Wrapper>
        <Text>Interested in our exciting iFit-enabled equipment?</Text>
        <Container>
            <Card className="exercise-card">
                <CardImg src={TreadmillSvg} alt="Treadmill"></CardImg>
                <CardText>Treadmills</CardText>
            </Card>
            <Card className="exercise-card">
                <CardImg src={BikeSvg} alt="Bikes"></CardImg>
                <CardText>Bikes</CardText>
            </Card>
            <Card className="exercise-card">
                <CardImg src={EllipticalSvg} alt="Ellipticals"></CardImg>
                <CardText>Ellipticals</CardText>
            </Card>
            <Card className="exercise-card">
                <CardImg src={StrengthSvg} alt="Strength"></CardImg>
                <CardText>Strength</CardText>
            </Card>
        </Container>
    </Wrapper>
    );
  }

export default Equipment