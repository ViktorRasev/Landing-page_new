import styled from "styled-components";
import { keyframes } from "styled-components";
import {Link} from "react-router-dom"
import { TypeAnimation } from "react-type-animation";

const moveAnimation = keyframes`
  0% {
    transform: translateX(0); 
  }
  25% {
    transform: translateX(3px); 
  }
 50% {
    transform: translateX(0)
  }
 75% {
    transform: translateX(-3px); 
  }
  100% {
    transform: translateX(0); 
  }
`;




export const AboutPage = styled.div`
  height: 100%;
  background-image: linear-gradient(to bottom, #2b453d, #344d45, #3c554d, #455e55, #4e665d);
  padding-top: 10rem;
  font-family: "Cairo", sans-serif;
`

export const AboutWrapper = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  padding-bottom:5rem;
  width: 70%;
  font-family: "Cairo", sans-serif;
  @media(max-width: 768px) {
    width: 90%;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.2);
  flex-wrap: wrap;
  color: #7ed7c2;
  border-radius: 24px;
  justify-content: space-around;
  margin-bottom: 3rem;
`
export const Icon = styled.div`
display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
    & > img {
      width: 3rem;
      padding-top: .5rem;
    }
    & > h4 {
      font-size: .8rem;
    }
`
export const CvButton = styled(Link)`
  width: 30%;
  min-width: 200px;
  height: 4rem;
  display: flex;
  margin: 0 auto 3rem auto;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
 
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.7s ease-in-out;

  &:hover {
    background-color: #4c6761;

    > * {
      animation: ${moveAnimation} 0.5s ease-in-out;
    }
  }
`;

export const Paragraph = styled(TypeAnimation)`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 24px;
  background-color: rgba(0, 0, 0, 0.2);
  color: hsl(159.74deg 52.38% 71.18%);
  letter-spacing: 2px;

  &::selection {
    background-color: hsl(159.74deg 52.38% 71.18%);
    color: hsl(160deg 23.08% 17.84%);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;



