import styled from "styled-components";
import { keyframes } from "styled-components";
import {Link} from "react-router-dom"
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

export const AboutWrapper = styled.div`
  text-align: center;
  margin: 7rem auto;
  padding-bottom: 5rem;
  width: 70%;
  color: white;
  font-family: "Cairo", sans-serif;
`;

export const CvButton = styled(Link)`
  width: 30%;
  min-width: 200px;
  height: 4rem;
  display: flex;
  margin: 0 auto 3rem auto;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  background-color: #485853;
  color: white;
  font-family: "Cairo", sans-serif;
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

export const Paragraph = styled.p`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 24px;
  background-color: hsl(162deg 30% 19.61%);
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
