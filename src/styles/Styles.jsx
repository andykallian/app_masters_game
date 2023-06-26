import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom'


export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #121212;

  @media screen and (max-width: 940px){
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 1rem 1rem;
    background-color: #121212;
  }
`;

export const Select = styled.select`
  font-size: 1.2rem;
  border: none;
  border-radius: 4px;
  padding: 0.3rem;
  background-color: #fff;
  appearance:none;
  -webkit-appearance:none;
  outline:none;
  cursor:pointer;
  transition: all .3s ease-in-out;

  option {
    text-align: center;
  }

  &:focus{
    box-shadow: 0 0 10px rgba(0,0,0,.2);
  }

  &::-ms-expand {
    display: none;
  }
`;



export const HeroTitle = styled.h2`

color: #fff;
font-size: 2.5rem;
text-align: center;
margin: 2rem 0 1rem;

`

export const StyledHero = styled.div`
`;

export const StyledGame = styled.div`
  width: 30%;
  color: #fff;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #111;
  padding: 1rem;

  @media screen and (max-width: 940px) {
    width: 98%;
  }
`;



export const GamesContainer = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 940px){
    justify-content: center;
  }

`



/* Hover Styles */

export const hoverStyles1 = {
    color: '#cf2d2d',
    background: 'transparent'
};



/* */


export const H2 = styled.h2`
  margin-bottom: ${props => props.$marginbottom};
  font-size: ${props => props.$fontsize};
`;

export const P = styled.p` 
  margin-bottom: ${props => props.$marginbottom};
  display: ${props => props.$display};
  align-items: ${props => props.$alignitems};
  justify-content: ${props => props.$justifycontent};
  gap: ${props => props.$gap};
`
export const Img = styled.img`
  margin-bottom: ${props => props.$marginbottom};
  max-width: ${props => props.$maxwidth};
  width: ${props => props.$width};

  @media screen and (max-width: 940px){
    width: ${props => props.$width}
  }
`

export const H3 = styled.h3`
  margin-bottom: ${props => props.$marginbottom};
  font-size: ${props => props.$fontsize};
  align-items: ${props => props.$alignitems};
  gap: ${props => props.$gap};
  display: ${props => props.$display};
  text-align: ${props => props.$textalign};

`


export const StyledLink = styled(Link)`

  background-color: ${props => props.$backgroundcolor};
  border: ${props => props.$border};
  border-radius: ${props => props.$borderradius};
  color: ${props => props.$color};
  padding: ${props => props.$padding};
  align-items: ${props => props.$alignitens};
  align-self: ${props => props.$alignself};
  transition: ${props => props.$transition};
  text-align: ${props => props.$textalign};
  font-weight: ${props => props.$fontweight};
  font-size: ${props => props.$fontsize};
  margin-top: ${props => props.$margintop};
  width: ${props => props.$width};
  gap: 0.1rem;

  &:hover {
    ${Object.entries(hoverStyles1)
      .map(([key, value]) => `${key}: ${value};`)
      .join('\n')}
  } 

    @media screen and (max-width: 940px){
        gap: .1rem;
    }
  
`;

export const Form = styled.form`

    display: flex;
    gap: .5rem;

    @media screen and (max-width: 940px){
        display: flex;
        gap: .5rem;
    }
`;

export const Input = styled.input`

    padding: .2rem .8rem;
    border-radius: 4px;
    border: none;

    @media screen and (max-width: 940px){
        width: 9rem;
    }
`;

export const Button = styled.button`

  display: ${props => props.$display};
  align-items: ${props => props.$alignitens};
  background: ${props => props.$background};
  color: ${props => props.$color};
  border: ${props => props.$border};
  border-radius: ${props => props.$borderRadius};
  font-size: ${props => props.$fontSize};
  padding: ${props => props.$padding};
  cursor: ${props => props.$cursor};
  transition: ${props => props.$transition};

  
  &:hover {
    ${Object.entries(hoverStyles1)
      .map(([key, value]) => `${key}: ${value};`)
      .join('\n')}
  } 
    
`;


export const Container = styled.div`

  display: ${props => props.$display};
  align-items: ${props => props.$alignitems};
  justify-content: ${props => props.$justifycontent};
  text-align: ${props => props.$textalign};
  flex-direction: ${props => props.$flexdirection};
  background: ${props => props.$background};
  width: ${props => props.$width};
  max-width: ${props => props.$maxwidth};
  margin: ${props => props.$margin};
  color: ${props => props.$color};
  border: ${props => props.$border};
  border-radius: ${props => props.$borderRadius};
  font-size: ${props => props.$fontSize};
  padding: ${props => props.$padding};
  transition: ${props => props.$transition};
  gap: ${props => props.$gap};

  @media screen and (max-width: 940px) {
    width: ${props => props.$smallScreenWidth};
  }

`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; /* Ajuste a altura de acordo com sua preferência */
`;